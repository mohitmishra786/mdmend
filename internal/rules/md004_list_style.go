package rules

import (
	"strings"
	"unicode"
)

type MD004 struct {
	Style string
}

func init() {
	Register(&MD004{Style: "dash"})
}

func (r *MD004) ID() string          { return "MD004" }
func (r *MD004) Name() string        { return "ul-style" }
func (r *MD004) Description() string { return "Unordered list style should be consistent" }
func (r *MD004) Fixable() bool       { return true }

var ulMarkers = map[string]string{
	"dash":       "-",
	"asterisk":   "*",
	"plus":       "+",
	"consistent": "",
}

func (r *MD004) getMarker() string {
	style := r.Style
	if style == "" {
		style = "dash"
	}

	if m, ok := ulMarkers[style]; ok && m != "" {
		return m
	}
	return "-"
}

func (r *MD004) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	targetMarker := r.getMarker()

	for i, line := range lines {
		marker := detectListMarker(line)
		if marker != "" && marker != targetMarker {
			violations = append(violations, Violation{
				Rule:      r.ID(),
				Line:      i + 1,
				Column:    listMarkerColumn(line),
				Message:   "Inconsistent unordered list marker style",
				Fixable:   true,
				Suggested: targetMarker,
			})
		}
	}

	return violations
}

func (r *MD004) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	targetMarker := r.getMarker()
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

		newLine := replaceListMarker(line, targetMarker)
		if newLine != line {
			lines[i] = newLine
			changed = true
		}
	}

	return FixResult{Changed: changed, Lines: lines}
}

func detectListMarker(line string) string {
	indent := 0
	for _, c := range line {
		if c == ' ' || c == '\t' {
			indent++
		} else {
			break
		}
	}

	if indent >= len(line) {
		return ""
	}

	rest := line[indent:]

	if len(rest) < 2 {
		return ""
	}

	marker := rest[0]
	if marker != '-' && marker != '*' && marker != '+' {
		return ""
	}

	if rest[1] == ' ' {
		return string(marker)
	}

	return ""
}

func listMarkerColumn(line string) int {
	for i, c := range line {
		if c == '-' || c == '*' || c == '+' {
			if i+1 < len(line) && line[i+1] == ' ' {
				return i + 1
			}
		}
	}
	return 1
}

func replaceListMarker(line string, targetMarker string) string {
	indent := 0
	for _, c := range line {
		if c == ' ' || c == '\t' {
			indent++
		} else {
			break
		}
	}

	if indent >= len(line) {
		return line
	}

	rest := line[indent:]
	if len(rest) < 2 {
		return line
	}

	marker := rest[0]
	if (marker != '-' && marker != '*' && marker != '+') || rest[1] != ' ' {
		return line
	}

	if string(marker) == targetMarker {
		return line
	}

	if isInsideEmphasisOrStrong(line, indent) {
		return line
	}

	return line[:indent] + targetMarker + rest[1:]
}

func isInsideEmphasisOrStrong(line string, pos int) bool {
	before := line[:pos]
	after := line[pos+2:]

	astCount := strings.Count(before, "*") + strings.Count(before, "_")
	if astCount%2 == 1 {
		if strings.Contains(after, "*") || strings.Contains(after, "_") {
			return true
		}
	}

	return false
}

type MD005 struct{}

func init() {
	Register(&MD005{})
}

func (r *MD005) ID() string   { return "MD005" }
func (r *MD005) Name() string { return "list-indent" }
func (r *MD005) Description() string {
	return "Inconsistent indentation for list items at the same level"
}
func (r *MD005) Fixable() bool { return true }

