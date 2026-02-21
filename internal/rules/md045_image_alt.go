package rules

import (
	"regexp"
	"strings"
)

type MD045 struct {
	Suggest bool
}

func init() {
	Register(&MD045{Suggest: true})
}

func (r *MD045) ID() string          { return "MD045" }
func (r *MD045) Name() string        { return "no-alt-text" }
func (r *MD045) Description() string { return "Images should have alternate text" }
func (r *MD045) Fixable() bool       { return false }

var imageNoAltRegex = regexp.MustCompile(`!\[\]\([^)]+\)`)
var imagePathRegex = regexp.MustCompile(`!\[([^\]]*)\]\(([^)]+)\)`)

func (r *MD045) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")
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

		if imageNoAltRegex.MatchString(line) {
			matches := imagePathRegex.FindAllStringSubmatch(line, -1)
			for _, match := range matches {
				if len(match) >= 3 && match[1] == "" {
					violations = append(violations, Violation{
						Rule:    r.ID(),
						Line:    i + 1,
						Column:  1,
						Message: "Image missing alt text: " + match[2],
						Fixable: false,
					})
				}
			}
		}
	}

	return violations
}

func (r *MD045) Fix(content string, path string) FixResult {
	return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
}

type MD051 struct {
	SuggestClosest bool
	Aggressive     bool
}

func init() {
	Register(&MD051{SuggestClosest: true, Aggressive: false})
}

func (r *MD051) ID() string          { return "MD051" }
func (r *MD051) Name() string        { return "link-fragments" }
func (r *MD051) Description() string { return "Link fragments should be valid" }
func (r *MD051) Fixable() bool       { return true }

var fragmentLinkRegex = regexp.MustCompile(`\[([^\]]*)\]\(#([^)]+)\)`)

func (r *MD051) Lint(content string, path string) []Violation {
	var violations []Violation
	lines := strings.Split(content, "\n")

	validSlugs := collectHeadingSlugs(lines)
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

		matches := fragmentLinkRegex.FindAllStringSubmatchIndex(line, -1)
		for _, match := range matches {
			if len(match) >= 6 {
				fragment := line[match[4]:match[5]]
				if !isValidSlug(fragment, validSlugs) {
					suggestion := ""
					if r.SuggestClosest {
						closest := findClosestSlug(fragment, validSlugs)
						if closest != "" {
							suggestion = closest
						}
					}
					violations = append(violations, Violation{
						Rule:      r.ID(),
						Line:      i + 1,
						Column:    match[4] + 1,
						Message:   "Invalid link fragment: #" + fragment,
						Fixable:   suggestion != "",
						Suggested: suggestion,
					})
				}
			}
		}
	}

	return violations
}

func (r *MD051) Fix(content string, path string) FixResult {
	if !r.Aggressive {
		return FixResult{Changed: false, Lines: strings.Split(content, "\n")}
	}

	lines := strings.Split(content, "\n")
	changed := false

	validSlugs := collectHeadingSlugs(lines)
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

		result := fragmentLinkRegex.ReplaceAllStringFunc(line, func(match string) string {
			submatch := fragmentLinkRegex.FindStringSubmatch(match)
			if len(submatch) >= 3 {
				text := submatch[1]
				fragment := submatch[2]
				if !isValidSlug(fragment, validSlugs) {
					closest := findClosestSlug(fragment, validSlugs)
					if closest != "" && levenshteinDistance(fragment, closest) <= 1 {
						changed = true
						return "[" + text + "](#" + closest + ")"
					}
				}
			}
			return match
		})
		lines[i] = result
	}

	return FixResult{Changed: changed, Lines: lines}
}

func collectHeadingSlugs(lines []string) map[string]bool {
	slugs := make(map[string]bool)

	for i, line := range lines {
		if text, level := extractHeading(line, lines, i); level > 0 && text != "" {
			slug := textToSlug(text)
			slugs[slug] = true
		}
	}

	return slugs
}

func textToSlug(text string) string {
	text = strings.ToLower(text)

	var result []rune
	for _, r := range text {
		if (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9') {
			result = append(result, r)
		} else if r == ' ' || r == '-' {
			if len(result) > 0 && result[len(result)-1] != '-' {
				result = append(result, '-')
			}
		}
	}

	slug := strings.Trim(string(result), "-")
	return slug
}

func isValidSlug(fragment string, validSlugs map[string]bool) bool {
	return validSlugs[fragment] || validSlugs[strings.ToLower(fragment)]
}

func findClosestSlug(fragment string, validSlugs map[string]bool) string {
	fragment = strings.ToLower(fragment)
	closest := ""
	minDist := 999

	for slug := range validSlugs {
		dist := levenshteinDistance(fragment, slug)
		if dist < minDist {
			minDist = dist
			closest = slug
		}
	}

	if minDist <= 2 {
		return closest
	}
	return ""
}

func levenshteinDistance(a, b string) int {
	if len(a) == 0 {
		return len(b)
	}
	if len(b) == 0 {
		return len(a)
	}

	matrix := make([][]int, len(a)+1)
	for i := range matrix {
		matrix[i] = make([]int, len(b)+1)
	}

	for i := 0; i <= len(a); i++ {
		matrix[i][0] = i
	}
	for j := 0; j <= len(b); j++ {
		matrix[0][j] = j
	}

	for i := 1; i <= len(a); i++ {
		for j := 1; j <= len(b); j++ {
			cost := 0
			if a[i-1] != b[j-1] {
				cost = 1
			}
			matrix[i][j] = min3(matrix[i-1][j]+1, matrix[i][j-1]+1, matrix[i-1][j-1]+cost)
		}
	}

	return matrix[len(a)][len(b)]
}

func min3(a, b, c int) int {
	if a < b {
		if a < c {
			return a
		}
		return c
	}
	if b < c {
		return b
	}
	return c
}
