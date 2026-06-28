#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

BENCH_DIR="${ROOT}/docs/benchmarks"
mkdir -p "$BENCH_DIR"

WARMUP="${BENCH_WARMUP:-2}"
RUNS="${BENCH_RUNS:-5}"
TIMESTAMP="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
RESULTS="${BENCH_DIR}/results.txt"
SUMMARY="${BENCH_DIR}/summary.json"

BIN="${ROOT}/mdmend"
if [[ ! -x "$BIN" && -x "${BIN}.exe" ]]; then
  BIN="${BIN}.exe"
fi
if [[ ! -x "$BIN" ]]; then
  echo "Building mdmend..."
  go build -o "${ROOT}/mdmend" ./cmd/mdmend
  if [[ -x "${ROOT}/mdmend.exe" ]]; then
    BIN="${ROOT}/mdmend.exe"
  else
    BIN="${ROOT}/mdmend"
  fi
fi

BENCH_LABEL="${BENCH_LABEL:-local}"
META="${BENCH_DIR}/meta.json"
python3 - <<'PY' "$META" "$BENCH_LABEL" "$TIMESTAMP" "$WARMUP" "$RUNS"
import json, os, platform, subprocess, sys

meta_path, label, ts, warmup, runs = sys.argv[1:6]

def run(cmd):
    try:
        return subprocess.check_output(cmd, shell=True, text=True, stderr=subprocess.DEVNULL).strip()
    except Exception:
        return ""

cpu = ""
if platform.system() == "Darwin":
    cpu = run("sysctl -n machdep.cpu.brand_string")
elif platform.system() == "Linux":
    cpu = run("grep -m1 'model name' /proc/cpuinfo | cut -d: -f2")

payload = {
    "label": label,
    "timestamp": ts,
    "warmup": int(warmup),
    "runs": int(runs),
    "os": platform.system(),
    "arch": platform.machine(),
    "python": platform.python_version(),
    "cpu": cpu.strip(),
    "go": run("go version"),
    "node": run("node --version"),
    "hyperfine": run("hyperfine --version"),
}
with open(meta_path, "w", encoding="utf-8") as fh:
    json.dump(payload, fh, indent=2)
PY

if [[ ! -d "${ROOT}/testdata/benchmark/stress" ]]; then
  echo "Generating stress corpus..."
  bash "${ROOT}/scripts/generate_stress_corpus.sh" 200 500
fi

CORPUS_NAMES=(small medium stress)
CORPUS_PATHS=(
  "${ROOT}/testdata/corpus"
  "${ROOT}/testdata"
  "${ROOT}/testdata/benchmark/stress"
)

count_corpus_files() {
  local dir="$1"
  find "$dir" -type f \( -name '*.md' -o -name '*.mdx' -o -name '*.markdown' \) \
    ! -path '*/node_modules/*' \
    ! -path '*/vendor/*' \
    ! -path '*/.git/*' \
    ! -path '*/dist/*' \
    2>/dev/null | wc -l | tr -d ' '
}

count_corpus_bytes() {
  local dir="$1"
  find "$dir" -type f \( -name '*.md' -o -name '*.mdx' -o -name '*.markdown' \) \
    ! -path '*/node_modules/*' \
    ! -path '*/vendor/*' \
    ! -path '*/.git/*' \
    ! -path '*/dist/*' \
    -print0 2>/dev/null | xargs -0 wc -c 2>/dev/null | tail -1 | awk '{print $1}'
}

write_header() {
  {
    echo "mdmend benchmark ${TIMESTAMP}"
    echo "warmup=${WARMUP} runs=${RUNS}"
    echo "host: $(uname -srmo 2>/dev/null || uname -a)"
    echo "cpu: $(sysctl -n machdep.cpu.brand_string 2>/dev/null || grep -m1 'model name' /proc/cpuinfo 2>/dev/null || echo unknown)"
    echo "go: $(go version 2>/dev/null || echo unknown)"
    echo
  } >"$RESULTS"
}

bench_with_hyperfine() {
  local name="$1"
  shift
  local export="${BENCH_DIR}/${name}.json"
  hyperfine --warmup "$WARMUP" --runs "$RUNS" \
    --ignore-failure \
    --export-json "$export" \
    "$@" 2>&1 | tee -a "$RESULTS"
}

bench_with_time() {
  local label="$1"
  shift
  local start end elapsed_ms
  start=$(python3 -c 'import time; print(int(time.time()*1000))')
  "$@" >/dev/null 2>&1 || true
  end=$(python3 -c 'import time; print(int(time.time()*1000))')
  elapsed_ms=$((end - start))
  echo "${label}: ${elapsed_ms} ms (single run)" | tee -a "$RESULTS"
}

