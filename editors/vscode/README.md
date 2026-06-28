# mdmend VS Code Extension

Minimal VS Code integration for [mdmend](https://github.com/mohitmishra786/mdmend). The extension spawns `mdmend lint` on save (default) and surfaces violations as editor diagnostics.

## Prerequisites

Install the `mdmend` binary and ensure it is on your `PATH`:

```bash
# npm
npm install -g @mohitmishra7/mdmend

# Homebrew
brew install mohitmishra786/tap/mdmend

# Go
go install github.com/mohitmishra786/mdmend/cmd/mdmend@latest
```

## Installation

### From source (development)

1. Open `editors/vscode/` in VS Code.
2. Press **F5** to launch an Extension Development Host.
3. Open a Markdown file in the new window.

### From VSIX (when published)

```bash
cd editors/vscode
npm install
npx vsce package
code --install-extension mdmend-0.1.0.vsix
```

## Usage

| Command | Description |
|---------|-------------|
| `mdmend: Lint Current File` | Lint the active Markdown file |
| `mdmend: Fix Current File` | Apply auto-fixes to the active file |
| `mdmend: Lint Workspace` | Lint the workspace root and show diagnostics |

By default, lint runs on every Markdown save. Configure behavior in **Settings → mdmend**.

## Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `mdmend.path` | `mdmend` | Path to the mdmend binary |
| `mdmend.lintOnSave` | `true` | Lint Markdown files on save |
| `mdmend.lintOnOpen` | `false` | Lint Markdown files when opened |
| `mdmend.fixOnSave` | `false` | Fix Markdown files on save |
| `mdmend.config` | `""` | Path to `.mdmend.yml` (auto-detected when empty) |
| `mdmend.extraArgs` | `[]` | Extra CLI flags (e.g. `["--rules", "~MD013"]`) |

## Example settings.json

```json
{
  "mdmend.path": "mdmend",
  "mdmend.lintOnSave": true,
  "mdmend.fixOnSave": false,
  "mdmend.extraArgs": ["--rules", "~MD013,~MD033"]
}
```

## How it works

This extension does **not** implement a Language Server Protocol (LSP) server. It shells out to the `mdmend` CLI with `--output json`, parses the result, and maps violations to VS Code diagnostics. Fixable issues appear as warnings; report-only issues appear as errors.

For CI and batch workflows, use the CLI directly or see [docs/ENTERPRISE.md](../../docs/ENTERPRISE.md).

## License

MIT