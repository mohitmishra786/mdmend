package mdmend

import (
	"testing"
)

func TestDefaultConfig(t *testing.T) {
	cfg := DefaultConfig()
	if cfg == nil {
		t.Fatal("expected config")
	}

	if cfg.GetTabSize() != 4 {
		t.Errorf("default tab size = %d, want 4", cfg.GetTabSize())
	}

	if !cfg.IsDisabled("MD013") {
		t.Error("expected MD013 to be disabled by default")
	}

	if !cfg.IsDisabled("MD033") {
		t.Error("expected MD033 to be disabled by default")
	}
}

func TestConfigIsDisabled(t *testing.T) {
	cfg := &Config{
		disable: []string{"MD013", "MD033", "MD024"},
	}

	tests := []struct {
		ruleID string
		want   bool
	}{
		{"MD013", true},
		{"MD033", true},
		{"MD024", true},
		{"MD009", false},
		{"MD010", false},
		{"", false},
	}

	for _, tt := range tests {
		t.Run(tt.ruleID, func(t *testing.T) {
			got := cfg.IsDisabled(tt.ruleID)
			if got != tt.want {
				t.Errorf("IsDisabled(%q) = %v, want %v", tt.ruleID, got, tt.want)
			}
		})
	}
}

func TestConfigGetRuleConfig(t *testing.T) {
	cfg := &Config{
		rules: map[string]RuleConfig{
			"MD003": {Style: "atx"},
			"MD007": {Indent: 4},
		},
	}

	rc := cfg.GetRuleConfig("MD003")
	if rc.Style != "atx" {
		t.Errorf("MD003 style = %q, want 'atx'", rc.Style)
	}

	rc = cfg.GetRuleConfig("MD007")
	if rc.Indent != 4 {
		t.Errorf("MD007 indent = %d, want 4", rc.Indent)
	}

	rc = cfg.GetRuleConfig("MD999")
	if rc.Style != "" {
		t.Errorf("non-existent rule should return empty config")
	}
}

func TestConfigGetTabSize(t *testing.T) {
	tests := []struct {
		name    string
		tabSize int
		want    int
	}{
		{"default", 0, 4},
		{"custom", 2, 2},
		{"large", 8, 8},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			cfg := &Config{tabSize: tt.tabSize}
			got := cfg.GetTabSize()
			if got != tt.want {
				t.Errorf("GetTabSize() = %d, want %d", got, tt.want)
			}
		})
	}
}

func TestWithConfig(t *testing.T) {
	customCfg := &Config{
		tabSize: 2,
		disable: []string{"MD040"},
	}

	client := NewClient(WithConfig(customCfg))
	cfg := client.Config()

	if cfg.GetTabSize() != 2 {
		t.Errorf("tab size = %d, want 2", cfg.GetTabSize())
	}

	if !cfg.IsDisabled("MD040") {
		t.Error("expected MD040 to be disabled")
	}
}

func TestWithDisabledRules(t *testing.T) {
	client := NewClient(WithDisabledRules("MD009", "MD010", "MD013"))
	cfg := client.Config()

	for _, rule := range []string{"MD009", "MD010", "MD013"} {
		if !cfg.IsDisabled(rule) {
			t.Errorf("expected %s to be disabled", rule)
		}
	}
}

func TestWithIgnorePatterns(t *testing.T) {
	client := NewClient(WithIgnorePatterns("node_modules/", "vendor/", "*.generated.md"))
	cfg := client.Config()

	for _, pattern := range []string{"node_modules/", "vendor/", "*.generated.md"} {
		found := false
		for _, p := range cfg.ignore {
			if p == pattern {
				found = true
				break
			}
		}
		if !found {
			t.Errorf("expected ignore pattern %q", pattern)
		}
	}
}

func TestWithTabSize(t *testing.T) {
	tests := []struct {
		tabSize int
		want    int
	}{
		{2, 2},
		{4, 4},
		{8, 8},
	}

	for _, tt := range tests {
		t.Run("", func(t *testing.T) {
			client := NewClient(WithTabSize(tt.tabSize))
			cfg := client.Config()
			if cfg.GetTabSize() != tt.want {
				t.Errorf("tab size = %d, want %d", cfg.GetTabSize(), tt.want)
			}
		})
	}
}

