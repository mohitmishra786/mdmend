package rules

import (
	"regexp"
	"strings"

	"github.com/yourhandle/mdmend/internal/inferrer"
)

type MD040 struct {
	Fallback   string
	Confidence float64
	Aggressive bool
}

func init() {
	Register(&MD040{Fallback: "text", Confidence: 0.6, Aggressive: false})
}

func (r *MD040) ID() string          { return "MD040" }
func (r *MD040) Name() string        { return "fenced-code-language" }
func (r *MD040) Description() string { return "Fenced code blocks should have a language specified" }
func (r *MD040) Fixable() bool       { return true }

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
	var prevLines []string

	for i := 0; i < len(lines); i++ {
		prevLines = lines[max(0, i-5):i]
	}

	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if matches := codeFenceLangRegex.FindStringSubmatch(trimmed); len(matches) > 0 {
			if !inCodeBlock {
				lang := strings.TrimSpace(matches[2])
				if lang == "" {
					codeBlockStart = i
					codeBlockContent = []string{}
					inCodeBlock = true
				}
			} else {
				if codeBlockStart >= 0 && len(codeBlockContent) > 0 {
					inferred := inferrer.InferLanguage(codeBlockContent, prevLines)
					confidence := inferred.Confidence
					if confidence < r.Confidence && !r.Aggressive {
						inferred.Language = r.Fallback
					}
					if inferred.Language == "" {
						inferred.Language = r.Fallback
					}
					fenceChar := string(trimmed[0])
					fenceLen := 3
					for j := 1; j < len(trimmed) && j < 10 && trimmed[j] == trimmed[0]; j++ {
						fenceLen++
					}
					fence := strings.Repeat(fenceChar, fenceLen)
					lines[codeBlockStart] = fence + " " + inferred.Language
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
