// Package mdmend provides a Markdown linter and fixer library.
//
// Mdmend is a fast, zero-dependency Markdown linter that can automatically
// fix common linting issues. It implements many markdownlint rules and provides
// intelligent suggestions for code fence language detection (MD040) and
// bare URL wrapping (MD034).
//
// # Quick Start
//
// Basic usage with default configuration:
//
//	client := mdmend.NewClient()
//	result := client.LintString("# Hello World\n")
//	for _, v := range result.Violations {
//	    fmt.Printf("%s:%d:%d: %s\n", v.Rule, v.Line, v.Column, v.Message)
//	}
//
// # Configuration
//
// Use functional options to customize behavior:
//
//	client := mdmend.NewClient(
//	    mdmend.WithDisabledRules("MD013", "MD033"),
//	    mdmend.WithTabSize(2),
//	)
//
// Or use a config file:
//
//	client, err := mdmend.NewClient(mdmend.WithConfigFile(".mdmend.yml"))
//
// # Linting
//
// Lint markdown content:
//
//	result := client.LintString(content, "example.md")
//	fmt.Printf("Found %d violations\n", len(result.Violations))
//	fmt.Printf("Fixable: %d, Unfixable: %d\n", result.Fixable, result.Unfixable)
//
// # Fixing
//
// Fix markdown content:
//
//	result := client.FixString(content, "example.md")
//	if result.Changed {
//	    fmt.Println("Fixed:", result.Fixes, "issues")
//	    fmt.Println(result.Content)
//	}
//
// # File Operations
//
// Process files directly:
//
//	results, err := client.LintFiles([]string{"README.md", "docs/"})
//	for _, r := range results {
//	    if r.Error != nil {
//	        log.Printf("Error: %v", r.Error)
//	        continue
//	    }
//	    fmt.Printf("%s: %d violations\n", r.Path, len(r.Violations))
//	}
//
// # Custom Rules
//
// Register custom rules:
//
//	mdmend.RegisterRule(&MyCustomRule{})
package mdmend
