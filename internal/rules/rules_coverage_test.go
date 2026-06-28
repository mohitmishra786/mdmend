package rules

import (
	"sort"
	"strings"
	"testing"
)

var rulesWithDedicatedTests = map[string]struct{}{
	"MD001": {},
	"MD003": {},
	"MD004": {},
	"MD005": {},
	"MD007": {},
	"MD009": {},
	"MD010": {},
	"MD011": {},
	"MD012": {},
	"MD013": {},
	"MD014": {},
	"MD018": {},
	"MD019": {},
	"MD020": {},
	"MD021": {},
	"MD022": {},
	"MD023": {},
	"MD024": {},
	"MD025": {},
	"MD026": {},
	"MD027": {},
	"MD028": {},
	"MD029": {},
	"MD030": {},
	"MD031": {},
	"MD032": {},
	"MD033": {},
	"MD034": {},
	"MD035": {},
	"MD036": {},
	"MD037": {},
	"MD038": {},
	"MD039": {},
	"MD040": {},
	"MD041": {},
	"MD042": {},
	"MD043": {},
	"MD044": {},
	"MD045": {},
	"MD046": {},
	"MD047": {},
	"MD048": {},
	"MD049": {},
	"MD050": {},
	"MD051": {},
	"MD052": {},
	"MD053": {},
	"MD054": {},
	"MD055": {},
	"MD056": {},
	"MD057": {},
	"MD058": {},
	"MD066": {},
	"MD067": {},
	"MD068": {},
	"MD070": {},
	"MD073": {},
}

func TestRuleTestCoverage(t *testing.T) {
	registered := IDs()
	sort.Strings(registered)

	registeredSet := make(map[string]struct{}, len(registered))
	for _, id := range registered {
		registeredSet[id] = struct{}{}
	}

	for _, id := range registered {
		if _, ok := rulesWithDedicatedTests[id]; !ok {
			t.Errorf("rule %s is registered but missing dedicated unit test (add Test%s and update rulesWithDedicatedTests)", id, id)
		}
	}

	for id := range rulesWithDedicatedTests {
		if _, ok := registeredSet[id]; !ok {
			t.Errorf("rule %s has a dedicated unit test but is not registered", id)
		}
	}

	if len(rulesWithDedicatedTests) != len(registered) {
		t.Errorf("test registry has %d rules, registry has %d rules", len(rulesWithDedicatedTests), len(registered))
	}
}

func TestAllRulesContract(t *testing.T) {
	sample := "# Heading\n\nParagraph with **bold** and [link](https://example.com).\n"

	for _, rule := range All() {
		t.Run(rule.ID(), func(t *testing.T) {
			if rule.ID() == "" {
				t.Fatal("ID() returned empty string")
			}
			if !strings.HasPrefix(rule.ID(), "MD") {
				t.Fatalf("ID() = %q, want MD-prefix", rule.ID())
			}
			if rule.Name() == "" {
				t.Fatal("Name() returned empty string")
			}
			if rule.Description() == "" {
				t.Fatal("Description() returned empty string")
			}

			violations := rule.Lint(sample, "test.md")
			for _, v := range violations {
				if v.Rule != rule.ID() {
					t.Errorf("violation Rule = %q, want %q", v.Rule, rule.ID())
				}
				if v.Line < 0 {
					t.Errorf("violation Line = %d, want non-negative", v.Line)
				}
				if v.Column < 0 {
					t.Errorf("violation Column = %d, want non-negative", v.Column)
				}
				if v.Message == "" {
					t.Error("violation Message is empty")
				}
				if v.Fixable != rule.Fixable() {
					t.Errorf("violation Fixable = %v, rule.Fixable() = %v", v.Fixable, rule.Fixable())
				}
			}

			result := rule.Fix(sample, "test.md")
			if result.Lines == nil {
				t.Fatal("Fix() returned nil Lines")
			}
			if result.Content() == "" && sample != "" {
				t.Fatal("Fix() returned empty content for non-empty input")
			}
		})
	}
}

func TestAllRulesEmptyInput(t *testing.T) {
	for _, rule := range All() {
		t.Run(rule.ID(), func(t *testing.T) {
			violations := rule.Lint("", "test.md")
			for _, v := range violations {
				if v.Rule != rule.ID() {
					t.Errorf("violation Rule = %q, want %q", v.Rule, rule.ID())
				}
			}
			_ = rule.Fix("", "test.md").Content()
		})
	}
}

func TestAllRulesRegisteredInPhases(t *testing.T) {
	phased := make(map[string]struct{})
	for phase := PhaseStructure; phase <= PhaseCleanup; phase++ {
		for _, rule := range RulesByPhase(phase) {
			phased[rule.ID()] = struct{}{}
		}
	}

	for _, id := range IDs() {
		if _, ok := phased[id]; !ok {
			t.Errorf("rule %s is registered but missing from RulesByPhase map", id)
		}
	}
}
