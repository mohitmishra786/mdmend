#!/usr/bin/env bash
set -euo pipefail

install_hyperfine_linux() {
  if command -v hyperfine >/dev/null 2>&1; then
    return
  fi
  sudo apt-get update
  sudo apt-get install -y hyperfine
}

install_hyperfine_macos() {
  if command -v hyperfine >/dev/null 2>&1; then
    return
  fi
  if command -v brew >/dev/null 2>&1; then
    brew install hyperfine
    return
  fi
  cargo install hyperfine --locked
}

install_hyperfine_windows() {
  if command -v hyperfine >/dev/null 2>&1; then
    return
  fi
  cargo install hyperfine --locked
}

install_rumdl() {
  if command -v rumdl >/dev/null 2>&1; then
    return
  fi
  cargo install rumdl --locked
}

install_pymarkdown() {
  if command -v pymarkdown >/dev/null 2>&1; then
    return
  fi
  if python3 -m pymarkdown --help >/dev/null 2>&1; then
    return
  fi
  python3 -m pip install pymarkdownlnt
}

ensure_cargo() {
  if command -v cargo >/dev/null 2>&1; then
    return
  fi
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
  # shellcheck disable=SC1090
  source "$HOME/.cargo/env"
}

OS_NAME="$(uname -s)"
case "$OS_NAME" in
  Linux)
    ensure_cargo
    install_hyperfine_linux
    install_rumdl
    install_pymarkdown
    ;;
  Darwin)
    ensure_cargo
    install_hyperfine_macos
    install_rumdl
    install_pymarkdown
    ;;
  MINGW* | MSYS* | CYGWIN*)
    ensure_cargo
    install_hyperfine_windows
    install_rumdl
    install_pymarkdown
    ;;
  *)
    echo "Unsupported OS for benchmark deps: $OS_NAME" >&2
    exit 1
    ;;
esac

echo "Benchmark dependencies ready on $OS_NAME"
command -v hyperfine && hyperfine --version
command -v rumdl && rumdl --version || true
command -v pymarkdown && pymarkdown --help 2>&1 | head -1 || true
command -v npx && npx --version