#!/bin/bash
set -euo pipefail

REPO="mohitmishra786/mdmend"
BINARY_NAME="mdmend"

get_latest_version() {
    local version
    version=$(curl -s "https://api.github.com/repos/${REPO}/releases/latest" | grep '"tag_name":' | sed -E 's/.*"v([^"]+)".*/\1/')
    echo "$version"
}

detect_os() {
    case "$(uname -s)" in
        Darwin*)    echo "darwin" ;;
        Linux*)     echo "linux" ;;
        CYGWIN*)    echo "windows" ;;
        MINGW*)     echo "windows" ;;
        *)          echo "unknown" ;;
    esac
}

detect_arch() {
    case "$(uname -m)" in
        x86_64*)    echo "amd64" ;;
        arm64*)     echo "arm64" ;;
        aarch64*)   echo "arm64" ;;
        *)          echo "unknown" ;;
    esac
}

install_macos() {
    if command -v brew &> /dev/null; then
        echo "Installing via Homebrew..."
        brew tap mohitmishra786/tap
        brew install mdmend
        return 0
    fi
    return 1
}

install_linux() {
    if command -v apt-get &> /dev/null; then
        echo "Installing via apt-get..."
        sudo apt-get update
        sudo apt-get install -y curl
        # Fallback to binary install if no repo script, but try to be safe
        return 1
    elif command -v yum &> /dev/null; then
        echo "Installing via yum..."
        return 1
    fi
    return 1
}

verify_checksum() {
    local file=$1
    local checksum_url=$2
    local tmp_dir=$3
    
    echo "Verifying checksum..."
    local checksum_file="${tmp_dir}/checksums.txt"
    curl -sSL "$checksum_url" -o "$checksum_file"
    
    local expected_checksum
    expected_checksum=$(grep "$(basename "$file")" "$checksum_file" | cut -d ' ' -f 1)
    
    if [ -z "$expected_checksum" ]; then
        echo "Error: Checksum not found for $(basename "$file")"
        return 1
    fi
    
    local actual_checksum
    if command -v sha256sum &> /dev/null; then
        actual_checksum=$(sha256sum "$file" | cut -d ' ' -f 1)
    elif command -v shasum &> /dev/null; then
        actual_checksum=$(shasum -a 256 "$file" | cut -d ' ' -f 1)
    else
        echo "Warning: sha256sum or shasum not found, skipping verification"
        return 0
    fi
    
    if [ "$actual_checksum" != "$expected_checksum" ]; then
        echo "Error: Checksum verification failed!"
        echo "Expected: $expected_checksum"
        echo "Actual:   $actual_checksum"
        return 1
    fi
    
    echo "Checksum verified successfully."
    return 0
}

install_binary() {
    local version="${1:-$(get_latest_version)}"
    local os
    os="$(detect_os)"
    local arch
    arch="$(detect_arch)"
    
    if [ "$os" = "unknown" ] || [ "$arch" = "unknown" ]; then
        echo "Unsupported platform: ${os}/${arch}"
        exit 1
    fi
    
    local ext="tar.gz"
    if [ "$os" = "windows" ]; then
        ext="zip"
        BINARY_NAME="mdmend.exe"
    fi
    
    local download_url="https://github.com/${REPO}/releases/download/v${version}/mdmend_${version}_${os}_${arch}.${ext}"
    local checksum_url="https://github.com/${REPO}/releases/download/v${version}/checksums.txt"
    local tmp_dir
    tmp_dir=$(mktemp -d)
    
    # Ensure cleanup
    trap 'rm -rf "$tmp_dir"' EXIT
    
    local tmp_file="${tmp_dir}/mdmend.${ext}"
    
    echo "Downloading mdmend v${version} for ${os}/${arch}..."
    if ! curl -sSL --fail "$download_url" -o "$tmp_file"; then
        echo "Error: Failed to download binary from $download_url"
        exit 1
    fi
    
    if ! verify_checksum "$tmp_file" "$checksum_url" "$tmp_dir"; then
        exit 1
    fi
    
    cd "$tmp_dir"
    if [ "$ext" = "zip" ]; then
        unzip -o "$(basename "$tmp_file")"
    else
        tar xzf "$(basename "$tmp_file")"
    fi
    
    echo "Installing mdmend to /usr/local/bin..."
    sudo mkdir -p /usr/local/bin
    sudo mv "$BINARY_NAME" /usr/local/bin/mdmend
    sudo chmod +x /usr/local/bin/mdmend
    
    echo "mdmend v${version} installed successfully!"
}

main() {
    echo "mdmend installer"
    echo "================"
    echo
    
    local version="${1:-}"
    
    case "$(detect_os)" in
        darwin)
            if ! install_macos; then
                install_binary "$version"
            fi
            ;;
        linux)
            if ! install_linux; then
                install_binary "$version"
            fi
            ;;
        *)
            install_binary "$version"
            ;;
    esac
    
    echo
    echo "Run 'mdmend --help' to get started."
}

main "$@"
