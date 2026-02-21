# mdmend

> Mend your Markdown. Instantly.

`mdmend` is a fast, zero-dependency Markdown linter and fixer written in Go.

## Installation

### macOS (Homebrew)

```bash
brew install mohitmishra786/tap/mdmend
```

### Linux

```bash
curl -sS https://raw.githubusercontent.com/mohitmishra786/mdmend/main/scripts/install.sh | bash
```

### Windows (Scoop)

```powershell
scoop bucket add mohitmishra786 https://github.com/mohitmishra786/scoop-bucket
scoop install mdmend
```

### npm

```bash
npm install -g @mdmend/cli
```

### Go

```bash
go install github.com/mohitmishra786/mdmend/cmd/mdmend@latest
```

### Download Binary

Download from [GitHub Releases](https://github.com/mohitmishra786/mdmend/releases).

## Quick Start

```bash
# Fix all Markdown files in current directory
mdmend fix .

# Preview changes without modifying files
mdmend fix . --dry-run

# See unified diff of changes
mdmend fix . --diff

# Lint only (exit 1 if violations found)
mdmend lint .

# Get suggestions for heuristic fixes
mdmend suggest docs/
```

## Commands

| Command | Description |
|---------|-------------|
| `mdmend fix [paths...]` | Auto-fix all fixable violations |
| `mdmend lint [paths...]` | Report violations without fixing |
| `mdmend suggest [paths...]` | Show suggested fixes for heuristic rules |
| `mdmend version` | Print version information |

### Fix Command Flags

| Flag | Description |
|------|-------------|
| `--dry-run` | Preview changes without writing |
| `--diff` | Output unified diffs |
| `--aggressive` | Apply heuristic fixes (MD040/MD034) |
| `--config` | Path to config file |
| `--output json` | JSON output format |

## Supported Rules

### Auto-Fixable

| Rule | Description |
|------|-------------|
| MD009 | Trailing spaces |
| MD010 | Hard tabs |
| MD011 | Reversed link syntax |
| MD012 | Multiple blank lines |
| MD018-MD023 | Heading formatting |
| MD026 | Trailing punctuation in heading |
| MD027 | Multiple spaces after blockquote |
| MD030 | Spaces after list markers |
| MD031 | Fenced code blank lines |
| MD032 | List blank lines |
| MD035 | Horizontal rule style |
| MD037-MD039 | Spaces in emphasis/links |
| MD044 | Proper names capitalization |
| MD047 | Final newline |
| MD048 | Code fence style |
| MD049-MD050 | Emphasis/strong style |
| MD053 | Unused link references |
| MD055 | Table pipe style |
| MD058 | Table blank lines |

### Heuristic (Smart Inference)

| Rule | Description |
|------|-------------|
| MD034 | Bare URL wrapping |
| MD040 | Code fence language inference |

See [RULES.md](RULES.md) for complete documentation.

## Configuration

Create `.mdmend.yml` in your project root:

```yaml
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

## Library Usage

Use mdmend as a Go library:

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

### GitHub Actions

```yaml
- name: Lint Markdown
  run: |
    go install github.com/mohitmishra786/mdmend/cmd/mdmend@latest
    mdmend lint "**/*.md"
```

### Pre-commit Hook

```bash
#!/bin/bash
mdmend lint . || exit 1
```

## Documentation

- [SETUP.md](SETUP.md) - Development environment setup
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [SECURITY.md](SECURITY.md) - Security policy
- [RULES.md](RULES.md) - Complete rules documentation

## Distribution Plans

- [npm Distribution](docs/NPM_DISTRIBUTION.md)
- [Linux Distribution](docs/LINUX_DISTRIBUTION.md)
- [Homebrew Distribution](docs/HOMEBREW_DISTRIBUTION.md)
- [Windows Distribution](docs/WINDOWS_DISTRIBUTION.md)

## License

MIT License - see [LICENSE](LICENSE) for details.
