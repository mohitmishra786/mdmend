#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${ROOT}/testdata/benchmark/stress"
mkdir -p "$OUT"

FILE_COUNT="${1:-200}"
LINES_PER_FILE="${2:-500}"

echo "Generating ${FILE_COUNT} stress files (~${LINES_PER_FILE} lines each) in ${OUT}"

for i in $(seq 1 "$FILE_COUNT"); do
  file="${OUT}/doc_$(printf '%04d' "$i").md"
  {
    printf '# Stress Document %04d\n\n' "$i"
    printf '<!-- toc -->\n- [Introduction](#introduction)\n- [Details](#details)\n- [Examples](#examples)\n<!-- /toc -->\n\n'
    printf '## Introduction\n\n'
    printf 'Reference [^note%d] and link [Example](https://example.com/%d).\n\n' "$i" "$i"
    printf '## Details\n\n'
    printf '| Column A | Column B | Column C |\n| --- | --- | --- |\n'

    for row in $(seq 1 20); do
      printf '| value-%d-%d | value-%d-%d | value-%d-%d |\n' "$i" "$row" "$i" "$row" "$i" "$row"
    done

    printf '\n```go\npackage main\n\nimport "fmt"\n\nfunc main() {\n'
    for line in $(seq 1 40); do
      printf '    fmt.Println("line %d in doc %d")\n' "$line" "$i"
    done
    printf '}\n```\n\n'

    printf '## Examples\n\n'
    for item in $(seq 1 30); do
      printf '%d. Ordered item %d with trailing spaces  \n' "$item" "$item"
    done

    printf '\n'
    for block in $(seq 1 $((LINES_PER_FILE / 25))); do
      printf '### Subsection %d-%d\n\n' "$i" "$block"
      printf 'Some prose with a bare URL https://example.org/%d/%d and **emphasis**.\n\n' "$i" "$block"
      printf '> Blockquote line %d\n' "$block"
      printf '    indented code sample %d\n\n' "$block"
    done

    printf '[^note%d]: Footnote definition for document %d.\n' "$i" "$i"
  } >"$file"
done

total_lines=$(wc -l "$OUT"/*.md | tail -1 | awk '{print $1}')
total_bytes=$(wc -c "$OUT"/*.md | tail -1 | awk '{print $1}')
echo "Generated ${FILE_COUNT} files (${total_lines} lines, ${total_bytes} bytes)"