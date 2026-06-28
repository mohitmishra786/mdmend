# Rule Audit (#11)

Audit of auto-fixable rules for markdown span-awareness (June 2026).

## High-risk rules

| Rule | Status | Notes |
|------|--------|-------|
| MD049 | Fixed (#5) | Uses MaskInlineCode |
| MD050 | Fixed (#5) | Uses MaskInlineCode |
| MD030 | Fixed (#6) | Strong emphasis guard |
| MD040 | Fixed (#7) | Opening fence only |
| MD034 | Pass | removeCodeSpans / mask |
| MD037 | Pass | Emphasis-only regex |
| MD038 | Pass | Code span regex scoped |
| MD039 | Pass | Link bracket regex |
| MD044 | Pass | Word-boundary proper names |

## Medium-risk rules

All structural rules (MD003–MD032, MD047, MD048, MD053, MD055, MD056, MD058) operate on line structure or fenced blocks without cross-span regex replacement. No issues found.

## Requirement for new rules

All new fixable rules must use `internal/markdown` span utilities when applying regex-based fixes.