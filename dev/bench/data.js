window.BENCHMARK_DATA = {
  "lastUpdate": 1782739904421,
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
      }
    ]
  }
}