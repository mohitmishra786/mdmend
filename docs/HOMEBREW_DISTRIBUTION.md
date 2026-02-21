# Homebrew Distribution Plan

This document outlines the plan for distributing mdmend via Homebrew on macOS and Linux.

## Overview

mdmend will be distributed through:

1. Custom tap: `mohitmishra786/homebrew-tap`
2. Potential future submission to `homebrew-core`

## 1. Custom Tap Setup

### Create Tap Repository

1. Create repository: `mohitmishra786/homebrew-tap`

2. Create formula: `Formula/mdmend.rb`

```ruby
class Mdmend < Formula
  desc "Fast Markdown linter and fixer"
  homepage "https://github.com/mohitmishra786/mdmend"
  version "1.0.0"
  license "MIT"

  livecheck do
    url :stable
    strategy :github_latest
  end

  on_macos do
    on_intel do
      url "https://github.com/mohitmishra786/mdmend/releases/download/v#{version}/mdmend_#{version}_darwin_amd64.tar.gz"
      sha256 "REPLACE_WITH_ACTUAL_SHA256"
    end
    on_arm do
      url "https://github.com/mohitmishra786/mdmend/releases/download/v#{version}/mdmend_#{version}_darwin_arm64.tar.gz"
      sha256 "REPLACE_WITH_ACTUAL_SHA256"
    end
  end

  on_linux do
    on_intel do
      url "https://github.com/mohitmishra786/mdmend/releases/download/v#{version}/mdmend_#{version}_linux_amd64.tar.gz"
      sha256 "REPLACE_WITH_ACTUAL_SHA256"
    end
    on_arm do
      url "https://github.com/mohitmishra786/mdmend/releases/download/v#{version}/mdmend_#{version}_linux_arm64.tar.gz"
      sha256 "REPLACE_WITH_ACTUAL_SHA256"
    end
  end

  def install
    bin.install "mdmend"
    generate_completions_from_executable(bin/"mdmend", "completion")
  end

  test do
    assert_match "mdmend version", shell_output("#{bin}/mdmend --version")

    test_file = testpath/"test.md"
    test_file.write "# Test\n\nHello\tWorld\n"
    
    output = shell_output("#{bin}/mdmend lint #{test_file}", 1)
    assert_match "MD010", output
  end
end
```

### goreleaser Auto-Publishing

Configure in `.goreleaser.yml`:

```yaml
brews:
  - name: mdmend
    repository:
      owner: mohitmishra786
      name: homebrew-tap
      branch: main
      token: "{{ .Env.HOMEBREW_TAP_GITHUB_TOKEN }}"
    directory: Formula
    homepage: https://github.com/mohitmishra786/mdmend
    description: Fast Markdown linter and fixer
    license: MIT
    test: |
      system "#{bin}/mdmend --version"
    install: |
      bin.install "mdmend"
```

### Required Setup

1. Create GitHub Personal Access Token with repo permissions
2. Add secret: `HOMEBREW_TAP_GITHUB_TOKEN`
3. goreleaser will automatically update the tap on release

## 2. Installation Commands

### From Custom Tap

```bash
# Add tap
brew tap mohitmishra786/tap

# Install
brew install mdmend

# Or in one command
brew install mohitmishra786/tap/mdmend
```

### Upgrade

```bash
brew upgrade mdmend
```

### Uninstall

```bash
brew uninstall mdmend
brew untap mohitmishra786/tap
```

## 3. Formula Variants

### From Source

Create `Formula/mdmend.rb` with build from source:

```ruby
class Mdmend < Formula
  desc "Fast Markdown linter and fixer"
  homepage "https://github.com/mohitmishra786/mdmend"
  license "MIT"

  head "https://github.com/mohitmishra786/mdmend.git", branch: "main"

  depends_on "go" => :build

  def install
    system "go", "build", *std_go_args(ldflags: "-s -w"), "./cmd/mdmend"
  end

  test do
    assert_match version.to_s, shell_output("#{bin}/mdmend --version")
  end
end
```

### Universal Binary (Optional)

For Apple Silicon and Intel support:

