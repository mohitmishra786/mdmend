package cache

import (
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"os"
	"path/filepath"
	"sync"
	"time"
)

type Entry struct {
	Hash        string    `json:"hash"`
	UpdatedAt   time.Time `json:"updated_at"`
	Violations  int       `json:"violations"`
	FilesIssues int       `json:"files_with_issues,omitempty"`
}

type Cache struct {
	path    string
	entries map[string]Entry
	mu      sync.Mutex
	dirty   bool
}

func DefaultPath() (string, error) {
	dir, err := os.UserCacheDir()
	if err != nil {
		return "", err
	}
	return filepath.Join(dir, "mdmend", "cache.json"), nil
}

func Load(path string) (*Cache, error) {
	if path == "" {
		var err error
		path, err = DefaultPath()
		if err != nil {
			return nil, err
		}
	}

	cache := &Cache{
		path:    path,
		entries: make(map[string]Entry),
	}

	data, err := os.ReadFile(path)
	if err != nil {
		if os.IsNotExist(err) {
			return cache, nil
		}
		return nil, err
	}

	if err := json.Unmarshal(data, &cache.entries); err != nil {
		return nil, err
	}

	return cache, nil
}

func (c *Cache) Path() string {
	return c.path
}

func HashContent(content []byte) string {
	sum := sha256.Sum256(content)
	return hex.EncodeToString(sum[:])
}

func (c *Cache) Get(path string) (Entry, bool) {
	c.mu.Lock()
	defer c.mu.Unlock()
	entry, ok := c.entries[path]
	return entry, ok
}

func (c *Cache) IsFresh(path string, content []byte) bool {
	entry, ok := c.Get(path)
	if !ok {
		return false
	}
	return entry.Hash == HashContent(content)
}

func (c *Cache) Update(path string, content []byte, violations int) error {
	c.mu.Lock()
	defer c.mu.Unlock()

	c.entries[path] = Entry{
		Hash:       HashContent(content),
		UpdatedAt:  time.Now().UTC(),
		Violations: violations,
	}
	c.dirty = true
	return nil
}

func (c *Cache) Violations(path string) (int, bool) {
	entry, ok := c.Get(path)
	if !ok {
		return 0, false
	}
	return entry.Violations, true
}

func (c *Cache) Save() error {
	c.mu.Lock()
	defer c.mu.Unlock()
	return c.saveLocked()
}

func (c *Cache) saveLocked() error {
	if !c.dirty {
		return nil
	}

	if err := os.MkdirAll(filepath.Dir(c.path), 0o755); err != nil {
		return err
	}

	data, err := json.MarshalIndent(c.entries, "", "  ")
	if err != nil {
		return err
	}

	if err := os.WriteFile(c.path, data, 0o644); err != nil {
		return err
	}

	c.dirty = false
	return nil
}

func (c *Cache) Clear() error {
	c.mu.Lock()
	defer c.mu.Unlock()

	c.entries = make(map[string]Entry)
	c.dirty = false

	if err := os.Remove(c.path); err != nil && !os.IsNotExist(err) {
		return err
	}

	return nil
}