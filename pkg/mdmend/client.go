package mdmend

import (
	"io"
	"os"

	"github.com/pmezard/go-difflib/difflib"

	"github.com/mohitmishra786/mdmend/internal/config"
	"github.com/mohitmishra786/mdmend/internal/fixer"
	"github.com/mohitmishra786/mdmend/internal/linter"
	"github.com/mohitmishra786/mdmend/internal/rules"
	"github.com/mohitmishra786/mdmend/internal/walker"
)

type Client struct {
	cfg             *config.Config
	dryRun          bool
	ConfigLoadError error
}

func NewClient(opts ...Option) *Client {
	options := &clientOptions{}
	for _, opt := range opts {
		opt(options)
	}

	var loadErr error
	cfg := options.cfg
	if cfg == nil {
		cfg, loadErr = config.Load(options.configPath)
		if loadErr != nil {
			cfg = config.Default()
		}
	}

	if len(options.disabled) > 0 {
		cfg.Disable = append(cfg.Disable, options.disabled...)
	}
	if len(options.ignore) > 0 {
		cfg.Ignore = append(cfg.Ignore, options.ignore...)
	}
	if options.tabSize > 0 {
		cfg.TabSize = options.tabSize
	}
	if options.aggressive != nil {
		cfg.Aggressive = *options.aggressive
	}

	// Apply rule overrides after config is resolved
	if len(options.ruleOverrides) > 0 {
		if cfg.Rules == nil {
			cfg.Rules = make(map[string]config.RuleConfig)
		}
		for ruleID, ruleCfg := range options.ruleOverrides {
			cfg.Rules[ruleID] = ruleCfg
		}
	}

	dryRun := false
	if options.dryRun != nil {
		dryRun = *options.dryRun
	}

	return &Client{
		cfg:             cfg,
		dryRun:          dryRun,
		ConfigLoadError: loadErr,
	}
}

func (c *Client) Config() *Config {
	return fromInternalConfig(c.cfg)
}

func (c *Client) LintString(content, path string) LintResult {
	l := linter.New(c.cfg)
	result := l.Lint(content, path)
	return LintResult{
		Violations: convertViolations(result.Violations),
	}
}

func (c *Client) LintReader(r io.Reader, path string) (LintResult, error) {
	content, err := io.ReadAll(r)
	if err != nil {
		return LintResult{}, WrapReadError(path, err)
	}
	return c.LintString(string(content), path), nil
}

func (c *Client) LintFile(path string) (LintResult, error) {
	content, err := os.ReadFile(path)
	if err != nil {
		return LintResult{}, WrapReadError(path, err)
	}
	return c.LintString(string(content), path), nil
}

func (c *Client) LintFiles(paths []string) ([]FileResult, error) {
	w := walker.New(c.cfg.Ignore)
	files, err := w.Walk(paths)
	if err != nil {
		return nil, err
	}

	results := make([]FileResult, 0, len(files))
	l := linter.New(c.cfg)

	for _, path := range files {
		content, err := os.ReadFile(path)
		if err != nil {
			results = append(results, FileResult{
				Path:  path,
				Error: WrapReadError(path, err),
			})
			continue
		}

		lintResult := l.Lint(string(content), path)
		results = append(results, FileResult{
			Path:       path,
			Violations: convertViolations(lintResult.Violations),
		})
	}

	return results, nil
}

func (c *Client) FixString(content, path string) FixResult {
	f := fixer.New(c.cfg)
	result := f.Fix(content, path)
	return FixResult{
		Changed:    result.Changed,
		Content:    result.Content,
		Violations: convertViolations(result.Violations),
		Fixes:      result.Fixes,
	}
}

func (c *Client) FixReader(r io.Reader, path string) (FixResult, error) {
	content, err := io.ReadAll(r)
	if err != nil {
		return FixResult{}, WrapReadError(path, err)
	}
	return c.FixString(string(content), path), nil
}

func (c *Client) FixFile(path string) (FixResult, error) {
	content, err := os.ReadFile(path)
	if err != nil {
		return FixResult{}, WrapReadError(path, err)
	}

	result := c.FixString(string(content), path)

	if result.Changed && !c.dryRun {
		if err := fixer.AtomicWrite(path, []byte(result.Content)); err != nil {
			return result, WrapWriteError(path, err)
		}
	}

	return result, nil
}

func (c *Client) FixFiles(paths []string) ([]FileResult, error) {
	w := walker.New(c.cfg.Ignore)
	files, err := w.Walk(paths)
	if err != nil {
		return nil, err
	}

	results := make([]FileResult, 0, len(files))
	f := fixer.New(c.cfg)

	for _, path := range files {
		content, err := os.ReadFile(path)
		if err != nil {
			results = append(results, FileResult{
				Path:  path,
				Error: WrapReadError(path, err),
			})
			continue
		}

		fixResult := f.Fix(string(content), path)

		if fixResult.Changed && !c.dryRun {
			if err := fixer.AtomicWrite(path, []byte(fixResult.Content)); err != nil {
				results = append(results, FileResult{
					Path:       path,
					Violations: convertViolations(fixResult.Violations),
					Changed:    fixResult.Changed,
					Error:      WrapWriteError(path, err),
				})
				continue
			}
		}

		results = append(results, FileResult{
			Path:       path,
			Violations: convertViolations(fixResult.Violations),
			Changed:    fixResult.Changed,
		})
	}

	return results, nil
}

func (c *Client) Diff(path string) (string, error) {
	content, err := os.ReadFile(path)
	if err != nil {
		return "", WrapReadError(path, err)
	}

	result := c.FixString(string(content), path)
	if !result.Changed {
		return "", nil
	}

	return formatUnifiedDiff(path, string(content), result.Content), nil
}

func (c *Client) DiffString(content, path string) string {
	result := c.FixString(content, path)
	if !result.Changed {
		return ""
	}
	return formatUnifiedDiff(path, content, result.Content)
}

func (c *Client) HasViolations(content, path string) bool {
	result := c.LintString(content, path)
	return result.HasViolations()
}

func (c *Client) ViolationCount(content, path string) int {
	result := c.LintString(content, path)
	return len(result.Violations)
}

func convertViolations(violations []rules.Violation) []Violation {
	result := make([]Violation, len(violations))
	for i, v := range violations {
		result[i] = Violation{
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

func formatUnifiedDiff(path, original, modified string) string {
	diff := difflib.UnifiedDiff{
		A:        difflib.SplitLines(original),
		B:        difflib.SplitLines(modified),
		FromFile: path,
		ToFile:   path,
		Context:  3,
	}
	text, err := difflib.GetUnifiedDiffString(diff)
	if err != nil {
		return ""
	}
	return text
}

func LintString(content, path string, opts ...Option) LintResult {
	client := NewClient(opts...)
	return client.LintString(content, path)
}

func FixString(content, path string, opts ...Option) FixResult {
	client := NewClient(opts...)
	return client.FixString(content, path)
}

func LintFile(path string, opts ...Option) (LintResult, error) {
	client := NewClient(opts...)
	return client.LintFile(path)
}

func FixFile(path string, opts ...Option) (FixResult, error) {
	client := NewClient(opts...)
	return client.FixFile(path)
}

func LintFiles(paths []string, opts ...Option) ([]FileResult, error) {
	client := NewClient(opts...)
	return client.LintFiles(paths)
}

func FixFiles(paths []string, opts ...Option) ([]FileResult, error) {
	client := NewClient(opts...)
	return client.FixFiles(paths)
}
