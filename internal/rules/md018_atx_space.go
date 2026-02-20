package rules

import (
	"regexp"
	"strings"
)

type MD018 struct{}

func init() {
	Register(&MD018{})
}

func (r *MD018) ID() string          { return "MD018" }
func (r *MD018) Name() string        { return "no-missing-space-atx" }
func (r *MD018) Description() string { return "No space after hash in ATX heading" }
func (r *MD018) Fixable() bool       { return true }

var atxNoSpaceRegex = regexp.MustCompile(`^(#{1,6})([^#\s])`)

func (r *MD018) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		trimmed := strings.TrimLeft(line, " \t")
		if atxNoSpaceRegex.MatchString(trimmed) {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  1,
				Message: "No space after hash in ATX heading",
				Fixable: true,
			})
		}
	}
	return violations
}

func (r *MD018) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	for i, line := range lines {
		trimmed := strings.TrimLeft(line, " \t")
		if atxNoSpaceRegex.MatchString(trimmed) {
			fixed := atxNoSpaceRegex.ReplaceAllString(trimmed, "$1 $2")
			prefix := line[:len(line)-len(trimmed)]
			lines[i] = prefix + fixed
			changed = true
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

type MD019 struct{}

func init() {
	Register(&MD019{})
}

func (r *MD019) ID() string          { return "MD019" }
func (r *MD019) Name() string        { return "no-multiple-space-atx" }
func (r *MD019) Description() string { return "Multiple spaces after hash in ATX heading" }
func (r *MD019) Fixable() bool       { return true }

var atxMultiSpaceRegex = regexp.MustCompile(`^(#{1,6})  +(\S)`)

func (r *MD019) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		trimmed := strings.TrimLeft(line, " \t")
		if atxMultiSpaceRegex.MatchString(trimmed) {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  1,
				Message: "Multiple spaces after hash in ATX heading",
				Fixable: true,
			})
		}
	}
	return violations
}

func (r *MD019) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	for i, line := range lines {
		trimmed := strings.TrimLeft(line, " \t")
		if atxMultiSpaceRegex.MatchString(trimmed) {
			fixed := atxMultiSpaceRegex.ReplaceAllString(trimmed, "$1 $2")
			prefix := line[:len(line)-len(trimmed)]
			lines[i] = prefix + fixed
			changed = true
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

type MD020 struct{}

func init() {
	Register(&MD020{})
}

func (r *MD020) ID() string          { return "MD020" }
func (r *MD020) Name() string        { return "no-missing-space-closed-atx" }
func (r *MD020) Description() string { return "No space inside hashes on closed ATX heading" }
func (r *MD020) Fixable() bool       { return true }

var closedAtxNoSpaceStartRegex = regexp.MustCompile(`^(#{1,6})([^#\s])`)
var closedAtxNoSpaceEndRegex = regexp.MustCompile(`([^#\s])(#*)$`)

func isClosedATXNoSpace(line string) bool {
	trimmed := strings.TrimLeft(line, " \t")
	if !closedAtxNoSpaceStartRegex.MatchString(trimmed) {
		return false
	}
	if !closedAtxNoSpaceEndRegex.MatchString(trimmed) {
		return false
	}
	if strings.HasSuffix(trimmed, "#") || strings.HasSuffix(trimmed, "##") ||
		strings.HasSuffix(trimmed, "###") || strings.HasSuffix(trimmed, "####") ||
		strings.HasSuffix(trimmed, "#####") || strings.HasSuffix(trimmed, "######") {
		return true
	}
	return false
}

func (r *MD020) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		if isClosedATXNoSpace(line) {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  1,
				Message: "No space inside hashes on closed ATX heading",
				Fixable: true,
			})
		}
	}
	return violations
}

func (r *MD020) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	for i, line := range lines {
		if isClosedATXNoSpace(line) {
			trimmed := strings.TrimLeft(line, " \t")
			prefix := line[:len(line)-len(trimmed)]

			hashCount := 0
			for _, c := range trimmed {
				if c == '#' {
					hashCount++
				} else {
					break
				}
			}

			endHashCount := 0
			for j := len(trimmed) - 1; j >= 0; j-- {
				if trimmed[j] == '#' {
					endHashCount++
				} else {
					break
				}
			}

			if endHashCount > 0 {
				text := strings.Trim(trimmed[hashCount:len(trimmed)-endHashCount], " ")
				if len(text) > 0 && text[0] != ' ' {
					lines[i] = prefix + strings.Repeat("#", hashCount) + " " + text + " " + strings.Repeat("#", endHashCount)
					changed = true
				}
			}
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

type MD021 struct{}

func init() {
	Register(&MD021{})
}

func (r *MD021) ID() string          { return "MD021" }
func (r *MD021) Name() string        { return "no-multiple-space-closed-atx" }
func (r *MD021) Description() string { return "Multiple spaces inside hashes on closed ATX heading" }
func (r *MD021) Fixable() bool       { return true }

var closedAtxMultiSpaceRegex = regexp.MustCompile(`^(#{1,6})  +(.+?)  +(#+)$`)

func (r *MD021) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		trimmed := strings.TrimLeft(line, " \t")
		if closedAtxMultiSpaceRegex.MatchString(trimmed) {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  1,
				Message: "Multiple spaces inside hashes on closed ATX heading",
				Fixable: true,
			})
		}
	}
	return violations
}

