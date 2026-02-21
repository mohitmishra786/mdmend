package main

import (
	"encoding/json"
	"fmt"
	"os"
	"runtime"
	"sort"
	"strings"
	"time"

	"github.com/fatih/color"
	"github.com/mohitmishra786/mdmend/internal/config"
	"github.com/mohitmishra786/mdmend/internal/fixer"
	"github.com/mohitmishra786/mdmend/internal/linter"
	"github.com/mohitmishra786/mdmend/internal/reporter"
	"github.com/mohitmishra786/mdmend/internal/rules"
	"github.com/mohitmishra786/mdmend/internal/walker"
	"github.com/spf13/cobra"
)

var (
	version = "dev"
	commit  = "none"
	date    = "unknown"
)

type globalOptions struct {
	config        string
	output        string
	noColor       bool
	ignore        []string
	rules         string
	tabSize       int
	fenceStyle    string
	urlStyle      string
	fallbackLang  string
	verbose       bool
	quiet         bool
	exitZero      bool
	maxViolations int
	stats         bool
	only          string
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
	suggestRules string
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
	Long: `mdmend — fast, zero-dependency Markdown linter and fixer.

Automatically detects and fixes common Markdown linting issues. Provides
intelligent suggestions for code fence language detection (MD040) and
bare URL wrapping (MD034).

Examples:
  mdmend lint .                        Lint current directory
  mdmend lint README.md                Lint a single file
  mdmend lint ./docs --stats           Lint with rule frequency breakdown
  mdmend lint . --only MD040,MD034     Lint only specific rules
  mdmend fix .                         Fix all auto-fixable issues
  mdmend fix README.md --dry-run       Preview fixes without writing
  mdmend fix . --diff                  Show unified diffs
  mdmend fix . --aggressive            Include heuristic fixes (MD040/MD034)
  mdmend suggest .                     Show suggested fixes for heuristic rules
  mdmend rules list                    List all available rules
  mdmend rules list --fixable          List only auto-fixable rules
  mdmend rules info MD040              Show details about a specific rule
  mdmend version                       Print version information`,
	Version: version,
}

func init() {
	rootCmd.SetVersionTemplate(fmt.Sprintf("mdmend %s (commit: %s, built: %s)\n", version, commit, date))

	rootCmd.PersistentFlags().StringVarP(&globalOpts.config, "config", "c", "", "Path to config file (default: .mdmend.yml)")
	rootCmd.PersistentFlags().StringVarP(&globalOpts.output, "output", "o", "console", "Output format: console|json")
	rootCmd.PersistentFlags().BoolVar(&globalOpts.noColor, "no-color", false, "Disable color output")
	rootCmd.PersistentFlags().StringArrayVar(&globalOpts.ignore, "ignore", []string{}, "Glob pattern to ignore (repeatable, e.g. --ignore vendor/)")
	rootCmd.PersistentFlags().StringVar(&globalOpts.rules, "rules", "", "Enable/disable rules (comma-separated, prefix ~ to disable, e.g. MD040,~MD034)")
	rootCmd.PersistentFlags().IntVar(&globalOpts.tabSize, "tab-size", 4, "Tab size used by MD010 hard-tab check")
	rootCmd.PersistentFlags().StringVar(&globalOpts.fenceStyle, "fence-style", "backtick", "Code fence style for MD048: backtick|tilde")
	rootCmd.PersistentFlags().StringVar(&globalOpts.urlStyle, "url-style", "angle", "URL wrap style for MD034: angle|link")
	rootCmd.PersistentFlags().StringVar(&globalOpts.fallbackLang, "fallback-lang", "text", "Fallback language tag for MD040 when inference fails")
	rootCmd.PersistentFlags().BoolVarP(&globalOpts.verbose, "verbose", "v", false, "Show detailed output: per-file timing, file list, violation counts")
	rootCmd.PersistentFlags().BoolVarP(&globalOpts.quiet, "quiet", "q", false, "Suppress all output except the summary line")
	rootCmd.PersistentFlags().BoolVar(&globalOpts.exitZero, "exit-zero", false, "Always exit with code 0 (advisory CI mode)")
	rootCmd.PersistentFlags().IntVar(&globalOpts.maxViolations, "max-violations", 0, "Exit 1 only if violations exceed N (0 = any violation fails)")
	rootCmd.PersistentFlags().BoolVar(&globalOpts.stats, "stats", false, "Print per-rule violation frequency table after summary")
	rootCmd.PersistentFlags().StringVar(&globalOpts.only, "only", "", "Run only the given rules (comma-separated, e.g. MD040,MD034)")

	rootCmd.AddCommand(newFixCmd())
	rootCmd.AddCommand(newLintCmd())
	rootCmd.AddCommand(newSuggestCmd())
	rootCmd.AddCommand(newVersionCmd())
	rootCmd.AddCommand(newRulesCmd())
}

