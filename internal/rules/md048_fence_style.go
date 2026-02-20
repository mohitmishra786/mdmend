package rules

import (
	"regexp"
	"strings"
)

type MD048 struct {
	Style string
}

func init() {
	Register(&MD048{Style: "backtick"})
}

func (r *MD048) ID() string          { return "MD048" }
func (r *MD048) Name() string        { return "code-fence-style" }
func (r *MD048) Description() string { return "Code fence style" }
func (r *MD048) Fixable() bool       { return true }

var backtickFenceRegex = regexp.MustCompile("^(`{3,})")
var tildeFenceRegex = regexp.MustCompile("^(~{3,})")

func (r *MD048) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	style := r.Style
	if style == "" {
		style = "backtick"
	}

	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if backtickFenceRegex.MatchString(trimmed) {
			if style == "tilde" {
				violations = append(violations, Violation{
					Rule:      r.ID(),
					Line:      i + 1,
					Column:    1,
					Message:   "Code fence style should be tilde (~)",
					Fixable:   true,
					Suggested: "~~~",
				})
			}
		} else if tildeFenceRegex.MatchString(trimmed) {
			if style == "backtick" {
				violations = append(violations, Violation{
					Rule:      r.ID(),
					Line:      i + 1,
					Column:    1,
					Message:   "Code fence style should be backtick (`)",
					Fixable:   true,
					Suggested: "```",
				})
			}
		}
	}
	return violations
}

func (r *MD048) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	style := r.Style
	if style == "" {
		style = "backtick"
	}

	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if matches := backtickFenceRegex.FindStringSubmatch(trimmed); len(matches) > 0 {
			if style == "tilde" {
				newFence := strings.ReplaceAll(matches[1], "`", "~")
				lines[i] = strings.Replace(line, matches[1], newFence, 1)
				changed = true
			}
		} else if matches := tildeFenceRegex.FindStringSubmatch(trimmed); len(matches) > 0 {
			if style == "backtick" {
				newFence := strings.ReplaceAll(matches[1], "~", "`")
				lines[i] = strings.Replace(line, matches[1], newFence, 1)
				changed = true
			}
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

type MD049 struct {
	Style string
}

func init() {
	Register(&MD049{Style: "*"})
}

func (r *MD049) ID() string          { return "MD049" }
func (r *MD049) Name() string        { return "emphasis-style" }
func (r *MD049) Description() string { return "Emphasis style should be consistent" }
func (r *MD049) Fixable() bool       { return true }

var emphasisRegex = regexp.MustCompile(`(_)([^_]+)(_)|(\*)([^*]+)(\*)`)

func (r *MD049) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	style := r.Style
	if style == "" {
		style = "*"
	}

	for i, line := range lines {
		if style == "*" && strings.Contains(line, "_") {
			if matches := regexp.MustCompile(`_([^_]+)_`).FindAllStringIndex(line, -1); len(matches) > 0 {
				for _, match := range matches {
					content := line[match[0]:match[1]]
					if isEmphasis(content) {
						violations = append(violations, Violation{
							Rule:      r.ID(),
							Line:      i + 1,
							Column:    match[0] + 1,
							Message:   "Emphasis style should be asterisk (*)",
							Fixable:   true,
							Suggested: "*" + content[1:len(content)-1] + "*",
						})
					}
				}
			}
		} else if style == "_" && strings.Contains(line, "*") {
			if matches := regexp.MustCompile(`\*([^*]+)\*`).FindAllStringIndex(line, -1); len(matches) > 0 {
				for _, match := range matches {
					content := line[match[0]:match[1]]
					if isEmphasis(content) {
						violations = append(violations, Violation{
							Rule:      r.ID(),
							Line:      i + 1,
							Column:    match[0] + 1,
							Message:   "Emphasis style should be underscore (_)",
							Fixable:   true,
							Suggested: "_" + content[1:len(content)-1] + "_",
						})
					}
				}
			}
		}
	}
	return violations
}

func (r *MD049) Fix(content string, path string) FixResult {
	style := r.Style
	if style == "" {
		style = "*"
	}

	var fixed string
	if style == "*" {
		fixed = regexp.MustCompile(`_([^_]+)_`).ReplaceAllString(content, "*$1*")
	} else {
		fixed = regexp.MustCompile(`\*([^*]+)\*`).ReplaceAllString(content, "_$1_")
	}
	return FixResult{Changed: fixed != content, Lines: strings.Split(fixed, "\n")}
}

func isEmphasis(s string) bool {
	if len(s) < 3 {
		return false
	}
	return (s[0] == '_' && s[len(s)-1] == '_') || (s[0] == '*' && s[len(s)-1] == '*')
}

type MD050 struct {
	Style string
}

func init() {
	Register(&MD050{Style: "**"})
}

func (r *MD050) ID() string          { return "MD050" }
func (r *MD050) Name() string        { return "strong-style" }
func (r *MD050) Description() string { return "Strong style should be consistent" }
func (r *MD050) Fixable() bool       { return true }

var strongRegex = regexp.MustCompile(`(__)([^_]+)(__)|(\*\*)([^*]+)(\*\*)`)

