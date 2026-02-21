package mdmend

import (
	"github.com/mohitmishra786/mdmend/internal/config"
)

type Config struct {
	disable    []string
	rules      map[string]RuleConfig
	ignore     []string
	tabSize    int
	aggressive bool
}

type RuleConfig struct {
	TabSize               int
	Punctuation           string
	Style                 string
	SkipPatterns          []string
	Fallback              string
	Confidence            float64
	Names                 []string
	Indent                int
	LineLength            int
	Enabled               *bool
	Smart                 *bool
	AllowDifferentNesting *bool
	Suggest               *bool
	SuggestClosest        *bool
	PadShortRows          *bool
	DeriveFromFilename    *bool
	PromoteFirst          *bool
	FrontMatter           *bool
	AllowedTags           []string
	Headings              []string
	CodeBlocks            *bool
	Tables                *bool
	Level                 int
	SuggestDemotion       *bool
}

func DefaultConfig() *Config {
	return fromInternalConfig(config.Default())
}

func (c *Config) IsDisabled(ruleID string) bool {
	for _, id := range c.disable {
		if id == ruleID {
			return true
		}
	}
	return false
}

func (c *Config) GetRuleConfig(ruleID string) RuleConfig {
	if rc, ok := c.rules[ruleID]; ok {
		return rc
	}
	return RuleConfig{}
}

func (c *Config) GetTabSize() int {
	if c.tabSize > 0 {
		return c.tabSize
	}
	return 4
}

func (c *Config) toInternal() *config.Config {
	cfg := config.Default()
	cfg.Disable = c.disable
	cfg.Ignore = c.ignore
	cfg.TabSize = c.tabSize
	cfg.Aggressive = c.aggressive
	if c.rules != nil {
		cfg.Rules = make(map[string]config.RuleConfig)
		for id, rc := range c.rules {
			cfg.Rules[id] = toInternalRuleConfig(rc)
		}
	}
	return cfg
}

func fromInternalConfig(cfg *config.Config) *Config {
	rules := make(map[string]RuleConfig)
	for id, rc := range cfg.Rules {
		rules[id] = fromInternalRuleConfig(rc)
	}
	return &Config{
		disable:    cfg.Disable,
		rules:      rules,
		ignore:     cfg.Ignore,
		tabSize:    cfg.TabSize,
		aggressive: cfg.Aggressive,
	}
}

func fromInternalRuleConfig(rc config.RuleConfig) RuleConfig {
	return RuleConfig{
		TabSize:               rc.TabSize,
		Punctuation:           rc.Punctuation,
		Style:                 rc.Style,
		SkipPatterns:          rc.SkipPatterns,
		Fallback:              rc.Fallback,
		Confidence:            rc.Confidence,
		Names:                 rc.Names,
		Indent:                rc.Indent,
		LineLength:            rc.LineLength,
		Enabled:               rc.Enabled,
		Smart:                 rc.Smart,
		AllowDifferentNesting: rc.AllowDifferentNesting,
		Suggest:               rc.Suggest,
		SuggestClosest:        rc.SuggestClosest,
		PadShortRows:          rc.PadShortRows,
		DeriveFromFilename:    rc.DeriveFromFilename,
		PromoteFirst:          rc.PromoteFirst,
		FrontMatter:           rc.FrontMatter,
		AllowedTags:           rc.AllowedTags,
		Headings:              rc.Headings,
		CodeBlocks:            rc.CodeBlocks,
		Tables:                rc.Tables,
		Level:                 rc.Level,
		SuggestDemotion:       rc.SuggestDemotion,
	}
}

func toInternalRuleConfig(rc RuleConfig) config.RuleConfig {
	return config.RuleConfig{
		TabSize:               rc.TabSize,
		Punctuation:           rc.Punctuation,
		Style:                 rc.Style,
		SkipPatterns:          rc.SkipPatterns,
		Fallback:              rc.Fallback,
		Confidence:            rc.Confidence,
		Names:                 rc.Names,
		Indent:                rc.Indent,
		LineLength:            rc.LineLength,
		Enabled:               rc.Enabled,
		Smart:                 rc.Smart,
		AllowDifferentNesting: rc.AllowDifferentNesting,
		Suggest:               rc.Suggest,
		SuggestClosest:        rc.SuggestClosest,
		PadShortRows:          rc.PadShortRows,
		DeriveFromFilename:    rc.DeriveFromFilename,
		PromoteFirst:          rc.PromoteFirst,
		FrontMatter:           rc.FrontMatter,
		AllowedTags:           rc.AllowedTags,
		Headings:              rc.Headings,
		CodeBlocks:            rc.CodeBlocks,
		Tables:                rc.Tables,
		Level:                 rc.Level,
		SuggestDemotion:       rc.SuggestDemotion,
	}
}
