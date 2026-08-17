window.BENCHMARK_DATA = {
  "lastUpdate": 1786938596386,
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
      },
      {
        "commit": {
          "author": {
            "email": "immadmohit@gmail.com",
            "name": "Mohit Mishra",
            "username": "mohitmishra786"
          },
          "committer": {
            "email": "immadmohit@gmail.com",
            "name": "Mohit Mishra",
            "username": "mohitmishra786"
          },
          "distinct": true,
          "id": "f796adfb93ac2ea92d2ef3361b0c601192c58a90",
          "message": "chore(release): prepare v1.0.2\n\n- Promote live benchmark dashboard link in README\n- Bump npm packages and GitHub Action default to 1.0.2\n- Update install examples and snap metadata for 57 rules",
          "timestamp": "2026-06-28T15:59:40+05:30",
          "tree_id": "ed47793e7ccd0cadf0f7b899dce86f58f77bb7d3",
          "url": "https://github.com/mohitmishra786/mdmend/commit/f796adfb93ac2ea92d2ef3361b0c601192c58a90"
        },
        "date": 1782643122526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 4.24,
            "range": "0.2",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.11, \"max_ms\": 4.48, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 8.23,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.12, \"max_ms\": 8.35, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 815.87,
            "range": "5.48",
            "unit": "ms",
            "extra": "{\"min_ms\": 812.21, \"max_ms\": 822.17, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 9.95,
            "range": "0.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.77, \"max_ms\": 10.21, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 229.7,
            "range": "1.43",
            "unit": "ms",
            "extra": "{\"min_ms\": 228.06, \"max_ms\": 230.62, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.3,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.22, \"max_ms\": 3.41, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 4.12,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.0, \"max_ms\": 4.26, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 746.76,
            "range": "4.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 741.94, \"max_ms\": 749.56, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 6.61,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.53, \"max_ms\": 6.71, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 243.71,
            "range": "0.81",
            "unit": "ms",
            "extra": "{\"min_ms\": 242.98, \"max_ms\": 244.58, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.45,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.3, \"max_ms\": 3.56, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 3.18,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.15, \"max_ms\": 3.21, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 741.31,
            "range": "7.96",
            "unit": "ms",
            "extra": "{\"min_ms\": 735.84, \"max_ms\": 750.44, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 4.49,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.44, \"max_ms\": 4.55, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 232.64,
            "range": "1.53",
            "unit": "ms",
            "extra": "{\"min_ms\": 230.87, \"max_ms\": 233.55, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.02,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.95, \"max_ms\": 3.09, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 6.6,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.58, \"max_ms\": 6.63, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 676.14,
            "range": "5.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 670.86, \"max_ms\": 681.12, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 9.06,
            "range": "0.41",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.69, \"max_ms\": 9.51, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 176.22,
            "range": "2.64",
            "unit": "ms",
            "extra": "{\"min_ms\": 173.2, \"max_ms\": 178.13, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 3,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.94, \"max_ms\": 3.09, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.37,
            "range": "0.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.13, \"max_ms\": 3.52, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 608.31,
            "range": "10.64",
            "unit": "ms",
            "extra": "{\"min_ms\": 596.16, \"max_ms\": 615.99, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 7.69,
            "range": "0.79",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.17, \"max_ms\": 8.6, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 187.23,
            "range": "1.89",
            "unit": "ms",
            "extra": "{\"min_ms\": 186.14, \"max_ms\": 189.41, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 2.6,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.53, \"max_ms\": 2.64, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 2.65,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.62, \"max_ms\": 2.7, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 598.52,
            "range": "12.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 586.28, \"max_ms\": 610.56, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 2.99,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.92, \"max_ms\": 3.1, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 178.13,
            "range": "3.42",
            "unit": "ms",
            "extra": "{\"min_ms\": 175.55, \"max_ms\": 182.01, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 3.56,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.45, \"max_ms\": 3.71, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 7.86,
            "range": "0.56",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.54, \"max_ms\": 8.52, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 781.75,
            "range": "9.32",
            "unit": "ms",
            "extra": "{\"min_ms\": 771.32, \"max_ms\": 789.24, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 8.33,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.25, \"max_ms\": 8.43, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 218.93,
            "range": "1.43",
            "unit": "ms",
            "extra": "{\"min_ms\": 217.69, \"max_ms\": 220.5, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 3.11,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.09, \"max_ms\": 3.15, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.39,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.26, \"max_ms\": 3.47, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 713.17,
            "range": "3.5",
            "unit": "ms",
            "extra": "{\"min_ms\": 709.13, \"max_ms\": 715.35, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 5.86,
            "range": "0.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.64, \"max_ms\": 6.06, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 233.72,
            "range": "0.71",
            "unit": "ms",
            "extra": "{\"min_ms\": 233.07, \"max_ms\": 234.48, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 2.87,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.85, \"max_ms\": 2.88, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 2.86,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.83, \"max_ms\": 2.89, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 692.75,
            "range": "2.91",
            "unit": "ms",
            "extra": "{\"min_ms\": 690.06, \"max_ms\": 695.84, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 3.86,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.75, \"max_ms\": 4.0, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 224,
            "range": "2.78",
            "unit": "ms",
            "extra": "{\"min_ms\": 221.18, \"max_ms\": 226.74, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend lint",
            "value": 0.03,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.09, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend fix",
            "value": 2.59,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.52, \"max_ms\": 2.72, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 848.27,
            "range": "37.96",
            "unit": "ms",
            "extra": "{\"min_ms\": 806.33, \"max_ms\": 880.27, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 28.38,
            "range": "14.79",
            "unit": "ms",
            "extra": "{\"min_ms\": 17.91, \"max_ms\": 45.3, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 205.42,
            "range": "22.82",
            "unit": "ms",
            "extra": "{\"min_ms\": 180.04, \"max_ms\": 224.25, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend lint",
            "value": 10.18,
            "range": "17.63",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 30.54, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend fix",
            "value": 0.68,
            "range": "1.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 2.03, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 532.69,
            "range": "15.64",
            "unit": "ms",
            "extra": "{\"min_ms\": 515.26, \"max_ms\": 545.51, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 171.57,
            "range": "15.58",
            "unit": "ms",
            "extra": "{\"min_ms\": 160.72, \"max_ms\": 189.42, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
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
            "value": 563.79,
            "range": "32.62",
            "unit": "ms",
            "extra": "{\"min_ms\": 543.5, \"max_ms\": 601.42, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 1.24,
            "range": "0.91",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.34, \"max_ms\": 2.15, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 174.7,
            "range": "32.56",
            "unit": "ms",
            "extra": "{\"min_ms\": 155.67, \"max_ms\": 212.29, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.51,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.35, \"max_ms\": 0.61, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 0.53,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.47, \"max_ms\": 0.58, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1685.59,
            "range": "20.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 1662.98, \"max_ms\": 1701.79, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 18.75,
            "range": "0.35",
            "unit": "ms",
            "extra": "{\"min_ms\": 18.43, \"max_ms\": 19.12, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 310.02,
            "range": "2.78",
            "unit": "ms",
            "extra": "{\"min_ms\": 307.15, \"max_ms\": 312.7, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0.48,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.34, \"max_ms\": 0.59, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0.51,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.38, \"max_ms\": 0.61, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1846.1,
            "range": "33.95",
            "unit": "ms",
            "extra": "{\"min_ms\": 1820.38, \"max_ms\": 1884.59, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 22.55,
            "range": "1.44",
            "unit": "ms",
            "extra": "{\"min_ms\": 21.57, \"max_ms\": 24.2, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 329.87,
            "range": "4.55",
            "unit": "ms",
            "extra": "{\"min_ms\": 325.99, \"max_ms\": 334.87, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.57,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.49, \"max_ms\": 0.62, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0.59,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.55, \"max_ms\": 0.64, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1684.29,
            "range": "1.9",
            "unit": "ms",
            "extra": "{\"min_ms\": 1682.73, \"max_ms\": 1686.41, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 17.85,
            "range": "0.47",
            "unit": "ms",
            "extra": "{\"min_ms\": 17.46, \"max_ms\": 18.38, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 304.98,
            "range": "2.55",
            "unit": "ms",
            "extra": "{\"min_ms\": 302.12, \"max_ms\": 307.03, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          }
        ]
      },
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
          "id": "840bd6b05e0eb03402eef352957d283a44fc64a8",
          "message": "bench: weekly results 2026-06-29",
          "timestamp": "2026-06-29T07:31:49Z",
          "url": "https://github.com/mohitmishra786/mdmend/commit/840bd6b05e0eb03402eef352957d283a44fc64a8"
        },
        "date": 1782718312114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 4.29,
            "range": "0.59",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.95, \"max_ms\": 4.97, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 8.6,
            "range": "0.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.33, \"max_ms\": 8.91, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 741.68,
            "range": "10.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 730.35, \"max_ms\": 749.5, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 9.97,
            "range": "0.25",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.71, \"max_ms\": 10.2, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 232.85,
            "range": "1.75",
            "unit": "ms",
            "extra": "{\"min_ms\": 230.84, \"max_ms\": 234.04, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.43,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.38, \"max_ms\": 3.51, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 3.94,
            "range": "0.54",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.51, \"max_ms\": 4.55, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 675.21,
            "range": "8.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 666.71, \"max_ms\": 683.26, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 7.83,
            "range": "0.58",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.48, \"max_ms\": 8.49, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 243.44,
            "range": "1.38",
            "unit": "ms",
            "extra": "{\"min_ms\": 242.23, \"max_ms\": 244.95, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.89,
            "range": "0.37",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.48, \"max_ms\": 4.18, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 3.52,
            "range": "0.2",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.32, \"max_ms\": 3.72, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 642.73,
            "range": "5.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 636.73, \"max_ms\": 645.8, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 4.49,
            "range": "0.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.26, \"max_ms\": 4.8, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 235.46,
            "range": "0.68",
            "unit": "ms",
            "extra": "{\"min_ms\": 234.7, \"max_ms\": 236.01, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.52,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.43, \"max_ms\": 3.59, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 7.41,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.31, \"max_ms\": 7.48, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 691.89,
            "range": "11.65",
            "unit": "ms",
            "extra": "{\"min_ms\": 683.01, \"max_ms\": 705.09, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 14.53,
            "range": "0.41",
            "unit": "ms",
            "extra": "{\"min_ms\": 14.06, \"max_ms\": 14.79, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 188.68,
            "range": "0.72",
            "unit": "ms",
            "extra": "{\"min_ms\": 188.05, \"max_ms\": 189.47, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 2.94,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.86, \"max_ms\": 3.01, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.27,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.17, \"max_ms\": 3.33, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 614.2,
            "range": "14.76",
            "unit": "ms",
            "extra": "{\"min_ms\": 597.67, \"max_ms\": 626.05, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 12.66,
            "range": "0.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 12.36, \"max_ms\": 12.91, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 198.91,
            "range": "1.32",
            "unit": "ms",
            "extra": "{\"min_ms\": 197.44, \"max_ms\": 200.0, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 2.87,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.81, \"max_ms\": 2.92, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 2.78,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.69, \"max_ms\": 2.83, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 594.15,
            "range": "8.63",
            "unit": "ms",
            "extra": "{\"min_ms\": 588.36, \"max_ms\": 604.07, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 3.28,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.17, \"max_ms\": 3.45, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 180.36,
            "range": "6.9",
            "unit": "ms",
            "extra": "{\"min_ms\": 176.13, \"max_ms\": 188.32, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 3.95,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.8, \"max_ms\": 4.07, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 8.07,
            "range": "0.47",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.78, \"max_ms\": 8.61, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 747.12,
            "range": "8.69",
            "unit": "ms",
            "extra": "{\"min_ms\": 738.25, \"max_ms\": 755.61, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 8.39,
            "range": "0.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.19, \"max_ms\": 8.74, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 215.86,
            "range": "0.69",
            "unit": "ms",
            "extra": "{\"min_ms\": 215.27, \"max_ms\": 216.62, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 3.04,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.0, \"max_ms\": 3.1, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.34,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.31, \"max_ms\": 3.39, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 692.69,
            "range": "10.64",
            "unit": "ms",
            "extra": "{\"min_ms\": 686.41, \"max_ms\": 704.98, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 5.73,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.61, \"max_ms\": 5.81, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 233.6,
            "range": "1.89",
            "unit": "ms",
            "extra": "{\"min_ms\": 232.06, \"max_ms\": 235.72, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 2.92,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.88, \"max_ms\": 2.97, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 2.87,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.87, \"max_ms\": 2.87, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 651.23,
            "range": "6.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 646.21, \"max_ms\": 658.14, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 3.82,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.72, \"max_ms\": 3.96, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 216.53,
            "range": "1.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 215.33, \"max_ms\": 217.72, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend lint",
            "value": 11.86,
            "range": "9.57",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.21, \"max_ms\": 22.91, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend fix",
            "value": 10.32,
            "range": "7.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.69, \"max_ms\": 17.18, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 999.68,
            "range": "19.25",
            "unit": "ms",
            "extra": "{\"min_ms\": 988.17, \"max_ms\": 1021.9, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 9.4,
            "range": "3.2",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.87, \"max_ms\": 13.0, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 278.91,
            "range": "40.45",
            "unit": "ms",
            "extra": "{\"min_ms\": 246.81, \"max_ms\": 324.34, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend lint",
            "value": 3.82,
            "range": "2.85",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.53, \"max_ms\": 5.64, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend fix",
            "value": 0.22,
            "range": "0.37",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.65, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 840.14,
            "range": "89.79",
            "unit": "ms",
            "extra": "{\"min_ms\": 756.11, \"max_ms\": 934.75, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 7.83,
            "range": "4.51",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.73, \"max_ms\": 11.28, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 284.45,
            "range": "48.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 238.26, \"max_ms\": 334.08, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 1.58,
            "range": "1.37",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 2.42, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
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
            "value": 1054.73,
            "range": "105.61",
            "unit": "ms",
            "extra": "{\"min_ms\": 971.28, \"max_ms\": 1173.47, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 8.78,
            "range": "3.91",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.27, \"max_ms\": 11.14, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 409.69,
            "range": "59.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 370.07, \"max_ms\": 477.72, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.59,
            "range": "0.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.58, \"max_ms\": 0.6, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 0.58,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.47, \"max_ms\": 0.8, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1689.67,
            "range": "42.9",
            "unit": "ms",
            "extra": "{\"min_ms\": 1640.41, \"max_ms\": 1718.9, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 20.04,
            "range": "0.71",
            "unit": "ms",
            "extra": "{\"min_ms\": 19.39, \"max_ms\": 20.8, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 305.95,
            "range": "8.59",
            "unit": "ms",
            "extra": "{\"min_ms\": 299.07, \"max_ms\": 315.58, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0.71,
            "range": "0.16",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.57, \"max_ms\": 0.88, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0.54,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.45, \"max_ms\": 0.65, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1609.2,
            "range": "9.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 1603.32, \"max_ms\": 1619.64, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 17.13,
            "range": "0.25",
            "unit": "ms",
            "extra": "{\"min_ms\": 16.89, \"max_ms\": 17.4, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 294.18,
            "range": "0.54",
            "unit": "ms",
            "extra": "{\"min_ms\": 293.75, \"max_ms\": 294.78, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.76,
            "range": "0.4",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.33, \"max_ms\": 1.13, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0.64,
            "range": "0.49",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.35, \"max_ms\": 1.21, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1626.65,
            "range": "13.88",
            "unit": "ms",
            "extra": "{\"min_ms\": 1615.14, \"max_ms\": 1642.06, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 16.74,
            "range": "0.33",
            "unit": "ms",
            "extra": "{\"min_ms\": 16.39, \"max_ms\": 17.06, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 301.17,
            "range": "5.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 295.76, \"max_ms\": 306.21, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
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
          "id": "4e96e3ce5868242b2aa6be27ee9f16753a4de728",
          "message": "Merge pull request #39 from mohitmishra786/dependabot/github_actions/actions/setup-python-6\n\nchore(deps): bump actions/setup-python from 5 to 6",
          "timestamp": "2026-06-29T18:52:20+05:30",
          "tree_id": "46f558b570ce819073b4c6d069be0ffc09cadec3",
          "url": "https://github.com/mohitmishra786/mdmend/commit/4e96e3ce5868242b2aa6be27ee9f16753a4de728"
        },
        "date": 1782739904137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 4.35,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.25, \"max_ms\": 4.45, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 11.74,
            "range": "2.99",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.32, \"max_ms\": 13.79, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 771.61,
            "range": "21.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 754.96, \"max_ms\": 795.34, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 9.97,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.9, \"max_ms\": 10.06, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 235.7,
            "range": "0.69",
            "unit": "ms",
            "extra": "{\"min_ms\": 234.93, \"max_ms\": 236.26, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.55,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.47, \"max_ms\": 3.67, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 3.98,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.89, \"max_ms\": 4.11, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 726.53,
            "range": "27.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 708.99, \"max_ms\": 757.95, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 6.91,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.9, \"max_ms\": 6.94, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 251.94,
            "range": "0.86",
            "unit": "ms",
            "extra": "{\"min_ms\": 251.18, \"max_ms\": 252.87, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.35,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.28, \"max_ms\": 3.42, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 3.33,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.25, \"max_ms\": 3.4, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 666.38,
            "range": "6.82",
            "unit": "ms",
            "extra": "{\"min_ms\": 659.93, \"max_ms\": 673.52, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 4.79,
            "range": "0.25",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.61, \"max_ms\": 5.07, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 231.29,
            "range": "0.57",
            "unit": "ms",
            "extra": "{\"min_ms\": 230.7, \"max_ms\": 231.84, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.36,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.26, \"max_ms\": 3.49, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 7.14,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.07, \"max_ms\": 7.21, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 674.55,
            "range": "3.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 670.94, \"max_ms\": 676.49, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 12.23,
            "range": "2.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 10.64, \"max_ms\": 14.54, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 182.28,
            "range": "3.7",
            "unit": "ms",
            "extra": "{\"min_ms\": 178.03, \"max_ms\": 184.75, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 2.91,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.88, \"max_ms\": 2.95, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.28,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.26, \"max_ms\": 3.31, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 609.66,
            "range": "5.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 603.91, \"max_ms\": 613.35, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 11.98,
            "range": "2.3",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.43, \"max_ms\": 13.88, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 194.01,
            "range": "1.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 193.05, \"max_ms\": 195.51, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 2.89,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.85, \"max_ms\": 2.91, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 2.74,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.7, \"max_ms\": 2.78, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 611.89,
            "range": "24.77",
            "unit": "ms",
            "extra": "{\"min_ms\": 585.69, \"max_ms\": 634.92, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 3.13,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.07, \"max_ms\": 3.19, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 185.18,
            "range": "0.52",
            "unit": "ms",
            "extra": "{\"min_ms\": 184.61, \"max_ms\": 185.62, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 3.43,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.38, \"max_ms\": 3.46, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 7.3,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.15, \"max_ms\": 7.41, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 759.3,
            "range": "8.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 753.08, \"max_ms\": 768.39, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 7.62,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.55, \"max_ms\": 7.76, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 208.49,
            "range": "1.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 207.52, \"max_ms\": 209.72, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 2.81,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.78, \"max_ms\": 2.86, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.09,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.02, \"max_ms\": 3.22, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 689.66,
            "range": "11.5",
            "unit": "ms",
            "extra": "{\"min_ms\": 677.17, \"max_ms\": 699.8, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 5.47,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.34, \"max_ms\": 5.56, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 221,
            "range": "0.37",
            "unit": "ms",
            "extra": "{\"min_ms\": 220.7, \"max_ms\": 221.42, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 2.78,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.68, \"max_ms\": 2.85, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 2.73,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.67, \"max_ms\": 2.76, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 663.32,
            "range": "4.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 658.37, \"max_ms\": 665.81, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 3.58,
            "range": "0.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.38, \"max_ms\": 3.81, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 207.79,
            "range": "0.65",
            "unit": "ms",
            "extra": "{\"min_ms\": 207.04, \"max_ms\": 208.2, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
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
            "value": 2.16,
            "range": "1.49",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.5, \"max_ms\": 3.37, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 696.75,
            "range": "40.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 663.43, \"max_ms\": 741.41, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 13.72,
            "range": "1.55",
            "unit": "ms",
            "extra": "{\"min_ms\": 11.93, \"max_ms\": 14.7, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 213.44,
            "range": "66.91",
            "unit": "ms",
            "extra": "{\"min_ms\": 161.66, \"max_ms\": 288.99, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
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
            "value": 6.24,
            "range": "6.94",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 13.72, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 806.67,
            "range": "5.4",
            "unit": "ms",
            "extra": "{\"min_ms\": 802.9, \"max_ms\": 812.86, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 12.66,
            "range": "1.79",
            "unit": "ms",
            "extra": "{\"min_ms\": 10.61, \"max_ms\": 13.9, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 232.47,
            "range": "21.55",
            "unit": "ms",
            "extra": "{\"min_ms\": 209.03, \"max_ms\": 251.41, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 4.08,
            "range": "0.3",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.76, \"max_ms\": 4.37, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend fix",
            "value": 2.11,
            "range": "0.87",
            "unit": "ms",
            "extra": "{\"min_ms\": 1.29, \"max_ms\": 3.03, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / markdownlint-cli2",
            "value": 639.12,
            "range": "67.54",
            "unit": "ms",
            "extra": "{\"min_ms\": 578.07, \"max_ms\": 711.67, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 14.74,
            "range": "1.61",
            "unit": "ms",
            "extra": "{\"min_ms\": 13.27, \"max_ms\": 16.46, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 277.07,
            "range": "31.83",
            "unit": "ms",
            "extra": "{\"min_ms\": 250.78, \"max_ms\": 312.45, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.79,
            "range": "0.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.66, \"max_ms\": 1.04, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 0.59,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.43, \"max_ms\": 0.78, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1230.51,
            "range": "55.94",
            "unit": "ms",
            "extra": "{\"min_ms\": 1182.52, \"max_ms\": 1291.95, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 15.87,
            "range": "0.72",
            "unit": "ms",
            "extra": "{\"min_ms\": 15.06, \"max_ms\": 16.43, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 232.76,
            "range": "6.4",
            "unit": "ms",
            "extra": "{\"min_ms\": 227.95, \"max_ms\": 240.02, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0.31,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.23, \"max_ms\": 0.36, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0.24,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.16, \"max_ms\": 0.37, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1237.45,
            "range": "53.78",
            "unit": "ms",
            "extra": "{\"min_ms\": 1198.45, \"max_ms\": 1298.8, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 16.15,
            "range": "0.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 16.0, \"max_ms\": 16.4, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 234.06,
            "range": "1.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 232.67, \"max_ms\": 234.91, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.86,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.73, \"max_ms\": 1.06, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0.61,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.52, \"max_ms\": 0.65, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1428.44,
            "range": "107.73",
            "unit": "ms",
            "extra": "{\"min_ms\": 1309.79, \"max_ms\": 1520.15, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 17.15,
            "range": "0.27",
            "unit": "ms",
            "extra": "{\"min_ms\": 16.96, \"max_ms\": 17.46, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 245.55,
            "range": "4.73",
            "unit": "ms",
            "extra": "{\"min_ms\": 240.21, \"max_ms\": 249.22, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
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
          "id": "08e3eacf697c11e34777c02069b9466b2b3f61ce",
          "message": "Merge pull request #35 from mohitmishra786/dependabot/github_actions/actions/upload-artifact-7\n\nchore(deps): bump actions/upload-artifact from 4 to 7",
          "timestamp": "2026-06-29T18:53:22+05:30",
          "tree_id": "cc634df7bcebc727eabf760ef6c2ab071632ddf4",
          "url": "https://github.com/mohitmishra786/mdmend/commit/08e3eacf697c11e34777c02069b9466b2b3f61ce"
        },
        "date": 1782740546483,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 4.05,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.95, \"max_ms\": 4.16, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 8.6,
            "range": "0.77",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.14, \"max_ms\": 9.49, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 818.15,
            "range": "5.92",
            "unit": "ms",
            "extra": "{\"min_ms\": 811.32, \"max_ms\": 821.79, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 9.94,
            "range": "0.16",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.77, \"max_ms\": 10.09, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 231.52,
            "range": "1.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 230.25, \"max_ms\": 232.55, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.36,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.26, \"max_ms\": 3.5, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 3.8,
            "range": "0.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.59, \"max_ms\": 4.03, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 750.03,
            "range": "7.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 743.83, \"max_ms\": 757.84, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 6.73,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.66, \"max_ms\": 6.81, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 245.72,
            "range": "0.5",
            "unit": "ms",
            "extra": "{\"min_ms\": 245.15, \"max_ms\": 246.1, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.3,
            "range": "0.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.29, \"max_ms\": 3.31, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 3.31,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.25, \"max_ms\": 3.35, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 735.83,
            "range": "20.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 721.06, \"max_ms\": 758.63, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 4.38,
            "range": "0.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.23, \"max_ms\": 4.63, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 229.67,
            "range": "0.39",
            "unit": "ms",
            "extra": "{\"min_ms\": 229.29, \"max_ms\": 230.07, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.75,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.6, \"max_ms\": 3.83, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 7.55,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.5, \"max_ms\": 7.59, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 713.02,
            "range": "14.83",
            "unit": "ms",
            "extra": "{\"min_ms\": 696.47, \"max_ms\": 725.12, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 16.58,
            "range": "3.77",
            "unit": "ms",
            "extra": "{\"min_ms\": 13.52, \"max_ms\": 20.8, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 185.62,
            "range": "1.27",
            "unit": "ms",
            "extra": "{\"min_ms\": 184.16, \"max_ms\": 186.39, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 3.04,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.96, \"max_ms\": 3.1, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.45,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.32, \"max_ms\": 3.56, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 629.28,
            "range": "10.4",
            "unit": "ms",
            "extra": "{\"min_ms\": 621.54, \"max_ms\": 641.1, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 10.77,
            "range": "0.42",
            "unit": "ms",
            "extra": "{\"min_ms\": 10.28, \"max_ms\": 11.06, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 199.64,
            "range": "0.81",
            "unit": "ms",
            "extra": "{\"min_ms\": 198.91, \"max_ms\": 200.51, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 2.95,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.88, \"max_ms\": 3.04, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 2.89,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.86, \"max_ms\": 2.9, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 615.47,
            "range": "6.38",
            "unit": "ms",
            "extra": "{\"min_ms\": 609.34, \"max_ms\": 622.07, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 3.58,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.53, \"max_ms\": 3.67, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 184.78,
            "range": "0.87",
            "unit": "ms",
            "extra": "{\"min_ms\": 183.93, \"max_ms\": 185.67, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 3.95,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.92, \"max_ms\": 3.98, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 7.62,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.59, \"max_ms\": 7.68, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 765.22,
            "range": "6.62",
            "unit": "ms",
            "extra": "{\"min_ms\": 758.68, \"max_ms\": 771.91, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 8.23,
            "range": "0.16",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.13, \"max_ms\": 8.42, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 215.94,
            "range": "0.8",
            "unit": "ms",
            "extra": "{\"min_ms\": 215.11, \"max_ms\": 216.71, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 3.02,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.95, \"max_ms\": 3.12, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.5,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.39, \"max_ms\": 3.61, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 689.32,
            "range": "17.9",
            "unit": "ms",
            "extra": "{\"min_ms\": 674.58, \"max_ms\": 709.24, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 5.49,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.34, \"max_ms\": 5.61, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 227.97,
            "range": "0.77",
            "unit": "ms",
            "extra": "{\"min_ms\": 227.13, \"max_ms\": 228.64, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 2.93,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.91, \"max_ms\": 2.96, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 2.95,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.86, \"max_ms\": 3.06, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 670.18,
            "range": "9.41",
            "unit": "ms",
            "extra": "{\"min_ms\": 659.45, \"max_ms\": 677.01, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 3.83,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.76, \"max_ms\": 3.95, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 215.9,
            "range": "2.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 214.55, \"max_ms\": 218.36, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend lint",
            "value": 4.95,
            "range": "5.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 10.08, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend fix",
            "value": 20.21,
            "range": "5.34",
            "unit": "ms",
            "extra": "{\"min_ms\": 15.46, \"max_ms\": 25.99, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 981.64,
            "range": "23.34",
            "unit": "ms",
            "extra": "{\"min_ms\": 960.32, \"max_ms\": 1006.58, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 5.38,
            "range": "9.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 16.13, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 188.21,
            "range": "41.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 144.39, \"max_ms\": 225.64, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend lint",
            "value": 8.06,
            "range": "3.26",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.29, \"max_ms\": 9.98, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend fix",
            "value": 6.92,
            "range": "2.71",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.06, \"max_ms\": 10.02, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 1239.15,
            "range": "291.89",
            "unit": "ms",
            "extra": "{\"min_ms\": 1064.43, \"max_ms\": 1576.12, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 12.94,
            "range": "5.48",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.06, \"max_ms\": 18.86, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 397.31,
            "range": "62.71",
            "unit": "ms",
            "extra": "{\"min_ms\": 352.01, \"max_ms\": 468.88, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 3.59,
            "range": "0.82",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.66, \"max_ms\": 4.22, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend fix",
            "value": 2.63,
            "range": "2.76",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.78, \"max_ms\": 5.8, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / markdownlint-cli2",
            "value": 684.94,
            "range": "127.65",
            "unit": "ms",
            "extra": "{\"min_ms\": 541.78, \"max_ms\": 786.91, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 4.05,
            "range": "3.71",
            "unit": "ms",
            "extra": "{\"min_ms\": 1.05, \"max_ms\": 8.2, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 245.39,
            "range": "47.53",
            "unit": "ms",
            "extra": "{\"min_ms\": 200.97, \"max_ms\": 295.52, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.9,
            "range": "0.4",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.61, \"max_ms\": 1.36, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 1.03,
            "range": "0.79",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.34, \"max_ms\": 1.88, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1771.32,
            "range": "10.35",
            "unit": "ms",
            "extra": "{\"min_ms\": 1759.93, \"max_ms\": 1780.15, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 21.55,
            "range": "4.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 19.02, \"max_ms\": 26.44, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 315.51,
            "range": "10.62",
            "unit": "ms",
            "extra": "{\"min_ms\": 306.14, \"max_ms\": 327.05, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0.69,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.61, \"max_ms\": 0.75, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0.99,
            "range": "0.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.74, \"max_ms\": 1.17, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1698.72,
            "range": "52.62",
            "unit": "ms",
            "extra": "{\"min_ms\": 1656.96, \"max_ms\": 1757.83, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 19.21,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 19.04, \"max_ms\": 19.3, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 324.41,
            "range": "5.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 321.16, \"max_ms\": 330.21, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.22,
            "range": "0.36",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.64, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0.85,
            "range": "0.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.52, \"max_ms\": 1.09, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1645.7,
            "range": "4.75",
            "unit": "ms",
            "extra": "{\"min_ms\": 1640.23, \"max_ms\": 1648.78, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 17.13,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 17.03, \"max_ms\": 17.22, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 309.59,
            "range": "6.3",
            "unit": "ms",
            "extra": "{\"min_ms\": 305.67, \"max_ms\": 316.85, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          }
        ]
      },
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
          "id": "12c2bacd3932c52125025437ee8e6f45e09296e9",
          "message": "bench: weekly results 2026-07-06",
          "timestamp": "2026-07-06T07:11:21Z",
          "url": "https://github.com/mohitmishra786/mdmend/commit/12c2bacd3932c52125025437ee8e6f45e09296e9"
        },
        "date": 1783321883271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 4.72,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.65, \"max_ms\": 4.81, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 8.73,
            "range": "0.26",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.44, \"max_ms\": 8.95, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 775.57,
            "range": "3.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 773.14, \"max_ms\": 779.1, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 9.88,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.77, \"max_ms\": 10.08, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 235.95,
            "range": "1.64",
            "unit": "ms",
            "extra": "{\"min_ms\": 234.19, \"max_ms\": 237.43, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.64,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.47, \"max_ms\": 3.72, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 3.98,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.86, \"max_ms\": 4.14, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 709.65,
            "range": "7.74",
            "unit": "ms",
            "extra": "{\"min_ms\": 700.77, \"max_ms\": 714.98, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 6.87,
            "range": "0.3",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.61, \"max_ms\": 7.2, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 252.29,
            "range": "4.96",
            "unit": "ms",
            "extra": "{\"min_ms\": 248.72, \"max_ms\": 257.96, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.64,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.53, \"max_ms\": 3.79, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 3.63,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.56, \"max_ms\": 3.68, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 687.53,
            "range": "10.35",
            "unit": "ms",
            "extra": "{\"min_ms\": 681.05, \"max_ms\": 699.46, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 4.77,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.71, \"max_ms\": 4.86, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 240.96,
            "range": "0.37",
            "unit": "ms",
            "extra": "{\"min_ms\": 240.59, \"max_ms\": 241.33, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.46,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.42, \"max_ms\": 3.53, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 7.27,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.19, \"max_ms\": 7.35, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 668.25,
            "range": "6.54",
            "unit": "ms",
            "extra": "{\"min_ms\": 660.76, \"max_ms\": 672.81, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 14.19,
            "range": "0.76",
            "unit": "ms",
            "extra": "{\"min_ms\": 13.43, \"max_ms\": 14.96, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 188.12,
            "range": "12.5",
            "unit": "ms",
            "extra": "{\"min_ms\": 180.71, \"max_ms\": 202.56, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 2.9,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.81, \"max_ms\": 2.97, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.28,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.19, \"max_ms\": 3.34, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 612.82,
            "range": "3.32",
            "unit": "ms",
            "extra": "{\"min_ms\": 610.33, \"max_ms\": 616.59, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 11.01,
            "range": "0.32",
            "unit": "ms",
            "extra": "{\"min_ms\": 10.79, \"max_ms\": 11.37, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 198.87,
            "range": "1.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 197.76, \"max_ms\": 199.85, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 3.78,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.67, \"max_ms\": 3.88, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 3.72,
            "range": "0.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.59, \"max_ms\": 3.99, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 588.76,
            "range": "5.83",
            "unit": "ms",
            "extra": "{\"min_ms\": 584.03, \"max_ms\": 595.27, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 3.32,
            "range": "0.16",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.22, \"max_ms\": 3.5, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 182.7,
            "range": "3.59",
            "unit": "ms",
            "extra": "{\"min_ms\": 178.58, \"max_ms\": 185.14, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 3.94,
            "range": "0.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.82, \"max_ms\": 4.13, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 8.16,
            "range": "0.3",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.82, \"max_ms\": 8.37, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 734.92,
            "range": "7.96",
            "unit": "ms",
            "extra": "{\"min_ms\": 726.58, \"max_ms\": 742.44, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 8.61,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.49, \"max_ms\": 8.77, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 215.29,
            "range": "0.66",
            "unit": "ms",
            "extra": "{\"min_ms\": 214.88, \"max_ms\": 216.05, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 3.08,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.98, \"max_ms\": 3.19, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.36,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.32, \"max_ms\": 3.38, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 700.32,
            "range": "14.81",
            "unit": "ms",
            "extra": "{\"min_ms\": 683.73, \"max_ms\": 712.21, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 6.3,
            "range": "0.65",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.88, \"max_ms\": 7.04, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 230.85,
            "range": "2.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 229.07, \"max_ms\": 233.02, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 3.02,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.0, \"max_ms\": 3.05, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 3.04,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.94, \"max_ms\": 3.19, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 652.51,
            "range": "12.68",
            "unit": "ms",
            "extra": "{\"min_ms\": 643.75, \"max_ms\": 667.05, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 4.08,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.94, \"max_ms\": 4.21, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 226.11,
            "range": "4.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 221.42, \"max_ms\": 229.1, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend lint",
            "value": 17.09,
            "range": "8.57",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.91, \"max_ms\": 26.01, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend fix",
            "value": 26.43,
            "range": "14.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 14.55, \"max_ms\": 42.05, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 1026.66,
            "range": "139.74",
            "unit": "ms",
            "extra": "{\"min_ms\": 879.16, \"max_ms\": 1157.07, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 33.79,
            "range": "8.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 24.55, \"max_ms\": 40.51, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 200.39,
            "range": "16.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 182.83, \"max_ms\": 214.83, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend lint",
            "value": 6.62,
            "range": "9.67",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 17.71, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend fix",
            "value": 0.63,
            "range": "1.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 1.89, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 815.55,
            "range": "29.56",
            "unit": "ms",
            "extra": "{\"min_ms\": 785.14, \"max_ms\": 844.17, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 5.33,
            "range": "8.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 14.66, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 290.29,
            "range": "60.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 227.99, \"max_ms\": 348.07, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 0.48,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.42, \"max_ms\": 0.57, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend fix",
            "value": 2.73,
            "range": "0.44",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.35, \"max_ms\": 3.22, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / markdownlint-cli2",
            "value": 804.52,
            "range": "84.57",
            "unit": "ms",
            "extra": "{\"min_ms\": 736.96, \"max_ms\": 899.37, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 3.68,
            "range": "0.62",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.3, \"max_ms\": 4.4, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 244.3,
            "range": "44.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 212.18, \"max_ms\": 294.63, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.49,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.38, \"max_ms\": 0.61, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 0.65,
            "range": "0.27",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.47, \"max_ms\": 0.96, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1503.36,
            "range": "34.3",
            "unit": "ms",
            "extra": "{\"min_ms\": 1471.04, \"max_ms\": 1539.34, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 16.71,
            "range": "0.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 16.45, \"max_ms\": 17.02, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 292.09,
            "range": "4.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 289.25, \"max_ms\": 296.75, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0.76,
            "range": "0.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.59, \"max_ms\": 0.93, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0.49,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.44, \"max_ms\": 0.56, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1483.92,
            "range": "9.55",
            "unit": "ms",
            "extra": "{\"min_ms\": 1473.12, \"max_ms\": 1491.25, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 16.98,
            "range": "0.36",
            "unit": "ms",
            "extra": "{\"min_ms\": 16.57, \"max_ms\": 17.25, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 293.6,
            "range": "5.96",
            "unit": "ms",
            "extra": "{\"min_ms\": 289.61, \"max_ms\": 300.45, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.62,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.5, \"max_ms\": 0.83, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0.57,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.44, \"max_ms\": 0.72, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1613.86,
            "range": "32.77",
            "unit": "ms",
            "extra": "{\"min_ms\": 1577.34, \"max_ms\": 1640.68, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 18.9,
            "range": "0.53",
            "unit": "ms",
            "extra": "{\"min_ms\": 18.4, \"max_ms\": 19.45, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 297.27,
            "range": "5.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 291.54, \"max_ms\": 301.77, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          }
        ]
      },
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
          "id": "4b6ce97e64f1c4b922ac441d3999c75df0eed346",
          "message": "bench: weekly results 2026-07-13",
          "timestamp": "2026-07-13T06:09:03Z",
          "url": "https://github.com/mohitmishra786/mdmend/commit/4b6ce97e64f1c4b922ac441d3999c75df0eed346"
        },
        "date": 1783922944983,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 4.39,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.3, \"max_ms\": 4.44, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 8.42,
            "range": "0.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.29, \"max_ms\": 8.67, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 809.15,
            "range": "11.27",
            "unit": "ms",
            "extra": "{\"min_ms\": 800.61, \"max_ms\": 821.93, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 10.1,
            "range": "0.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.78, \"max_ms\": 10.4, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 231.35,
            "range": "0.7",
            "unit": "ms",
            "extra": "{\"min_ms\": 230.64, \"max_ms\": 232.03, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.45,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.36, \"max_ms\": 3.51, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 3.81,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.77, \"max_ms\": 3.89, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 732.72,
            "range": "6.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 727.0, \"max_ms\": 738.97, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 6.65,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.59, \"max_ms\": 6.7, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 249.9,
            "range": "0.54",
            "unit": "ms",
            "extra": "{\"min_ms\": 249.42, \"max_ms\": 250.48, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.35,
            "range": "0.16",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.24, \"max_ms\": 3.53, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 3.34,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.25, \"max_ms\": 3.5, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 712.58,
            "range": "1.91",
            "unit": "ms",
            "extra": "{\"min_ms\": 710.58, \"max_ms\": 714.4, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 4.28,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.15, \"max_ms\": 4.44, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 234.86,
            "range": "2.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 232.59, \"max_ms\": 236.42, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.15,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.04, \"max_ms\": 3.24, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 6.75,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.63, \"max_ms\": 6.91, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 665.74,
            "range": "10.32",
            "unit": "ms",
            "extra": "{\"min_ms\": 654.34, \"max_ms\": 674.43, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 11.51,
            "range": "1.42",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.91, \"max_ms\": 12.63, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 177.19,
            "range": "5.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 174.15, \"max_ms\": 183.14, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 2.65,
            "range": "0.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.64, \"max_ms\": 2.66, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.1,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.04, \"max_ms\": 3.16, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 606.32,
            "range": "7.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 598.49, \"max_ms\": 612.42, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 8.98,
            "range": "0.94",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.98, \"max_ms\": 9.84, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 193.85,
            "range": "1.24",
            "unit": "ms",
            "extra": "{\"min_ms\": 192.66, \"max_ms\": 195.14, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 2.58,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.48, \"max_ms\": 2.67, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 2.56,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.54, \"max_ms\": 2.59, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 600.82,
            "range": "20.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 582.69, \"max_ms\": 622.62, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 3.08,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.03, \"max_ms\": 3.19, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 178.11,
            "range": "0.59",
            "unit": "ms",
            "extra": "{\"min_ms\": 177.44, \"max_ms\": 178.46, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 3.6,
            "range": "0.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.35, \"max_ms\": 3.73, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 7.97,
            "range": "0.48",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.45, \"max_ms\": 8.4, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 672.98,
            "range": "2.82",
            "unit": "ms",
            "extra": "{\"min_ms\": 669.74, \"max_ms\": 674.93, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 61.26,
            "range": "92.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.07, \"max_ms\": 167.53, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 185.37,
            "range": "4.93",
            "unit": "ms",
            "extra": "{\"min_ms\": 179.91, \"max_ms\": 189.49, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 3.14,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.99, \"max_ms\": 3.29, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.78,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.76, \"max_ms\": 3.79, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 621.33,
            "range": "13.95",
            "unit": "ms",
            "extra": "{\"min_ms\": 610.47, \"max_ms\": 637.06, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 6.58,
            "range": "0.76",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.9, \"max_ms\": 7.41, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 203.98,
            "range": "2.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 201.9, \"max_ms\": 206.27, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 3.11,
            "range": "0.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.82, \"max_ms\": 3.39, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 2.92,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.81, \"max_ms\": 3.04, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 620.41,
            "range": "20.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 601.71, \"max_ms\": 641.97, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 3.5,
            "range": "0.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.18, \"max_ms\": 3.81, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 188.4,
            "range": "3.35",
            "unit": "ms",
            "extra": "{\"min_ms\": 185.58, \"max_ms\": 192.11, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend lint",
            "value": 6.78,
            "range": "5.71",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.15, \"max_ms\": 13.36, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend fix",
            "value": 6.61,
            "range": "2.94",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.78, \"max_ms\": 9.64, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 835.07,
            "range": "25.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 813.47, \"max_ms\": 862.52, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 11.82,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 11.68, \"max_ms\": 11.98, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 227.9,
            "range": "41.77",
            "unit": "ms",
            "extra": "{\"min_ms\": 181.88, \"max_ms\": 263.42, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend lint",
            "value": 3.63,
            "range": "4.26",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 8.32, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend fix",
            "value": 3,
            "range": "5.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 8.99, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 1054.11,
            "range": "395.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 803.66, \"max_ms\": 1509.8, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 28.36,
            "range": "28.73",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.81, \"max_ms\": 61.35, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 234.95,
            "range": "57.51",
            "unit": "ms",
            "extra": "{\"min_ms\": 185.64, \"max_ms\": 298.13, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 24.14,
            "range": "22.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.79, \"max_ms\": 49.48, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend fix",
            "value": 4.97,
            "range": "2.94",
            "unit": "ms",
            "extra": "{\"min_ms\": 1.66, \"max_ms\": 7.27, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / markdownlint-cli2",
            "value": 757.45,
            "range": "36.54",
            "unit": "ms",
            "extra": "{\"min_ms\": 724.62, \"max_ms\": 796.81, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 9.61,
            "range": "12.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 1.06, \"max_ms\": 23.46, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 293.8,
            "range": "25.85",
            "unit": "ms",
            "extra": "{\"min_ms\": 267.69, \"max_ms\": 319.39, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.49,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.46, \"max_ms\": 0.54, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 0.62,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.51, \"max_ms\": 0.74, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1638.22,
            "range": "2.99",
            "unit": "ms",
            "extra": "{\"min_ms\": 1634.81, \"max_ms\": 1640.34, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 18.69,
            "range": "0.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 18.33, \"max_ms\": 18.89, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 308.69,
            "range": "5.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 303.54, \"max_ms\": 313.83, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0.51,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.48, \"max_ms\": 0.54, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0.57,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.5, \"max_ms\": 0.62, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1792.12,
            "range": "30.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 1763.41, \"max_ms\": 1823.28, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 22.9,
            "range": "0.32",
            "unit": "ms",
            "extra": "{\"min_ms\": 22.53, \"max_ms\": 23.1, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 315.08,
            "range": "7.48",
            "unit": "ms",
            "extra": "{\"min_ms\": 307.2, \"max_ms\": 322.1, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.68,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.64, \"max_ms\": 0.71, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0.62,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.57, \"max_ms\": 0.7, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1755.13,
            "range": "178.97",
            "unit": "ms",
            "extra": "{\"min_ms\": 1632.91, \"max_ms\": 1960.55, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 75.67,
            "range": "21.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 54.01, \"max_ms\": 96.45, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 333.43,
            "range": "23.52",
            "unit": "ms",
            "extra": "{\"min_ms\": 314.86, \"max_ms\": 359.87, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          }
        ]
      },
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
          "id": "691415fdb9c9ebbf304ffd438562d0572383e3cb",
          "message": "bench: weekly results 2026-07-20",
          "timestamp": "2026-07-20T06:09:22Z",
          "url": "https://github.com/mohitmishra786/mdmend/commit/691415fdb9c9ebbf304ffd438562d0572383e3cb"
        },
        "date": 1784527764276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 3.38,
            "range": "0.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.16, \"max_ms\": 3.58, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 7.2,
            "range": "0.62",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.5, \"max_ms\": 7.69, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 662.6,
            "range": "12.61",
            "unit": "ms",
            "extra": "{\"min_ms\": 652.57, \"max_ms\": 676.76, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 8.1,
            "range": "2.4",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.4, \"max_ms\": 10.84, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 190.08,
            "range": "1.68",
            "unit": "ms",
            "extra": "{\"min_ms\": 188.9, \"max_ms\": 192.0, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.14,
            "range": "0.26",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.95, \"max_ms\": 3.44, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 3.58,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.52, \"max_ms\": 3.7, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 584.95,
            "range": "19.97",
            "unit": "ms",
            "extra": "{\"min_ms\": 565.49, \"max_ms\": 605.4, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 6.16,
            "range": "0.52",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.84, \"max_ms\": 6.77, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 201.31,
            "range": "7.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 194.48, \"max_ms\": 208.97, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.1,
            "range": "0.45",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.7, \"max_ms\": 3.58, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 2.64,
            "range": "0.27",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.46, \"max_ms\": 2.95, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 553.49,
            "range": "4.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 549.26, \"max_ms\": 557.45, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 3.48,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.37, \"max_ms\": 3.65, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 188.81,
            "range": "3.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 185.13, \"max_ms\": 190.95, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 2.97,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.94, \"max_ms\": 2.99, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 6.47,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.42, \"max_ms\": 6.58, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 690.89,
            "range": "9.45",
            "unit": "ms",
            "extra": "{\"min_ms\": 680.2, \"max_ms\": 698.13, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 12.23,
            "range": "0.76",
            "unit": "ms",
            "extra": "{\"min_ms\": 11.39, \"max_ms\": 12.87, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 170.27,
            "range": "1.78",
            "unit": "ms",
            "extra": "{\"min_ms\": 169.0, \"max_ms\": 172.31, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 2.59,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.53, \"max_ms\": 2.64, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 2.89,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.85, \"max_ms\": 2.92, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 628.86,
            "range": "5.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 623.09, \"max_ms\": 631.9, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 10.87,
            "range": "0.59",
            "unit": "ms",
            "extra": "{\"min_ms\": 10.21, \"max_ms\": 11.34, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 181.72,
            "range": "2.33",
            "unit": "ms",
            "extra": "{\"min_ms\": 179.47, \"max_ms\": 184.13, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 2.4,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.37, \"max_ms\": 2.44, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 2.35,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.23, \"max_ms\": 2.44, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 613.49,
            "range": "10.16",
            "unit": "ms",
            "extra": "{\"min_ms\": 602.7, \"max_ms\": 622.87, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 2.98,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.93, \"max_ms\": 3.07, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 172.03,
            "range": "1.64",
            "unit": "ms",
            "extra": "{\"min_ms\": 170.38, \"max_ms\": 173.65, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 4.19,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.09, \"max_ms\": 4.29, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 8.79,
            "range": "0.59",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.39, \"max_ms\": 9.47, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 799.06,
            "range": "8.54",
            "unit": "ms",
            "extra": "{\"min_ms\": 789.45, \"max_ms\": 805.78, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 9.23,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.05, \"max_ms\": 9.33, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 237.76,
            "range": "3.69",
            "unit": "ms",
            "extra": "{\"min_ms\": 233.59, \"max_ms\": 240.64, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 3.2,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.11, \"max_ms\": 3.28, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.82,
            "range": "0.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.6, \"max_ms\": 4.12, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 736.62,
            "range": "11.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 728.37, \"max_ms\": 749.39, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 6.01,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.82, \"max_ms\": 6.16, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 252.09,
            "range": "5.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 246.4, \"max_ms\": 256.35, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 3.2,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.04, \"max_ms\": 3.33, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 3.01,
            "range": "0.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.82, \"max_ms\": 3.14, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 731.8,
            "range": "7.67",
            "unit": "ms",
            "extra": "{\"min_ms\": 725.5, \"max_ms\": 740.34, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 4.39,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.28, \"max_ms\": 4.55, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 232.76,
            "range": "2.36",
            "unit": "ms",
            "extra": "{\"min_ms\": 230.73, \"max_ms\": 235.35, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
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
            "value": 5.99,
            "range": "4.64",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.85, \"max_ms\": 11.32, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 926.57,
            "range": "27.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 895.17, \"max_ms\": 944.47, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 22.29,
            "range": "5.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 19.1, \"max_ms\": 28.27, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 224.35,
            "range": "38.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 183.46, \"max_ms\": 258.62, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
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
            "value": 722.67,
            "range": "69.58",
            "unit": "ms",
            "extra": "{\"min_ms\": 672.33, \"max_ms\": 802.07, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 0.28,
            "range": "0.49",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.85, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 185.08,
            "range": "24.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 159.2, \"max_ms\": 207.37, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 2.59,
            "range": "0.38",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.21, \"max_ms\": 2.97, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend fix",
            "value": 4,
            "range": "3.82",
            "unit": "ms",
            "extra": "{\"min_ms\": 1.31, \"max_ms\": 8.37, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / markdownlint-cli2",
            "value": 812.75,
            "range": "69.65",
            "unit": "ms",
            "extra": "{\"min_ms\": 734.98, \"max_ms\": 869.4, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 36.72,
            "range": "4.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 32.66, \"max_ms\": 40.67, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 211.17,
            "range": "8.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 201.78, \"max_ms\": 217.41, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.07,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.21, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1796.31,
            "range": "83.77",
            "unit": "ms",
            "extra": "{\"min_ms\": 1701.05, \"max_ms\": 1858.53, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 17.18,
            "range": "0.45",
            "unit": "ms",
            "extra": "{\"min_ms\": 16.9, \"max_ms\": 17.71, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 324.3,
            "range": "16.2",
            "unit": "ms",
            "extra": "{\"min_ms\": 314.61, \"max_ms\": 342.99, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0.26,
            "range": "0.46",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.79, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1717.54,
            "range": "25.2",
            "unit": "ms",
            "extra": "{\"min_ms\": 1691.85, \"max_ms\": 1742.2, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 16.88,
            "range": "0.44",
            "unit": "ms",
            "extra": "{\"min_ms\": 16.61, \"max_ms\": 17.39, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 338.36,
            "range": "22.85",
            "unit": "ms",
            "extra": "{\"min_ms\": 314.07, \"max_ms\": 359.42, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.38,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.33, \"max_ms\": 0.47, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0.18,
            "range": "0.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.16, \"max_ms\": 0.19, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1746.77,
            "range": "21.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 1723.59, \"max_ms\": 1764.98, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 16.95,
            "range": "0.43",
            "unit": "ms",
            "extra": "{\"min_ms\": 16.51, \"max_ms\": 17.36, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 308.56,
            "range": "3.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 305.18, \"max_ms\": 311.49, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          }
        ]
      },
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
          "id": "16e5f7d15d388feafee696f25bd6e31e81dc5701",
          "message": "bench: weekly results 2026-07-27",
          "timestamp": "2026-07-27T06:29:05Z",
          "url": "https://github.com/mohitmishra786/mdmend/commit/16e5f7d15d388feafee696f25bd6e31e81dc5701"
        },
        "date": 1785133748094,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 4.34,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.31, \"max_ms\": 4.39, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 8.7,
            "range": "0.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.49, \"max_ms\": 8.81, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 783.51,
            "range": "11.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 771.17, \"max_ms\": 793.39, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 13.44,
            "range": "0.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 13.22, \"max_ms\": 13.68, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 233.75,
            "range": "0.77",
            "unit": "ms",
            "extra": "{\"min_ms\": 232.92, \"max_ms\": 234.43, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.49,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.4, \"max_ms\": 3.59, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 3.85,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.73, \"max_ms\": 3.94, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 720.37,
            "range": "2.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 718.36, \"max_ms\": 722.47, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 10.07,
            "range": "0.44",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.71, \"max_ms\": 10.56, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 255.18,
            "range": "2.2",
            "unit": "ms",
            "extra": "{\"min_ms\": 253.34, \"max_ms\": 257.62, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.49,
            "range": "0.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.37, \"max_ms\": 3.71, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 3.46,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.31, \"max_ms\": 3.56, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 689.39,
            "range": "12.98",
            "unit": "ms",
            "extra": "{\"min_ms\": 677.02, \"max_ms\": 702.91, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 6.15,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.0, \"max_ms\": 6.35, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 243.34,
            "range": "2.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 241.11, \"max_ms\": 245.09, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.56,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.51, \"max_ms\": 3.59, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 7.34,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.22, \"max_ms\": 7.46, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 685.93,
            "range": "16.7",
            "unit": "ms",
            "extra": "{\"min_ms\": 666.86, \"max_ms\": 697.96, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 9.69,
            "range": "0.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.47, \"max_ms\": 9.81, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 183.53,
            "range": "2.25",
            "unit": "ms",
            "extra": "{\"min_ms\": 180.98, \"max_ms\": 185.21, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 2.89,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.78, \"max_ms\": 3.06, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.15,
            "range": "0.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.15, \"max_ms\": 3.16, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 630.58,
            "range": "5.24",
            "unit": "ms",
            "extra": "{\"min_ms\": 624.69, \"max_ms\": 634.75, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 8.12,
            "range": "0.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.86, \"max_ms\": 8.46, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 196.15,
            "range": "2.74",
            "unit": "ms",
            "extra": "{\"min_ms\": 193.58, \"max_ms\": 199.03, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 2.69,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.62, \"max_ms\": 2.81, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 2.61,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.57, \"max_ms\": 2.69, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 599.86,
            "range": "9.55",
            "unit": "ms",
            "extra": "{\"min_ms\": 590.33, \"max_ms\": 609.44, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 4.46,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.33, \"max_ms\": 4.62, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 182.05,
            "range": "0.62",
            "unit": "ms",
            "extra": "{\"min_ms\": 181.43, \"max_ms\": 182.67, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 3.17,
            "range": "0.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.01, \"max_ms\": 3.43, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 7.2,
            "range": "0.3",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.9, \"max_ms\": 7.51, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 736.98,
            "range": "7.57",
            "unit": "ms",
            "extra": "{\"min_ms\": 731.15, \"max_ms\": 745.54, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 9.38,
            "range": "0.3",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.05, \"max_ms\": 9.64, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 192.98,
            "range": "0.56",
            "unit": "ms",
            "extra": "{\"min_ms\": 192.48, \"max_ms\": 193.58, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 2.73,
            "range": "0.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.53, \"max_ms\": 3.05, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.08,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.03, \"max_ms\": 3.16, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 676.72,
            "range": "2.75",
            "unit": "ms",
            "extra": "{\"min_ms\": 674.5, \"max_ms\": 679.8, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 9.09,
            "range": "1.51",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.05, \"max_ms\": 10.82, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 207.19,
            "range": "0.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 206.95, \"max_ms\": 207.52, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 2.69,
            "range": "0.26",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.46, \"max_ms\": 2.97, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 2.52,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.5, \"max_ms\": 2.56, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 667.04,
            "range": "8.61",
            "unit": "ms",
            "extra": "{\"min_ms\": 658.23, \"max_ms\": 675.45, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 4.64,
            "range": "0.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.41, \"max_ms\": 4.94, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 195.38,
            "range": "0.38",
            "unit": "ms",
            "extra": "{\"min_ms\": 194.99, \"max_ms\": 195.75, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend lint",
            "value": 5.41,
            "range": "2.63",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.76, \"max_ms\": 8.45, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend fix",
            "value": 6.87,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.78, \"max_ms\": 6.96, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 520.7,
            "range": "3.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 518.2, \"max_ms\": 524.18, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 15.02,
            "range": "0.26",
            "unit": "ms",
            "extra": "{\"min_ms\": 14.83, \"max_ms\": 15.32, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 153.75,
            "range": "12.48",
            "unit": "ms",
            "extra": "{\"min_ms\": 139.92, \"max_ms\": 164.18, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend lint",
            "value": 3.26,
            "range": "0.53",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.86, \"max_ms\": 3.87, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend fix",
            "value": 2.9,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.81, \"max_ms\": 3.05, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 468.27,
            "range": "3.98",
            "unit": "ms",
            "extra": "{\"min_ms\": 463.96, \"max_ms\": 471.8, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 9.96,
            "range": "0.71",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.39, \"max_ms\": 10.75, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 157.01,
            "range": "18.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 143.47, \"max_ms\": 177.59, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 3.76,
            "range": "0.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.52, \"max_ms\": 4.07, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend fix",
            "value": 3.53,
            "range": "0.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.28, \"max_ms\": 3.67, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / markdownlint-cli2",
            "value": 435.81,
            "range": "2.27",
            "unit": "ms",
            "extra": "{\"min_ms\": 434.26, \"max_ms\": 438.42, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 6.9,
            "range": "0.34",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.52, \"max_ms\": 7.15, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 136.81,
            "range": "0.74",
            "unit": "ms",
            "extra": "{\"min_ms\": 135.99, \"max_ms\": 137.42, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.68,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.61, \"max_ms\": 0.71, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 0.67,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.49, \"max_ms\": 0.85, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1668.52,
            "range": "32.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 1633.93, \"max_ms\": 1697.48, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 22.26,
            "range": "0.34",
            "unit": "ms",
            "extra": "{\"min_ms\": 21.93, \"max_ms\": 22.61, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 316.5,
            "range": "13.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 301.43, \"max_ms\": 324.17, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0.63,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.55, \"max_ms\": 0.7, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0.82,
            "range": "0.24",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.68, \"max_ms\": 1.1, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1705.29,
            "range": "32.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 1674.2, \"max_ms\": 1738.23, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 19,
            "range": "0.51",
            "unit": "ms",
            "extra": "{\"min_ms\": 18.49, \"max_ms\": 19.52, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 304.72,
            "range": "3.27",
            "unit": "ms",
            "extra": "{\"min_ms\": 301.52, \"max_ms\": 308.06, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.59,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.51, \"max_ms\": 0.68, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0.58,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.5, \"max_ms\": 0.7, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1669.59,
            "range": "50.95",
            "unit": "ms",
            "extra": "{\"min_ms\": 1618.97, \"max_ms\": 1720.87, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 20.6,
            "range": "0.35",
            "unit": "ms",
            "extra": "{\"min_ms\": 20.32, \"max_ms\": 20.99, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 309.25,
            "range": "8.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 302.02, \"max_ms\": 318.11, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          }
        ]
      },
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
          "id": "16e5f7d15d388feafee696f25bd6e31e81dc5701",
          "message": "bench: weekly results 2026-07-27",
          "timestamp": "2026-07-27T06:29:05Z",
          "url": "https://github.com/mohitmishra786/mdmend/commit/16e5f7d15d388feafee696f25bd6e31e81dc5701"
        },
        "date": 1785738070094,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 4.73,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.65, \"max_ms\": 4.86, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 8.76,
            "range": "0.4",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.44, \"max_ms\": 9.21, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 794.99,
            "range": "2.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 793.06, \"max_ms\": 797.24, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 13.46,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 13.38, \"max_ms\": 13.55, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 237.58,
            "range": "3.87",
            "unit": "ms",
            "extra": "{\"min_ms\": 234.0, \"max_ms\": 241.69, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.56,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.51, \"max_ms\": 3.67, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 3.92,
            "range": "0.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.75, \"max_ms\": 4.15, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 735.72,
            "range": "12.24",
            "unit": "ms",
            "extra": "{\"min_ms\": 724.36, \"max_ms\": 748.68, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 9.89,
            "range": "0.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.67, \"max_ms\": 10.05, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 252.98,
            "range": "1.35",
            "unit": "ms",
            "extra": "{\"min_ms\": 251.65, \"max_ms\": 254.35, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.7,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.57, \"max_ms\": 3.86, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 3.51,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.39, \"max_ms\": 3.61, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 718.77,
            "range": "6.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 711.83, \"max_ms\": 723.14, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 6.26,
            "range": "0.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.07, \"max_ms\": 6.45, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 238.47,
            "range": "1.66",
            "unit": "ms",
            "extra": "{\"min_ms\": 236.81, \"max_ms\": 240.13, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.28,
            "range": "0.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.08, \"max_ms\": 3.5, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 7.14,
            "range": "0.24",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.86, \"max_ms\": 7.3, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 694.16,
            "range": "4.96",
            "unit": "ms",
            "extra": "{\"min_ms\": 688.47, \"max_ms\": 697.55, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 9.35,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.2, \"max_ms\": 9.46, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 188.44,
            "range": "1.45",
            "unit": "ms",
            "extra": "{\"min_ms\": 186.97, \"max_ms\": 189.88, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 3.01,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.86, \"max_ms\": 3.15, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.37,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.31, \"max_ms\": 3.46, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 641.76,
            "range": "12.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 631.43, \"max_ms\": 655.26, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 7.62,
            "range": "0.58",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.28, \"max_ms\": 8.28, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 199.78,
            "range": "1.79",
            "unit": "ms",
            "extra": "{\"min_ms\": 198.68, \"max_ms\": 201.84, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 3.05,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.01, \"max_ms\": 3.1, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 2.96,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.9, \"max_ms\": 3.03, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 624.46,
            "range": "12.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 614.95, \"max_ms\": 638.23, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 4.84,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.79, \"max_ms\": 4.89, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 187.13,
            "range": "3.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 183.8, \"max_ms\": 189.96, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 3.87,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.67, \"max_ms\": 4.03, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 8.86,
            "range": "1.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.84, \"max_ms\": 9.91, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 777.96,
            "range": "1.85",
            "unit": "ms",
            "extra": "{\"min_ms\": 776.68, \"max_ms\": 780.08, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 11.73,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 11.65, \"max_ms\": 11.78, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 226.8,
            "range": "1.61",
            "unit": "ms",
            "extra": "{\"min_ms\": 225.53, \"max_ms\": 228.62, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 3.11,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.01, \"max_ms\": 3.28, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.48,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.43, \"max_ms\": 3.56, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 752.66,
            "range": "2.5",
            "unit": "ms",
            "extra": "{\"min_ms\": 750.03, \"max_ms\": 755.01, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 9.85,
            "range": "1.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.88, \"max_ms\": 11.12, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 235.75,
            "range": "3.34",
            "unit": "ms",
            "extra": "{\"min_ms\": 231.93, \"max_ms\": 238.16, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 3.12,
            "range": "0.16",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.99, \"max_ms\": 3.3, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 3.14,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.07, \"max_ms\": 3.22, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 683.1,
            "range": "9.67",
            "unit": "ms",
            "extra": "{\"min_ms\": 677.47, \"max_ms\": 694.26, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 5,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.92, \"max_ms\": 5.1, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 224.2,
            "range": "1.72",
            "unit": "ms",
            "extra": "{\"min_ms\": 222.31, \"max_ms\": 225.69, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend lint",
            "value": 4.08,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.98, \"max_ms\": 4.18, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend fix",
            "value": 7.12,
            "range": "0.59",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.45, \"max_ms\": 7.51, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 614.6,
            "range": "98.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 557.56, \"max_ms\": 727.91, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 17.22,
            "range": "0.79",
            "unit": "ms",
            "extra": "{\"min_ms\": 16.34, \"max_ms\": 17.86, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 174.88,
            "range": "7.74",
            "unit": "ms",
            "extra": "{\"min_ms\": 165.97, \"max_ms\": 180.0, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend lint",
            "value": 3.87,
            "range": "0.47",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.36, \"max_ms\": 4.28, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend fix",
            "value": 7.57,
            "range": "5.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.57, \"max_ms\": 13.48, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 607.28,
            "range": "28.91",
            "unit": "ms",
            "extra": "{\"min_ms\": 578.11, \"max_ms\": 635.94, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 9.16,
            "range": "1.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.27, \"max_ms\": 10.26, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 145.79,
            "range": "15.82",
            "unit": "ms",
            "extra": "{\"min_ms\": 129.77, \"max_ms\": 161.41, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 4.4,
            "range": "0.44",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.9, \"max_ms\": 4.67, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend fix",
            "value": 4.9,
            "range": "0.91",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.92, \"max_ms\": 5.72, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / markdownlint-cli2",
            "value": 608.92,
            "range": "52.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 551.52, \"max_ms\": 653.01, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 9.5,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.44, \"max_ms\": 9.54, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 192.98,
            "range": "28.67",
            "unit": "ms",
            "extra": "{\"min_ms\": 176.14, \"max_ms\": 226.08, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.57,
            "range": "0.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.27, \"max_ms\": 0.85, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 0.57,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.51, \"max_ms\": 0.63, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1237.1,
            "range": "55.38",
            "unit": "ms",
            "extra": "{\"min_ms\": 1185.36, \"max_ms\": 1295.51, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 17.76,
            "range": "3.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 15.24, \"max_ms\": 21.16, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 236.61,
            "range": "2.32",
            "unit": "ms",
            "extra": "{\"min_ms\": 234.25, \"max_ms\": 238.89, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0.79,
            "range": "0.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.58, \"max_ms\": 1.04, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0.64,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.53, \"max_ms\": 0.78, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1217.89,
            "range": "12.41",
            "unit": "ms",
            "extra": "{\"min_ms\": 1204.65, \"max_ms\": 1229.24, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 15.62,
            "range": "0.35",
            "unit": "ms",
            "extra": "{\"min_ms\": 15.32, \"max_ms\": 16.0, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 248.91,
            "range": "3.68",
            "unit": "ms",
            "extra": "{\"min_ms\": 246.03, \"max_ms\": 253.05, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.89,
            "range": "0.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.64, \"max_ms\": 1.08, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0.44,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.3, \"max_ms\": 0.51, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1266.38,
            "range": "29.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 1233.06, \"max_ms\": 1288.06, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 15.98,
            "range": "0.46",
            "unit": "ms",
            "extra": "{\"min_ms\": 15.63, \"max_ms\": 16.5, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 245.07,
            "range": "4.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 241.98, \"max_ms\": 249.86, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          }
        ]
      },
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
          "id": "a6835d05b1e6534bcbf370d32862854187dc391d",
          "message": "bench: weekly results 2026-08-10",
          "timestamp": "2026-08-10T04:31:54Z",
          "url": "https://github.com/mohitmishra786/mdmend/commit/a6835d05b1e6534bcbf370d32862854187dc391d"
        },
        "date": 1786336316914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 4.43,
            "range": "0.19",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.23, \"max_ms\": 4.62, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 9,
            "range": "0.69",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.56, \"max_ms\": 9.79, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 828.06,
            "range": "10.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 816.25, \"max_ms\": 835.19, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 15.45,
            "range": "0.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 15.1, \"max_ms\": 15.7, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 247.46,
            "range": "3.57",
            "unit": "ms",
            "extra": "{\"min_ms\": 245.09, \"max_ms\": 251.56, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.68,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.49, \"max_ms\": 3.85, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 3.99,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.87, \"max_ms\": 4.12, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 740.28,
            "range": "4.54",
            "unit": "ms",
            "extra": "{\"min_ms\": 735.18, \"max_ms\": 743.86, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 9.32,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.21, \"max_ms\": 9.45, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 261.81,
            "range": "3.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 258.56, \"max_ms\": 264.88, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.53,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.42, \"max_ms\": 3.71, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 3.51,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.42, \"max_ms\": 3.58, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 714.45,
            "range": "9.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 704.73, \"max_ms\": 723.24, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 6.47,
            "range": "0.52",
            "unit": "ms",
            "extra": "{\"min_ms\": 6.14, \"max_ms\": 7.07, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 248.71,
            "range": "5.26",
            "unit": "ms",
            "extra": "{\"min_ms\": 243.03, \"max_ms\": 253.41, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.44,
            "range": "0.1",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.33, \"max_ms\": 3.52, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 7.29,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.19, \"max_ms\": 7.36, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 728.65,
            "range": "5.76",
            "unit": "ms",
            "extra": "{\"min_ms\": 724.24, \"max_ms\": 735.16, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 10.03,
            "range": "0.32",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.68, \"max_ms\": 10.29, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 188.17,
            "range": "1.57",
            "unit": "ms",
            "extra": "{\"min_ms\": 186.36, \"max_ms\": 189.2, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 3.04,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.02, \"max_ms\": 3.07, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.51,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.48, \"max_ms\": 3.53, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 642.22,
            "range": "9.37",
            "unit": "ms",
            "extra": "{\"min_ms\": 632.57, \"max_ms\": 651.29, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 8.35,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.23, \"max_ms\": 8.55, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 204.37,
            "range": "0.56",
            "unit": "ms",
            "extra": "{\"min_ms\": 203.8, \"max_ms\": 204.92, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 2.95,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.89, \"max_ms\": 3.04, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 3.05,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.95, \"max_ms\": 3.17, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 623.9,
            "range": "6.86",
            "unit": "ms",
            "extra": "{\"min_ms\": 616.0, \"max_ms\": 628.31, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 5.08,
            "range": "0.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.04, \"max_ms\": 5.15, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 188.55,
            "range": "2.84",
            "unit": "ms",
            "extra": "{\"min_ms\": 186.31, \"max_ms\": 191.75, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 4.27,
            "range": "0.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.03, \"max_ms\": 4.42, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 8.57,
            "range": "0.32",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.21, \"max_ms\": 8.8, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 832.22,
            "range": "6.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 825.74, \"max_ms\": 838.34, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 12.18,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 12.07, \"max_ms\": 12.3, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 228.49,
            "range": "2.76",
            "unit": "ms",
            "extra": "{\"min_ms\": 226.37, \"max_ms\": 231.61, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 3.44,
            "range": "0.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.39, \"max_ms\": 3.46, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 4.15,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.1, \"max_ms\": 4.23, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 768.72,
            "range": "17.39",
            "unit": "ms",
            "extra": "{\"min_ms\": 749.08, \"max_ms\": 782.15, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 11.02,
            "range": "2.69",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.23, \"max_ms\": 14.11, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 245.34,
            "range": "5.87",
            "unit": "ms",
            "extra": "{\"min_ms\": 240.25, \"max_ms\": 251.76, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 3.12,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.03, \"max_ms\": 3.19, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 3.12,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.02, \"max_ms\": 3.18, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 726.14,
            "range": "8.61",
            "unit": "ms",
            "extra": "{\"min_ms\": 716.42, \"max_ms\": 732.83, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 5.68,
            "range": "0.25",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.46, \"max_ms\": 5.95, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 224.98,
            "range": "1.48",
            "unit": "ms",
            "extra": "{\"min_ms\": 223.59, \"max_ms\": 226.53, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend lint",
            "value": 3.45,
            "range": "0.51",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.86, \"max_ms\": 3.8, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / mdmend fix",
            "value": 8.9,
            "range": "3.33",
            "unit": "ms",
            "extra": "{\"min_ms\": 5.56, \"max_ms\": 12.22, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 1080.32,
            "range": "192.6",
            "unit": "ms",
            "extra": "{\"min_ms\": 942.9, \"max_ms\": 1300.46, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 19.98,
            "range": "3.55",
            "unit": "ms",
            "extra": "{\"min_ms\": 15.98, \"max_ms\": 22.75, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 264.76,
            "range": "51.48",
            "unit": "ms",
            "extra": "{\"min_ms\": 209.45, \"max_ms\": 311.29, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend lint",
            "value": 3.51,
            "range": "0.59",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.12, \"max_ms\": 4.19, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend fix",
            "value": 8.31,
            "range": "4.63",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.08, \"max_ms\": 11.87, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 758.3,
            "range": "51.39",
            "unit": "ms",
            "extra": "{\"min_ms\": 701.5, \"max_ms\": 801.58, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 16.97,
            "range": "4.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 12.77, \"max_ms\": 20.8, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 232.71,
            "range": "8.57",
            "unit": "ms",
            "extra": "{\"min_ms\": 223.02, \"max_ms\": 239.3, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 5.82,
            "range": "2.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.45, \"max_ms\": 7.36, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend fix",
            "value": 4.36,
            "range": "0.45",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.87, \"max_ms\": 4.76, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / markdownlint-cli2",
            "value": 1104.93,
            "range": "146.69",
            "unit": "ms",
            "extra": "{\"min_ms\": 954.68, \"max_ms\": 1247.78, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 12.74,
            "range": "2.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 11.53, \"max_ms\": 15.1, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 367.48,
            "range": "98.7",
            "unit": "ms",
            "extra": "{\"min_ms\": 289.48, \"max_ms\": 478.44, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.66,
            "range": "0.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.34, \"max_ms\": 0.9, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 0.47,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.32, \"max_ms\": 0.56, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1514.79,
            "range": "6.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 1507.63, \"max_ms\": 1518.71, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 21.26,
            "range": "0.32",
            "unit": "ms",
            "extra": "{\"min_ms\": 21.05, \"max_ms\": 21.62, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 310.16,
            "range": "6.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 304.97, \"max_ms\": 317.16, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1530.37,
            "range": "8.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 1522.9, \"max_ms\": 1538.81, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 20.55,
            "range": "1.67",
            "unit": "ms",
            "extra": "{\"min_ms\": 18.85, \"max_ms\": 22.17, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 322.56,
            "range": "8.88",
            "unit": "ms",
            "extra": "{\"min_ms\": 313.18, \"max_ms\": 330.84, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.98,
            "range": "0.32",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.63, \"max_ms\": 1.25, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1614.42,
            "range": "104.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 1534.98, \"max_ms\": 1732.36, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 18.6,
            "range": "0.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 18.46, \"max_ms\": 18.8, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 308.61,
            "range": "2.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 306.41, \"max_ms\": 310.57, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          }
        ]
      },
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
          "id": "de86d70ca0091997e5767042beb44bf7ff6c2fd5",
          "message": "bench: weekly results 2026-08-17",
          "timestamp": "2026-08-17T03:49:53Z",
          "url": "https://github.com/mohitmishra786/mdmend/commit/de86d70ca0091997e5767042beb44bf7ff6c2fd5"
        },
        "date": 1786938595655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "linux-22.04-x64 / medium / mdmend lint",
            "value": 3.81,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.63, \"max_ms\": 3.99, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / mdmend fix",
            "value": 8.31,
            "range": "0.23",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.05, \"max_ms\": 8.51, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / markdownlint-cli2",
            "value": 739.13,
            "range": "18.81",
            "unit": "ms",
            "extra": "{\"min_ms\": 717.41, \"max_ms\": 750.36, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / rumdl check",
            "value": 9.93,
            "range": "0.75",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.35, \"max_ms\": 10.78, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / medium / pymarkdown scan",
            "value": 212.02,
            "range": "0.41",
            "unit": "ms",
            "extra": "{\"min_ms\": 211.63, \"max_ms\": 212.45, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend lint",
            "value": 3.4,
            "range": "0.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.26, \"max_ms\": 3.59, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / mdmend fix",
            "value": 3.6,
            "range": "0.02",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.57, \"max_ms\": 3.62, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / small / markdownlint-cli2",
            "value": 715.16,
            "range": "53.41",
            "unit": "ms",
            "extra": "{\"min_ms\": 679.17, \"max_ms\": 776.52, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / small / rumdl check",
            "value": 7.92,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.83, \"max_ms\": 8.07, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / small / pymarkdown scan",
            "value": 228.82,
            "range": "1.98",
            "unit": "ms",
            "extra": "{\"min_ms\": 226.65, \"max_ms\": 230.52, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend lint",
            "value": 3.24,
            "range": "0.21",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.0, \"max_ms\": 3.38, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / mdmend fix",
            "value": 3.11,
            "range": "0.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.98, \"max_ms\": 3.3, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / markdownlint-cli2",
            "value": 634.86,
            "range": "9.62",
            "unit": "ms",
            "extra": "{\"min_ms\": 627.39, \"max_ms\": 645.72, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / rumdl check",
            "value": 5.06,
            "range": "0.28",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.8, \"max_ms\": 5.36, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-22.04-x64 / stress / pymarkdown scan",
            "value": 209.8,
            "range": "1.04",
            "unit": "ms",
            "extra": "{\"min_ms\": 208.71, \"max_ms\": 210.78, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend lint",
            "value": 3.59,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.44, \"max_ms\": 3.68, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / mdmend fix",
            "value": 7.25,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.16, \"max_ms\": 7.31, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / medium / markdownlint-cli2",
            "value": 683.66,
            "range": "5.84",
            "unit": "ms",
            "extra": "{\"min_ms\": 679.0, \"max_ms\": 690.21, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / medium / rumdl check",
            "value": 9.07,
            "range": "0.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.9, \"max_ms\": 9.26, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / medium / pymarkdown scan",
            "value": 184.07,
            "range": "0.63",
            "unit": "ms",
            "extra": "{\"min_ms\": 183.57, \"max_ms\": 184.78, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend lint",
            "value": 2.72,
            "range": "0.03",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.68, \"max_ms\": 2.74, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / mdmend fix",
            "value": 3.11,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.94, \"max_ms\": 3.2, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / small / markdownlint-cli2",
            "value": 620.2,
            "range": "5.56",
            "unit": "ms",
            "extra": "{\"min_ms\": 616.77, \"max_ms\": 626.62, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / small / rumdl check",
            "value": 8.2,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.09, \"max_ms\": 8.32, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / small / pymarkdown scan",
            "value": 195.78,
            "range": "0.91",
            "unit": "ms",
            "extra": "{\"min_ms\": 194.83, \"max_ms\": 196.64, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend lint",
            "value": 2.82,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.75, \"max_ms\": 2.95, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / mdmend fix",
            "value": 2.92,
            "range": "0.05",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.89, \"max_ms\": 2.98, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-arm64 / stress / markdownlint-cli2",
            "value": 599.12,
            "range": "4.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 594.97, \"max_ms\": 602.96, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-arm64 / stress / rumdl check",
            "value": 4.84,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.75, \"max_ms\": 4.99, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-arm64 / stress / pymarkdown scan",
            "value": 185.66,
            "range": "0.72",
            "unit": "ms",
            "extra": "{\"min_ms\": 184.99, \"max_ms\": 186.41, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend lint",
            "value": 3.91,
            "range": "0.44",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.41, \"max_ms\": 4.22, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / mdmend fix",
            "value": 8.29,
            "range": "0.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.11, \"max_ms\": 8.63, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / medium / markdownlint-cli2",
            "value": 655.62,
            "range": "7.31",
            "unit": "ms",
            "extra": "{\"min_ms\": 647.65, \"max_ms\": 661.99, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "linux-x64 / medium / rumdl check",
            "value": 10.16,
            "range": "0.15",
            "unit": "ms",
            "extra": "{\"min_ms\": 9.99, \"max_ms\": 10.29, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / medium / pymarkdown scan",
            "value": 191.34,
            "range": "0.9",
            "unit": "ms",
            "extra": "{\"min_ms\": 190.63, \"max_ms\": 192.35, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "linux-x64 / small / mdmend lint",
            "value": 3.01,
            "range": "0.22",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.78, \"max_ms\": 3.2, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / mdmend fix",
            "value": 3.42,
            "range": "0.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 3.32, \"max_ms\": 3.49, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / small / markdownlint-cli2",
            "value": 606.92,
            "range": "4.73",
            "unit": "ms",
            "extra": "{\"min_ms\": 602.17, \"max_ms\": 611.64, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "linux-x64 / small / rumdl check",
            "value": 11.68,
            "range": "3.06",
            "unit": "ms",
            "extra": "{\"min_ms\": 8.31, \"max_ms\": 14.28, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / small / pymarkdown scan",
            "value": 206.99,
            "range": "3.27",
            "unit": "ms",
            "extra": "{\"min_ms\": 204.5, \"max_ms\": 210.7, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend lint",
            "value": 3.22,
            "range": "0.36",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.83, \"max_ms\": 3.53, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend lint /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / mdmend fix",
            "value": 2.69,
            "range": "0.11",
            "unit": "ms",
            "extra": "{\"min_ms\": 2.59, \"max_ms\": 2.81, \"command\": \"/home/runner/work/mdmend/mdmend/mdmend fix /home/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "linux-x64 / stress / markdownlint-cli2",
            "value": 567.51,
            "range": "5.26",
            "unit": "ms",
            "extra": "{\"min_ms\": 564.27, \"max_ms\": 573.58, \"command\": \"npx --yes markdownlint-cli2 /home/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "linux-x64 / stress / rumdl check",
            "value": 4.9,
            "range": "0.24",
            "unit": "ms",
            "extra": "{\"min_ms\": 4.63, \"max_ms\": 5.1, \"command\": \"rumdl check /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "linux-x64 / stress / pymarkdown scan",
            "value": 191.43,
            "range": "0.8",
            "unit": "ms",
            "extra": "{\"min_ms\": 190.7, \"max_ms\": 192.28, \"command\": \"pymarkdown scan /home/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
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
            "value": 0.19,
            "range": "0.33",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.57, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / medium / markdownlint-cli2",
            "value": 784.24,
            "range": "15.36",
            "unit": "ms",
            "extra": "{\"min_ms\": 769.27, \"max_ms\": 799.95, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / medium / rumdl check",
            "value": 0,
            "range": "0.0",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.0, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / medium / pymarkdown scan",
            "value": 174.14,
            "range": "2.09",
            "unit": "ms",
            "extra": "{\"min_ms\": 172.85, \"max_ms\": 176.55, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend lint",
            "value": 17.98,
            "range": "5.79",
            "unit": "ms",
            "extra": "{\"min_ms\": 12.37, \"max_ms\": 23.94, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / mdmend fix",
            "value": 2.87,
            "range": "4.97",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 8.61, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / small / markdownlint-cli2",
            "value": 1130.13,
            "range": "118.49",
            "unit": "ms",
            "extra": "{\"min_ms\": 1016.13, \"max_ms\": 1252.66, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / small / rumdl check",
            "value": 0.94,
            "range": "0.86",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 1.68, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / small / pymarkdown scan",
            "value": 313.46,
            "range": "27.67",
            "unit": "ms",
            "extra": "{\"min_ms\": 288.12, \"max_ms\": 342.98, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend lint",
            "value": 0.07,
            "range": "0.12",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 0.2, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend lint /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / mdmend fix",
            "value": 0.78,
            "range": "0.68",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.0, \"max_ms\": 1.19, \"command\": \"/Users/runner/work/mdmend/mdmend/mdmend fix /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "macos-arm64 / stress / markdownlint-cli2",
            "value": 678.69,
            "range": "97.49",
            "unit": "ms",
            "extra": "{\"min_ms\": 566.91, \"max_ms\": 746.18, \"command\": \"npx --yes markdownlint-cli2 /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "macos-arm64 / stress / rumdl check",
            "value": 12.98,
            "range": "7.63",
            "unit": "ms",
            "extra": "{\"min_ms\": 7.34, \"max_ms\": 21.66, \"command\": \"rumdl check /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "macos-arm64 / stress / pymarkdown scan",
            "value": 253.18,
            "range": "31.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 232.61, \"max_ms\": 288.85, \"command\": \"pymarkdown scan /Users/runner/work/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend lint",
            "value": 0.64,
            "range": "0.13",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.51, \"max_ms\": 0.75, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / mdmend fix",
            "value": 2.21,
            "range": "0.29",
            "unit": "ms",
            "extra": "{\"min_ms\": 1.99, \"max_ms\": 2.53, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / medium / markdownlint-cli2",
            "value": 1601.71,
            "range": "16.26",
            "unit": "ms",
            "extra": "{\"min_ms\": 1584.33, \"max_ms\": 1616.56, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/**/*.md\"}"
          },
          {
            "name": "windows-x64 / medium / rumdl check",
            "value": 18.53,
            "range": "0.36",
            "unit": "ms",
            "extra": "{\"min_ms\": 18.19, \"max_ms\": 18.91, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / medium / pymarkdown scan",
            "value": 302.23,
            "range": "1.38",
            "unit": "ms",
            "extra": "{\"min_ms\": 300.64, \"max_ms\": 303.1, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata\"}"
          },
          {
            "name": "windows-x64 / small / mdmend lint",
            "value": 0.49,
            "range": "0.08",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.44, \"max_ms\": 0.59, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/corpus --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / mdmend fix",
            "value": 0.49,
            "range": "0.07",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.41, \"max_ms\": 0.55, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/corpus --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / small / markdownlint-cli2",
            "value": 1812.28,
            "range": "133.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 1693.93, \"max_ms\": 1956.49, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/corpus/**/*.md\"}"
          },
          {
            "name": "windows-x64 / small / rumdl check",
            "value": 23.65,
            "range": "4.18",
            "unit": "ms",
            "extra": "{\"min_ms\": 20.64, \"max_ms\": 28.42, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / small / pymarkdown scan",
            "value": 304.51,
            "range": "5.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 300.97, \"max_ms\": 310.25, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/corpus\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend lint",
            "value": 0.52,
            "range": "0.01",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.51, \"max_ms\": 0.52, \"command\": \"D:/a/mdmend/mdmend/mdmend lint /d/a/mdmend/mdmend/testdata/benchmark/stress --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / mdmend fix",
            "value": 0.58,
            "range": "0.14",
            "unit": "ms",
            "extra": "{\"min_ms\": 0.43, \"max_ms\": 0.68, \"command\": \"D:/a/mdmend/mdmend/mdmend fix /d/a/mdmend/mdmend/testdata/benchmark/stress --dry-run --quiet --exit-zero\"}"
          },
          {
            "name": "windows-x64 / stress / markdownlint-cli2",
            "value": 1585.1,
            "range": "2.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 1583.02, \"max_ms\": 1587.34, \"command\": \"npx --yes markdownlint-cli2 /d/a/mdmend/mdmend/testdata/benchmark/stress/**/*.md\"}"
          },
          {
            "name": "windows-x64 / stress / rumdl check",
            "value": 18.75,
            "range": "0.17",
            "unit": "ms",
            "extra": "{\"min_ms\": 18.56, \"max_ms\": 18.88, \"command\": \"rumdl check /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          },
          {
            "name": "windows-x64 / stress / pymarkdown scan",
            "value": 309.75,
            "range": "14.5",
            "unit": "ms",
            "extra": "{\"min_ms\": 296.37, \"max_ms\": 325.16, \"command\": \"pymarkdown scan /d/a/mdmend/mdmend/testdata/benchmark/stress\"}"
          }
        ]
      }
    ]
  }
}