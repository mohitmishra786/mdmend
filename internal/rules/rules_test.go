package rules

import (
	"strings"
	"testing"
)

func TestMD009(t *testing.T) {
	rule := &MD009{}

	tests := []struct {
		name     string
		input    string
		wantViol int
		wantFix  string
	}{
		{
			name:     "no trailing spaces",
			input:    "hello world\n",
			wantViol: 0,
			wantFix:  "hello world\n",
		},
		{
			name:     "trailing spaces",
			input:    "hello world  \n",
			wantViol: 1,
			wantFix:  "hello world\n",
		},
		{
			name:     "multiple lines with trailing spaces",
			input:    "line1  \nline2  \nline3",
			wantViol: 2,
			wantFix:  "line1\nline2\nline3",
		},
		{
			name:     "trailing tabs are fixed but not reported",
			input:    "hello\t\n",
			wantViol: 0,
			wantFix:  "hello\n",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD009.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD009.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD010(t *testing.T) {
	rule := &MD010{TabSize: 4}

	tests := []struct {
		name     string
		input    string
		wantViol int
		wantFix  string
	}{
		{
			name:     "no hard tabs",
			input:    "hello world\n",
			wantViol: 0,
			wantFix:  "hello world\n",
		},
		{
			name:     "single hard tab",
			input:    "\thello\n",
			wantViol: 1,
			wantFix:  "    hello\n",
		},
		{
			name:     "multiple hard tabs",
			input:    "\t\thello\n",
			wantViol: 1,
			wantFix:  "        hello\n",
		},
		{
			name:     "tab in middle",
			input:    "hello\tworld\n",
			wantViol: 1,
			wantFix:  "hello    world\n",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD010.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD010.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD011(t *testing.T) {
	rule := &MD011{}

	tests := []struct {
		name     string
		input    string
		wantViol int
		wantFix  string
	}{
		{
			name:     "correct link syntax",
			input:    "[text](url)\n",
			wantViol: 0,
			wantFix:  "[text](url)\n",
		},
		{
			name:     "reversed link syntax",
			input:    "(text)[url]\n",
			wantViol: 1,
			wantFix:  "[text](url)\n",
		},
		{
			name:     "multiple reversed links",
			input:    "(one)[url1] and (two)[url2]\n",
			wantViol: 2,
			wantFix:  "[one](url1) and [two](url2)\n",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD011.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD011.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD012(t *testing.T) {
	rule := &MD012{}

	tests := []struct {
		name     string
		input    string
		wantViol int
		wantFix  string
	}{
		{
			name:     "single blank line",
			input:    "text\n\nmore text\n",
			wantViol: 0,
			wantFix:  "text\n\nmore text\n",
		},
		{
			name:     "multiple blank lines",
			input:    "text\n\n\nmore text\n",
			wantViol: 1,
			wantFix:  "text\n\nmore text\n",
		},
		{
			name:     "three blank lines",
			input:    "text\n\n\n\nmore text\n",
			wantViol: 2,
			wantFix:  "text\n\nmore text\n",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD012.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD012.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD018(t *testing.T) {
	rule := &MD018{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "correct ATX heading",
			input:    "# Heading\n",
			wantViol: 0,
		},
		{
			name:     "no space after hash",
			input:    "#Heading\n",
			wantViol: 1,
		},
		{
			name:     "multiple headings without space",
			input:    "#Heading1\n##Heading2\n",
			wantViol: 2,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD018.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD019(t *testing.T) {
	rule := &MD019{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "correct ATX heading",
			input:    "# Heading\n",
			wantViol: 0,
		},
		{
			name:     "multiple spaces after hash",
			input:    "#  Heading\n",
			wantViol: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD019.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD022(t *testing.T) {
	rule := &MD022{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "heading with blank lines",
			input:    "\n# Heading\n\ntext\n",
			wantViol: 0,
		},
		{
			name:     "heading without blank line above",
			input:    "text\n# Heading\n",
			wantViol: 1,
		},
		{
			name:     "heading without blank line below",
			input:    "# Heading\ntext\n",
			wantViol: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD022.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD026(t *testing.T) {
	rule := &MD026{Punctuation: ".,;:!"}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "heading without trailing punctuation",
			input:    "# Heading\n",
			wantViol: 0,
		},
		{
			name:     "heading with trailing period",
			input:    "# Heading.\n",
			wantViol: 1,
		},
		{
			name:     "heading with trailing exclamation",
			input:    "# Heading!\n",
			wantViol: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD026.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD031(t *testing.T) {
	rule := &MD031{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "code block with blank lines",
			input:    "\n```\ncode\n```\n",
			wantViol: 0,
		},
		{
			name:     "code block without blank line above",
			input:    "text\n```\ncode\n```\n",
			wantViol: 1,
		},
		{
			name:     "code block without blank line below",
			input:    "```\ncode\n```\ntext\n",
			wantViol: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD031.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD034(t *testing.T) {
	rule := &MD034{Style: "angle"}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "no bare URL",
			input:    "text without URL\n",
			wantViol: 0,
		},
		{
			name:     "bare URL",
			input:    "visit https://example.com\n",
			wantViol: 1,
		},
		{
			name:     "URL already wrapped",
			input:    "visit <https://example.com>\n",
			wantViol: 0,
		},
		{
			name:     "URL in link",
			input:    "[link](https://example.com)\n",
			wantViol: 0,
		},
		{
			name:     "URL in code block",
			input:    "```\nhttps://example.com\n```\n",
			wantViol: 0,
		},
		{
			name:     "URL in code span",
			input:    "`https://example.com`\n",
			wantViol: 0,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD034.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD034Fix(t *testing.T) {
	rule := &MD034{Style: "angle"}

	tests := []struct {
		name    string
		input   string
		wantFix string
	}{
		{
			name:    "wrap bare URL",
			input:   "visit https://example.com\n",
			wantFix: "visit <https://example.com>\n",
		},
		{
			name:    "wrap multiple URLs",
			input:   "visit https://a.com and http://b.com\n",
			wantFix: "visit <https://a.com> and <http://b.com>\n",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD034.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD034LinkStyle(t *testing.T) {
	rule := &MD034{Style: "link"}

	tests := []struct {
		name    string
		input   string
		wantFix string
	}{
		{
			name:    "convert to link",
			input:   "visit https://example.com\n",
			wantFix: "visit [https://example.com](https://example.com)\n",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD034.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD044(t *testing.T) {
	rule := &MD044{Names: []string{"JavaScript", "GitHub", "macOS"}}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "correct capitalization",
			input:    "JavaScript and GitHub\n",
			wantViol: 0,
		},
		{
			name:     "incorrect javascript",
			input:    "javascript is cool\n",
			wantViol: 1,
		},
		{
			name:     "incorrect github",
			input:    "github repository\n",
			wantViol: 1,
		},
		{
			name:     "incorrect macos",
			input:    "macos system\n",
			wantViol: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD044.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD044Fix(t *testing.T) {
	rule := &MD044{Names: []string{"JavaScript", "GitHub"}}

	tests := []struct {
		name    string
		input   string
		wantFix string
	}{
		{
			name:    "fix javascript",
			input:   "javascript is cool\n",
			wantFix: "JavaScript is cool\n",
		},
		{
			name:    "fix github",
			input:   "github repo\n",
			wantFix: "GitHub repo\n",
		},
		{
			name:    "fix multiple",
			input:   "javascript on github\n",
			wantFix: "JavaScript on GitHub\n",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD044.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD047(t *testing.T) {
	rule := &MD047{}

	tests := []struct {
		name     string
		input    string
		wantViol int
		wantFix  string
	}{
		{
			name:     "ends with single newline",
			input:    "text\n",
			wantViol: 0,
			wantFix:  "text\n",
		},
		{
			name:     "no final newline",
			input:    "text",
			wantViol: 1,
			wantFix:  "text\n",
		},
		{
			name:     "multiple trailing newlines",
			input:    "text\n\n\n",
			wantViol: 1,
			wantFix:  "text\n",
		},
		{
			name:     "empty file",
			input:    "",
			wantViol: 0,
			wantFix:  "",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD047.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD047.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD048(t *testing.T) {
	rule := &MD048{Style: "backtick"}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "backtick fence",
			input:    "```\ncode\n```\n",
			wantViol: 0,
		},
		{
			name:     "tilde fence",
			input:    "~~~\ncode\n~~~\n",
			wantViol: 2,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD048.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD035(t *testing.T) {
	rule := &MD035{Style: "---"}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "correct hr style",
			input:    "---\n",
			wantViol: 0,
		},
		{
			name:     "asterisk hr",
			input:    "***\n",
			wantViol: 1,
		},
		{
			name:     "underscore hr",
			input:    "___\n",
			wantViol: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD035.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD058(t *testing.T) {
	rule := &MD058{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "table with blank lines",
			input:    "\n| a | b |\n|---|---|\n| 1 | 2 |\n",
			wantViol: 0,
		},
		{
			name:     "table without blank line above",
			input:    "text\n| a | b |\n|---|---|\n",
			wantViol: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD058.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD030(t *testing.T) {
	rule := &MD030{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{
			name:     "correct list spacing",
			input:    "- item\n",
			wantViol: 0,
		},
		{
			name:     "multiple spaces after marker",
			input:    "-  item\n",
			wantViol: 1,
		},
		{
			name:     "no space after marker",
			input:    "-item\n",
			wantViol: 1,
		},
		{
			name:     "ordered list correct",
			input:    "1. item\n",
			wantViol: 0,
		},
		{
			name:     "ordered list multiple spaces",
			input:    "1.  item\n",
			wantViol: 1,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD030.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestFixResultContent(t *testing.T) {
	lines := []string{"line1", "line2", "line3"}
	result := FixResult{Changed: true, Lines: lines}

	expected := "line1\nline2\nline3"
	if result.Content() != expected {
		t.Errorf("FixResult.Content() = %q, want %q", result.Content(), expected)
	}
}

func TestFixResultContentBytes(t *testing.T) {
	lines := []string{"line1", "line2"}
	result := FixResult{Changed: true, Lines: lines}

	expected := "line1\nline2"
	if string(result.ContentBytes()) != expected {
		t.Errorf("FixResult.ContentBytes() = %q, want %q", string(result.ContentBytes()), expected)
	}
}

func TestAllRulesInterface(t *testing.T) {
	rules := All()
	if len(rules) == 0 {
		t.Error("All() returned no rules")
	}

	for _, r := range rules {
		if r.ID() == "" {
			t.Error("Rule has empty ID")
		}
		if r.Name() == "" {
			t.Errorf("Rule %s has empty Name", r.ID())
		}
		if r.Description() == "" {
			t.Errorf("Rule %s has empty Description", r.ID())
		}
	}
}

func TestRegistryGet(t *testing.T) {
	rule := Get("MD009")
	if rule == nil {
		t.Error("Get(MD009) returned nil")
	}

	rule = Get("MD999")
	if rule != nil {
		t.Error("Get(MD999) should return nil for unknown rule")
	}
}

func TestRegistryIDs(t *testing.T) {
	ids := IDs()
	if len(ids) == 0 {
		t.Error("IDs() returned no IDs")
	}
}

func TestFilterByFixable(t *testing.T) {
	fixable := FilterByFixable(true)
	for _, r := range fixable {
		if !r.Fixable() {
			t.Errorf("FilterByFixable(true) returned non-fixable rule %s", r.ID())
		}
	}
}

func TestRulesByPhase(t *testing.T) {
	structure := RulesByPhase(PhaseStructure)
	if len(structure) == 0 {
		t.Error("RulesByPhase(PhaseStructure) returned no rules")
	}

	heuristic := RulesByPhase(PhaseHeuristic)
	if len(heuristic) != 2 {
		t.Errorf("RulesByPhase(PhaseHeuristic) returned %d rules, want 2", len(heuristic))
	}
}

func TestOrderedForFix(t *testing.T) {
	ordered := OrderedForFix()
	if len(ordered) == 0 {
		t.Error("OrderedForFix() returned no rules")
	}

	seen := make(map[string]bool)
	for _, r := range ordered {
		if seen[r.ID()] {
			t.Errorf("Rule %s appears multiple times in OrderedForFix", r.ID())
		}
		seen[r.ID()] = true
	}
}

func TestMD020(t *testing.T) {
	rule := &MD020{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"correct closed ATX", "# Heading #\n", 0},
		{"no space closed ATX", "#Heading#\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD020.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD021(t *testing.T) {
	rule := &MD021{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"correct spacing", "# Heading #\n", 0},
		{"multiple spaces", "#  Heading  #\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD021.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD020Fix(t *testing.T) {
	rule := &MD020{}

	input := "#Heading#\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD020.Fix() should fix no-space closed ATX")
	}
}

func TestMD021Fix(t *testing.T) {
	rule := &MD021{}

	input := "#  Heading  #\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD021.Fix() should fix multiple spaces")
	}
}

func TestMD023(t *testing.T) {
	rule := &MD023{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"heading at start", "# Heading\n", 0},
		{"heading indented", "  # Heading\n", 1},
		{"heading with tab", "\t# Heading\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD023.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD027(t *testing.T) {
	rule := &MD027{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"correct spacing", "> Quote\n", 0},
		{"multiple spaces", ">  Quote\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD027.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD032(t *testing.T) {
	rule := &MD032{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"list with blanks", "\n- item\n\n", 0},
		{"list without blank above", "text\n- item\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD032.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD037(t *testing.T) {
	rule := &MD037{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"no emphasis spaces", "*text*\n", 0},
		{"has emphasis spaces", "* text *\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD037.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD038(t *testing.T) {
	rule := &MD038{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"no code span spaces", "`code`\n", 0},
		{"has code span spaces", "` code `\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD038.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD039(t *testing.T) {
	rule := &MD039{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"no link text spaces", "[text](url)\n", 0},
		{"has link text spaces", "[ text ](url)\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD039.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD040(t *testing.T) {
	rule := &MD040{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"has language", "```go\ncode\n```\n", 0},
		{"no language", "```\ncode\n```\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD040.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD049(t *testing.T) {
	rule := &MD049{Style: "*"}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"asterisk emphasis", "*text*\n", 0},
		{"underscore emphasis", "_text_\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD049.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD050(t *testing.T) {
	rule := &MD050{Style: "**"}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"asterisk strong", "**text**\n", 0},
		{"underscore strong", "__text__\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD050.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD053(t *testing.T) {
	rule := &MD053{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"used reference", "[ref]: url\n[text][ref]\n", 0},
		{"unused reference", "[ref]: url\ntext\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD053.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD055(t *testing.T) {
	rule := &MD055{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"correct pipes", "| a | b |\n", 0},
		{"missing start pipe", "a | b |\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD055.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD018Fix(t *testing.T) {
	rule := &MD018{}

	input := "#Heading\n"
	result := rule.Fix(input, "test.md")
	if result.Content() != "# Heading\n" {
		t.Errorf("MD018.Fix() = %q, want # Heading", result.Content())
	}
}

func TestMD019Fix(t *testing.T) {
	rule := &MD019{}

	input := "#  Heading\n"
	result := rule.Fix(input, "test.md")
	if result.Content() != "# Heading\n" {
		t.Errorf("MD019.Fix() = %q, want # Heading", result.Content())
	}
}

func TestMD022Fix(t *testing.T) {
	rule := &MD022{}

	input := "text\n# Heading\ntext\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD022.Fix() should add blank lines")
	}
}

func TestMD026Fix(t *testing.T) {
	rule := &MD026{Punctuation: ".,;:!"}

	input := "# Heading.\n"
	result := rule.Fix(input, "test.md")
	if result.Content() != "#  Heading\n" {
		t.Errorf("MD026.Fix() = %q, want #  Heading", result.Content())
	}
}

func TestMD027Fix(t *testing.T) {
	rule := &MD027{}

	input := ">  Quote\n"
	result := rule.Fix(input, "test.md")
	if result.Content() != "> Quote\n" {
		t.Errorf("MD027.Fix() = %q, want > Quote", result.Content())
	}
}

func TestMD030Fix(t *testing.T) {
	rule := &MD030{}

	tests := []struct {
		name    string
		input   string
		wantFix string
	}{
		{"fix no space", "-item\n", "- item\n"},
		{"fix multiple spaces", "-  item\n", "- item\n"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD030.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD031Fix(t *testing.T) {
	rule := &MD031{}

	input := "text\n```\ncode\n```\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD031.Fix() should add blank lines")
	}
}

func TestMD032Fix(t *testing.T) {
	rule := &MD032{}

	input := "text\n- item\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD032.Fix() should add blank lines")
	}
}

func TestMD035Fix(t *testing.T) {
	rule := &MD035{Style: "---"}

	input := "***\n"
	result := rule.Fix(input, "test.md")
	if result.Content() != "---\n" {
		t.Errorf("MD035.Fix() = %q, want ---", result.Content())
	}
}

func TestMD037Fix(t *testing.T) {
	rule := &MD037{}

	input := "* text *\n"
	result := rule.Fix(input, "test.md")
	if result.Content() != "*text*\n" {
		t.Errorf("MD037.Fix() = %q, want *text*", result.Content())
	}
}

func TestMD038Fix(t *testing.T) {
	rule := &MD038{}

	input := "` text `\n"
	result := rule.Fix(input, "test.md")
	if result.Content() != "`text`\n" {
		t.Errorf("MD038.Fix() = %q, want `text`", result.Content())
	}
}

func TestMD039Fix(t *testing.T) {
	rule := &MD039{}

	input := "[ text ](url)\n"
	result := rule.Fix(input, "test.md")
	if result.Content() != "[text](url)\n" {
		t.Errorf("MD039.Fix() = %q, want [text](url)", result.Content())
	}
}

func TestMD040Fix(t *testing.T) {
	rule := &MD040{Fallback: "text", Confidence: 0.6}

	input := "```\ncode\n```\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD040.Fix() should add language")
	}
}

func TestMD048Fix(t *testing.T) {
	rule := &MD048{Style: "backtick"}

	input := "~~~\ncode\n~~~\n"
	result := rule.Fix(input, "test.md")
	if result.Content() != "```\ncode\n```\n" {
		t.Errorf("MD048.Fix() = %q, want backticks", result.Content())
	}
}

func TestMD049Fix(t *testing.T) {
	rule := &MD049{Style: "*"}

	input := "_text_\n"
	result := rule.Fix(input, "test.md")
	if result.Content() != "*text*\n" {
		t.Errorf("MD049.Fix() = %q, want *text*", result.Content())
	}
}

func TestMD050Fix(t *testing.T) {
	rule := &MD050{Style: "**"}

	input := "__text__\n"
	result := rule.Fix(input, "test.md")
	if result.Content() != "**text**\n" {
		t.Errorf("MD050.Fix() = %q, want **text**", result.Content())
	}
}

func TestMD053Fix(t *testing.T) {
	rule := &MD053{}

	input := "[ref]: url\ntext\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD053.Fix() should remove unused reference")
	}
}

func TestMD055Fix(t *testing.T) {
	rule := &MD055{}

	input := "a | b |\n|---|---|\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD055.Fix() should fix table pipes")
	}
}

func TestMD058Fix(t *testing.T) {
	rule := &MD058{}

	input := "text\n| a | b |\n|---|---|\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD058.Fix() should add blank lines")
	}
}

func TestMD034SkipPatterns(t *testing.T) {
	rule := &MD034{Style: "angle", SkipPatterns: []string{"example\\.com"}}

	content := "visit https://example.com\n"
	result := rule.Fix(content, "test.md")
	if result.Changed {
		t.Error("MD034.Fix() should skip URLs matching skip patterns")
	}
}

func TestMD003(t *testing.T) {
	rule := &MD003{Style: "atx"}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"pure ATX", "# Heading\n", 0},
		{"setext H1", "Heading\n===\n", 1},
		{"setext H2", "Heading\n---\n", 1},
		{"mixed styles", "# ATX\nSetext\n---\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD003.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD003Fix(t *testing.T) {
	rule := &MD003{Style: "atx"}

	tests := []struct {
		name    string
		input   string
		wantFix string
	}{
		{"setext H1 to ATX", "Heading\n===\n", "# Heading\n"},
		{"setext H2 to ATX", "Heading\n---\n", "## Heading\n"},
		{"already ATX", "# Heading\n", "# Heading\n"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD003.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD004(t *testing.T) {
	rule := &MD004{Style: "dash"}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"dash list", "- item\n", 0},
		{"asterisk list", "* item\n", 1},
		{"plus list", "+ item\n", 1},
		{"no list", "text\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD004.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD004Fix(t *testing.T) {
	rule := &MD004{Style: "dash"}

	tests := []struct {
		name    string
		input   string
		wantFix string
	}{
		{"asterisk to dash", "* item\n", "- item\n"},
		{"plus to dash", "+ item\n", "- item\n"},
		{"dash unchanged", "- item\n", "- item\n"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD004.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD005(t *testing.T) {
	rule := &MD005{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"consistent indent", "- item\n  - nested\n", 0},
		{"single list", "- item\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD005.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD007(t *testing.T) {
	rule := &MD007{Indent: 2}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"correct indent", "- item\n  - nested\n", 0},
		{"single item", "- item\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD007.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD007Fix(t *testing.T) {
	rule := &MD007{Indent: 2}

	input := "- item\n    - nested\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD007.Fix() should normalize indentation")
	}
}

func TestMD013(t *testing.T) {
	rule := &MD013{LineLength: 80, Enabled: true, CodeBlocks: false, Tables: false}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"short line", "short line\n", 0},
		{"long line", "this is a very long line that exceeds the eighty character limit by a lot of text here\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD013.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD013Disabled(t *testing.T) {
	rule := &MD013{Enabled: false}

	input := "this is a very long line that exceeds the eighty character limit for sure\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD013.Lint() should return no violations when disabled")
	}
}

func TestMD014(t *testing.T) {
	rule := &MD014{Enabled: true, Smart: true}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"bash with $", "```bash\n$ echo hi\n```\n", 1},
		{"bash without $", "```bash\necho hi\n```\n", 0},
		{"no lang with $", "```\n$ echo hi\n```\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD014.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD014Fix(t *testing.T) {
	rule := &MD014{Enabled: true, Smart: true}

	input := "```bash\n$ echo hi\n```\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD014.Fix() should remove $ prefix")
	}
}

func TestMD024(t *testing.T) {
	rule := &MD024{AllowDifferentNesting: true}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"unique headings", "# One\n## Two\n", 0},
		{"duplicate same level", "# Heading\n## Heading\n", 0},
		{"no headings", "text\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD024.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD025(t *testing.T) {
	rule := &MD025{Level: 1, FrontMatter: true}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"single H1", "# Title\n## Section\n", 0},
		{"multiple H1", "# Title 1\n# Title 2\n", 1},
		{"no H1", "## Section\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD025.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD028(t *testing.T) {
	rule := &MD028{Enabled: true}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"continuous blockquote", "> Line 1\n> Line 2\n", 0},
		{"no blockquote", "text\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD028.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD028Fix(t *testing.T) {
	rule := &MD028{Enabled: true}

	input := "> Line 1\n\n> Line 2\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD028.Fix() should fix blank lines in blockquotes")
	}
}

func TestMD033(t *testing.T) {
	rule := &MD033{Enabled: false}

	input := "<div>HTML</div>\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD033.Lint() should return no violations when disabled")
	}
}

func TestMD033Enabled(t *testing.T) {
	rule := &MD033{Enabled: true, AllowedTags: []string{}}

	input := "<div>HTML</div>\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) == 0 {
		t.Error("MD033.Lint() should detect HTML when enabled")
	}
}

func TestMD036(t *testing.T) {
	rule := &MD036{Suggest: false}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"emphasis as heading", "**Bold Text**\n", 1},
		{"normal emphasis", "Some **bold** text\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD036.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD041(t *testing.T) {
	rule := &MD041{DeriveFromFilename: true, PromoteFirst: true, FrontMatter: true}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"has H1", "# Title\nContent\n", 0},
		{"no H1", "Content\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD041.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD041Fix(t *testing.T) {
	rule := &MD041{DeriveFromFilename: true, PromoteFirst: false, FrontMatter: false}

	input := "Content\n"
	result := rule.Fix(input, "test-file.md")
	if !result.Changed {
		t.Error("MD041.Fix() should add H1 from filename")
	}
}

func TestMD042(t *testing.T) {
	rule := &MD042{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"empty link", "[text]()\n", 1},
		{"valid link", "[text](url)\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD042.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD043(t *testing.T) {
	rule := &MD043{Headings: []string{}}

	input := "# Title\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD043.Lint() should return no violations when no headings configured")
	}
}

func TestMD043WithHeadings(t *testing.T) {
	rule := &MD043{Headings: []string{"# Title", "## Usage"}}

	input := "# Title\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) == 0 {
		t.Error("MD043.Lint() should detect missing required headings")
	}
}

func TestMD045(t *testing.T) {
	rule := &MD045{Suggest: true}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"no alt text", "![](image.png)\n", 1},
		{"has alt text", "![Alt text](image.png)\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD045.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD051(t *testing.T) {
	rule := &MD051{SuggestClosest: true, Aggressive: false}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"valid fragment", "# Heading\n[link](#heading)\n", 0},
		{"invalid fragment", "# Heading\n[link](#missing)\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD051.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD051Fix(t *testing.T) {
	rule := &MD051{SuggestClosest: true, Aggressive: true}

	input := "# Installation\n[link](#instalation)\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD051.Fix() should fix typo in fragment")
	}
}

func TestMD052(t *testing.T) {
	rule := &MD052{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"undefined ref", "[text][ref]\n", 1},
		{"defined ref", "[text][ref]\n[ref]: url\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD052.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD056(t *testing.T) {
	rule := &MD056{PadShortRows: true}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"valid table", "| A | B |\n|---|---|\n| 1 | 2 |\n", 0},
		{"short row", "| A | B |\n|---|---|\n| 1 |\n", 1},
		{"long row", "| A | B |\n|---|---|\n| 1 | 2 | 3 |\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD056.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD056Fix(t *testing.T) {
	rule := &MD056{PadShortRows: true}

	input := "| A | B |\n|---|---|\n| 1 |\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD056.Fix() should pad short rows")
	}
}

func TestMD057(t *testing.T) {
	rule := &MD057{SuggestClosest: true}

	input := "[link](./missing.md)\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) == 0 {
		t.Error("MD057.Lint() should detect broken relative link")
	}
}

func TestMD003EdgeCases(t *testing.T) {
	rule := &MD003{Style: "atx"}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"empty file", "", 0},
		{"horizontal rule", "---\n", 0},
		{"ATX heading", "# Heading\n", 0},
		{"mixed ATX", "# H1\n## H2\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD003.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD004EdgeCases(t *testing.T) {
	rule := &MD004{Style: "dash"}

	tests := []struct {
		name    string
		input   string
		wantFix string
	}{
		{"nested lists", "- item\n  * nested\n", "- item\n  - nested\n"},
		{"in code block", "```\n* item\n```\n", "```\n* item\n```\n"},
		{"emphasis not list", "text *emphasis* more\n", "text *emphasis* more\n"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD004.Fix() = %q, want %q", result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD005Fix(t *testing.T) {
	rule := &MD005{}

	input := "- item\n  - nested\n   - uneven\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD005.Fix() should normalize indentation")
	}
}

func TestMD007EdgeCases(t *testing.T) {
	rule := &MD007{Indent: 2}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"in code block", "```\n- item\n    - nested\n```\n", 0},
		{"ordered list", "1. item\n   1. nested\n", 0},
		{"no indent issues", "- item\n  - nested\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD007.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD013EdgeCases(t *testing.T) {
	rule := &MD013{LineLength: 80, Enabled: true, CodeBlocks: false, Tables: false}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"url skipped", "https://example.com/very/long/path/that/exceeds/limit/here\n", 0},
		{"short line", "short\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD013.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD014EdgeCases(t *testing.T) {
	rule := &MD014{Enabled: true, Smart: true}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"disabled", "```bash\n$ cmd\n```\n", 1},
		{"continuation lines", "```bash\n$ cmd \\\n> continuation\n```\n", 1},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD014.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD014Disabled(t *testing.T) {
	rule := &MD014{Enabled: false}

	input := "```bash\n$ cmd\n```\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD014.Lint() should return no violations when disabled")
	}
}

func TestMD024AllLevels(t *testing.T) {
	rule := &MD024{AllowDifferentNesting: false}

	input := "# Heading\n## Heading\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) == 0 {
		t.Error("MD024.Lint() should detect duplicate at different levels when AllowDifferentNesting is false")
	}
}

func TestMD024Setext(t *testing.T) {
	rule := &MD024{AllowDifferentNesting: true}

	input := "Heading\n---\nHeading\n---\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) == 0 {
		t.Error("MD024.Lint() should detect duplicate setext headings")
	}
}

func TestMD025FrontMatter(t *testing.T) {
	rule := &MD025{Level: 1, FrontMatter: true}

	input := "---\ntitle: Test\n---\n# Title 1\n# Title 2\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) == 0 {
		t.Error("MD025.Lint() should detect multiple H1s even with front matter")
	}
}

func TestMD028Disabled(t *testing.T) {
	rule := &MD028{Enabled: false}

	input := "> Line 1\n\n> Line 2\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD028.Lint() should return no violations when disabled")
	}
}

func TestMD028NoFix(t *testing.T) {
	rule := &MD028{Enabled: false}

	input := "> Line 1\n\n> Line 2\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD028.Fix() should not change when disabled")
	}
}

func TestMD033AllowedTags(t *testing.T) {
	rule := &MD033{Enabled: true, AllowedTags: []string{"br", "img"}}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"allowed tag", "<br>\n", 0},
		{"disallowed tag", "<div>text</div>\n", 1},
		{"in code", "`<div>`\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD033.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD036EdgeCases(t *testing.T) {
	rule := &MD036{Suggest: false}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"italic as heading", "*Italic Text*\n", 1},
		{"underscore bold", "__Bold__\n", 1},
		{"mixed content", "Some **bold** more\n", 0},
		{"normal paragraph", "Just normal text\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD036.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD041SkipFiles(t *testing.T) {
	rule := &MD041{DeriveFromFilename: true, FrontMatter: true}

	tests := []struct {
		name     string
		path     string
		input    string
		wantViol int
	}{
		{"sidebar file", "test/_sidebar.md", "Content\n", 0},
		{"index file", "test/index.md", "Content\n", 0},
		{"changelog", "test/CHANGELOG.md", "Content\n", 0},
		{"nav file", "test/nav.md", "Content\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, tt.path)
			if len(violations) != tt.wantViol {
				t.Errorf("MD041.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD041FrontMatterTitle(t *testing.T) {
	rule := &MD041{DeriveFromFilename: true, FrontMatter: true}

	input := "---\ntitle: My Title\n---\nContent\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD041.Lint() should skip files with title in front matter")
	}
}

func TestMD041PromoteFirst(t *testing.T) {
	rule := &MD041{DeriveFromFilename: false, PromoteFirst: true, FrontMatter: false}

	input := "## Section\nContent\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD041.Fix() should promote first H2 to H1")
	}
}

func TestMD041NoFix(t *testing.T) {
	rule := &MD041{DeriveFromFilename: false, PromoteFirst: false, FrontMatter: false}

	input := "Content\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD041.Fix() should not change when both options are false")
	}
}

func TestMD042InCode(t *testing.T) {
	rule := &MD042{}

	input := "```\n[empty]()\n```\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD042.Lint() should not detect links in code blocks")
	}
}

func TestMD043WithHeadingsPass(t *testing.T) {
	rule := &MD043{Headings: []string{"# Title", "## Usage"}}

	input := "# Title\n## Usage\nContent\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD043.Lint() should return no violations when all headings present")
	}
}

func TestMD045InCode(t *testing.T) {
	rule := &MD045{Suggest: true}

	input := "```\n![](image.png)\n```\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD045.Lint() should not detect images in code blocks")
	}
}

func TestMD051Aggressive(t *testing.T) {
	rule := &MD051{SuggestClosest: true, Aggressive: false}

	input := "# Installation\n[link](#instalation)\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD051.Fix() should not fix without Aggressive")
	}
}

func TestMD051NoFix(t *testing.T) {
	rule := &MD051{SuggestClosest: true, Aggressive: true}

	input := "# Heading\n[link](#heading)\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD051.Fix() should not change valid links")
	}
}

func TestMD052InCode(t *testing.T) {
	rule := &MD052{}

	input := "```\n[text][ref]\n```\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD052.Lint() should not detect refs in code blocks")
	}
}

func TestMD052WithDefinition(t *testing.T) {
	rule := &MD052{}

	input := "[text][ref]\n[ref]: https://example.com\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD052.Lint() should not report defined references")
	}
}

func TestMD056NoFix(t *testing.T) {
	rule := &MD056{PadShortRows: false}

	input := "| A | B |\n|---|---|\n| 1 |\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD056.Fix() should not fix when PadShortRows is false")
	}
}

func TestMD056EdgeCases(t *testing.T) {
	rule := &MD056{PadShortRows: true}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"empty table", "", 0},
		{"single column", "| A |\n|---|\n| 1 |\n", 0},
		{"no trailing pipe", "A | B\n---|---\n1 | 2\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD056.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD057ExternalLink(t *testing.T) {
	rule := &MD057{SuggestClosest: true}

	input := "[link](https://example.com)\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD057.Lint() should not report external links")
	}
}

