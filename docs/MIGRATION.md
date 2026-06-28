# Migrating from markdownlint to mdmend

This guide helps teams replace [markdownlint](https://github.com/DavidAnson/markdownlint) (Node.js) with [mdmend](https://github.com/mohitmishra786/mdmend) (Go binary). mdmend implements the same **MD###** rule IDs, so most rule names and mental models carry over directly.

## Why migrate?

| | markdownlint | mdmend |
|---|-------------|--------|
| Runtime | Node.js + npm packages | Single static binary |
| Auto-fix | Limited (via markdownlint-cli2 `--fix`) | 38 rules auto-fixable |
| Heuristics | Rule-specific | MD040 language inference, MD034 URL wrapping |
| Config | `.markdownlint.json` / `.markdownlintrc` | `.mdmend.yml` |
| Speed | Good | Typically faster on large corpora (see `make benchmark`) |

## Quick start

```bash
# Install mdmend
npm install -g @mohitmishra7/mdmend
# or: brew install mohitmishra786/tap/mdmend

# Lint (replaces markdownlint-cli / markdownlint-cli2)
mdmend lint .

# Auto-fix (replaces markdownlint-cli2 --fix)
mdmend fix .

# Preview fixes
mdmend fix . --dry-run --diff
```

## Config file migration

### Disable rules

**markdownlint** (`.markdownlint.json`):

```json
{
  "MD013": false,
  "MD033": false
}
```

**mdmend** (`.mdmend.yml`):

```yaml
disable:
  - MD013
  - MD033
```

### Rule-specific options

**markdownlint**:

```json
{
  "MD003": { "style": "atx" },
  "MD004": { "style": "dash" },
  "MD007": { "indent": 2 },
  "MD010": { "code_blocks": true, "spaces_per_tab": 4 },
  "MD013": { "line_length": 120, "code_blocks": false, "tables": false },
  "MD024": { "siblings_only": true },
  "MD025": { "level": 1, "front_matter_title": "" },
  "MD026": { "punctuation": ".,;:!?" },
  "MD029": { "style": "ordered" },
  "MD030": { "ul_single": 1, "ol_single": 1 },
  "MD035": { "style": "---" },
  "MD036": { "punctuation": ".,;:!?" },
  "MD040": false,
  "MD044": { "names": ["JavaScript", "GitHub"] },
  "MD045": { "allowed_images": [] },
  "MD048": { "style": "backtick" },
  "MD049": { "style": "asterisk" },
  "MD050": { "style": "asterisk" }
}
```

**mdmend**:

```yaml
disable:
  - MD040   # if you had MD040: false

rules:
  MD003:
    style: atx
  MD004:
    style: dash
  MD007:
    indent: 2
  MD010:
    tab_size: 4
  MD013:
    line_length: 120
    code_blocks: false
    tables: false
  MD024:
    allow_different_nesting: true   # maps to siblings_only: true
  MD025:
    level: 1
    front_matter: true
  MD026:
    punctuation: ".,;:!?"
  MD036:
    punctuation: ".,;:!?"
  MD044:
    names:
      - JavaScript
      - GitHub
  MD048:
    style: backtick

tab_size: 4
```

mdmend also reads `.markdownlint.json` if no `.mdmend.yml` is present (basic fields such as `disable` and `tab_size`). For full control, migrate to `.mdmend.yml`.

### Ignore patterns

**markdownlint** uses `.markdownlintignore` or inline `ignores` in config.

**mdmend** uses the `ignore` key in `.mdmend.yml` (gitignore syntax) and respects `.mdmendignore` / `.gitignore`:

```yaml
ignore:
  - node_modules/
  - vendor/
  - "*.generated.md"
  - CHANGELOG.md
```

## CLI command mapping

| markdownlint | mdmend |
|--------------|--------|
| `markdownlint '**/*.md'` | `mdmend lint .` |
| `markdownlint-cli2 '**/*.md'` | `mdmend lint .` |
| `markdownlint-cli2 --fix '**/*.md'` | `mdmend fix .` |
| `markdownlint --disable MD013 MD033` | `mdmend lint . --rules ~MD013,~MD033` |
| `markdownlint --enable MD040` | `mdmend lint . --only MD040` |
| JSON / SARIF output | `mdmend lint . --output json` |

## Rule mapping table

mdmend supports **48 rules** using the same IDs as markdownlint. Behavior is aligned where possible; differences are noted.

| Rule | markdownlint name | mdmend | Auto-fix | Notes |
|------|-------------------|--------|----------|-------|
| MD003 | heading-style | ✅ | Yes | Styles: `atx`, `atx_closed`, `setext` |
| MD004 | ul-style | ✅ | Yes | Styles: `asterisk`, `dash`, `plus`, `consistent` |
| MD005 | list-indent | ✅ | Yes | Consistent sibling indentation |
| MD007 | ul-indent | ✅ | Yes | Configurable `indent` (default 2) |
| MD009 | no-trailing-spaces | ✅ | Yes | |
| MD010 | no-hard-tabs | ✅ | Yes | `tab_size` / `spaces_per_tab` |
| MD011 | no-reversed-links | ✅ | Yes | |
| MD012 | no-multiple-blanks | ✅ | Yes | |
| MD013 | line-length | ✅ | No | Disabled by default in mdmend |
| MD014 | commands-show-output | ✅ | Yes | Smart `$` detection |
| MD018 | no-missing-space-atx | ✅ | Yes | |
| MD019 | no-multiple-space-atx | ✅ | Yes | |
| MD020 | no-missing-space-closed-atx | ✅ | Yes | |
| MD021 | no-multiple-space-closed-atx | ✅ | Yes | |
| MD022 | blanks-around-headings | ✅ | Yes | |
| MD023 | heading-start-left | ✅ | Yes | |
| MD024 | no-duplicate-heading | ✅ | No | `allow_different_nesting` ≈ `siblings_only` |
| MD025 | single-title | ✅ | No | `level`, `front_matter` options |
| MD026 | no-trailing-punctuation | ✅ | Yes | Configurable `punctuation` |
| MD027 | no-multiple-space-blockquote | ✅ | Yes | |
| MD028 | no-blanks-blockquote | ✅ | Yes | |
| MD030 | list-marker-space | ✅ | Yes | Normalizes list marker spacing |
| MD031 | blanks-around-fences | ✅ | Yes | |
| MD032 | blanks-around-lists | ✅ | Yes | |
| MD033 | no-inline-html | ✅ | No | Disabled by default in mdmend |
| MD034 | no-bare-urls | ✅ | Yes | `style: angle` or `link`; heuristic |
| MD035 | hr-style | ✅ | Yes | Default `---` |
| MD036 | no-emphasis-as-heading | ✅ | No | |
| MD037 | no-space-in-emphasis | ✅ | Yes | |
| MD038 | no-space-in-code | ✅ | Yes | |
| MD039 | no-space-in-links | ✅ | Yes | |
| MD040 | fenced-code-language | ✅ | Yes | **mdmend adds language inference** |
| MD041 | first-line-heading | ✅ | Yes | Can promote first line to `#` heading |
| MD042 | no-empty-links | ✅ | No | |
| MD043 | required-headings | ✅ | No | `headings` list in config |
| MD044 | proper-names | ✅ | Yes | Configurable `names` list |
| MD045 | no-alt-text | ✅ | No | Suggestions only |
| MD047 | single-trailing-newline | ✅ | Yes | |
| MD048 | code-fence-style | ✅ | Yes | `backtick` or `tilde` |
| MD049 | emphasis-style | ✅ | Yes | `asterisk` or `underscore` |
| MD050 | strong-style | ✅ | Yes | `asterisk` or `underscore` |
| MD051 | link-fragments | ✅ | Yes | Fragment validation + suggestions |
| MD052 | reference-links | ✅ | No | |
| MD053 | link-image-reference-definitions | ✅ | Yes | Removes unused reference defs |
| MD055 | table-pipe-style | ✅ | Yes | Leading/trailing pipe normalization |
| MD056 | table-column-count | ✅ | Yes | Pads short rows when configured |
| MD057 | relative-links | ✅ | No | Broken relative link detection |
| MD058 | blanks-around-tables | ✅ | Yes | |
| MD001 | heading-increment | — | No | Planned / report-only in roadmap |
| MD002 | first-heading-h1 | — | — | Deprecated in markdownlint |
| MD029 | ol-prefix | — | No | Ordered list prefix style |
| MD046 | code-block-style | ✅ | No | Fenced vs indented preference (`style: consistent\|fenced\|indented`) |
| MD054 | link-image-style | ✅ | No | Inline vs reference preference |
| MD066 | footnote-validation | ✅ | No | Footnote refs must have definitions |
| MD067 | footnote-definition-order | ✅ | No | Definition order should match ref order |
| MD068 | empty-footnote-definition | ✅ | No | Footnote definitions must have body |
| MD070 | nested-code-fence | ✅ | Yes (opt-in) | Extend fences in markdown code blocks (`enabled: false` default) |
| MD073 | toc-validation | ✅ | Yes (opt-in) | Validate/rebuild `<!-- toc -->` blocks (`enabled: false` default) |

Rules marked **—** are not yet implemented in mdmend. Disable them in markdownlint configs you migrate, or track them in a follow-up lint pass.

## CI migration

### GitHub Actions (before)

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v16
  with:
    config: .markdownlint.json
    globs: '**/*.md'
```

### GitHub Actions (after)

```yaml
- name: Install mdmend
  run: npm install -g @mohitmishra7/mdmend

- name: Lint Markdown
  run: mdmend lint . --output json

# Or use the official action
- uses: mohitmishra786/mdmend@v1
  with:
    args: lint .
```

### Pre-commit (before)

```yaml
- repo: https://github.com/DavidAnson/markdownlint-cli2
  rev: v0.13.0
  hooks:
    - id: markdownlint-cli2
```

### Pre-commit (after)

```yaml
- repo: local
  hooks:
    - id: mdmend
      name: mdmend lint
      entry: mdmend lint
      language: system
      types: [markdown]
```

## Editor migration

| Editor | markdownlint | mdmend |
|--------|--------------|--------|
| VS Code | `DavidAnson.vscode-markdownlint` | [editors/vscode](../editors/vscode/) extension |
| Neovim / Vim | ALE, null-ls markdownlint | `mdmend lint %` on save |
| JetBrains | third-party plugins | File Watcher → `mdmend lint $FilePath$` |

## Recommended migration workflow

1. **Add `.mdmend.yml`** alongside existing `.markdownlint.json` with equivalent `disable` and `rules` settings.
2. **Run both tools in parallel** for one sprint: `markdownlint '**/*.md' && mdmend lint .`
3. **Compare output** on a sample corpus; tune `disable` / `rules` until parity is acceptable.
4. **Switch CI** to `mdmend lint` (keep `--exit-zero` during transition if needed).
5. **Remove** `markdownlint`, `.markdownlint.json`, and related npm devDependencies.
6. **Enable auto-fix** in local workflows: `mdmend fix .` or the VS Code extension.

## Getting help

- Rule details: `mdmend rules info MD040`
- Full rule list: `mdmend rules list`
- Enterprise patterns: [ENTERPRISE.md](ENTERPRISE.md)