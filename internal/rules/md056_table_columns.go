package rules

import (
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

type MD056 struct {
	PadShortRows bool
}

func init() {
	Register(&MD056{PadShortRows: true})
}

func (r *MD056) ID() string          { return "MD056" }
func (r *MD056) Name() string        { return "table-column-count" }
func (r *MD056) Description() string { return "Table column count should be consistent" }
func (r *MD056) Fixable() bool       { return true }

func (r *MD056) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")

	tables := detectTables(lines)
	for _, table := range tables {
		if len(table.rows) < 1 {
			continue
		}

		headerCols := countColumns(lines[table.rows[0]])

		for i := 1; i < len(table.rows); i++ {
			rowNum := table.rows[i]
			rowCols := countColumns(lines[rowNum])

			if rowCols < headerCols {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    rowNum + 1,
					Column:  1,
					Message: "Table row has fewer columns than header",
					Fixable: r.PadShortRows,
				})
			} else if rowCols > headerCols {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    rowNum + 1,
					Column:  1,
					Message: "Table row has more columns than header",
					Fixable: false,
				})
			}
		}
	}

	return violations
}

func (r *MD056) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false

	if !r.PadShortRows {
		return FixResult{Changed: false, Lines: lines}
	}

	tables := detectTables(lines)
	for _, table := range tables {
		if len(table.rows) < 1 {
			continue
		}

		headerCols := countColumns(lines[table.rows[0]])

		for i := 1; i < len(table.rows); i++ {
			rowNum := table.rows[i]
			rowCols := countColumns(lines[rowNum])

			if rowCols < headerCols {
				lines[rowNum] = padTableRow(lines[rowNum], headerCols-rowCols)
				changed = true
			}
		}
	}

	return FixResult{Changed: changed, Lines: lines}
}

type tableInfo struct {
	startLine int
	rows      []int
}

func detectTables(lines []string) []tableInfo {
	var tables []tableInfo
	var currentTable *tableInfo

	for i, line := range lines {
		if isTableSeparatorLine(line) {
			if currentTable != nil {
				currentTable.rows = append(currentTable.rows, i)
			}
			continue
		}

		if isMD056TableRow(line) {
			if currentTable == nil {
				currentTable = &tableInfo{
					startLine: i,
					rows:      []int{i},
				}
			} else {
				if i == currentTable.rows[len(currentTable.rows)-1]+1 {
					currentTable.rows = append(currentTable.rows, i)
				} else {
					tables = append(tables, *currentTable)
					currentTable = &tableInfo{
						startLine: i,
						rows:      []int{i},
					}
				}
			}
		} else if currentTable != nil {
			tables = append(tables, *currentTable)
			currentTable = nil
		}
	}

	if currentTable != nil {
		tables = append(tables, *currentTable)
	}

	return tables
}

func isMD056TableRow(line string) bool {
	trimmed := strings.TrimSpace(line)
	return strings.Contains(trimmed, "|")
}

func isTableSeparatorLine(line string) bool {
	trimmed := strings.TrimSpace(line)
	if len(trimmed) < 3 {
		return false
	}

	if !strings.Contains(trimmed, "|") {
		return false
	}

	pipeCount := strings.Count(trimmed, "|")
	dashCount := strings.Count(trimmed, "-")
	colonCount := strings.Count(trimmed, ":")

	return dashCount+colonCount >= pipeCount
}

func countColumns(line string) int {
	trimmed := strings.TrimSpace(line)
	if trimmed == "" {
		return 0
	}

	leadingPipe := strings.HasPrefix(trimmed, "|")
	trailingPipe := strings.HasSuffix(trimmed, "|")

	pipeCount := strings.Count(trimmed, "|")

	if leadingPipe && trailingPipe {
		return pipeCount
	} else if leadingPipe || trailingPipe {
		return pipeCount
	}

	return pipeCount + 1
}

func padTableRow(line string, extraCols int) string {
	trimmed := strings.TrimSpace(line)
	if extraCols <= 0 {
		return line
	}

	suffix := ""
	if strings.HasSuffix(trimmed, "|") {
		for i := 0; i < extraCols; i++ {
			suffix += " |"
		}
		return line + suffix
	}

	for i := 0; i < extraCols; i++ {
		suffix += " |"
	}

	return line + suffix
}

type MD057 struct {
	SuggestClosest bool
}

func init() {
	Register(&MD057{SuggestClosest: true})
}

func (r *MD057) ID() string          { return "MD057" }
func (r *MD057) Name() string        { return "broken-links" }
func (r *MD057) Description() string { return "Broken relative links should be fixed" }
func (r *MD057) Fixable() bool       { return false }

var relativeLinkRegex = regexp.MustCompile(`\[([^\]]*)\]\(([^)#][^)]*)\)`)

