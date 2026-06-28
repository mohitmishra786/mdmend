window.BENCHMARK_DATA = {
  "lastUpdate": 1782642197866,
  "repoUrl": "https://github.com/mohitmishra786/mdmend",
  "entries": {
    "mdmend lint benchmarks": [
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "43be81367438519ba1780dac66a7c2a371fee1d3",
          "message": "bench: weekly results 2026-06-28",
          "timestamp": "2026-06-28T10:17:07Z",
          "url": "https://github.com/mohitmishra786/mdmend/commit/43be81367438519ba1780dac66a7c2a371fee1d3"
        },
        "date": 1782641830032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 4.08,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.01, \"max_ms\": 4.15, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 8.2,
            "range": "0.2",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.03, \"max_ms\": 8.42, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 790.01,
            "range": "6.82",
            "unit": "ms",
            "extra": "{\"min_ms\": 782.82, \"max_ms\": 796.39, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 9.71,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.65, \"max_ms\": 9.8, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 229.08,
            "range": "2.79",
            "unit": "ms",
            "extra": "{\"min_ms\": 225.89, \"max_ms\": 231.05, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.28,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.21, \"max_ms\": 3.37, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 3.67,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.48, \"max_ms\": 3.83, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 733.35,
            "range": "47.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 705.52, \"max_ms\": 787.76, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 6.52,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.39, \"max_ms\": 6.72, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 243.82,
            "range": "2.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 241.43, \"max_ms\": 245.11, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.16,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.14, \"max_ms\": 3.21, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 3.11,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.03, \"max_ms\": 3.21, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 682.43,
            "range": "1.58",
            "unit": "ms",
            "extra": "{\"min_ms\": 680.96, \"max_ms\": 684.1, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 4.33,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.19, \"max_ms\": 4.4, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 230.07,
            "range": "0.93",
            "unit": "ms",
            "extra": "{\"min_ms\": 229.01, \"max_ms\": 230.74, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.29,
            "range": "0.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.28, \"max_ms\": 3.3, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 7.06,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.02, \"max_ms\": 7.11, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 673.76,
            "range": "3.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 669.94, \"max_ms\": 675.76, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 9.88,
            "range": "0.46",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.6, \"max_ms\": 10.42, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 178.5,
            "range": "1.89",
            "unit": "ms",
            "extra": "{\"min_ms\": 176.7, \"max_ms\": 180.47, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 2.94,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.91, \"max_ms\": 2.97, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.34,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.19, \"max_ms\": 3.49, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 611.79,
            "range": "9.86",
            "unit": "ms",
            "extra": "{\"min_ms\": 603.13, \"max_ms\": 622.53, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 10.05,
            "range": "1.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.8, \"max_ms\": 11.37, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 194.79,
            "range": "2.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 192.52, \"max_ms\": 196.64, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 2.7,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.64, \"max_ms\": 2.76, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 2.74,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.68, \"max_ms\": 2.79, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 590.26,
            "range": "8.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 584.69, \"max_ms\": 599.7, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 3.07,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.95, \"max_ms\": 3.22, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 190.53,
            "range": "2.53",
            "unit": "ms",
            "extra": "{\"min_ms\": 187.68, \"max_ms\": 192.52, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 3.64,
            "range": "0.16",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.47, \"max_ms\": 3.79, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 8.02,
            "range": "0.6",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.55, \"max_ms\": 8.7, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 857.64,
            "range": "5.3",
            "unit": "ms",
            "extra": "{\"min_ms\": 851.61, \"max_ms\": 861.59, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 8.22,
            "range": "0.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.05, \"max_ms\": 8.47, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 216.79,
            "range": "1.98",
            "unit": "ms",
            "extra": "{\"min_ms\": 215.41, \"max_ms\": 219.07, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 3.05,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.92, \"max_ms\": 3.15, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.38,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.29, \"max_ms\": 3.56, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 785.88,
            "range": "9.3",
            "unit": "ms",
            "extra": "{\"min_ms\": 775.15, \"max_ms\": 791.28, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 5.41,
            "range": "0.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.24, \"max_ms\": 5.74, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 232.63,
            "range": "1.91",
            "unit": "ms",
            "extra": "{\"min_ms\": 231.03, \"max_ms\": 234.75, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 2.84,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.76, \"max_ms\": 2.88, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 2.83,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.78, \"max_ms\": 2.85, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 758.72,
            "range": "3.24",
            "unit": "ms",
            "extra": "{\"min_ms\": 755.01, \"max_ms\": 760.97, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 3.6,
            "range": "0.16",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.46, \"max_ms\": 3.78, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 219.25,
            "range": "1.61",
            "unit": "ms",
            "extra": "{\"min_ms\": 217.39, \"max_ms\": 220.19, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend lint",
            "value": 3.79,
            "range": "0.41",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.49, \"max_ms\": 4.26, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend fix",
            "value": 11.61,
            "range": "2.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 10.15, \"max_ms\": 14.25, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 599.54,
            "range": "19.52",
            "unit": "ms",
            "extra": "{\"min_ms\": 588.01, \"max_ms\": 622.08, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 10.92,
            "range": "0.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 10.59, \"max_ms\": 11.2, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 139.41,
            "range": "7.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 135.18, \"max_ms\": 147.53, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend lint",
            "value": 3.3,
            "range": "0.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.14, \"max_ms\": 3.51, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend fix",
            "value": 4.21,
            "range": "0.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.98, \"max_ms\": 4.37, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 574.28,
            "range": "89.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 475.62, \"max_ms\": 648.55, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 10.82,
            "range": "1.55",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.49, \"max_ms\": 12.51, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 160.17,
            "range": "6.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 154.87, \"max_ms\": 166.95, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 4.22,
            "range": "0.2",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.99, \"max_ms\": 4.36, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend fix",
            "value": 3.55,
            "range": "0.34",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.16, \"max_ms\": 3.81, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / markdownlint-cli2",
            "value": 483.97,
            "range": "20.43",
            "unit": "ms",
            "extra": "{\"min_ms\": 465.97, \"max_ms\": 506.17, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 6.67,
            "range": "1.34",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.87, \"max_ms\": 8.21, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 127.55,
            "range": "0.44",
            "unit": "ms",
            "extra": "{\"min_ms\": 127.17, \"max_ms\": 128.03, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.34,
            "range": "0.25",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.08, \"max_ms\": 0.58, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 0.53,
            "range": "0.2",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.35, \"max_ms\": 0.75, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1739.36,
            "range": "78.54",
            "unit": "ms",
            "extra": "{\"min_ms\": 1685.77, \"max_ms\": 1829.52, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 20.46,
            "range": "0.52",
            "unit": "ms",
            "extra": "{\"min_ms\": 19.87, \"max_ms\": 20.82, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 327.57,
            "range": "10.51",
            "unit": "ms",
            "extra": "{\"min_ms\": 318.16, \"max_ms\": 338.91, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0.92,
            "range": "0.24",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.68, \"max_ms\": 1.15, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0.97,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.88, \"max_ms\": 1.09, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1749.73,
            "range": "86.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 1684.45, \"max_ms\": 1847.29, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 21.1,
            "range": "0.24",
            "unit": "ms",
            "extra": "{\"min_ms\": 20.92, \"max_ms\": 21.37, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 336.53,
            "range": "4.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 332.21, \"max_ms\": 340.53, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.61,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.57, \"max_ms\": 0.65, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0.53,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.44, \"max_ms\": 0.65, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1730.05,
            "range": "18.34",
            "unit": "ms",
            "extra": "{\"min_ms\": 1709.7, \"max_ms\": 1745.31, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 20.08,
            "range": "0.46",
            "unit": "ms",
            "extra": "{\"min_ms\": 19.6, \"max_ms\": 20.51, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 319.95,
            "range": "3.99",
            "unit": "ms",
            "extra": "{\"min_ms\": 316.79, \"max_ms\": 324.44, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "71754779+mohitmishra786@users.noreply.github.com",
            "name": "chessMan",
            "username": "mohitmishra786"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9eb0b5094a7d0a48ec648126c72defc45f5bcc2",
          "message": "Merge pull request #34 from mohitmishra786/feat/rules-benchmarks-coverage\n\nfeat: new rules (MD046/054/066-068/070/073), competitor benchmarks, and full test coverage",
          "timestamp": "2026-06-28T15:48:56+05:30",
          "tree_id": "5d3b38fbaa3cedea6ff5638ad7edfdc40b00f013",
          "url": "https://github.com/mohitmishra786/mdmend/commit/b9eb0b5094a7d0a48ec648126c72defc45f5bcc2"
        },
        "date": 1782642197424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 1.77,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 1.72, \"max_ms\": 1.81, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 4.31,
            "range": "0.45",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.03, \"max_ms\": 4.83, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 449.17,
            "range": "12.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 436.25, \"max_ms\": 460.25, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 64.55,
            "range": "103.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.73, \"max_ms\": 183.5, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 128.36,
            "range": "1.45",
            "unit": "ms",
            "extra": "{\"min_ms\": 127.52, \"max_ms\": 130.03, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 1.6,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 1.51, \"max_ms\": 1.7, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 1.77,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 1.73, \"max_ms\": 1.81, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 402,
            "range": "10.93",
            "unit": "ms",
            "extra": "{\"min_ms\": 391.81, \"max_ms\": 413.55, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 6.04,
            "range": "2.76",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.13, \"max_ms\": 9.2, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 137.63,
            "range": "0.88",
            "unit": "ms",
            "extra": "{\"min_ms\": 136.82, \"max_ms\": 138.57, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 1.55,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 1.48, \"max_ms\": 1.62, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 1.43,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 1.42, \"max_ms\": 1.45, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 390.85,
            "range": "10.5",
            "unit": "ms",
            "extra": "{\"min_ms\": 381.52, \"max_ms\": 402.22, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 2.16,
            "range": "0.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.02, \"max_ms\": 2.37, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 139.22,
            "range": "5.63",
            "unit": "ms",
            "extra": "{\"min_ms\": 132.75, \"max_ms\": 143.03, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.28,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.22, \"max_ms\": 3.38, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 7.15,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.1, \"max_ms\": 7.24, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 697.14,
            "range": "8.62",
            "unit": "ms",
            "extra": "{\"min_ms\": 691.6, \"max_ms\": 707.07, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 9.64,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.58, \"max_ms\": 9.72, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 180.73,
            "range": "4.37",
            "unit": "ms",
            "extra": "{\"min_ms\": 175.81, \"max_ms\": 184.17, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 2.79,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.64, \"max_ms\": 2.93, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.01,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.95, \"max_ms\": 3.08, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 626.55,
            "range": "3.7",
            "unit": "ms",
            "extra": "{\"min_ms\": 624.05, \"max_ms\": 630.81, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 16.66,
            "range": "7.77",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.67, \"max_ms\": 24.19, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 193.31,
            "range": "0.85",
            "unit": "ms",
            "extra": "{\"min_ms\": 192.62, \"max_ms\": 194.27, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 2.75,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.74, \"max_ms\": 2.77, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 2.69,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.65, \"max_ms\": 2.77, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 608.65,
            "range": "3.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 605.12, \"max_ms\": 610.53, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 3.15,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.08, \"max_ms\": 3.23, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 183.48,
            "range": "0.94",
            "unit": "ms",
            "extra": "{\"min_ms\": 182.41, \"max_ms\": 184.16, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 3.49,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.35, \"max_ms\": 3.64, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 7.33,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.29, \"max_ms\": 7.35, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 755.23,
            "range": "6.58",
            "unit": "ms",
            "extra": "{\"min_ms\": 747.73, \"max_ms\": 760.03, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 7.84,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.75, \"max_ms\": 7.96, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 209.43,
            "range": "1.37",
            "unit": "ms",
            "extra": "{\"min_ms\": 208.39, \"max_ms\": 210.98, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 2.89,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.82, \"max_ms\": 2.95, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.25,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.22, \"max_ms\": 3.28, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 729.03,
            "range": "4.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 724.66, \"max_ms\": 732.69, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 5.49,
            "range": "0.33",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.19, \"max_ms\": 5.84, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 225.31,
            "range": "0.85",
            "unit": "ms",
            "extra": "{\"min_ms\": 224.64, \"max_ms\": 226.26, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 2.83,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.81, \"max_ms\": 2.85, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 2.68,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.65, \"max_ms\": 2.72, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 668.08,
            "range": "9.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 662.03, \"max_ms\": 678.56, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 3.6,
            "range": "0.16",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.42, \"max_ms\": 3.71, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 210.72,
            "range": "0.36",
            "unit": "ms",
            "extra": "{\"min_ms\": 210.3, \"max_ms\": 210.96, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend lint",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend fix",
            "value": 2.63,
            "range": "0.48",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.26, \"max_ms\": 3.17, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 524.77,
            "range": "21.46",
            "unit": "ms",
            "extra": "{\"min_ms\": 500.0, \"max_ms\": 537.56, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 5.81,
            "range": "0.35",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.56, \"max_ms\": 6.21, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 170.01,
            "range": "1.49",
            "unit": "ms",
            "extra": "{\"min_ms\": 168.34, \"max_ms\": 171.23, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend lint",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend fix",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 495.05,
            "range": "4.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 491.13, \"max_ms\": 499.33, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 4.17,
            "range": "1.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.96, \"max_ms\": 4.93, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 176.38,
            "range": "17.24",
            "unit": "ms",
            "extra": "{\"min_ms\": 158.2, \"max_ms\": 192.48, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend fix",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / markdownlint-cli2",
            "value": 487.31,
            "range": "7.45",
            "unit": "ms",
            "extra": "{\"min_ms\": 482.57, \"max_ms\": 495.9, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 168.06,
            "range": "2.45",
            "unit": "ms",
            "extra": "{\"min_ms\": 165.47, \"max_ms\": 170.35, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          }
        ]
      }
    ]
  }
}