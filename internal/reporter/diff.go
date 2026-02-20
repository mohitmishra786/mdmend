package reporter

import (
	"fmt"
	"io"
	"os"
	"strings"

	"github.com/mohitmishra786/mdmend/internal/rules"
	"github.com/sergi/go-diff/diffmatchpatch"
)

type DiffReporter struct {
	writer io.Writer
}

func NewDiffReporter() *DiffReporter {
	return &DiffReporter{
		writer: os.Stdout,
	}
}

func NewDiffReporterWithWriter(w io.Writer) *DiffReporter {
	return &DiffReporter{
		writer: w,
	}
}

func (r *DiffReporter) Report(path string, violations []rules.Violation) error {
	return nil
}

func (r *DiffReporter) Summary(totalFiles, filesWithIssues, totalViolations int) error {
	return nil
}

func (r *DiffReporter) Diff(path string, original, fixed string) error {
	dmp := diffmatchpatch.New()
	diffs := dmp.DiffMain(original, fixed, false)

	if len(diffs) == 1 && diffs[0].Type == diffmatchpatch.DiffEqual {
		return nil
	}

	_, _ = fmt.Fprintf(r.writer, "--- %s\n", path)
	_, _ = fmt.Fprintf(r.writer, "+++ %s\n", path)

	delta := dmp.DiffToDelta(diffs)
	_ = delta

	lines := strings.Split(original, "\n")
	fixedLines := strings.Split(fixed, "\n")

	origIdx := 0
	fixedIdx := 0

	for origIdx < len(lines) || fixedIdx < len(fixedLines) {
		var chunkOrig []string
		var chunkFixed []string
		startLine := origIdx + 1

		for i := 0; i < 7 && (origIdx < len(lines) || fixedIdx < len(fixedLines)); i++ {
			if origIdx < len(lines) {
				chunkOrig = append(chunkOrig, lines[origIdx])
				origIdx++
			}
			if fixedIdx < len(fixedLines) {
				chunkFixed = append(chunkFixed, fixedLines[fixedIdx])
				fixedIdx++
			}
		}

		hasDiff := false
		maxChunk := len(chunkOrig)
		if len(chunkFixed) > maxChunk {
			maxChunk = len(chunkFixed)
		}

		for i := 0; i < maxChunk; i++ {
			origLine := ""
			fixedLine := ""
			if i < len(chunkOrig) {
				origLine = chunkOrig[i]
			}
			if i < len(chunkFixed) {
				fixedLine = chunkFixed[i]
			}
			if origLine != fixedLine {
				hasDiff = true
				break
			}
		}

		if hasDiff {
			_, _ = fmt.Fprintf(r.writer, "@@ -%d,%d +%d,%d @@\n", startLine, len(chunkOrig), startLine, len(chunkFixed))
			for _, line := range chunkOrig {
				_, _ = fmt.Fprintf(r.writer, "-%s\n", line)
			}
			for _, line := range chunkFixed {
				_, _ = fmt.Fprintf(r.writer, "+%s\n", line)
			}
		}
	}

	return nil
}

func (r *DiffReporter) ReportViolations(path string, violations []rules.Violation) error {
	if len(violations) == 0 {
		return nil
	}

	_, _ = fmt.Fprintf(r.writer, "--- %s (violations)\n", path)
	_, _ = fmt.Fprintf(r.writer, "+++ %s (suggested)\n", path)

	for _, v := range violations {
		_, _ = fmt.Fprintf(r.writer, "@@ %d:%d @@\n", v.Line, v.Column)
		_, _ = fmt.Fprintf(r.writer, "- %s\n", v.Message)
		if v.Suggested != "" {
			_, _ = fmt.Fprintf(r.writer, "+ %s\n", v.Suggested)
		}
	}

	return nil
}

func FormatUnifiedDiff(path, original, fixed string) string {
	var sb strings.Builder
	dr := NewDiffReporterWithWriter(&sb)
	_ = dr.Diff(path, original, fixed)
	return sb.String()
}