func newFixCmd() *cobra.Command {
	opts := &fixOptions{}

	cmd := &cobra.Command{
		Use:   "fix [paths...]",
		Short: "Auto-fix all fixable violations",
		Long: `Auto-fix all fixable Markdown lint violations in the given files or directories.

By default fixes are written directly to files. Use --dry-run to preview
changes without modifying anything, or --diff to see unified diffs.

Fixable rules are applied in phase order to avoid conflicts:
  Structure → Inline → Style → Heuristic → Cleanup

Examples:
  mdmend fix .                         Fix all files in current directory
  mdmend fix README.md                 Fix a single file
  mdmend fix ./docs --dry-run          Preview only, do not write
  mdmend fix . --diff                  Show what would change as a diff
  mdmend fix . --aggressive            Also apply heuristic fixes (MD040/MD034)
  mdmend fix . --only MD009,MD010      Fix only specific rules
  mdmend fix . --workers 4             Use 4 parallel workers
  mdmend fix . --output json           Output results as JSON`,
		Args: cobra.MinimumNArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			opts.globalOptions = globalOpts
			return runFix(args, opts)
		},
	}

	cmd.Flags().BoolVarP(&opts.dryRun, "dry-run", "n", false, "Show what would change; do not write files")
	cmd.Flags().BoolVarP(&opts.diff, "diff", "d", false, "Output unified diffs instead of writing files")
	cmd.Flags().BoolVar(&opts.aggressive, "aggressive", false, "Apply heuristic fixes (MD040/MD034) without confirmation")
	cmd.Flags().IntVar(&opts.workers, "workers", runtime.NumCPU(), "Number of parallel worker goroutines")

	return cmd
}

func newLintCmd() *cobra.Command {
	opts := &lintOptions{}

	cmd := &cobra.Command{
		Use:   "lint [paths...]",
		Short: "Report violations without fixing",
		Long: `Report all Markdown lint violations without modifying any files.

Exit code is 1 when violations are found, 0 when clean.
Use --exit-zero to always exit 0 (advisory CI mode).
Use --max-violations N to only fail when violations exceed N.

Each violation is shown as:
  ✗  fixable violation (can be auto-fixed with 'mdmend fix')
  !  informational / non-fixable violation

Examples:
  mdmend lint .                        Lint current directory recursively
  mdmend lint README.md                Lint a single file
  mdmend lint ./docs ./README.md       Lint multiple paths
  mdmend lint . --only MD009,MD010     Check only specific rules
  mdmend lint . --rules ~MD013,~MD033  Disable specific rules
  mdmend lint . --stats                Show per-rule frequency table
  mdmend lint . --quiet                Show summary line only
  mdmend lint . --verbose              Show per-file timing and violation counts
  mdmend lint . --output json          Output as JSON (for CI/tooling)
  mdmend lint . --no-color             Plain text output
  mdmend lint . --exit-zero            Always exit 0 (advisory mode)
  mdmend lint . --max-violations 10    Fail only when >10 violations found`,
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
		Short: "Show suggested fixes for heuristic rules",
		Long: `Show diff-style suggestions for heuristic rules (MD040, MD034) without writing.

These rules require inference (language detection, URL detection) and are not
auto-applied by default. Use this command to preview what --aggressive would do.
Apply the suggestions with: mdmend fix . --aggressive

Examples:
  mdmend suggest .                     Suggest for all heuristic rules
  mdmend suggest README.md             Suggest for a single file
  mdmend suggest . --rules MD040       Only suggest for code fence language`,
		Args: cobra.MinimumNArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			opts.globalOptions = globalOpts
			return runSuggest(args, opts)
		},
	}

	cmd.Flags().StringVar(&opts.suggestRules, "rules", "MD040,MD034", "Comma-separated rules to show suggestions for")

	return cmd
}

func newVersionCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "version",
		Short: "Print version information",
		Long:  "Print the mdmend version, git commit, and build date.",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Printf("mdmend %s\n", version)
			fmt.Printf("  commit: %s\n", commit)
			fmt.Printf("  built:  %s\n", date)
		},
	}
}

func newRulesCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "rules",
		Short: "Inspect available lint rules",
		Long: `Inspect, list, and query the built-in lint rules.

Subcommands:
  list          List all available rules with fixable status
  info <ID>     Show detailed information about a specific rule

Examples:
  mdmend rules list
  mdmend rules list --fixable
  mdmend rules list --output json
  mdmend rules info MD040`,
	}

	cmd.AddCommand(newRulesListCmd())
	cmd.AddCommand(newRulesInfoCmd())

	return cmd
}

func newRulesListCmd() *cobra.Command {
	var showFixable bool
	var showUnfixable bool

	cmd := &cobra.Command{
		Use:   "list",
		Short: "List all available lint rules",
		Long: `List all built-in lint rules with ID, name, fixable status, and description.

Examples:
  mdmend rules list                  List all rules
  mdmend rules list --fixable        List only auto-fixable rules
  mdmend rules list --no-fixable     List only non-fixable (informational) rules
  mdmend rules list --output json    Output as JSON`,
		RunE: func(cmd *cobra.Command, args []string) error {
			return runRulesList(showFixable, showUnfixable, globalOpts)
		},
	}

	cmd.Flags().BoolVar(&showFixable, "fixable", false, "Show only auto-fixable rules")
	cmd.Flags().BoolVar(&showUnfixable, "no-fixable", false, "Show only non-fixable (informational) rules")

	return cmd
}

func newRulesInfoCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "info <rule-id>",
		Short: "Show details about a specific rule",
		Long: `Show detailed information about a specific rule by its ID.

Examples:
  mdmend rules info MD040
  mdmend rules info MD034
  mdmend rules info MD009`,
		Args: cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			return runRulesInfo(args[0], globalOpts)
		},
	}
}

func runRulesList(fixableOnly, unfixableOnly bool, opts globalOptions) error {
	if opts.noColor {
		color.NoColor = true
	}

	allRules := rules.All()
	sort.Slice(allRules, func(i, j int) bool {
		return allRules[i].ID() < allRules[j].ID()
	})

	if opts.output == "json" {
		return runRulesListJSON(allRules, fixableOnly, unfixableOnly)
	}

	cyan := color.New(color.FgCyan).SprintFunc()
	green := color.New(color.FgGreen).SprintFunc()
	yellow := color.New(color.FgYellow).SprintFunc()
	bold := color.New(color.Bold).SprintFunc()

	fmt.Printf("\n  %s\n\n", bold("Available Rules"))
	fmt.Printf("  %-8s  %-36s  %-8s  %s\n", bold("ID"), bold("Name"), bold("Fixable"), bold("Description"))
	fmt.Printf("  %s\n", strings.Repeat("─", 100))

	count := 0
	for _, r := range allRules {
		if fixableOnly && !r.Fixable() {
			continue
		}
		if unfixableOnly && r.Fixable() {
			continue
		}

		fixableStr := green("yes")
		if !r.Fixable() {
			fixableStr = yellow("no ")
		}

		desc := r.Description()
		if len(desc) > 50 {
			desc = desc[:47] + "..."
		}

		fmt.Printf("  %-8s  %-36s  %-16s  %s\n", cyan(r.ID()), r.Name(), fixableStr, desc)
		count++
	}

	fmt.Printf("\n  %d rules total", count)
	if fixableOnly {
		fmt.Printf(" (fixable only)")
	} else if unfixableOnly {
		fmt.Printf(" (non-fixable only)")
	}
	fmt.Printf("\n\n")
	return nil
}

