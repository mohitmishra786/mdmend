package rules

import (
	"regexp"
	"strings"

	"github.com/mohitmishra786/mdmend/internal/inferrer"
)

type MD040 struct {
	Fallback   string
	Confidence float64
	Aggressive bool
}

func init() {
	Register(&MD040{Fallback: "text", Confidence: 0.6, Aggressive: false})
}

func (r *MD040) ID() string                 { return "MD040" }
func (r *MD040) Name() string               { return "fenced-code-language" }
func (r *MD040) Description() string        { return "Fenced code blocks should have a language specified" }
func (r *MD040) Fixable() bool              { return true }
func (r *MD040) SetAggressive(enabled bool) { r.Aggressive = enabled }

var codeFenceLangRegex = regexp.MustCompile("^(`{3,}|~{3,})(.*)$")

func (r *MD040) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	inCodeBlock := false

	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if matches := codeFenceLangRegex.FindStringSubmatch(trimmed); len(matches) > 0 {
			if !inCodeBlock {
				lang := strings.TrimSpace(matches[2])
				if lang == "" {
					violations = append(violations, Violation{
						Rule:    r.ID(),
						Line:    i + 1,
						Column:  1,
						Message: "Fenced code block has no language specified",
						Fixable: true,
					})
				}
			}
			inCodeBlock = !inCodeBlock
		}
	}
	return violations
}

func (r *MD040) Fix(content string, path string) FixResult {
	lines := strings.Split(content, "\n")
	changed := false
	inCodeBlock := false
	var codeBlockContent []string
	codeBlockStart := -1
	openIndent := ""
	openFenceChar := byte('`')
	openFenceLen := 3

	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if matches := codeFenceLangRegex.FindStringSubmatch(trimmed); len(matches) > 0 {
			if !inCodeBlock {
				lang := strings.TrimSpace(matches[2])
				if lang == "" {
					codeBlockStart = i
					codeBlockContent = []string{}
					inCodeBlock = true
					openIndent = line[:len(line)-len(strings.TrimLeft(line, " \t"))]
					openFenceChar = trimmed[0]
					openFenceLen = 0
					for openFenceLen < len(trimmed) && trimmed[openFenceLen] == openFenceChar {
						openFenceLen++
					}
				}
			} else {
				if codeBlockStart >= 0 {
					prevLines := lines[max(0, codeBlockStart-5):codeBlockStart]
					inferred := inferrer.InferLanguage(codeBlockContent, prevLines)
					if inferred.Confidence < r.Confidence && !r.Aggressive {
						inferred.Language = r.Fallback
					}
					if inferred.Language == "" {
						inferred.Language = r.Fallback
					}
					fence := strings.Repeat(string(openFenceChar), openFenceLen)
					lines[codeBlockStart] = openIndent + fence + " " + inferred.Language
					changed = true
				}
				inCodeBlock = false
				codeBlockStart = -1
				codeBlockContent = nil
			}
		} else if inCodeBlock {
			codeBlockContent = append(codeBlockContent, line)
		}
	}

	return FixResult{Changed: changed, Lines: lines}
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
