package reporter

import (
	"bytes"
	"testing"

	"github.com/mohitmishra786/mdmend/internal/rules"
)

func TestNewConsoleReporter(t *testing.T) {
	cr := NewConsoleReporter(false)
	if cr == nil {
		t.Fatal("NewConsoleReporter() returned nil")
	}
}

func TestNewConsoleReporterNoColor(t *testing.T) {
	cr := NewConsoleReporter(true)
	if cr == nil {
		t.Fatal("NewConsoleReporter() returned nil")
	}
}

func TestConsoleReporterReport(t *testing.T) {
	var buf bytes.Buffer
	cr := NewConsoleReporterWithWriter(&buf, true)

	violations := []rules.Violation{
		{Rule: "MD010", Line: 1, Column: 1, Message: "Hard tab", Fixable: true},
	}

	if err := cr.Report("test.md", violations); err != nil {
		t.Fatalf("Report() error = %v", err)
	}

	if buf.Len() == 0 {
		t.Error("Report() should write output")
	}
}

func TestConsoleReporterReportEmpty(t *testing.T) {
	var buf bytes.Buffer
	cr := NewConsoleReporterWithWriter(&buf, true)

	if err := cr.Report("test.md", []rules.Violation{}); err != nil {
		t.Fatalf("Report() error = %v", err)
	}

	if buf.Len() != 0 {
		t.Error("Report() with no violations should not write output")
	}
}

func TestConsoleReporterSummary(t *testing.T) {
	var buf bytes.Buffer
	cr := NewConsoleReporterWithWriter(&buf, true)

	if err := cr.Summary(10, 5, 15); err != nil {
		t.Fatalf("Summary() error = %v", err)
	}

	if buf.Len() == 0 {
		t.Error("Summary() should write output")
	}
}

func TestConsoleReporterSummaryNoIssues(t *testing.T) {
	var buf bytes.Buffer
	cr := NewConsoleReporterWithWriter(&buf, true)

	if err := cr.Summary(10, 0, 0); err != nil {
		t.Fatalf("Summary() error = %v", err)
	}

	if buf.Len() == 0 {
		t.Error("Summary() should write output")
	}
}

func TestConsoleReporterDryRunNotice(t *testing.T) {
	var buf bytes.Buffer
	cr := NewConsoleReporterWithWriter(&buf, true)

	cr.DryRunNotice()

	if buf.Len() == 0 {
		t.Error("DryRunNotice() should write output")
	}
}

func TestConsoleReporterPrintHeader(t *testing.T) {
	var buf bytes.Buffer
	cr := NewConsoleReporterWithWriter(&buf, true)

	cr.PrintHeader("1.0.0", 10, 4)

	if buf.Len() == 0 {
		t.Error("PrintHeader() should write output")
	}
}

func TestNewJSONReporter(t *testing.T) {
	jr := NewJSONReporter()
	if jr == nil {
		t.Fatal("NewJSONReporter() returned nil")
	}
}

func TestJSONReporterOutputResults(t *testing.T) {
	var buf bytes.Buffer
	jr := NewJSONReporterWithWriter(&buf)

	results := []JSONFileResult{
		{Path: "test.md", Violations: []JSONViolation{{Rule: "MD010", Line: 1, Column: 1, Message: "Hard tab", Fixable: true}}},
	}
	summary := JSONSummary{TotalFiles: 1, FilesWithIssues: 1, TotalViolations: 1}

	if err := jr.OutputResults(results, summary); err != nil {
		t.Fatalf("OutputResults() error = %v", err)
	}

	if buf.Len() == 0 {
		t.Error("OutputResults() should write output")
	}
}

func TestConvertViolations(t *testing.T) {
	violations := []rules.Violation{
		{Rule: "MD010", Line: 1, Column: 1, Message: "Hard tab", Fixable: true, Suggested: "fix"},
	}

	result := ConvertViolations(violations)

	if len(result) != 1 {
		t.Fatalf("ConvertViolations() returned %d items, want 1", len(result))
	}

	if result[0].Rule != "MD010" {
		t.Errorf("Rule = %q, want MD010", result[0].Rule)
	}
}

func TestNewDiffReporter(t *testing.T) {
	dr := NewDiffReporter()
	if dr == nil {
		t.Fatal("NewDiffReporter() returned nil")
	}
}

func TestDiffReporterDiff(t *testing.T) {
	var buf bytes.Buffer
	dr := NewDiffReporterWithWriter(&buf)

	original := "line1\nline2\n"
	fixed := "line1\nmodified\n"

	if err := dr.Diff("test.md", original, fixed); err != nil {
		t.Fatalf("Diff() error = %v", err)
	}

	if buf.Len() == 0 {
		t.Error("Diff() should write output")
	}
}

func TestDiffReporterDiffNoChange(t *testing.T) {
	var buf bytes.Buffer
	dr := NewDiffReporterWithWriter(&buf)

	content := "line1\nline2\n"

	if err := dr.Diff("test.md", content, content); err != nil {
		t.Fatalf("Diff() error = %v", err)
	}

	if buf.Len() != 0 {
		t.Error("Diff() with no changes should not write output")
	}
}

func TestDiffReporterReportViolations(t *testing.T) {
	var buf bytes.Buffer
	dr := NewDiffReporterWithWriter(&buf)

	violations := []rules.Violation{
		{Rule: "MD010", Line: 1, Column: 1, Message: "Hard tab", Fixable: true, Suggested: "fix"},
	}

	if err := dr.ReportViolations("test.md", violations); err != nil {
		t.Fatalf("ReportViolations() error = %v", err)
	}

	if buf.Len() == 0 {
		t.Error("ReportViolations() should write output")
	}
}

func TestDiffReporterReportViolationsEmpty(t *testing.T) {
	var buf bytes.Buffer
	dr := NewDiffReporterWithWriter(&buf)

	if err := dr.ReportViolations("test.md", []rules.Violation{}); err != nil {
		t.Fatalf("ReportViolations() error = %v", err)
	}

	if buf.Len() != 0 {
		t.Error("ReportViolations() with no violations should not write output")
	}
}

func TestFormatUnifiedDiff(t *testing.T) {
	original := "line1\nline2\n"
	fixed := "line1\nmodified\n"

	result := FormatUnifiedDiff("test.md", original, fixed)

	if len(result) == 0 {
		t.Error("FormatUnifiedDiff() should return diff output")
	}
}
