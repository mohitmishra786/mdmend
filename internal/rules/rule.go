package rules

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

type Rule interface {
	ID() string
	Name() string
	Description() string
	Fixable() bool
	Lint(content string, path string) []Violation
	Fix(content string, path string) FixResult
}

type Severity string

const (
	SeverityError   Severity = "error"
	SeverityWarning Severity = "warning"
	SeverityInfo    Severity = "info"
)