func (r *MD050) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	style := r.Style
	if style == "" {
		style = "**"
	}

	for i, line := range lines {
		if style == "**" && strings.Contains(line, "__") {
			if matches := regexp.MustCompile(`__([^_]+)__`).FindAllStringIndex(line, -1); len(matches) > 0 {
				for _, match := range matches {
					violations = append(violations, Violation{
						Rule:      r.ID(),
						Line:      i + 1,
						Column:    match[0] + 1,
						Message:   "Strong style should be asterisk (**)",
						Fixable:   true,
						Suggested: "**" + line[match[0]+2:match[1]-2] + "**",
					})
				}
			}
		} else if style == "__" && strings.Contains(line, "**") {
			if matches := regexp.MustCompile(`\*\*([^*]+)\*\*`).FindAllStringIndex(line, -1); len(matches) > 0 {
				for _, match := range matches {
					violations = append(violations, Violation{
						Rule:      r.ID(),
						Line:      i + 1,
						Column:    match[0] + 1,
						Message:   "Strong style should be underscore (__)",
						Fixable:   true,
						Suggested: "__" + line[match[0]+2:match[1]-2] + "__",
					})
				}
			}
		}
	}
	return violations
}

func (r *MD050) Fix(content string, path string) FixResult {
	style := r.Style
	if style == "" {
		style = "**"
	}

	var fixed string
	if style == "**" {
		fixed = regexp.MustCompile(`__([^_]+)__`).ReplaceAllString(content, "**$1**")
	} else {
		fixed = regexp.MustCompile(`\*\*([^*]+)\*\*`).ReplaceAllString(content, "__$1__")
	}
	return FixResult{Changed: fixed != content, Lines: strings.Split(fixed, "\n")}
}

type MD053 struct{}

func init() {
	Register(&MD053{})
}

func (r *MD053) ID() string          { return "MD053" }
func (r *MD053) Name() string        { return "link-image-reference-definitions" }
func (r *MD053) Description() string { return "Link and image reference definitions should be needed" }
func (r *MD053) Fixable() bool       { return true }

var linkRefDefRegex = regexp.MustCompile(`^\[([^\]]+)\]:\s*(.+)$`)
var linkRefUsageRegex = regexp.MustCompile(`\[([^\]]*)\]\[([^\]]*)\]`)
var imageRefUsageRegex = regexp.MustCompile(`!\[([^\]]*)\]\[([^\]]*)\]`)
var inlineLinkRegex = regexp.MustCompile(`\[([^\]]*)\]\(([^)]*)\)`)
var inlineImageRegex = regexp.MustCompile(`!\[([^\]]*)\]\(([^)]*)\)`)

func (r *MD053) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	defs := make(map[string]int)
	usedRefs := make(map[string]bool)

	for i, line := range lines {
		if matches := linkRefDefRegex.FindStringSubmatch(line); len(matches) > 0 {
			label := strings.ToLower(matches[1])
			defs[label] = i + 1
		}
		for _, matches := range linkRefUsageRegex.FindAllStringSubmatch(line, -1) {
			if matches[2] != "" {
				usedRefs[strings.ToLower(matches[2])] = true
			} else if matches[1] != "" {
				usedRefs[strings.ToLower(matches[1])] = true
			}
		}
		for _, matches := range imageRefUsageRegex.FindAllStringSubmatch(line, -1) {
			if matches[2] != "" {
				usedRefs[strings.ToLower(matches[2])] = true
			} else if matches[1] != "" {
				usedRefs[strings.ToLower(matches[1])] = true
			}
		}
	}

	for label, lineNum := range defs {
		if !usedRefs[label] {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    lineNum,
				Column:  1,
				Message: "Unused link reference definition: " + label,
				Fixable: true,
			})
		}
	}

	return violations
}

func (r *MD053) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	defs := make(map[string]int)
	usedRefs := make(map[string]bool)

	for _, line := range lines {
		for _, matches := range linkRefUsageRegex.FindAllStringSubmatch(line, -1) {
			if matches[2] != "" {
				usedRefs[strings.ToLower(matches[2])] = true
			} else if matches[1] != "" {
				usedRefs[strings.ToLower(matches[1])] = true
			}
		}
		for _, matches := range imageRefUsageRegex.FindAllStringSubmatch(line, -1) {
			if matches[2] != "" {
				usedRefs[strings.ToLower(matches[2])] = true
			} else if matches[1] != "" {
				usedRefs[strings.ToLower(matches[1])] = true
			}
		}
	}

	for i, line := range lines {
		if matches := linkRefDefRegex.FindStringSubmatch(line); len(matches) > 0 {
			label := strings.ToLower(matches[1])
			defs[label] = i
		}
	}

	var result []string
	changed := false
	for i, line := range lines {
		if matches := linkRefDefRegex.FindStringSubmatch(line); len(matches) > 0 {
			label := strings.ToLower(matches[1])
			if !usedRefs[label] {
				changed = true
				continue
			}
		}
		result = append(result, line)
		if i < len(lines)-1 {
		}
	}

	return FixResult{Changed: changed, Lines: result}
}
