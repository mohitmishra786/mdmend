#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage: publish-npm.sh <version>

Publish @mohitmishra7/mdmend and platform packages to npm.

Environment:
  NODE_AUTH_TOKEN or NPM_TOKEN  Required npm authentication token
  DRY_RUN=1                     Run npm publish --dry-run only
  GITHUB_REPOSITORY             Used to locate release assets (default: mohitmishra786/mdmend)

Prerequisites:
  - GitHub release v<version> must exist with platform archives
  - npm token must have publish access to @mohitmishra7 scope

Example:
  NODE_AUTH_TOKEN=... ./scripts/publish-npm.sh 1.0.2
EOF
}

if [[ "${1:-}" == "-h" || "${1:-}" == "--help" || $# -lt 1 ]]; then
  usage
  exit "${1:+0}"
fi

VERSION="${1#v}"
DRY_RUN="${DRY_RUN:-0}"
REPO="${GITHUB_REPOSITORY:-mohitmishra786/mdmend}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

if [[ -z "${NODE_AUTH_TOKEN:-}" && -z "${NPM_TOKEN:-}" ]]; then
  echo "error: NODE_AUTH_TOKEN or NPM_TOKEN is required" >&2
  exit 1
fi
export NODE_AUTH_TOKEN="${NODE_AUTH_TOKEN:-$NPM_TOKEN}"

BASE="https://github.com/${REPO}/releases/download/v${VERSION}"

echo "Checking GitHub release v${VERSION}..."
status="$(curl -fsSL -o /dev/null -w "%{http_code}" "https://api.github.com/repos/${REPO}/releases/tags/v${VERSION}")"
if [[ "$status" != "200" ]]; then
  echo "error: GitHub release v${VERSION} not found (HTTP ${status})" >&2
  echo "Run the Release workflow first so binaries are uploaded." >&2
  exit 1
fi

python3 - "$VERSION" "$ROOT" <<'PY'
import pathlib
import re
import sys

version, root = sys.argv[1], pathlib.Path(sys.argv[2])
platform_root = root / "npm" / "platforms" / "@mohitmishra7"
main_pkg = root / "npm" / "mdmend" / "package.json"
version_re = re.compile(r'("version":\s*)"[^"]*"')

for pkg in sorted(platform_root.glob("*/package.json")):
    text = pkg.read_text(encoding="utf-8")
    updated, count = version_re.subn(rf'\1"{version}"', text, count=1)
    if count != 1:
        raise SystemExit(f"failed to update version in {pkg}")
    pkg.write_text(updated, encoding="utf-8")
    print(f"set version {version} in {pkg}")

main = main_pkg.read_text(encoding="utf-8")
main, count = version_re.subn(rf'\1"{version}"', main, count=1)
if count != 1:
    raise SystemExit(f"failed to update version in {main_pkg}")
for dep in (
    "@mohitmishra7/mdmend-linux-x64",
    "@mohitmishra7/mdmend-linux-arm64",
    "@mohitmishra7/mdmend-darwin-x64",
    "@mohitmishra7/mdmend-darwin-arm64",
    "@mohitmishra7/mdmend-win32-x64",
):
    dep_re = re.compile(rf'("{re.escape(dep)}":\s*)"[^"]*"')
    main, count = dep_re.subn(rf'\1"{version}"', main, count=1)
    if count != 1:
        raise SystemExit(f"failed to update optional dependency {dep} in {main_pkg}")
main_pkg.write_text(main, encoding="utf-8")
print(f"set version {version} in {main_pkg}")
PY

download_tar() {
  local asset="$1" dest="$2"
  local url="${BASE}/${asset}"
  echo "Downloading ${url}"
  curl -fsSL "$url" -o "$TMP/archive.tar.gz"
  tar -xzf "$TMP/archive.tar.gz" -C "$TMP"
  install -m 755 "$TMP/mdmend" "$dest"
  rm -f "$TMP/archive.tar.gz" "$TMP/mdmend"
}

download_zip() {
  local asset="$1" dest="$2"
  local url="${BASE}/${asset}"
  echo "Downloading ${url}"
  curl -fsSL "$url" -o "$TMP/archive.zip"
  unzip -q -o "$TMP/archive.zip" mdmend.exe -d "$TMP"
  install -m 755 "$TMP/mdmend.exe" "$dest"
  rm -f "$TMP/archive.zip" "$TMP/mdmend.exe"
}

download_tar "mdmend_${VERSION}_linux_amd64.tar.gz" "$ROOT/npm/platforms/@mohitmishra7/linux-x64/bin/mdmend"
download_tar "mdmend_${VERSION}_linux_arm64.tar.gz" "$ROOT/npm/platforms/@mohitmishra7/linux-arm64/bin/mdmend"
download_tar "mdmend_${VERSION}_darwin_amd64.tar.gz" "$ROOT/npm/platforms/@mohitmishra7/darwin-x64/bin/mdmend"
download_tar "mdmend_${VERSION}_darwin_arm64.tar.gz" "$ROOT/npm/platforms/@mohitmishra7/darwin-arm64/bin/mdmend"
download_zip "mdmend_${VERSION}_windows_amd64.zip" "$ROOT/npm/platforms/@mohitmishra7/win32-x64/bin/mdmend.exe"

publish_pkg() {
  local dir="$1"
  local name
  name="$(node -p "require('${dir}/package.json').name")"
  echo "Publishing ${name}@${VERSION}..."
  if [[ "$DRY_RUN" == "1" ]]; then
    (cd "$dir" && npm publish --access public --dry-run)
  else
    (cd "$dir" && npm publish --access public)
  fi
}

for pkg in \
  "$ROOT/npm/platforms/@mohitmishra7/linux-x64" \
  "$ROOT/npm/platforms/@mohitmishra7/linux-arm64" \
  "$ROOT/npm/platforms/@mohitmishra7/darwin-x64" \
  "$ROOT/npm/platforms/@mohitmishra7/darwin-arm64" \
  "$ROOT/npm/platforms/@mohitmishra7/win32-x64"; do
  publish_pkg "$pkg"
done

publish_pkg "$ROOT/npm/mdmend"

if [[ "$DRY_RUN" == "1" ]]; then
  echo "Dry run complete for v${VERSION}"
else
  echo "Published @mohitmishra7/mdmend@${VERSION} to npm"
fi