discover_tools() {
  TOOLS=()
  TOOL_LABELS=()

  TOOLS+=("mdmend-lint")
  TOOL_LABELS+=("mdmend lint")

  TOOLS+=("mdmend-fix-dry")
  TOOL_LABELS+=("mdmend fix --dry-run")

  if command -v npx >/dev/null 2>&1; then
    TOOLS+=("markdownlint-cli2")
    TOOL_LABELS+=("markdownlint-cli2")
  fi

  if command -v rumdl >/dev/null 2>&1; then
    TOOLS+=("rumdl")
    TOOL_LABELS+=("rumdl check")
  elif command -v cargo >/dev/null 2>&1 && cargo install --list 2>/dev/null | grep -q '^rumdl '; then
    TOOLS+=("rumdl")
    TOOL_LABELS+=("rumdl check")
  fi

  if command -v pymarkdown >/dev/null 2>&1; then
    TOOLS+=("pymarkdown")
    TOOL_LABELS+=("pymarkdown scan")
  elif python3 -m pymarkdown --version >/dev/null 2>&1; then
    TOOLS+=("pymarkdown")
    TOOL_LABELS+=("python3 -m pymarkdown scan")
  fi
}

run_corpus_benchmark() {
  local corpus_name="$1"
  local corpus_path="$2"
  local files bytes

  if [[ ! -d "$corpus_path" ]]; then
    echo "Skipping missing corpus: ${corpus_name}" | tee -a "$RESULTS"
    return
  fi

  files=$(count_corpus_files "$corpus_path")
  bytes=$(count_corpus_bytes "$corpus_path")

  {
    echo "================================================================"
    echo "Corpus: ${corpus_name}"
    echo "Path: ${corpus_path}"
    echo "Files: ${files}"
    echo "Bytes: ${bytes}"
    echo "================================================================"
  } | tee -a "$RESULTS"

  local -a commands=()
  local -a labels=()

  commands+=("${BIN} lint ${corpus_path} --quiet --exit-zero")
  labels+=("mdmend lint")

  commands+=("${BIN} fix ${corpus_path} --dry-run --quiet --exit-zero")
  labels+=("mdmend fix --dry-run")

  if command -v npx >/dev/null 2>&1; then
    commands+=("npx --yes markdownlint-cli2 ${corpus_path}/**/*.md")
    labels+=("markdownlint-cli2")
  fi

  if command -v rumdl >/dev/null 2>&1; then
    commands+=("rumdl check ${corpus_path}")
    labels+=("rumdl check")
  fi

  if command -v pymarkdown >/dev/null 2>&1; then
    commands+=("pymarkdown scan ${corpus_path}")
    labels+=("pymarkdown scan")
  elif python3 -m pymarkdown --version >/dev/null 2>&1; then
    commands+=("python3 -m pymarkdown scan ${corpus_path}")
    labels+=("pymarkdown scan")
  fi

  if command -v hyperfine >/dev/null 2>&1; then
    local hf_args=()
    local i
    for i in "${!commands[@]}"; do
      hf_args+=("${commands[$i]}")
    done
    bench_with_hyperfine "${corpus_name}" "${hf_args[@]}"
  else
    echo "hyperfine not installed; using single-run timing" | tee -a "$RESULTS"
    local i
    for i in "${!commands[@]}"; do
      bench_with_time "${labels[$i]}" bash -c "${commands[$i]}"
    done
  fi

  echo | tee -a "$RESULTS"
}

write_header
discover_tools

echo "Discovered competitors: ${TOOL_LABELS[*]:-mdmend only}" | tee -a "$RESULTS"
echo | tee -a "$RESULTS"

for idx in "${!CORPUS_NAMES[@]}"; do
  run_corpus_benchmark "${CORPUS_NAMES[$idx]}" "${CORPUS_PATHS[$idx]}"
done

python3 - <<'PY' "$BENCH_DIR" "$TIMESTAMP" "$WARMUP" "$RUNS" "$BENCH_LABEL" 2>/dev/null | tee "${SUMMARY}" || true
import json, glob, os, sys
bench_dir, ts, warmup, runs, label = sys.argv[1:6]
entries = []
for path in sorted(glob.glob(os.path.join(bench_dir, "*.json"))):
    base = os.path.basename(path)
    if base in ("summary.json", "meta.json", "latest.json", "hyperfine-export.json"):
        continue
    with open(path) as f:
        data = json.load(f)
    for result in data.get("results", []):
        entries.append({
            "corpus": base.replace(".json", ""),
            "command": result.get("command", ""),
            "mean_ms": round(result.get("mean", 0) * 1000, 2),
            "stddev_ms": round(result.get("stddev", 0) * 1000, 2),
            "min_ms": round(result.get("min", 0) * 1000, 2),
            "max_ms": round(result.get("max", 0) * 1000, 2),
        })
print(json.dumps({
    "label": label,
    "timestamp": ts,
    "warmup": int(warmup),
    "runs": int(runs),
    "results": entries,
}, indent=2))
PY

echo "Benchmark complete. Results: ${RESULTS}" | tee -a "$RESULTS"