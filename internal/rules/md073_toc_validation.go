package rules

import (
	"fmt"
	"strings"
)

type MD073 struct {
	Enabled      bool
	MinLevel     int
	MaxLevel     int
	EnforceOrder bool
}

func init() {
	Register(&MD073{
		Enabled:      false,
		MinLevel:     2,
		MaxLevel:     4,
		EnforceOrder: true,
	})
}

func (r *MD073) ID() string          { return "MD073" }
func (r *MD073) Name() string        { return "toc-validation" }
func (r *MD073) Description() string { return "Table of contents entries must match document headings" }
func (r *MD073) Fixable() bool       { return true }

type tocRegion struct {
	start int
	stop  int
}

func (r *MD073) Lint(content string, path string) []Violation {
	if !r.Enabled {
		return nil
	}

	lines := splitLinesKeep(content)
	region, ok := findTOCRegion(lines)
	if !ok {
		return nil
	}

	headings := r.collectHeadings(lines, region.stop)
	tocEntries := r.collectTOCEntries(lines, region.start, region.stop)
	return r.diffTOC(headings, tocEntries)
}

func findTOCRegion(lines []string) (tocRegion, bool) {
	start := -1
	for i, line := range lines {
		if tocMarkerStartRegex.MatchString(line) {
			start = i + 1
			continue
		}
		if start >= 0 && tocMarkerStopRegex.MatchString(line) {
			return tocRegion{start: start, stop: i}, true
		}
	}
	return tocRegion{}, false
}

type headingEntry struct {
	line   int
	level  int
	text   string
	anchor string
}

func (r *MD073) collectHeadings(lines []string, after int) []headingEntry {
	fences := collectFences(lines)
	minLevel := r.MinLevel
	maxLevel := r.MaxLevel
	if minLevel <= 0 {
		minLevel = 2
	}
	if maxLevel <= 0 {
		maxLevel = 4
	}

	var entries []headingEntry
	anchorCounts := map[string]int{}

	for i := after; i < len(lines); i++ {
		lineNum := i + 1
		if lineInFences(lineNum, fences) {
			continue
		}
		text, level := extractHeading(lines[i], lines, i)
		if level == 0 || level < minLevel || level > maxLevel {
			continue
		}
		anchor := slugifyHeading(text)
		if n := anchorCounts[anchor]; n > 0 {
			anchor = fmt.Sprintf("%s-%d", anchor, n)
		}
		anchorCounts[slugifyHeading(text)]++
		entries = append(entries, headingEntry{
			line:   lineNum,
			level:  level,
			text:   text,
			anchor: "#" + anchor,
		})
	}
	return entries
}

func (r *MD073) collectTOCEntries(lines []string, start, stop int) []headingEntry {
	var entries []headingEntry
	for i := start; i < stop; i++ {
		m := tocItemRegex.FindStringSubmatch(lines[i])
		if m == nil {
			continue
		}
		entries = append(entries, headingEntry{
			line:   i + 1,
			text:   m[1],
			anchor: m[2],
		})
	}
	return entries
}

func (r *MD073) diffTOC(headings, toc []headingEntry) []Violation {
	var violations []Violation
	headingByAnchor := map[string]headingEntry{}
	for _, h := range headings {
		headingByAnchor[h.anchor] = h
	}

	for _, t := range toc {
		h, ok := headingByAnchor[t.anchor]
		if !ok {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    t.line,
				Column:  1,
				Message: fmt.Sprintf("TOC entry %q points to missing heading %s", t.text, t.anchor),
				Fixable: true,
			})
			continue
		}
		if h.text != t.text {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    t.line,
				Column:  1,
				Message: fmt.Sprintf("TOC text %q does not match heading %q", t.text, h.text),
				Fixable: true,
			})
		}
	}

	tocAnchors := map[string]bool{}
	for _, t := range toc {
		tocAnchors[t.anchor] = true
	}
	for _, h := range headings {
		if !tocAnchors[h.anchor] {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    h.line,
				Column:  1,
				Message: fmt.Sprintf("Heading %q is missing from the table of contents", h.text),
				Fixable: true,
			})
		}
	}

	if r.EnforceOrder && len(violations) == 0 {
		for i := 0; i < len(headings) && i < len(toc); i++ {
			if headings[i].anchor != toc[i].anchor {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    toc[i].line,
					Column:  1,
					Message: "TOC entry order does not match document heading order",
					Fixable: true,
				})
				break
			}
		}
	}
	return violations
}

func (r *MD073) Fix(content string, path string) FixResult {
	if !r.Enabled {
		return FixResult{Changed: false, Lines: splitLinesKeep(content)}
	}

	lines := splitLinesKeep(content)
	region, ok := findTOCRegion(lines)
	if !ok {
		return FixResult{Changed: false, Lines: lines}
	}

	headings := r.collectHeadings(lines, region.stop)
	var tocLines []string
	for _, h := range headings {
		indent := strings.Repeat(" ", (h.level-r.MinLevel)*2)
		if indent == "" && h.level > r.MinLevel {
			indent = strings.Repeat(" ", (h.level-1)*2)
		}
		tocLines = append(tocLines, fmt.Sprintf("%s- [%s](%s)", indent, h.text, h.anchor))
	}

	newLines := make([]string, 0, len(lines)-(region.stop-region.start)+len(tocLines))
	newLines = append(newLines, lines[:region.start]...)
	newLines = append(newLines, tocLines...)
	newLines = append(newLines, lines[region.stop:]...)

	return FixResult{Changed: true, Lines: newLines}
}
