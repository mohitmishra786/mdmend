package fixer

import (
	"strings"

	"github.com/yourhandle/mdmend/internal/config"
	"github.com/yourhandle/mdmend/internal/rules"
)

type Fixer struct {
	config *config.Config
	rules  []rules.Rule
}

func New(cfg *config.Config) *Fixer {
	var enabledRules []rules.Rule
	for _, r := range rules.OrderedForFix() {
		if !cfg.IsDisabled(r.ID()) {
			enabledRules = append(enabledRules, r)
		}
	}
	return &Fixer{
		config: cfg,
		rules:  enabledRules,
	}
}

type FixResult struct {
	Changed    bool
	Content    string
	Violations []rules.Violation
	Fixes      int
}

func (f *Fixer) Fix(content string, path string) FixResult {
	result := FixResult{
		Content: content,
	}

	currentContent := content
	changed := false
	totalFixes := 0

	for _, rule := range f.rules {
		if !rule.Fixable() {
			continue
		}

		violations := rule.Lint(currentContent, path)
		if len(violations) > 0 {
			fixResult := rule.Fix(currentContent, path)
			if fixResult.Changed {
				currentContent = strings.Join(fixResult.Lines, "\n")
				changed = true
				totalFixes += len(violations)
			}
		}
	}

	result.Changed = changed
	result.Content = currentContent
	result.Fixes = totalFixes

	return result
}

func (f *Fixer) FixWithDiff(content string, path string) (string, []rules.Violation) {
	result := f.Fix(content, path)
	return result.Content, f.Lint(content, path)
}

func (f *Fixer) Lint(content string, path string) []rules.Violation {
	var allViolations []rules.Violation
	for _, rule := range f.rules {
		violations := rule.Lint(content, path)
		allViolations = append(allViolations, violations...)
	}
	return allViolations
}

func ApplyFixes(content string, path string, cfg *config.Config) FixResult {
	fixer := New(cfg)
	return fixer.Fix(content, path)
}

func DryRun(content string, path string, cfg *config.Config) (string, []rules.Violation) {
	fixer := New(cfg)
	return fixer.FixWithDiff(content, path)
}
