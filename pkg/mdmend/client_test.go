package mdmend

import (
	"bytes"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

func TestClientLintString(t *testing.T) {
	tests := []struct {
		name            string
		content         string
		path            string
		opts            []Option
		wantRule        string
		wantNoRule      string
		wantMsgContains string
	}{
		{
			name:       "valid markdown",
			content:    "# Hello World\n\nThis is valid.\n",
			path:       "test.md",
			wantNoRule: "any",
		},
		{
			name:     "trailing spaces",
			content:  "# Test\nHello World  \n",
			path:     "test.md",
			wantRule: "MD009",
		},
		{
			name:     "hard tabs",
			content:  "# Test\nHello\tWorld\n",
			path:     "test.md",
			wantRule: "MD010",
		},
		{
			name:     "bare URL",
			content:  "# Test\nVisit https://example.com for more.\n",
			path:     "test.md",
			wantRule: "MD034",
		},
		{
			name:     "code fence without language",
			content:  "# Test\n```\ncode\n```\n",
			path:     "test.md",
			wantRule: "MD040",
		},
		{
			name:       "with disabled rule",
			content:    "# Test\nHello\tWorld\n",
			path:       "test.md",
			opts:       []Option{WithDisabledRules("MD010")},
			wantNoRule: "MD010",
		},
		{
			name:     "heading with trailing punctuation",
			content:  "# Hello World!\n",
			path:     "test.md",
			wantRule: "MD026",
		},
		{
			name:     "list with inconsistent markers",
			content:  "# Test\n- Item 1\n* Item 2\n- Item 3\n",
			path:     "test.md",
			wantRule: "MD004",
		},
		{
			name:     "no blank line before heading",
			content:  "# Test\nSome text\n# Heading\n",
			path:     "test.md",
			wantRule: "MD022",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			client := NewClient(tt.opts...)
			result := client.LintString(tt.content, tt.path)

			if tt.wantNoRule == "any" {
				if len(result.Violations) > 0 {
					t.Errorf("expected no violations, got: %v", result.Violations)
				}
				return
			}

			if tt.wantRule != "" {
				found := false
				for _, v := range result.Violations {
					if v.Rule == tt.wantRule {
						found = true
						break
					}
				}
				if !found {
					t.Errorf("expected rule %s, got rules: %v", tt.wantRule, result.Violations)
				}
			}

			if tt.wantNoRule != "" && tt.wantNoRule != "any" {
				for _, v := range result.Violations {
					if v.Rule == tt.wantNoRule {
						t.Errorf("rule %s should be disabled", tt.wantNoRule)
					}
				}
			}
		})
	}
}

func TestClientFixString(t *testing.T) {
	tests := []struct {
		name       string
		content    string
		path       string
		opts       []Option
		wantChange bool
		checkFunc  func(t *testing.T, result FixResult)
	}{
		{
			name:       "fix trailing spaces",
			content:    "# Test\nHello World  \n",
			path:       "test.md",
			wantChange: true,
			checkFunc: func(t *testing.T, result FixResult) {
				if strings.Contains(result.Content, "  \n") {
					t.Error("trailing spaces should be removed")
				}
			},
		},
		{
			name:       "fix hard tabs",
			content:    "# Test\nHello\tWorld\n",
			path:       "test.md",
			wantChange: true,
			checkFunc: func(t *testing.T, result FixResult) {
				if strings.Contains(result.Content, "\t") {
					t.Error("hard tabs should be converted to spaces")
				}
			},
		},
		{
			name:       "no changes needed",
			content:    "# Hello\n\nWorld\n",
			path:       "test.md",
			wantChange: false,
		},
		{
			name:       "disabled rule not fixed",
			content:    "# Test\n\nHello World\n",
			path:       "test.md",
			opts:       []Option{WithDisabledRules("MD010")},
			wantChange: false,
		},
		{
			name:       "fix multiple issues",
			content:    "# Test\nHello\tWorld  \n\n\n\n",
			path:       "test.md",
			wantChange: true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			client := NewClient(tt.opts...)
			result := client.FixString(tt.content, tt.path)

			if result.Changed != tt.wantChange {
				t.Errorf("Changed = %v, want %v", result.Changed, tt.wantChange)
			}

			if tt.checkFunc != nil {
				tt.checkFunc(t, result)
			}
		})
	}
}

func TestClientLintReader(t *testing.T) {
	content := "# Test\nHello World  \n"
	client := NewClient()

	result, err := client.LintReader(bytes.NewBufferString(content), "test.md")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if len(result.Violations) == 0 {
		t.Error("expected violations, got none")
	}
}

func TestClientFixReader(t *testing.T) {
	content := "# Test\nHello World  \n"
	client := NewClient()

	result, err := client.FixReader(bytes.NewBufferString(content), "test.md")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if !result.Changed {
		t.Error("expected content to be changed")
	}
}