func (r *MD021) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	for i, line := range lines {
		trimmed := strings.TrimLeft(line, " \t")
		if closedAtxMultiSpaceRegex.MatchString(trimmed) {
			fixed := closedAtxMultiSpaceRegex.ReplaceAllString(trimmed, "$1 $2 $3")
			prefix := line[:len(line)-len(trimmed)]
			lines[i] = prefix + fixed
			changed = true
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

type MD022 struct{}

func init() {
	Register(&MD022{})
}

func (r *MD022) ID() string          { return "MD022" }
func (r *MD022) Name() string        { return "blanks-around-headings" }
func (r *MD022) Description() string { return "Headings should be surrounded by blank lines" }
func (r *MD022) Fixable() bool       { return true }

var headingRegex = regexp.MustCompile(`^#{1,6} `)

func (r *MD022) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		trimmed := strings.TrimLeft(line, " \t")
		if headingRegex.MatchString(trimmed) {
			if i > 0 && strings.TrimSpace(lines[i-1]) != "" {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  1,
					Message: "Heading missing blank line above",
					Fixable: true,
				})
			}
			if i < len(lines)-1 && strings.TrimSpace(lines[i+1]) != "" && !headingRegex.MatchString(strings.TrimLeft(lines[i+1], " \t")) {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  1,
					Message: "Heading missing blank line below",
					Fixable: true,
				})
			}
		}
	}
	return violations
}

func (r *MD022) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	var result []string
	changed := false

	for i, line := range lines {
		trimmed := strings.TrimLeft(line, " \t")
		if headingRegex.MatchString(trimmed) {
			if len(result) > 0 && result[len(result)-1] != "" {
				result = append(result, "")
				changed = true
			}
			result = append(result, line)
			if i < len(lines)-1 && strings.TrimSpace(lines[i+1]) != "" && !headingRegex.MatchString(strings.TrimLeft(lines[i+1], " \t")) {
				result = append(result, "")
				changed = true
			}
		} else {
			result = append(result, line)
		}
	}

	return FixResult{Changed: changed, Lines: result}
}

type MD023 struct{}

func init() {
	Register(&MD023{})
}

func (r *MD023) ID() string          { return "MD023" }
func (r *MD023) Name() string        { return "heading-start-left" }
func (r *MD023) Description() string { return "Headings must start at the beginning of the line" }
func (r *MD023) Fixable() bool       { return true }

func (r *MD023) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		if len(line) > 0 && (line[0] == ' ' || line[0] == '\t') {
			trimmed := strings.TrimLeft(line, " \t")
			if headingRegex.MatchString(trimmed) {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  1,
					Message: "Heading does not start at the beginning of the line",
					Fixable: true,
				})
			}
		}
	}
	return violations
}

func (r *MD023) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	for i, line := range lines {
		if len(line) > 0 && (line[0] == ' ' || line[0] == '\t') {
			trimmed := strings.TrimLeft(line, " \t")
			if headingRegex.MatchString(trimmed) {
				lines[i] = trimmed
				changed = true
			}
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

type MD026 struct {
	Punctuation string
}

func init() {
	Register(&MD026{Punctuation: ".,;:!"})
}

func (r *MD026) ID() string          { return "MD026" }
func (r *MD026) Name() string        { return "no-trailing-punctuation" }
func (r *MD026) Description() string { return "Trailing punctuation in heading" }
func (r *MD026) Fixable() bool       { return true }

func (r *MD026) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	punct := r.Punctuation
	if punct == "" {
		punct = ".,;:!"
	}
	for i, line := range lines {
		trimmed := strings.TrimLeft(line, " \t")
		if headingRegex.MatchString(trimmed) {
			headingText := strings.Trim(trimmed[strings.Index(trimmed, " ")+1:], " ")
			if len(headingText) > 0 && strings.ContainsAny(string(headingText[len(headingText)-1]), punct) {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  len(line),
					Message: "Trailing punctuation in heading",
					Fixable: true,
				})
			}
		}
	}
	return violations
}

func (r *MD026) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	punct := r.Punctuation
	if punct == "" {
		punct = ".,;:!"
	}
	for i, line := range lines {
		trimmed := strings.TrimLeft(line, " \t")
		if headingRegex.MatchString(trimmed) {
			prefix := line[:len(line)-len(trimmed)]
			hashEnd := strings.Index(trimmed, " ")
			headingText := strings.Trim(trimmed[hashEnd+1:], " ")
			if len(headingText) > 0 && strings.ContainsAny(string(headingText[len(headingText)-1]), punct) {
				for len(headingText) > 0 && strings.ContainsAny(string(headingText[len(headingText)-1]), punct) {
					headingText = headingText[:len(headingText)-1]
				}
				lines[i] = prefix + trimmed[:hashEnd+1] + " " + headingText
				changed = true
			}
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}
