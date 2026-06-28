package rules

import (
	"regexp"
	"strings"
)

type MD027 struct{}

func init() {
	Register(&MD027{})
}

func (r *MD027) ID() string          { return "MD027" }
func (r *MD027) Name() string        { return "no-multiple-space-blockquote" }
func (r *MD027) Description() string { return "Multiple spaces after blockquote symbol" }
func (r *MD027) Fixable() bool       { return true }

var blockquoteMultiSpaceRegex = regexp.MustCompile(`^(>+)  +(\S)`)

func (r *MD027) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		if blockquoteMultiSpaceRegex.MatchString(line) {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  1,
				Message: "Multiple spaces after blockquote symbol",
				Fixable: true,
			})
		}
	}
	return violations
}

func (r *MD027) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	for i, line := range lines {
		if blockquoteMultiSpaceRegex.MatchString(line) {
			lines[i] = blockquoteMultiSpaceRegex.ReplaceAllString(line, "$1 $2")
			changed = true
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

type MD030 struct{}

func init() {
	Register(&MD030{})
}

func (r *MD030) ID() string          { return "MD030" }
func (r *MD030) Name() string        { return "list-marker-space" }
func (r *MD030) Description() string { return "Spaces after list markers" }
func (r *MD030) Fixable() bool       { return true }

var unorderedListMarkerRegex = regexp.MustCompile(`^(\s*)([-+*])  +(\S)`)
var orderedListMarkerRegex = regexp.MustCompile(`^(\s*)(\d+[.)])  +(\S)`)
var orderedListNoSpaceRegex = regexp.MustCompile(`^(\s*)(\d+[.)])(\S)`)

func (r *MD030) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		if unorderedListMissingSpace(line) || orderedListNoSpaceRegex.MatchString(line) {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  1,
				Message: "No space after list marker",
				Fixable: true,
			})
		} else if unorderedListMarkerRegex.MatchString(line) || orderedListMarkerRegex.MatchString(line) {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  1,
				Message: "Multiple spaces after list marker",
				Fixable: true,
			})
		}
	}
	return violations
}

