package rules

import (
	"regexp"
	"strings"
)

type fenceInfo struct {
	openerLine int
	closerLine int
	indent     int
	marker     string
	length     int
	lang       string
}

func splitLinesKeep(content string) []string {
	if content == "" {
		return []string{}
	}
	lines := strings.Split(content, "\n")
	if strings.HasSuffix(content, "\n") {
		return lines
	}
	return lines
}

func isFenceLine(line string) (marker string, length int, lang string, indent int, ok bool) {
	trimmed := strings.TrimSpace(line)
	if trimmed == "" {
		return "", 0, "", 0, false
	}
	leading := len(line) - len(strings.TrimLeft(line, " \t"))
	if leading > 3 {
		return "", 0, "", 0, false
	}
	for _, m := range []string{"```", "~~~"} {
		if strings.HasPrefix(trimmed, m) {
			count := 0
			for count < len(trimmed) && trimmed[count] == m[0] {
				count++
			}
			if count < 3 {
				return "", 0, "", 0, false
			}
			rest := strings.TrimSpace(trimmed[count:])
			return string(m[0]), count, rest, leading, true
		}
	}
	return "", 0, "", 0, false
}

func collectFences(lines []string) []fenceInfo {
	var fences []fenceInfo
	inFence := false
	var current fenceInfo

	for i, line := range lines {
		marker, length, lang, indent, ok := isFenceLine(line)
		if !ok {
			continue
		}
		if !inFence {
			current = fenceInfo{
				openerLine: i + 1,
				indent:     indent,
				marker:     marker,
				length:     length,
				lang:       strings.ToLower(lang),
			}
			inFence = true
			continue
		}
		if marker == current.marker && length >= current.length {
			current.closerLine = i + 1
			fences = append(fences, current)
			inFence = false
		}
	}
	if inFence {
		current.closerLine = 0
		fences = append(fences, current)
	}
	return fences
}

func lineInFences(lineNum int, fences []fenceInfo) bool {
	for _, f := range fences {
		if f.closerLine == 0 {
			if lineNum >= f.openerLine {
				return true
			}
			continue
		}
		if lineNum >= f.openerLine && lineNum <= f.closerLine {
			return true
		}
	}
	return false
}

func isIndentedCodeLine(line string) bool {
	if strings.TrimSpace(line) == "" {
		return false
	}
	if strings.HasPrefix(strings.TrimLeft(line, " \t"), ">") {
		return false
	}
	leading := line[:len(line)-len(strings.TrimLeft(line, " "))]
	return len(leading) >= 4 && (len(leading) == 0 || leading[0] == ' ')
}

func collectIndentedBlocks(lines []string, fences []fenceInfo) [][2]int {
	var blocks [][2]int
	start := -1
	for i, line := range lines {
		lineNum := i + 1
		if lineInFences(lineNum, fences) {
			if start >= 0 {
				blocks = append(blocks, [2]int{start, i})
				start = -1
			}
			continue
		}
		if isIndentedCodeLine(line) {
			if start < 0 {
				start = lineNum
			}
			continue
		}
		if start >= 0 {
			blocks = append(blocks, [2]int{start, i})
			start = -1
		}
	}
	if start >= 0 {
		blocks = append(blocks, [2]int{start, len(lines)})
	}
	return blocks
}

var (
	footnoteRefRegex    = regexp.MustCompile(`\[\^([^\]\s]+)\]`)
	footnoteDefRegex    = regexp.MustCompile(`^\[\^([^\]\s]+)\]:\s*(.*)$`)
	inlineLinkRegex     = regexp.MustCompile(`\[[^\]]+\]\([^)]+\)`)
	imageInlineRegex    = regexp.MustCompile(`!\[[^\]]*\]\([^)]+\)`)
	refLinkRegex        = regexp.MustCompile(`\[[^\]]+\]\[[^\]]*\]`)
	autolinkRegex       = regexp.MustCompile(`<https?://[^>]+>`)
	urlInlineLinkRegex  = regexp.MustCompile(`\[https?://[^\]]+\]\(https?://[^)]+\)`)
	refDefRegex         = regexp.MustCompile(`^\[([^\]]+)\]:\s+(\S+)`)
	tocMarkerStartRegex = regexp.MustCompile(`<!--\s*toc\s*-->`)
	tocMarkerStopRegex  = regexp.MustCompile(`<!--\s*(?:/toc|tocstop)\s*-->`)
	tocItemRegex        = regexp.MustCompile(`^\s*[-*+]\s+\[([^\]]+)\]\((#[^)]+)\)`)
)

func slugifyHeading(text string) string {
	text = strings.ToLower(text)
	var b strings.Builder
	prevDash := false
	for _, r := range text {
		switch {
		case (r >= 'a' && r <= 'z') || (r >= '0' && r <= '9'):
			b.WriteRune(r)
			prevDash = false
		default:
			if !prevDash && b.Len() > 0 {
				b.WriteByte('-')
				prevDash = true
			}
		}
	}
	return strings.Trim(b.String(), "-")
}
