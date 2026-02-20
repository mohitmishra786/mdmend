package reporter

import (
	"encoding/json"
	"io"
	"os"
	"time"

	"github.com/yourhandle/mdmend/internal/rules"
)

type JSONReporter struct {
	writer io.Writer
}

func NewJSONReporter() *JSONReporter {
	return &JSONReporter{
		writer: os.Stdout,
	}
}

func NewJSONReporterWithWriter(w io.Writer) *JSONReporter {
	return &JSONReporter{
		writer: w,
	}
}

type JSONViolation struct {
	Rule      string `json:"rule"`
	Line      int    `json:"line"`
	Column    int    `json:"column"`
	Message   string `json:"message"`
	Fixable   bool   `json:"fixable"`
	Suggested string `json:"suggested,omitempty"`
}

type JSONFileResult struct {
	Path       string          `json:"path"`
	Violations []JSONViolation `json:"violations"`
	Fixed      int             `json:"fixed,omitempty"`
	Error      string          `json:"error,omitempty"`
}

type JSONOutput struct {
	Timestamp string           `json:"timestamp"`
	Files     []JSONFileResult `json:"files"`
	Summary   JSONSummary      `json:"summary"`
}

type JSONSummary struct {
	TotalFiles      int `json:"total_files"`
	FilesWithIssues int `json:"files_with_issues"`
	TotalViolations int `json:"total_violations"`
	Fixable         int `json:"fixable"`
	Unfixable       int `json:"unfixable"`
}

func (r *JSONReporter) Report(path string, violations []rules.Violation) error {
	return nil
}

func (r *JSONReporter) Summary(totalFiles, filesWithIssues, totalViolations int) error {
	return nil
}

func (r *JSONReporter) OutputResults(results []JSONFileResult, summary JSONSummary) error {
	output := JSONOutput{
		Timestamp: time.Now().UTC().Format(time.RFC3339),
		Files:     results,
		Summary:   summary,
	}

	encoder := json.NewEncoder(r.writer)
	encoder.SetIndent("", "  ")
	return encoder.Encode(output)
}

func ConvertViolations(violations []rules.Violation) []JSONViolation {
	result := make([]JSONViolation, len(violations))
	for i, v := range violations {
		result[i] = JSONViolation{
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
