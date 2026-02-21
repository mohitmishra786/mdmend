package mdmend

import (
	"strconv"
	"testing"
)

func TestViolationString(t *testing.T) {
	v := Violation{
		Rule:    "MD009",
		Line:    10,
		Column:  5,
		Message: "Trailing spaces",
	}

	want := "MD009:10:5: Trailing spaces"
	if v.String() != want {
		t.Errorf("String() = %q, want %q", v.String(), want)
	}
}

func TestViolationStringNegativeLine(t *testing.T) {
	v := Violation{
		Rule:    "MD009",
		Line:    -1,
		Column:  0,
		Message: "Error",
	}

	want := "MD009:-1:0: Error"
	if v.String() != want {
		t.Errorf("String() = %q, want %q", v.String(), want)
	}
}

func TestLintResultHasViolations(t *testing.T) {
	tests := []struct {
		name       string
		violations []Violation
		want       bool
	}{
		{"no violations", nil, false},
		{"empty violations", []Violation{}, false},
		{"has violations", []Violation{{Rule: "MD009"}}, true},
		{"multiple violations", []Violation{{Rule: "MD009"}, {Rule: "MD010"}}, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := LintResult{Violations: tt.violations}
			if r.HasViolations() != tt.want {
				t.Errorf("HasViolations() = %v, want %v", r.HasViolations(), tt.want)
			}
		})
	}
}

func TestFileResultHasViolations(t *testing.T) {
	tests := []struct {
		name       string
		violations []Violation
		want       bool
	}{
		{"no violations", nil, false},
		{"empty violations", []Violation{}, false},
		{"has violations", []Violation{{Rule: "MD009"}}, true},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			r := FileResult{Violations: tt.violations}
			if r.HasViolations() != tt.want {
				t.Errorf("HasViolations() = %v, want %v", r.HasViolations(), tt.want)
			}
		})
	}
}

func TestFixResult(t *testing.T) {
	result := FixResult{
		Changed:    true,
		Content:    "fixed content",
		Violations: []Violation{{Rule: "MD009"}},
		Fixes:      1,
	}

	if !result.Changed {
		t.Error("expected Changed to be true")
	}
	if result.Content != "fixed content" {
		t.Errorf("Content = %q, want 'fixed content'", result.Content)
	}
	if result.Fixes != 1 {
		t.Errorf("Fixes = %d, want 1", result.Fixes)
	}
}

func TestFileResult(t *testing.T) {
	result := FileResult{
		Path:       "/path/to/file.md",
		Violations: []Violation{{Rule: "MD009"}, {Rule: "MD010"}},
		Changed:    true,
		Error:      nil,
	}

	if result.Path != "/path/to/file.md" {
		t.Errorf("Path = %q, want '/path/to/file.md'", result.Path)
	}
	if len(result.Violations) != 2 {
		t.Errorf("len(Violations) = %d, want 2", len(result.Violations))
	}
	if !result.Changed {
		t.Error("expected Changed to be true")
	}
}

func TestItoa(t *testing.T) {
	tests := []struct {
		n    int
		want string
	}{
		{0, "0"},
		{1, "1"},
		{9, "9"},
		{10, "10"},
		{42, "42"},
		{100, "100"},
		{999, "999"},
		{-1, "-1"},
		{-42, "-42"},
	}

	for _, tt := range tests {
		t.Run(tt.want, func(t *testing.T) {
			got := strconv.Itoa(tt.n)
			if got != tt.want {
				t.Errorf("strconv.Itoa(%d) = %q, want %q", tt.n, got, tt.want)
			}
		})
	}
}
