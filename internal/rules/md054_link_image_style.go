package rules

import (
	"fmt"
	"strings"
)

type linkStyle int

const (
	styleInline linkStyle = iota
	styleReference
	styleAutolink
	styleURLInline
)

type MD054 struct {
	Autolink       bool
	Inline         bool
	Full           bool
	Collapsed      bool
	Shortcut       bool
	URLInline      bool
	PreferredStyle string
}

func init() {
	Register(&MD054{
		Autolink:  true,
		Inline:    true,
		Full:      true,
		Collapsed: true,
		Shortcut:  true,
		URLInline: true,
	})
}

func (r *MD054) ID() string          { return "MD054" }
func (r *MD054) Name() string        { return "link-image-style" }
func (r *MD054) Description() string { return "Links and images should use a consistent style" }
func (r *MD054) Fixable() bool       { return false }

func (r *MD054) Lint(content string, path string) []Violation {
	lines := splitLinesKeep(content)
	fences := collectFences(lines)
	refDefs := map[string]int{}

	for i, line := range lines {
		if m := refDefRegex.FindStringSubmatch(strings.TrimSpace(line)); m != nil {
			refDefs[m[1]] = i + 1
		}
	}

	counts := map[linkStyle]int{}
	occurrences := []struct {
		line    int
		style   linkStyle
		allowed bool
	}{}

	for i, line := range lines {
		lineNum := i + 1
		if lineInFences(lineNum, fences) {
			continue
		}
		if refDefRegex.MatchString(strings.TrimSpace(line)) {
			continue
		}

		for range autolinkRegex.FindAllStringIndex(line, -1) {
			r.recordLinkOccurrence(&counts, &occurrences, lineNum, styleAutolink, r.Autolink)
		}
		for range urlInlineLinkRegex.FindAllStringIndex(line, -1) {
			r.recordLinkOccurrence(&counts, &occurrences, lineNum, styleURLInline, r.URLInline)
		}
		for range imageInlineRegex.FindAllStringIndex(line, -1) {
			r.recordLinkOccurrence(&counts, &occurrences, lineNum, styleInline, r.Inline)
		}
		for _, m := range inlineLinkRegex.FindAllStringIndex(line, -1) {
			if m[0] > 0 && line[m[0]-1] == '!' {
				continue
			}
			r.recordLinkOccurrence(&counts, &occurrences, lineNum, styleInline, r.Inline)
		}
		for range refLinkRegex.FindAllStringIndex(line, -1) {
			r.recordLinkOccurrence(&counts, &occurrences, lineNum, styleReference, r.Full || r.Collapsed || r.Shortcut)
		}
	}

	dominant, ok := r.preferredStyle()
	if !ok {
		stylesUsed := 0
		maxCount := 0
		for st, n := range counts {
			if n == 0 {
				continue
			}
			stylesUsed++
			if n > maxCount {
				maxCount = n
				dominant = st
			}
		}
		if stylesUsed <= 1 {
			return nil
		}
	}

	var violations []Violation
	for _, occ := range occurrences {
		if occ.style == dominant {
			continue
		}
		if !occ.allowed || counts[occ.style] == 0 {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    occ.line,
				Column:  1,
				Message: r.violationMessage(occ.style, dominant),
				Fixable: false,
			})
			continue
		}
		violations = append(violations, Violation{
			Rule:    r.ID(),
			Line:    occ.line,
			Column:  1,
			Message: "Link or image style is inconsistent with the dominant style in this document",
			Fixable: false,
		})
	}
	return violations
}

func (r *MD054) recordLinkOccurrence(counts *map[linkStyle]int, occurrences *[]struct {
	line    int
	style   linkStyle
	allowed bool
}, lineNum int, style linkStyle, allowed bool) {
	if allowed {
		(*counts)[style]++
	}
	*occurrences = append(*occurrences, struct {
		line    int
		style   linkStyle
		allowed bool
	}{lineNum, style, allowed})
}

func (r *MD054) preferredStyle() (linkStyle, bool) {
	switch strings.ToLower(strings.TrimSpace(r.PreferredStyle)) {
	case "inline":
		return styleInline, true
	case "reference":
		return styleReference, true
	case "autolink":
		return styleAutolink, true
	case "url_inline", "url-inline":
		return styleURLInline, true
	default:
		return 0, false
	}
}

func (r *MD054) violationMessage(got, want linkStyle) string {
	if !r.styleAllowed(got) {
		return fmt.Sprintf("Link or image uses disallowed %s style", linkStyleName(got))
	}
	_ = want
	return "Link or image style is inconsistent with the dominant style in this document"
}

func (r *MD054) styleAllowed(style linkStyle) bool {
	switch style {
	case styleInline:
		return r.Inline
	case styleReference:
		return r.Full || r.Collapsed || r.Shortcut
	case styleAutolink:
		return r.Autolink
	case styleURLInline:
		return r.URLInline
	default:
		return false
	}
}

func linkStyleName(style linkStyle) string {
	switch style {
	case styleInline:
		return "inline"
	case styleReference:
		return "reference"
	case styleAutolink:
		return "autolink"
	case styleURLInline:
		return "URL inline"
	default:
		return "unknown"
	}
}

func (r *MD054) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: splitLinesKeep(content)}
}
