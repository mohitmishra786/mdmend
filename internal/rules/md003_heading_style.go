package rules

import (
	"strings"
)

type MD003 struct {
	Style string
}

func init() {
	Register(&MD003{Style: "atx"})
}

func (r *MD003) ID() string          { return "MD003" }
func (r *MD003) Name() string        { return "heading-style" }
func (r *MD003) Description() string { return "Heading style should be consistent" }
func (r *MD003) Fixable() bool       { return true }

func (r *MD003) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")

	style := r.Style
	if style == "" {
		style = "atx"
	}

	for i := 0; i < len(lines); i++ {
		line := lines[i]

		if isATXHeading(line) {
			if style == "setext" {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  1,
					Message: "ATX heading found, expected Setext style",
					Fixable: true,
				})
			}
		}

		if i < len(lines)-1 {
			nextLine := lines[i+1]
			if isSetextUnderline(nextLine) && !isEmpty(line) && !isATXHeading(line) && !isListMarker(line) && !isCodeFence(line) {
				if style == "atx" || style == "atx_closed" {
					level := 1
					if strings.HasPrefix(strings.TrimSpace(nextLine), "-") {
						level = 2
					}
					violations = append(violations, Violation{
						Rule:    r.ID(),
						Line:    i + 1,
						Column:  1,
						Message: "Setext heading found, expected ATX style",
						Fixable: true,
					})
					_ = level
				}
				i++
			}
		}
	}

	return violations
}

func (r *MD003) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false

	style := r.Style
	if style == "" {
		style = "atx"
	}

	if style != "atx" && style != "atx_closed" {
		return FixResult{Changed: false, Lines: lines}
	}

	var result []string
	for i := 0; i < len(lines); i++ {
		line := lines[i]

		if i < len(lines)-1 {
			nextLine := lines[i+1]
			if isSetextUnderline(nextLine) && !isEmpty(line) && !isATXHeading(line) && !isListMarker(line) && !isCodeFence(line) {
				level := 1
				if strings.HasPrefix(strings.TrimSpace(nextLine), "-") {
					level = 2
				}
				converted := setextToATX(line, level)
				result = append(result, converted)
				changed = true
				i++
				continue
			}
		}

		result = append(result, line)
	}

	return FixResult{Changed: changed, Lines: result}
}

func isATXHeading(line string) bool {
	trimmed := strings.TrimSpace(line)
	if len(trimmed) == 0 {
		return false
	}

	hashCount := 0
	for i := 0; i < len(trimmed) && i < 6; i++ {
		if trimmed[i] == '#' {
			hashCount++
		} else {
			break
		}
	}

	if hashCount == 0 {
		return false
	}

	if hashCount < len(trimmed) && trimmed[hashCount] == ' ' {
		return true
	}

	return false
}

func isSetextUnderline(line string) bool {
	trimmed := strings.TrimSpace(line)
	if len(trimmed) < 2 {
		return false
	}

	firstChar := trimmed[0]
	if firstChar != '=' && firstChar != '-' {
		return false
	}

	for _, c := range trimmed {
		if c != rune(firstChar) {
			return false
		}
	}

	return true
}

func isEmpty(line string) bool {
	return strings.TrimSpace(line) == ""
}

func isListMarker(line string) bool {
	trimmed := strings.TrimSpace(line)
	if len(trimmed) == 0 {
		return false
	}

	if trimmed[0] == '-' || trimmed[0] == '*' || trimmed[0] == '+' {
		return true
	}

	return false
}

func isCodeFence(line string) bool {
	trimmed := strings.TrimSpace(line)
	return strings.HasPrefix(trimmed, "```") || strings.HasPrefix(trimmed, "~~~")
}

func setextToATX(text string, level int) string {
	prefix := strings.Repeat("#", level)
	return prefix + " " + strings.TrimSpace(text)
}
