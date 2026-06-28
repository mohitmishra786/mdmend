package rules

import (
	"regexp"
	"strings"

	"github.com/mohitmishra786/mdmend/internal/markdown"
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

var md049UnderscoreEmphasis = regexp.MustCompile(`_([^_\n]+?)_`)
var md049AsteriskEmphasis = regexp.MustCompile(`\*([^*\n]+?)\*`)

func (r *MD049) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	style := r.style()
	fenced := markdown.LinesInFencedBlocks(content)

	for i, line := range lines {
		if fenced[i] {
			continue
		}
		masked := markdown.MaskInlineCode(line)
		var re *regexp.Regexp
		var msg string
		if style == "*" {
			re = md049UnderscoreEmphasis
			msg = "Emphasis style should be asterisk (*)"
		} else {
			re = md049AsteriskEmphasis
			msg = "Emphasis style should be underscore (_)"
		}
		for _, match := range re.FindAllStringIndex(masked, -1) {
			segment := line[match[0]:match[1]]
			if !isEmphasis(segment) {
				continue
			}
			violations = append(violations, Violation{
				Rule:      r.ID(),
				Line:      i + 1,
				Column:    match[0] + 1,
				Message:   msg,
				Fixable:   true,
				Suggested: emphasisToStyle(segment, style),
			})
		}
	}
	return violations
}

func (r *MD049) Fix(content string, path string) FixResult {
	style := r.style()
	lines := strings.Split(content, "\n")
	fenced := markdown.LinesInFencedBlocks(content)
	changed := false
	for i, line := range lines {
		if fenced[i] {
			continue
		}
		var re *regexp.Regexp
		if style == "*" {
			re = md049UnderscoreEmphasis
		} else {
			re = md049AsteriskEmphasis
		}
		fixed := markdown.ReplaceOutsideInlineCode(line, re, func(m string) string {
			return emphasisToStyle(m, style)
		})
		if fixed != line {
			lines[i] = fixed
			changed = true
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

func (r *MD049) style() string {
	if r.Style == "" {
		return "*"
	}
	return r.Style
}

func emphasisToStyle(segment, style string) string {
	inner := segment[1 : len(segment)-1]
	if style == "*" {
		return "*" + inner + "*"
	}
	return "_" + inner + "_"
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

var md050UnderscoreStrong = regexp.MustCompile(`__([^_\n]+?)__`)
var md050AsteriskStrong = regexp.MustCompile(`\*\*([^*\n]+?)\*\*`)

func (r *MD050) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	style := r.strongStyle()
	fenced := markdown.LinesInFencedBlocks(content)

	for i, line := range lines {
		if fenced[i] {
			continue
		}
		masked := markdown.MaskInlineCode(line)
		var re *regexp.Regexp
		var msg string
		if style == "**" {
			re = md050UnderscoreStrong
			msg = "Strong style should be asterisk (**)"
		} else {
			re = md050AsteriskStrong
			msg = "Strong style should be underscore (__)"
		}
		for _, match := range re.FindAllStringIndex(masked, -1) {
			violations = append(violations, Violation{
				Rule:      r.ID(),
				Line:      i + 1,
				Column:    match[0] + 1,
				Message:   msg,
				Fixable:   true,
				Suggested: strongToStyle(line[match[0]:match[1]], style),
			})
		}
	}
	return violations
}

func (r *MD050) Fix(content string, path string) FixResult {
	style := r.strongStyle()
	lines := strings.Split(content, "\n")
	fenced := markdown.LinesInFencedBlocks(content)
	changed := false
	for i, line := range lines {
		if fenced[i] {
			continue
		}
		var re *regexp.Regexp
		if style == "**" {
			re = md050UnderscoreStrong
		} else {
			re = md050AsteriskStrong
		}
		fixed := markdown.ReplaceOutsideInlineCode(line, re, func(m string) string {
			return strongToStyle(m, style)
		})
		if fixed != line {
			lines[i] = fixed
			changed = true
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

func (r *MD050) strongStyle() string {
	if r.Style == "" {
		return "**"
	}
	return r.Style
}

func strongToStyle(segment, style string) string {
	inner := segment[2 : len(segment)-2]
	if style == "**" {
		return "**" + inner + "**"
	}
	return "__" + inner + "__"
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
	for _, line := range lines {
		if matches := linkRefDefRegex.FindStringSubmatch(line); len(matches) > 0 {
			label := strings.ToLower(matches[1])
			if !usedRefs[label] {
				changed = true
				continue
			}
		}
		result = append(result, line)
	}

	return FixResult{Changed: changed, Lines: result}
}
