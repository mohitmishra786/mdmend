# AGENTS.md

Guidelines for AI coding agents working in this repository.

## Project Overview

`mdmend` is a fast, zero-dependency Markdown linter and fixer written in Go. It automatically fixes common Markdown linting issues and provides intelligent suggestions for code fence language detection (MD040) and bare URL wrapping (MD034).

## Build/Lint/Test Commands

### Build
```bash
make build              # Build the binary
make build-all          # Build for all platforms (Linux, macOS, Windows)
make install            # Install to GOPATH/bin
```

### Test
```bash
make test               # Run all tests with coverage
go test -v -race -coverprofile=coverage.out ./...  # Direct test command

# Run a single test
go test -v -run TestMD009 ./internal/rules/        # Run specific test by name
go test -v -run TestMD009 ./internal/rules/...     # Run test in specific package
go test -v -run TestMD034 ./internal/rules/        # Run another single test
go test -v -run TestFixer ./internal/fixer/        # Run tests matching pattern

# Generate HTML coverage report
make test-coverage
```

### Lint
```bash
make lint               # Run golangci-lint
make fmt                # Format code with go fmt
make vet                # Run go vet
make self-lint          # Run mdmend on itself (excludes MD013, MD033, MD024, MD041)
```

### Other
```bash
make deps               # Download and tidy dependencies
make clean              # Remove build artifacts
make run                # Build and run on current directory with --dry-run
```

## Project Structure

```
mdmend/
├── cmd/mdmend/         # Main application entry point
│   └── main.go         # CLI commands and orchestration
├── internal/
│   ├── config/         # Configuration loading and defaults
│   ├── fixer/          # Fix application logic
│   ├── inferrer/       # Language inference for MD040
│   ├── linter/         # Linting logic
│   ├── parser/         # Markdown parsing utilities
│   ├── reporter/       # Output formatting (console, JSON, diff)
│   ├── rules/          # All markdown lint rules (MD009, MD010, etc.)
│   ├── walker/         # File discovery and glob matching
│   └── worker/         # Parallel processing pool
├── pkg/                # Public packages (if any)
├── testdata/           # Test fixtures
│   ├── fixtures/       # Input markdown files for testing
│   └── golden/         # Expected output files
├── go.mod              # Go module definition
├── Makefile            # Build automation
└── .mdmend.yml         # Default configuration
```

## Code Style Guidelines

### Imports

```go
// Standard library imports first
import (
    "fmt"
    "os"
    "strings"
    
    // Third-party imports second (separated by blank line)
    "github.com/spf13/cobra"
    "gopkg.in/yaml.v3"
    
    // Local imports third (separated by blank line)
    "github.com/mohitmishra786/mdmend/internal/config"
    "github.com/mohitmishra786/mdmend/internal/rules"
)
```

### Formatting

- Use `go fmt` before committing
- Tabs for indentation in Go files (standard Go convention)
- No trailing whitespace
- Files should end with a single newline

### Types and Structs

```go
// Exported structs: PascalCase
type Violation struct {
    Rule      string
    Line      int
    Column    int
    Message   string
    Fixable   bool
    Suggested string
}

// Unexported fields are also PascalCase within structs
type fixOptions struct {
    dryRun     bool
    diff       bool
    aggressive bool
    workers    int
}

// Constants: PascalCase for exported, camelCase for unexported
const (
    SeverityError   Severity = "error"
    SeverityWarning Severity = "warning"
    SeverityInfo    Severity = "info"
)
```

### Naming Conventions

- **Packages**: lowercase, single word preferred (`config`, `fixer`, `rules`)
- **Types/Structs**: PascalCase (`Violation`, `FixResult`, `Linter`)
- **Functions/Methods**: PascalCase if exported, camelCase if unexported
- **Interfaces**: PascalCase, often with "er" suffix (`Rule`)
- **Constants**: PascalCase for exported
- **Rule structs**: Named after their rule ID (`MD009`, `MD010`, `MD011`)

### Error Handling

```go
// Always check errors explicitly
content, err := os.ReadFile(path)
if err != nil {
    return nil, err
}

// For CLI commands, print to stderr and continue or exit
if err != nil {
    fmt.Fprintf(os.Stderr, "Error reading %s: %v\n", path, err)
    continue
}

// Return early on error to avoid deep nesting
if err := cr.Report(path, violations); err != nil {
    fmt.Fprintf(os.Stderr, "Error reporting %s: %v\n", path, err)
}
```

### Rule Implementation Pattern

Each rule follows a consistent interface:

```go
type Rule interface {
    ID() string          // Returns "MD009", "MD010", etc.
    Name() string        // Returns kebab-case name like "no-trailing-spaces"
    Description() string // Human-readable description
    Fixable() bool       // Whether the rule can auto-fix
    Lint(content string, path string) []Violation
    Fix(content string, path string) FixResult
}

// Rule registration via init()
func init() {
    Register(&MD009{})
}

// Method receivers use single-letter abbreviation of type
func (r *MD009) ID() string { return "MD009" }
func (r *MD009) Name() string { return "no-trailing-spaces" }
```

### Testing Patterns

Use table-driven tests:

```go
func TestMD009(t *testing.T) {
    rule := &MD009{}

    tests := []struct {
        name     string
        input    string
        wantViol int
        wantFix  string
    }{
        {
            name:     "no trailing spaces",
            input:    "hello world\n",
            wantViol: 0,
            wantFix:  "hello world\n",
        },
        {
            name:     "trailing spaces",
            input:    "hello world  \n",
            wantViol: 1,
            wantFix:  "hello world\n",
        },
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            violations := rule.Lint(tt.input, "test.md")
            if len(violations) != tt.wantViol {
                t.Errorf("MD009.Lint() got %d violations, want %d", len(violations), tt.wantViol)
            }
            result := rule.Fix(tt.input, "test.md")
            if result.Content() != tt.wantFix {
                t.Errorf("MD009.Fix() = %q, want %q", result.Content(), tt.wantFix)
            }
        })
    }
}
```

### Constructor Pattern

```go
// Use New() function for constructor
func New(cfg *config.Config) *Linter {
    return &Linter{
        config: cfg,
        rules:  enabledRules,
    }
}

// Or for package-level constructors
func Load(path string) (*Config, error) {
    cfg := Default()
    // ... load and return
}
```

### Comments

- No comments in code unless explicitly asked
- Let code be self-documenting through clear naming
- Only document exported types/functions when necessary for godoc

## Dependencies

- `github.com/spf13/cobra` - CLI framework
- `github.com/bmatcuk/doublestar/v4` - Glob matching
- `github.com/fatih/color` - Terminal colors
- `github.com/sergi/go-diff` - Diff generation
- `gopkg.in/yaml.v3` - YAML parsing

## Before Committing

1. Run tests: `make test`
2. Format code: `make fmt`
3. Run linter: `make lint`
4. Self-lint: `make self-lint`

## Key Files to Reference

- `internal/rules/rule.go` - Rule interface definition
- `internal/rules/registry.go` - Rule registration and lookup
- `internal/config/defaults.go` - Default configuration values
- `internal/fixer/fixer.go` - Fix application logic
- `cmd/mdmend/main.go` - CLI command structure
