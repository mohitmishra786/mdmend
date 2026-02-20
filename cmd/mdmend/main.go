package main

import (
	"fmt"
	"os"
	"runtime"
	"strings"

	"github.com/spf13/cobra"
	"github.com/yourhandle/mdmend/internal/config"
	"github.com/yourhandle/mdmend/internal/fixer"
	"github.com/yourhandle/mdmend/internal/linter"
	"github.com/yourhandle/mdmend/internal/reporter"
	"github.com/yourhandle/mdmend/internal/walker"
)

var (
	version = "dev"
	commit  = "none"
	date    = "unknown"
)

type globalOptions struct {
	config       string
	output       string
	noColor      bool
	ignore       []string
	rules        string
	tabSize      int
	fenceStyle   string
	urlStyle     string
	fallbackLang string
}

type fixOptions struct {
	globalOptions
	dryRun     bool
	diff       bool
	aggressive bool
	workers    int
}

type lintOptions struct {
	globalOptions
}

type suggestOptions struct {
	globalOptions
	rules string
}

var globalOpts = globalOptions{}

func main() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

var rootCmd = &cobra.Command{
	Use:   "mdmend [paths...]",
	Short: "Mend your Markdown. Instantly.",
	Long: `mdmend is a fast, zero-dependency Markdown linter and fixer.

It automatically fixes common Markdown linting issues and provides
intelligent suggestions for code fence language detection (MD040) and
bare URL wrapping (MD034).`,
	Version: version,
}

func init() {
	rootCmd.SetVersionTemplate(fmt.Sprintf("mdmend %s (commit: %s, built: %s)\n", version, commit, date))

	rootCmd.PersistentFlags().StringVarP(&globalOpts.config, "config", "c", "", "Path to config file (default: .mdmend.yml)")
	rootCmd.PersistentFlags().StringVarP(&globalOpts.output, "output", "o", "console", "Output format: console|json")
	rootCmd.PersistentFlags().BoolVar(&globalOpts.noColor, "no-color", false, "Disable color output")
	rootCmd.PersistentFlags().StringSliceVar(&globalOpts.ignore, "ignore", []string{}, "Glob patterns to ignore (repeatable)")
	rootCmd.PersistentFlags().StringVar(&globalOpts.rules, "rules", "", "Comma-separated rules to enable/disable (e.g. MD040,~MD034)")
	rootCmd.PersistentFlags().IntVar(&globalOpts.tabSize, "tab-size", 4, "Tab size for MD010")
	rootCmd.PersistentFlags().StringVar(&globalOpts.fenceStyle, "fence-style", "backtick", "Fence style for MD048: backtick|tilde")
	rootCmd.PersistentFlags().StringVar(&globalOpts.urlStyle, "url-style", "angle", "URL wrap style for MD034: angle|link")
	rootCmd.PersistentFlags().StringVar(&globalOpts.fallbackLang, "fallback-lang", "text", "Fallback language for MD040")

	rootCmd.AddCommand(newFixCmd())
	rootCmd.AddCommand(newLintCmd())
	rootCmd.AddCommand(newSuggestCmd())
	rootCmd.AddCommand(newVersionCmd())
}

func newFixCmd() *cobra.Command {
	opts := &fixOptions{}

	cmd := &cobra.Command{
		Use:   "fix [paths...]",
		Short: "Auto-fix all fixable violations",
		Long: `Auto-fix all fixable Markdown lint violations.

By default, fixes are applied directly to files. Use --dry-run to preview
changes without modifying files, or --diff to see unified diffs.`,
		Args: cobra.MinimumNArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			opts.globalOptions = globalOpts
			return runFix(args, opts)
		},
	}

	cmd.Flags().BoolVarP(&opts.dryRun, "dry-run", "n", false, "Show what would change, don't write files")
	cmd.Flags().BoolVarP(&opts.diff, "diff", "d", false, "Output unified diffs instead of writing")
	cmd.Flags().BoolVar(&opts.aggressive, "aggressive", false, "Apply heuristic fixes (MD040/MD034) without prompting")
	cmd.Flags().IntVar(&opts.workers, "workers", runtime.NumCPU(), "Number of parallel workers")

	return cmd
}

func newLintCmd() *cobra.Command {
	opts := &lintOptions{}

	cmd := &cobra.Command{
		Use:   "lint [paths...]",
		Short: "Report violations without fixing",
		Long: `Report all Markdown lint violations without fixing.

Exit code is 1 if any violations are found, 0 otherwise.`,
		Args: cobra.MinimumNArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			opts.globalOptions = globalOpts
			return runLint(args, opts)
		},
	}

	return cmd
}

