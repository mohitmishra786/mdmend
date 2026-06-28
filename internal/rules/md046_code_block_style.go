package rules

type MD046 struct {
	Style string
}

func init() {
	Register(&MD046{Style: "consistent"})
}

func (r *MD046) ID() string   { return "MD046" }
func (r *MD046) Name() string { return "code-block-style" }
func (r *MD046) Description() string {
	return "Code blocks should use a consistent style (fenced or indented)"
}
func (r *MD046) Fixable() bool { return false }

func (r *MD046) Lint(content string, path string) []Violation {
	lines := splitLinesKeep(content)
	fences := collectFences(lines)
	indented := collectIndentedBlocks(lines, fences)

	style := r.Style
	if style == "" {
		style = "consistent"
	}

	switch style {
	case "fenced":
		return r.violationsForIndented(indented, "fenced code blocks are required")
	case "indented":
		return r.violationsForFenced(fences, "indented code blocks are required")
	default:
		if len(fences) > 0 && len(indented) > 0 {
			dominant := "fenced"
			if len(indented) > len(fences) {
				dominant = "indented"
			}
			var violations []Violation
			if dominant == "fenced" {
				violations = append(violations, r.violationsForIndented(indented, "document uses fenced code blocks; indented blocks are inconsistent")...)
			} else {
				violations = append(violations, r.violationsForFenced(fences, "document uses indented code blocks; fenced blocks are inconsistent")...)
			}
			return violations
		}
	}

	var violations []Violation
	for _, f := range fences {
		if f.closerLine == 0 {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    f.openerLine,
				Column:  1,
				Message: "Fenced code block is not closed",
				Fixable: false,
			})
		}
	}
	return violations
}

func (r *MD046) violationsForIndented(blocks [][2]int, msg string) []Violation {
	var violations []Violation
	for _, b := range blocks {
		violations = append(violations, Violation{
			Rule:    r.ID(),
			Line:    b[0],
			Column:  1,
			Message: msg,
			Fixable: false,
		})
	}
	return violations
}

func (r *MD046) violationsForFenced(fences []fenceInfo, msg string) []Violation {
	var violations []Violation
	for _, f := range fences {
		violations = append(violations, Violation{
			Rule:    r.ID(),
			Line:    f.openerLine,
			Column:  1,
			Message: msg,
			Fixable: false,
		})
	}
	return violations
}

func (r *MD046) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: splitLinesKeep(content)}
}
