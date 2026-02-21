# Development Setup

This guide covers setting up mdmend for local development.

## Prerequisites

| Requirement | Version | Purpose |
|-------------|---------|---------|
| Go | 1.21+ | Build and run |
| Make | Any | Build automation |
| golangci-lint | 1.54+ | Linting (optional) |

## Quick Start

```bash
# Clone
git clone https://github.com/mohitmishra786/mdmend.git
cd mdmend

# Build
make build

# Test
make test

# Run
./mdmend --help
```

## Detailed Setup

### 1. Install Go

**macOS (Homebrew)**
```bash
brew install go
```

**Linux (apt)**
```bash
sudo apt update
sudo apt install golang-go
```

**Linux (manual)**
```bash
wget https://go.dev/dl/go1.21.5.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.21.5.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
```

**Windows**
Download from [go.dev/dl](https://go.dev/dl/)

### 2. Clone and Build

```bash
git clone https://github.com/mohitmishra786/mdmend.git
cd mdmend

# Download dependencies
go mod download

# Build binary
make build
# or
go build -o mdmend ./cmd/mdmend
```

### 3. Install Development Tools

```bash
# Install linter
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest

# Install test coverage tools
go install golang.org/x/tools/cmd/cover@latest
```

### 4. Verify Setup

```bash
# Run tests
make test

# Run linter
make lint

# Run mdmend on itself
make self-lint
```

## Makefile Commands

| Command | Description |
|---------|-------------|
| `make build` | Build binary for current OS |
| `make build-all` | Build for all platforms |
| `make test` | Run tests with coverage |
| `make test-coverage` | Generate HTML coverage report |
| `make lint` | Run golangci-lint |
| `make fmt` | Format code |
| `make vet` | Run go vet |
| `make self-lint` | Run mdmend on its own files |
| `make clean` | Remove build artifacts |
| `make install` | Install to GOPATH/bin |

## Project Structure

```
mdmend/
├── cmd/
│   └── mdmend/           # CLI application
│       └── main.go       # Entry point
├── internal/             # Private packages
│   ├── config/           # Configuration loading
│   ├── fixer/            # Fix application
│   ├── inferrer/         # Language inference
│   ├── linter/           # Linting engine
│   ├── parser/           # Markdown parsing
│   ├── reporter/         # Output formatting
│   ├── rules/            # Lint rules
│   ├── walker/           # File discovery
│   └── worker/           # Parallel processing
├── pkg/
│   └── mdmend/           # Public library API
├── testdata/
│   ├── fixtures/         # Test inputs
│   └── golden/           # Expected outputs
├── scripts/              # Build/publish scripts
├── .goreleaser.yml       # Release configuration
├── .mdmend.yml           # Default config
├── Makefile              # Build commands
└── go.mod                # Dependencies
```

## IDE Setup

### VS Code

1. Install Go extension
2. Recommended settings:
```json
{
    "go.lintTool": "golangci-lint",
    "go.lintOnSave": "package",
    "editor.formatOnSave": true
}
```

### GoLand / IntelliJ

1. Install Go plugin
2. Enable golangci-lint in settings
3. Configure Go modules

## Debugging

### VS Code

Create `.vscode/launch.json`:
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug mdmend",
            "type": "go",
            "request": "launch",
            "mode": "auto",
            "program": "${workspaceFolder}/cmd/mdmend",
            "args": ["lint", "."]
        }
    ]
}
```

### Delve

```bash
go install github.com/go-delve/delve/cmd/dlv@latest

# Debug
dlv debug ./cmd/mdmend -- lint .
```

## Testing

### Run All Tests
```bash
make test
# or
go test -v -race -coverprofile=coverage.out ./...
```

### Run Specific Tests
```bash
# Specific package
go test -v ./internal/rules/

# Specific test
go test -v -run TestMD009 ./internal/rules/

# Match pattern
go test -v -run "TestMD009|TestMD010" ./internal/rules/
```

### Coverage Report
```bash
make test-coverage
# Opens coverage.html in browser
```

## Troubleshooting

### Go Version Issues
```bash
go version  # Ensure 1.21+
```

### Module Issues
```bash
go mod tidy
go mod download
```

### Build Errors
```bash
make clean
make build
```

### Test Failures
```bash
# Clear test cache
go clean -testcache
make test
```

## Next Steps

- Read [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- See [RULES.md](RULES.md) for lint rule documentation
- Check [AGENTS.md](AGENTS.md) for AI agent guidelines
