package linter

import (
	"sort"

	"github.com/mohitmishra786/mdmend/internal/config"
	"github.com/mohitmishra786/mdmend/internal/rules"
)

type Linter struct {
	config *config.Config
	rules  []rules.Rule
}

func New(cfg *config.Config) *Linter {
	var enabledRules []rules.Rule
	for _, r := range rules.All() {
		if !cfg.IsDisabled(r.ID()) {
			enabledRules = append(enabledRules, r)
		}
	}
	return &Linter{
		config: cfg,
		rules:  enabledRules,
	}
}

type LintResult struct {
	Violations []rules.Violation
	Fixable    int
	Unfixable  int
}

func (l *Linter) Lint(content string, path string) LintResult {
	var allViolations []rules.Violation
	fixable := 0
	unfixable := 0

	for _, rule := range l.rules {
		violations := rule.Lint(content, path)
		for _, v := range violations {
			if v.Fixable {
				fixable++
			} else {
				unfixable++
			}
		}
		allViolations = append(allViolations, violations...)
	}

	sort.Slice(allViolations, func(i, j int) bool {
		if allViolations[i].Line != allViolations[j].Line {
			return allViolations[i].Line < allViolations[j].Line
		}
		return allViolations[i].Column < allViolations[j].Column
	})

	return LintResult{
		Violations: allViolations,
		Fixable:    fixable,
		Unfixable:  unfixable,
	}
}

func LintFile(content string, path string, cfg *config.Config) LintResult {
	linter := New(cfg)
	return linter.Lint(content, path)
}
