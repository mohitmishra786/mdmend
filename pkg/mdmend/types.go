package mdmend

type Violation struct {
	Rule      string
	Line      int
	Column    int
	Message   string
	Fixable   bool
	Suggested string
}

func (v Violation) String() string {
	return v.Rule + ":" + itoa(v.Line) + ":" + itoa(v.Column) + ": " + v.Message
}

type LintResult struct {
	Violations []Violation
	Fixable    int
	Unfixable  int
}

func (r LintResult) HasViolations() bool {
	return len(r.Violations) > 0
}

type FixResult struct {
	Changed    bool
	Content    string
	Violations []Violation
	Fixes      int
}

type FileResult struct {
	Path       string
	Violations []Violation
	Changed    bool
	Error      error
}

func (r FileResult) HasViolations() bool {
	return len(r.Violations) > 0
}

func itoa(n int) string {
	if n < 0 {
		return "-" + itoa(-n)
	}
	if n < 10 {
		return string(rune('0' + n))
	}
	return itoa(n/10) + string(rune('0'+n%10))
}
