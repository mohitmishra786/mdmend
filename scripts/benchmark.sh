#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
mkdir -p docs/benchmarks

BIN="${ROOT}/mdmend"
if [[ ! -x "$BIN" ]]; then
  go build -o "$BIN" ./cmd/mdmend
fi

CORPUS="${ROOT}/testdata/corpus"
if [[ ! -d "$CORPUS" ]]; then
  CORPUS="${ROOT}"
fi

RESULTS="${ROOT}/docs/benchmarks/results.txt"
{
  echo "mdmend benchmark $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo "corpus: $CORPUS"
  echo
} >"$RESULTS"

if command -v hyperfine >/dev/null 2>&1; then
  hyperfine --warmup 1 --runs 5 \
    --export-json "${ROOT}/docs/benchmarks/mdmend.json" \
    "$BIN lint $CORPUS --quiet" \
    "$BIN fix $CORPUS --dry-run --quiet" \
    2>&1 | tee -a "$RESULTS"
else
  echo "hyperfine not installed; using shell timing" | tee -a "$RESULTS"
  START=$(date +%s%N)
  "$BIN" lint "$CORPUS" --quiet || true
  END=$(date +%s%N)
  echo "lint: $(( (END - START) / 1000000 )) ms" | tee -a "$RESULTS"
  START=$(date +%s%N)
  "$BIN" fix "$CORPUS" --dry-run --quiet || true
  END=$(date +%s%N)
  echo "fix dry-run: $(( (END - START) / 1000000 )) ms" | tee -a "$RESULTS"
fi

if command -v npx >/dev/null 2>&1; then
  echo | tee -a "$RESULTS"
  echo "Comparing with markdownlint-cli2 (if available):" | tee -a "$RESULTS"
  hyperfine --warmup 1 --runs 3 \
    "$BIN lint $CORPUS --quiet" \
    "npx --yes markdownlint-cli2 $CORPUS/**/*.md" \
    2>&1 | tee -a "$RESULTS" || true
fi