func newSuggestCmd() *cobra.Command {
	opts := &suggestOptions{}

	cmd := &cobra.Command{
		Use:   "suggest [paths...]",
		Short: "Show suggested fixes for non-fixable rules",
		Long: `Show suggested fixes for heuristic rules like MD040.

Displays the changes that would be made if you run with --aggressive.`,
		Args: cobra.MinimumNArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			opts.globalOptions = globalOpts
			return runSuggest(args, opts)
		},
	}

	cmd.Flags().StringVar(&opts.rules, "rules", "MD040,MD034", "Comma-separated rules to suggest")

	return cmd
}

func newVersionCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "version",
		Short: "Print version information",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Printf("mdmend %s\n", version)
			fmt.Printf("  commit: %s\n", commit)
			fmt.Printf("  built:  %s\n", date)
		},
	}

	return cmd
}

func runFix(args []string, opts *fixOptions) error {
	if len(args) == 0 {
		args = []string{"."}
	}

	cfg, err := loadConfig(opts.globalOptions)
	if err != nil {
		return err
	}
	cfg.Aggressive = opts.aggressive

	ignore := append(cfg.Ignore, opts.ignore...)
	w := walker.New(ignore)
	files, err := w.Walk(args)
	if err != nil {
		return err
	}

	if len(files) == 0 {
		fmt.Println("No Markdown files found")
		return nil
	}

	if opts.output == "json" {
		return runFixJSON(files, cfg, opts)
	}

	return runFixConsole(files, cfg, opts)
}

func runFixConsole(files []string, cfg *config.Config, opts *fixOptions) error {
	cr := reporter.NewConsoleReporter(opts.noColor)
	cr.PrintHeader(version, len(files), opts.workers)

	f := fixer.New(cfg)
	totalViolations := 0
	filesChanged := 0

	for _, path := range files {
		content, err := os.ReadFile(path)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error reading %s: %v\n", path, err)
			continue
		}

		violations := f.Lint(string(content), path)
		if len(violations) > 0 {
			if err := cr.Report(path, violations); err != nil {
				fmt.Fprintf(os.Stderr, "Error reporting %s: %v\n", path, err)
			}
		}

		if opts.diff {
			result := f.Fix(string(content), path)
			if result.Changed {
				dr := reporter.NewDiffReporter()
				if err := dr.Diff(path, string(content), result.Content); err != nil {
					fmt.Fprintf(os.Stderr, "Error generating diff for %s: %v\n", path, err)
				}
			}
		} else {
			result := f.Fix(string(content), path)
			if result.Changed {
				totalViolations += result.Fixes
				filesChanged++

				if !opts.dryRun {
					if err := fixer.AtomicWrite(path, []byte(result.Content)); err != nil {
						fmt.Fprintf(os.Stderr, "Error writing %s: %v\n", path, err)
						continue
					}
				}
			}
		}
	}

	if err := cr.Summary(len(files), filesChanged, totalViolations); err != nil {
		fmt.Fprintf(os.Stderr, "Error writing summary: %v\n", err)
	}

	if opts.dryRun && filesChanged > 0 {
		cr.DryRunNotice()
	}

	return nil
}

func runFixJSON(files []string, cfg *config.Config, opts *fixOptions) error {
	f := fixer.New(cfg)
	jr := reporter.NewJSONReporter()

	var results []reporter.JSONFileResult
	totalViolations := 0
	filesWithIssues := 0

	for _, path := range files {
		content, err := os.ReadFile(path)
		if err != nil {
			results = append(results, reporter.JSONFileResult{
				Path:  path,
				Error: err.Error(),
			})
			continue
		}

		result := f.Fix(string(content), path)
		violations := reporter.ConvertViolations(f.Lint(string(content), path))

		fileResult := reporter.JSONFileResult{
			Path:       path,
			Violations: violations,
		}
		if result.Changed {
			fileResult.Fixed = result.Fixes
		}
		results = append(results, fileResult)

		if len(violations) > 0 {
			filesWithIssues++
		}
		totalViolations += len(violations)

		if result.Changed && !opts.dryRun {
			if err := fixer.AtomicWrite(path, []byte(result.Content)); err != nil {
				fmt.Fprintf(os.Stderr, "Error writing %s: %v\n", path, err)
			}
		}
	}

	return jr.OutputResults(results, reporter.JSONSummary{
		TotalFiles:      len(files),
		FilesWithIssues: filesWithIssues,
		TotalViolations: totalViolations,
	})
}

