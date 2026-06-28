package rules

import (
	"strings"
	"testing"

	"github.com/mohitmishra786/mdmend/internal/config"
)

func TestMD046(t *testing.T) {
	tests := []struct {
		name     string
		style    string
		input    string
		wantViol int
	}{
		{
			name:     "fenced only consistent",
			style:    "consistent",
			input:    "```go\nfmt.Println()\n```\n",
			wantViol: 0,
		},
		{
			name:     "mixed styles",
			style:    "consistent",
			input:    "```go\nx\n```\n\n    indented\n",
			wantViol: 1,
		},
		{
			name:     "fenced required",
			style:    "fenced",
			input:    "    indented code\n",
			wantViol: 1,
		},
		{
			name:     "indented required",
			style:    "indented",
			input:    "```go\nx\n```\n",
			wantViol: 1,
		},
		{
			name:     "unclosed fence",
			style:    "consistent",
			input:    "```go\nunclosed\n",
			wantViol: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			rule := &MD046{Style: tt.style}
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD046.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD054(t *testing.T) {
	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "inline only",
			input:    "[one](https://example.com)\n[two](https://example.org)\n",
			wantViol: 0,
		},
		{
			name:     "mixed inline and reference",
			input:    "[inline](https://example.com)\n[reference][ref]\n\n[ref]: https://example.org\n",
			wantViol: 1,
		},
		{
			name:     "image not double counted",
			input:    "![alt](https://example.com/img.png)\n",
			wantViol: 0,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			rule := &MD054{
				Autolink:  true,
				Inline:    true,
				Full:      true,
				Collapsed: true,
				Shortcut:  true,
				URLInline: true,
			}
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD054.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD066(t *testing.T) {
	rule := &MD066{}

	t.Run("valid footnotes", func(t *testing.T) {
		input := "Text[^note] here.\n\n[^note]: Definition.\n"
		if got := len(rule.Lint(input, "test.md")); got != 0 {
			t.Fatalf("got %d violations, want 0", got)
		}
	})

	t.Run("missing definition", func(t *testing.T) {
		input := "Text[^note] here.\n"
		if got := len(rule.Lint(input, "test.md")); got != 1 {
			t.Fatalf("got %d violations, want 1", got)
		}
	})

	t.Run("unused definition", func(t *testing.T) {
		input := "[^note]: Definition.\n"
		if got := len(rule.Lint(input, "test.md")); got != 1 {
			t.Fatalf("got %d violations, want 1", got)
		}
	})
}

func TestMD067(t *testing.T) {
	rule := &MD067{}

	t.Run("matching order", func(t *testing.T) {
		input := "[^a][^b]\n\n[^a]: first\n[^b]: second\n"
		if got := len(rule.Lint(input, "test.md")); got != 0 {
			t.Fatalf("got %d violations, want 0", got)
		}
	})

	t.Run("mismatched order", func(t *testing.T) {
		input := "[^a][^b]\n\n[^b]: second\n[^a]: first\n"
		if got := len(rule.Lint(input, "test.md")); got != 1 {
			t.Fatalf("got %d violations, want 1", got)
		}
	})
}

func TestMD068(t *testing.T) {
	rule := &MD068{}

	t.Run("non-empty inline", func(t *testing.T) {
		input := "[^note]: Has content.\n"
		if got := len(rule.Lint(input, "test.md")); got != 0 {
			t.Fatalf("got %d violations, want 0", got)
		}
	})

	t.Run("empty definition", func(t *testing.T) {
		input := "[^note]:\n"
		if got := len(rule.Lint(input, "test.md")); got != 1 {
			t.Fatalf("got %d violations, want 1", got)
		}
	})

	t.Run("indented body", func(t *testing.T) {
		input := "[^note]:\n    body text\n"
		if got := len(rule.Lint(input, "test.md")); got != 0 {
			t.Fatalf("got %d violations, want 0", got)
		}
	})
}

func TestMD070(t *testing.T) {
	rule := &MD070{Enabled: true}

	t.Run("short fence", func(t *testing.T) {
		input := "````markdown\n````\ncode\n````\n````\n"
		violations := rule.Lint(input, "test.md")
		if len(violations) != 1 {
			t.Fatalf("got %d violations, want 1", len(violations))
		}
		if !violations[0].Fixable {
			t.Fatal("expected fixable violation")
		}
	})

	t.Run("disabled", func(t *testing.T) {
		disabled := &MD070{Enabled: false}
		input := "````markdown\n````\ncode\n````\n````\n"
		if got := len(disabled.Lint(input, "test.md")); got != 0 {
			t.Fatalf("got %d violations, want 0", got)
		}
	})

	t.Run("fix extends fence", func(t *testing.T) {
		input := "````markdown\n````\ncode\n````\n````\n"
		result := rule.Fix(input, "test.md")
		if !result.Changed {
			t.Fatal("expected fix to change content")
		}
		if !strings.Contains(result.Content(), "`````markdown") {
			t.Fatalf("expected longer opener fence, got %q", result.Content())
		}
	})
}

func TestMD073(t *testing.T) {
	rule := &MD073{Enabled: true, MinLevel: 2, MaxLevel: 4, EnforceOrder: true}

	t.Run("valid toc", func(t *testing.T) {
		input := "# Title\n<!-- toc -->\n- [Section One](#section-one)\n<!-- /toc -->\n\n## Section One\n"
		if got := len(rule.Lint(input, "test.md")); got != 0 {
			t.Fatalf("got %d violations, want 0", got)
		}
	})

	t.Run("missing heading", func(t *testing.T) {
		input := "# Title\n<!-- toc -->\n- [Missing](#missing)\n<!-- /toc -->\n\n## Present\n"
		if got := len(rule.Lint(input, "test.md")); got != 2 {
			t.Fatalf("got %d violations, want 2", got)
		}
	})

	t.Run("fix rebuilds toc", func(t *testing.T) {
		input := "# Title\n<!-- toc -->\n- [Wrong](#wrong)\n<!-- /toc -->\n\n## Section One\n"
		result := rule.Fix(input, "test.md")
		if !result.Changed {
			t.Fatal("expected fix to change content")
		}
		if !strings.Contains(result.Content(), "[Section One](#section-one)") {
			t.Fatalf("expected rebuilt toc entry, got %q", result.Content())
		}
	})
}

func TestConfigureFromConfig(t *testing.T) {
	cfg := config.Default()
	cfg.Rules["MD070"] = config.RuleConfig{Enabled: boolPtr(true)}
	cfg.Rules["MD029"] = config.RuleConfig{Style: "ordered"}

	enabled := EnabledRules(cfg, false)
	var md070 *MD070
	var md029 *MD029
	for _, r := range enabled {
		switch rule := r.(type) {
		case *MD070:
			md070 = rule
		case *MD029:
			md029 = rule
		}
	}
	if md070 == nil || !md070.Enabled {
		t.Fatal("MD070 should be enabled from config")
	}
	if md029 == nil || md029.Style != "ordered" {
		t.Fatalf("MD029 style = %q, want ordered", md029.Style)
	}
}

func boolPtr(v bool) *bool {
	return &v
}
