package reporter

import "github.com/mohitmishra786/mdmend/internal/rules"

type Reporter interface {
	Report(path string, violations []rules.Violation) error
	Summary(totalFiles, filesWithIssues, totalViolations int) error
}

type Format string

const (
	FormatConsole Format = "console"
	FormatJSON    Format = "json"
	FormatDiff    Format = "diff"
)
