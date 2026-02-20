package reporter

import (
	"fmt"
	"io"
	"os"
	"strings"

	"github.com/fatih/color"
	"github.com/yourhandle/mdmend/internal/rules"
)

type ConsoleReporter struct {
	writer  io.Writer
	noColor bool
}

func NewConsoleReporter(noColor bool) *ConsoleReporter {
	return &ConsoleReporter{
		writer:  os.Stdout,
		noColor: noColor,
	}
}

func NewConsoleReporterWithWriter(w io.Writer, noColor bool) *ConsoleReporter {
	return &ConsoleReporter{
		writer:  w,
		noColor: noColor,
	}
}

func (r *ConsoleReporter) Report(path string, violations []rules.Violation) error {
	if len(violations) == 0 {
		return nil
	}

	yellow := color.New(color.FgYellow).SprintFunc()
	cyan := color.New(color.FgCyan).SprintFunc()
	red := color.New(color.FgRed).SprintFunc()
	white := color.New(color.FgWhite).SprintFunc()
	if r.noColor {
		yellow = func(a ...interface{}) string { return fmt.Sprint(a...) }
		cyan = func(a ...interface{}) string { return fmt.Sprint(a...) }
		red = func(a ...interface{}) string { return fmt.Sprint(a...) }
		white = func(a ...interface{}) string { return fmt.Sprint(a...) }
	}

	fmt.Fprintf(r.writer, "\n  %s\n", cyan(path))

	for _, v := range violations {
		location := fmt.Sprintf("%d:%d", v.Line, v.Column)
		var symbol string
		if v.Fixable {
			symbol = yellow("✗")
		} else {
			symbol = red("!")
		}

		msg := v.Message
		if v.Suggested != "" {
			msg = fmt.Sprintf("%s → %s", v.Message, white(v.Suggested))
		}

		fmt.Fprintf(r.writer, "    %s %s:%s  %s\n", symbol, v.Rule, yellow(location), msg)
	}

	return nil
}

func (r *ConsoleReporter) Summary(totalFiles, filesWithIssues, totalViolations int) error {
	green := color.New(color.FgGreen).SprintFunc()
	yellow := color.New(color.FgYellow).SprintFunc()
	if r.noColor {
		green = func(a ...interface{}) string { return fmt.Sprint(a...) }
		yellow = func(a ...interface{}) string { return fmt.Sprint(a...) }
	}

	fmt.Fprintf(r.writer, "\n  %s\n", strings.Repeat("─", 45))

	if totalViolations == 0 {
		fmt.Fprintf(r.writer, "  %s files scanned · %s\n", green(fmt.Sprintf("%d", totalFiles)), green("no issues found"))
	} else {
		fmt.Fprintf(r.writer, "  %d files scanned · %s · %d violations\n",
			totalFiles,
			yellow(fmt.Sprintf("%d files with issues", filesWithIssues)),
			totalViolations)
	}

	return nil
}

func (r *ConsoleReporter) DryRunNotice() {
	yellow := color.New(color.FgYellow).SprintFunc()
	if r.noColor {
		yellow = func(a ...interface{}) string { return fmt.Sprint(a...) }
	}
	fmt.Fprintf(r.writer, "\n  %s\n", yellow("Dry run — no files written. Run without --dry-run to apply."))
}

func (r *ConsoleReporter) PrintHeader(version string, fileCount int, workerCount int) {
	cyan := color.New(color.FgCyan).SprintFunc()
	if r.noColor {
		cyan = func(a ...interface{}) string { return fmt.Sprint(a...) }
	}
	fmt.Fprintf(r.writer, "\n  %s v%s — scanning %d files with %d workers\n\n", cyan("mdmend"), version, fileCount, workerCount)
}