func TestWithAggressiveMode(t *testing.T) {
	client := NewClient(WithAggressiveMode(true))
	cfg := client.Config()

	if !cfg.aggressive {
		t.Error("expected aggressive mode to be enabled")
	}
}

func TestWithDryRun(t *testing.T) {
	client := NewClient(WithDryRun(true))
	if !client.dryRun {
		t.Error("expected dry run to be enabled")
	}
}

func TestWithHeadingStyle(t *testing.T) {
	client := NewClient(WithHeadingStyle("atx_closed"))
	cfg := client.Config()

	rc := cfg.GetRuleConfig("MD003")
	if rc.Style != "atx_closed" {
		t.Errorf("MD003 style = %q, want 'atx_closed'", rc.Style)
	}
}

func TestWithListMarkerStyle(t *testing.T) {
	client := NewClient(WithListMarkerStyle("asterisk"))
	cfg := client.Config()

	rc := cfg.GetRuleConfig("MD004")
	if rc.Style != "asterisk" {
		t.Errorf("MD004 style = %q, want 'asterisk'", rc.Style)
	}
}

func TestWithCodeFenceStyle(t *testing.T) {
	client := NewClient(WithCodeFenceStyle("tilde"))
	cfg := client.Config()

	rc := cfg.GetRuleConfig("MD048")
	if rc.Style != "tilde" {
		t.Errorf("MD048 style = %q, want 'tilde'", rc.Style)
	}
}

func TestWithLineLength(t *testing.T) {
	client := NewClient(WithLineLength(80))
	cfg := client.Config()

	rc := cfg.GetRuleConfig("MD013")
	if rc.LineLength != 80 {
		t.Errorf("MD013 line length = %d, want 80", rc.LineLength)
	}
}

func TestWithURLWrapStyle(t *testing.T) {
	client := NewClient(WithURLWrapStyle("link"))
	cfg := client.Config()

	rc := cfg.GetRuleConfig("MD034")
	if rc.Style != "link" {
		t.Errorf("MD034 style = %q, want 'link'", rc.Style)
	}
}

func TestWithCodeBlockFallback(t *testing.T) {
	client := NewClient(WithCodeBlockFallback("javascript", 0.8))
	cfg := client.Config()

	rc := cfg.GetRuleConfig("MD040")
	if rc.Fallback != "javascript" {
		t.Errorf("MD040 fallback = %q, want 'javascript'", rc.Fallback)
	}
	if rc.Confidence != 0.8 {
		t.Errorf("MD040 confidence = %f, want 0.8", rc.Confidence)
	}
}

func TestWithRuleConfig(t *testing.T) {
	rc := RuleConfig{
		Style:      "consistent",
		Indent:     4,
		LineLength: 100,
	}

	client := NewClient(WithRuleConfig("MD999", rc))
	cfg := client.Config()

	got := cfg.GetRuleConfig("MD999")
	if got.Style != "consistent" {
		t.Errorf("style = %q, want 'consistent'", got.Style)
	}
	if got.Indent != 4 {
		t.Errorf("indent = %d, want 4", got.Indent)
	}
	if got.LineLength != 100 {
		t.Errorf("line length = %d, want 100", got.LineLength)
	}
}

func TestCombinedOptions(t *testing.T) {
	client := NewClient(
		WithTabSize(2),
		WithDisabledRules("MD013", "MD033"),
		WithIgnorePatterns("vendor/"),
		WithAggressiveMode(true),
		WithHeadingStyle("atx"),
		WithDryRun(true),
	)

	cfg := client.Config()

	if cfg.GetTabSize() != 2 {
		t.Error("tab size should be 2")
	}
	if !cfg.IsDisabled("MD013") {
		t.Error("MD013 should be disabled")
	}
	if !cfg.IsDisabled("MD033") {
		t.Error("MD033 should be disabled")
	}
	if !cfg.aggressive {
		t.Error("aggressive mode should be enabled")
	}
	if !client.dryRun {
		t.Error("dry run should be enabled")
	}

	rc := cfg.GetRuleConfig("MD003")
	if rc.Style != "atx" {
		t.Error("heading style should be atx")
	}
}
