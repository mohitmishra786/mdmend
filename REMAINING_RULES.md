# Remaining Rules Analysis

## Current Coverage

| Package | Coverage |
|---------|----------|
| internal/worker | 100% |
| internal/parser | 94.7% |
| internal/reporter | 92.8% |
| internal/fixer | 89.6% |
| internal/inferrer | 86.7% |
| internal/linter | 81.8% |
| internal/config | 77.6% |
| internal/walker | 61.0% |
| internal/rules | 37.0% |
| pkg/mdmend | 0% |

**Overall internal packages: ~80%**

---

## ✅ Already Implemented (29 rules)

| Rule | Description | Type |
|------|-------------|------|
| MD009 | Trailing spaces | Mechanical |
| MD010 | Hard tabs | Mechanical |
| MD011 | Reversed link syntax | Mechanical |
| MD012 | Multiple blank lines | Mechanical |
| MD018 | No space after # in ATX | Mechanical |
| MD019 | Multiple spaces after # | Mechanical |
| MD020 | No space in closed ATX | Mechanical |
| MD021 | Multiple spaces in closed ATX | Mechanical |
| MD022 | Headings need blank lines | Mechanical |
| MD023 | Headings not at start | Mechanical |
| MD026 | Trailing punctuation in heading | Mechanical |
| MD027 | Multiple spaces after blockquote | Mechanical |
| MD030 | Spaces after list markers | Mechanical |
| MD031 | Fenced code blank lines | Mechanical |
| MD032 | List blank lines | Mechanical |
| MD034 | Bare URL wrapping | Heuristic |
| MD035 | HR style inconsistency | Mechanical |
| MD037 | Spaces in emphasis | Mechanical |
| MD038 | Spaces in code span | Mechanical |
| MD039 | Spaces in link text | Mechanical |
| MD040 | Code fence language | Heuristic |
| MD044 | Proper names capitalization | Mechanical |
| MD047 | Final newline | Mechanical |
| MD048 | Code fence style | Mechanical |
| MD049 | Emphasis style | Mechanical |
| MD050 | Strong style | Mechanical |
| MD053 | Unused link references | Mechanical |
| MD055 | Table pipe style | Mechanical |
| MD058 | Table blank lines | Mechanical |

---

## 🟡 Possible to Implement (Report-Only with Suggestions)

These can report violations and provide suggestions, but auto-fix is risky:

| Rule | Description | Why Not Auto-Fix | Can Suggest? |
|------|-------------|------------------|--------------|
| MD001 | Heading levels increment by one | Restructures document | ✅ Yes |
| MD004 | Unordered list style (* vs -) | Author preference | ✅ Yes |
| MD029 | Ordered list prefix (1. vs 1)) | Author preference | ✅ Yes |
| MD046 | Code block style (fenced vs indented) | Author preference | ✅ Yes |
| MD054 | Link style (inline vs reference) | Author preference | ✅ Yes |

---

## 🔴 Not Possible to Auto-Fix (Structural/Author Decisions)

These require human judgment:

| Rule | Description | Why Not Possible |
|------|-------------|------------------|
| MD002 | First heading top-level | Deprecated |
| MD003 | Heading style (ATX vs Setext) | Preference |
| MD005 | Inconsistent list indentation | Breaks nesting |
| MD007 | Unordered list indentation | Breaks nesting |
| MD013 | Line length | Changes prose content |
| MD014 | Dollar signs before commands | Changes meaning |
| MD024 | Duplicate heading content | Requires rename |
| MD025 | Multiple top-level headings | Structural decision |
| MD028 | Blank line inside blockquote | Intent unclear |
| MD033 | Inline HTML | Can't remove HTML |
| MD036 | Emphasis instead of heading | Semantic judgment |
| MD041 | First line not top-level heading | Structural |
| MD042 | Empty links []() | Needs target URL |
| MD043 | Required heading structure | Config-dependent |
| MD045 | Images without alt text | Needs author input |
| MD051 | Invalid link fragments | Target may not exist |
| MD052 | Undefined reference labels | Unknown intent |
| MD056 | Table column count | Needs data adjustment |
| MD057 | Broken relative links | Can't create files |

---

## Summary

| Category | Count | Status |
|----------|-------|--------|
| ✅ Auto-Fixable (Implemented) | 29 | Done |
| 🟡 Can Report + Suggest | 5 | Possible |
| 🔴 Not Auto-Fixable | 19 | By Design |

**29 of 53 rules (55%) are auto-fixable and implemented.**

The remaining 24 rules are either:
1. **Structural/semantic** - require human judgment (19 rules)
2. **Preference-based** - can suggest but not auto-fix (5 rules)

This is the correct approach - auto-fixing these would risk breaking documents.
