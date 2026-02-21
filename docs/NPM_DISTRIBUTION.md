# npm Distribution Plan

This document outlines the plan for publishing mdmend as an npm package.

## Overview

The npm package `@mdmend/cli` will wrap the Go binary, downloading the appropriate pre-compiled binary for the user's platform during installation.

## Package Structure

```text
dist/npm/
├── package.json        # Package metadata
├── install.js          # Post-install script
├── README.md           # Package-specific readme
└── LICENSE             # MIT license
```

## Implementation Steps

### Step 1: Create package.json

```json
{
  "name": "@mdmend/cli",
...
  "engines": {
    "node": ">=18"
  },
...
}
```

### Step 2: Create install.js

The install script should:

1. Detect platform (darwin, linux, win32)
2. Detect architecture (x64, arm64)
3. Download the appropriate binary from GitHub Releases
4. Extract and place in `bin/` directory
5. Make executable (Unix)

```javascript
const https = require('https');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const VERSION = process.env.MDMEND_VERSION || 'latest';
const GITHUB_REPO = 'mohitmishra786/mdmend';

function getPlatform() {
  switch (os.platform()) {
    case 'darwin': return 'darwin';
    case 'linux': return 'linux';
    case 'win32': return 'windows';
    default: throw new Error(`Unsupported platform: ${os.platform()}`);
  }
}

function getArch() {
  switch (os.arch()) {
    case 'x64': return 'amd64';
    case 'arm64': return 'arm64';
    default: throw new Error(`Unsupported architecture: ${os.arch()}`);
  }
}

function getDownloadUrl(version) {
  const platform = getPlatform();
  const arch = getArch();
  const ext = platform === 'windows' ? 'zip' : 'tar.gz';
  const versionTag = version === 'latest' ? 'latest' : `v${version}`;
  return `https://github.com/${GITHUB_REPO}/releases/${versionTag}/download/mdmend_${version}_${platform}_${arch}.${ext}`;
}

async function getLatestTag() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${GITHUB_REPO}/releases/latest`,
      headers: { 'User-Agent': 'nodejs' }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to fetch latest release: ${res.statusCode}`));
          return;
        }
        const release = JSON.parse(data);
        resolve(release.tag_name.replace(/^v/, ''));
      });
    }).on('error', reject);
  });
}

async function install() {
  const binDir = path.join(__dirname, 'bin');
  const binaryName = getBinaryName();
  const binaryPath = path.join(binDir, binaryName);
  
  if (fs.existsSync(binaryPath)) {
    console.log('mdmend binary already exists, skipping download');
    return;
  }
  
  fs.mkdirSync(binDir, { recursive: true });
  
  let version = VERSION;
  if (version === 'latest') {
    try {
      version = await getLatestTag();
    } catch (err) {
      console.error('Warning: Failed to fetch latest version tag, falling back to literal "latest"');
    }
  }

  const downloadUrl = getDownloadUrl(version);
  console.log(`Downloading mdmend v${version} from ${downloadUrl}`);
  
  const tmpFile = path.join(os.tmpdir(), `mdmend-${Date.now()}.tar.gz`);
  
  try {
    await downloadFile(downloadUrl, tmpFile);
    // ... rest of implementation
  } finally {
    if (fs.existsSync(tmpFile)) {
      fs.unlinkSync(tmpFile);
    }
  }
}

install();
```

### Step 3: Configure npm Publishing

Create `.npmrc` or use npm config:

```bash
# Set registry scope
npm config set @mdmend:registry https://registry.npmjs.org/

# Set access level
npm config set access public
```

### Step 4: Automate with GitHub Actions

Create `.github/workflows/npm-publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      
      - name: Update version
        run: |
          VERSION=${GITHUB_REF#refs/tags/v}
          cd dist/npm
          npm version $VERSION --no-git-tag-version
      
      - name: Publish
        run: cd dist/npm && npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Step 5: Test Locally

```bash
# Pack the package
cd dist/npm
npm pack

# Install locally
npm install -g mdmend-cli-1.0.0.tgz

# Test
mdmend --version
```

## Publishing Commands

```bash
# First-time setup
npm login
npm whoami

# Publish
cd dist/npm
npm publish --access public

# Or with version update
npm version patch  # or minor, major
npm publish
```

## Version Strategy

| Change Type | npm Version | Example |
|-------------|-------------|---------|
| Bug fix | patch | 1.0.0 -> 1.0.1 |
| New feature | minor | 1.0.0 -> 1.1.0 |
| Breaking change | major | 1.0.0 -> 2.0.0 |

## User Installation

After publishing, users can install with:

```bash
# npm
npm install -g @mdmend/cli

# yarn
yarn global add @mdmend/cli

# pnpm
pnpm add -g @mdmend/cli
```

## Maintenance

### Updating Binaries

When a new version is released:

1. Create GitHub Release with binaries
2. Update package.json version
3. Publish to npm

The post-install script will automatically download the correct binary.

### Binary Storage

Binaries are stored on GitHub Releases, not in the npm package. This keeps the package small (~5KB).

## Checklist

- [ ] Create package.json
- [ ] Create install.js
- [ ] Create README.md for npm
- [ ] Set up npm account/organization
- [ ] Configure NPM_TOKEN secret
- [ ] Create GitHub Actions workflow
- [ ] Test package locally
- [ ] Publish to npm
- [ ] Verify installation works
