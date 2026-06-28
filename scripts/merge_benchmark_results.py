#!/usr/bin/env python3
"""Merge per-runner benchmark artifacts into history and chart export files."""

from __future__ import annotations

import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path


def load_summary(path: Path) -> dict:
    with path.open(encoding="utf-8") as fh:
        return json.load(fh)


def short_command(command: str) -> str:
    markers = (
        "mdmend lint",
        "mdmend fix",
        "markdownlint-cli2",
        "rumdl check",
        "pymarkdown scan",
    )
    for marker in markers:
        if marker in command:
            return marker
    return command[:80]


def merge_artifacts(artifacts_dir: Path, out_dir: Path) -> tuple[Path, Path]:
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    date_prefix = timestamp[:10]

    history_root = out_dir / "history" / date_prefix
    history_root.mkdir(parents=True, exist_ok=True)

    combined: dict = {
        "timestamp": timestamp,
        "runners": [],
    }
    chart_entries: list[dict] = []

    for runner_dir in sorted(artifacts_dir.iterdir()):
        if not runner_dir.is_dir():
            continue
        summary_path = runner_dir / "summary.json"
        if not summary_path.exists():
            continue

        label = runner_dir.name.removeprefix("benchmark-")
        summary = load_summary(summary_path)
        meta_path = runner_dir / "meta.json"
        meta = {}
        if meta_path.exists():
            meta = load_summary(meta_path)

        runner_record = {
            "label": label,
            "meta": meta,
            "warmup": summary.get("warmup"),
            "runs": summary.get("runs"),
            "results": summary.get("results", []),
        }
        combined["runners"].append(runner_record)

        history_file = history_root / f"{label}.json"
        with history_file.open("w", encoding="utf-8") as fh:
            json.dump(runner_record, fh, indent=2)

        for result in summary.get("results", []):
            corpus = result.get("corpus", "unknown")
            command = short_command(result.get("command", ""))
            chart_entries.append(
                {
                    "name": f"{label} / {corpus} / {command}",
                    "unit": "ms",
                    "value": result.get("mean_ms", 0),
                    "range": str(result.get("stddev_ms", 0)),
                    "extra": json.dumps(
                        {
                            "min_ms": result.get("min_ms"),
                            "max_ms": result.get("max_ms"),
                            "command": result.get("command"),
                        }
                    ),
                }
            )

    combined_path = history_root / "combined.json"
    with combined_path.open("w", encoding="utf-8") as fh:
        json.dump(combined, fh, indent=2)

    chart_path = out_dir / "hyperfine-export.json"
    with chart_path.open("w", encoding="utf-8") as fh:
        json.dump(chart_entries, fh, indent=2)

    latest_path = out_dir / "latest.json"
    with latest_path.open("w", encoding="utf-8") as fh:
        json.dump(combined, fh, indent=2)

    return combined_path, chart_path


def main() -> int:
    if len(sys.argv) != 3:
        print(f"usage: {sys.argv[0]} <artifacts-dir> <output-dir>", file=sys.stderr)
        return 1

    artifacts_dir = Path(sys.argv[1])
    out_dir = Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)

    if not artifacts_dir.exists():
        print(f"artifacts dir not found: {artifacts_dir}", file=sys.stderr)
        return 1

    combined_path, chart_path = merge_artifacts(artifacts_dir, out_dir)
    print(f"Wrote {combined_path}")
    print(f"Wrote {chart_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())