#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
go build -o mdmend ./cmd/mdmend

for fixture in testdata/fixtures/*.md; do
  name=$(basename "$fixture")
  golden="testdata/golden/$name"
  work=$(mktemp /tmp/mdmend-golden.XXXXXX.md)
  cp "$fixture" "$work"

  if [[ "$name" == issue3_* ]]; then
    "$ROOT/mdmend" fix "$work" --aggressive --quiet
  else
    rule=$(echo "$name" | cut -d_ -f1 | tr '[:lower:]' '[:upper:]')
    "$ROOT/mdmend" fix "$work" --only "$rule" --aggressive --quiet
  fi

  cp "$work" "$golden"
  rm -f "$work"
  echo "regenerated $golden"
done