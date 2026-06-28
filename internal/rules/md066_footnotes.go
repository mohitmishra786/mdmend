package rules

import (
	"fmt"
	"strings"
)

type MD066 struct{}

func init() {
	Register(&MD066{})
}

func (r *MD066) ID() string   { return "MD066" }
func (r *MD066) Name() string { return "footnote-validation" }
func (r *MD066) Description() string {
	return "Footnote references must have definitions and vice versa"
}
func (r *MD066) Fixable() bool { return false }

func (r *MD066) Lint(content string, path string) []Violation {
	lines := splitLinesKeep(content)
	fences := collectFences(lines)
	refs := map[string]int{}
	defs := map[string]int{}

	for i, line := range lines {
		lineNum := i + 1
		if lineInFences(lineNum, fences) {
			continue
		}
		trimmed := strings.TrimSpace(line)
		if m := footnoteDefRegex.FindStringSubmatch(trimmed); m != nil {
			defs[m[1]] = lineNum
			continue
		}
		for _, m := range footnoteRefRegex.FindAllStringSubmatch(line, -1) {
			id := m[1]
			if _, isDef := defs[id]; isDef && strings.HasPrefix(trimmed, "[^"+id+"]:") {
				continue
			}
			if _, ok := refs[id]; !ok {
				refs[id] = lineNum
			}
		}
	}

	var violations []Violation
	for id, line := range refs {
		if _, ok := defs[id]; !ok {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    line,
				Column:  1,
				Message: fmt.Sprintf("Footnote reference [^%s] has no corresponding definition", id),
				Fixable: false,
			})
		}
	}
	for id, line := range defs {
		if _, ok := refs[id]; !ok {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    line,
				Column:  1,
				Message: fmt.Sprintf("Footnote definition [^%s] is never referenced", id),
				Fixable: false,
			})
		}
	}
	return violations
}

func (r *MD066) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: splitLinesKeep(content)}
}

type MD067 struct{}

func init() {
	Register(&MD067{})
}

func (r *MD067) ID() string          { return "MD067" }
func (r *MD067) Name() string        { return "footnote-definition-order" }
func (r *MD067) Description() string { return "Footnote definitions should appear in reference order" }
func (r *MD067) Fixable() bool       { return false }

func (r *MD067) Lint(content string, path string) []Violation {
	lines := splitLinesKeep(content)
	fences := collectFences(lines)
	refOrder := []string{}
	defOrder := []string{}
	seenRef := map[string]bool{}

	for i, line := range lines {
		lineNum := i + 1
		if lineInFences(lineNum, fences) {
			continue
		}
		trimmed := strings.TrimSpace(line)
		if m := footnoteDefRegex.FindStringSubmatch(trimmed); m != nil {
			defOrder = append(defOrder, m[1])
			continue
		}
		for _, m := range footnoteRefRegex.FindAllStringSubmatch(line, -1) {
			id := m[1]
			if strings.HasPrefix(trimmed, "[^"+id+"]:") {
				continue
			}
			if !seenRef[id] {
				seenRef[id] = true
				refOrder = append(refOrder, id)
			}
		}
	}

	var violations []Violation
	for i := 0; i < len(refOrder) && i < len(defOrder); i++ {
		if refOrder[i] != defOrder[i] {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    1,
				Column:  1,
				Message: fmt.Sprintf("Footnote [^%s] is defined before [^%s] but referenced after it", defOrder[i], refOrder[i]),
				Fixable: false,
			})
			break
		}
	}
	return violations
}

func (r *MD067) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: splitLinesKeep(content)}
}

type MD068 struct{}

func init() {
	Register(&MD068{})
}

func (r *MD068) ID() string          { return "MD068" }
func (r *MD068) Name() string        { return "empty-footnote-definition" }
func (r *MD068) Description() string { return "Footnote definitions must not be empty" }
func (r *MD068) Fixable() bool       { return false }

func (r *MD068) Lint(content string, path string) []Violation {
	lines := splitLinesKeep(content)
	fences := collectFences(lines)
	var violations []Violation

	for i, line := range lines {
		lineNum := i + 1
		if lineInFences(lineNum, fences) {
			continue
		}
		m := footnoteDefRegex.FindStringSubmatch(strings.TrimSpace(line))
		if m == nil {
			continue
		}
		inline := strings.TrimSpace(m[2])
		if inline != "" {
			continue
		}
		hasBody := false
		for j := i + 1; j < len(lines); j++ {
			next := lines[j]
			if strings.TrimSpace(next) == "" {
				continue
			}
			if strings.HasPrefix(next, "    ") || strings.HasPrefix(next, "\t") {
				if strings.TrimSpace(next) != "" {
					hasBody = true
				}
				continue
			}
			break
		}
		if !hasBody {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    lineNum,
				Column:  1,
				Message: fmt.Sprintf("Footnote definition [^%s] is empty", m[1]),
				Fixable: false,
			})
		}
	}
	return violations
}

func (r *MD068) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: splitLinesKeep(content)}
}
