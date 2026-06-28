package config

import (
	"encoding/json"
	"fmt"
	"strings"

	"gopkg.in/yaml.v3"
)

type markdownlintConfig struct {
	Default  *bool                     `json:"default"`
	Disable  []string                  `json:"disable"`
	TabSize  int                       `json:"tab_size"`
	Rules    map[string]json.RawMessage `json:"rules"`
	Ignores  []string                  `json:"ignores"`
	Ignore   []string                  `json:"ignore"`
}

func ParseMarkdownlintJSON(data []byte) (*Config, error) {
	cfg := Default()

	var raw map[string]json.RawMessage
	if err := json.Unmarshal(data, &raw); err != nil {
		return nil, err
	}

	if _, ok := raw["disable"]; ok || raw["tab_size"] != nil || raw["rules"] != nil {
		var direct markdownlintConfig
		if err := json.Unmarshal(data, &direct); err != nil {
			return nil, err
		}
		applyDirectConfig(cfg, direct)
		return cfg, nil
	}

	defaultEnabled := true
	if v, ok := raw["default"]; ok {
		if err := json.Unmarshal(v, &defaultEnabled); err != nil {
			return nil, err
		}
	}

	for key, value := range raw {
		if !strings.HasPrefix(strings.ToUpper(key), "MD") {
			continue
		}
		ruleID := strings.ToUpper(key)
		if err := applyMarkdownlintRule(cfg, ruleID, value, defaultEnabled); err != nil {
			return nil, fmt.Errorf("rule %s: %w", ruleID, err)
		}
	}

	return cfg, nil
}

func applyDirectConfig(cfg *Config, direct markdownlintConfig) {
	if len(direct.Disable) > 0 {
		cfg.Disable = append(cfg.Disable, direct.Disable...)
	}
	if direct.TabSize > 0 {
		cfg.TabSize = direct.TabSize
	}
	if len(direct.Ignore) > 0 {
		cfg.Ignore = append(cfg.Ignore, direct.Ignore...)
	}
	if len(direct.Ignores) > 0 {
		cfg.Ignore = append(cfg.Ignore, direct.Ignores...)
	}
	for ruleID, raw := range direct.Rules {
		_ = applyMarkdownlintRule(cfg, strings.ToUpper(ruleID), raw, true)
	}
}

func applyMarkdownlintRule(cfg *Config, ruleID string, raw json.RawMessage, defaultEnabled bool) error {
	var enabled bool
	if err := json.Unmarshal(raw, &enabled); err == nil {
		if !enabled {
			if !containsRule(cfg.Disable, ruleID) {
				cfg.Disable = append(cfg.Disable, ruleID)
			}
		} else if !defaultEnabled {
			cfg.Disable = removeRule(cfg.Disable, ruleID)
		}
		return nil
	}

	var options map[string]json.RawMessage
	if err := json.Unmarshal(raw, &options); err != nil {
		return err
	}

	if cfg.Rules == nil {
		cfg.Rules = make(map[string]RuleConfig)
	}

	rc := cfg.Rules[ruleID]
	if err := mapMarkdownlintOptions(ruleID, options, &rc); err != nil {
		return err
	}
	cfg.Rules[ruleID] = rc
	cfg.Disable = removeRule(cfg.Disable, ruleID)
	return nil
}

func mapMarkdownlintOptions(ruleID string, options map[string]json.RawMessage, rc *RuleConfig) error {
	for key, raw := range options {
		switch key {
		case "style":
			var style string
			if err := json.Unmarshal(raw, &style); err != nil {
				return err
			}
			rc.Style = style
		case "tab_size", "spaces_per_tab":
			var size int
			if err := json.Unmarshal(raw, &size); err != nil {
				return err
			}
			rc.TabSize = size
		case "indent":
			var indent int
			if err := json.Unmarshal(raw, &indent); err != nil {
				return err
			}
			rc.Indent = indent
		case "line_length":
			var length int
			if err := json.Unmarshal(raw, &length); err != nil {
				return err
			}
			rc.LineLength = length
		case "punctuation":
			var punctuation string
			if err := json.Unmarshal(raw, &punctuation); err != nil {
				return err
			}
			rc.Punctuation = punctuation
		case "names":
			var names []string
			if err := json.Unmarshal(raw, &names); err != nil {
				return err
			}
			rc.Names = names
		case "headings":
			var headings []string
			if err := json.Unmarshal(raw, &headings); err != nil {
				return err
			}
			rc.Headings = headings
		case "allowed_tags":
			var tags []string
			if err := json.Unmarshal(raw, &tags); err != nil {
				return err
			}
			rc.AllowedTags = tags
		case "skip_patterns":
			var patterns []string
			if err := json.Unmarshal(raw, &patterns); err != nil {
				return err
			}
			rc.SkipPatterns = patterns
		case "fallback":
			var fallback string
			if err := json.Unmarshal(raw, &fallback); err != nil {
				return err
			}
			rc.Fallback = fallback
		case "confidence":
			var confidence float64
			if err := json.Unmarshal(raw, &confidence); err != nil {
				return err
			}
			rc.Confidence = confidence
		case "level":
			var level int
			if err := json.Unmarshal(raw, &level); err != nil {
				return err
			}
			rc.Level = level
		case "code_blocks", "tables", "enabled", "smart", "front_matter", "front_matter_title",
			"siblings_only", "allow_different_nesting", "suggest", "suggest_closest",
			"pad_short_rows", "derive_from_filename", "promote_first", "suggest_demotion":
			var value bool
			if err := json.Unmarshal(raw, &value); err != nil {
				return err
			}
			switch key {
			case "code_blocks":
				rc.CodeBlocks = &value
			case "tables":
				rc.Tables = &value
			case "enabled":
				rc.Enabled = &value
			case "smart":
				rc.Smart = &value
			case "front_matter", "front_matter_title":
				rc.FrontMatter = &value
			case "siblings_only", "allow_different_nesting":
				rc.AllowDifferentNesting = &value
			case "suggest":
				rc.Suggest = &value
			case "suggest_closest":
				rc.SuggestClosest = &value
			case "pad_short_rows":
				rc.PadShortRows = &value
			case "derive_from_filename":
				rc.DeriveFromFilename = &value
			case "promote_first":
				rc.PromoteFirst = &value
			case "suggest_demotion":
				rc.SuggestDemotion = &value
			}
		default:
			if ruleID == "MD029" && key == "style" {
				var style string
				if err := json.Unmarshal(raw, &style); err != nil {
					return err
				}
				rc.Style = style
			}
		}
	}
	return nil
}

