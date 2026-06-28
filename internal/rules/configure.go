package rules

import "github.com/mohitmishra786/mdmend/internal/config"

func ConfigureFromConfig(r Rule, cfg *config.Config) Rule {
	if cfg == nil {
		return r
	}
	rc := cfg.GetRuleConfig(r.ID())
	return Configure(r, rc, cfg)
}

func Configure(r Rule, rc config.RuleConfig, cfg *config.Config) Rule {
	switch rule := r.(type) {
	case *MD003:
		clone := *rule
		if rc.Style != "" {
			clone.Style = rc.Style
		}
		return &clone
	case *MD004:
		clone := *rule
		if rc.Style != "" {
			clone.Style = rc.Style
		}
		return &clone
	case *MD007:
		clone := *rule
		if rc.Indent > 0 {
			clone.Indent = rc.Indent
		}
		return &clone
	case *MD010:
		clone := *rule
		if rc.TabSize > 0 {
			clone.TabSize = rc.TabSize
		} else if cfg != nil && cfg.GetTabSize() > 0 {
			clone.TabSize = cfg.GetTabSize()
		}
		return &clone
	case *MD013:
		clone := *rule
		if rc.LineLength > 0 {
			clone.LineLength = rc.LineLength
		}
		if rc.Enabled != nil {
			clone.Enabled = *rc.Enabled
		}
		if rc.CodeBlocks != nil {
			clone.CodeBlocks = *rc.CodeBlocks
		}
		if rc.Tables != nil {
			clone.Tables = *rc.Tables
		}
		return &clone
	case *MD014:
		clone := *rule
		if rc.Enabled != nil {
			clone.Enabled = *rc.Enabled
		}
		if rc.Smart != nil {
			clone.Smart = *rc.Smart
		}
		return &clone
	case *MD024:
		clone := *rule
		if rc.AllowDifferentNesting != nil {
			clone.AllowDifferentNesting = *rc.AllowDifferentNesting
		}
		return &clone
	case *MD025:
		clone := *rule
		if rc.Level > 0 {
			clone.Level = rc.Level
		}
		if rc.FrontMatter != nil {
			clone.FrontMatter = *rc.FrontMatter
		}
		if rc.SuggestDemotion != nil {
			clone.SuggestDemotion = *rc.SuggestDemotion
		}
		return &clone
	case *MD026:
		clone := *rule
		if rc.Punctuation != "" {
			clone.Punctuation = rc.Punctuation
		}
		return &clone
	case *MD028:
		clone := *rule
		if rc.Enabled != nil {
			clone.Enabled = *rc.Enabled
		}
		return &clone
	case *MD029:
		clone := *rule
		if rc.Style != "" {
			clone.Style = rc.Style
		}
		return &clone
	case *MD033:
		clone := *rule
		if rc.Enabled != nil {
			clone.Enabled = *rc.Enabled
		}
		if len(rc.AllowedTags) > 0 {
			clone.AllowedTags = append([]string(nil), rc.AllowedTags...)
		}
		return &clone
	case *MD034:
		clone := *rule
		if rc.Style != "" {
			clone.Style = rc.Style
		}
		if len(rc.SkipPatterns) > 0 {
			clone.SkipPatterns = append([]string(nil), rc.SkipPatterns...)
		}
		return &clone
	case *MD035:
		clone := *rule
		if rc.Style != "" {
			clone.Style = rc.Style
		}
		return &clone
	case *MD036:
		clone := *rule
		if rc.Suggest != nil {
			clone.Suggest = *rc.Suggest
		}
		if rc.Punctuation != "" {
			clone.Punctuation = rc.Punctuation
		}
		return &clone
	case *MD040:
		clone := *rule
		if rc.Fallback != "" {
			clone.Fallback = rc.Fallback
		}
		if rc.Confidence > 0 {
			clone.Confidence = rc.Confidence
		}
		if cfg != nil {
			clone.Aggressive = cfg.Aggressive
		}
		return &clone
	case *MD041:
		clone := *rule
		if rc.DeriveFromFilename != nil {
			clone.DeriveFromFilename = *rc.DeriveFromFilename
		}
		if rc.PromoteFirst != nil {
			clone.PromoteFirst = *rc.PromoteFirst
		}
		if rc.FrontMatter != nil {
			clone.FrontMatter = *rc.FrontMatter
		}
		return &clone
	case *MD043:
		clone := *rule
		if len(rc.Headings) > 0 {
			clone.Headings = append([]string(nil), rc.Headings...)
		}
		return &clone
	case *MD044:
		clone := *rule
		if len(rc.Names) > 0 {
			clone.Names = append([]string(nil), rc.Names...)
		}
		return &clone
	case *MD045:
		clone := *rule
		if rc.Suggest != nil {
			clone.Suggest = *rc.Suggest
		}
		return &clone
	case *MD046:
		clone := *rule
		if rc.Style != "" {
			clone.Style = rc.Style
		}
		return &clone
	case *MD048:
		clone := *rule
		if rc.Style != "" {
			clone.Style = rc.Style
		}
		return &clone
	case *MD049:
		clone := *rule
		if rc.Style != "" {
			clone.Style = rc.Style
		}
		return &clone
	case *MD050:
		clone := *rule
		if rc.Style != "" {
			clone.Style = rc.Style
		}
		return &clone
	case *MD051:
		clone := *rule
		if rc.SuggestClosest != nil {
			clone.SuggestClosest = *rc.SuggestClosest
		}
		if cfg != nil {
			clone.Aggressive = cfg.Aggressive
		}
		return &clone
	case *MD054:
		clone := *rule
		if rc.Style != "" {
			clone.PreferredStyle = rc.Style
		}
		return &clone
	case *MD056:
		clone := *rule
		if rc.PadShortRows != nil {
			clone.PadShortRows = *rc.PadShortRows
		}
		return &clone
	case *MD057:
		clone := *rule
		if rc.SuggestClosest != nil {
			clone.SuggestClosest = *rc.SuggestClosest
		}
		return &clone
	case *MD070:
		clone := *rule
		if rc.Enabled != nil {
			clone.Enabled = *rc.Enabled
		}
		return &clone
	case *MD073:
		clone := *rule
		if rc.Enabled != nil {
			clone.Enabled = *rc.Enabled
		}
		if rc.Level > 0 {
			clone.MinLevel = rc.Level
		}
		return &clone
	default:
		return r
	}
}

func EnabledRules(cfg *config.Config, ordered bool) []Rule {
	var source []Rule
	if ordered {
		source = OrderedForFix()
	} else {
		source = All()
	}

	var enabled []Rule
	for _, r := range source {
		if cfg.IsEnabled(r.ID()) {
			enabled = append(enabled, ConfigureFromConfig(r, cfg))
		}
	}
	return enabled
}
