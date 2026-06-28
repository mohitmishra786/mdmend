package config

import (
	"os"
	"path/filepath"
	"testing"
)

func TestDefault(t *testing.T) {
	cfg := Default()

	if cfg == nil {
		t.Fatal("Default() returned nil")
	}

	if cfg.TabSize != 4 {
		t.Errorf("Default TabSize = %d, want 4", cfg.TabSize)
	}

	if cfg.Aggressive {
		t.Error("Default Aggressive should be false")
	}
}

func TestIsDisabled(t *testing.T) {
	cfg := &Config{
		Disable: []string{"MD013", "MD033"},
	}

	if !cfg.IsDisabled("MD013") {
		t.Error("MD013 should be disabled")
	}

	if !cfg.IsDisabled("MD033") {
		t.Error("MD033 should be disabled")
	}

	if cfg.IsDisabled("MD010") {
		t.Error("MD010 should not be disabled")
	}
}

func TestGetRuleConfig(t *testing.T) {
	cfg := &Config{
		Rules: map[string]RuleConfig{
			"MD010": {TabSize: 2},
		},
	}

	rc := cfg.GetRuleConfig("MD010")
	if rc.TabSize != 2 {
		t.Errorf("GetRuleConfig MD010 TabSize = %d, want 2", rc.TabSize)
	}

	rc = cfg.GetRuleConfig("MD999")
	if rc.TabSize != 0 {
		t.Errorf("GetRuleConfig unknown rule should return empty config")
	}
}

func TestGetTabSize(t *testing.T) {
	tests := []struct {
		name string
		cfg  *Config
		want int
	}{
		{
			name: "default tab size",
			cfg:  &Config{TabSize: 4},
			want: 4,
		},
		{
			name: "zero tab size uses default",
			cfg:  &Config{TabSize: 0},
			want: 4,
		},
		{
			name: "custom tab size",
			cfg:  &Config{TabSize: 2},
			want: 2,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := tt.cfg.GetTabSize(); got != tt.want {
				t.Errorf("GetTabSize() = %d, want %d", got, tt.want)
			}
		})
	}
}

func TestLoadNoConfig(t *testing.T) {
	cfg, err := Load("")
	if err != nil {
		t.Fatalf("Load() error = %v", err)
	}

	if cfg == nil {
		t.Fatal("Load() returned nil config")
	}
}

func TestLoadYAML(t *testing.T) {
	tmpDir := t.TempDir()
	configPath := filepath.Join(tmpDir, ".mdmend.yml")

	content := `
disable:
  - MD013
tab_size: 2
`
	if err := os.WriteFile(configPath, []byte(content), 0644); err != nil {
		t.Fatalf("Failed to write config file: %v", err)
	}

	cfg, err := Load(configPath)
	if err != nil {
		t.Fatalf("Load() error = %v", err)
	}

	if !cfg.IsDisabled("MD013") {
		t.Error("MD013 should be disabled")
	}

	if cfg.TabSize != 2 {
		t.Errorf("TabSize = %d, want 2", cfg.TabSize)
	}
}

func TestLoadNonExistent(t *testing.T) {
	cfg, err := Load("/nonexistent/path/.mdmend.yml")
	if err != nil {
		t.Fatalf("Load() with non-existent path should not error: %v", err)
	}

	if cfg == nil {
		t.Fatal("Load() should return default config for non-existent file")
	}
}

func TestParseIgnoreFile(t *testing.T) {
	content := `# Comment
node_modules/
*.log

vendor/
`
	patterns := parseIgnoreFile(content)

	expected := []string{"node_modules/", "*.log", "vendor/"}
	if len(patterns) != len(expected) {
		t.Errorf("parseIgnoreFile() got %d patterns, want %d", len(patterns), len(expected))
	}

	for i, p := range patterns {
		if p != expected[i] {
			t.Errorf("parseIgnoreFile()[%d] = %q, want %q", i, p, expected[i])
		}
	}
}

func TestSplitLines(t *testing.T) {
	tests := []struct {
		input string
		want  int
	}{
		{"one\ntwo\nthree", 3},
		{"single", 1},
		{"", 0},
		{"trailing\n", 1},
	}

	for _, tt := range tests {
		lines := splitLines(tt.input)
		if len(lines) != tt.want {
			t.Errorf("splitLines(%q) got %d lines, want %d", tt.input, len(lines), tt.want)
		}
	}
}

func TestTrimSpace(t *testing.T) {
	tests := []struct {
		input string
		want  string
	}{
		{"  hello  ", "hello"},
		{"\thello\t", "hello"},
		{"hello", "hello"},
		{"", ""},
	}

	for _, tt := range tests {
		got := trimSpace(tt.input)
		if got != tt.want {
			t.Errorf("trimSpace(%q) = %q, want %q", tt.input, got, tt.want)
		}
	}
}

func TestStartsWith(t *testing.T) {
	if !startsWith("hello world", "hello") {
		t.Error("startsWith should return true for matching prefix")
	}

	if startsWith("hello", "world") {
		t.Error("startsWith should return false for non-matching prefix")
	}

	if startsWith("hi", "hello") {
		t.Error("startsWith should return false when prefix is longer")
	}
}

