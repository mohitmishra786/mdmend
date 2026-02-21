package rules

import (
	"sync"
)

var (
	registry = make(map[string]Rule)
	mu       sync.RWMutex
)

func Register(rule Rule) {
	mu.Lock()
	defer mu.Unlock()
	registry[rule.ID()] = rule
}

func Get(id string) Rule {
	mu.RLock()
	defer mu.RUnlock()
	return registry[id]
}

func All() []Rule {
	mu.RLock()
	defer mu.RUnlock()
	rules := make([]Rule, 0, len(registry))
	for _, r := range registry {
		rules = append(rules, r)
	}
	return rules
}

func IDs() []string {
	mu.RLock()
	defer mu.RUnlock()
	ids := make([]string, 0, len(registry))
	for id := range registry {
		ids = append(ids, id)
	}
	return ids
}

func FilterByFixable(fixable bool) []Rule {
	mu.RLock()
	defer mu.RUnlock()
	rules := make([]Rule, 0)
	for _, r := range registry {
		if r.Fixable() == fixable {
			rules = append(rules, r)
		}
	}
	return rules
}

type Phase int

const (
	PhaseStructure Phase = iota
	PhaseInline
	PhaseStyle
	PhaseHeuristic
	PhaseCleanup
)

func RulesByPhase(phase Phase) []Rule {
	phaseMap := map[string]Phase{
		"MD003": PhaseStructure,
		"MD004": PhaseStructure,
		"MD005": PhaseStructure,
		"MD007": PhaseStructure,
		"MD009": PhaseStructure,
		"MD010": PhaseStructure,
		"MD012": PhaseStructure,
		"MD022": PhaseStructure,
		"MD028": PhaseStructure,
		"MD031": PhaseStructure,
		"MD032": PhaseStructure,
		"MD041": PhaseStructure,
		"MD056": PhaseStructure,
		"MD058": PhaseStructure,

		"MD011": PhaseInline,
		"MD014": PhaseInline,
		"MD018": PhaseInline,
		"MD019": PhaseInline,
		"MD020": PhaseInline,
		"MD021": PhaseInline,
		"MD023": PhaseInline,
		"MD024": PhaseInline,
		"MD025": PhaseInline,
		"MD026": PhaseInline,
		"MD027": PhaseInline,
		"MD030": PhaseInline,
		"MD033": PhaseInline,
		"MD036": PhaseInline,
		"MD037": PhaseInline,
		"MD038": PhaseInline,
		"MD039": PhaseInline,
		"MD042": PhaseInline,
		"MD043": PhaseInline,
		"MD051": PhaseInline,
		"MD052": PhaseInline,
		"MD057": PhaseInline,

		"MD013": PhaseStyle,
		"MD035": PhaseStyle,
		"MD045": PhaseStyle,
		"MD047": PhaseStyle,
		"MD048": PhaseStyle,
		"MD049": PhaseStyle,
		"MD050": PhaseStyle,
		"MD055": PhaseStyle,

		"MD034": PhaseHeuristic,
		"MD040": PhaseHeuristic,

		"MD053": PhaseCleanup,
	}

	mu.RLock()
	defer mu.RUnlock()
	rules := make([]Rule, 0)
	for _, r := range registry {
		if p, ok := phaseMap[r.ID()]; ok && p == phase {
			rules = append(rules, r)
		}
	}
	return rules
}

func OrderedForFix() []Rule {
	var ordered []Rule
	for phase := PhaseStructure; phase <= PhaseCleanup; phase++ {
		ordered = append(ordered, RulesByPhase(phase)...)
	}
	return ordered
}
