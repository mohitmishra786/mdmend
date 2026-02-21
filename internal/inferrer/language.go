package inferrer

import (
	"regexp"
	"strings"
)

type InferResult struct {
	Language   string
	Confidence float64
	Source     string
}

type patternMatcher struct {
	lang    string
	pattern *regexp.Regexp
}

var patterns = []patternMatcher{
	{"json", regexp.MustCompile(`(?m)^\s*[\[{]`)},
	{"yaml", regexp.MustCompile(`(?m)^[\w-]+:\s`)},
	{"bash", regexp.MustCompile(`(?m)^\$\s|^(apt|brew|npm|pip|git|curl|wget|echo|export|source)\s`)},
	{"sql", regexp.MustCompile(`(?mi)^(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER)\s`)},
	{"dockerfile", regexp.MustCompile(`(?m)^(FROM|RUN|CMD|EXPOSE|ENV|ADD|COPY|ENTRYPOINT|WORKDIR)\s`)},
	{"toml", regexp.MustCompile(`(?m)^\[[\w.]+\]`)},
	{"xml", regexp.MustCompile(`(?m)^<\?xml|^<[\w:]+[\s>]`)},
	{"html", regexp.MustCompile(`(?mi)^<!DOCTYPE|^<html`)},
	{"java", regexp.MustCompile(`(?m)^package\s+[\w.]+;|^(import java\.|import javax\.|public class|private class|public interface)`)},
	{"go", regexp.MustCompile(`(?m)^package\s+\w+\s*$|^func\s|^import\s`)},
	{"python", regexp.MustCompile(`(?m)^(import |from \w+ import|def |class |if __name__)`)},
	{"javascript", regexp.MustCompile(`(?m)^(const |let |var |function |import |export |module\.exports)`)},
	{"typescript", regexp.MustCompile(`(?m)^(interface |type |enum |const .+:\s*\w+)`)},
	{"rust", regexp.MustCompile(`(?m)^(fn |use |mod |impl |struct |enum |pub )`)},
	{"css", regexp.MustCompile(`(?m)^\.[a-zA-Z][\w-]*\s*\{|^#[a-zA-Z][\w-]*\s*\{`)},
	{"diff", regexp.MustCompile(`(?m)^(\+\+\+|---|@@\s)`)},
	{"ini", regexp.MustCompile(`(?m)^\[[A-Za-z\s]+\]\s*$`)},
	{"makefile", regexp.MustCompile(`(?m)^[a-zA-Z_-]+:|^\.PHONY`)},
	{"sh", regexp.MustCompile(`(?m)^#!/.*/(bash|sh|zsh)`)},
	{"ruby", regexp.MustCompile(`(?m)^(require|class|def |module |end$)`)},
	{"c", regexp.MustCompile(`(?m)^(#include|#define|int |void |char )`)},
	{"cpp", regexp.MustCompile(`(?m)^(#include|#include <iostream>|using namespace|std::)`)},
}

var headingContextPatterns = map[string][]string{
	"dockerfile": {"docker", "dockerfile", "docker compose", "container"},
	"json":       {"json", "api response", "response", "config"},
	"yaml":       {"yaml", "yml", "kubernetes", "k8s", "helm"},
	"bash":       {"shell", "bash", "terminal", "command line", "cli"},
	"sql":        {"sql", "query", "database", "postgres", "mysql"},
	"python":     {"python", "py"},
	"javascript": {"javascript", "js", "node", "nodejs"},
	"typescript": {"typescript", "ts"},
	"go":         {"go", "golang"},
	"rust":       {"rust", "cargo"},
	"ruby":       {"ruby", "rb", "rails"},
	"makefile":   {"makefile", "make"},
}

