package rules

import (
	"path/filepath"
	"regexp"
	"strings"
	"unicode"
)

type MD036 struct {
	Suggest     bool
	Punctuation string
}

func init() {
	Register(&MD036{Suggest: false, Punctuation: ".,;:!?"})
}

func (r *MD036) ID() string          { return "MD036" }
func (r *MD036) Name() string        { return "no-emphasis-as-heading" }
func (r *MD036) Description() string { return "Emphasis used instead of a heading" }
func (r *MD036) Fixable() bool       { return false }

func (r *MD036) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")

	for i, line := range lines {
		trimmed := strings.TrimSpace(line)

		if isEmphasisOnlyLine(trimmed) {
			text := extractEmphasisText(trimmed)
			if text != "" && !strings.ContainsAny(string(text[0]), r.Punctuation) {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  1,
					Message: "Emphasis used instead of heading: " + text,
					Fixable: false,
				})
			}
		}
	}

	return violations
}

func (r *MD036) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
}

func isEmphasisOnlyLine(line string) bool {
	if line == "" {
		return false
	}

	stripped := stripEmphasisMarkers(line)
	return stripped != line && strings.TrimSpace(stripped) != ""
}

func extractEmphasisText(line string) string {
	return strings.TrimSpace(stripEmphasisMarkers(line))
}

func stripEmphasisMarkers(line string) string {
	line = strings.TrimSpace(line)

	if (strings.HasPrefix(line, "**") && strings.HasSuffix(line, "**")) ||
		(strings.HasPrefix(line, "__") && strings.HasSuffix(line, "__")) {
		if len(line) > 4 {
			return line[2 : len(line)-2]
		}
	}

	if (strings.HasPrefix(line, "*") && strings.HasSuffix(line, "*")) ||
		(strings.HasPrefix(line, "_") && strings.HasSuffix(line, "_")) {
		if len(line) > 2 {
			return line[1 : len(line)-1]
		}
	}

	return line
}

type MD041 struct {
	DeriveFromFilename bool
	PromoteFirst       bool
	FrontMatter        bool
}

func init() {
	Register(&MD041{DeriveFromFilename: true, PromoteFirst: true, FrontMatter: true})
}

func (r *MD041) ID() string          { return "MD041" }
func (r *MD041) Name() string        { return "first-line-heading" }
func (r *MD041) Description() string { return "First line in a file should be a top-level heading" }
func (r *MD041) Fixable() bool       { return true }

var skipFiles = []string{"_sidebar.md", "sidebar.md", "nav.md", "index.md", "changelog.md"}

func (r *MD041) Lint(content string, path string) []Violation {
	lines := strings.Split(content, "\n")

	lowerPath := strings.ToLower(filepath.Base(path))
	for _, skip := range skipFiles {
		if lowerPath == skip || strings.HasPrefix(lowerPath, "changelog") {
			return nil
		}
	}

	if r.FrontMatter && hasTitleInFrontMatter(lines) {
		return nil
	}

	if len(lines) > 0 && strings.HasPrefix(strings.TrimSpace(lines[0]), "<!--") {
		return nil
	}

	startLine := 0
	if r.FrontMatter && hasYAMLFrontMatter(lines) {
		for i, line := range lines {
			if i > 0 && line == "---" {
				startLine = i + 1
				break
			}
		}
	}

	hasH1 := false
	for i := startLine; i < len(lines); i++ {
		if _, level := extractHeading(lines[i], lines, i); level == 1 {
			hasH1 = true
			break
		}
	}

	if !hasH1 {
		return []Violation{{
			Rule:    r.ID(),
			Line:    1,
			Column:  1,
			Message: "First line should be a top-level heading",
			Fixable: true,
		}}
	}

	return nil
}

func (r *MD041) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")

	lowerPath := strings.ToLower(filepath.Base(path))
	for _, skip := range skipFiles {
		if lowerPath == skip || strings.HasPrefix(lowerPath, "changelog") {
			return FixResult{Changed: false, Lines: lines}
		}
	}

	if r.FrontMatter && hasTitleInFrontMatter(lines) {
		return FixResult{Changed: false, Lines: lines}
	}

	if len(lines) > 0 && strings.HasPrefix(strings.TrimSpace(lines[0]), "<!--") {
		return FixResult{Changed: false, Lines: lines}
	}

	startLine := 0
	if r.FrontMatter && hasYAMLFrontMatter(lines) {
		for i, line := range lines {
			if i > 0 && line == "---" {
				startLine = i + 1
				break
			}
		}
	}

	for i := startLine; i < len(lines); i++ {
		if _, level := extractHeading(lines[i], lines, i); level == 1 {
			return FixResult{Changed: false, Lines: lines}
		}
	}

	if r.PromoteFirst {
		for i := startLine; i < len(lines); i++ {
			if text, level := extractHeading(lines[i], lines, i); level == 2 && text != "" {
				lines[i] = "# " + text
				return FixResult{Changed: true, Lines: lines}
			}
		}
	}

	if r.DeriveFromFilename {
		title := filenameToTitle(path)
		h1 := "# " + title

		var newLines []string
		newLines = append(newLines, lines[:startLine]...)
		newLines = append(newLines, h1)
		newLines = append(newLines, lines[startLine:]...)

		return FixResult{Changed: true, Lines: newLines}
	}

	return FixResult{Changed: false, Lines: lines}
}

func filenameToTitle(path string) string {
	base := filepath.Base(path)
	ext := filepath.Ext(base)
	name := strings.TrimSuffix(base, ext)

	name = strings.ReplaceAll(name, "-", " ")
	name = strings.ReplaceAll(name, "_", " ")

	if len(name) > 0 {
		name = strings.ToUpper(string(name[0])) + name[1:]
	}

	result := make([]rune, 0, len(name))
	prevIsSpace := true
	for _, r := range name {
		if prevIsSpace && unicode.IsLower(r) {
			result = append(result, unicode.ToUpper(r))
		} else {
			result = append(result, r)
		}
		prevIsSpace = r == ' '
	}

	return string(result)
}

type MD042 struct{}

func init() {
	Register(&MD042{})
}

func (r *MD042) ID() string          { return "MD042" }
func (r *MD042) Name() string        { return "no-empty-links" }
func (r *MD042) Description() string { return "No empty links" }
func (r *MD042) Fixable() bool       { return false }

var emptyLinkRegex = regexp.MustCompile(`\[[^\]]*\]\(\s*\)`)

func (r *MD042) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
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

		if emptyLinkRegex.MatchString(line) {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  1,
				Message: "Empty link found",
				Fixable: false,
			})
		}
	}

	return violations
}

func (r *MD042) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
}
