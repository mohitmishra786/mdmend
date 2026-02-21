# Contributing to mdmend

Thank you for your interest in contributing to mdmend! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you are expected to uphold this code.

## Development Setup

See [SETUP.md](SETUP.md) for detailed development environment setup instructions.

Quick start:

```bash
git clone https://github.com/mohitmishra786/mdmend.git
cd mdmend
make deps
make build
make test
```

## How to Contribute

### Reporting Bugs

1. Check existing issues to avoid duplicates
2. Use the bug report template
3. Include:
   - mdmend version
   - Operating system
   - Sample markdown that triggers the bug
   - Expected vs actual behavior

### Suggesting Features

1. Check existing issues/discussions
2. Describe the feature and use case
3. Explain why it would benefit users

### Adding New Rules

1. Check [RULES.md](RULES.md) for existing rules
2. Implement in `internal/rules/`
3. Follow the rule interface pattern
4. Add comprehensive tests
5. Update documentation

## Pull Request Process

1. **Fork and branch**: Create a feature branch from `main`
2. **Write code**: Follow coding standards below
3. **Add tests**: Maintain or improve coverage
4. **Update docs**: Update relevant documentation
5. **Run checks**: `make test && make lint && make self-lint`
6. **Submit PR**: Fill out the PR template

### PR Checklist

- [ ] Code compiles without errors
- [ ] All tests pass (`make test`)
- [ ] Linter passes (`make lint`)
- [ ] Self-lint passes (`make self-lint`)
- [ ] New code has tests
- [ ] Documentation updated if needed

## Coding Standards

### Go Style

- Follow [Effective Go](https://golang.org/doc/effective_go)
- Run `go fmt` before committing
- Use meaningful variable names
- Add godoc comments to exported types/functions

### Imports

```go
import (
    // Standard library
    "fmt"
    "os"
    
    // Third-party
    "github.com/spf13/cobra"
    
    // Local
    "github.com/mohitmishra786/mdmend/internal/config"
)
```

### Error Handling

- Always check errors explicitly
- Return errors early to avoid nesting
- Use wrapped errors when adding context

### Commits

- Write clear, concise commit messages
- Use conventional commits format:
  - `feat: add MD060 rule`
  - `fix: handle empty files in fixer`
  - `docs: update README`
  - `test: add edge cases for MD009`

## Testing Guidelines

### Unit Tests

- Use table-driven tests
- Test edge cases (empty input, nil values)
- Aim for >80% coverage on new code

### Example Test

```go
func TestMD009(t *testing.T) {
    tests := []struct {
        name     string
        input    string
        wantViol int
    }{
        {"no trailing spaces", "hello\n", 0},
        {"trailing spaces", "hello  \n", 1},
    }
    
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            rule := &MD009{}
            got := len(rule.Lint(tt.input, "test.md"))
            if got != tt.wantViol {
                t.Errorf("got %d violations, want %d", got, tt.wantViol)
            }
        })
    }
}
```

## Questions?

- Open a [Discussion](https://github.com/mohitmishra786/mdmend/discussions)
- Check existing issues

Thank you for contributing!