func TestMD057FragmentLink(t *testing.T) {
	rule := &MD057{SuggestClosest: true}

	input := "[link](#section)\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD057.Lint() should not report fragment-only links")
	}
}

func TestMD057InCode(t *testing.T) {
	rule := &MD057{SuggestClosest: true}

	input := "```\n[link](./missing.md)\n```\n"
	violations := rule.Lint(input, "test.md")
	if len(violations) != 0 {
		t.Error("MD057.Lint() should not detect links in code blocks")
	}
}

func TestMD007OrderedLists(t *testing.T) {
	rule := &MD007{Indent: 2}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"ordered list", "1. item\n   1. nested\n", 0},
		{"unordered with ordered", "- item\n  1. nested\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD007.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD004StyleOptions(t *testing.T) {
	tests := []struct {
		style   string
		input   string
		wantFix string
	}{
		{"asterisk", "- item\n", "* item\n"},
		{"plus", "- item\n", "+ item\n"},
		{"dash", "* item\n", "- item\n"},
	}

	for _, tt := range tests {
		t.Run(tt.style, func(t *testing.T) {
			rule := &MD004{Style: tt.style}
			result := rule.Fix(tt.input, "test.md")
			if result.Content() != tt.wantFix {
				t.Errorf("MD004.Fix() style %s = %q, want %q", tt.style, result.Content(), tt.wantFix)
			}
		})
	}
}