func runRulesListJSON(allRules []rules.Rule, fixableOnly, unfixableOnly bool) error {
	type ruleJSON struct {
		ID          string `json:"id"`
		Name        string `json:"name"`
		Description string `json:"description"`
		Fixable     bool   `json:"fixable"`
	}

	var out []ruleJSON
	for _, r := range allRules {
		if fixableOnly && !r.Fixable() {
			continue
		}
		if unfixableOnly && r.Fixable() {
			continue
		}
		out = append(out, ruleJSON{
			ID:          r.ID(),
			Name:        r.Name(),
			Description: r.Description(),
			Fixable:     r.Fixable(),
		})
	}

	enc := json.NewEncoder(os.Stdout)
	enc.SetIndent("", "  ")
	return enc.Encode(map[string]interface{}{
		"rules": out,
		"total": len(out),
	})
}

func runRulesInfo(id string, opts globalOptions) error {
	if opts.noColor {
		color.NoColor = true
	}

	id = strings.ToUpper(strings.TrimSpace(id))
	r := rules.Get(id)
	if r == nil {
		return fmt.Errorf("rule %q not found — run 'mdmend rules list' to see all available rules", id)
	}

	if opts.output == "json" {
		enc := json.NewEncoder(os.Stdout)
		enc.SetIndent("", "  ")
		return enc.Encode(map[string]interface{}{
			"id":          r.ID(),
			"name":        r.Name(),
			"description": r.Description(),
			"fixable":     r.Fixable(),
		})
	}

	cyan := color.New(color.FgCyan).SprintFunc()
	green := color.New(color.FgGreen).SprintFunc()
	yellow := color.New(color.FgYellow).SprintFunc()
	bold := color.New(color.Bold).SprintFunc()

	fixableStr := green("yes — can be auto-fixed with 'mdmend fix'")
	if !r.Fixable() {
		fixableStr = yellow("no — informational only")
	}

	fmt.Printf("\n  %s  %s\n", cyan(bold(r.ID())), bold(r.Name()))
	fmt.Printf("  %s\n\n", strings.Repeat("─", 55))
	fmt.Printf("  Description:  %s\n", r.Description())
	fmt.Printf("  Fixable:      %s\n", fixableStr)
	fmt.Printf("\n  Reference: https://github.com/DavidAnson/markdownlint/blob/main/doc/%s.md\n\n", r.ID())

	return nil
}

func runFix(args []string, opts *fixOptions) error {
	if opts.noColor {
		color.NoColor = true
	}

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

	start := time.Now()
	files, err := w.Walk(args)
	if err != nil {
		return err
	}

	if len(files) == 0 {
		fmt.Println("No Markdown files found.")
		return nil
	}

	if opts.verbose && !opts.quiet {
		fmt.Printf("\n  Discovered %d file(s) in %s\n", len(files), time.Since(start).Round(time.Millisecond))
		for _, f := range files {
			fmt.Printf("    %s\n", f)
		}
		fmt.Println()
	}

	if opts.output == "json" {
		return runFixJSON(files, cfg, opts)
	}

	return runFixConsole(files, cfg, opts)
}