func (r *MD005) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")

	listBlocks := detectListBlocks(lines)

	for _, block := range listBlocks {
		indentGroups := make(map[int][]int)

		for _, lineNum := range block.lines {
			line := lines[lineNum]
			depth := getListDepth(line)
			indent := getLeadingSpaces(line)

			if _, ok := indentGroups[depth]; !ok {
				indentGroups[depth] = []int{}
			}
			indentGroups[depth] = append(indentGroups[depth], indent)
		}

		for _, indents := range indentGroups {
			if len(indents) < 2 {
				continue
			}

			firstIndent := indents[0]
			for i, indent := range indents[1:] {
				if indent != firstIndent {
					violations = append(violations, Violation{
						Rule:    r.ID(),
						Line:    block.lines[i+1] + 1,
						Column:  1,
						Message: "Inconsistent list indentation at same level",
						Fixable: true,
					})
				}
			}
		}
	}

	return violations
}

func (r *MD005) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false

	listBlocks := detectListBlocks(lines)

	for _, block := range listBlocks {
		indentGroups := make(map[int][]struct {
			lineNum int
			indent  int
		})

		for _, lineNum := range block.lines {
			line := lines[lineNum]
			depth := getListDepth(line)
			indent := getLeadingSpaces(line)

			indentGroups[depth] = append(indentGroups[depth], struct {
				lineNum int
				indent  int
			}{lineNum: lineNum, indent: indent})
		}

		for _, entries := range indentGroups {
			if len(entries) < 2 {
				continue
			}

			indentCounts := make(map[int]int)
			for _, e := range entries {
				indentCounts[e.indent]++
			}

			mostCommonIndent := entries[0].indent
			maxCount := 0
			for indent, count := range indentCounts {
				if count > maxCount {
					maxCount = count
					mostCommonIndent = indent
				}
			}

			for _, e := range entries {
				if e.indent != mostCommonIndent {
					line := lines[e.lineNum]
					content := strings.TrimLeft(line, " \t")
					newIndent := strings.Repeat(" ", mostCommonIndent)
					lines[e.lineNum] = newIndent + content
					changed = true
				}
			}
		}
	}

	return FixResult{Changed: changed, Lines: lines}
}

type listBlock struct {
	startLine int
	endLine   int
	lines     []int
}

func detectListBlocks(lines []string) []listBlock {
	var blocks []listBlock
	var currentBlock *listBlock
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

		isList := isListItem(line)

		if isList {
			if currentBlock == nil {
				currentBlock = &listBlock{
					startLine: i,
					lines:     []int{i},
				}
			} else {
				if i == currentBlock.lines[len(currentBlock.lines)-1]+1 ||
					(i == currentBlock.lines[len(currentBlock.lines)-1]+2 && isEmpty(lines[i-1])) {
					currentBlock.lines = append(currentBlock.lines, i)
				} else {
					currentBlock.endLine = currentBlock.lines[len(currentBlock.lines)-1]
					blocks = append(blocks, *currentBlock)
					currentBlock = &listBlock{
						startLine: i,
						lines:     []int{i},
					}
				}
			}
		} else if currentBlock != nil && !isEmpty(line) {
			currentBlock.endLine = currentBlock.lines[len(currentBlock.lines)-1]
			blocks = append(blocks, *currentBlock)
			currentBlock = nil
		}
	}

	if currentBlock != nil {
		currentBlock.endLine = currentBlock.lines[len(currentBlock.lines)-1]
		blocks = append(blocks, *currentBlock)
	}

	return blocks
}

func isListItem(line string) bool {
	trimmed := strings.TrimSpace(line)
	if len(trimmed) == 0 {
		return false
	}

	if trimmed[0] == '-' || trimmed[0] == '*' || trimmed[0] == '+' {
		if len(trimmed) > 1 && trimmed[1] == ' ' {
			return true
		}
	}

	for i, c := range trimmed {
		if !unicode.IsDigit(c) {
			if c == '.' && i > 0 && len(trimmed) > i+1 && trimmed[i+1] == ' ' {
				return true
			}
			break
		}
	}

	return false
}

func getListDepth(line string) int {
	indent := getLeadingSpaces(line)
	return indent / 2
}

func getLeadingSpaces(line string) int {
	count := 0
	for _, c := range line {
		switch c {
		case ' ':
			count++
		case '\t':
			count += 4
		default:
			return count
		}
	}
	return count
}