var fileExtensionPatterns = map[string]string{
	".yml":       "yaml",
	".yaml":      "yaml",
	".json":      "json",
	".toml":      "toml",
	".xml":       "xml",
	".html":      "html",
	".css":       "css",
	".sql":       "sql",
	".sh":        "bash",
	".bash":      "bash",
	".zsh":       "bash",
	".py":        "python",
	".js":        "javascript",
	".ts":        "typescript",
	".go":        "go",
	".rs":        "rust",
	".rb":        "ruby",
	".java":      "java",
	".c":         "c",
	".cpp":       "cpp",
	".h":         "c",
	".hpp":       "cpp",
	"dockerfile": "dockerfile",
	"makefile":   "makefile",
}

func InferLanguage(content []string, context []string) InferResult {
	if len(content) == 0 {
		return InferResult{Language: "", Confidence: 0, Source: "empty"}
	}

	if result := inferFromShebang(content); result.Confidence > 0 {
		return result
	}

	if result := inferFromContent(content); result.Confidence > 0 {
		return result
	}

	if result := inferFromContext(context); result.Confidence > 0 {
		return result
	}

	if result := inferFromFileMention(context); result.Confidence > 0 {
		return result
	}

	return InferResult{Language: "", Confidence: 0, Source: "fallback"}
}

func inferFromShebang(content []string) InferResult {
	if len(content) == 0 {
		return InferResult{}
	}

	firstLine := strings.TrimSpace(content[0])
	if !strings.HasPrefix(firstLine, "#!") {
		return InferResult{}
	}

	shebang := strings.ToLower(firstLine[2:])

	switch {
	case strings.Contains(shebang, "/bash") || strings.Contains(shebang, "/sh"):
		return InferResult{Language: "bash", Confidence: 0.95, Source: "shebang:bash"}
	case strings.Contains(shebang, "/python"):
		return InferResult{Language: "python", Confidence: 0.95, Source: "shebang:python"}
	case strings.Contains(shebang, "/node"):
		return InferResult{Language: "javascript", Confidence: 0.95, Source: "shebang:node"}
	case strings.Contains(shebang, "/ruby"):
		return InferResult{Language: "ruby", Confidence: 0.95, Source: "shebang:ruby"}
	case strings.Contains(shebang, "/perl"):
		return InferResult{Language: "perl", Confidence: 0.95, Source: "shebang:perl"}
	}

	return InferResult{}
}

func inferFromContent(content []string) InferResult {
	contentStr := strings.Join(content, "\n")

	matchCounts := make(map[string]int)
	for _, pm := range patterns {
		matches := pm.pattern.FindAllString(contentStr, -1)
		if len(matches) > 0 {
			matchCounts[pm.lang] = len(matches)
		}
	}

	if len(matchCounts) == 0 {
		return InferResult{}
	}

	maxLang := ""
	maxCount := 0
	for lang, count := range matchCounts {
		if count > maxCount {
			maxLang = lang
			maxCount = count
		}
	}

	if maxLang != "" {
		confidence := 0.7
		if maxCount >= 3 {
			confidence = 0.9
		} else if maxCount >= 2 {
			confidence = 0.8
		}
		return InferResult{Language: maxLang, Confidence: confidence, Source: "pattern:" + maxLang}
	}

	return InferResult{}
}

func inferFromContext(context []string) InferResult {
	contextLower := strings.ToLower(strings.Join(context, " "))

	for lang, keywords := range headingContextPatterns {
		for _, keyword := range keywords {
			if strings.Contains(contextLower, keyword) {
				return InferResult{Language: lang, Confidence: 0.75, Source: "heading:" + keyword}
			}
		}
	}

	return InferResult{}
}

func inferFromFileMention(context []string) InferResult {
	contextLower := strings.ToLower(strings.Join(context, " "))

	for ext, lang := range fileExtensionPatterns {
		if strings.Contains(contextLower, ext) {
			return InferResult{Language: lang, Confidence: 0.8, Source: "extension:" + ext}
		}
	}

	for name, lang := range map[string]string{
		"dockerfile": "dockerfile",
		"makefile":   "makefile",
		"pipfile":    "toml",
		"gemfile":    "ruby",
	} {
		if strings.Contains(contextLower, name) {
			return InferResult{Language: lang, Confidence: 0.8, Source: "filename:" + name}
		}
	}

	return InferResult{}
}