func runFixConsole(files []string, cfg *config.Config, opts *fixOptions) error {
	cr := reporter.NewConsoleReporter(opts.noColor)
	if !opts.quiet {
		cr.PrintHeader(version, len(files), opts.workers)
	}

	f := fixer.New(cfg)
	totalViolations := 0
	filesChanged := 0
	ruleStats := make(map[string]int)

	for _, path := range files {
		fileStart := time.Now()

		content, err := os.ReadFile(path)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error reading %s: %v\n", path, err)
			continue
		}

		violations := f.Lint(string(content), path)
		violations = applyOnlyFilter(violations, opts.only)

		if len(violations) > 0 && !opts.quiet {
			if err := cr.Report(path, violations); err != nil {
				fmt.Fprintf(os.Stderr, "Error reporting %s: %v\n", path, err)
			}
			for _, v := range violations {
				ruleStats[v.Rule]++
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

		if opts.verbose && !opts.quiet {
			elapsed := time.Since(fileStart).Round(time.Microsecond)
			fmt.Printf("  [%.2fms] %s\n", float64(elapsed.Microseconds())/1000.0, path)
		}
	}

	if !opts.quiet {
		if err := cr.Summary(len(files), filesChanged, totalViolations); err != nil {
			fmt.Fprintf(os.Stderr, "Error writing summary: %v\n", err)
		}
	} else {
		if filesChanged == 0 {
			fmt.Printf("%d files scanned — nothing to fix\n", len(files))
		} else {
			fmt.Printf("%d files scanned — %d fixes in %d file(s)\n", len(files), totalViolations, filesChanged)
		}
	}

	if opts.dryRun && filesChanged > 0 {
		cr.DryRunNotice()
	}

	if opts.stats && len(ruleStats) > 0 {
		printRuleStats(ruleStats, opts.noColor)
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
		violations = applyOnlyFilterJSON(violations, opts.only)

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
	if opts.noColor {
		color.NoColor = true
	}

	if len(args) == 0 {
		args = []string{"."}
	}

	cfg, err := loadConfig(opts.globalOptions)
	if err != nil {
		return err
	}

	ignore := append(cfg.Ignore, opts.ignore...)
	w := walker.New(ignore)

	start := time.Now()
	files, err := w.Walk(args)
	if err != nil {
		return err
	}

	if len(files) == 0 {
		fmt.Println("No Markdown files found.")
		return nil
	}

	if opts.verbose && !opts.quiet {
		fmt.Printf("\n  Discovered %d file(s) in %s\n", len(files), time.Since(start).Round(time.Millisecond))
		for _, f := range files {
			fmt.Printf("    %s\n", f)
		}
		fmt.Println()
	}

	if opts.output == "json" {
		return runLintJSON(files, cfg, opts)
	}

	return runLintConsole(files, cfg, opts)
}

func runLintConsole(files []string, cfg *config.Config, opts *lintOptions) error {
	cr := reporter.NewConsoleReporter(opts.noColor)
	if !opts.quiet {
		cr.PrintHeader(version, len(files), 1)
	}

	l := linter.New(cfg)
	totalViolations := 0
	filesWithIssues := 0
	ruleStats := make(map[string]int)

	for _, path := range files {
		fileStart := time.Now()

		content, err := os.ReadFile(path)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error reading %s: %v\n", path, err)
			continue
		}

		result := l.Lint(string(content), path)
		filtered := applyOnlyFilter(result.Violations, opts.only)

		if len(filtered) > 0 {
			if !opts.quiet {
				if err := cr.Report(path, filtered); err != nil {
					fmt.Fprintf(os.Stderr, "Error reporting %s: %v\n", path, err)
				}
			}
			filesWithIssues++
			totalViolations += len(filtered)
			for _, v := range filtered {
				ruleStats[v.Rule]++
			}
		}

		if opts.verbose && !opts.quiet {
			elapsed := time.Since(fileStart).Round(time.Microsecond)
			if len(filtered) == 0 {
				fmt.Printf("  [%.2fms] %s — clean\n", float64(elapsed.Microseconds())/1000.0, path)
			} else {
				fmt.Printf("  [%.2fms] %s — %d violation(s)\n", float64(elapsed.Microseconds())/1000.0, path, len(filtered))
			}
		}
	}

	if !opts.quiet {
		if err := cr.Summary(len(files), filesWithIssues, totalViolations); err != nil {
			fmt.Fprintf(os.Stderr, "Error writing summary: %v\n", err)
		}
	} else {
		if totalViolations == 0 {
			fmt.Printf("%d files scanned — no issues\n", len(files))
		} else {
			fmt.Printf("%d files scanned — %d violations in %d file(s)\n", len(files), totalViolations, filesWithIssues)
		}
	}

	if opts.stats && len(ruleStats) > 0 {
		printRuleStats(ruleStats, opts.noColor)
	}

	if opts.exitZero {
		return nil
	}

	if opts.maxViolations > 0 {
		if totalViolations > opts.maxViolations {
			os.Exit(1)
		}
		return nil
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
		violations = applyOnlyFilterJSON(violations, opts.only)

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

	if opts.exitZero {
		return nil
	}

	if opts.maxViolations > 0 {
		if totalViolations > opts.maxViolations {
			os.Exit(1)
		}
		return nil
	}

	if totalViolations > 0 {
		os.Exit(1)
	}

	return nil
}

func runSuggest(args []string, opts *suggestOptions) error {
	if opts.noColor {
		color.NoColor = true
	}

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
		fmt.Println("No Markdown files found.")
		return nil
	}

	cr := reporter.NewConsoleReporter(opts.noColor)
	if !opts.quiet {
		cr.PrintHeader(version, len(files), 1)
	}

	f := fixer.New(cfg)
	dr := reporter.NewDiffReporter()
	changed := 0

	for _, path := range files {
		content, err := os.ReadFile(path)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error reading %s: %v\n", path, err)
			continue
		}

		result := f.Fix(string(content), path)
		if result.Changed {
			changed++
			if !opts.quiet {
				fmt.Printf("\n--- %s\n", path)
				if err := dr.Diff(path, string(content), result.Content); err != nil {
					fmt.Fprintf(os.Stderr, "Error generating diff for %s: %v\n", path, err)
				}
			}
		}
	}

	if changed == 0 && !opts.quiet {
		fmt.Println("  No suggestions — all files look good!")
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
		parts := strings.Split(opts.rules, ",")
		for _, r := range parts {
			r = strings.TrimSpace(r)
			if len(r) == 0 {
				continue
			}
			if r[0] == '~' {
				cfg.Disable = append(cfg.Disable, strings.ToUpper(r[1:]))
			}
		}
	}

	return cfg, nil
}

