package worker

import (
	"sort"
	"sync"
)

type Job struct {
	Path    string
	Content string
}

type Result struct {
	Path       string
	Content    string
	Fixed      string
	Violations int
	Changed    bool
	Error      error
}

type Pool struct {
	numWorkers int
}

func NewPool(numWorkers int) *Pool {
	if numWorkers < 1 {
		numWorkers = 1
	}
	return &Pool{numWorkers: numWorkers}
}

func (p *Pool) Run(jobs []Job, fn func(Job) Result) []Result {
	if len(jobs) == 0 {
		return nil
	}

	if len(jobs) < p.numWorkers {
		p.numWorkers = len(jobs)
	}

	jobsChan := make(chan Job, len(jobs))
	resultsChan := make(chan Result, len(jobs))

	var wg sync.WaitGroup

	for i := 0; i < p.numWorkers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for job := range jobsChan {
				resultsChan <- fn(job)
			}
		}()
	}

	for _, job := range jobs {
		jobsChan <- job
	}
	close(jobsChan)

	go func() {
		wg.Wait()
		close(resultsChan)
	}()

	results := make([]Result, 0, len(jobs))
	for result := range resultsChan {
		results = append(results, result)
	}

	sort.Slice(results, func(i, j int) bool {
		return results[i].Path < results[j].Path
	})

	return results
}

func RunParallel(paths []string, numWorkers int, fn func(string) Result) []Result {
	if numWorkers < 1 {
		numWorkers = 1
	}

	if len(paths) < numWorkers {
		numWorkers = len(paths)
	}

	jobsChan := make(chan string, len(paths))
	resultsChan := make(chan Result, len(paths))

	var wg sync.WaitGroup

	for i := 0; i < numWorkers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for path := range jobsChan {
				resultsChan <- fn(path)
			}
		}()
	}

	for _, path := range paths {
		jobsChan <- path
	}
	close(jobsChan)

	go func() {
		wg.Wait()
		close(resultsChan)
	}()

	results := make([]Result, 0, len(paths))
	for result := range resultsChan {
		results = append(results, result)
	}

	sort.Slice(results, func(i, j int) bool {
		return results[i].Path < results[j].Path
	})

	return results
}
