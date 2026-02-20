package rules

import (
	"strings"
)

type MD055 struct{}

func init() {
	Register(&MD055{})
}

func (r *MD055) ID() string          { return "MD055" }
func (r *MD055) Name() string        { return "table-pipe-style" }
func (r *MD055) Description() string { return "Table pipe style" }
func (r *MD055) Fixable() bool       { return true }

func (r *MD055) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")

	for i, line := range lines {
		if !isTableRow(line) {
			continue
		}

		trimmed := strings.TrimSpace(line)
		if len(trimmed) < 2 {
			continue
		}

		if trimmed[0] != '|' {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  1,
				Message: "Table row should start with pipe",
				Fixable: true,
			})
		}
		if trimmed[len(trimmed)-1] != '|' {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i + 1,
				Column:  len(trimmed),
				Message: "Table row should end with pipe",
				Fixable: true,
			})
		}
	}
	return violations
}

func (r *MD055) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false

	for i, line := range lines {
		if !isTableRow(line) {
			continue
		}

		trimmed := strings.TrimSpace(line)
		if len(trimmed) < 2 {
			continue
		}

		needsStart := trimmed[0] != '|'
		needsEnd := trimmed[len(trimmed)-1] != '|'

		if needsStart || needsEnd {
			if needsStart {
				trimmed = "|" + trimmed
			}
			if needsEnd {
				trimmed = trimmed + "|"
			}
			leadingSpaces := ""
			for _, c := range line {
				if c == ' ' || c == '\t' {
					leadingSpaces += string(c)
				} else {
					break
				}
			}
			lines[i] = leadingSpaces + trimmed
			changed = true
		}
	}
	return FixResult{Changed: changed, Lines: lines}
}

func isTableRow(line string) bool {
	trimmed := strings.TrimSpace(line)
	if trimmed == "" {
		return false
	}
	return strings.Contains(trimmed, "|")
}

type MD058 struct{}

func init() {
	Register(&MD058{})
}

func (r *MD058) ID() string          { return "MD058" }
func (r *MD058) Name() string        { return "blanks-around-tables" }
func (r *MD058) Description() string { return "Tables should be surrounded by blank lines" }
func (r *MD058) Fixable() bool       { return true }

func (r *MD058) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	inTable := false
	tableStart := 0

	for i, line := range lines {
		isTableRow := isTableLine(line)
		if isTableRow && !inTable {
			tableStart = i + 1
			if i > 0 && strings.TrimSpace(lines[i-1]) != "" {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    tableStart,
					Column:  1,
					Message: "Table missing blank line above",
					Fixable: true,
				})
			}
			inTable = true
		} else if !isTableRow && strings.TrimSpace(line) != "" && inTable {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    i,
				Column:  1,
				Message: "Table missing blank line below",
				Fixable: true,
			})
			inTable = false
		} else if strings.TrimSpace(line) == "" {
			inTable = false
		}
	}
	return violations
}

func (r *MD058) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	var result []string
	changed := false
	inTable := false

	for _, line := range lines {
		isTableRow := isTableLine(line)
		if isTableRow && !inTable {
			if len(result) > 0 && result[len(result)-1] != "" {
				result = append(result, "")
				changed = true
			}
			result = append(result, line)
			inTable = true
		} else if isTableRow && inTable {
			result = append(result, line)
		} else if !isTableRow && strings.TrimSpace(line) != "" && inTable {
			result = append(result, "")
			result = append(result, line)
			changed = true
			inTable = false
		} else {
			result = append(result, line)
			if strings.TrimSpace(line) == "" {
				inTable = false
			}
		}
	}

	return FixResult{Changed: changed, Lines: result}
}

func isTableLine(line string) bool {
	trimmed := strings.TrimSpace(line)
	if trimmed == "" {
		return false
	}
	if isTableSeparatorRow(trimmed) {
		return true
	}
	return strings.Count(trimmed, "|") >= 2
}

func isTableSeparatorRow(line string) bool {
	trimmed := strings.TrimSpace(line)
	if len(trimmed) < 3 {
		return false
	}
	if trimmed[0] == '|' {
		trimmed = trimmed[1:]
	}
	if len(trimmed) > 0 && trimmed[len(trimmed)-1] == '|' {
		trimmed = trimmed[:len(trimmed)-1]
	}
	parts := strings.Split(trimmed, "|")
	for _, part := range parts {
		col := strings.TrimSpace(part)
		if col == "" {
			continue
		}
		if !strings.HasPrefix(col, "-") && !strings.HasPrefix(col, ":") {
			return false
		}
		hasDash := false
		for _, c := range col {
			if c == '-' {
				hasDash = true
			} else if c != ':' && c != ' ' {
				return false
			}
		}
		if !hasDash {
			return false
		}
	}
	return true
}
