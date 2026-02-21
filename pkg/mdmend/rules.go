package mdmend

import (
	"strings"

	"github.com/mohitmishra786/mdmend/internal/rules"
)

type Rule interface {
	ID() string
	Name() string
	Description() string
	Fixable() bool
	Lint(content string, path string) []Violation
	Fix(content string, path string) FixResult
}

type RuleInfo struct {
	ID          string
	Name        string
	Description string
	Fixable     bool
}

func toRuleInfo(r rules.Rule) RuleInfo {
	return RuleInfo{
		ID:          r.ID(),
		Name:        r.Name(),
		Description: r.Description(),
		Fixable:     r.Fixable(),
	}
}

func AvailableRules() []RuleInfo {
	allRules := rules.All()
	result := make([]RuleInfo, len(allRules))
	for i, r := range allRules {
		result[i] = toRuleInfo(r)
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
	return toRuleInfo(r), true
}

func RegisterRule(rule Rule) error {
	if rule == nil {
		return NewRuleError("", ErrNoInput)
	}

	// Atomic check and register
	if !rules.RegisterSafely(&ruleAdapter{rule}) {
		return NewRuleError(rule.ID(), ErrRuleRegistered)
	}
	return nil
}

type ruleAdapter struct {
	Rule
}

func (a *ruleAdapter) ID() string          { return a.Rule.ID() }
func (a *ruleAdapter) Name() string        { return a.Rule.Name() }
func (a *ruleAdapter) Description() string { return a.Rule.Description() }
func (a *ruleAdapter) Fixable() bool       { return a.Rule.Fixable() }

func (a *ruleAdapter) Lint(content string, path string) []rules.Violation {
	violations := a.Rule.Lint(content, path)
	result := make([]rules.Violation, len(violations))
	for i, v := range violations {
		result[i] = rules.Violation{
			Rule:      v.Rule,
			Line:      v.Line,
			Column:    v.Column,
			Message:   v.Message,
			Fixable:   v.Fixable,
			Suggested: v.Suggested,
		}
	}
	return result
}

func (a *ruleAdapter) Fix(content string, path string) rules.FixResult {
	fixResult := a.Rule.Fix(content, path)
	return rules.FixResult{
		Changed: fixResult.Changed,
		Lines:   strings.Split(fixResult.Content, "\n"),
	}
}

func EnabledRules(cfg *Config) []RuleInfo {
	allRules := rules.All()
	var result []RuleInfo
	for _, r := range allRules {
		if !cfg.IsDisabled(r.ID()) {
			result = append(result, toRuleInfo(r))
		}
	}
	return result
}

func FixableRules(cfg *Config) []RuleInfo {
	allRules := rules.All()
	var result []RuleInfo
	for _, r := range allRules {
		if !cfg.IsDisabled(r.ID()) && r.Fixable() {
			result = append(result, toRuleInfo(r))
		}
	}
	return result
}
