package inferrer

import (
	"testing"
)

func TestInferFromShebang(t *testing.T) {
	tests := []struct {
		name     string
		content  []string
		wantLang string
		wantConf float64
	}{
		{
			name:     "bash shebang",
			content:  []string{"#!/bin/bash", "echo hello"},
			wantLang: "bash",
			wantConf: 0.95,
		},
		{
			name:     "python shebang",
			content:  []string{"#!/usr/bin/python3", "print('hello')"},
			wantLang: "python",
			wantConf: 0.95,
		},
		{
			name:     "node shebang",
			content:  []string{"#!/usr/bin/node", "console.log('hello')"},
			wantLang: "javascript",
			wantConf: 0.95,
		},
		{
			name:     "ruby shebang",
			content:  []string{"#!/usr/bin/ruby", "puts 'hello'"},
			wantLang: "ruby",
			wantConf: 0.95,
		},
		{
			name:     "no shebang returns empty",
			content:  []string{"some random text"},
			wantLang: "",
			wantConf: 0,
		},
		{
			name:     "empty content",
			content:  []string{},
			wantLang: "",
			wantConf: 0,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := InferLanguage(tt.content, []string{})
			if result.Language != tt.wantLang {
				t.Errorf("InferLanguage() Language = %q, want %q", result.Language, tt.wantLang)
			}
		})
	}
}

func TestInferFromContent(t *testing.T) {
	tests := []struct {
		name     string
		content  []string
		wantLang string
	}{
		{
			name:     "json content",
			content:  []string{"{", `  "key": "value"`, "}"},
			wantLang: "json",
		},
		{
			name:     "yaml content",
			content:  []string{"key:", "  nested: value"},
			wantLang: "yaml",
		},
		{
			name:     "go content",
			content:  []string{"package main", "", "func main() {}"},
			wantLang: "go",
		},
		{
			name:     "python content",
			content:  []string{"import os", "", "def main():", "    pass"},
			wantLang: "python",
		},
		{
			name:     "sql content",
			content:  []string{"SELECT * FROM users;", "WHERE id = 1;"},
			wantLang: "sql",
		},
		{
			name:     "dockerfile content",
			content:  []string{"FROM alpine:latest", "RUN apk add bash"},
			wantLang: "dockerfile",
		},
		{
			name:     "javascript content",
			content:  []string{"const x = 1;", "function test() {}"},
			wantLang: "javascript",
		},
		{
			name:     "rust content",
			content:  []string{"fn main() {", "    println!(\"hello\");", "}"},
			wantLang: "rust",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := InferLanguage(tt.content, []string{})
			if result.Language != tt.wantLang {
				t.Errorf("InferLanguage() Language = %q, want %q", result.Language, tt.wantLang)
			}
		})
	}
}

func TestInferFromContext(t *testing.T) {
	tests := []struct {
		name     string
		content  []string
		context  []string
		wantLang string
	}{
		{
			name:     "docker heading context",
			content:  []string{"FROM alpine"},
			context:  []string{"## Docker Setup", "Run this:"},
			wantLang: "dockerfile",
		},
		{
			name:     "json heading context",
			content:  []string{"{", "}"},
			context:  []string{"### API Response", "Example:"},
			wantLang: "json",
		},
		{
			name:     "python heading context",
			content:  []string{"print('hello')"},
			context:  []string{"## Python Example", "Code:"},
			wantLang: "python",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := InferLanguage(tt.content, tt.context)
			if result.Language != tt.wantLang {
				t.Errorf("InferLanguage() Language = %q, want %q", result.Language, tt.wantLang)
			}
		})
	}
}

func TestInferFromFileMention(t *testing.T) {
	tests := []struct {
		name     string
		content  []string
		context  []string
		wantLang string
	}{
		{
			name:     "yml file mention",
			content:  []string{"key: value"},
			context:  []string{"Save as config.yml:", "```"},
			wantLang: "yaml",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := InferLanguage(tt.content, tt.context)
			if result.Language != tt.wantLang {
				t.Errorf("InferLanguage() Language = %q, want %q", result.Language, tt.wantLang)
			}
		})
	}
}

func TestInferLanguageFallback(t *testing.T) {
	content := []string{"some random text", "without patterns"}
	result := InferLanguage(content, []string{})

	if result.Language != "" {
		t.Errorf("InferLanguage() for unrecognized content should return empty language, got %q", result.Language)
	}
}

func TestInferLanguageEmpty(t *testing.T) {
	result := InferLanguage([]string{}, []string{})

	if result.Language != "" {
		t.Errorf("InferLanguage() for empty content should return empty language, got %q", result.Language)
	}
}
