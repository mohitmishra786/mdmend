package parser

import (
	"testing"
)

func TestNewSourceFile(t *testing.T) {
	content := []byte("line1\nline2\nline3")
	sf := NewSourceFile("test.md", content)

	if sf.Path != "test.md" {
		t.Errorf("Path = %q, want test.md", sf.Path)
	}

	if len(sf.Lines) != 3 {
		t.Errorf("Lines count = %d, want 3", len(sf.Lines))
	}
}

func TestSourceFileGetLine(t *testing.T) {
	content := []byte("line1\nline2\nline3")
	sf := NewSourceFile("test.md", content)

	tests := []struct {
		lineNum int
		want    string
	}{
		{1, "line1"},
		{2, "line2"},
		{3, "line3"},
		{0, ""},
		{4, ""},
	}

	for _, tt := range tests {
		got := sf.GetLine(tt.lineNum)
		if got != tt.want {
			t.Errorf("GetLine(%d) = %q, want %q", tt.lineNum, got, tt.want)
		}
	}
}

func TestSourceFileSetLine(t *testing.T) {
	content := []byte("line1\nline2\nline3")
	sf := NewSourceFile("test.md", content)

	sf.SetLine(2, "modified")
	if sf.GetLine(2) != "modified" {
		t.Errorf("SetLine failed, GetLine(2) = %q, want modified", sf.GetLine(2))
	}
}

func TestSourceFileInsertLine(t *testing.T) {
	content := []byte("line1\nline3")
	sf := NewSourceFile("test.md", content)

	sf.InsertLine(2, "line2")
	if len(sf.Lines) != 3 {
		t.Errorf("InsertLine failed, Lines count = %d, want 3", len(sf.Lines))
	}
	if sf.GetLine(2) != "line2" {
		t.Errorf("InsertLine failed, GetLine(2) = %q, want line2", sf.GetLine(2))
	}
}

func TestSourceFileDeleteLine(t *testing.T) {
	content := []byte("line1\nline2\nline3")
	sf := NewSourceFile("test.md", content)

	sf.DeleteLine(2)
	if len(sf.Lines) != 2 {
		t.Errorf("DeleteLine failed, Lines count = %d, want 2", len(sf.Lines))
	}
	if sf.GetLine(2) != "line3" {
		t.Errorf("DeleteLine failed, GetLine(2) = %q, want line3", sf.GetLine(2))
	}
}

func TestSourceFileContent(t *testing.T) {
	content := []byte("line1\nline2\nline3")
	sf := NewSourceFile("test.md", content)

	got := sf.Content()
	want := "line1\nline2\nline3"
	if got != want {
		t.Errorf("Content() = %q, want %q", got, want)
	}
}

func TestSourceFileContentBytes(t *testing.T) {
	content := []byte("line1\nline2")
	sf := NewSourceFile("test.md", content)

	got := sf.ContentBytes()
	if string(got) != string(content) {
		t.Errorf("ContentBytes() = %q, want %q", got, content)
	}
}

func TestSplitLines(t *testing.T) {
	tests := []struct {
		input string
		want  []string
	}{
		{"a\nb\nc", []string{"a", "b", "c"}},
		{"single", []string{"single"}},
		{"", []string(nil)},
		{"trailing\n", []string{"trailing"}},
	}

	for _, tt := range tests {
		got := splitLines([]byte(tt.input))
		if len(got) != len(tt.want) {
			t.Errorf("splitLines(%q) got %d lines, want %d", tt.input, len(got), len(tt.want))
			continue
		}
		for i, line := range got {
			if line != tt.want[i] {
				t.Errorf("splitLines(%q)[%d] = %q, want %q", tt.input, i, line, tt.want[i])
			}
		}
	}
}

func TestBuildLineMap(t *testing.T) {
	content := []byte("ab\ncd\nef")
	lineMap := buildLineMap(content)

	if lineMap[0] != 1 {
		t.Errorf("lineMap[0] = %d, want 1", lineMap[0])
	}
	if lineMap[3] != 2 {
		t.Errorf("lineMap[3] = %d, want 2", lineMap[3])
	}
	if lineMap[6] != 3 {
		t.Errorf("lineMap[6] = %d, want 3", lineMap[6])
	}
}
