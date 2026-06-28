package main

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/fsnotify/fsnotify"
	"github.com/mohitmishra786/mdmend/internal/cache"
	"github.com/mohitmishra786/mdmend/internal/config"
	"github.com/mohitmishra786/mdmend/internal/linter"
	"github.com/mohitmishra786/mdmend/internal/reporter"
	"github.com/mohitmishra786/mdmend/internal/walker"
)

func runLintWatch(args []string, opts *lintOptions) error {
	if len(args) == 0 {
		args = []string{"."}
	}

	cfg, err := loadConfig(opts.globalOptions)
	if err != nil {
		return err
	}

	ignore := append(cfg.Ignore, opts.ignore...)
	w := walker.New(ignore)

	files, err := w.Walk(args)
	if err != nil {
		return err
	}

	var lintCache *cache.Cache
	if !opts.noCache {
		lintCache, err = cache.Load("")
		if err != nil {
			return err
		}
	}

	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		return err
	}
	defer watcher.Close()

	watchedDirs := make(map[string]struct{})
	for _, file := range files {
		dir := filepath.Dir(file)
		if _, ok := watchedDirs[dir]; ok {
			continue
		}
		if err := watcher.Add(dir); err == nil {
			watchedDirs[dir] = struct{}{}
		}
	}

	fmt.Printf("Watching %d director(ies) — press Ctrl+C to stop\n", len(watchedDirs))

	lintAll := func(targets []string) error {
		for _, path := range targets {
			content, err := os.ReadFile(path)
			if err != nil {
				fmt.Fprintf(os.Stderr, "Error reading %s: %v\n", path, err)
				continue
			}

			if lintCache != nil && lintCache.IsFresh(path, content) {
				continue
			}

			fileCfg := config.ApplyFlavor(cfg, path)
			l := linter.New(fileCfg)
			result := l.Lint(string(content), path)
			filtered := applyOnlyFilter(result.Violations, opts.only)

			if lintCache != nil {
				_ = lintCache.Update(path, content, len(filtered))
			}

			if len(filtered) > 0 && !opts.quiet {
				cr := reporter.NewConsoleReporter(opts.noColor)
				if err := cr.Report(path, filtered); err != nil {
					fmt.Fprintf(os.Stderr, "Error reporting %s: %v\n", path, err)
				}
			}
		}

		if lintCache != nil {
			return lintCache.Save()
		}
		return nil
	}

	if err := lintAll(files); err != nil {
		return err
	}

	for {
		select {
		case event, ok := <-watcher.Events:
			if !ok {
				return nil
			}
			if event.Op&(fsnotify.Write|fsnotify.Create) == 0 {
				continue
			}
			if !strings.HasSuffix(strings.ToLower(event.Name), ".md") &&
				!strings.HasSuffix(strings.ToLower(event.Name), ".mdx") &&
				!strings.HasSuffix(strings.ToLower(event.Name), ".markdown") {
				continue
			}
			time.Sleep(100 * time.Millisecond)
			if err := lintAll([]string{event.Name}); err != nil {
				return err
			}
		case err, ok := <-watcher.Errors:
			if !ok {
				return nil
			}
			fmt.Fprintf(os.Stderr, "watch error: %v\n", err)
		}
	}
}