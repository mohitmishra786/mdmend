package markdown

import (
	"regexp"
	"testing"
)

func TestFindInlineCodeSpans(t *testing.T) {
	tests := []struct {
		name  string
		line  string
		count int
	}{
		{"no code", "hello world", 0},
		{"single span", "`init_skill.py`", 1},
		{"two spans", "`a` and `b`", 2},
		{"double backtick skip", "`` not code ``", 0},
		{"underscores inside", "`cat_apm_core`", 1},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			spans := FindInlineCodeSpans(tt.line)
			if len(spans) != tt.count {
				t.Errorf("got %d spans, want %d", len(spans), tt.count)
			}
		})
	}
}

func TestRangeInsideSpan(t *testing.T) {
	line := "`init_skill.py`"
	spans := FindInlineCodeSpans(line)
	if !RangeInsideSpan(6, 12, spans) {
		t.Error("_skill_ inside code span should be protected")
	}
	if !RangeInsideSpan(1, 14, spans) {
		t.Error("underscores inside code span should be protected")
	}
}

func TestMaskInlineCode(t *testing.T) {
	line := "- `init_skill.py` — scaffold"
	masked := MaskInlineCode(line)
	if masked == line {
		t.Error("expected underscores to be masked")
	}
	if masked[2] != ' ' {
		t.Error("backtick at start should remain")
	}
}

func TestLinesInFencedBlocks(t *testing.T) {
	content := "# Title\n\n```\necho hello\n```\n\nplain"
	fenced := LinesInFencedBlocks(content)
	if !fenced[2] || !fenced[3] || !fenced[4] {
		t.Errorf("expected lines 2-4 fenced, got %v", fenced)
	}
	if fenced[0] || fenced[5] {
		t.Error("title and plain lines should not be fenced")
	}
}

func TestReplaceOutsideInlineCode(t *testing.T) {
	line := "`init_skill.py` and _italic_"
	re := regexp.MustCompile(`_([^_]+?)_`)
	result := ReplaceOutsideInlineCode(line, re, func(m string) string {
		sub := re.FindStringSubmatch(m)
		if len(sub) < 2 {
			return m
		}
		return "*" + sub[1] + "*"
	})
	if result != "`init_skill.py` and *italic*" {
		t.Errorf("got %q", result)
	}
}