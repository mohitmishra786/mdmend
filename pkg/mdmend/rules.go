package mdmend

import (
	"github.com/mohitmishra786/mdmend/internal/rules"
)

type Rule interface {
	ID() string
	Name() string
	Description() string
	Fixable() bool
}

type RuleInfo struct {
	ID          string
	Name        string
	Description string
	Fixable     bool
}

func AvailableRules() []RuleInfo {
	allRules := rules.All()
	result := make([]RuleInfo, len(allRules))
	for i, r := range allRules {
		result[i] = RuleInfo{
			ID:          r.ID(),
			Name:        r.Name(),
			Description: r.Description(),
			Fixable:     r.Fixable(),
		}
	}
	return result
}

func RuleIDs() []string {
	return rules.IDs()
}

func GetRuleInfo(id string) (RuleInfo, bool) {
	r := rules.Get(id)
	if r == nil {
		return RuleInfo{}, false
	}
	return RuleInfo{
		ID:          r.ID(),
		Name:        r.Name(),
		Description: r.Description(),
		Fixable:     r.Fixable(),
	}, true
}

func RegisterRule(rule Rule) error {
	if rule == nil {
		return NewRuleError("", ErrNoInput)
	}
	if rules.Get(rule.ID()) != nil {
		return NewRuleError(rule.ID(), ErrRuleRegistered)
	}
	rules.Register(&ruleAdapter{rule})
	return nil
}

type ruleAdapter struct {
	Rule
}

func (a *ruleAdapter) Lint(content string, path string) []rules.Violation {
	return nil
}

func (a *ruleAdapter) Fix(content string, path string) rules.FixResult {
	return rules.FixResult{}
}

func EnabledRules(cfg *Config) []RuleInfo {
	allRules := rules.All()
	var result []RuleInfo
	for _, r := range allRules {
		if !cfg.IsDisabled(r.ID()) {
			result = append(result, RuleInfo{
				ID:          r.ID(),
				Name:        r.Name(),
				Description: r.Description(),
				Fixable:     r.Fixable(),
			})
		}
	}
	return result
}

func FixableRules(cfg *Config) []RuleInfo {
	allRules := rules.All()
	var result []RuleInfo
	for _, r := range allRules {
		if !cfg.IsDisabled(r.ID()) && r.Fixable() {
			result = append(result, RuleInfo{
				ID:          r.ID(),
				Name:        r.Name(),
				Description: r.Description(),
				Fixable:     true,
			})
		}
	}
	return result
}
