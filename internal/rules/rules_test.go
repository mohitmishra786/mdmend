package rules

import (
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
