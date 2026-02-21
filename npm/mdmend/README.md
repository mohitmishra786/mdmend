# mdmend

> Fast, zero-dependency Markdown linter and fixer. Fixes 48 common Markdown issues instantly.

[![npm version](https://img.shields.io/npm/v/mdmend)](https://www.npmjs.com/package/mdmend)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
npm install -g mdmend
# or
npx mdmend lint .
```

## Usage

```bash
# Lint current directory
mdmend lint .

# Lint a single file
mdmend lint README.md

# Auto-fix all fixable violations
mdmend fix .

# Preview fixes without writing
mdmend fix . --dry-run

# Show unified diffs
mdmend fix . --diff

# Apply heuristic fixes (language detection, URL wrapping)
mdmend fix . --aggressive

# Lint only specific rules
mdmend lint . --only MD040,MD034

# Show rule frequency breakdown
mdmend lint . --stats

# List all available rules
mdmend rules list

# Show details about a specific rule
mdmend rules info MD040

# JSON output (for CI/tooling integration)
mdmend lint . --output json

# Advisory CI mode (always exits 0)
mdmend lint . --exit-zero

# Show suggestions for heuristic rules
mdmend suggest .
```

## Rules

mdmend implements 48 rules (MD003–MD058) covering:

- Heading style and structure
- List formatting
- Code fence language detection (MD040)
- Bare URL wrapping (MD034)
- Table formatting
- Blank line consistency
- And much more

38 of the 48 rules are **auto-fixable** with `mdmend fix`.

```
mdmend rules list          # Show all rules
mdmend rules list --fixable  # Show only auto-fixable rules
mdmend rules info MD040    # Details about a specific rule
```

## CI Integration

```yaml
# GitHub Actions
- name: Lint Markdown
  run: npx mdmend lint . --output json --exit-zero
```

```bash
# Fail CI if more than 10 violations
mdmend lint . --max-violations 10
```

## Supported Platforms

| Platform | x64 | arm64 |
|----------|-----|-------|
| macOS    | yes | yes   |
| Linux    | yes | yes   |
| Windows  | yes | —     |

## Links

- [GitHub](https://github.com/mohitmishra786/mdmend)
- [Rules Reference](https://github.com/mohitmishra786/mdmend/blob/main/RULES.md)
- [Bug Reports](https://github.com/mohitmishra786/mdmend/issues)

## License

MIT
