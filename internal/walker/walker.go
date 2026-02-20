package walker

import (
	"os"
	"path/filepath"
	"strings"

	"github.com/bmatcuk/doublestar/v4"
)

type Walker struct {
	patterns []string
	ignores  []string
}

func New(ignores []string) *Walker {
	return &Walker{
		patterns: []string{},
		ignores:  ignores,
	}
}

func (w *Walker) Walk(paths []string) ([]string, error) {
	var files []string
	seen := make(map[string]bool)

	for _, path := range paths {
		matches, err := w.expandPath(path)
		if err != nil {
			return nil, err
		}
		for _, m := range matches {
			if !seen[m] {
				seen[m] = true
				files = append(files, m)
			}
		}
	}

	return files, nil
}

func (w *Walker) expandPath(path string) ([]string, error) {
	var files []string

	if strings.Contains(path, "*") {
		base, pattern := splitGlob(path)
		globMatches, err := doublestar.FilepathGlob(filepath.Join(base, pattern))
		if err != nil {
			return nil, err
		}
		for _, m := range globMatches {
			if w.shouldInclude(m) {
				files = append(files, m)
			}
		}
		return files, nil
	}

	info, err := os.Stat(path)
	if err != nil {
		return nil, err
	}

	if !info.IsDir() {
		if w.shouldInclude(path) {
			return []string{path}, nil
		}
		return []string{}, nil
	}

	err = filepath.Walk(path, func(p string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if !info.IsDir() && w.shouldInclude(p) {
			files = append(files, p)
		}
		return nil
	})

	return files, err
}

func (w *Walker) shouldInclude(path string) bool {
	if !strings.HasSuffix(strings.ToLower(path), ".md") {
		return false
	}

	for _, ignore := range w.ignores {
		matched, _ := doublestar.Match(ignore, path)
		if matched {
			return false
		}
		matched, _ = doublestar.Match(ignore, filepath.Base(path))
		if matched {
			return false
		}
	}

	return true
}

func splitGlob(path string) (string, string) {
	parts := strings.Split(path, string(filepath.Separator))
	base := ""
	pattern := ""

	for i, part := range parts {
		if strings.Contains(part, "*") {
			pattern = strings.Join(parts[i:], string(filepath.Separator))
			break
		}
		if base == "" {
			base = part
		} else {
			base = base + string(filepath.Separator) + part
		}
	}

	if base == "" {
		base = "."
	}

	return base, pattern
}
