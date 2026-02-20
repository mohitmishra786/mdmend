# mdmend

> **Mend your Markdown. Instantly.**

`mdmend` is a fast, zero-dependency Markdown linter and fixer written in Go. It automatically fixes common Markdown linting issues and provides intelligent suggestions for code fence language detection (MD040) and bare URL wrapping (MD034).

## Features

- **Single binary** - No runtime dependencies, installs in seconds
- **Fast** - Parallel file processing with goroutines
- **Smart fixes** - Intelligent code fence language inference for MD040
- **Safe** - Dry-run mode, unified diffs, atomic writes
- **Configurable** - YAML config file compatible with `.markdownlint.json`
- **Zero-runtime deps** - Unlike `markdownlint-cli2`, no Node.js required

## Installation

### Homebrew (macOS/Linux)

```bash
brew install mohitmishra786/tap/mdmend
```

### Go

```bash
go install github.com/mohitmishra786/mdmend/cmd/mdmend@latest
```

### Direct Download

Download the latest release from [GitHub Releases](https://github.com/mohitmishra786/mdmend/releases).

### From Source

```bash
git clone https://github.com/mohitmishra786/mdmend.git
cd mdmend
make install
```

## Quick Start

```bash
# Fix all Markdown files in current directory
mdmend fix .

# Preview changes without modifying files
mdmend fix . --dry-run

# See unified diff of changes
mdmend fix . --diff

# Lint only (exit 1 if violations found)
mdmend lint "**/*.md"

# Get suggestions for heuristic fixes (MD040, MD034)
mdmend suggest docs/
```

## Commands

### `mdmend fix [paths...]`

Auto-fix all fixable Markdown lint violations.

```bash
mdmend fix .                          # Fix all .md files recursively
mdmend fix docs/ --dry-run            # Preview changes in docs/
mdmend fix README.md --diff           # Show diff for single file
mdmend fix . --aggressive             # Apply all fixes including heuristics
```

**Flags:**

| Flag | Short | Description |
|------|-------|-------------|
| `--dry-run` | `-n` | Show what would change, don't write files |
| `--diff` | `-d` | Output unified diffs instead of writing |
| `--aggressive` | | Apply heuristic fixes (MD040/MD034) without prompting |
| `--config` | `-c` | Path to config file (default: `.mdmend.yml`) |
| `--output` | `-o` | Output format: console\|json (default: console) |
| `--workers` | | Number of parallel workers (default: CPU count) |

### `mdmend lint [paths...]`

Report violations without fixing. Exit code is 1 if any violations are found.

```bash
mdmend lint .                         # Lint all files
mdmend lint "**/*.md" --output json   # JSON output for CI
```

### `mdmend suggest [paths...]`

Show suggested fixes for heuristic rules like MD040 (code fence language).

```bash
mdmend suggest docs/ --rules MD040
```

### `mdmend version`

Print version information.

## Supported Rules

### Auto-Fixable (Mechanical)

| Rule | Description |
|------|-------------|
| MD009 | Trailing spaces |
| MD010 | Hard tabs |
| MD011 | Reversed link syntax |
| MD012 | Multiple consecutive blank lines |
| MD018 | No space after `#` in ATX heading |
| MD019 | Multiple spaces after `#` in ATX |
| MD020 | No space inside hashes (closed ATX) |
| MD021 | Multiple spaces inside hashes (closed ATX) |
| MD022 | Headings not surrounded by blank lines |
| MD023 | Headings not at start of line |
| MD026 | Trailing punctuation in heading |
| MD027 | Multiple spaces after blockquote `>` |
| MD030 | Spaces after list markers |
| MD031 | Fenced code blocks not surrounded by blank lines |
| MD032 | Lists not surrounded by blank lines |
| MD035 | Horizontal rule style inconsistency |
| MD037 | Spaces inside emphasis markers |
| MD038 | Spaces inside code span |
| MD039 | Spaces inside link text |
| MD044 | Proper names capitalization |
| MD047 | File does not end with single newline |
| MD048 | Code fence style inconsistency |
| MD049 | Emphasis style inconsistency |
| MD050 | Strong style inconsistency |
| MD053 | Unused link/image reference definitions |
| MD055 | Table pipe style |
| MD058 | Tables not surrounded by blank lines |

### Heuristic (Smart Inference)

| Rule | Description |
|------|-------------|
| MD034 | Bare URL auto-wrapping (skips code spans/blocks) |
| MD040 | Code fence language inference from content/hebang/context |

## Configuration

Create `.mdmend.yml` in your project root:

```yaml
# Rules to disable entirely
disable:
  - MD013   # line length — let Prettier handle it
  - MD033   # inline HTML — we use it intentionally

# Rule-specific config
rules:
  MD010:
    tab_size: 2          # spaces to replace tabs with
  MD026:
    punctuation: ".,;:!" # which chars to strip from headings
  MD034:
    style: angle         # angle | link
  MD040:
    fallback: text       # language when inference fails
    confidence: 0.6      # minimum confidence threshold
  MD044:
    names:               # proper names to enforce
      - JavaScript
      - TypeScript
      - GitHub
      - macOS
  MD048:
    style: backtick      # backtick | tilde

# Files/dirs to ignore (gitignore syntax)
ignore:
  - node_modules/
  - vendor/
  - "*.generated.md"
  - CHANGELOG.md

# Global settings
tab_size: 4
aggressive: false
```

## MD040 Language Inference

`mdmend` intelligently infers code fence languages from:

1. **Shebang lines**: `#!/bin/bash` → `bash`, `#!/usr/bin/env python3` → `python`
2. **Content patterns**: JSON, YAML, SQL, Dockerfile, Go, Rust, etc.
3. **Heading context**: "## Docker Setup" above a bare fence → `dockerfile`
4. **File mentions**: "Save this as config.yml" → `yaml`
5. **Fallback**: Configurable (default: `text`)

## Output Formats

### Console (default)

```
mdmend v1.0.0 — scanning 47 files with 8 workers

docs/api/authentication.md
  ✗ MD010:12   hard tab → replaced with 4 spaces
  ✗ MD031:34   missing blank line before fenced block → inserted
  ✗ MD040:34   no language on code block → inferred: bash (confidence: 0.91)

─────────────────────────────────────────────
47 files scanned · 3 files would change · 5 violations fixed
```

### JSON

```json
{
  "timestamp": "2024-01-15T10:30:00Z",
  "files": [
    {
      "path": "docs/api.md",
      "violations": [
        {"rule": "MD010", "line": 12, "column": 1, "message": "Hard tab", "fixable": true}
      ],
      "fixed": 1
    }
  ],
  "summary": {
    "total_files": 47,
    "files_with_issues": 3,
    "total_violations": 5
  }
}
```

## CI/CD Integration

### GitHub Actions

```yaml
name: Markdown
on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: mohitmishra786/mdmend-action@v1
        with:
          args: lint "**/*.md"
```

### Pre-commit Hook

```bash
#!/bin/bash
mdmend lint . --rules ~MD013,~MD033 || exit 1
```

## Comparison

| Feature | mdmend | markdownlint-cli2 | remark-lint |
|---------|--------|-------------------|-------------|
| Single binary | ✅ | ❌ (Node.js) | ❌ (Node.js) |
| Cold start | ~5ms | ~200ms | ~300ms |
| MD040 inference | ✅ Smart | ❌ | ❌ |
| Parallel processing | ✅ | ✅ | ❌ |
| Cross-platform builds | ✅ Easy | ❌ Complex | ❌ Complex |

## Development

```bash
# Clone and build
git clone https://github.com/mohitmishra786/mdmend.git
cd mdmend
make build

# Run tests
make test

# Run on itself
make self-lint

# Release
make release
```

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to the main repository.

## Acknowledgments

Inspired by [`markdownlint`](https://github.com/DavidAnson/markdownlint) and built with:
- [goldmark](https://github.com/yuin/goldmark) - Markdown parser
- [cobra](https://github.com/spf13/cobra) - CLI framework
- [doublestar](https://github.com/bmatcuk/doublestar) - Glob matching