func TestLoadJSON(t *testing.T) {
	tmpDir := t.TempDir()
	configPath := filepath.Join(tmpDir, ".markdownlint.json")

	content := `{"disable": ["MD013"], "tab_size": 2}`
	if err := os.WriteFile(configPath, []byte(content), 0644); err != nil {
		t.Fatalf("Failed to write config file: %v", err)
	}

	cfg, err := Load(configPath)
	if err != nil {
		t.Fatalf("Load() error = %v", err)
	}

	if cfg == nil {
		t.Fatal("Load() returned nil config")
	}

	if !cfg.IsDisabled("MD013") {
		t.Error("MD013 should be disabled from JSON config")
	}

	if cfg.TabSize != 2 {
		t.Errorf("TabSize = %d, want 2", cfg.TabSize)
	}
}

func TestParseMarkdownlintNativeFormat(t *testing.T) {
	content := `{
		"default": true,
		"MD013": false,
		"MD003": { "style": "atx" },
		"MD029": { "style": "ordered" }
	}`

	cfg, err := ParseMarkdownlintJSON([]byte(content))
	if err != nil {
		t.Fatalf("ParseMarkdownlintJSON() error = %v", err)
	}

	if !cfg.IsDisabled("MD013") {
		t.Error("MD013 should be disabled")
	}

	if rc := cfg.GetRuleConfig("MD003"); rc.Style != "atx" {
		t.Errorf("MD003 style = %q, want atx", rc.Style)
	}

	if rc := cfg.GetRuleConfig("MD029"); rc.Style != "ordered" {
		t.Errorf("MD029 style = %q, want ordered", rc.Style)
	}
}

func TestApplyFlavorMDX(t *testing.T) {
	cfg := Default()
	cfg.Flavor = FlavorMDX

	applied := ApplyFlavor(cfg, "docs/page.mdx")
	if !applied.IsDisabled("MD033") {
		t.Error("MD033 should be disabled for mdx flavor")
	}
}

func TestApplyFlavorMkDocs(t *testing.T) {
	cfg := Default()
	cfg.Flavor = FlavorMkDocs

	applied := ApplyFlavor(cfg, "docs/index.md")
	found := false
	for _, pattern := range applied.Ignore {
		if pattern == "site/" {
			found = true
			break
		}
	}
	if !found {
		t.Error("mkdocs flavor should add site/ to ignore patterns")
	}
}

func TestPerFileFlavor(t *testing.T) {
	cfg := Default()
	cfg.PerFileFlavor = map[string]string{
		"*.mdx": FlavorMDX,
	}

	flavor := ResolveFlavor(cfg, "components/Button.mdx")
	if flavor != FlavorMDX {
		t.Errorf("ResolveFlavor() = %q, want %q", flavor, FlavorMDX)
	}
}

func TestLoadIgnorePatterns(t *testing.T) {
	tmpDir := t.TempDir()

	ignoreContent := `# Comment
node_modules/
*.log
`
	ignorePath := filepath.Join(tmpDir, ".mdmendignore")
	if err := os.WriteFile(ignorePath, []byte(ignoreContent), 0644); err != nil {
		t.Fatalf("Failed to write ignore file: %v", err)
	}

	patterns, err := LoadIgnorePatterns(tmpDir)
	if err != nil {
		t.Fatalf("LoadIgnorePatterns() error = %v", err)
	}

	if len(patterns) != 2 {
		t.Errorf("LoadIgnorePatterns() got %d patterns, want 2", len(patterns))
	}
}

func TestLoadIgnorePatternsNoFile(t *testing.T) {
	tmpDir := t.TempDir()

	patterns, err := LoadIgnorePatterns(tmpDir)
	if err != nil {
		t.Fatalf("LoadIgnorePatterns() error = %v", err)
	}

	if len(patterns) != 0 {
		t.Errorf("LoadIgnorePatterns() should return empty slice when no ignore files exist")
	}
}

func TestLoadPathDiscovery(t *testing.T) {
	oldWd, err := os.Getwd()
	if err != nil {
		t.Fatal(err)
	}

	tmpDir := t.TempDir()
	if err := os.Chdir(tmpDir); err != nil {
		t.Fatal(err)
	}
	defer func() { _ = os.Chdir(oldWd) }()

	configContent := `disable: ["MD013"]`
	if err := os.WriteFile(".mdmend.yml", []byte(configContent), 0644); err != nil {
		t.Fatal(err)
	}

	cfg, err := Load("")
	if err != nil {
		t.Fatalf("Load() error = %v", err)
	}

	if !cfg.IsDisabled("MD013") {
		t.Error("MD013 should be disabled from discovered config")
	}
}

func TestLoadYAMLError(t *testing.T) {
	tmpDir := t.TempDir()
	configPath := filepath.Join(tmpDir, ".mdmend.yml")

	content := `invalid: [yaml: syntax`
	if err := os.WriteFile(configPath, []byte(content), 0644); err != nil {
		t.Fatal(err)
	}

	_, err := Load(configPath)
	if err == nil {
		t.Error("Load() should return error for invalid YAML")
	}
}
