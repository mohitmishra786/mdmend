package reporter

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"time"

	"github.com/mohitmishra786/mdmend/internal/rules"
)

const sarifSchema = "https://json.schemastore.org/sarif-2.1.0.json"

type SARIFReporter struct {
	writer  io.Writer
	version string
}

func NewSARIFReporter(version string) *SARIFReporter {
	return &SARIFReporter{
		writer:  os.Stdout,
		version: version,
	}
}

func NewSARIFReporterWithWriter(w io.Writer, version string) *SARIFReporter {
	return &SARIFReporter{
		writer:  w,
		version: version,
	}
}

type sarifDocument struct {
	Version string     `json:"version"`
	Schema  string     `json:"$schema"`
	Runs    []sarifRun `json:"runs"`
}

type sarifRun struct {
	Tool    sarifTool     `json:"tool"`
	Results []sarifResult `json:"results"`
}

type sarifTool struct {
	Driver sarifDriver `json:"driver"`
}

type sarifDriver struct {
	Name    string      `json:"name"`
	Version string      `json:"version"`
	Rules   []sarifRule `json:"rules"`
}

type sarifRule struct {
	ID               string `json:"id"`
	Name             string `json:"name"`
	ShortDescription struct {
		Text string `json:"text"`
	} `json:"shortDescription"`
	FullDescription struct {
		Text string `json:"text"`
	} `json:"fullDescription"`
}

type sarifResult struct {
	RuleID    string          `json:"ruleId"`
	Level     string          `json:"level"`
	Message   sarifMessage    `json:"message"`
	Locations []sarifLocation `json:"locations"`
}

type sarifMessage struct {
	Text string `json:"text"`
}

type sarifLocation struct {
	PhysicalLocation sarifPhysicalLocation `json:"physicalLocation"`
}

type sarifPhysicalLocation struct {
	ArtifactLocation sarifArtifactLocation `json:"artifactLocation"`
	Region           sarifRegion           `json:"region"`
}

type sarifArtifactLocation struct {
	URI string `json:"uri"`
}

type sarifRegion struct {
	StartLine   int `json:"startLine"`
	StartColumn int `json:"startColumn"`
}

func (r *SARIFReporter) OutputResults(results []JSONFileResult, summary JSONSummary) error {
	_ = summary

	ruleIndex := make(map[string]struct{})
	var sarifResults []sarifResult

	for _, file := range results {
		if file.Error != "" {
			continue
		}
		for _, v := range file.Violations {
			ruleIndex[v.Rule] = struct{}{}
			level := "warning"
			if !v.Fixable {
				level = "error"
			}
			message := v.Message
			if message == "" {
				message = fmt.Sprintf("%s violation", v.Rule)
			}
			sarifResults = append(sarifResults, sarifResult{
				RuleID: v.Rule,
				Level:  level,
				Message: sarifMessage{
					Text: message,
				},
				Locations: []sarifLocation{
					{
						PhysicalLocation: sarifPhysicalLocation{
							ArtifactLocation: sarifArtifactLocation{
								URI: file.Path,
							},
							Region: sarifRegion{
								StartLine:   v.Line,
								StartColumn: v.Column,
							},
						},
					},
				},
			})
		}
	}

	driverRules := make([]sarifRule, 0, len(ruleIndex))
	for ruleID := range ruleIndex {
		rule := rules.Get(ruleID)
		sarifRuleEntry := sarifRule{ID: ruleID}
		if rule != nil {
			sarifRuleEntry.Name = rule.Name()
			sarifRuleEntry.ShortDescription.Text = rule.Name()
			sarifRuleEntry.FullDescription.Text = rule.Description()
		} else {
			sarifRuleEntry.Name = ruleID
			sarifRuleEntry.ShortDescription.Text = ruleID
			sarifRuleEntry.FullDescription.Text = ruleID
		}
		driverRules = append(driverRules, sarifRuleEntry)
	}

	doc := sarifDocument{
		Version: "2.1.0",
		Schema:  sarifSchema,
		Runs: []sarifRun{
			{
				Tool: sarifTool{
					Driver: sarifDriver{
						Name:    "mdmend",
						Version: r.version,
						Rules:   driverRules,
					},
				},
				Results: sarifResults,
			},
		},
	}

	encoder := json.NewEncoder(r.writer)
	encoder.SetIndent("", "  ")
	return encoder.Encode(doc)
}

func (r *SARIFReporter) Report(path string, violations []rules.Violation) error {
	return nil
}

func (r *SARIFReporter) Summary(totalFiles, filesWithIssues, totalViolations int) error {
	return nil
}

func SARIFTimestamp() string {
	return time.Now().UTC().Format(time.RFC3339)
}
