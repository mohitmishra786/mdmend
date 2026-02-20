package config

type Config struct {
	Disable    []string              `yaml:"disable"`
	Rules      map[string]RuleConfig `yaml:"rules"`
	Ignore     []string              `yaml:"ignore"`
	TabSize    int                   `yaml:"tab_size"`
	Aggressive bool                  `yaml:"aggressive"`
}

type RuleConfig struct {
	TabSize      int      `yaml:"tab_size"`
	Punctuation  string   `yaml:"punctuation"`
	Style        string   `yaml:"style"`
	SkipPatterns []string `yaml:"skip_patterns"`
	Fallback     string   `yaml:"fallback"`
	Confidence   float64  `yaml:"confidence"`
	Names        []string `yaml:"names"`
}

func Default() *Config {
	return &Config{
		Disable: []string{},
		Rules: map[string]RuleConfig{
			"MD010": {TabSize: 4},
			"MD026": {Punctuation: ".,;:!"},
			"MD034": {Style: "angle", SkipPatterns: []string{}},
			"MD040": {Fallback: "text", Confidence: 0.6},
			"MD044": {Names: []string{"JavaScript", "TypeScript", "GitHub", "macOS"}},
			"MD048": {Style: "backtick"},
		},
		Ignore:     []string{"node_modules/", "vendor/", "*.generated.md", "CHANGELOG.md"},
		TabSize:    4,
		Aggressive: false,
	}
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
