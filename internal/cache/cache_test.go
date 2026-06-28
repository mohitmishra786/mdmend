package cache

import (
	"os"
	"path/filepath"
	"testing"
)

func TestCacheRoundTrip(t *testing.T) {
	dir := t.TempDir()
	path := filepath.Join(dir, "cache.json")

	c, err := Load(path)
	if err != nil {
		t.Fatalf("Load() error = %v", err)
	}

	content := []byte("# Title\n")
	if err := c.Update("test.md", content, 2); err != nil {
		t.Fatalf("Update() error = %v", err)
	}
	if err := c.Save(); err != nil {
		t.Fatalf("Save() error = %v", err)
	}

	reloaded, err := Load(path)
	if err != nil {
		t.Fatalf("reload error = %v", err)
	}

	if !reloaded.IsFresh("test.md", content) {
		t.Error("IsFresh() should return true for unchanged content")
	}

	count, ok := reloaded.Violations("test.md")
	if !ok || count != 2 {
		t.Errorf("Violations() = (%d, %v), want (2, true)", count, ok)
	}
}

func TestCacheClear(t *testing.T) {
	dir := t.TempDir()
	path := filepath.Join(dir, "cache.json")

	c, err := Load(path)
	if err != nil {
		t.Fatal(err)
	}

	if err := c.Update("test.md", []byte("content"), 1); err != nil {
		t.Fatal(err)
	}
	if err := c.Save(); err != nil {
		t.Fatal(err)
	}

	if err := c.Clear(); err != nil {
		t.Fatalf("Clear() error = %v", err)
	}

	if _, err := os.Stat(path); err == nil {
		t.Error("cache file should be removed after clear")
	}
}

func TestHashContent(t *testing.T) {
	a := HashContent([]byte("hello"))
	b := HashContent([]byte("hello"))
	c := HashContent([]byte("world"))

	if a != b {
		t.Error("hash should be stable for same content")
	}
	if a == c {
		t.Error("hash should differ for different content")
	}
}
