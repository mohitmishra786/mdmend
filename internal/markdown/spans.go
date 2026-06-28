package markdown

import "strings"

type SpanKind int

const (
	SpanInlineCode SpanKind = iota
	SpanFencedBlock
)

type Span struct {
	Start int
	End   int
	Kind  SpanKind
}

func FindInlineCodeSpans(line string) []Span {
	var spans []Span
	i := 0
	for i < len(line) {
		if line[i] != '`' {
			i++
			continue
		}
		if i+2 < len(line) && line[i+1] == '`' && line[i+2] == '`' {
			i += 3
			continue
		}
		if i+1 < len(line) && line[i+1] == '`' {
			i += 2
			continue
		}
		start := i
		i++
		for i < len(line) && line[i] != '`' {
			i++
		}
		if i < len(line) {
			spans = append(spans, Span{Start: start, End: i + 1, Kind: SpanInlineCode})
			i++
			continue
		}
		break
	}
	return spans
}

func IsInsideSpan(offset int, spans []Span) bool {
	for _, s := range spans {
		if offset >= s.Start && offset < s.End {
			return true
		}
	}
	return false
}

func RangeInsideSpan(start, end int, spans []Span) bool {
	for _, s := range spans {
		if start >= s.Start && end <= s.End {
			return true
		}
	}
	return false
}

func OverlapsSpan(start, end int, spans []Span) bool {
	for _, s := range spans {
		if start < s.End && end > s.Start {
			return true
		}
	}
	return false
}

func MaskInlineCode(line string) string {
	spans := FindInlineCodeSpans(line)
	if len(spans) == 0 {
		return line
	}
	result := []byte(line)
	for _, s := range spans {
		for i := s.Start; i < s.End; i++ {
			result[i] = ' '
		}
	}
	return string(result)
}

type FenceState struct {
	InBlock    bool
	OpenLine   int
	FenceChar  byte
	FenceLen   int
	Indent     string
}

func NewFenceState() *FenceState {
	return &FenceState{}
}

func (fs *FenceState) ProcessLine(line string, lineNum int) (inFence bool, isFenceLine bool) {
	trimmed := trimSpace(line)
	if len(trimmed) >= 3 && (trimmed[0] == '`' || trimmed[0] == '~') {
		fenceChar := trimmed[0]
		fenceLen := 0
		for fenceLen < len(trimmed) && trimmed[fenceLen] == fenceChar {
			fenceLen++
		}
		if fenceLen >= 3 {
			isFenceLine = true
			if !fs.InBlock {
				fs.InBlock = true
				fs.OpenLine = lineNum
				fs.FenceChar = fenceChar
				fs.FenceLen = fenceLen
				fs.Indent = line[:len(line)-len(trimmed)]
				return true, true
			}
			if trimmed[0] == fs.FenceChar && fenceLen >= fs.FenceLen {
				fs.InBlock = false
				return false, true
			}
		}
	}
	if fs.InBlock {
		return true, false
	}
	return false, false
}

func (fs *FenceState) InFencedBlock() bool {
	return fs.InBlock
}

func trimSpace(s string) string {
	start := 0
	for start < len(s) && (s[start] == ' ' || s[start] == '\t') {
		start++
	}
	end := len(s)
	for end > start && (s[end-1] == ' ' || s[end-1] == '\t' || s[end-1] == '\r') {
		end--
	}
	return s[start:end]
}

func LinesInFencedBlocks(content string) map[int]bool {
	lines := splitLines(content)
	fenced := make(map[int]bool)
	fs := NewFenceState()
	for i, line := range lines {
		inFence, isFence := fs.ProcessLine(line, i)
		if inFence || (isFence && fs.InBlock) {
			fenced[i] = true
		}
		if isFence && !fs.InBlock {
			fenced[i] = true
		}
	}
	return fenced
}

func splitLines(content string) []string {
	if content == "" {
		return nil
	}
	var lines []string
	start := 0
	for i := 0; i < len(content); i++ {
		if content[i] == '\n' {
			lines = append(lines, content[start:i])
			start = i + 1
		}
	}
	if start <= len(content) {
		lines = append(lines, content[start:])
	}
	return lines
}

func ReplaceOutsideInlineCode(line string, re interface {
	FindAllStringIndex(s string, n int) [][]int
}, replacer func(match string) string) string {
	masked := MaskInlineCode(line)
	matches := re.FindAllStringIndex(masked, -1)
	if len(matches) == 0 {
		return line
	}
	type replacement struct {
		start, end int
		text       string
	}
	var reps []replacement
	for _, m := range matches {
		reps = append(reps, replacement{
			start: m[0],
			end:   m[1],
			text:  replacer(line[m[0]:m[1]]),
		})
	}
	var b strings.Builder
	b.Grow(len(line))
	last := 0
	for _, r := range reps {
		b.WriteString(line[last:r.start])
		b.WriteString(r.text)
		last = r.end
	}
	b.WriteString(line[last:])
	return b.String()
}