func TestMD004ListIndent(t *testing.T) {
	rule := &MD004{Style: "dash"}

	input := "  * indented\n"
	result := rule.Fix(input, "test.md")
	if !strings.HasPrefix(result.Content(), "  -") {
		t.Error("MD004.Fix() should preserve indentation")
	}
}

func TestMD005ListBlocks(t *testing.T) {
	rule := &MD005{}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"multiple lists", "- item\n\n- another\n", 0},
		{"nested lists", "- item\n  - nested\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD005.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD013Fix(t *testing.T) {
	rule := &MD013{LineLength: 80, Enabled: true}

	input := "short line\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD013.Fix() should never change content")
	}
}

func TestMD024Fix(t *testing.T) {
	rule := &MD024{}

	input := "# Heading\n# Heading\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD024.Fix() should never change content")
	}
}

func TestMD025Fix(t *testing.T) {
	rule := &MD025{}

	input := "# Title 1\n# Title 2\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD025.Fix() should never change content")
	}
}

func TestMD036Fix(t *testing.T) {
	rule := &MD036{}

	input := "**Bold Text**\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD036.Fix() should never change content")
	}
}

func TestMD042Fix(t *testing.T) {
	rule := &MD042{}

	input := "[empty]()\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD042.Fix() should never change content")
	}
}

