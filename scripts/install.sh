#!/bin/bash
set -e

REPO="mohitmishra786/mdmend"
BINARY_NAME="mdmend"

get_latest_version() {
    curl -s "https://api.github.com/repos/${REPO}/releases/latest" | grep '"tag_name":' | sed -E 's/.*"v([^"]+)".*/\1/'
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
        echo "Installing via APT..."
        curl -sS https://raw.githubusercontent.com/${REPO}/main/scripts/apt-install.sh | bash
        return 0
    elif command -v yum &> /dev/null || command -v dnf &> /dev/null; then
        echo "Installing via RPM..."
        curl -sS https://raw.githubusercontent.com/${REPO}/main/scripts/rpm-install.sh | bash
        return 0
    fi
    return 1
}

install_binary() {
    local version="${1:-$(get_latest_version)}"
    local os="$(detect_os)"
    local arch="$(detect_arch)"
    
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
    local tmp_dir=$(mktemp -d)
    local tmp_file="${tmp_dir}/mdmend.${ext}"
    
    echo "Downloading mdmend v${version} for ${os}/${arch}..."
    
    curl -sSL "$download_url" -o "$tmp_file"
    
    cd "$tmp_dir"
    if [ "$ext" = "zip" ]; then
        unzip -o "$tmp_file"
    else
        tar xzf "$tmp_file"
    fi
    
    echo "Installing mdmend to /usr/local/bin..."
    sudo mkdir -p /usr/local/bin
    sudo mv "$BINARY_NAME" /usr/local/bin/mdmend
    sudo chmod +x /usr/local/bin/mdmend
    
    rm -rf "$tmp_dir"
    
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
