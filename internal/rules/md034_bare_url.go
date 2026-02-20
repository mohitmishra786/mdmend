package rules

import (
	"regexp"
	"strings"
)

type MD034 struct {
	Style        string
	SkipPatterns []string
}

func init() {
	Register(&MD034{Style: "angle", SkipPatterns: []string{}})
}

func (r *MD034) ID() string          { return "MD034" }
func (r *MD034) Name() string        { return "no-bare-urls" }
func (r *MD034) Description() string { return "Bare URL used" }
func (r *MD034) Fixable() bool       { return true }

var urlPatternRegex = regexp.MustCompile(`https?://[^\s<>\[\]]+`)

func findBareURLs(line string) []struct {
	start, end int
	url        string
} {
	var results []struct {
		start, end int
		url        string
	}

	matches := urlPatternRegex.FindAllStringIndex(line, -1)
	for _, match := range matches {
		start, end := match[0], match[1]

		if start > 0 {
			prevChar := line[start-1]
			if prevChar == '<' || prevChar == '(' || prevChar == '[' {
				continue
			}
		}

		if end < len(line) {
			nextChar := line[end]
			if nextChar == '>' || nextChar == ']' {
				continue
			}
		}

		results = append(results, struct {
			start, end int
			url        string
		}{start: start, end: end, url: line[start:end]})
	}

	return results
}

func (r *MD034) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	inCodeBlock := false

	for i, line := range lines {
		if strings.HasPrefix(strings.TrimSpace(line), "```") || strings.HasPrefix(strings.TrimSpace(line), "~~~") {
			inCodeBlock = !inCodeBlock
			continue
		}
		if inCodeBlock {
			continue
		}

		lineWithoutCodeSpans := removeCodeSpans(line)
		matches := findBareURLs(lineWithoutCodeSpans)
		for _, match := range matches {
			if r.shouldSkip(match.url) {
				continue
			}
			violations = append(violations, Violation{
				Rule:      r.ID(),
				Line:      i + 1,
				Column:    match.start + 1,
				Message:   "Bare URL should be wrapped",
				Fixable:   true,
				Suggested: "<" + match.url + ">",
			})
		}
	}
	return violations
}

func (r *MD034) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
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

		lineWithoutCodeSpans := removeCodeSpans(line)
		matches := findBareURLs(lineWithoutCodeSpans)
		if len(matches) > 0 {
			offset := 0
			for _, match := range matches {
				if r.shouldSkip(match.url) {
					continue
				}
				originalURL := line[match.start+offset : match.end+offset]
				var wrapped string
				if r.Style == "link" {
					wrapped = "[" + originalURL + "](" + originalURL + ")"
				} else {
					wrapped = "<" + originalURL + ">"
				}
				line = line[:match.start+offset] + wrapped + line[match.end+offset:]
				offset += len(wrapped) - len(originalURL)
				changed = true
			}
			lines[i] = line
		}
	}

	return FixResult{Changed: changed, Lines: lines}
}

func (r *MD034) shouldSkip(url string) bool {
	for _, pattern := range r.SkipPatterns {
		matched, _ := regexp.MatchString(pattern, url)
		if matched {
			return true
		}
	}
	return false
}

func removeCodeSpans(line string) string {
	result := ""
	inCodeSpan := false
	i := 0
	for i < len(line) {
		if i < len(line)-1 && line[i] == '`' && line[i+1] == '`' {
			i += 2
			continue
		}
		if line[i] == '`' {
			inCodeSpan = !inCodeSpan
			i++
			continue
		}
		if !inCodeSpan {
			result += string(line[i])
		} else {
			result += " "
		}
		i++
	}
	return result
}

type MD035 struct {
	Style string
}

func init() {
	Register(&MD035{Style: "---"})
}

func (r *MD035) ID() string          { return "MD035" }
func (r *MD035) Name() string        { return "hr-style" }
func (r *MD035) Description() string { return "Horizontal rule style" }
func (r *MD035) Fixable() bool       { return true }

var hrStarRegex = regexp.MustCompile(`^(\s*)\*+(\s*\*+\s*)*$`)
var hrDashRegex = regexp.MustCompile(`^(\s*)-+(\s*-+\s*)*$`)
var hrUnderscoreRegex = regexp.MustCompile(`^(\s*)_+(\s*_+\s*)*$`)

func isHR(line string) bool {
	return hrStarRegex.MatchString(line) || hrDashRegex.MatchString(line) || hrUnderscoreRegex.MatchString(line)
}

func (r *MD035) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	style := r.Style
	if style == "" {
		style = "---"
	}

	for i, line := range lines {
		if isHR(line) {
			normalized := normalizeHR(line)
			if normalized != style {
				violations = append(violations, Violation{
					Rule:      r.ID(),
					Line:      i + 1,
					Column:    1,
					Message:   "Horizontal rule style inconsistent",
					Fixable:   true,
					Suggested: style,
				})
			}
		}
	}
	return violations
}

func (r *MD035) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	style := r.Style
	if style == "" {
		style = "---"
	}

	for i, line := range lines {
		if isHR(line) {
			if normalizeHR(line) != style {
				lines[i] = style
				changed = true
			}
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

func normalizeHR(line string) string {
	trimmed := strings.TrimSpace(line)
	if len(trimmed) == 0 {
		return ""
	}
	char := trimmed[0]
	return string(char) + string(char) + string(char)
}
