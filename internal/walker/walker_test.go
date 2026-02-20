package walker

import (
	"os"
	"path/filepath"
	"testing"
)

func TestWalkerWalk(t *testing.T) {
	tmpDir := t.TempDir()

	files := []string{
		"test1.md",
		"test2.md",
		"subdir/test3.md",
		"ignore.txt",
	}

	for _, f := range files {
		path := filepath.Join(tmpDir, f)
		dir := filepath.Dir(path)
		if err := os.MkdirAll(dir, 0755); err != nil {
			t.Fatal(err)
		}
		if err := os.WriteFile(path, []byte("content"), 0644); err != nil {
			t.Fatal(err)
		}
	}

	w := New([]string{})
	result, err := w.Walk([]string{tmpDir})
	if err != nil {
		t.Fatalf("Walk() error = %v", err)
	}

	if len(result) != 3 {
		t.Errorf("Walk() found %d files, want 3", len(result))
	}
}

func TestWalkerIgnore(t *testing.T) {
	tmpDir := t.TempDir()

	files := []string{
		"include.md",
		"exclude.md",
	}

	for _, f := range files {
		path := filepath.Join(tmpDir, f)
		if err := os.WriteFile(path, []byte("content"), 0644); err != nil {
			t.Fatal(err)
		}
	}

	w := New([]string{"exclude.md"})
	result, err := w.Walk([]string{tmpDir})
	if err != nil {
		t.Fatalf("Walk() error = %v", err)
	}

	if len(result) != 1 {
		t.Errorf("Walk() found %d files, want 1", len(result))
	}
}

func TestWalkerSingleFile(t *testing.T) {
	tmpDir := t.TempDir()
	filePath := filepath.Join(tmpDir, "test.md")

	if err := os.WriteFile(filePath, []byte("content"), 0644); err != nil {
		t.Fatal(err)
	}

	w := New([]string{})
	result, err := w.Walk([]string{filePath})
	if err != nil {
		t.Fatalf("Walk() error = %v", err)
	}

	if len(result) != 1 || result[0] != filePath {
		t.Errorf("Walk() = %v, want [%s]", result, filePath)
	}
}

func TestWalkerNonMDFile(t *testing.T) {
	tmpDir := t.TempDir()
	filePath := filepath.Join(tmpDir, "test.txt")

	if err := os.WriteFile(filePath, []byte("content"), 0644); err != nil {
		t.Fatal(err)
	}

	w := New([]string{})
	result, err := w.Walk([]string{filePath})
	if err != nil {
		t.Fatalf("Walk() error = %v", err)
	}

	if len(result) != 0 {
		t.Errorf("Walk() should not find non-md files, got %d", len(result))
	}
}

func TestWalkerGlob(t *testing.T) {
	tmpDir := t.TempDir()

	files := []string{
		"doc1.md",
		"doc2.md",
		"note.txt",
	}

	for _, f := range files {
		path := filepath.Join(tmpDir, f)
		if err := os.WriteFile(path, []byte("content"), 0644); err != nil {
			t.Fatal(err)
		}
	}

	w := New([]string{})
	result, err := w.Walk([]string{tmpDir})
	if err != nil {
		t.Fatalf("Walk() error = %v", err)
	}

	mdCount := 0
	for _, r := range result {
		if filepath.Ext(r) == ".md" {
			mdCount++
		}
	}

	if mdCount != 2 {
		t.Errorf("Walk() found %d md files, want 2", mdCount)
	}
}

func TestWalkerNonExistent(t *testing.T) {
	w := New([]string{})
	_, err := w.Walk([]string{"/nonexistent/path"})
	if err == nil {
		t.Error("Walk() should error for non-existent path")
	}
}
