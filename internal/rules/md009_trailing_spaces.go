package rules

import (
	"regexp"
	"strings"
)

type MD009 struct{}

func init() {
	Register(&MD009{})
}

func (r *MD009) ID() string          { return "MD009" }
func (r *MD009) Name() string        { return "no-trailing-spaces" }
func (r *MD009) Description() string { return "Trailing spaces" }
func (r *MD009) Fixable() bool       { return true }

func (r *MD009) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		if len(line) > 0 && line[len(line)-1] == ' ' {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  len(line),
				Message: "Trailing spaces",
				Fixable: true,
			})
		}
	}
	return violations
}

func (r *MD009) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	for i, line := range lines {
		trimmed := strings.TrimRight(line, " \t")
		if trimmed != line {
			lines[i] = trimmed
			changed = true
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

type MD010 struct {
	TabSize int
}

func init() {
	Register(&MD010{TabSize: 4})
}

func (r *MD010) ID() string          { return "MD010" }
func (r *MD010) Name() string        { return "no-hard-tabs" }
func (r *MD010) Description() string { return "Hard tabs" }
func (r *MD010) Fixable() bool       { return true }

func (r *MD010) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		if strings.Contains(line, "\t") {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  strings.Index(line, "\t") + 1,
				Message: "Hard tab",
				Fixable: true,
			})
		}
	}
	return violations
}

func (r *MD010) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	tabSize := r.TabSize
	if tabSize == 0 {
		tabSize = 4
	}
	replacement := strings.Repeat(" ", tabSize)
	for i, line := range lines {
		if strings.Contains(line, "\t") {
			lines[i] = strings.ReplaceAll(line, "\t", replacement)
			changed = true
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

type MD011 struct{}

func init() {
	Register(&MD011{})
}

func (r *MD011) ID() string          { return "MD011" }
func (r *MD011) Name() string        { return "no-reversed-links" }
func (r *MD011) Description() string { return "Reversed link syntax" }
func (r *MD011) Fixable() bool       { return true }

var reversedLinkRegex = regexp.MustCompile(`\(([^)]+)\)\[([^\]]+)\]`)

func (r *MD011) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		matches := reversedLinkRegex.FindAllStringIndex(line, -1)
		for _, match := range matches {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  match[0] + 1,
				Message: "Reversed link syntax (text)[url] should be [text](url)",
				Fixable: true,
			})
		}
	}
	return violations
}

func (r *MD011) Fix(content string, path string) FixResult {
	changed := reversedLinkRegex.MatchString(content)
	if !changed {
		return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
	}
	fixed := reversedLinkRegex.ReplaceAllString(content, "[$1]($2)")
	return FixResult{Changed: true, Lines: strings.Split(fixed, "\n")}
}

type MD012 struct{}

func init() {
	Register(&MD012{})
}

func (r *MD012) ID() string          { return "MD012" }
func (r *MD012) Name() string        { return "no-multiple-blanks" }
func (r *MD012) Description() string { return "Multiple consecutive blank lines" }
func (r *MD012) Fixable() bool       { return true }

func (r *MD012) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	consecutiveBlanks := 0
	for i, line := range lines {
		if strings.TrimSpace(line) == "" {
			consecutiveBlanks++
			if consecutiveBlanks > 1 {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  1,
					Message: "Multiple consecutive blank lines",
					Fixable: true,
				})
			}
		} else {
			consecutiveBlanks = 0
		}
	}
	return violations
}

func (r *MD012) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	var result []string
	changed := false
	prevBlank := false

	for _, line := range lines {
		isBlank := strings.TrimSpace(line) == ""
		if isBlank && prevBlank {
			changed = true
			continue
		}
		result = append(result, line)
		prevBlank = isBlank
	}

	return FixResult{Changed: changed, Lines: result}
}
