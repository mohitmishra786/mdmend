package fixer

import (
	"os"
	"path/filepath"
	"strings"
	"testing"

	"github.com/mohitmishra786/mdmend/internal/config"
)

func TestGoldenFixtures(t *testing.T) {
	root := filepath.Join("..", "..", "testdata")
	fixtures, err := filepath.Glob(filepath.Join(root, "fixtures", "*.md"))
	if err != nil {
		t.Fatal(err)
	}
	if len(fixtures) == 0 {
		t.Fatal("no golden fixtures found")
	}

	for _, fixture := range fixtures {
		name := filepath.Base(fixture)
		golden := filepath.Join(root, "golden", name)
		if _, err := os.Stat(golden); os.IsNotExist(err) {
			t.Errorf("missing golden file for %s", name)
			continue
		}

		t.Run(name, func(t *testing.T) {
			input, err := os.ReadFile(fixture)
			if err != nil {
				t.Fatal(err)
			}
			want, err := os.ReadFile(golden)
			if err != nil {
				t.Fatal(err)
			}

			cfg := goldenFixtureConfig(name)
			result := applyGoldenFixes(string(input), name, cfg)
			got := result.Content
			if got != string(want) {
				t.Errorf("output mismatch for %s\n--- want\n%s\n--- got\n%s", name, string(want), got)
			}
		})
	}
}

func goldenFixtureConfig(name string) *config.Config {
	cfg := config.Default()
	cfg.Aggressive = true
	if strings.HasPrefix(name, "issue3") {
		return cfg
	}
	prefix := strings.SplitN(name, "_", 2)[0]
	cfg.Only = []string{strings.ToUpper(prefix)}
	return cfg
}

func applyGoldenFixes(content, path string, cfg *config.Config) FixResult {
	f := New(cfg)
	return f.Fix(content, path)
}

func TestRoundTripCleanFiles(t *testing.T) {
	root := filepath.Join("..", "..", "testdata", "clean")
	entries, err := os.ReadDir(root)
	if err != nil {
		if os.IsNotExist(err) {
			t.Skip("clean testdata not present")
		}
		t.Fatal(err)
	}

	cfg := config.Default()
	cfg.Disable = append(cfg.Disable, "MD040")

	for _, entry := range entries {
		if entry.IsDir() || !strings.HasSuffix(entry.Name(), ".md") {
			continue
		}
		t.Run(entry.Name(), func(t *testing.T) {
			path := filepath.Join(root, entry.Name())
			content, err := os.ReadFile(path)
			if err != nil {
				t.Fatal(err)
			}
			original := string(content)
			f := New(cfg)
			if len(f.Lint(original, entry.Name())) > 0 {
				t.Skip("file has lint violations; not a clean round-trip candidate")
			}
			result := f.Fix(original, entry.Name())
			if result.Content != original {
				t.Errorf("clean file changed after fix:\n--- original\n%s\n--- got\n%s", original, result.Content)
			}
		})
	}
}
