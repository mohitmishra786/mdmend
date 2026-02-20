package parser

type SourceFile struct {
	Path    string
	Raw     []byte
	Lines   []string
	LineMap map[int]int
}

func NewSourceFile(path string, content []byte) *SourceFile {
	lines := splitLines(content)
	lineMap := buildLineMap(content)
	return &SourceFile{
		Path:    path,
		Raw:     content,
		Lines:   lines,
		LineMap: lineMap,
	}
}

func splitLines(content []byte) []string {
	var lines []string
	start := 0
	for i, b := range content {
		if b == '\n' {
			lines = append(lines, string(content[start:i]))
			start = i + 1
		}
	}
	if start < len(content) {
		lines = append(lines, string(content[start:]))
	}
	return lines
}

func buildLineMap(content []byte) map[int]int {
	lineMap := make(map[int]int)
	lineNum := 1
	for i := range content {
		lineMap[i] = lineNum
		if content[i] == '\n' {
			lineNum++
		}
	}
	return lineMap
}

func (s *SourceFile) GetLine(lineNum int) string {
	if lineNum < 1 || lineNum > len(s.Lines) {
		return ""
	}
	return s.Lines[lineNum-1]
}

func (s *SourceFile) SetLine(lineNum int, content string) {
	if lineNum >= 1 && lineNum <= len(s.Lines) {
		s.Lines[lineNum-1] = content
	}
}

func (s *SourceFile) InsertLine(lineNum int, content string) {
	if lineNum < 1 {
		lineNum = 1
	}
	if lineNum > len(s.Lines)+1 {
		lineNum = len(s.Lines) + 1
	}
	s.Lines = append(s.Lines[:lineNum-1], append([]string{content}, s.Lines[lineNum-1:]...)...)
}

func (s *SourceFile) DeleteLine(lineNum int) {
	if lineNum >= 1 && lineNum <= len(s.Lines) {
		s.Lines = append(s.Lines[:lineNum-1], s.Lines[lineNum:]...)
	}
}

func (s *SourceFile) Content() string {
	result := ""
	for i, line := range s.Lines {
		if i > 0 {
			result += "\n"
		}
		result += line
	}
	return result
}

func (s *SourceFile) ContentBytes() []byte {
	return []byte(s.Content())
}