```ruby
on_macos do
  if Hardware::CPU.arm?
    url "...darwin_arm64.tar.gz"
    sha256 "..."
  else
    url "...darwin_amd64.tar.gz"
    sha256 "..."
  end
end
```

## 4. Homebrew Core Submission

Once mdmend has sufficient adoption, submit to homebrew-core:

### Requirements

- 75+ GitHub stars
- 30+ forks
- Active development
- Used by other projects

### Submission Process

1. Check if formula name is available:
```bash
brew search mdmend
```

2. Fork homebrew-core:
```bash
brew tap homebrew/core
cd "$(brew --repository homebrew/core)"
git checkout -b mdmend
```

3. Create formula in `Formula/m/mdmend.rb`

4. Run audits:
```bash
brew audit --new-formula mdmend
brew style mdmend
brew tests
```

5. Create PR to homebrew-core

### Formula for homebrew-core

```ruby
class Mdmend < Formula
  desc "Fast Markdown linter and fixer"
  homepage "https://github.com/mohitmishra786/mdmend"
  url "https://github.com/mohitmishra786/mdmend/archive/refs/tags/v1.0.0.tar.gz"
  sha256 "..."
  license "MIT"

  depends_on "go" => :build

  def install
    system "go", "build", *std_go_args(ldflags: "-s -w"), "./cmd/mdmend"
  end

  test do
    (testpath/"test.md").write "# Test\n\nHello\tWorld\n"
    output = shell_output("#{bin}/mdmend lint #{testpath}/test.md 2>&1", 1)
    assert_match "MD010", output
  end
end
```

## 5. Automation

### GitHub Actions Workflow

```yaml
name: Update Homebrew Formula

on:
  release:
    types: [published]

jobs:
  update-tap:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Update Homebrew tap
        uses: goreleaser/goreleaser-action@v5
        with:
          args: release --skip-validate
        env:
          GITHUB_TOKEN: ${{ secrets.HOMEBREW_TAP_GITHUB_TOKEN }}
```

### Manual Update Script

Create `scripts/update-homebrew.rb`:

```ruby
#!/usr/bin/env ruby

require 'net/http'
require 'json'
require 'digest'

REPO = "mohitmishra786/mdmend"
FORMULA_PATH = "Formula/mdmend.rb"

# Get latest release
uri = URI("https://api.github.com/repos/#{REPO}/releases/latest")
response = Net::HTTP.get(uri)
release = JSON.parse(response)
version = release['tag_name'].gsub('v', '')

# Download binaries and calculate SHA256
# ... implementation

# Update formula
# ... implementation

puts "Updated formula to version #{version}"
```

## 6. Testing the Formula

### Local Testing

```bash
# Create local formula
brew create https://github.com/mohitmishra786/mdmend/archive/refs/tags/v1.0.0.tar.gz

# Edit formula
brew edit mdmend

# Install from local
brew install --build-from-source Formula/mdmend.rb

# Run tests
brew test mdmend

# Audit
brew audit mdmend
```

### CI Testing

```yaml
name: Test Homebrew Formula

on: [push, pull_request]

jobs:
  test:
    strategy:
      matrix:
        os: [macos-latest, ubuntu-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Homebrew
        id: setup-homebrew
        uses: Homebrew/actions/setup-homebrew@master
      
      - name: Install formula
        run: brew install --build-from-source Formula/mdmend.rb
      
      - name: Test formula
        run: brew test mdmend
      
      - name: Audit formula
        run: brew audit mdmend
```

## Checklist

- [ ] Create homebrew-tap repository
- [ ] Create initial formula
- [ ] Configure goreleaser for auto-publishing
- [ ] Add HOMEBREW_TAP_GITHUB_TOKEN secret
- [ ] Test installation locally
- [ ] Test on macOS (Intel and ARM)
- [ ] Test on Linux
- [ ] Document installation in README
- [ ] Monitor for homebrew-core eligibility

## Troubleshooting

### Common Issues

**Formula not found**
```bash
brew tap mohitmishra786/tap
brew update
```

**Checksum mismatch**
```bash
brew fetch mdmend --force
brew install mdmend
```

**Permission denied**
```bash
sudo chown -R $(whoami) $(brew --prefix)/*
```

### Debug Mode

```bash
brew install --verbose --debug mdmend
```
