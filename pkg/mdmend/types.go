package mdmend

import "strconv"

type Violation struct {
	Rule      string
	Line      int
	Column    int
	Message   string
	Fixable   bool
	Suggested string
}

func (v Violation) String() string {
	return v.Rule + ":" + strconv.Itoa(v.Line) + ":" + strconv.Itoa(v.Column) + ": " + v.Message
}

type LintResult struct {
	Violations []Violation
}

func (r LintResult) FixableCount() int {
	count := 0
	for _, v := range r.Violations {
		if v.Fixable {
			count++
		}
	}
	return count
}

func (r LintResult) UnfixableCount() int {
	count := 0
	for _, v := range r.Violations {
		if !v.Fixable {
			count++
		}
	}
	return count
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
