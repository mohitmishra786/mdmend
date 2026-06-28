# Enterprise Guide

Operational patterns for running mdmend in regulated, air-gapped, and large monorepo environments.

## Air-gapped installation

mdmend ships as a **single static binary** with no runtime dependencies. No npm registry or Go module proxy is required after the binary is on disk.

### Option 1: Pre-built release artifacts

1. On a connected machine, download from [GitHub Releases](https://github.com/mohitmishra786/mdmend/releases):
   - `mdmend_<version>_linux_amd64.tar.gz`
   - `mdmend_<version>_darwin_arm64.tar.gz`
   - `mdmend_<version>_windows_amd64.zip`
2. Verify checksums from `checksums.txt` in the release bundle.
3. Transfer artifacts to the air-gapped network (approved media or internal artifact mirror).
4. Install to a standard path:

```bash
# Linux / macOS
sudo install -m 755 mdmend /usr/local/bin/mdmend
mdmend version
```

```powershell
# Windows
Expand-Archive mdmend_windows_amd64.zip -DestinationPath C:\Tools\mdmend
# Add C:\Tools\mdmend to PATH
mdmend version
```

### Option 2: Build from source (Go toolchain only)

On a build host with Go 1.22+:

```bash
git clone https://github.com/mohitmishra786/mdmend.git
cd mdmend
go build -o mdmend ./cmd/mdmend
```

Copy the resulting binary into the air-gapped environment. The build uses only modules vendored or cached on the build host.

### Option 3: Internal package mirrors

| Channel | Air-gap pattern |
|---------|-----------------|
| **DEB/RPM** | Mirror `.deb` / `.rpm` from releases into internal apt/yum repos |
| **npm** | Mirror `@mohitmishra7/mdmend` to Artifactory/Nexus; `npm install` uses bundled platform binary |
| **Container** | Build image once, push to internal registry; CI pulls from private registry |

### npm without public registry

```bash
# On connected host: pack the npm tarball
cd npm/mdmend && npm pack

# Transfer mdmend-1.0.0.tgz internally, then:
npm install -g ./mdmend-1.0.0.tgz
```

### Verification checklist

- [ ] `mdmend version` prints expected version and commit
- [ ] `sha256sum` matches release `checksums.txt`
- [ ] `mdmend lint --help` runs without network access
- [ ] Config loaded from `.mdmend.yml` in repo root

## Monorepo configuration

Large repositories typically need **root config + package overrides** and scoped lint targets.

### Root `.mdmend.yml`

Place one config at the repository root:

```yaml
disable:
  - MD013   # defer line length to formatters
  - MD033   # HTML allowed in internal docs

rules:
  MD040:
    fallback: text
    confidence: 0.7
  MD044:
    names:
      - Kubernetes
      - GitHub
      - JavaScript

ignore:
  - "**/node_modules/**"
  - "**/vendor/**"
  - "**/dist/**"
  - "**/*.generated.md"
  - "docs/archive/**"
```

### Per-package overrides

mdmend walks from the lint target path and loads the nearest `.mdmend.yml` when using `--config`:

```bash
# Lint only the docs subtree with its own config
mdmend lint services/payments/docs --config services/payments/docs/.mdmend.yml
```

Alternatively, use `--rules` and `--ignore` flags in package-specific CI jobs without duplicating full config files.

### Monorepo CI matrix

```yaml
# .github/workflows/markdown.yml
strategy:
  matrix:
    include:
      - path: docs
        config: .mdmend.yml
      - path: packages/api/README.md
        config: packages/api/.mdmend.yml
      - path: services/billing/docs
        config: services/billing/docs/.mdmend.yml
steps:
  - run: mdmend lint ${{ matrix.path }} --config ${{ matrix.config }} --output json
```

### Nx / Turborepo / Bazel

- **Nx**: add `mdmend lint docs/` as a `run-commands` target; cache on `docs/**` and `.mdmend.yml`.
- **Turborepo**: declare `mdmend` as a global dependency in `turbo.json`; run per-package README tasks.
- **Bazel**: wrap `mdmend lint` in a `genrule` or `sh_test` with `data` globs for `*.md`.

### Performance at scale

```bash
# Lint changed files only (Git)
git diff --name-only origin/main -- '*.md' | xargs -r mdmend lint

# Parallel fix preview (mdmend uses internal worker pool)
mdmend fix docs/ --dry-run --workers 8
```

Run `make benchmark` locally to compare lint/fix throughput on your corpus.

## Safe fix workflow

Auto-fix is powerful; enterprise teams should treat `mdmend fix` like a code formatter with review gates.

### 1. Always preview first

```bash
# See what would change
mdmend fix docs/ --dry-run

# Review unified diffs
mdmend fix docs/ --dry-run --diff

# Heuristic rules (MD040, MD034) need explicit opt-in
mdmend fix docs/ --dry-run --aggressive --diff
```

### 2. Scope fixes narrowly

```bash
# Single file
mdmend fix README.md --diff

# Specific rules only
mdmend fix docs/ --rules MD009,MD010,MD047 --diff
```

### 3. Branch and review policy

Recommended flow:

1. CI runs `mdmend lint` (no fix) on pull requests — **blocking**.
2. Scheduled or on-demand job runs `mdmend fix` on a bot branch.
3. Engineers review the PR diff; never auto-merge heuristic fixes (`--aggressive`) without human review.
4. Tag releases / changelogs excluded via `ignore` patterns.

### 4. Heuristic rules

| Rule | Risk | Recommendation |
|------|------|----------------|
| MD040 | Wrong language tag on code fences | Use `--dry-run`; tune `confidence` in config; use `--aggressive` only in dedicated cleanup PRs |
| MD034 | URL wrapped as angle brackets vs links | Set `rules.MD034.style` explicitly (`angle` or `link`) |

```yaml
rules:
  MD040:
    fallback: text
    confidence: 0.8   # higher = fewer false positives
  MD034:
    style: angle
    skip_patterns:
      - "internal\\.corp\\.example"
```

### 5. Rollback

mdmend modifies files in place. Use Git:

```bash
git checkout -- docs/
# or revert the merge commit
```

For extra safety, run fixes only on a clean working tree and commit atomically per directory or package.

## CI patterns

### Strict lint (fail on any violation)

```yaml
- name: Lint Markdown
  run: mdmend lint . --output json
```

Exit code `1` when violations exist (default).

### Advisory lint (report only)

```yaml
- name: Advisory Markdown lint
  run: mdmend lint . --exit-zero --stats
```

Use during migration or for legacy directories.

### Threshold gate

```yaml
- name: Lint with violation budget
  run: mdmend lint . --max-violations 25
```

Fails only when violations exceed the budget — useful for incremental cleanup.

### JSON artifacts for dashboards

```yaml
- name: Lint and upload report
  run: mdmend lint . --output json --no-color > mdmend-report.json

- uses: actions/upload-artifact@v4
  with:
    name: mdmend-report
    path: mdmend-report.json
```

Parse `summary.total_violations` and per-file `violations[].rule` for trend dashboards.

### Fix in CI (use with caution)

```yaml
- name: Apply safe fixes
  run: mdmend fix docs/ --rules MD009,MD010,MD012,MD047

- name: Commit fixes
  run: |
    git config user.name "mdmend-bot"
    git config user.email "mdmend-bot@internal.corp"
    git add -A && git diff --staged --quiet || git commit -m "chore: mdmend safe fixes"
```

Restrict to mechanical rules; exclude `--aggressive` from unattended pipelines.

### GitHub Action (composite)

```yaml
- uses: mohitmishra786/mdmend@v1
  with:
    install-method: npm   # or go
    version: 1.0.0
    args: lint . --output json
```

For air-gapped runners, pre-install the binary and call `mdmend` directly (skip the action's install step).

### GitLab CI

```yaml
markdown-lint:
  image: alpine:latest
  before_script:
    - wget -qO /usr/local/bin/mdmend https://internal-artifacts/mdmend-linux-amd64
    - chmod +x /usr/local/bin/mdmend
  script:
    - mdmend lint docs/ --output json
  artifacts:
    paths:
      - mdmend-report.json
    when: always
```

### Pre-commit (developer workstations)

```yaml
# .pre-commit-config.yaml
repos:
  - repo: local
    hooks:
      - id: mdmend-lint
        name: mdmend lint
        entry: mdmend lint
        language: system
        types: [markdown]
        pass_filenames: true
```

### Policy summary

| Mode | Command | Use case |
|------|---------|----------|
| Block PRs | `mdmend lint .` | Production docs, customer-facing content |
| Warn only | `mdmend lint . --exit-zero` | Migration period |
| Budget | `mdmend lint . --max-violations N` | Incremental debt reduction |
| Safe autofix | `mdmend fix . --dry-run --diff` | Local / bot PRs with review |
| Full autofix | `mdmend fix . --aggressive` | Manual cleanup sprints only |

## Security and compliance

- **No telemetry**: mdmend does not phone home; suitable for air-gapped and regulated networks.
- **Supply chain**: Prefer checksum-verified release binaries or builds from audited source tags.
- **Secrets**: MD034 and MD057 inspect URLs and links; keep docs free of embedded credentials regardless of linter.
- See [SECURITY.md](../SECURITY.md) for vulnerability reporting.

## Support

- Migration from markdownlint: [MIGRATION.md](MIGRATION.md)
- VS Code integration: [editors/vscode/README.md](../editors/vscode/README.md)
- Rule reference: [RULES.md](../RULES.md)