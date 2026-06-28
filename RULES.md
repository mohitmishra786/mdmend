# mdmend Rules Completion Progress

## ✅ Mechanically Auto-Fixable (Implemented)

| Rule | Description | Fix Strategy | Status |
|------|-------------|--------------|--------|
| MD009 | Trailing spaces | Strip trailing whitespace per line | ✅ Done |
| MD010 | Hard tabs | Replace `\t` with configured spaces (default: 4) | ✅ Done |
| MD011 | Reversed link syntax | Regex swap `(text)[url]` → `[text](url)` | ✅ Done |
| MD012 | Multiple consecutive blank lines | Collapse N blank lines → 1 | ✅ Done |
| MD018 | No space after `#` in ATX heading | Insert space: `#Title` → `# Title` | ✅ Done |
| MD019 | Multiple spaces after `#` in ATX | Collapse to single space | ✅ Done |
| MD020 | No space inside hashes (closed ATX) | `#Title#` → `# Title #` | ✅ Done |
| MD021 | Multiple spaces inside hashes (closed ATX) | Normalize spaces | ✅ Done |
| MD022 | Headings not surrounded by blank lines | Insert blank lines above/below | ✅ Done |
| MD023 | Headings not at start of line | Strip leading whitespace from heading lines | ✅ Done |
| MD026 | Trailing punctuation in heading | Strip trailing `.`, `!`, `?`, `:`, `;` | ✅ Done |
| MD027 | Multiple spaces after blockquote `>` | Normalize to single space | ✅ Done |
| MD030 | Spaces after list markers | Normalize `- ` / `1. ` spacing | ✅ Done |
| MD031 | Fenced code blocks not surrounded by blank lines | Insert blank lines around fences | ✅ Done |
| MD032 | Lists not surrounded by blank lines | Insert blank lines around list blocks | ✅ Done |
| MD035 | Horizontal rule style inconsistency | Normalize to configured style (default: `---`) | ✅ Done |
| MD037 | Spaces inside emphasis markers | `* text *` → `*text*` | ✅ Done |
| MD038 | Spaces inside code span | `` ` text ` `` → `` `text` `` | ✅ Done |
| MD039 | Spaces inside link text | `[ text ](url)` → `[text](url)` | ✅ Done |
| MD044 | Proper names capitalization | Replace known improper casings (configurable list) | ✅ Done |
| MD047 | File does not end with single newline | Append `\n` if missing, strip extras | ✅ Done |
| MD048 | Code fence style inconsistency | Normalize to `` ``` `` or `~~~` (configurable) | ✅ Done |
| MD049 | Emphasis style inconsistency | Normalize `*` vs `_` | ✅ Done |
| MD050 | Strong style inconsistency | Normalize `**` vs `__` | ✅ Done |
| MD053 | Unused link/image reference definitions | Remove orphaned `[ref]: url` lines | ✅ Done |
| MD055 | Table pipe style | Normalize leading/trailing pipes | ✅ Done |
| MD058 | Tables not surrounded by blank lines | Insert blank lines around tables | ✅ Done |

**Progress: 27/27 (100%)**

---

## 🧠 Heuristic-Fixable (Implemented)

| Rule | Description | mdmend Strategy | Status |
|------|-------------|-----------------|--------|
| MD040 | Fenced code block has no language | Infer from: shebang line, content patterns, surrounding heading/filename context, file extension mentions. Configurable fallback (default: `text`). Always runs in `--suggest` mode unless `--aggressive` flag set. | ✅ Done |
| MD034 | Bare URL in text | Wrap in `<url>` angle brackets as safe default. Skip URLs inside code spans, code blocks, existing links. Configurable: `--url-style=angle` (default) or `--url-style=link` (converts to `[url](url)`). | ✅ Done |

**Progress: 2/2 (100%)**

---

## ⚠️ Report-Only (Not Auto-Fixable - By Design)

| Rule | Description | Why Not Auto-Fixable | Status |
|------|-------------|---------------------|--------|
| MD001 | Heading levels only increment by one | Requires restructuring document hierarchy | ⚠️ Report-only |
| MD002 | First heading top-level *(deprecated)* | Deprecated, skip | ⚠️ Report-only |
| MD003 | Heading style inconsistency | Preference-dependent | ⚠️ Report-only |
| MD004 | Unordered list style | `*` vs `-` vs `+` — author intent | ⚠️ Report-only |
| MD005 | Inconsistent list indentation | Restructuring risk | ⚠️ Report-only |
| MD007 | Unordered list indentation | Risk of breaking nesting | ⚠️ Report-only |
| MD013 | Line length | Reformatting prose changes content | ⚠️ Report-only |
| MD014 | Dollar signs before commands | Removing `$` changes meaning | ⚠️ Report-only |
| MD024 | Duplicate heading content | Requires author to rename | ⚠️ Report-only |
| MD025 | Multiple top-level headings | Structural decision | ⚠️ Report-only |
| MD028 | Blank line inside blockquote | Intent unclear | ⚠️ Report-only |
| MD029 | Ordered list prefix style | `1.` vs `1)` — preference | ⚠️ Report-only |
| MD033 | Inline HTML | Cannot safely remove HTML | ⚠️ Report-only |
| MD036 | Emphasis used instead of heading | Semantic judgment | ⚠️ Report-only |
| MD041 | First line not top-level heading | Structural | ⚠️ Report-only |
| MD042 | Empty links `[]()` | Author must provide target | ⚠️ Report-only |
| MD043 | Required heading structure | Config-dependent | ⚠️ Report-only |
| MD045 | Images without alt text | Author must write alt text | ⚠️ Report-only |
| MD046 | Code block style | Fenced vs indented — preference | ⚠️ Report-only |
| MD051 | Invalid link fragments | Link targets may not exist | ⚠️ Report-only |
| MD052 | Undefined reference labels | Must know which label was intended | ⚠️ Report-only |
| MD054 | Link and image style | Inline vs reference — preference | ⚠️ Report-only |
| MD056 | Table column count inconsistency | Requires author to add/remove data | ⚠️ Report-only |
| MD057 | Broken relative links | Cannot auto-create target files | ⚠️ Report-only |
| MD066 | Footnote reference validation | Requires author to add/remove footnotes | ⚠️ Report-only |
| MD067 | Footnote definition order | Reordering may change author intent | ⚠️ Report-only |
| MD068 | Empty footnote definitions | Author must provide content | ⚠️ Report-only |

**These rules are intentionally NOT auto-fixable by design.**

---

## 🔧 Opt-In Auto-Fixable

| Rule | Description | Fix Strategy | Status |
|------|-------------|--------------|--------|
| MD070 | Nested markdown code fence length | Extend outer fence markers to clear inner content | ✅ Done (opt-in) |
| MD073 | Table of contents validation | Rebuild marker-based TOC from headings | ✅ Done (opt-in) |

---

## Summary

| Category | Implemented | Total | Progress |
|----------|-------------|-------|----------|
| ✅ Mechanically Auto-Fixable | 27 | 27 | 100% |
| 🧠 Heuristic-Fixable | 2 | 2 | 100% |
| ⚠️ Report-Only | 27 | 27 | 100% |
| 🔧 Opt-In Auto-Fixable | 2 | 2 | 100% |
| **Total Auto-Fixable** | **40** | **40** | **100%** |