func runLint(args []string, opts *lintOptions) error {
	if len(args) == 0 {
		args = []string{"."}
	}

	cfg, err := loadConfig(opts.globalOptions)
	if err != nil {
		return err
	}

	ignore := append(cfg.Ignore, opts.ignore...)
	w := walker.New(ignore)
	files, err := w.Walk(args)
	if err != nil {
		return err
	}

	if len(files) == 0 {
		fmt.Println("No Markdown files found")
		return nil
	}

	if opts.output == "json" {
		return runLintJSON(files, cfg, opts)
	}

	return runLintConsole(files, cfg, opts)
}

func runLintConsole(files []string, cfg *config.Config, opts *lintOptions) error {
	cr := reporter.NewConsoleReporter(opts.noColor)
	cr.PrintHeader(version, len(files), 1)

	l := linter.New(cfg)
	totalViolations := 0
	filesWithIssues := 0

	for _, path := range files {
		content, err := os.ReadFile(path)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error reading %s: %v\n", path, err)
			continue
		}

		result := l.Lint(string(content), path)
		if len(result.Violations) > 0 {
			if err := cr.Report(path, result.Violations); err != nil {
				fmt.Fprintf(os.Stderr, "Error reporting %s: %v\n", path, err)
			}
			filesWithIssues++
			totalViolations += len(result.Violations)
		}
	}

	if err := cr.Summary(len(files), filesWithIssues, totalViolations); err != nil {
		fmt.Fprintf(os.Stderr, "Error writing summary: %v\n", err)
	}

	if totalViolations > 0 {
		os.Exit(1)
	}

	return nil
}

func runLintJSON(files []string, cfg *config.Config, opts *lintOptions) error {
	l := linter.New(cfg)
	jr := reporter.NewJSONReporter()

	var results []reporter.JSONFileResult
	totalViolations := 0
	filesWithIssues := 0
	fixable := 0

	for _, path := range files {
		content, err := os.ReadFile(path)
		if err != nil {
			results = append(results, reporter.JSONFileResult{
				Path:  path,
				Error: err.Error(),
			})
			continue
		}

		result := l.Lint(string(content), path)
		violations := reporter.ConvertViolations(result.Violations)

		results = append(results, reporter.JSONFileResult{
			Path:       path,
			Violations: violations,
		})

		if len(violations) > 0 {
			filesWithIssues++
			totalViolations += len(violations)
		}
		for _, v := range violations {
			if v.Fixable {
				fixable++
			}
		}
	}

	err := jr.OutputResults(results, reporter.JSONSummary{
		TotalFiles:      len(files),
		FilesWithIssues: filesWithIssues,
		TotalViolations: totalViolations,
		Fixable:         fixable,
		Unfixable:       totalViolations - fixable,
	})
	if err != nil {
		return err
	}

	if totalViolations > 0 {
		os.Exit(1)
	}

	return nil
}

func runSuggest(args []string, opts *suggestOptions) error {
	if len(args) == 0 {
		args = []string{"."}
	}

	cfg, err := loadConfig(opts.globalOptions)
	if err != nil {
		return err
	}
	cfg.Aggressive = true

	ignore := append(cfg.Ignore, opts.ignore...)
	w := walker.New(ignore)
	files, err := w.Walk(args)
	if err != nil {
		return err
	}

	if len(files) == 0 {
		fmt.Println("No Markdown files found")
		return nil
	}

	cr := reporter.NewConsoleReporter(opts.noColor)
	cr.PrintHeader(version, len(files), 1)

	f := fixer.New(cfg)
	dr := reporter.NewDiffReporter()

	for _, path := range files {
		content, err := os.ReadFile(path)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error reading %s: %v\n", path, err)
			continue
		}

		result := f.Fix(string(content), path)
		if result.Changed {
			fmt.Printf("\n--- %s\n", path)
			if err := dr.Diff(path, string(content), result.Content); err != nil {
				fmt.Fprintf(os.Stderr, "Error generating diff for %s: %v\n", path, err)
			}
		}
	}

	return nil
}

func loadConfig(opts globalOptions) (*config.Config, error) {
	cfg, err := config.Load(opts.config)
	if err != nil {
		return nil, err
	}

	if opts.tabSize > 0 {
		cfg.TabSize = opts.tabSize
	}

	if opts.rules != "" {
		rules := strings.Split(opts.rules, ",")
		for _, r := range rules {
			r = strings.TrimSpace(r)
			if len(r) > 0 && r[0] == '~' {
				cfg.Disable = append(cfg.Disable, r[1:])
			}
		}
	}

	return cfg, nil
}
