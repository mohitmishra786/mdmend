package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"strings"

	"github.com/mohitmishra786/mdmend/internal/config"
	"github.com/mohitmishra786/mdmend/pkg/mdmend"
	"github.com/spf13/cobra"
)

type serverOptions struct {
	globalOptions
}

func newServerCmd() *cobra.Command {
	opts := &serverOptions{}

	cmd := &cobra.Command{
		Use:   "server",
		Short: "Start the mdmend language server (stdio JSON-RPC)",
		Long: `Start a minimal Language Server Protocol server over stdio.

Supports initialize, textDocument/didOpen, and publishDiagnostics for
editor integration.

Examples:
  mdmend server
  mdmend server --config .mdmend.yml`,
		Args: cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			opts.globalOptions = globalOpts
			return runServer(opts)
		},
	}

	return cmd
}

type jsonRPCRequest struct {
	JSONRPC string          `json:"jsonrpc"`
	ID      json.RawMessage `json:"id,omitempty"`
	Method  string          `json:"method"`
	Params  json.RawMessage `json:"params,omitempty"`
}

type jsonRPCResponse struct {
	JSONRPC string          `json:"jsonrpc"`
	ID      json.RawMessage `json:"id"`
	Result  interface{}     `json:"result,omitempty"`
	Error   *jsonRPCError   `json:"error,omitempty"`
}

type jsonRPCError struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

type jsonRPCNotification struct {
	JSONRPC string          `json:"jsonrpc"`
	Method  string          `json:"method"`
	Params  json.RawMessage `json:"params,omitempty"`
}

type textDocumentItem struct {
	URI        string `json:"uri"`
	LanguageID string `json:"languageId"`
	Version    int    `json:"version"`
	Text       string `json:"text"`
}

type didOpenParams struct {
	TextDocument textDocumentItem `json:"textDocument"`
}

type publishDiagnosticsParams struct {
	URI         string          `json:"uri"`
	Diagnostics []lspDiagnostic `json:"diagnostics"`
}

type lspDiagnostic struct {
	Range    lspRange `json:"range"`
	Severity int      `json:"severity"`
	Code     string   `json:"code"`
	Source   string   `json:"source"`
	Message  string   `json:"message"`
}

type lspRange struct {
	Start lspPosition `json:"start"`
	End   lspPosition `json:"end"`
}

type lspPosition struct {
	Line      int `json:"line"`
	Character int `json:"character"`
}

func runServer(opts *serverOptions) error {
	cfg, err := loadConfig(opts.globalOptions)
	if err != nil {
		return err
	}

	client := mdmend.NewClient(mdmend.WithConfig(fromInternalConfig(cfg)))

	reader := bufio.NewReader(os.Stdin)
	writer := os.Stdout

	for {
		body, err := readLSPMessage(reader)
		if err != nil {
			if err == io.EOF {
				return nil
			}
			return err
		}

		var req jsonRPCRequest
		if err := json.Unmarshal(body, &req); err != nil {
			continue
		}

		switch req.Method {
		case "initialize":
			result := map[string]interface{}{
				"capabilities": map[string]interface{}{
					"textDocumentSync": 1,
				},
				"serverInfo": map[string]string{
					"name":    "mdmend",
					"version": version,
				},
			}
			if err := writeLSPResponse(writer, req.ID, result); err != nil {
				return err
			}
		case "initialized", "shutdown":
			if len(req.ID) > 0 {
				if err := writeLSPResponse(writer, req.ID, map[string]interface{}{}); err != nil {
					return err
				}
			}
		case "exit":
			return nil
		case "textDocument/didOpen":
			var params didOpenParams
			if err := json.Unmarshal(req.Params, &params); err != nil {
				continue
			}
			path := uriToPath(params.TextDocument.URI)
			result := client.LintString(params.TextDocument.Text, path)
			if err := publishDiagnostics(writer, params.TextDocument.URI, result.Violations); err != nil {
				return err
			}
		case "textDocument/didChange":
			var params struct {
				TextDocument struct {
					URI string `json:"uri"`
				} `json:"textDocument"`
				ContentChanges []struct {
					Text string `json:"text"`
				} `json:"contentChanges"`
			}
			if err := json.Unmarshal(req.Params, &params); err != nil {
				continue
			}
			if len(params.ContentChanges) == 0 {
				continue
			}
			path := uriToPath(params.TextDocument.URI)
			result := client.LintString(params.ContentChanges[len(params.ContentChanges)-1].Text, path)
			if err := publishDiagnostics(writer, params.TextDocument.URI, result.Violations); err != nil {
				return err
			}
		default:
			if len(req.ID) > 0 {
				if err := writeLSPResponse(writer, req.ID, map[string]interface{}{}); err != nil {
					return err
				}
			}
		}
	}
}

