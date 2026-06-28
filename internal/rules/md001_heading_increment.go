package rules

import (
	"fmt"
	"strings"
)

type MD001 struct{}

func init() {
	Register(&MD001{})
}

func (r *MD001) ID() string          { return "MD001" }
func (r *MD001) Name() string        { return "heading-increment" }
func (r *MD001) Description() string { return "Heading levels should only increment by one level at a time" }
func (r *MD001) Fixable() bool       { return false }

func (r *MD001) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	prevLevel := 0

	for i := 0; i < len(lines); i++ {
		_, level := extractHeading(lines[i], lines, i)
		if level == 0 {
			continue
		}

		if prevLevel > 0 && level > prevLevel+1 {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  1,
				Message: fmt.Sprintf("Heading level jumps from H%d to H%d (expected at most H%d)", prevLevel, level, prevLevel+1),
				Fixable: false,
			})
		}
		prevLevel = level
	}

	return violations
}

func (r *MD001) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
}