# Linux Distribution Plan

This document outlines the plan for distributing mdmend on Linux platforms.

## Overview

mdmend will be distributed on Linux through multiple channels:

- DEB packages (Debian, Ubuntu)
- RPM packages (RHEL, Fedora, CentOS)
- AUR (Arch Linux)
- Snap (Universal)
- AppImage (Portable)
- Direct binary download

## 1. DEB Package (Debian/Ubuntu)

### goreleaser Configuration

Already configured in `.goreleaser.yml`:

```yaml
nfpms:
  - package_name: mdmend
    maintainer: Mohit Mishra <mohitmishra786@example.com>
    description: Fast Markdown linter and fixer
    homepage: https://github.com/mohitmishra786/mdmend
    license: MIT
    formats:
      - deb
    contents:
      - src: ./completions/mdmend.bash
        dst: /usr/share/bash-completion/completions/mdmend
    recommends:
      - git
```

### Installation Commands

```bash
# Direct download
curl -sS https://github.com/mohitmishra786/mdmend/releases/download/v1.0.0/mdmend_1.0.0_linux_amd64.deb -o mdmend.deb
sudo dpkg -i mdmend.deb

# Or with apt (requires setting up repository)
curl -sS https://raw.githubusercontent.com/mohitmishra786/mdmend/main/scripts/apt-install.sh | bash
```

### APT Repository Setup

Create `scripts/apt-install.sh`:

```bash
#!/bin/bash
set -e

REPO_URL="https://github.com/mohitmishra786/mdmend/releases"

# Detect architecture
ARCH=$(dpkg --print-architecture)

# Download latest .deb
LATEST=$(curl -s https://api.github.com/repos/mohitmishra786/mdmend/releases/latest | grep '"tag_name":' | sed -E 's/.*"v([^"]+)".*/\1/')

curl -sSL "${REPO_URL}/download/v${LATEST}/mdmend_${LATEST}_linux_${ARCH}.deb" -o /tmp/mdmend.deb

sudo dpkg -i /tmp/mdmend.deb
rm /tmp/mdmend.deb

echo "mdmend ${LATEST} installed successfully!"
```

## 2. RPM Package (RHEL/Fedora/CentOS)

### goreleaser Configuration

```yaml
nfpms:
  - formats:
      - rpm
    # ... same as DEB
```

### Installation Commands

```bash
# Direct download
curl -sS https://github.com/mohitmishra786/mdmend/releases/download/v1.0.0/mdmend_1.0.0_linux_amd64.rpm -o mdmend.rpm
sudo rpm -i mdmend.rpm

# Or with dnf/yum
sudo dnf install https://github.com/mohitmishra786/mdmend/releases/download/v1.0.0/mdmend_1.0.0_linux_amd64.rpm
```

### COPR Repository (Optional)

For better Fedora support, consider COPR:

1. Create COPR project at copr.fedorainfracloud.org
2. Upload SRPM
3. Users can install with:
```bash
sudo dnf copr enable mohitmishra786/mdmend
sudo dnf install mdmend
```

## 3. AUR (Arch Linux)

### goreleaser Configuration

```yaml
aurs:
  - name: mdmend-bin
    homepage: https://github.com/mohitmishra786/mdmend
    description: Fast Markdown linter and fixer
    maintainers:
      - 'Mohit Mishra <mohitmishra786@example.com>'
    license: MIT
    private_key: '{{ .Env.AUR_KEY }}'
    git_url: 'ssh://aur@aur.archlinux.org/mdmend-bin.git'
```

### Manual AUR Setup

Create PKGBUILD:

```bash
pkgname=mdmend-bin
pkgver=1.0.0
pkgrel=1
pkgdesc="Fast Markdown linter and fixer"
arch=('x86_64' 'aarch64')
url="https://github.com/mohitmishra786/mdmend"
license=('MIT')

source_x86_64=("${url}/releases/download/v${pkgver}/mdmend_${pkgver}_linux_amd64.tar.gz")
source_aarch64=("${url}/releases/download/v${pkgver}/mdmend_${pkgver}_linux_arm64.tar.gz")

sha256sums_x86_64=('REPLACE_WITH_ACTUAL_SHA256')
sha256sums_aarch64=('REPLACE_WITH_ACTUAL_SHA256')

package() {
    install -Dm755 mdmend "${pkgdir}/usr/bin/mdmend"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
```

