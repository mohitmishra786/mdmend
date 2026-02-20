package worker

import (
	"sync/atomic"
	"testing"
)

func TestNewPool(t *testing.T) {
	p := NewPool(4)
	if p == nil {
		t.Fatal("NewPool() returned nil")
	}
}

func TestNewPoolZero(t *testing.T) {
	p := NewPool(0)
	if p == nil {
		t.Fatal("NewPool(0) should not return nil")
	}
}

func TestPoolRun(t *testing.T) {
	p := NewPool(2)

	jobs := []Job{
		{Path: "file1.md", Content: "content1"},
		{Path: "file2.md", Content: "content2"},
		{Path: "file3.md", Content: "content3"},
	}

	var processed int32
	fn := func(j Job) Result {
		atomic.AddInt32(&processed, 1)
		return Result{Path: j.Path, Changed: false}
	}

	results := p.Run(jobs, fn)

	if int(processed) != 3 {
		t.Errorf("Processed %d jobs, want 3", processed)
	}

	if len(results) != 3 {
		t.Errorf("Got %d results, want 3", len(results))
	}
}

func TestPoolRunEmpty(t *testing.T) {
	p := NewPool(2)

	fn := func(j Job) Result {
		return Result{Path: j.Path}
	}

	results := p.Run([]Job{}, fn)

	if len(results) != 0 {
		t.Errorf("Got %d results for empty jobs, want 0", len(results))
	}
}

func TestPoolRunSingle(t *testing.T) {
	p := NewPool(4)

	jobs := []Job{
		{Path: "single.md", Content: "content"},
	}

	fn := func(j Job) Result {
		return Result{Path: j.Path, Changed: true}
	}

	results := p.Run(jobs, fn)

	if len(results) != 1 {
		t.Errorf("Got %d results, want 1", len(results))
	}

	if results[0].Path != "single.md" {
		t.Errorf("Path = %q, want single.md", results[0].Path)
	}
}

func TestPoolResultsSorted(t *testing.T) {
	p := NewPool(4)

	jobs := []Job{
		{Path: "c.md"},
		{Path: "a.md"},
		{Path: "b.md"},
	}

	fn := func(j Job) Result {
		return Result{Path: j.Path}
	}

	results := p.Run(jobs, fn)

	if results[0].Path != "a.md" {
		t.Errorf("First result = %q, want a.md", results[0].Path)
	}
	if results[1].Path != "b.md" {
		t.Errorf("Second result = %q, want b.md", results[1].Path)
	}
	if results[2].Path != "c.md" {
		t.Errorf("Third result = %q, want c.md", results[2].Path)
	}
}

func TestRunParallel(t *testing.T) {
	paths := []string{"a.md", "b.md", "c.md"}

	var processed int32
	fn := func(path string) Result {
		atomic.AddInt32(&processed, 1)
		return Result{Path: path}
	}

	results := RunParallel(paths, 2, fn)

	if int(processed) != 3 {
		t.Errorf("Processed %d paths, want 3", processed)
	}

	if len(results) != 3 {
		t.Errorf("Got %d results, want 3", len(results))
	}
}

func TestRunParallelEmpty(t *testing.T) {
	fn := func(path string) Result {
		return Result{Path: path}
	}

	results := RunParallel([]string{}, 2, fn)

	if len(results) != 0 {
		t.Errorf("Got %d results for empty paths, want 0", len(results))
	}
}

func TestRunParallelZeroWorkers(t *testing.T) {
	paths := []string{"a.md"}

	fn := func(path string) Result {
		return Result{Path: path}
	}

	results := RunParallel(paths, 0, fn)

	if len(results) != 1 {
		t.Errorf("Got %d results, want 1", len(results))
	}
}
