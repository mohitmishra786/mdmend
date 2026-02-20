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
			name:     "perl shebang",
			content:  []string{"#!/usr/bin/perl", "print 'hello'"},
			wantLang: "perl",
			wantConf: 0.95,
		},
		{
			name:     "sh shebang",
			content:  []string{"#!/bin/sh", "echo hello"},
			wantLang: "bash",
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
		{
			name:     "unknown shebang",
			content:  []string{"#!/usr/bin/unknown", "code"},
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
		{
			name:     "css content",
			content:  []string{".class {", "  color: red;", "}"},
			wantLang: "css",
		},
		{
			name:     "diff content",
			content:  []string{"+++ newfile", "--- oldfile", "@@ line @@"},
			wantLang: "diff",
		},
		{
			name:     "diff content",
			content:  []string{"+++ newfile", "--- oldfile", "@@ line @@"},
			wantLang: "diff",
		},
		{
			name:     "makefile content",
			content:  []string{"all: build", ".PHONY: all"},
			wantLang: "makefile",
		},
		{
			name:     "ruby content",
			content:  []string{"require 'json'", "class Foo", "end"},
			wantLang: "ruby",
		},
		{
			name:     "java content",
			content:  []string{"package com.example;", "public class Main {}"},
			wantLang: "java",
		},
		{
			name:     "c content",
			content:  []string{"#include <stdio.h>", "int main() {}"},
			wantLang: "c",
		},
		{
			name:     "cpp content",
			content:  []string{"#include <iostream>", "using namespace std;"},
			wantLang: "cpp",
		},
		{
			name:     "bash with multiple patterns",
			content:  []string{"#!/bin/bash", "apt update", "brew install x", "npm install", "pip install", "git clone", "curl url", "wget url", "echo done", "export VAR", "source file"},
			wantLang: "bash",
		},
		{
			name:     "typescript content",
			content:  []string{"interface User {", "  name: string", "}", "const x: number = 1"},
			wantLang: "typescript",
		},
		{
			name:     "html content",
			content:  []string{"<!DOCTYPE html>", "<html>", "</html>"},
			wantLang: "html",
		},
		{
			name:     "xml content",
			content:  []string{"<?xml version=\"1.0\"?>", "<root></root>"},
			wantLang: "xml",
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
			name:     "json file mention",
			content:  []string{"{}"},
			context:  []string{"Save as package.json:", "```"},
			wantLang: "json",
		},
		{
			name:     "json file mention",
			content:  []string{"{}"},
			context:  []string{"Save as package.json:", "```"},
			wantLang: "json",
		},
		{
			name:     "dockerfile mention",
			content:  []string{"FROM alpine"},
			context:  []string{"Create a Dockerfile:", "```"},
			wantLang: "dockerfile",
		},
		{
			name:     "makefile mention",
			content:  []string{".PHONY: all", "all: build"},
			context:  []string{"Create a Makefile:", "```"},
			wantLang: "makefile",
		},
		{
			name:     "pipfile mention",
			content:  []string{"[[source]]", "url = \"pypi\""},
			context:  []string{"Save as Pipfile:", "```"},
			wantLang: "json",
		},
		{
			name:     "gemfile mention",
			content:  []string{"gem 'rails'"},
			context:  []string{"Create a Gemfile:", "```"},
			wantLang: "ruby",
		},
		{
			name:     "ts file mention",
			content:  []string{"interface Foo {}"},
			context:  []string{"Save as app.ts:", "```"},
			wantLang: "typescript",
		},
		{
			name:     "go file mention",
			content:  []string{"package main"},
			context:  []string{"Save as main.go:", "```"},
			wantLang: "go",
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
