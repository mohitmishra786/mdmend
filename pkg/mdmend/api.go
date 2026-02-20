package mdmend

import (
	"os"
	"runtime"

	"github.com/mohitmishra786/mdmend/internal/config"
	"github.com/mohitmishra786/mdmend/internal/fixer"
	"github.com/mohitmishra786/mdmend/internal/linter"
	"github.com/mohitmishra786/mdmend/internal/reporter"
	"github.com/mohitmishra786/mdmend/internal/walker"
)

type Options struct {
	Config       string
	DryRun       bool
	Diff         bool
	Aggressive   bool
	Output       string
	NoColor      bool
	Workers      int
	Rules        []string
	Ignore       []string
	TabSize      int
	FenceStyle   string
	URLStyle     string
	FallbackLang string
}

type Result struct {
	Path       string
	Violations int
	Changed    bool
	Error      error
}

type Client struct {
	config  *config.Config
	options Options
}

func NewClient(opts Options) (*Client, error) {
	cfg, err := config.Load(opts.Config)
	if err != nil {
		return nil, err
	}

	if opts.Aggressive {
		cfg.Aggressive = true
	}
	if opts.TabSize > 0 {
		cfg.TabSize = opts.TabSize
	}
	for _, rule := range opts.Rules {
		if len(rule) > 0 && rule[0] == '~' {
			cfg.Disable = append(cfg.Disable, rule[1:])
		}
	}
	cfg.Ignore = append(cfg.Ignore, opts.Ignore...)

	return &Client{
		config:  cfg,
		options: opts,
	}, nil
}

func (c *Client) Lint(paths []string) ([]Result, error) {
	w := walker.New(c.config.Ignore)
	files, err := w.Walk(paths)
	if err != nil {
		return nil, err
	}

	l := linter.New(c.config)
	results := make([]Result, 0, len(files))

	for _, path := range files {
		content, err := os.ReadFile(path)
		if err != nil {
			results = append(results, Result{Path: path, Error: err})
			continue
		}

		lintResult := l.Lint(string(content), path)
		results = append(results, Result{
			Path:       path,
			Violations: len(lintResult.Violations),
		})
	}

	return results, nil
}

func (c *Client) Fix(paths []string) ([]Result, error) {
	w := walker.New(c.config.Ignore)
	files, err := w.Walk(paths)
	if err != nil {
		return nil, err
	}

	f := fixer.New(c.config)
	results := make([]Result, 0, len(files))

	for _, path := range files {
		content, err := os.ReadFile(path)
		if err != nil {
			results = append(results, Result{Path: path, Error: err})
			continue
		}

		fixResult := f.Fix(string(content), path)

		if fixResult.Changed && !c.options.DryRun {
			if err := fixer.AtomicWrite(path, []byte(fixResult.Content)); err != nil {
				results = append(results, Result{Path: path, Error: err})
				continue
			}
		}

		results = append(results, Result{
			Path:       path,
			Violations: fixResult.Fixes,
			Changed:    fixResult.Changed,
		})
	}

	return results, nil
}

func (c *Client) Diff(path string) (string, error) {
	content, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}

	f := fixer.New(c.config)
	fixResult := f.Fix(string(content), path)

	if !fixResult.Changed {
		return "", nil
	}

	return reporter.FormatUnifiedDiff(path, string(content), fixResult.Content), nil
}

func DefaultWorkers() int {
	return runtime.NumCPU()
}

func Lint(paths []string, opts Options) ([]Result, error) {
	client, err := NewClient(opts)
	if err != nil {
		return nil, err
	}
	return client.Lint(paths)
}

func Fix(paths []string, opts Options) ([]Result, error) {
	client, err := NewClient(opts)
	if err != nil {
		return nil, err
	}
	return client.Fix(paths)
}
