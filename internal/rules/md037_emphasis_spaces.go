package rules

import (
	"regexp"
	"strings"
)

type MD037 struct{}

func init() {
	Register(&MD037{})
}

func (r *MD037) ID() string          { return "MD037" }
func (r *MD037) Name() string        { return "no-space-in-emphasis" }
func (r *MD037) Description() string { return "Spaces inside emphasis markers" }
func (r *MD037) Fixable() bool       { return true }

var emphasisSpaceRegex = regexp.MustCompile(`(\*|_)( +)([^*_]+?)( +)(\*|_)`)

func (r *MD037) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		if strings.Contains(line, " *") || strings.Contains(line, "* ") ||
			strings.Contains(line, " _") || strings.Contains(line, "_ ") {
			if hasEmphasisSpace(line) {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  1,
					Message: "Spaces inside emphasis markers",
					Fixable: true,
				})
			}
		}
	}
	return violations
}

func hasEmphasisSpace(line string) bool {
	return emphasisSpaceRegex.MatchString(line)
}

func (r *MD037) Fix(content string, path string) FixResult {
	fixed := emphasisSpaceRegex.ReplaceAllString(content, "$1$3$5")
	return FixResult{Changed: fixed != content, Lines: strings.Split(fixed, "\n")}
}

type MD038 struct{}

func init() {
	Register(&MD038{})
}

func (r *MD038) ID() string          { return "MD038" }
func (r *MD038) Name() string        { return "no-space-in-code" }
func (r *MD038) Description() string { return "Spaces inside code span elements" }
func (r *MD038) Fixable() bool       { return true }

var codeSpanSpaceRegex = regexp.MustCompile("`( +)([^`]+?)( +)`")
var codeSpanRegex = regexp.MustCompile("`([^`]+)`")

func (r *MD038) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		matches := codeSpanRegex.FindAllStringSubmatchIndex(line, -1)
		for _, match := range matches {
			if len(match) >= 4 {
				codeContent := line[match[2]:match[3]]
				if len(codeContent) > 0 && (codeContent[0] == ' ' || codeContent[len(codeContent)-1] == ' ') {
					trimmed := strings.TrimSpace(codeContent)
					if trimmed != "" && trimmed != codeContent {
						violations = append(violations, Violation{
							Rule:    r.ID(),
							Line:    i + 1,
							Column:  match[0] + 1,
							Message: "Spaces inside code span",
							Fixable: true,
						})
					}
				}
			}
		}
	}
	return violations
}

func (r *MD038) Fix(content string, path string) FixResult {
	fixed := codeSpanSpaceRegex.ReplaceAllString(content, "`$2`")
	return FixResult{Changed: fixed != content, Lines: strings.Split(fixed, "\n")}
}

type MD039 struct{}

func init() {
	Register(&MD039{})
}

func (r *MD039) ID() string          { return "MD039" }
func (r *MD039) Name() string        { return "no-space-in-links" }
func (r *MD039) Description() string { return "Spaces inside link text" }
func (r *MD039) Fixable() bool       { return true }

var linkSpaceRegex = regexp.MustCompile(`\[ +([^\]]*?) +\]`)
var linkSpaceStartRegex = regexp.MustCompile(`\[ +([^\]]+?)\]`)
var linkSpaceEndRegex = regexp.MustCompile(`\[([^\]]+?) +\]`)

func (r *MD039) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		if linkSpaceRegex.MatchString(line) || linkSpaceStartRegex.MatchString(line) || linkSpaceEndRegex.MatchString(line) {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  1,
				Message: "Spaces inside link text",
				Fixable: true,
			})
		}
	}
	return violations
}

func (r *MD039) Fix(content string, path string) FixResult {
	fixed := linkSpaceStartRegex.ReplaceAllString(content, "[$1]")
	fixed = linkSpaceEndRegex.ReplaceAllString(fixed, "[$1]")
	return FixResult{Changed: fixed != content, Lines: strings.Split(fixed, "\n")}
}

type MD044 struct {
	Names []string
}

func init() {
	Register(&MD044{Names: []string{"JavaScript", "TypeScript", "GitHub", "macOS"}})
}

func (r *MD044) ID() string          { return "MD044" }
func (r *MD044) Name() string        { return "proper-names" }
func (r *MD044) Description() string { return "Proper names should have the correct capitalization" }
func (r *MD044) Fixable() bool       { return true }

func (r *MD044) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	for i, line := range lines {
		for _, name := range r.Names {
			if hasImproperCase(line, name) {
				violations = append(violations, Violation{
					Rule:      r.ID(),
					Line:      i + 1,
					Column:    1,
					Message:   "Proper name should be " + name,
					Fixable:   true,
					Suggested: name,
				})
			}
		}
	}
	return violations
}

func (r *MD044) Fix(content string, path string) FixResult {
	fixed := content
	for _, name := range r.Names {
		fixed = fixProperCase(fixed, name)
	}
	return FixResult{Changed: fixed != content, Lines: strings.Split(fixed, "\n")}
}

func hasImproperCase(text, properName string) bool {
	lower := strings.ToLower(properName)
	idx := 0
	for {
		pos := strings.Index(strings.ToLower(text[idx:]), lower)
		if pos == -1 {
			return false
		}
		start := idx + pos
		end := start + len(properName)
		if end <= len(text) {
			found := text[start:end]
			if found != properName {
				return true
			}
		}
		idx = end
	}
}

func fixProperCase(text, properName string) string {
	result := text
	lower := strings.ToLower(properName)
	idx := 0
	for {
		pos := strings.Index(strings.ToLower(result[idx:]), lower)
		if pos == -1 {
			break
		}
		start := idx + pos
		end := start + len(properName)
		if end <= len(result) {
			found := result[start:end]
			if found != properName {
				result = result[:start] + properName + result[end:]
			}
		}
		idx = end
	}
	return result
}

type MD047 struct{}

func init() {
	Register(&MD047{})
}

func (r *MD047) ID() string          { return "MD047" }
func (r *MD047) Name() string        { return "single-trailing-newline" }
func (r *MD047) Description() string { return "Files should end with a single newline character" }
func (r *MD047) Fixable() bool       { return true }

func (r *MD047) Lint(content string, path string) []Violation {
	if len(content) == 0 {
		return nil
	}
	if content[len(content)-1] != '\n' {
		return []Violation{{
			Rule:    r.ID(),
			Line:    len(strings.Split(content, "\n")),
			Column:  1,
			Message: "File does not end with a single newline",
			Fixable: true,
		}}
	}
	if len(content) > 1 && content[len(content)-2] == '\n' {
		return []Violation{{
			Rule:    r.ID(),
			Line:    len(strings.Split(content, "\n")),
			Column:  1,
			Message: "File has multiple trailing newlines",
			Fixable: true,
		}}
	}
	return nil
}

func (r *MD047) Fix(content string, path string) FixResult {
	if len(content) == 0 {
		return FixResult{Changed: false, Lines: []string{""}}
	}

	changed := false
	for len(content) > 0 && content[len(content)-1] == '\n' {
		content = content[:len(content)-1]
		changed = true
	}
	if changed || len(content) > 0 {
		content = content + "\n"
		changed = true
	}

	return FixResult{Changed: changed, Lines: strings.Split(content, "\n")}
}