### Installation Commands

```bash
# Using yay
yay -S mdmend-bin

# Using paru
paru -S mdmend-bin

# Manual
git clone https://aur.archlinux.org/mdmend-bin.git
cd mdmend-bin
makepkg -si
```

## 4. Snap Package

### goreleaser Configuration

```yaml
snapcrafts:
  - name: mdmend
    summary: Fast Markdown linter and fixer
    description: |
      mdmend is a fast, zero-dependency Markdown linter and fixer.
    grade: stable
    confinement: classic
    license: MIT
```

### Manual Snap Creation

Create `snap/snapcraft.yaml`:

```yaml
name: mdmend
version: '1.0.0'
summary: Fast Markdown linter and fixer
description: |
  mdmend is a fast, zero-dependency Markdown linter and fixer that
  automatically fixes common Markdown linting issues.

grade: stable
confinement: classic
base: core22

parts:
  mdmend:
    plugin: go
    source: https://github.com/mohitmishra786/mdmend
    source-tag: v1.0.0
    build-snaps:
      - go

apps:
  mdmend:
    command: bin/mdmend
```

### Installation Commands

```bash
# From Snap Store
sudo snap install mdmend

# From local file
sudo snap install mdmend_1.0.0_amd64.snap --dangerous
```

## 5. AppImage

### Build Script

Create `scripts/build-appimage.sh`:

```bash
#!/bin/bash
set -e

VERSION=${1:-$(git describe --tags --abbrev=0 | sed 's/v//')}
ARCH=${2:-$(uname -m)}

# Download binary
curl -sSL "https://github.com/mohitmishra786/mdmend/releases/download/v${VERSION}/mdmend_${VERSION}_linux_${ARCH}.tar.gz" | tar xz

# Create AppDir
mkdir -p AppDir/usr/bin
mv mdmend AppDir/usr/bin/

# Create desktop file
cat > AppDir/mdmend.desktop << EOF
[Desktop Entry]
Name=mdmend
Exec=mdmend
Type=Application
Categories=Development;
EOF

# Download AppImageTool
wget -q https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-${ARCH}.AppImage
chmod +x appimagetool-*.AppImage

# Build AppImage
./appimagetool-*.AppImage AppDir mdmend-${VERSION}-${ARCH}.AppImage
```

### Installation Commands

```bash
# Download and run
curl -sSL https://github.com/mohitmishra786/mdmend/releases/download/v1.0.0/mdmend-1.0.0-x86_64.AppImage -o mdmend
chmod +x mdmend
./mdmend --help

# Install system-wide
sudo mv mdmend /usr/local/bin/mdmend
```

## 6. Direct Binary

### Installation Script

Create `scripts/install.sh`:

```bash
#!/bin/bash
set -e

REPO="mohitmishra786/mdmend"

# Detect OS and ARCH
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')

# Get latest version
VERSION=$(curl -s "https://api.github.com/repos/${REPO}/releases/latest" | grep '"tag_name":' | sed -E 's/.*"v([^"]+)".*/\1/')

# Download
curl -sSL "https://github.com/${REPO}/releases/download/v${VERSION}/mdmend_${VERSION}_${OS}_${ARCH}.tar.gz" | tar xz

# Install
sudo mv mdmend /usr/local/bin/
sudo chmod +x /usr/local/bin/mdmend

echo "mdmend v${VERSION} installed successfully!"
```

## Release Workflow

### GitHub Actions

Create `.github/workflows/release.yml`:

```yaml
name: Release

on:
  push:
    tags:
      - 'v*'

permissions:
  contents: write

jobs:
  goreleaser:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - uses: actions/setup-go@v5
        with:
          go-version: '1.21'
      
      - uses: goreleaser/goreleaser-action@v5
        with:
          version: latest
          args: release --clean
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## Checklist

- [ ] Configure goreleaser for DEB
- [ ] Configure goreleaser for RPM
- [ ] Set up AUR package
- [ ] Configure Snap in goreleaser
- [ ] Create AppImage build script
- [ ] Create install.sh script
- [ ] Set up GitHub Actions
- [ ] Test on multiple distros
- [ ] Document installation methods