func (r *MD030) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	for i, line := range lines {
		if indent, marker, rest, ok := unorderedListMissingSpaceParts(line); ok {
			lines[i] = indent + marker + " " + rest
			changed = true
		} else if orderedListNoSpaceRegex.MatchString(line) {
			lines[i] = orderedListNoSpaceRegex.ReplaceAllString(line, "$1$2 $3")
			changed = true
		} else if unorderedListMarkerRegex.MatchString(line) {
			lines[i] = unorderedListMarkerRegex.ReplaceAllString(line, "$1$2 $3")
			changed = true
		} else if orderedListMarkerRegex.MatchString(line) {
			lines[i] = orderedListMarkerRegex.ReplaceAllString(line, "$1$2 $3")
			changed = true
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

func isStrongEmphasisLine(line string) bool {
	trimmed := strings.TrimLeft(line, " \t")
	return strings.HasPrefix(trimmed, "**") || strings.HasPrefix(trimmed, "__")
}

func unorderedListMissingSpace(line string) bool {
	_, _, _, ok := unorderedListMissingSpaceParts(line)
	return ok
}

func unorderedListMissingSpaceParts(line string) (indent, marker, rest string, ok bool) {
	if isStrongEmphasisLine(line) {
		return "", "", "", false
	}
	trimmed := strings.TrimLeft(line, " \t")
	if len(trimmed) < 2 || trimmed[1] == ' ' {
		return "", "", "", false
	}
	indent = line[:len(line)-len(trimmed)]
	switch trimmed[0] {
	case '-', '+':
		return indent, string(trimmed[0]), trimmed[1:], true
	case '*':
		if len(trimmed) >= 2 && trimmed[1] == '*' {
			return "", "", "", false
		}
		return indent, "*", trimmed[1:], true
	default:
		return "", "", "", false
	}
}

type MD031 struct{}

func init() {
	Register(&MD031{})
}

func (r *MD031) ID() string          { return "MD031" }
func (r *MD031) Name() string        { return "blanks-around-fences" }
func (r *MD031) Description() string { return "Fenced code blocks should be surrounded by blank lines" }
func (r *MD031) Fixable() bool       { return true }

var codeFenceStartRegex = regexp.MustCompile("^(`{3,}|~{3,})")

func (r *MD031) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	inCodeBlock := false
	for i, line := range lines {
		if codeFenceStartRegex.MatchString(line) {
			if !inCodeBlock {
				if i > 0 && strings.TrimSpace(lines[i-1]) != "" {
					violations = append(violations, Violation{
						Rule:    r.ID(),
						Line:    i + 1,
						Column:  1,
						Message: "Fenced code block missing blank line above",
						Fixable: true,
					})
				}
			}
			inCodeBlock = !inCodeBlock
			if !inCodeBlock {
				if i < len(lines)-1 && strings.TrimSpace(lines[i+1]) != "" {
					violations = append(violations, Violation{
						Rule:    r.ID(),
						Line:    i + 1,
						Column:  1,
						Message: "Fenced code block missing blank line below",
						Fixable: true,
					})
				}
			}
		}
	}
	return violations
}

func (r *MD031) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	var result []string
	changed := false
	inCodeBlock := false

	for i, line := range lines {
		if codeFenceStartRegex.MatchString(line) {
			if !inCodeBlock {
				if len(result) > 0 && result[len(result)-1] != "" {
					result = append(result, "")
					changed = true
				}
			}
			result = append(result, line)
			inCodeBlock = !inCodeBlock
			if !inCodeBlock {
				if i < len(lines)-1 && strings.TrimSpace(lines[i+1]) != "" {
					result = append(result, "")
					changed = true
				}
			}
		} else {
			result = append(result, line)
		}
	}

	return FixResult{Changed: changed, Lines: result}
}

type MD032 struct{}

func init() {
	Register(&MD032{})
}

func (r *MD032) ID() string          { return "MD032" }
func (r *MD032) Name() string        { return "blanks-around-lists" }
func (r *MD032) Description() string { return "Lists should be surrounded by blank lines" }
func (r *MD032) Fixable() bool       { return true }

var listMarkerRegex = regexp.MustCompile(`^(\s*)([-*+]|\d+[.)]) `)

func (r *MD032) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	inList := false
	for i, line := range lines {
		isListLine := listMarkerRegex.MatchString(line)
		if isListLine && !inList {
			if i > 0 && strings.TrimSpace(lines[i-1]) != "" {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  1,
					Message: "List missing blank line above",
					Fixable: true,
				})
			}
			inList = true
		} else if !isListLine && strings.TrimSpace(line) != "" && inList {
			if i < len(lines) && !listMarkerRegex.MatchString(lines[i]) {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i,
					Column:  1,
					Message: "List missing blank line below",
					Fixable: true,
				})
			}
			inList = false
		} else if strings.TrimSpace(line) == "" {
			inList = false
		}
	}
	return violations
}

func (r *MD032) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	var result []string
	changed := false
	inList := false

	for _, line := range lines {
		isListLine := listMarkerRegex.MatchString(line)
		if isListLine && !inList {
			if len(result) > 0 && result[len(result)-1] != "" {
				result = append(result, "")
				changed = true
			}
			result = append(result, line)
			inList = true
		} else if isListLine && inList {
			result = append(result, line)
		} else if !isListLine && strings.TrimSpace(line) != "" && inList {
			result = append(result, "")
			result = append(result, line)
			changed = true
			inList = false
		} else {
			result = append(result, line)
			if strings.TrimSpace(line) == "" {
				inList = false
			}
		}
	}

	return FixResult{Changed: changed, Lines: result}
}
