#!/bin/bash
set -euo pipefail

REPO_URL="https://github.com/mohitmishra786/mdmend/releases"
REPO="mohitmishra786/mdmend"
PACKAGE_NAME="mdmend"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info() { echo -e "${GREEN}[INFO]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

detect_arch() {
    local arch
    arch=$(dpkg --print-architecture 2>/dev/null || echo "amd64")
    case "$arch" in
        amd64|x86_64) echo "amd64" ;;
        arm64|aarch64) echo "arm64" ;;
        *) echo "$arch" ;;
    esac
}

get_latest_version() {
    local version
    version=$(curl -sSf "https://api.github.com/repos/${REPO}/releases/latest" 2>/dev/null | grep '"tag_name":' | sed -E 's/.*"v([^"]+)".*/\1/')
    if [ -z "$version" ]; then
        error "Failed to fetch latest version"
    fi
    echo "$version"
}

install_deb() {
    local version="${1:-$(get_latest_version)}"
    local arch
    arch=$(detect_arch)
    
    local deb_file="${PACKAGE_NAME}_${version}_linux_${arch}.deb"
    local download_url="${REPO_URL}/download/v${version}/${deb_file}"
    local tmp_dir
    tmp_dir=$(mktemp -d)
    
    trap "rm -rf '$tmp_dir'" EXIT
    
    info "Downloading ${deb_file}..."
    if ! curl -sSLf "$download_url" -o "${tmp_dir}/${deb_file}"; then
        error "Failed to download ${deb_file}"
    fi
    
    info "Installing ${deb_file}..."
    if command -v sudo &>/dev/null; then
        sudo dpkg -i "${tmp_dir}/${deb_file}" || {
            warn "dpkg install failed, attempting to fix dependencies..."
            sudo apt-get install -f -y
        }
    else
        dpkg -i "${tmp_dir}/${deb_file}" || {
            warn "dpkg install failed, attempting to fix dependencies..."
            apt-get install -f -y
        }
    fi
    
    info "${PACKAGE_NAME} v${version} installed successfully!"
}

install_from_github() {
    local version="${1:-$(get_latest_version)}"
    local arch
    arch=$(detect_arch)
    
    info "Installing ${PACKAGE_NAME} v${version} for ${arch}..."
    
    local deb_file="${PACKAGE_NAME}_${version}_linux_${arch}.deb"
    local download_url="${REPO_URL}/download/v${version}/${deb_file}"
    
    info "Direct download from: $download_url"
    
    if command -v apt-get &>/dev/null; then
        info "Using apt to install from URL..."
        if command -v sudo &>/dev/null; then
            sudo apt-get install -y "$download_url" 2>/dev/null || install_deb "$version"
        else
            apt-get install -y "$download_url" 2>/dev/null || install_deb "$version"
        fi
    else
        install_deb "$version"
    fi
}

verify_installation() {
    if command -v mdmend &>/dev/null; then
        info "Verification successful!"
        mdmend --version
    else
        error "Installation verification failed - mdmend not found in PATH"
    fi
}

main() {
    echo "========================================"
    echo "  mdmend - Debian/Ubuntu Installer"
    echo "========================================"
    echo
    
    local version="${1:-}"
    
    if [ -n "$version" ]; then
        info "Installing specific version: v${version}"
    else
        info "Installing latest version"
    fi
    
    install_from_github "$version"
    verify_installation
    
    echo
    info "Run 'mdmend --help' to get started."
}

main "$@"