package fixer

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/mohitmishra786/mdmend/internal/config"
)

func TestNew(t *testing.T) {
	cfg := config.Default()
	f := New(cfg)

	if f == nil {
		t.Fatal("New() returned nil")
	}
}

func TestFixNoChanges(t *testing.T) {
	cfg := config.Default()
	f := New(cfg)

	content := "# Heading\n\nParagraph.\n"
	result := f.Fix(content, "test.md")

	if result.Changed {
		t.Error("Fix() should not change clean content")
	}
}

func TestFixWithChanges(t *testing.T) {
	cfg := config.Default()
	f := New(cfg)

	content := "#Heading\n"
	result := f.Fix(content, "test.md")

	if !result.Changed {
		t.Error("Fix() should change malformed content")
	}
}

func TestFixTrailingSpaces(t *testing.T) {
	cfg := config.Default()
	f := New(cfg)

	content := "text  \n"
	result := f.Fix(content, "test.md")

	if !result.Changed {
		t.Error("Fix() should change content with trailing spaces")
	}
	if result.Content == content {
		t.Error("Fix() result should differ from input")
	}
}

func TestFixHardTabs(t *testing.T) {
	cfg := config.Default()
	f := New(cfg)

	content := "\tindented\n"
	result := f.Fix(content, "test.md")

	if !result.Changed {
		t.Error("Fix() should change content with hard tabs")
	}
}

func TestFixMultipleIssues(t *testing.T) {
	cfg := config.Default()
	f := New(cfg)

	content := "#Heading\ntext  \n\n\nmore"
	result := f.Fix(content, "test.md")

	if !result.Changed {
		t.Error("Fix() should change content with multiple issues")
	}
}

func TestLint(t *testing.T) {
	cfg := config.Default()
	f := New(cfg)

	content := "#Heading\n"
	violations := f.Lint(content, "test.md")

	if len(violations) == 0 {
		t.Error("Lint() should find violations")
	}
}

func TestFixWithDiff(t *testing.T) {
	cfg := config.Default()
	f := New(cfg)

	content := "#Heading\n"
	fixed, violations := f.FixWithDiff(content, "test.md")

	if fixed == content {
		t.Error("FixWithDiff() should return changed content")
	}
	if len(violations) == 0 {
		t.Error("FixWithDiff() should return violations")
	}
}

func TestAtomicWrite(t *testing.T) {
	tmpDir := t.TempDir()
	path := filepath.Join(tmpDir, "test.md")

	content := []byte("test content")
	if err := AtomicWrite(path, content); err != nil {
		t.Fatalf("AtomicWrite() error = %v", err)
	}

	read, err := os.ReadFile(path)
	if err != nil {
		t.Fatalf("ReadFile() error = %v", err)
	}

	if string(read) != string(content) {
		t.Errorf("Read content = %q, want %q", read, content)
	}
}

func TestPatcherApply(t *testing.T) {
	tmpDir := t.TempDir()
	path := filepath.Join(tmpDir, "test.md")

	patcher := NewPatcher(path)
	if err := patcher.Apply("new content"); err != nil {
		t.Fatalf("Apply() error = %v", err)
	}

	read, err := os.ReadFile(path)
	if err != nil {
		t.Fatalf("ReadFile() error = %v", err)
	}

	if string(read) != "new content" {
		t.Errorf("Read content = %q, want new content", read)
	}
}

func TestPatcherApplyNestedDir(t *testing.T) {
	tmpDir := t.TempDir()
	path := filepath.Join(tmpDir, "nested", "dir", "test.md")

	patcher := NewPatcher(path)
	if err := patcher.Apply("nested content"); err != nil {
		t.Fatalf("Apply() error = %v", err)
	}

	read, err := os.ReadFile(path)
	if err != nil {
		t.Fatalf("ReadFile() error = %v", err)
	}

	if string(read) != "nested content" {
		t.Errorf("Read content = %q, want nested content", read)
	}
}

func TestApplyFixes(t *testing.T) {
	cfg := config.Default()
	content := "#Heading\n"

	result := ApplyFixes(content, "test.md", cfg)

	if !result.Changed {
		t.Error("ApplyFixes() should change content")
	}
}

func TestDryRun(t *testing.T) {
	cfg := config.Default()
	content := "#Heading\n"

	fixed, violations := DryRun(content, "test.md", cfg)

	if fixed == content {
		t.Error("DryRun() should return changed content")
	}
	if len(violations) == 0 {
		t.Error("DryRun() should return violations")
	}
}

func TestFixWithNoChange(t *testing.T) {
	cfg := config.Default()
	content := "# Heading\n\nParagraph.\n"
	result := ApplyFixes(content, "test.md", cfg)

	if result.Changed {
		t.Error("ApplyFixes() should not change clean content")
	}
}

func TestFixWithFixes(t *testing.T) {
	cfg := config.Default()
	content := "#Heading\n"

	result := ApplyFixes(content, "test.md", cfg)

	if !result.Changed {
		t.Error("ApplyFixes() should change content")
	}
	if result.Fixes == 0 {
		t.Error("ApplyFixes() should count fixes")
	}
}