func TestClientLintFile(t *testing.T) {
	tmpDir := t.TempDir()
	testFile := filepath.Join(tmpDir, "test.md")

	content := "# Test\nHello World  \n"
	if err := os.WriteFile(testFile, []byte(content), 0644); err != nil {
		t.Fatalf("failed to write test file: %v", err)
	}

	client := NewClient()
	result, err := client.LintFile(testFile)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if len(result.Violations) == 0 {
		t.Error("expected violations, got none")
	}
}

func TestClientLintFileNotFound(t *testing.T) {
	client := NewClient()
	_, err := client.LintFile("/nonexistent/path/test.md")
	if err == nil {
		t.Error("expected error for non-existent file")
	}

	if !IsPathError(err) {
		t.Errorf("expected PathError, got %T", err)
	}
}

func TestClientFixFile(t *testing.T) {
	tmpDir := t.TempDir()
	testFile := filepath.Join(tmpDir, "test.md")

	content := "# Test\nHello World  \n"
	if err := os.WriteFile(testFile, []byte(content), 0644); err != nil {
		t.Fatalf("failed to write test file: %v", err)
	}

	client := NewClient()
	result, err := client.FixFile(testFile)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if !result.Changed {
		t.Error("expected file to be changed")
	}

	fixed, err := os.ReadFile(testFile)
	if err != nil {
		t.Fatalf("failed to read fixed file: %v", err)
	}

	if strings.Contains(string(fixed), "  \n") {
		t.Error("trailing spaces should be removed")
	}
}

func TestClientFixFileDryRun(t *testing.T) {
	tmpDir := t.TempDir()
	testFile := filepath.Join(tmpDir, "test.md")

	content := "# Test\nHello World  \n"
	if err := os.WriteFile(testFile, []byte(content), 0644); err != nil {
		t.Fatalf("failed to write test file: %v", err)
	}

	client := NewClient(WithDryRun(true))
	result, err := client.FixFile(testFile)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if !result.Changed {
		t.Error("expected result to show changes")
	}

	unchanged, err := os.ReadFile(testFile)
	if err != nil {
		t.Fatalf("failed to read file: %v", err)
	}

	if string(unchanged) != content {
		t.Error("file should not be modified in dry run mode")
	}
}

func TestClientLintFiles(t *testing.T) {
	tmpDir := t.TempDir()

	files := map[string]string{
		"file1.md": "# Test\nHello World  \n",
		"file2.md": "# Valid\n",
		"file3.md": "# Test\nTabs\there\n",
	}

	for name, content := range files {
		path := filepath.Join(tmpDir, name)
		if err := os.WriteFile(path, []byte(content), 0644); err != nil {
			t.Fatalf("failed to write %s: %v", name, err)
		}
	}

	client := NewClient()
	results, err := client.LintFiles([]string{tmpDir})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if len(results) != 3 {
		t.Errorf("expected 3 results, got %d", len(results))
	}

	totalViolations := 0
	for _, r := range results {
		totalViolations += len(r.Violations)
	}

	if totalViolations == 0 {
		t.Error("expected violations across files")
	}
}

func TestClientFixFiles(t *testing.T) {
	tmpDir := t.TempDir()

	files := map[string]string{
		"file1.md": "# Test\nHello World  \n",
		"file2.md": "# Valid\n",
		"file3.md": "# Test\nTabs\there\n",
	}

	for name, content := range files {
		path := filepath.Join(tmpDir, name)
		if err := os.WriteFile(path, []byte(content), 0644); err != nil {
			t.Fatalf("failed to write %s: %v", name, err)
		}
	}

	client := NewClient()
	results, err := client.FixFiles([]string{tmpDir})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if len(results) != 3 {
		t.Errorf("expected 3 results, got %d", len(results))
	}

	changedCount := 0
	for _, r := range results {
		if r.Changed {
			changedCount++
		}
	}

	if changedCount == 0 {
		t.Error("expected some files to be changed")
	}
}

func TestClientDiff(t *testing.T) {
	tmpDir := t.TempDir()
	testFile := filepath.Join(tmpDir, "test.md")

	content := "# Test\nHello World  \n"
	if err := os.WriteFile(testFile, []byte(content), 0644); err != nil {
		t.Fatalf("failed to write test file: %v", err)
	}

	client := NewClient()
	diff, err := client.Diff(testFile)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if diff == "" {
		t.Error("expected diff output")
	}

	if !strings.Contains(diff, "---") || !strings.Contains(diff, "+++") {
		t.Error("expected unified diff format")
	}
}

func TestClientDiffString(t *testing.T) {
	content := "# Test\nHello World  \n"
	client := NewClient()

	diff := client.DiffString(content, "test.md")
	if diff == "" {
		t.Error("expected diff output")
	}

	if !strings.Contains(diff, "Hello World  ") {
		t.Error("diff should show removed line")
	}
}

