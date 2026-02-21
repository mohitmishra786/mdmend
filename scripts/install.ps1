param(
    [string]$Version = "latest",
    [string]$InstallDir = "$env:USERPROFILE\.mdmend",
    [string]$Repo = "mohitmishra786/mdmend"
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
$ChecksumUrl = "https://github.com/$Repo/releases/download/v$Version/checksums.txt"
$ZipPath = "$env:TEMP\mdmend.zip"

Write-Output "Downloading mdmend v$Version for $Arch..."
try {
    Invoke-WebRequest -Uri $Url -OutFile $ZipPath
} catch {
    Write-Error "Failed to download binary from $Url. Please ensure version v$Version exists for $Arch."
    exit 1
}

# Verify checksum
Write-Output "Verifying checksum..."
try {
    $ChecksumFile = "$env:TEMP\checksums.txt"
    Invoke-WebRequest -Uri $ChecksumUrl -OutFile $ChecksumFile
    $ExpectedChecksum = (Select-String -Path $ChecksumFile -Pattern "mdmend_${Version}_windows_${Arch}.zip" | ForEach-Object { $_.Line.Split()[0] })
    
    if ($ExpectedChecksum) {
        $ActualChecksum = (Get-FileHash -Path $ZipPath -Algorithm SHA256).Hash.ToLower()
        if ($ActualChecksum -ne $ExpectedChecksum.ToLower()) {
            Write-Error "Checksum verification failed! Expected: $ExpectedChecksum, Got: $ActualChecksum"
            Remove-Item $ZipPath -Force -ErrorAction SilentlyContinue
            Remove-Item $ChecksumFile -Force -ErrorAction SilentlyContinue
            exit 1
        }
        Write-Output "Checksum verified successfully."
    } else {
        Write-Warning "Could not find checksum for this artifact, skipping verification."
    }
    Remove-Item $ChecksumFile -Force -ErrorAction SilentlyContinue
} catch {
    Write-Warning "Checksum verification failed: $_. Continuing without verification."
}

# Extract
Write-Output "Installing to $InstallDir..."
try {
    if (!(Test-Path $InstallDir)) {
        New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
    }
    Expand-Archive -Path $ZipPath -DestinationPath $InstallDir -Force
} finally {
    if (Test-Path $ZipPath) {
        Remove-Item $ZipPath -Force
    }
}

# Add to PATH
$Path = [Environment]::GetEnvironmentVariable("PATH", "User")
if ($Path -notlike "*$InstallDir*") {
    [Environment]::SetEnvironmentVariable("PATH", "$Path;$InstallDir", "User")
    Write-Output "Added $InstallDir to PATH"
}

Write-Output "mdmend v$Version installed successfully!"
Write-Output "Run 'mdmend --help' to get started."
