package rules

import (
	"strings"
)

type MD013 struct {
	LineLength int
	CodeBlocks bool
	Tables     bool
	Enabled    bool
}

func init() {
	Register(&MD013{LineLength: 120, CodeBlocks: false, Tables: false, Enabled: false})
}

func (r *MD013) ID() string          { return "MD013" }
func (r *MD013) Name() string        { return "line-length" }
func (r *MD013) Description() string { return "Line length should not exceed configured limit" }
func (r *MD013) Fixable() bool       { return false }

func (r *MD013) Lint(content string, path string) []Violation {
	if !r.Enabled {
		return nil
	}

	var violations []Violation
	lines := strings.Split(content, "\n")
	limit := r.LineLength
	if limit <= 0 {
		limit = 120
	}

	inCodeBlock := false
	inTable := false

	for i, line := range lines {
		trimmed := strings.TrimSpace(line)

		if strings.HasPrefix(trimmed, "```") || strings.HasPrefix(trimmed, "~~~") {
			inCodeBlock = !inCodeBlock
			continue
		}

		if inCodeBlock && !r.CodeBlocks {
			continue
		}

		if isMD013TableLine(line) {
			inTable = true
		} else if inTable && trimmed == "" {
			inTable = false
		}

		if inTable && !r.Tables {
			continue
		}

		if strings.HasPrefix(line, "http://") || strings.HasPrefix(line, "https://") {
			continue
		}

		if len(line) > limit {
			violations = append(violations, Violation{
				Rule:      r.ID(),
				Line:      i + 1,
				Column:    limit + 1,
				Message:   "Line exceeds configured length limit",
				Fixable:   false,
				Suggested: "",
			})
		}
	}

	return violations
}

func (r *MD013) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	return FixResult{Changed: false, Lines: lines}
}

func isMD013TableLine(line string) bool {
	trimmed := strings.TrimSpace(line)
	if len(trimmed) < 3 {
		return false
	}

	if trimmed[0] == '|' && trimmed[len(trimmed)-1] == '|' {
		return true
	}

	if strings.Contains(trimmed, "|") {
		return true
	}

	pipeCount := strings.Count(trimmed, "|")
	return pipeCount >= 2
}

type MD014 struct {
	Enabled bool
	Smart   bool
}

func init() {
	Register(&MD014{Enabled: true, Smart: true})
}

func (r *MD014) ID() string   { return "MD014" }
func (r *MD014) Name() string { return "commands-show-output" }
func (r *MD014) Description() string {
	return "Dollar signs used before commands without showing output"
}
func (r *MD014) Fixable() bool { return true }

var shellLanguages = map[string]bool{
	"bash":     true,
	"sh":       true,
	"shell":    true,
	"console":  true,
	"terminal": true,
	"zsh":      true,
	"fish":     true,
}

func (r *MD014) Lint(content string, path string) []Violation {
	if !r.Enabled {
		return nil
	}

	var violations []Violation
	lines := strings.Split(content, "\n")

	inCodeBlock := false
	codeBlockStart := 0
	codeBlockLang := ""

	for i, line := range lines {
		trimmed := strings.TrimSpace(line)

		if strings.HasPrefix(trimmed, "```") || strings.HasPrefix(trimmed, "~~~") {
			if !inCodeBlock {
				inCodeBlock = true
				codeBlockStart = i + 1
				codeBlockLang = extractCodeBlockLang(trimmed)
			} else {
				inCodeBlock = false
				codeBlockLang = ""
			}
			continue
		}

		if inCodeBlock && isShellBlock(codeBlockLang, lines, codeBlockStart, i) {
			if strings.HasPrefix(line, "$ ") || strings.HasPrefix(line, "$\t") {
				if r.Smart && hasMixedContent(lines, codeBlockStart, i) {
					continue
				}
				violations = append(violations, Violation{
					Rule:      r.ID(),
					Line:      i + 1,
					Column:    1,
					Message:   "Dollar sign before command in code block",
					Fixable:   true,
					Suggested: strings.TrimPrefix(line, "$ "),
				})
			}
		}
	}

	return violations
}

func (r *MD014) Fix(content string, path string) FixResult {
	if !r.Enabled {
		return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
	}

	lines := strings.Split(content, "\n")
	changed := false

	inCodeBlock := false
	codeBlockStart := 0
	codeBlockLang := ""

	for i, line := range lines {
		trimmed := strings.TrimSpace(line)

		if strings.HasPrefix(trimmed, "```") || strings.HasPrefix(trimmed, "~~~") {
			if !inCodeBlock {
				inCodeBlock = true
				codeBlockStart = i + 1
				codeBlockLang = extractCodeBlockLang(trimmed)
			} else {
				inCodeBlock = false
				codeBlockLang = ""
			}
			continue
		}

		if inCodeBlock && isShellBlock(codeBlockLang, lines, codeBlockStart, i) {
			if strings.HasPrefix(line, "$ ") || strings.HasPrefix(line, "$\t") {
				if r.Smart && hasMixedContent(lines, codeBlockStart, i) {
					continue
				}
				lines[i] = strings.TrimPrefix(line, "$ ")
				changed = true
			}
		}
	}

	return FixResult{Changed: changed, Lines: lines}
}

func extractCodeBlockLang(line string) string {
	line = strings.TrimLeft(line, "`~")
	line = strings.TrimSpace(line)
	fields := strings.Fields(line)
	if len(fields) == 0 {
		return ""
	}
	return strings.ToLower(fields[0])
}

func isShellBlock(lang string, lines []string, start, current int) bool {
	if lang != "" {
		return shellLanguages[lang]
	}

	hasDollarPrefix := false
	for i := start; i <= current && i < len(lines); i++ {
		if strings.HasPrefix(lines[i], "$ ") {
			hasDollarPrefix = true
			break
		}
	}

	return hasDollarPrefix
}

func hasMixedContent(lines []string, start, current int) bool {
	hasDollar := false
	hasNonDollar := false

	for i := start; i <= current && i < len(lines); i++ {
		line := lines[i]
		if strings.TrimSpace(line) == "" {
			continue
		}

		if strings.HasPrefix(line, "$ ") {
			hasDollar = true
		} else if !strings.HasPrefix(line, ">") {
			hasNonDollar = true
		}

		if hasDollar && hasNonDollar {
			return true
		}
	}

	return false
}