func (r *MD057) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	baseDir := filepath.Dir(path)
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

		matches := relativeLinkRegex.FindAllStringSubmatchIndex(line, -1)
		for _, match := range matches {
			if len(match) >= 6 {
				linkPath := line[match[4]:match[5]]

				if strings.HasPrefix(linkPath, "http://") || strings.HasPrefix(linkPath, "https://") {
					continue
				}

				if strings.HasPrefix(linkPath, "#") {
					continue
				}

				anchorPos := strings.Index(linkPath, "#")
				if anchorPos > 0 {
					linkPath = linkPath[:anchorPos]
				}

				targetPath := filepath.Join(baseDir, linkPath)
				if !fileExists(targetPath) {
					suggestion := ""
					if r.SuggestClosest {
						suggestion = findClosestFile(baseDir, linkPath)
					}
					violations = append(violations, Violation{
						Rule:      r.ID(),
						Line:      i + 1,
						Column:    match[4] + 1,
						Message:   "Broken relative link: " + linkPath,
						Fixable:   false,
						Suggested: suggestion,
					})
				}
			}
		}
	}

	return violations
}

func (r *MD057) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
}

func fileExists(path string) bool {
	_, err := os.Stat(path)
	return err == nil
}

func findClosestFile(baseDir, targetPath string) string {
	targetName := filepath.Base(targetPath)

	entries, err := os.ReadDir(baseDir)
	if err != nil {
		return ""
	}

	for _, entry := range entries {
		if entry.IsDir() {
			continue
		}

		if entry.Name() == targetName {
			return entry.Name()
		}

		if levenshteinDistance(strings.ToLower(entry.Name()), strings.ToLower(targetName)) <= 2 {
			return entry.Name()
		}
	}

	return ""
}

type MD043 struct {
	Headings []string
}

func init() {
	Register(&MD043{Headings: []string{}})
}

func (r *MD043) ID() string          { return "MD043" }
func (r *MD043) Name() string        { return "required-headings" }
func (r *MD043) Description() string { return "Required heading structure" }
func (r *MD043) Fixable() bool       { return false }

func (r *MD043) Lint(content string, path string) []Violation {
	if len(r.Headings) == 0 {
		return nil
	}

	var violations []Violation
	lines := strings.Split(content, "\n")

	foundHeadings := make(map[string]int)
	for i, line := range lines {
		if text, level := extractHeading(line, lines, i); level > 0 {
			heading := strings.Repeat("#", level) + " " + text
			foundHeadings[heading] = i + 1
		}
	}

	for _, required := range r.Headings {
		if _, found := foundHeadings[required]; !found {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    1,
				Column:  1,
				Message: "Missing required heading: " + required,
				Fixable: false,
			})
		}
	}

	return violations
}

func (r *MD043) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
}

type MD052 struct{}

func init() {
	Register(&MD052{})
}

func (r *MD052) ID() string          { return "MD052" }
func (r *MD052) Name() string        { return "reference-links" }
func (r *MD052) Description() string { return "Reference links should have definitions" }
func (r *MD052) Fixable() bool       { return false }

var referenceLinkRegex = regexp.MustCompile(`\[([^\]]+)\]\[([^\]]+)\]`)
var linkDefinitionRegex = regexp.MustCompile(`^\[([^\]]+)\]:\s*`)

func (r *MD052) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")

	definedRefs := make(map[string]bool)
	inCodeBlock := false

	for _, line := range lines {
		trimmed := strings.TrimSpace(line)
		if strings.HasPrefix(trimmed, "```") || strings.HasPrefix(trimmed, "~~~") {
			inCodeBlock = !inCodeBlock
			continue
		}

		if inCodeBlock {
			continue
		}

		if matches := linkDefinitionRegex.FindStringSubmatch(line); len(matches) > 1 {
			definedRefs[strings.ToLower(matches[1])] = true
		}
	}

	inCodeBlock = false
	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if strings.HasPrefix(trimmed, "```") || strings.HasPrefix(trimmed, "~~~") {
			inCodeBlock = !inCodeBlock
			continue
		}

		if inCodeBlock {
			continue
		}

		matches := referenceLinkRegex.FindAllStringSubmatchIndex(line, -1)
		for _, match := range matches {
			if len(match) >= 6 {
				ref := line[match[4]:match[5]]
				if !definedRefs[strings.ToLower(ref)] {
					violations = append(violations, Violation{
						Rule:    r.ID(),
						Line:    i + 1,
						Column:  match[4] + 1,
						Message: "Undefined reference link: [" + ref + "]",
						Fixable: false,
					})
				}
			}
		}
	}

	return violations
}

func (r *MD052) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
}