func TestClientHasViolations(t *testing.T) {
	client := NewClient()

	if client.HasViolations("# Valid\n", "test.md") {
		t.Error("expected no violations for valid markdown")
	}

	if !client.HasViolations("# Test\nHello\tWorld\n", "test.md") {
		t.Error("expected violations for content with hard tabs")
	}
}

func TestClientViolationCount(t *testing.T) {
	client := NewClient()

	count := client.ViolationCount("# Valid\n", "test.md")
	if count != 0 {
		t.Errorf("expected 0 violations, got %d", count)
	}

	count = client.ViolationCount("# Test\nHello World  \n", "test.md")
	if count == 0 {
		t.Error("expected violations")
	}
}

func TestClientConfig(t *testing.T) {
	opts := []Option{
		WithTabSize(2),
		WithDisabledRules("MD013", "MD033"),
	}
	client := NewClient(opts...)

	cfg := client.Config()
	if cfg == nil {
		t.Fatal("expected config")
	}

	if cfg.GetTabSize() != 2 {
		t.Errorf("tab size = %d, want 2", cfg.GetTabSize())
	}

	if !cfg.IsDisabled("MD013") {
		t.Error("expected MD013 to be disabled")
	}

	if !cfg.IsDisabled("MD033") {
		t.Error("expected MD033 to be disabled")
	}
}

func TestNewClientWithDefaults(t *testing.T) {
	client := NewClient()
	if client == nil {
		t.Fatal("expected client")
	}

	cfg := client.Config()
	if cfg == nil {
		t.Fatal("expected config")
	}

	if cfg.GetTabSize() != 4 {
		t.Errorf("default tab size = %d, want 4", cfg.GetTabSize())
	}
}

func TestClientAggressiveMode(t *testing.T) {
	content := "# Test\n```\ncode\n```\n"

	normalClient := NewClient()
	normalResult := normalClient.FixString(content, "test.md")

	aggressiveClient := NewClient(WithAggressiveMode(true))
	aggressiveResult := aggressiveClient.FixString(content, "test.md")

	_ = normalResult
	_ = aggressiveResult
}

func TestClientIgnorePatterns(t *testing.T) {
	tmpDir := t.TempDir()

	nodeDir := filepath.Join(tmpDir, "node_modules")
	if err := os.Mkdir(nodeDir, 0755); err != nil {
		t.Fatalf("failed to create dir: %v", err)
	}

	testFile := filepath.Join(tmpDir, "test.md")
	nodeFile := filepath.Join(nodeDir, "package.md")

	for _, f := range []string{testFile, nodeFile} {
		if err := os.WriteFile(f, []byte("# Test\nHello\tWorld\n"), 0644); err != nil {
			t.Fatalf("failed to write file: %v", err)
		}
	}

	client := NewClient(WithIgnorePatterns("**/node_modules/**"))
	results, err := client.LintFiles([]string{tmpDir})
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	foundTest := false
	foundNode := false
	for _, r := range results {
		if strings.Contains(r.Path, "test.md") {
			foundTest = true
		}
		if strings.Contains(r.Path, "package.md") {
			foundNode = true
		}
	}

	if !foundTest {
		t.Error("expected to find test.md")
	}
	if foundNode {
		t.Error("expected node_modules/package.md to be ignored")
	}
}

func TestConvenienceFunctions(t *testing.T) {
	t.Run("LintString", func(t *testing.T) {
		result := LintString("# Test\nHello\tWorld\n", "test.md")
		if len(result.Violations) == 0 {
			t.Error("expected violations")
		}
	})

	t.Run("FixString", func(t *testing.T) {
		result := FixString("# Test\nHello World  \n", "test.md")
		if !result.Changed {
			t.Error("expected changes")
		}
	})

	t.Run("LintFile", func(t *testing.T) {
		tmpDir := t.TempDir()
		testFile := filepath.Join(tmpDir, "test.md")
		if err := os.WriteFile(testFile, []byte("# Test\nHello\tWorld\n"), 0644); err != nil {
			t.Fatal(err)
		}

		result, err := LintFile(testFile)
		if err != nil {
			t.Fatal(err)
		}
		if len(result.Violations) == 0 {
			t.Error("expected violations")
		}
	})

	t.Run("FixFile", func(t *testing.T) {
		tmpDir := t.TempDir()
		testFile := filepath.Join(tmpDir, "test.md")
		if err := os.WriteFile(testFile, []byte("# Test\nHello World  \n"), 0644); err != nil {
			t.Fatal(err)
		}

		result, err := FixFile(testFile)
		if err != nil {
			t.Fatal(err)
		}
		if !result.Changed {
			t.Error("expected changes")
		}
	})
}
