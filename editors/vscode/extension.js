const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const vscode = require("vscode");

const DIAGNOSTIC_SOURCE = "mdmend";

/** @type {vscode.DiagnosticCollection} */
let diagnosticCollection;

/**
 * @param {"lint" | "fix"} command
 * @param {string} filePath
 * @param {import("vscode").WorkspaceConfiguration} config
 * @returns {Promise<{ files: Array<{ path: string, violations: Array<Record<string, unknown>> }>, summary?: Record<string, number> } | null>}
 */
function runMdmend(command, filePath, config) {
  return new Promise((resolve) => {
    const binary = config.get("path", "mdmend");
    const configPath = config.get("config", "");
    const extraArgs = config.get("extraArgs", []);

    const args = [command, filePath, "--output", "json", "--no-color", "--exit-zero"];
    if (configPath) {
      args.push("--config", configPath);
    }
    args.push(...extraArgs);

    const cwd = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
    const proc = spawn(binary, args, { cwd, shell: process.platform === "win32" });

    let stdout = "";
    let stderr = "";

    proc.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    proc.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    proc.on("error", (err) => {
      vscode.window.showErrorMessage(`mdmend: failed to run "${binary}": ${err.message}`);
      resolve(null);
    });

    proc.on("close", (code) => {
      if (!stdout.trim()) {
        if (stderr.trim()) {
          vscode.window.showWarningMessage(`mdmend: ${stderr.trim()}`);
        }
        resolve({ files: [], summary: { total_violations: 0 } });
        return;
      }

      try {
        resolve(JSON.parse(stdout));
      } catch (err) {
        vscode.window.showErrorMessage(`mdmend: invalid JSON output (${err.message})`);
        resolve(null);
      }
    });
  });
}

/**
 * @param {Record<string, unknown>} violation
 * @returns {vscode.Diagnostic}
 */
function toDiagnostic(violation) {
  const line = Math.max(0, Number(violation.line) - 1);
  const column = Math.max(0, Number(violation.column) - 1);
  const range = new vscode.Range(line, column, line, column + 1);

  const severity = violation.fixable
    ? vscode.DiagnosticSeverity.Warning
    : vscode.DiagnosticSeverity.Error;

  let message = `[${violation.rule}] ${violation.message}`;
  if (violation.suggested) {
    message += ` (suggested: ${violation.suggested})`;
  }

  const diagnostic = new vscode.Diagnostic(range, message, severity);
  diagnostic.source = DIAGNOSTIC_SOURCE;
  diagnostic.code = String(violation.rule);
  return diagnostic;
}

/**
 * @param {vscode.Uri} documentUri
 * @param {{ files: Array<{ path: string, violations: Array<Record<string, unknown>> }> } | null} result
 */
function applyDiagnostics(documentUri, result) {
  if (!result) {
    return;
  }

  const normalized = path.normalize(documentUri.fsPath);
  const fileResult = result.files.find(
    (f) => path.normalize(f.path) === normalized || path.basename(f.path) === path.basename(normalized)
  );

  if (!fileResult || fileResult.violations.length === 0) {
    diagnosticCollection.set(documentUri, []);
    return;
  }

  diagnosticCollection.set(documentUri, fileResult.violations.map(toDiagnostic));
}

/**
 * @param {vscode.TextDocument} document
 */
async function lintDocument(document) {
  if (document.languageId !== "markdown") {
    return;
  }

  const config = vscode.workspace.getConfiguration("mdmend");
  const result = await runMdmend("lint", document.uri.fsPath, config);
  applyDiagnostics(document.uri, result);
}

/**
 * @param {vscode.TextDocument} document
 */
async function fixDocument(document) {
  if (document.languageId !== "markdown") {
    return;
  }

  const config = vscode.workspace.getConfiguration("mdmend");
  const result = await runMdmend("fix", document.uri.fsPath, config);

  if (!result) {
    return;
  }

  const editor = vscode.window.activeTextEditor;
  if (editor && editor.document.uri.toString() === document.uri.toString()) {
    try {
      const text = fs.readFileSync(document.uri.fsPath, "utf8");
      const fullRange = new vscode.Range(
        document.positionAt(0),
        document.positionAt(document.getText().length)
      );
      const edit = new vscode.WorkspaceEdit();
      edit.replace(document.uri, fullRange, text);
      await vscode.workspace.applyEdit(edit);
    } catch (err) {
      vscode.window.showWarningMessage(`mdmend: fix applied on disk; reload file to see changes (${err.message})`);
    }
    await lintDocument(document);
    vscode.window.showInformationMessage("mdmend: fix applied.");
  }
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  diagnosticCollection = vscode.languages.createDiagnosticCollection(DIAGNOSTIC_SOURCE);
  context.subscriptions.push(diagnosticCollection);

  const config = () => vscode.workspace.getConfiguration("mdmend");

  context.subscriptions.push(
    vscode.commands.registerCommand("mdmend.lint", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor || editor.document.languageId !== "markdown") {
        vscode.window.showWarningMessage("mdmend: open a Markdown file first.");
        return;
      }
      await lintDocument(editor.document);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("mdmend.fix", async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor || editor.document.languageId !== "markdown") {
        vscode.window.showWarningMessage("mdmend: open a Markdown file first.");
        return;
      }
      await fixDocument(editor.document);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("mdmend.lintWorkspace", async () => {
      const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
      if (!workspaceFolder) {
        vscode.window.showWarningMessage("mdmend: no workspace folder open.");
        return;
      }

      const result = await runMdmend("lint", workspaceFolder.uri.fsPath, config());
      if (!result) {
        return;
      }

      for (const file of result.files) {
        const uri = vscode.Uri.file(path.isAbsolute(file.path) ? file.path : path.join(workspaceFolder.uri.fsPath, file.path));
        applyDiagnostics(uri, { files: [file], summary: result.summary });
      }

      const total = result.summary?.total_violations ?? 0;
      vscode.window.showInformationMessage(`mdmend: ${total} violation(s) across workspace.`);
    })
  );

  context.subscriptions.push(
    vscode.workspace.onDidSaveTextDocument(async (document) => {
      if (document.languageId !== "markdown") {
        return;
      }
      if (config().get("fixOnSave", false)) {
        await fixDocument(document);
      } else if (config().get("lintOnSave", true)) {
        await lintDocument(document);
      }
    })
  );

  context.subscriptions.push(
    vscode.workspace.onDidOpenTextDocument(async (document) => {
      if (document.languageId !== "markdown") {
        return;
      }
      if (config().get("lintOnOpen", false)) {
        await lintDocument(document);
      }
    })
  );
}

function deactivate() {
  diagnosticCollection?.clear();
  diagnosticCollection?.dispose();
}

module.exports = { activate, deactivate };