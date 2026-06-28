//go:build ignore

package main

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/mohitmishra786/mdmend/internal/config"
	"github.com/mohitmishra786/mdmend/internal/fixer"
)

func main() {
	root := filepath.Join("testdata")
	fixtures, err := filepath.Glob(filepath.Join(root, "fixtures", "*.md"))
	if err != nil {
		panic(err)
	}
	for _, fixture := range fixtures {
		name := filepath.Base(fixture)
		golden := filepath.Join(root, "golden", name)
		input, err := os.ReadFile(fixture)
		if err != nil {
			panic(err)
		}
		cfg := goldenConfig(name)
		result := fixer.ApplyFixes(string(input), name, cfg)
		if err := os.WriteFile(golden, []byte(result.Content), 0o644); err != nil {
			panic(err)
		}
		fmt.Println("regenerated", golden)
	}
}

func goldenConfig(name string) *config.Config {
	cfg := config.Default()
	cfg.Aggressive = true
	if strings.HasPrefix(name, "issue3") {
		return cfg
	}
	ruleID := strings.ToUpper(strings.SplitN(name, "_", 2)[0])
	cfg.Only = []string{ruleID}
	return cfg
}