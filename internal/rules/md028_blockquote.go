package rules

import (
	"strings"
)

type MD028 struct {
	Enabled bool
}

func init() {
	Register(&MD028{Enabled: true})
}

func (r *MD028) ID() string          { return "MD028" }
func (r *MD028) Name() string        { return "no-blanks-blockquote" }
func (r *MD028) Description() string { return "Blank line inside blockquote" }
func (r *MD028) Fixable() bool       { return true }

func (r *MD028) Lint(content string, path string) []Violation {
	if !r.Enabled {
		return nil
	}

	var violations []Violation
	lines := strings.Split(content, "\n")

	inBlockquote := false
	prevWasBlockquote := false

	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		isBlockquoteLine := strings.HasPrefix(trimmed, ">")

		if isBlockquoteLine {
			inBlockquote = true
			prevWasBlockquote = true
		} else if trimmed == "" {
			if inBlockquote && prevWasBlockquote {
				hasFollowingBlockquote := false
				for j := i + 1; j < len(lines); j++ {
					nextTrimmed := strings.TrimSpace(lines[j])
					if nextTrimmed == "" {
						continue
					}
					if strings.HasPrefix(nextTrimmed, ">") {
						hasFollowingBlockquote = true
					}
					break
				}

				if hasFollowingBlockquote {
					violations = append(violations, Violation{
						Rule:    r.ID(),
						Line:    i + 1,
						Column:  1,
						Message: "Blank line inside blockquote breaks continuity",
						Fixable: true,
					})
				}
			}
			prevWasBlockquote = false
		} else {
			if !isBlockquoteLine {
				inBlockquote = false
			}
			prevWasBlockquote = false
		}
	}

	return violations
}

func (r *MD028) Fix(content string, path string) FixResult {
	if !r.Enabled {
		return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
	}

	lines := strings.Split(content, "\n")
	changed := false

	inBlockquote := false
	prevWasBlockquote := false

	for i := 0; i < len(lines); i++ {
		line := lines[i]
		trimmed := strings.TrimSpace(line)
		isBlockquoteLine := strings.HasPrefix(trimmed, ">")

		if isBlockquoteLine {
			inBlockquote = true
			prevWasBlockquote = true
		} else if trimmed == "" {
			if inBlockquote && prevWasBlockquote {
				hasFollowingBlockquote := false
				for j := i + 1; j < len(lines); j++ {
					nextTrimmed := strings.TrimSpace(lines[j])
					if nextTrimmed == "" {
						continue
					}
					if strings.HasPrefix(nextTrimmed, ">") {
						hasFollowingBlockquote = true
					}
					break
				}

				if hasFollowingBlockquote {
					lines[i] = ">"
					changed = true
				}
			}
			prevWasBlockquote = false
		} else {
			if !isBlockquoteLine {
				inBlockquote = false
			}
			prevWasBlockquote = false
		}
	}

	return FixResult{Changed: changed, Lines: lines}
}

type MD033 struct {
	Enabled     bool
	AllowedTags []string
}

func init() {
	Register(&MD033{Enabled: false, AllowedTags: []string{}})
}

func (r *MD033) ID() string          { return "MD033" }
func (r *MD033) Name() string        { return "no-inline-html" }
func (r *MD033) Description() string { return "Inline HTML" }
func (r *MD033) Fixable() bool       { return false }

func (r *MD033) Lint(content string, path string) []Violation {
	if !r.Enabled {
		return nil
	}

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

		htmlTags := findHTMLTags(line)
		for _, tag := range htmlTags {
			if !r.isAllowedTag(tag) {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    i + 1,
					Column:  1,
					Message: "Inline HTML: <" + tag + ">",
					Fixable: false,
				})
			}
		}
	}

	return violations
}

func (r *MD033) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
}

func (r *MD033) isAllowedTag(tag string) bool {
	for _, allowed := range r.AllowedTags {
		if strings.EqualFold(tag, allowed) {
			return true
		}
	}
	return false
}

func findHTMLTags(line string) []string {
	var tags []string
	inTag := false
	tagStart := 0

	for i := 0; i < len(line); i++ {
		if line[i] == '<' && i+1 < len(line) && line[i+1] != '<' {
			if i > 0 && line[i-1] == '`' {
				continue
			}
			inTag = true
			tagStart = i + 1
		} else if inTag && (line[i] == '>' || line[i] == ' ' || line[i] == '/') {
			if i > tagStart {
				tag := line[tagStart:i]
				if isAlpha(tag[0]) {
					tags = append(tags, tag)
				}
			}
			inTag = false
		}
	}

	return tags
}

func isAlpha(c byte) bool {
	return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')
}
