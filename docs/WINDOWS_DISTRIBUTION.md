# Windows Distribution Plan

This document outlines the plan for distributing mdmend on Windows.

## Overview

mdmend will be distributed on Windows through:

1. GitHub Releases (ZIP archives)
2. Scoop package manager
3. Chocolatey package manager
4. Winget (Windows Package Manager)

## 1. GitHub Releases

### Binary Build

Configure in `.goreleaser.yml`:

```yaml
builds:
  - env:
      - CGO_ENABLED=0
    goos:
      - windows
    goarch:
      - amd64
      - arm64
    ldflags:
      - -s -w -X main.version={{.Version}} -X main.commit={{.Commit}} -X main.date={{.Date}}

archives:
  - format: zip
    name_template: "{{ .ProjectName }}_{{ .Version }}_{{ .Os }}_{{ .Arch }}"
```

### Installation Commands

```powershell
# Download
Invoke-WebRequest -Uri "https://github.com/mohitmishra786/mdmend/releases/download/v1.0.0/mdmend_1.0.0_windows_amd64.zip" -OutFile "mdmend.zip"

# Extract
Expand-Archive -Path "mdmend.zip" -DestinationPath "C:\Tools\mdmend"

# Add to PATH (PowerShell)
$env:PATH += ";C:\Tools\mdmend"

# Add to PATH permanently
[Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";C:\Tools\mdmend", "User")
```

## 2. Scoop Package Manager

### Create Manifest

Create `bucket/mdmend.json`:

```json
{
    "version": "1.0.0",
    "description": "Fast Markdown linter and fixer",
    "homepage": "https://github.com/mohitmishra786/mdmend",
    "license": "MIT",
    "architecture": {
        "64bit": {
            "url": "https://github.com/mohitmishra786/mdmend/releases/download/v1.0.0/mdmend_1.0.0_windows_amd64.zip",
            "hash": "SHA256_HASH_HERE"
        },
        "arm64": {
            "url": "https://github.com/mohitmishra786/mdmend/releases/download/v1.0.0/mdmend_1.0.0_windows_arm64.zip",
            "hash": "SHA256_HASH_HERE"
        }
    },
    "bin": "mdmend.exe",
    "checkver": {
        "github": "https://github.com/mohitmishra786/mdmend"
    },
    "autoupdate": {
        "architecture": {
            "64bit": {
                "url": "https://github.com/mohitmishra786/mdmend/releases/download/v$version/mdmend_$version_windows_amd64.zip"
            },
            "arm64": {
                "url": "https://github.com/mohitmishra786/mdmend/releases/download/v$version/mdmend_$version_windows_arm64.zip"
            }
        },
        "hash": {
            "url": "$baseurl/checksums.txt"
        }
    }
}
```

### goreleaser Configuration

```yaml
scoops:
  - repository:
      owner: mohitmishra786
      name: scoop-bucket
      token: "{{ .Env.SCOOP_GITHUB_TOKEN }}"
    homepage: https://github.com/mohitmishra786/mdmend
    description: Fast Markdown linter and fixer
    license: MIT
```

### Installation Commands

```powershell
# Add bucket
scoop bucket add mohitmishra786 https://github.com/mohitmishra786/scoop-bucket

# Install
scoop install mdmend

# Update
scoop update mdmend
```

### Create Scoop Bucket

1. Create repository: `mohitmishra786/scoop-bucket`

2. Add manifest file: `bucket/mdmend.json`

3. goreleaser will auto-update on release

## 3. Chocolatey Package Manager

### Create Package

Create `chocolatey/mdmend.nuspec`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://schemas.microsoft.com/packaging/2015/06/nuspec.xsd">
  <metadata>
    <id>mdmend</id>
    <version>1.0.0</version>
    <title>mdmend</title>
    <authors>Mohit Mishra</authors>
    <projectUrl>https://github.com/mohitmishra786/mdmend</projectUrl>
    <licenseUrl>https://github.com/mohitmishra786/mdmend/blob/main/LICENSE</licenseUrl>
    <description>Fast Markdown linter and fixer</description>
    <tags>markdown linter fixer cli</tags>
  </metadata>
  <files>
    <file src="tools\**" target="tools" />
  </files>
</package>
```

Create `chocolatey/tools/chocolateyinstall.ps1`:

```powershell
$ErrorActionPreference = 'Stop'

$packageArgs = @{
  packageName   = 'mdmend'
  fileType      = 'zip'
  url64bit      = 'https://github.com/mohitmishra786/mdmend/releases/download/v1.0.0/mdmend_1.0.0_windows_amd64.zip'
  checksum64    = 'SHA256_HASH'
  checksumType64= 'sha256'
  destination   = Join-Path $env:ProgramFiles 'mdmend'
}

Install-ChocolateyZipPackage @packageArgs

Install-BinFile -Name 'mdmend' -Path "$env:ProgramFiles\mdmend\mdmend.exe"
```

Create `chocolatey/tools/chocolateyuninstall.ps1`:

```powershell
$ErrorActionPreference = 'Stop'

Uninstall-BinFile -Name 'mdmend'

Remove-Item -Recurse -Force (Join-Path $env:ProgramFiles 'mdmend')
```

### Build and Push

```powershell
# Install Chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# Build package
cd chocolatey
choco pack

# Push to Chocolatey
choco push mdmend.1.0.0.nupkg --source https://push.chocolatey.org/ --api-key YOUR_API_KEY
```

### Installation Commands

```powershell
# Install
choco install mdmend -y

# Update
choco upgrade mdmend -y

