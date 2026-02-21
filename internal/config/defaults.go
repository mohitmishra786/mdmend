package config

type Config struct {
	Disable    []string              `yaml:"disable"`
	Rules      map[string]RuleConfig `yaml:"rules"`
	Ignore     []string              `yaml:"ignore"`
	TabSize    int                   `yaml:"tab_size"`
	Aggressive bool                  `yaml:"aggressive"`
}

type RuleConfig struct {
	TabSize               int      `yaml:"tab_size"`
	Punctuation           string   `yaml:"punctuation"`
	Style                 string   `yaml:"style"`
	SkipPatterns          []string `yaml:"skip_patterns"`
	Fallback              string   `yaml:"fallback"`
	Confidence            float64  `yaml:"confidence"`
	Names                 []string `yaml:"names"`
	Indent                int      `yaml:"indent"`
	LineLength            int      `yaml:"line_length"`
	Enabled               *bool    `yaml:"enabled"`
	Smart                 *bool    `yaml:"smart"`
	AllowDifferentNesting *bool    `yaml:"allow_different_nesting"`
	Suggest               *bool    `yaml:"suggest"`
	SuggestClosest        *bool    `yaml:"suggest_closest"`
	PadShortRows          *bool    `yaml:"pad_short_rows"`
	DeriveFromFilename    *bool    `yaml:"derive_from_filename"`
	PromoteFirst          *bool    `yaml:"promote_first"`
	FrontMatter           *bool    `yaml:"front_matter"`
	AllowedTags           []string `yaml:"allowed_tags"`
	Headings              []string `yaml:"headings"`
	CodeBlocks            *bool    `yaml:"code_blocks"`
	Tables                *bool    `yaml:"tables"`
	Level                 int      `yaml:"level"`
	SuggestDemotion       *bool    `yaml:"suggest_demotion"`
}

func Default() *Config {
	return &Config{
		Disable: []string{"MD013", "MD033"},
		Rules: map[string]RuleConfig{
			"MD003": {Style: "atx"},
			"MD004": {Style: "dash"},
			"MD007": {Indent: 2},
			"MD010": {TabSize: 4},
			"MD013": {LineLength: 120, CodeBlocks: boolPtr(false), Tables: boolPtr(false), Enabled: boolPtr(false)},
			"MD014": {Enabled: boolPtr(true), Smart: boolPtr(true)},
			"MD024": {AllowDifferentNesting: boolPtr(true)},
			"MD025": {Level: 1, FrontMatter: boolPtr(true), SuggestDemotion: boolPtr(false)},
			"MD026": {Punctuation: ".,;:!"},
			"MD028": {Enabled: boolPtr(true)},
			"MD033": {Enabled: boolPtr(false), AllowedTags: []string{}},
			"MD034": {Style: "angle", SkipPatterns: []string{}},
			"MD036": {Suggest: boolPtr(false), Punctuation: ".,;:!?"},
			"MD040": {Fallback: "text", Confidence: 0.6},
			"MD041": {DeriveFromFilename: boolPtr(true), PromoteFirst: boolPtr(true), FrontMatter: boolPtr(true)},
			"MD044": {Names: []string{"JavaScript", "TypeScript", "GitHub", "macOS"}},
			"MD045": {Suggest: boolPtr(true)},
			"MD048": {Style: "backtick"},
			"MD051": {SuggestClosest: boolPtr(true)},
			"MD056": {PadShortRows: boolPtr(true)},
			"MD057": {SuggestClosest: boolPtr(true)},
		},
		Ignore:     []string{"node_modules/", "vendor/", "*.generated.md", "CHANGELOG.md"},
		TabSize:    4,
		Aggressive: false,
	}
}

func boolPtr(v bool) *bool {
	return &v
}

func (c *Config) IsDisabled(ruleID string) bool {
	for _, id := range c.Disable {
		if id == ruleID {
			return true
		}
	}
	return false
}

func (c *Config) GetRuleConfig(ruleID string) RuleConfig {
	if rc, ok := c.Rules[ruleID]; ok {
		return rc
	}
	return RuleConfig{}
}

func (c *Config) GetTabSize() int {
	if c.TabSize > 0 {
		return c.TabSize
	}
	return 4
}
