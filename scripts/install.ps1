param(
    [string]$Version = "latest",
    [string]$InstallDir = "$env:USERPROFILE\.mdmend"
)

$ErrorActionPreference = "Stop"

$Repo = "mohitmishra786/mdmend"

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

Write-Host "Downloading mdmend v$Version for $Arch..."
try {
    Invoke-WebRequest -Uri $Url -OutFile $ZipPath
} catch {
    Write-Error "Failed to download binary from $Url. Please ensure version v$Version exists for $Arch."
    exit 1
}

# Extract
Write-Host "Installing to $InstallDir..."
if (!(Test-Path $InstallDir)) {
    New-Item -ItemType Directory -Force -Path $InstallDir | Out-Null
}
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