func TestMD043Fix(t *testing.T) {
	rule := &MD043{Headings: []string{"# Title"}}

	input := "Content\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD043.Fix() should never change content")
	}
}

func TestMD045Fix(t *testing.T) {
	rule := &MD045{}

	input := "![](image.png)\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD045.Fix() should never change content")
	}
}

func TestMD052Fix(t *testing.T) {
	rule := &MD052{}

	input := "[text][ref]\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD052.Fix() should never change content")
	}
}

func TestMD057Fix(t *testing.T) {
	rule := &MD057{}

	input := "[link](./missing.md)\n"
	result := rule.Fix(input, "test.md")
	if result.Changed {
		t.Error("MD057.Fix() should never change content")
	}
}

func TestMD014MixedBlock(t *testing.T) {
	rule := &MD014{Enabled: true, Smart: true}

	input := "```\n$ command\noutput\n$ another\n```\n"
	result := rule.Fix(input, "test.md")
	_ = result
}

func TestMD051SlugGeneration(t *testing.T) {
	rule := &MD051{SuggestClosest: true, Aggressive: false}

	tests := []struct {
		name     string
		input    string
		wantViol int
	}{
		{"special chars in heading", "# Hello World!@#\n[link](#hello-world)\n", 0},
		{"spaces in heading", "# My Section\n[link](#my-section)\n", 0},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			violations := rule.Lint(tt.input, "test.md")
			if len(violations) != tt.wantViol {
				t.Errorf("MD051.Lint() got %d violations, want %d", len(violations), tt.wantViol)
			}
		})
	}
}

func TestMD056MultipleTables(t *testing.T) {
	rule := &MD056{PadShortRows: true}

	input := "| A |\n|---|\n| 1 |\n\n| B | C |\n|---|---|\n| 2 |\n"
	result := rule.Fix(input, "test.md")
	if !result.Changed {
		t.Error("MD056.Fix() should fix second table")
	}
}
