# Benchmarks

Performance comparisons between **mdmend** and other Markdown linters across multiple corpora.

## Methodology

| Setting | Value |
|---------|-------|
| Timer | [hyperfine](https://github.com/sharkdp/hyperfine) (fallback: single wall-clock run) |
| Warmup | 2 iterations (override with `BENCH_WARMUP`) |
| Runs | 5 iterations (override with `BENCH_RUNS`) |
| Platform | Documented per run in `docs/benchmarks/results.txt` |

### Corpora

| Corpus | Path | Purpose |
|--------|------|---------|
| **small** | `testdata/corpus/` | Smoke corpus (few files, realistic docs) |
| **medium** | `testdata/` | Fixtures + golden files + corpus |
| **stress** | `testdata/benchmark/stress/` | 200 generated files (~500 lines each) |
| **repo** | Repository root | Full self-lint (optional, local only) |

Generate or refresh the stress corpus:

```bash
./scripts/generate_stress_corpus.sh 200 500
```

### Competitors

| Tool | Command | Install |
|------|---------|---------|
| **mdmend** | `mdmend lint` / `mdmend fix --dry-run` | `go build ./cmd/mdmend` |
| **markdownlint-cli2** | `npx markdownlint-cli2 **/*.md` | Node.js + npx |
| **rumdl** | `rumdl check` | `cargo install rumdl` |
| **pymarkdown** | `pymarkdown scan` | `pip install pymarkdownlnt` |

## Running locally

```bash
# Full suite (builds binary, generates stress corpus if missing)
make benchmark

# Or directly:
BENCH_RUNS=10 BENCH_WARMUP=3 ./scripts/benchmark.sh
```

Results are written to:

- `docs/benchmarks/results.txt` — human-readable log
- `docs/benchmarks/summary.json` — aggregated JSON (when hyperfine is available)
- `docs/benchmarks/<corpus>.json` — per-corpus hyperfine exports

## Interpreting results

- **Lint-only** comparisons (`mdmend lint`, `markdownlint-cli2`, `rumdl check`, `pymarkdown scan`) measure rule-check throughput.
- **Fix dry-run** (`mdmend fix --dry-run`) measures fix-pipeline throughput without disk writes.
- Competitors implement different rule sets; raw timings compare *throughput*, not identical work.
- Stress corpus emphasizes tables, code fences, lists, footnotes, and TOC markers to pressure parsers and rule scanners.

## CI (multi-platform)

The [Benchmark workflow](../.github/workflows/benchmark.yml) runs **weekly** (Monday 03:00 UTC) and on `workflow_dispatch` across:

| Runner | Label |
|--------|-------|
| `ubuntu-24.04` | `linux-x64` |
| `ubuntu-24.04-arm` | `linux-arm64` |
| `ubuntu-22.04` | `linux-22.04-x64` |
| `windows-latest` | `windows-x64` |
| `macos-latest` | `macos-arm64` |

Results are:

- **Artifacts** — per-runner JSON (90-day retention)
- **History** — committed to `docs/benchmarks/history/<date>/` on the default branch
- **Charts** — published to GitHub Pages (`gh-pages` branch) at `https://mohitmishra786.github.io/mdmend/dev/bench/` (filter by platform and corpus). Enable Pages → **Deploy from branch** → `gh-pages` / `/ (root)`

Enable Pages once the first benchmark workflow creates the `gh-pages` branch.

## Latest results

**Stress corpus** (200 files, ~1.38 MB, Apple Silicon macOS, 2026-06-28):

| Tool | Mean time | vs mdmend lint |
|------|-----------|----------------|
| **mdmend lint** | **6.7 ms** | 1.0× |
| rumdl check | 25.1 ms | 3.7× slower |
| mdmend fix --dry-run | 317.1 ms | 47× slower |
| markdownlint-cli2 | 1.45 s | 215× slower |
| pymarkdown scan | 10.8 s | 1,602× slower |

**Medium corpus** (237 files, ~1.38 MB):

| Tool | Mean time |
|------|-----------|
| mdmend lint | 7.6 ms |
| mdmend fix --dry-run | 377 ms |
| markdownlint-cli2 | 623 ms |

Raw logs: `docs/benchmarks/results.txt` (generated locally; gitignored). Reproduce with `make benchmark`.