func readLSPMessage(reader *bufio.Reader) ([]byte, error) {
	var contentLength int
	for {
		line, err := reader.ReadString('\n')
		if err != nil {
			return nil, err
		}
		line = strings.TrimSpace(line)
		if line == "" {
			break
		}
		if strings.HasPrefix(strings.ToLower(line), "content-length:") {
			_, _ = fmt.Sscanf(line, "Content-Length: %d", &contentLength)
		}
	}

	if contentLength <= 0 {
		return nil, fmt.Errorf("invalid content length")
	}

	body := make([]byte, contentLength)
	_, err := io.ReadFull(reader, body)
	return body, err
}

func writeLSPMessage(writer io.Writer, payload []byte) error {
	header := fmt.Sprintf("Content-Length: %d\r\n\r\n", len(payload))
	if _, err := writer.Write([]byte(header)); err != nil {
		return err
	}
	_, err := writer.Write(payload)
	return err
}

func writeLSPResponse(writer io.Writer, id json.RawMessage, result interface{}) error {
	resp := jsonRPCResponse{
		JSONRPC: "2.0",
		ID:      id,
		Result:  result,
	}
	data, err := json.Marshal(resp)
	if err != nil {
		return err
	}
	return writeLSPMessage(writer, data)
}

func publishDiagnostics(writer io.Writer, uri string, violations []mdmend.Violation) error {
	diagnostics := make([]lspDiagnostic, 0, len(violations))
	for _, v := range violations {
		severity := 2
		if v.Fixable {
			severity = 3
		}
		line := v.Line - 1
		if line < 0 {
			line = 0
		}
		column := v.Column - 1
		if column < 0 {
			column = 0
		}
		diagnostics = append(diagnostics, lspDiagnostic{
			Range: lspRange{
				Start: lspPosition{Line: line, Character: column},
				End:   lspPosition{Line: line, Character: column + 1},
			},
			Severity: severity,
			Code:     v.Rule,
			Source:   "mdmend",
			Message:  v.Message,
		})
	}

	notification := jsonRPCNotification{
		JSONRPC: "2.0",
		Method:  "textDocument/publishDiagnostics",
	}
	params := publishDiagnosticsParams{
		URI:         uri,
		Diagnostics: diagnostics,
	}
	data, err := json.Marshal(struct {
		JSONRPC string                   `json:"jsonrpc"`
		Method  string                   `json:"method"`
		Params  publishDiagnosticsParams `json:"params"`
	}{
		JSONRPC: notification.JSONRPC,
		Method:  notification.Method,
		Params:  params,
	})
	if err != nil {
		return err
	}
	return writeLSPMessage(writer, data)
}

func uriToPath(uri string) string {
	if strings.HasPrefix(uri, "file://") {
		path := strings.TrimPrefix(uri, "file://")
		if strings.HasPrefix(path, "/") && len(path) > 2 && path[2] == ':' {
			path = path[1:]
		}
		return path
	}
	return uri
}

func fromInternalConfig(cfg *config.Config) *mdmend.Config {
	if cfg == nil {
		return mdmend.DefaultConfig()
	}

	rules := make(map[string]mdmend.RuleConfig)
	for id, rc := range cfg.Rules {
		rules[id] = mdmend.RuleConfig{
			TabSize:               rc.TabSize,
			Punctuation:           rc.Punctuation,
			Style:                 rc.Style,
			SkipPatterns:          rc.SkipPatterns,
			Fallback:              rc.Fallback,
			Confidence:            rc.Confidence,
			Names:                 rc.Names,
			Indent:                rc.Indent,
			LineLength:            rc.LineLength,
			Enabled:               rc.Enabled,
			Smart:                 rc.Smart,
			AllowDifferentNesting: rc.AllowDifferentNesting,
			Suggest:               rc.Suggest,
			SuggestClosest:        rc.SuggestClosest,
			PadShortRows:          rc.PadShortRows,
			DeriveFromFilename:    rc.DeriveFromFilename,
			PromoteFirst:          rc.PromoteFirst,
			FrontMatter:           rc.FrontMatter,
			AllowedTags:           rc.AllowedTags,
			Headings:              rc.Headings,
			CodeBlocks:            rc.CodeBlocks,
			Tables:                rc.Tables,
			Level:                 rc.Level,
			SuggestDemotion:       rc.SuggestDemotion,
		}
	}

	return &mdmend.Config{
		Disable:    cfg.Disable,
		Rules:      rules,
		Ignore:     cfg.Ignore,
		TabSize:    cfg.TabSize,
		Aggressive: cfg.Aggressive,
	}
}
