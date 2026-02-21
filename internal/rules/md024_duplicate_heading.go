package rules

import (
	"regexp"
	"strings"
)

type MD024 struct {
	AllowDifferentNesting bool
}

func init() {
	Register(&MD024{AllowDifferentNesting: true})
}

func (r *MD024) ID() string          { return "MD024" }
func (r *MD024) Name() string        { return "no-duplicate-heading" }
func (r *MD024) Description() string { return "Multiple headings with the same content" }
func (r *MD024) Fixable() bool       { return false }

func (r *MD024) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")

	headingTexts := make(map[string]int)
	headingByLevel := make(map[int]map[string]int)

	for i := 0; i < len(lines); i++ {
		line := lines[i]
		text, level := extractHeading(line, lines, i)

		if text == "" {
			continue
		}

		normalizedText := strings.ToLower(strings.TrimSpace(text))

		if r.AllowDifferentNesting {
			if headingByLevel[level] == nil {
				headingByLevel[level] = make(map[string]int)
			}

			if firstLine, exists := headingByLevel[level][normalizedText]; exists {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  1,
					Message: "Duplicate heading content at same level (first occurrence at line " + string(rune('0'+firstLine/10)) + string(rune('0'+firstLine%10)) + ")",
					Fixable: false,
				})
			} else {
				headingByLevel[level][normalizedText] = i + 1
			}
		} else {
			if firstLine, exists := headingTexts[normalizedText]; exists {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  1,
					Message: "Duplicate heading content (first occurrence at line " + string(rune('0'+firstLine/10)) + string(rune('0'+firstLine%10)) + ")",
					Fixable: false,
				})
			} else {
				headingTexts[normalizedText] = i + 1
			}
		}
	}

	return violations
}

func (r *MD024) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
}

func extractHeading(line string, lines []string, idx int) (string, int) {
	trimmed := strings.TrimSpace(line)

	if strings.HasPrefix(trimmed, "#") {
		level := 0
		for i := 0; i < len(trimmed) && i < 6; i++ {
			if trimmed[i] == '#' {
				level++
			} else {
				break
			}
		}

		if level < len(trimmed) && trimmed[level] == ' ' {
			text := strings.TrimSpace(trimmed[level:])
			text = strings.TrimSuffix(text, strings.Repeat("#", level))
			text = strings.TrimSpace(text)
			return text, level
		}
	}

	if idx < len(lines)-1 {
		nextLine := strings.TrimSpace(lines[idx+1])
		if isSetextUnderlineLocal(nextLine) && !isEmpty(line) && !strings.HasPrefix(trimmed, "#") {
			level := 1
			if strings.HasPrefix(nextLine, "-") {
				level = 2
			}
			return trimmed, level
		}
	}

	return "", 0
}

func isSetextUnderlineLocal(line string) bool {
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

type MD025 struct {
	Level           int
	FrontMatter     bool
	SuggestDemotion bool
}

func init() {
	Register(&MD025{Level: 1, FrontMatter: true, SuggestDemotion: false})
}

func (r *MD025) ID() string          { return "MD025" }
func (r *MD025) Name() string        { return "single-title" }
func (r *MD025) Description() string { return "Multiple top-level headings in the same document" }
func (r *MD025) Fixable() bool       { return false }

func (r *MD025) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")

	startLine := 0
	if r.FrontMatter && hasYAMLFrontMatter(lines) {
		for i, line := range lines {
			if i > 0 && line == "---" {
				startLine = i + 1
				break
			}
		}
	}

	h1Count := 0
	var h1Lines []int

	for i := startLine; i < len(lines); i++ {
		line := lines[i]
		text, level := extractHeading(line, lines, i)

		if level == 1 && text != "" {
			h1Count++
			h1Lines = append(h1Lines, i+1)
		}
	}

	if h1Count > 1 {
		violations = append(violations, Violation{
			Rule:    r.ID(),
			Line:    h1Lines[1],
			Column:  1,
			Message: "Multiple top-level headings in same document",
			Fixable: false,
		})
	}

	return violations
}

func (r *MD025) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
}

func hasYAMLFrontMatter(lines []string) bool {
	if len(lines) < 2 {
		return false
	}
	return lines[0] == "---"
}

var yamlFrontMatterRegex = regexp.MustCompile(`^title:\s*(.+)$`)

func hasTitleInFrontMatter(lines []string) bool {
	if !hasYAMLFrontMatter(lines) {
		return false
	}

	for i := 1; i < len(lines); i++ {
		if lines[i] == "---" {
			break
		}
		if matches := yamlFrontMatterRegex.FindStringSubmatch(lines[i]); len(matches) > 1 {
			return true
		}
	}

	return false
}
