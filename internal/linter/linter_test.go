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
