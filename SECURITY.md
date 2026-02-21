# Security Policy

This document outlines the security policy for mdmend.

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | Yes                |
| < 1.0   | No (pre-release)   |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please report it responsibly.

### How to Report

**Do not** report security vulnerabilities through public GitHub issues.

Instead, please report them via:

1. **GitHub Security Advisories** (preferred)
   - Go to [Security Advisories](https://github.com/mohitmishra786/mdmend/security/advisories)
   - Click "Report a vulnerability"
   - Fill out the form with details

2. **Email** (alternative)
   - Send to: security@example.com
   - Subject: `[SECURITY] mdmend vulnerability report`

### What to Include

Please include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)
- Your contact information

### Response Timeline

| Stage | Timeline |
|-------|----------|
| Initial response | Within 48 hours |
| Vulnerability confirmation | Within 5 business days |
| Fix development | Depends on severity |
| Security advisory | After fix is released |

### Disclosure Policy

- We follow responsible disclosure
- We will credit you in the security advisory (unless you prefer to remain anonymous)
- We request that you do not disclose the vulnerability publicly until we have released a fix

## Security Best Practices

When using mdmend:

### File System Safety

- mdmend modifies files in place by default
- Use `--dry-run` to preview changes before applying
- Use version control (git) to track changes
- Review diffs with `--diff` before committing

### Configuration

- Review `.mdmend.yml` before using in production
- Be cautious with `--aggressive` flag in CI/CD
- Validate configuration files from untrusted sources

### CI/CD Integration

- Pin to specific versions in CI pipelines
- Review changes before auto-committing
- Use in read-only mode for external contributions

## Security Features

mdmend includes several safety features:

- **Atomic writes**: Files are written atomically to prevent corruption
- **Dry-run mode**: Preview changes without modifying files
- **Diff output**: Review exact changes before applying
- **Path validation**: Only processes intended files
- **Ignore patterns**: Exclude sensitive files

## Known Security Considerations

### File Overwrites

mdmend overwrites files in place. Always:
- Use version control
- Run with `--dry-run` first
- Review changes before committing

### Arbitrary File Access

mdmend processes files matching glob patterns. Ensure:
- Ignore patterns are configured correctly
- Untrusted input is not passed as file paths
- CI pipelines restrict file access appropriately

## Security Updates

Security updates are released as patch versions and announced via:

- GitHub Releases
- GitHub Security Advisories
- Project changelog

## Contact

For security-related questions (non-vulnerability):
- Open a GitHub Discussion
- Email: security@example.com

Thank you for helping keep mdmend secure.
