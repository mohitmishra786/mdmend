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
    arch=$(uname -m)
    case "$arch" in
        x86_64) echo "amd64" ;;
        aarch64|arm64) echo "arm64" ;;
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

install_rpm() {
    local version="${1:-$(get_latest_version)}"
    local arch
    arch=$(detect_arch)
    
    local rpm_file="${PACKAGE_NAME}_${version}_linux_${arch}.rpm"
    local download_url="${REPO_URL}/download/v${version}/${rpm_file}"
    local tmp_dir
    tmp_dir=$(mktemp -d)
    
    trap "rm -rf '$tmp_dir'" EXIT
    
    info "Downloading ${rpm_file}..."
    if ! curl -sSLf "$download_url" -o "${tmp_dir}/${rpm_file}"; then
        error "Failed to download ${rpm_file}"
    fi
    
    info "Installing ${rpm_file}..."
    if command -v sudo &>/dev/null; then
        if command -v dnf &>/dev/null; then
            sudo dnf install -y "${tmp_dir}/${rpm_file}"
        elif command -v yum &>/dev/null; then
            sudo yum install -y "${tmp_dir}/${rpm_file}"
        else
            sudo rpm -i "${tmp_dir}/${rpm_file}"
        fi
    else
        if command -v dnf &>/dev/null; then
            dnf install -y "${tmp_dir}/${rpm_file}"
        elif command -v yum &>/dev/null; then
            yum install -y "${tmp_dir}/${rpm_file}"
        else
            rpm -i "${tmp_dir}/${rpm_file}"
        fi
    fi
    
    info "${PACKAGE_NAME} v${version} installed successfully!"
}

install_from_github() {
    local version="${1:-$(get_latest_version)}"
    local arch
    arch=$(detect_arch)
    
    info "Installing ${PACKAGE_NAME} v${version} for ${arch}..."
    
    local rpm_file="${PACKAGE_NAME}_${version}_linux_${arch}.rpm"
    local download_url="${REPO_URL}/download/v${version}/${rpm_file}"
    
    info "Direct download from: $download_url"
    
    install_rpm "$version"
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
    echo "  mdmend - Fedora/RHEL/CentOS Installer"
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