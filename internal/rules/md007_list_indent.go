package rules

import (
	"strings"
	"unicode"
)

type MD007 struct {
	Indent int
}

func init() {
	Register(&MD007{Indent: 2})
}

func (r *MD007) ID() string   { return "MD007" }
func (r *MD007) Name() string { return "ul-indent" }
func (r *MD007) Description() string {
	return "Unordered list indentation should use consistent spacing"
}
func (r *MD007) Fixable() bool { return true }

func (r *MD007) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	indent := r.Indent
	if indent <= 0 {
		indent = 2
	}

	inCodeBlock := false
	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if strings.HasPrefix(trimmed, "```") || strings.HasPrefix(trimmed, "~~~") {
			inCodeBlock = !inCodeBlock
			continue
		}

		if inCodeBlock {
			continue
		}

		if !isUnorderedListItem(line) {
			continue
		}

		leadingSpaces := getLeadingSpaces(line)
		expectedIndent := detectExpectedIndent(line, lines, i, indent)

		if leadingSpaces%indent != 0 {
			violations = append(violations, Violation{
				Rule:      r.ID(),
				Line:      i + 1,
				Column:    1,
				Message:   "Unordered list indentation is not a multiple of configured indent",
				Fixable:   true,
				Suggested: strings.Repeat(" ", expectedIndent),
			})
		}
	}

	return violations
}

func (r *MD007) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	indent := r.Indent
	if indent <= 0 {
		indent = 2
	}

	inCodeBlock := false
	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if strings.HasPrefix(trimmed, "```") || strings.HasPrefix(trimmed, "~~~") {
			inCodeBlock = !inCodeBlock
			continue
		}

		if inCodeBlock {
			continue
		}

		if !isUnorderedListItem(line) {
			continue
		}

		leadingSpaces := getLeadingSpaces(line)
		depth := detectListNestingDepth(lines, i)
		expectedIndent := depth * indent

		if leadingSpaces != expectedIndent {
			content := strings.TrimLeft(line, " \t")
			lines[i] = strings.Repeat(" ", expectedIndent) + content
			changed = true
		}
	}

	return FixResult{Changed: changed, Lines: lines}
}

func isUnorderedListItem(line string) bool {
	trimmed := strings.TrimSpace(line)
	if len(trimmed) < 2 {
		return false
	}

	marker := trimmed[0]
	if marker != '-' && marker != '*' && marker != '+' {
		return false
	}

	return len(trimmed) > 1 && trimmed[1] == ' '
}

func detectExpectedIndent(line string, lines []string, lineNum int, indentSize int) int {
	depth := detectListNestingDepth(lines, lineNum)
	return depth * indentSize
}

func detectListNestingDepth(lines []string, currentLine int) int {
	depth := 0
	currentIndent := getLeadingSpaces(lines[currentLine])

	for i := currentLine - 1; i >= 0; i-- {
		line := lines[i]
		trimmed := strings.TrimSpace(line)

		if trimmed == "" {
			continue
		}

		if strings.HasPrefix(trimmed, "```") || strings.HasPrefix(trimmed, "~~~") {
			break
		}

		if isUnorderedListItem(line) || isOrderedListItem(line) {
			lineIndent := getLeadingSpaces(line)
			if lineIndent < currentIndent {
				depth++
				currentIndent = lineIndent
			}
		} else {
			break
		}
	}

	return depth
}

func isOrderedListItem(line string) bool {
	trimmed := strings.TrimSpace(line)
	if len(trimmed) < 3 {
		return false
	}

	i := 0
	for i < len(trimmed) && unicode.IsDigit(rune(trimmed[i])) {
		i++
	}

	if i == 0 || i >= len(trimmed) {
		return false
	}

	return trimmed[i] == '.' && i+1 < len(trimmed) && trimmed[i+1] == ' '
}
