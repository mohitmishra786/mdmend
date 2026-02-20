package config

import (
	"os"
	"path/filepath"

	"gopkg.in/yaml.v3"
)

func Load(path string) (*Config, error) {
	cfg := Default()

	if path == "" {
		for _, p := range []string{".mdmend.yml", ".mdmend.yaml", ".markdownlint.json"} {
			if _, err := os.Stat(p); err == nil {
				path = p
				break
			}
		}
	}

	if path == "" {
		return cfg, nil
	}

	data, err := os.ReadFile(path)
	if err != nil {
		if os.IsNotExist(err) {
			return cfg, nil
		}
		return nil, err
	}

	ext := filepath.Ext(path)
	if ext == ".json" {
		return loadJSON(data, cfg)
	}

	return loadYAML(data, cfg)
}

func loadYAML(data []byte, cfg *Config) (*Config, error) {
	if err := yaml.Unmarshal(data, cfg); err != nil {
		return nil, err
	}
	return cfg, nil
}

func loadJSON(data []byte, cfg *Config) (*Config, error) {
	return cfg, nil
}

func LoadIgnorePatterns(path string) ([]string, error) {
	patterns := []string{}

	ignoreFiles := []string{".mdmendignore", ".gitignore"}
	for _, f := range ignoreFiles {
		p := filepath.Join(path, f)
		data, err := os.ReadFile(p)
		if err != nil {
			continue
		}
		patterns = append(patterns, parseIgnoreFile(string(data))...)
	}

	return patterns, nil
}

func parseIgnoreFile(content string) []string {
	var patterns []string
	for _, line := range splitLines(content) {
		line = trimSpace(line)
		if line == "" || startsWith(line, "#") {
			continue
		}
		patterns = append(patterns, line)
	}
	return patterns
}

func splitLines(s string) []string {
	var lines []string
	start := 0
	for i := 0; i < len(s); i++ {
		if s[i] == '\n' {
			lines = append(lines, s[start:i])
			start = i + 1
		}
	}
	if start < len(s) {
		lines = append(lines, s[start:])
	}
	return lines
}

func trimSpace(s string) string {
	start := 0
	for start < len(s) && (s[start] == ' ' || s[start] == '\t' || s[start] == '\r') {
		start++
	}
	end := len(s)
	for end > start && (s[end-1] == ' ' || s[end-1] == '\t' || s[end-1] == '\r') {
		end--
	}
	return s[start:end]
}

func startsWith(s, prefix string) bool {
	if len(prefix) > len(s) {
		return false
	}
	return s[:len(prefix)] == prefix
}