func removeRule(items []string, target string) []string {
	var filtered []string
	for _, item := range items {
		if item != target {
			filtered = append(filtered, item)
		}
	}
	return filtered
}

func ToYAML(cfg *Config) ([]byte, error) {
	type yamlConfig struct {
		Disable       []string                  `yaml:"disable,omitempty"`
		Only          []string                  `yaml:"only,omitempty"`
		Rules         map[string]yamlRuleConfig `yaml:"rules,omitempty"`
		Ignore        []string                  `yaml:"ignore,omitempty"`
		TabSize       int                       `yaml:"tab_size,omitempty"`
		Aggressive    bool                      `yaml:"aggressive,omitempty"`
		Flavor        string                    `yaml:"flavor,omitempty"`
		PerFileFlavor map[string]string         `yaml:"per_file_flavor,omitempty"`
	}

	rules := make(map[string]yamlRuleConfig)
	for id, rc := range cfg.Rules {
		compact := compactRuleConfig(rc)
		if ruleConfigIsEmpty(compact) {
			continue
		}
		rules[id] = compact
	}

	out := yamlConfig{
		Disable:       dedupeStrings(cfg.Disable),
		Only:          cfg.Only,
		Rules:         rules,
		Ignore:        cfg.Ignore,
		Flavor:        cfg.Flavor,
		PerFileFlavor: cfg.PerFileFlavor,
	}
	if cfg.TabSize != 0 && cfg.TabSize != 4 {
		out.TabSize = cfg.TabSize
	}
	if cfg.Aggressive {
		out.Aggressive = cfg.Aggressive
	}

	return yaml.Marshal(out)
}

func compactRuleConfig(rc RuleConfig) yamlRuleConfig {
	return yamlRuleConfig{
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

type yamlRuleConfig struct {
	TabSize               int      `yaml:"tab_size,omitempty"`
	Punctuation           string   `yaml:"punctuation,omitempty"`
	Style                 string   `yaml:"style,omitempty"`
	SkipPatterns          []string `yaml:"skip_patterns,omitempty"`
	Fallback              string   `yaml:"fallback,omitempty"`
	Confidence            float64  `yaml:"confidence,omitempty"`
	Names                 []string `yaml:"names,omitempty"`
	Indent                int      `yaml:"indent,omitempty"`
	LineLength            int      `yaml:"line_length,omitempty"`
	Enabled               *bool    `yaml:"enabled,omitempty"`
	Smart                 *bool    `yaml:"smart,omitempty"`
	AllowDifferentNesting *bool    `yaml:"allow_different_nesting,omitempty"`
	Suggest               *bool    `yaml:"suggest,omitempty"`
	SuggestClosest        *bool    `yaml:"suggest_closest,omitempty"`
	PadShortRows          *bool    `yaml:"pad_short_rows,omitempty"`
	DeriveFromFilename    *bool    `yaml:"derive_from_filename,omitempty"`
	PromoteFirst          *bool    `yaml:"promote_first,omitempty"`
	FrontMatter           *bool    `yaml:"front_matter,omitempty"`
	AllowedTags           []string `yaml:"allowed_tags,omitempty"`
	Headings              []string `yaml:"headings,omitempty"`
	CodeBlocks            *bool    `yaml:"code_blocks,omitempty"`
	Tables                *bool    `yaml:"tables,omitempty"`
	Level                 int      `yaml:"level,omitempty"`
	SuggestDemotion       *bool    `yaml:"suggest_demotion,omitempty"`
}

func ruleConfigIsEmpty(rc yamlRuleConfig) bool {
	return rc.TabSize == 0 &&
		rc.Punctuation == "" &&
		rc.Style == "" &&
		len(rc.SkipPatterns) == 0 &&
		rc.Fallback == "" &&
		rc.Confidence == 0 &&
		len(rc.Names) == 0 &&
		rc.Indent == 0 &&
		rc.LineLength == 0 &&
		rc.Enabled == nil &&
		rc.Smart == nil &&
		rc.AllowDifferentNesting == nil &&
		rc.Suggest == nil &&
		rc.SuggestClosest == nil &&
		rc.PadShortRows == nil &&
		rc.DeriveFromFilename == nil &&
		rc.PromoteFirst == nil &&
		rc.FrontMatter == nil &&
		len(rc.AllowedTags) == 0 &&
		len(rc.Headings) == 0 &&
		rc.CodeBlocks == nil &&
		rc.Tables == nil &&
		rc.Level == 0 &&
		rc.SuggestDemotion == nil
}

func dedupeStrings(items []string) []string {
	seen := make(map[string]struct{}, len(items))
	var out []string
	for _, item := range items {
		if _, ok := seen[item]; ok {
			continue
		}
		seen[item] = struct{}{}
		out = append(out, item)
	}
	return out
}