package rules

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
)

type MD029 struct {
	Style string
}

func init() {
	Register(&MD029{Style: "one_or_ordered"})
}

func (r *MD029) ID() string          { return "MD029" }
func (r *MD029) Name() string        { return "ol-prefix" }
func (r *MD029) Description() string { return "Ordered list item prefix style should be consistent" }
func (r *MD029) Fixable() bool       { return false }

var orderedListPrefixRegex = regexp.MustCompile(`^(\s*)(\d+)([.)]) +(\S)`)

func (r *MD029) getStyle() string {
	if r.Style == "" {
		return "one_or_ordered"
	}
	return r.Style
}

func (r *MD029) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
	inCodeBlock := false
	style := r.getStyle()

	i := 0
	for i < len(lines) {
		line := lines[i]
		trimmed := strings.TrimSpace(line)
		if strings.HasPrefix(trimmed, "```") || strings.HasPrefix(trimmed, "~~~") {
			inCodeBlock = !inCodeBlock
			i++
			continue
		}
		if inCodeBlock {
			i++
			continue
		}

		matches := orderedListPrefixRegex.FindStringSubmatch(line)
		if matches == nil {
			i++
			continue
		}

		indent := matches[1]
		blockStart := i
		var items []orderedListItem
		for i < len(lines) {
			current := lines[i]
			currentTrimmed := strings.TrimSpace(current)
			if strings.HasPrefix(currentTrimmed, "```") || strings.HasPrefix(currentTrimmed, "~~~") {
				break
			}
			itemMatches := orderedListPrefixRegex.FindStringSubmatch(current)
			if itemMatches == nil || itemMatches[1] != indent {
				break
			}
			num, err := strconv.Atoi(itemMatches[2])
			if err != nil {
				break
			}
			items = append(items, orderedListItem{
				line:   i + 1,
				number: num,
				prefix: itemMatches[3],
			})
			i++
		}

		_ = blockStart
		violations = append(violations, r.validateListBlock(items, style)...)
	}

	return violations
}

type orderedListItem struct {
	line   int
	number int
	prefix string
}

func (r *MD029) validateListBlock(items []orderedListItem, style string) []Violation {
	if len(items) == 0 {
		return nil
	}

	switch style {
	case "one":
		return r.validateOneStyle(items)
	case "ordered":
		return r.validateOrderedStyle(items, false)
	case "zero":
		return r.validateZeroStyle(items)
	case "one_or_ordered":
		if items[0].number == 1 && allSameNumber(items, 1) {
			return r.validateOneStyle(items)
		}
		if items[0].number == 0 && allIncrementingFrom(items, 0) {
			return r.validateOrderedStyle(items, true)
		}
		if allIncrementingFrom(items, 1) {
			return r.validateOrderedStyle(items, false)
		}
		return r.validateOneOrOrderedStyle(items)
	default:
		return r.validateOneOrOrderedStyle(items)
	}
}

func (r *MD029) validateOneStyle(items []orderedListItem) []Violation {
	var violations []Violation
	for _, item := range items {
		if item.number != 1 {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    item.line,
				Column:  1,
				Message: fmt.Sprintf("Expected ordered list item prefix '1.', found '%d.'", item.number),
				Fixable: false,
			})
		}
	}
	return violations
}

func (r *MD029) validateZeroStyle(items []orderedListItem) []Violation {
	var violations []Violation
	for _, item := range items {
		if item.number != 0 {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    item.line,
				Column:  1,
				Message: fmt.Sprintf("Expected ordered list item prefix '0.', found '%d.'", item.number),
				Fixable: false,
			})
		}
	}
	return violations
}

func (r *MD029) validateOrderedStyle(items []orderedListItem, zeroBased bool) []Violation {
	var violations []Violation
	expected := items[0].number
	if zeroBased {
		for idx, item := range items {
			want := expected + idx
			if item.number != want {
				violations = append(violations, Violation{
					Rule:    r.ID(),
					Line:    item.line,
					Column:  1,
					Message: fmt.Sprintf("Expected ordered list item prefix '%d.', found '%d.'", want, item.number),
					Fixable: false,
				})
			}
		}
		return violations
	}

	for idx, item := range items {
		want := expected + idx
		if item.number != want {
			violations = append(violations, Violation{
				Rule:    r.ID(),
				Line:    item.line,
				Column:  1,
				Message: fmt.Sprintf("Expected ordered list item prefix '%d.', found '%d.'", want, item.number),
				Fixable: false,
			})
		}
	}
	return violations
}

func (r *MD029) validateOneOrOrderedStyle(items []orderedListItem) []Violation {
	if allSameNumber(items, 1) {
		return nil
	}
	if allIncrementingFrom(items, 1) {
		return nil
	}
	if items[0].number == 0 && allIncrementingFrom(items, 0) {
		return nil
	}

	var violations []Violation
	for _, item := range items {
		violations = append(violations, Violation{
			Rule:    r.ID(),
			Line:    item.line,
			Column:  1,
			Message: "Ordered list item prefix should be '1.' for every item or increment by one",
			Fixable: false,
		})
	}
	return violations
}

func allSameNumber(items []orderedListItem, n int) bool {
	for _, item := range items {
		if item.number != n {
			return false
		}
	}
	return true
}

func allIncrementingFrom(items []orderedListItem, start int) bool {
	for idx, item := range items {
		if item.number != start+idx {
			return false
		}
	}
	return true
}

func (r *MD029) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
}