# Uninstall
choco uninstall mdmend -y
```

## 4. Winget (Windows Package Manager)

### Create Manifest

Create manifest files in `winget/manifests/m/mohitmishra786/mdmend/`:

**mdmend.yaml:**
```yaml
PackageIdentifier: mohitmishra786.mdmend
PackageVersion: 1.0.0
PackageLocale: en-US
Publisher: Mohit Mishra
PackageName: mdmend
PackageUrl: https://github.com/mohitmishra786/mdmend
License: MIT
ShortDescription: Fast Markdown linter and fixer
Moniker: mdmend
Tags:
  - markdown
  - linter
  - fixer
  - cli
ManifestType: defaultLocale
ManifestVersion: 1.4.0
```

**installer.yaml:**
```yaml
PackageIdentifier: mohitmishra786.mdmend
PackageVersion: 1.0.0
InstallerLocale: en-US
InstallerType: zip
Installers:
  - Architecture: x64
    InstallerUrl: https://github.com/mohitmishra786/mdmend/releases/download/v1.0.0/mdmend_1.0.0_windows_amd64.zip
    InstallerSha256: SHA256_HASH
    NestedInstallerType: portable
    NestedInstallerFiles:
      - RelativeFilePath: mdmend.exe
        PortableCommandAlias: mdmend
ManifestType: installer
ManifestVersion: 1.4.0
```

**locale.yaml:**
```yaml
PackageIdentifier: mohitmishra786.mdmend
PackageVersion: 1.0.0
PackageLocale: en-US
Publisher: Mohit Mishra
PackageName: mdmend
PackageUrl: https://github.com/mohitmishra786/mdmend
License: MIT
LicenseUrl: https://github.com/mohitmishra786/mdmend/blob/main/LICENSE
ShortDescription: Fast Markdown linter and fixer
Description: mdmend is a fast, zero-dependency Markdown linter and fixer that automatically fixes common Markdown linting issues.
ManifestType: locale
ManifestVersion: 1.4.0
```

### Submit to Winget

```powershell
# Install wingetcreate
winget install Microsoft.WingetCreate

# Create new manifest
wingetcreate new mohitmishra786.mdmend

# Update existing
wingetcreate update mohitmishra786.mdmend --version 1.0.1

# Submit PR
wingetcreate submit
```

### Installation Commands

```powershell
# Install
winget install mohitmishra786.mdmend

# Update
winget upgrade mohitmishra786.mdmend

# Uninstall
winget uninstall mohitmishra786.mdmend
```

## 5. PowerShell Installation Script

Create `scripts/install.ps1`:

```powershell
param(
    [string]$Version = "latest",
    [string]$InstallDir = "$env:USERPROFILE\.mdmend"
)

$ErrorActionPreference = "Stop"

# Map processor architecture to canonical names
$RawArch = $env:PROCESSOR_ARCHITECTURE
$Arch = switch ($RawArch) {
    "AMD64" { "amd64" }
    "ARM64" { "arm64" }
    default {
        Write-Warning "Unknown architecture: $RawArch. Falling back to amd64."
        "amd64"
    }
}

# Get version
if ($Version -eq "latest") {
    try {
        $Release = Invoke-RestMethod "https://api.github.com/repos/$Repo/releases/latest"
        $Version = $Release.tag_name.TrimStart('v')
    } catch {
        Write-Error "Failed to fetch latest version from GitHub API: $_"
        exit 1
    }
}

# Download
$Url = "https://github.com/$Repo/releases/download/v$Version/mdmend_${Version}_windows_${Arch}.zip"
$ZipPath = "$env:TEMP\mdmend.zip"

Write-Host "Downloading mdmend v$Version..."
Invoke-WebRequest -Uri $Url -OutFile $ZipPath

# Extract
Write-Host "Installing to $InstallDir..."
New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
Expand-Archive -Path $ZipPath -DestinationPath $InstallDir -Force
Remove-Item $ZipPath

# Add to PATH
$Path = [Environment]::GetEnvironmentVariable("PATH", "User")
if ($Path -notlike "*$InstallDir*") {
    [Environment]::SetEnvironmentVariable("PATH", "$Path;$InstallDir", "User")
    Write-Host "Added $InstallDir to PATH"
}

Write-Host "mdmend v$Version installed successfully!"
Write-Host "Run 'mdmend --help' to get started."
```

### Usage

```powershell
# Install latest
irm https://raw.githubusercontent.com/mohitmishra786/mdmend/main/scripts/install.ps1 | iex

# Install specific version
.\install.ps1 -Version "1.0.0" -InstallDir "C:\Tools\mdmend"
```

## Checklist

- [ ] Configure goreleaser for Windows builds
- [ ] Create Scoop bucket and manifest
- [ ] Add SCOOP_GITHUB_TOKEN secret
- [ ] Create Chocolatey package
- [ ] Set up Chocolatey API key
- [ ] Create Winget manifests
- [ ] Test on Windows 10/11
- [ ] Test on Windows ARM64
- [ ] Create PowerShell install script
- [ ] Document Windows installation

## Testing

### Test on Windows

```powershell
# Build
go build -o mdmend.exe ./cmd/mdmend

# Test
.\mdmend.exe --version
.\mdmend.exe lint .
.\mdmend.exe fix . --dry-run
```

### Test Scoop Package

```powershell
# Install from local manifest
scoop install .\bucket\mdmend.json

# Test
mdmend --version
```

### Test Chocolatey Package

```powershell
# Build
choco pack

# Install locally
choco install mdmend -s .

# Test
mdmend --version
```
