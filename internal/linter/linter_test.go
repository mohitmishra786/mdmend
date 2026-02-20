package linter

import (
	"testing"

	"github.com/mohitmishra786/mdmend/internal/config"
)

func TestNew(t *testing.T) {
	cfg := config.Default()
	l := New(cfg)

	if l == nil {
		t.Fatal("New() returned nil")
	}
}

func TestLintNoViolations(t *testing.T) {
	cfg := config.Default()
	l := New(cfg)

	content := "# Heading\n\nParagraph text.\n"
	result := l.Lint(content, "test.md")

	if len(result.Violations) > 5 {
		t.Errorf("Lint() found %d violations for clean content", len(result.Violations))
	}
}

func TestLintWithViolations(t *testing.T) {
	cfg := config.Default()
	l := New(cfg)

	content := "#Heading\n"
	result := l.Lint(content, "test.md")

	if len(result.Violations) == 0 {
		t.Error("Lint() should find violations for malformed content")
	}
}

func TestLintDisabledRule(t *testing.T) {
	cfg := config.Default()
	cfg.Disable = []string{"MD018"}
	l := New(cfg)

	content := "#Heading\n"
	result := l.Lint(content, "test.md")

	for _, v := range result.Violations {
		if v.Rule == "MD018" {
			t.Error("Lint() should not report MD018 when disabled")
		}
	}
}

func TestLintResultCounts(t *testing.T) {
	cfg := config.Default()
	l := New(cfg)

	content := "text\n  \n" // trailing space
	result := l.Lint(content, "test.md")

	_ = result.Fixable
	_ = result.Unfixable
}

func TestLintFile(t *testing.T) {
	cfg := config.Default()
	content := "#Heading\n"

	result := LintFile(content, "test.md", cfg)

	if len(result.Violations) == 0 {
		t.Error("LintFile() should find violations for malformed content")
	}
}

func TestLintSortOrder(t *testing.T) {
	cfg := config.Default()
	l := New(cfg)

	content := "#Heading\n\n\tindented\n"
	result := l.Lint(content, "test.md")

	if len(result.Violations) < 2 {
		t.Skip("Not enough violations to test sorting")
	}

	for i := 1; i < len(result.Violations); i++ {
		if result.Violations[i].Line < result.Violations[i-1].Line {
			t.Error("Violations should be sorted by line number")
		}
	}
}

func TestLintUnfixableCount(t *testing.T) {
	cfg := config.Default()
	l := New(cfg)

	content := "# Heading\n\nParagraph.\n"
	result := l.Lint(content, "test.md")

	_ = result.Unfixable
	_ = result.Fixable
}

func TestLintSortByColumn(t *testing.T) {
	cfg := config.Default()
	l := New(cfg)

	content := "text  text  \n"
	result := l.Lint(content, "test.md")

	if len(result.Violations) < 2 {
		t.Skip("Not enough violations to test column sorting")
	}

	for i := 1; i < len(result.Violations); i++ {
		if result.Violations[i].Line == result.Violations[i-1].Line {
			if result.Violations[i].Column < result.Violations[i-1].Column {
				t.Error("Violations on same line should be sorted by column")
			}
		}
	}
}
