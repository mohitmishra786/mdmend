<div align="center">

# mdmend

*Mend your Markdown. Instantly.*

Fast, zero-dependency Markdown linter and fixer. 50 rules. 38 auto-fixable.

[![GitHub Release](https://img.shields.io/github/v/release/mohitmishra786/mdmend?style=flat-square&color=blue)](https://github.com/mohitmishra786/mdmend/releases)
[![NPM Version](https://img.shields.io/npm/v/@mohitmishra7/mdmend?style=flat-square&color=007acc)](https://www.npmjs.com/package/@mohitmishra7/mdmend)
[![Homebrew](https://img.shields.io/badge/homebrew-mohitmishra786%2Ftap%2Fmdmend-orange?style=flat-square)](https://github.com/mohitmishra786/homebrew-tap)
[![Go Report Card](https://goreportcard.com/badge/github.com/mohitmishra786/mdmend?style=flat-square)](https://goreportcard.com/report/github.com/mohitmishra786/mdmend)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

Single static binary. No Node or Python runtime required.

**Performance** (this repo, 57 markdown files): lint ~7 ms, fix dry run ~28 ms. Corpus lint ~3 ms. Run `make benchmark` for local timings; CI runs weekly via `.github/workflows/benchmark.yml`.

</div>

---

## Packages

| Package | Version | Description | Link |
| :--- | :--- | :--- | :--- |
| **npm** | [![npm](https://img.shields.io/npm/v/@mohitmishra7/mdmend.svg?label=)](https://www.npmjs.com/package/@mohitmishra7/mdmend) | Cross-platform npm package | `npm install -g @mohitmishra7/mdmend` |
| **Homebrew** | [![homebrew](https://img.shields.io/github/v/release/mohitmishra786/mdmend?label=&color=orange)](https://github.com/mohitmishra786/homebrew-tap) | macOS/Linux via Homebrew | `brew install mohitmishra786/tap/mdmend` |
| **Go** | [![go](https://img.shields.io/github/v/release/mohitmishra786/mdmend?label=)](https://pkg.go.dev/github.com/mohitmishra786/mdmend) | Go library and CLI | `go install github.com/mohitmishra786/mdmend/cmd/mdmend@latest` |
| **Scoop** | ![scoop](https://img.shields.io/badge/scoop-mdmend-blue) | Windows via Scoop | `scoop bucket add mohitmishra786 https://github.com/mohitmishra786/scoop-bucket && scoop install mdmend` |
| **DEB** | [![deb](https://img.shields.io/github/v/release/mohitmishra786/mdmend?label=)](https://github.com/mohitmishra786/mdmend/releases) | Debian/Ubuntu | `curl -fsSL https://raw.githubusercontent.com/mohitmishra786/mdmend/main/packaging/apt/install.sh \| bash` |
| **RPM** | [![rpm](https://img.shields.io/github/v/release/mohitmishra786/mdmend?label=)](https://github.com/mohitmishra786/mdmend/releases) | Fedora/RHEL/CentOS | `curl -fsSL https://raw.githubusercontent.com/mohitmishra786/mdmend/main/packaging/yum/install.sh \| bash` |
| **AUR** | ![aur](https://img.shields.io/badge/aur-mdmend--bin-blue) | Arch Linux | `yay -S mdmend-bin` |
| **Snap** | ![snap](https://img.shields.io/badge/snap-mdmend-blue) | Universal Linux | `sudo snap install mdmend` |
| **Alpine** | ![alpine](https://img.shields.io/badge/alpine-mdmend-blue) | Alpine Linux | See [docs](docs/LINUX_DISTRIBUTION.md) |
| **Flatpak** | ![flatpak](https://img.shields.io/badge/flatpak-mdmend-blue) | Universal Linux | `flatpak install io.github.mohitmishra786.mdmend` |
| **Binary** | [![release](https://img.shields.io/github/v/release/mohitmishra786/mdmend?label=)](https://github.com/mohitmishra786/mdmend/releases) | Direct download | [GitHub Releases](https://github.com/mohitmishra786/mdmend/releases) |

---

## Installation

### npm

```bash
npm install -g @mohitmishra7/mdmend
# or use without installing
npx @mohitmishra7/mdmend lint .
```

### Homebrew (macOS/Linux)

```bash
brew install mohitmishra786/tap/mdmend
```

### Go

```bash
go install github.com/mohitmishra786/mdmend/cmd/mdmend@latest
```

### Windows (Scoop)

```powershell
scoop bucket add mohitmishra786 https://github.com/mohitmishra786/scoop-bucket
scoop install mdmend
```

### Debian/Ubuntu (apt)

```bash
# Install via script
curl -fsSL https://raw.githubusercontent.com/mohitmishra786/mdmend/main/packaging/apt/install.sh | bash

# Or download .deb directly
curl -sSL https://github.com/mohitmishra786/mdmend/releases/latest/download/mdmend_1.0.1_linux_amd64.deb -o mdmend.deb
sudo dpkg -i mdmend.deb
```

### Fedora/RHEL/CentOS (yum/dnf)

```bash
# Install via script
curl -fsSL https://raw.githubusercontent.com/mohitmishra786/mdmend/main/packaging/yum/install.sh | bash

# Or download .rpm directly
sudo dnf install https://github.com/mohitmishra786/mdmend/releases/latest/download/mdmend_1.0.1_linux_amd64.rpm
```

### Arch Linux (AUR)

```bash
# Using yay
yay -S mdmend-bin

# Using paru
paru -S mdmend-bin

# Manual
git clone https://aur.archlinux.org/mdmend-bin.git
cd mdmend-bin && makepkg -si
```

### Snap

```bash
sudo snap install mdmend
```

### Flatpak

```bash
flatpak install io.github.mohitmishra786.mdmend
```

### Alpine Linux (apk)

```bash
# Using abuild (from source)
wget https://raw.githubusercontent.com/mohitmishra786/mdmend/main/packaging/alpine/APKBUILD
abuild -r
sudo apk add --allow-untrusted ~/packages/mdmend-*.apk
```

### Linux (curl installer)

```bash
curl -fsSL https://raw.githubusercontent.com/mohitmishra786/mdmend/main/scripts/install.sh | bash
```

### Download Binary

Download from [GitHub Releases](https://github.com/mohitmishra786/mdmend/releases) for your platform (latest: **v1.0.1**):
- `mdmend_*_linux_amd64.tar.gz` — Linux x64
- `mdmend_*_linux_arm64.tar.gz` — Linux ARM64
- `mdmend_*_darwin_amd64.tar.gz` — macOS Intel
- `mdmend_*_darwin_arm64.tar.gz` — macOS Apple Silicon
- `mdmend_*_windows_amd64.zip` — Windows x64
- `.deb`, `.rpm`, and `.apk` packages also available per release

## Quick Start

```bash
# Scaffold config (optionally import from .markdownlint.json)
mdmend init
mdmend init --from-markdownlint

# Lint or fix (check is a CI-friendly alias)
mdmend check .
mdmend check . --fix

# Fix all Markdown files in current directory
mdmend fix .

# Preview changes without modifying files
mdmend fix . --dry-run

# See unified diff of changes
mdmend fix . --diff

# Lint only (exit 1 if violations found)
mdmend lint .

# Lint MDX or MkDocs projects
mdmend lint docs/ --flavor mdx

# Watch and re-lint on save
mdmend lint docs/ --watch

# Get suggestions for heuristic fixes
mdmend suggest docs/

# List all available rules
mdmend rules list

# Show rule details
mdmend rules info MD040
```

## Commands

| Command | Description |
|---------|-------------|
| `mdmend check [paths...]` | Lint or fix (`--fix`) — alias for CI and GitHub Actions |
| `mdmend lint [paths...]` | Report violations without fixing |
| `mdmend fix [paths...]` | Auto-fix all fixable violations |
| `mdmend suggest [paths...]` | Show suggested fixes for heuristic rules |
| `mdmend init` | Create `.mdmend.yml` (`--from-markdownlint` imports markdownlint config) |
| `mdmend server` | Start stdio JSON-RPC language server for editor integration |
| `mdmend cache clear` | Clear the lint result cache |
| `mdmend rules list` | List all available rules |
| `mdmend rules info <id>` | Show details about a specific rule |
| `mdmend version` | Print version information |

### Global Flags

| Flag | Description |
|------|-------------|
| `--verbose` / `-v` | Per-file timing and file list |
| `--quiet` / `-q` | Summary line only |
| `--stats` | Per-rule violation frequency table |
| `--only MD040,MD034` | Run only specific rules (lint and fix) |
| `--flavor standard\|mdx\|mkdocs` | Markdown flavor for rule behavior |
| `--exit-zero` | Always exit 0 (advisory CI mode) |
| `--max-violations N` | Fail only if violations exceed N |
| `--output console\|json\|sarif` | Output format (SARIF for security dashboards) |
| `--no-cache` | Disable per-file hash cache |
| `--no-color` | Disable color output |

### Lint / Fix Flags

| Flag | Description |
|------|-------------|
| `--watch` | Re-run when files change (lint/fix) |
| `--dry-run` / `-n` | Preview changes without writing (fix) |
| `--diff` / `-d` | Output unified diffs (fix) |
| `--aggressive` | Apply heuristic fixes (MD040/MD034) |
| `--config` / `-c` | Path to config file |

## Supported Rules

50 rules total. 38 auto-fixable.

### Auto-Fixable

| Rule | Description |
|------|-------------|
| MD003 | Heading style consistency |
| MD004 | Unordered list style |
| MD005 | List indentation |
| MD007 | Unordered list indentation |
| MD009 | Trailing spaces |
| MD010 | Hard tabs |
| MD011 | Reversed link syntax |
| MD012 | Multiple blank lines |
| MD018 | No space after hash |
| MD019 | Multiple spaces after hash |
| MD020 | No space in closed ATX |
| MD021 | Multiple spaces in closed ATX |
| MD022 | Blanks around headings |
| MD023 | Headings must start at line start |
| MD026 | Trailing punctuation in heading |
| MD027 | Multiple spaces after blockquote |
| MD030 | Spaces after list markers |
| MD031 | Fenced code blank lines |
| MD032 | List blank lines |
| MD035 | Horizontal rule style |
| MD037 | Spaces inside emphasis |
| MD038 | Spaces inside code span |
| MD039 | Spaces inside link text |
| MD044 | Proper names capitalization |
| MD047 | Final newline |
| MD048 | Code fence style |
| MD049 | Emphasis style |
| MD050 | Strong style |
| MD053 | Unused link references |
| MD055 | Table pipe style |
| MD056 | Table column count |
| MD058 | Table blank lines |

### Heuristic (Smart Inference)

| Rule | Description |
|------|-------------|
| MD034 | Bare URL wrapping |
| MD040 | Code fence language inference |

### Informational (Non-Fixable)

| Rule | Description |
|------|-------------|
| MD001 | Heading level increments |
| MD013 | Line length |
| MD024 | Duplicate headings |
| MD025 | Multiple top-level headings |
| MD029 | Ordered list item prefix style |
| MD033 | Inline HTML |
| MD036 | Emphasis as heading |
| MD041 | First line heading |
| MD045 | Image alt text |
| MD051 | Link fragments |
| MD052 | Undefined references |
| MD057 | Broken links |

See [RULES.md](RULES.md) for complete documentation.

## Configuration

Create `.mdmend.yml` in your project root (or run `mdmend init`):

```yaml
flavor: standard
per_file_flavor:
  "**/*.mdx": mdx
  "docs/**": mkdocs

disable:
  - MD013
  - MD033

rules:
  MD010:
    tab_size: 2
  MD040:
    fallback: text
    confidence: 0.6

ignore:
  - node_modules/
  - "*.generated.md"
```

Migrating from markdownlint? Run `mdmend init --from-markdownlint` to import `.markdownlint.json` / `.markdownlint.yaml`. See [docs/MIGRATION.md](docs/MIGRATION.md).

### Markdown Flavors

| Flavor | Use case |
|--------|----------|
| `standard` | CommonMark-style Markdown (default) |
| `mdx` | MDX / JSX-in-Markdown projects |
| `mkdocs` | MkDocs documentation sites |

Set globally with `--flavor` or per-path with `per_file_flavor` in config.

## Library Usage (Go)

```go
package main

import (
    "fmt"
    "github.com/mohitmishra786/mdmend/pkg/mdmend"
)

func main() {
    client := mdmend.NewClient()
    
    // Lint markdown string
    result := client.LintString("# Hello\n", "test.md")
    fmt.Printf("Violations: %d\n", len(result.Violations))
    
    // Fix markdown string
    fixResult := client.FixString("# Hello\tWorld\n", "test.md")
    fmt.Printf("Fixed: %s\n", fixResult.Content)
}
```

See [pkg/mdmend](pkg/mdmend) for full API documentation.

## CI/CD Integration

### GitHub Actions (composite action)

```yaml
- uses: mohitmishra786/mdmend@v1.0.1
  with:
    args: check . --quiet
    version: 1.0.1
```

Install via npm (default) or Go:

```yaml
- uses: mohitmishra786/mdmend@v1.0.1
  with:
    install-method: go
    args: check docs/ --flavor mkdocs
```

### GitHub Actions (npm one-liner)

```yaml
- name: Lint Markdown
  run: npx @mohitmishra7/mdmend check . --output json
```

### SARIF output (CodeQL / security dashboards)

```bash
mdmend lint . --output sarif > mdmend.sarif
```

### Pre-commit Hook

```bash
#!/bin/bash
mdmend lint . || exit 1
```

### Exit Codes for CI

```bash
# Fail only if >10 violations
mdmend lint . --max-violations 10

# Advisory mode (always exit 0)
mdmend lint . --exit-zero
```

## Editor Integration

### VS Code

A minimal extension lives in [`editors/vscode/`](editors/vscode/). It runs `mdmend lint` on save and surfaces violations as diagnostics.

```bash
# Development: open editors/vscode/ in VS Code and press F5
# Or use the LSP directly from any editor that supports stdio JSON-RPC:
mdmend server
```

## Tech Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Language** | Go 1.25+ | Zero-dependency binaries, fast compilation |
| **CLI** | Cobra | Command-line argument parsing |
| **Glob** | doublestar | File pattern matching |
| **Watch** | fsnotify | `--watch` file change detection |
| **Colors** | fatih/color | Terminal output coloring |
| **Diff** | go-diff | Unified diff generation |
| **Config** | yaml.v3 | Configuration file parsing |

The tool is intentionally minimal. No framework, no runtime dependencies, just straightforward Go code that compiles to a single static binary. Each rule follows a consistent interface with `Lint()` and `Fix()` methods. Fixes are applied in phase order (Structure → Inline → Style → Heuristic → Cleanup) to avoid conflicts.

## Documentation

- [SETUP.md](SETUP.md) — Development environment setup
- [CONTRIBUTING.md](CONTRIBUTING.md) — Contribution guidelines
- [SECURITY.md](SECURITY.md) — Security policy
- [RULES.md](RULES.md) — Complete rules documentation
- [docs/MIGRATION.md](docs/MIGRATION.md) — Migrating from markdownlint
- [docs/ENTERPRISE.md](docs/ENTERPRISE.md) — Org deployment patterns
- [docs/RULE_AUDIT.md](docs/RULE_AUDIT.md) — Rule coverage audit
- [editors/vscode/README.md](editors/vscode/README.md) — VS Code extension

## License

MIT License — see [LICENSE](LICENSE) for details.
