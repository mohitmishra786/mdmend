package config

import (
	"path/filepath"
	"strings"

	"github.com/bmatcuk/doublestar/v4"
)

const (
	FlavorStandard = "standard"
	FlavorMDX      = "mdx"
	FlavorMkDocs   = "mkdocs"
)

func ValidFlavor(flavor string) bool {
	switch strings.ToLower(strings.TrimSpace(flavor)) {
	case "", FlavorStandard, FlavorMDX, FlavorMkDocs:
		return true
	default:
		return false
	}
}

func NormalizeFlavor(flavor string) string {
	flavor = strings.ToLower(strings.TrimSpace(flavor))
	if flavor == "" {
		return FlavorStandard
	}
	return flavor
}

func ResolveFlavor(cfg *Config, path string) string {
	if cfg == nil {
		return FlavorStandard
	}

	for pattern, flavor := range cfg.PerFileFlavor {
		if matchFlavorPattern(pattern, path) {
			return NormalizeFlavor(flavor)
		}
	}

	return NormalizeFlavor(cfg.Flavor)
}

func matchFlavorPattern(pattern, path string) bool {
	pattern = filepath.ToSlash(pattern)
	path = filepath.ToSlash(path)

	if matched, err := doublestar.Match(pattern, path); err == nil && matched {
		return true
	}

	if matched, err := doublestar.Match(pattern, filepath.Base(path)); err == nil && matched {
		return true
	}

	return false
}

func ApplyFlavor(cfg *Config, path string) *Config {
	if cfg == nil {
		return Default()
	}

	cloned := cloneConfig(cfg)
	flavor := ResolveFlavor(cloned, path)

	switch flavor {
	case FlavorMDX:
		applyMDXFlavor(cloned)
	case FlavorMkDocs:
		applyMkDocsFlavor(cloned)
	}

	return cloned
}

func cloneConfig(cfg *Config) *Config {
	cloned := *cfg
	if cfg.Disable != nil {
		cloned.Disable = append([]string{}, cfg.Disable...)
	}
	if cfg.Only != nil {
		cloned.Only = append([]string{}, cfg.Only...)
	}
	if cfg.Ignore != nil {
		cloned.Ignore = append([]string{}, cfg.Ignore...)
	}
	if cfg.PerFileFlavor != nil {
		cloned.PerFileFlavor = make(map[string]string, len(cfg.PerFileFlavor))
		for k, v := range cfg.PerFileFlavor {
			cloned.PerFileFlavor[k] = v
		}
	}
	if cfg.Rules != nil {
		cloned.Rules = make(map[string]RuleConfig, len(cfg.Rules))
		for k, v := range cfg.Rules {
			cloned.Rules[k] = v
		}
	}
	return &cloned
}

func applyMDXFlavor(cfg *Config) {
	if !containsRule(cfg.Disable, "MD033") {
		cfg.Disable = append(cfg.Disable, "MD033")
	}
	if rc, ok := cfg.Rules["MD033"]; ok {
		if rc.Enabled == nil || !*rc.Enabled {
			disabled := false
			rc.Enabled = &disabled
			cfg.Rules["MD033"] = rc
		}
	} else {
		disabled := false
		cfg.Rules["MD033"] = RuleConfig{Enabled: &disabled}
	}
}

func applyMkDocsFlavor(cfg *Config) {
	extraIgnore := []string{
		"site/",
		"docs/_build/",
	}
	for _, pattern := range extraIgnore {
		if !containsRule(cfg.Ignore, pattern) {
			cfg.Ignore = append(cfg.Ignore, pattern)
		}
	}
}

func containsRule(items []string, target string) bool {
	for _, item := range items {
		if item == target {
			return true
		}
	}
	return false
}