func applyOnlyFilter(violations []rules.Violation, only string) []rules.Violation {
	if only == "" {
		return violations
	}
	allowed := parseRuleSet(only)
	var filtered []rules.Violation
	for _, v := range violations {
		if allowed[strings.ToUpper(v.Rule)] {
			filtered = append(filtered, v)
		}
	}
	return filtered
}

func applyOnlyFilterJSON(violations []reporter.JSONViolation, only string) []reporter.JSONViolation {
	if only == "" {
		return violations
	}
	allowed := parseRuleSet(only)
	var filtered []reporter.JSONViolation
	for _, v := range violations {
		if allowed[strings.ToUpper(v.Rule)] {
			filtered = append(filtered, v)
		}
	}
	return filtered
}

func parseRuleSet(s string) map[string]bool {
	m := make(map[string]bool)
	for _, r := range strings.Split(s, ",") {
		r = strings.TrimSpace(r)
		if r != "" {
			m[strings.ToUpper(r)] = true
		}
	}
	return m
}

func printRuleStats(ruleStats map[string]int, noColor bool) {
	type ruleStat struct {
		id    string
		count int
	}

	var stats []ruleStat
	total := 0
	for id, count := range ruleStats {
		stats = append(stats, ruleStat{id, count})
		total += count
	}
	sort.Slice(stats, func(i, j int) bool {
		if stats[i].count != stats[j].count {
			return stats[i].count > stats[j].count
		}
		return stats[i].id < stats[j].id
	})

	cyan := color.New(color.FgCyan).SprintFunc()
	yellow := color.New(color.FgYellow).SprintFunc()
	bold := color.New(color.Bold).SprintFunc()
	if noColor {
		cyan = func(a ...interface{}) string { return fmt.Sprint(a...) }
		yellow = func(a ...interface{}) string { return fmt.Sprint(a...) }
		bold = func(a ...interface{}) string { return fmt.Sprint(a...) }
	}

	fmt.Printf("\n  %s\n", bold("Rule Frequency"))
	fmt.Printf("  %s\n", strings.Repeat("─", 55))
	for _, s := range stats {
		barLen := s.count * 20 / total
		if barLen == 0 {
			barLen = 1
		}
		bar := strings.Repeat("█", barLen)
		pct := float64(s.count) * 100.0 / float64(total)
		name := ""
		if r := rules.Get(s.id); r != nil {
			name = r.Name()
		}
		fmt.Printf("  %-8s  %s%-20s  %3d  (%.1f%%)\n",
			cyan(s.id), yellow(bar), name, s.count, pct)
	}
	fmt.Printf("  %s\n  Total: %d violations\n\n", strings.Repeat("─", 55), total)
}
