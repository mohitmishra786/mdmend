package mdmend

import (
	"github.com/mohitmishra786/mdmend/internal/config"
)

type Config struct {
	Disable    []string
	Rules      map[string]RuleConfig
	Ignore     []string
	TabSize    int
	Aggressive bool
	disableSet map[string]bool
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
	cfg := fromInternalConfig(config.Default())
	cfg.initDisableSet()
	return cfg
}

func (c *Config) initDisableSet() {
	c.disableSet = make(map[string]bool)
	for _, id := range c.Disable {
		c.disableSet[id] = true
	}
}

func (c *Config) IsDisabled(ruleID string) bool {
	if c.disableSet == nil {
		c.initDisableSet()
	}
	return c.disableSet[ruleID]
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

func (c *Config) toInternal() *config.Config {
	cfg := config.Default()
	cfg.Disable = c.Disable
	cfg.Ignore = c.Ignore
	cfg.TabSize = c.TabSize
	cfg.Aggressive = c.Aggressive
	if c.Rules != nil {
		if cfg.Rules == nil {
			cfg.Rules = make(map[string]config.RuleConfig)
		}
		for id, rc := range c.Rules {
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
	c := &Config{
		Disable:    cfg.Disable,
		Rules:      rules,
		Ignore:     cfg.Ignore,
		TabSize:    cfg.TabSize,
		Aggressive: cfg.Aggressive,
	}
	c.initDisableSet()
	return c
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
