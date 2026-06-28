package fixer

import (
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/mohitmishra786/mdmend/internal/config"
)

func TestCorpusCleanRoundTrip(t *testing.T) {
	root := filepath.Join("..", "..", "testdata", "corpus")
	cfg := config.Default()
	cfg.Disable = append(cfg.Disable, "MD040", "MD034", "MD057")

	err := filepath.WalkDir(root, func(path string, d os.DirEntry, err error) error {
		if err != nil || d.IsDir() || !strings.HasSuffix(path, ".md") {
			return err
		}
		name := filepath.Base(path)
		content, err := os.ReadFile(path)
		if err != nil {
			return err
		}
		original := string(content)
		f := New(cfg)
		violations := f.Lint(original, name)
		fixable := 0
		for _, v := range violations {
			if v.Fixable {
				fixable++
			}
		}
		if fixable > 0 {
			t.Logf("%s has %d fixable violations (allowed)", name, fixable)
		}
		result := f.Fix(original, name)
		if strings.Contains(result.Content, "init*skill") || strings.Contains(result.Content, "* *") {
			t.Errorf("%s: fix corrupted content", name)
		}
		return nil
	})
	if err != nil {
		t.Fatal(err)
	}
}
