package fixer

import (
	"os"
	"path/filepath"
)

type Patcher struct {
	path string
}

func NewPatcher(path string) *Patcher {
	return &Patcher{path: path}
}

func (p *Patcher) Apply(content string) error {
	dir := filepath.Dir(p.path)
	if dir != "" {
		if err := os.MkdirAll(dir, 0755); err != nil {
			return err
		}
	}

	tmpPath := p.path + ".tmp"
	if err := os.WriteFile(tmpPath, []byte(content), 0644); err != nil {
		return err
	}

	if err := os.Rename(tmpPath, p.path); err != nil {
		_ = os.Remove(tmpPath)
		return err
	}

	return nil
}

func AtomicWrite(path string, content []byte) error {
	patcher := NewPatcher(path)
	return patcher.Apply(string(content))
}
