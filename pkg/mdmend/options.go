package mdmend

import (
	"github.com/mohitmishra786/mdmend/internal/config"
)

type Option func(*clientOptions)

type clientOptions struct {
	cfg        *config.Config
	configPath string
	disabled   []string
	ignore     []string
	tabSize    int
	aggressive bool
	dryRun     bool
}

func WithConfig(cfg *Config) Option {
	return func(o *clientOptions) {
		if cfg != nil {
			o.cfg = cfg.toInternal()
		}
	}
}

func WithConfigFile(path string) Option {
	return func(o *clientOptions) {
		o.configPath = path
	}
}

func WithDisabledRules(rules ...string) Option {
	return func(o *clientOptions) {
		o.disabled = append(o.disabled, rules...)
	}
}

func WithIgnorePatterns(patterns ...string) Option {
	return func(o *clientOptions) {
		o.ignore = append(o.ignore, patterns...)
	}
}

func WithTabSize(size int) Option {
	return func(o *clientOptions) {
		o.tabSize = size
	}
}

func WithAggressiveMode(enabled bool) Option {
	return func(o *clientOptions) {
		o.aggressive = enabled
	}
}

func WithDryRun(enabled bool) Option {
	return func(o *clientOptions) {
		o.dryRun = enabled
	}
}

func WithRuleConfig(ruleID string, rc RuleConfig) Option {
	return func(o *clientOptions) {
		if o.cfg == nil {
			o.cfg = config.Default()
		}
		if o.cfg.Rules == nil {
			o.cfg.Rules = make(map[string]config.RuleConfig)
		}
		o.cfg.Rules[ruleID] = toInternalRuleConfig(rc)
	}
}

func WithHeadingStyle(style string) Option {
	return WithRuleConfig("MD003", RuleConfig{Style: style})
}

func WithListMarkerStyle(style string) Option {
	return WithRuleConfig("MD004", RuleConfig{Style: style})
}

func WithCodeFenceStyle(style string) Option {
	return WithRuleConfig("MD048", RuleConfig{Style: style})
}

func WithLineLength(length int) Option {
	return WithRuleConfig("MD013", RuleConfig{LineLength: length, CodeBlocks: boolPtr(false), Tables: boolPtr(false)})
}

func WithURLWrapStyle(style string) Option {
	return WithRuleConfig("MD034", RuleConfig{Style: style})
}

func WithCodeBlockFallback(lang string, confidence float64) Option {
	return WithRuleConfig("MD040", RuleConfig{Fallback: lang, Confidence: confidence})
}

func boolPtr(v bool) *bool {
	return &v
}
