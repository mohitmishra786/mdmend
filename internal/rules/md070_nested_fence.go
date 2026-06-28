package rules

import (
	"fmt"
	"regexp"
	"strings"
)

type MD070 struct {
	Enabled bool
}

func init() {
	Register(&MD070{Enabled: false})
}

func (r *MD070) ID() string   { return "MD070" }
func (r *MD070) Name() string { return "nested-code-fence" }
func (r *MD070) Description() string {
	return "Markdown code fences must be long enough to contain inner fence markers"
}
func (r *MD070) Fixable() bool { return true }

var innerFencePattern = regexp.MustCompile("(`{3,}|~{3,})")

func (r *MD070) Lint(content string, path string) []Violation {
	if !r.Enabled {
		return nil
	}

	lines := splitLinesKeep(content)
	var violations []Violation

	for _, f := range collectMarkdownFences(lines) {
		maxInner := maxInnerFenceLength(lines, f)
		if maxInner >= f.length {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    f.openerLine,
				Column:  1,
				Message: fmt.Sprintf("Fence length %d is too short; inner content uses %d %s markers", f.length, maxInner, fenceMarkerName(f.marker)),
				Fixable: true,
			})
		}
	}
	return violations
}

func collectMarkdownFences(lines []string) []fenceInfo {
	var fences []fenceInfo
	for i, line := range lines {
		marker, length, lang, indent, ok := isFenceLine(line)
		if !ok {
			continue
		}
		lang = strings.ToLower(lang)
		if lang != "markdown" && lang != "md" {
			continue
		}
		closerIdx := findMarkdownFenceCloser(lines, i, marker, length)
		f := fenceInfo{
			openerLine: i + 1,
			indent:     indent,
			marker:     marker,
			length:     length,
			lang:       lang,
		}
		if closerIdx >= 0 {
			f.closerLine = closerIdx + 1
		}
		fences = append(fences, f)
	}
	return fences
}

func findMarkdownFenceCloser(lines []string, openerIdx int, marker string, minLen int) int {
	closerIdx := -1
	for i := openerIdx + 1; i < len(lines); i++ {
		m, length, _, _, ok := isFenceLine(lines[i])
		if !ok || m != marker || length < minLen {
			continue
		}
		trimmed := strings.TrimSpace(lines[i])
		if trimmed == strings.Repeat(marker, length) {
			closerIdx = i
		}
	}
	return closerIdx
}

func maxInnerFenceLength(lines []string, f fenceInfo) int {
	start := f.openerLine
	end := len(lines)
	if f.closerLine > 0 {
		end = f.closerLine - 1
	}
	maxInner := 0
	for i := start; i < end; i++ {
		if i < 0 || i >= len(lines) {
			break
		}
		for _, m := range innerFencePattern.FindAllString(lines[i], -1) {
			if len(m) > maxInner && string(m[0]) == f.marker {
				maxInner = len(m)
			}
		}
	}
	return maxInner
}

func fenceMarkerName(marker string) string {
	if marker == "~" {
		return "tilde"
	}
	return "backtick"
}

func (r *MD070) Fix(content string, path string) FixResult {
	if !r.Enabled {
		return FixResult{Changed: false, Lines: splitLinesKeep(content)}
	}

	lines := splitLinesKeep(content)
	changed := false

	for _, f := range collectMarkdownFences(lines) {
		maxInner := maxInnerFenceLength(lines, f)
		if maxInner < f.length {
			continue
		}
		newLen := maxInner + 1
		if f.openerLine-1 < len(lines) {
			lines[f.openerLine-1] = replaceFenceLength(lines[f.openerLine-1], f.marker, newLen, true)
			changed = true
		}
		if f.closerLine > 0 && f.closerLine-1 < len(lines) {
			lines[f.closerLine-1] = replaceFenceLength(lines[f.closerLine-1], f.marker, newLen, false)
			changed = true
		}
	}

	return FixResult{Changed: changed, Lines: lines}
}

func replaceFenceLength(line, marker string, length int, keepInfo bool) string {
	trimmed := strings.TrimLeft(line, " \t")
	indent := line[:len(line)-len(trimmed)]
	fence := strings.Repeat(marker, length)
	if !keepInfo {
		return indent + fence
	}
	_, _, lang, _, ok := isFenceLine(line)
	if !ok || strings.TrimSpace(lang) == "" {
		return indent + fence
	}
	return indent + fence + lang
}
