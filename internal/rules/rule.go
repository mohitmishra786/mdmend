package rules

import "strings"

type Violation struct {
	Rule      string
	Line      int
	Column    int
	Message   string
	Fixable   bool
	Suggested string
}

type FixResult struct {
	Changed bool
	Lines   []string
}

func (r FixResult) Content() string {
	return strings.Join(r.Lines, "\n")
}

func (r FixResult) ContentBytes() []byte {
	return []byte(r.Content())
}

type Rule interface {
	ID() string
	Name() string
	Description() string
	Fixable() bool
	Lint(content string, path string) []Violation
	Fix(content string, path string) FixResult
}

type AggressiveRule interface {
	Rule
	SetAggressive(enabled bool)
}

type Severity string

const (
	SeverityError   Severity = "error"
	SeverityWarning Severity = "warning"
	SeverityInfo    Severity = "info"
)
