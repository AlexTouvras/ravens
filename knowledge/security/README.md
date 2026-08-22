---
schema: ravens.domain-hub/v1
domain: security
updated: 2026-08-22
status: active
---

# Security

Secrets, auth, privacy, and local-vs-cloud handling for named consumers (JARVIS, ProjectBrain, Ledger, careerops, ravens). Not a CVE firehose.

## Current guidance

- Pin `github-mcp-server` to v1.10.0+ before any consumer adopts it for repo automation — [github-mcp-server-min-version](./github-mcp-server-min-version.md)

## Active signals

- [SIG-20260822-002](../../signals/SIG-20260822-002.md) — BRIDGEHEAD npm typosquat campaign bridges WSL into Windows

## Note index

| Slug | Title | Updated | Status |
|------|-------|---------|--------|
| github-mcp-server-min-version | Pin github-mcp-server to v1.10.0+ before adoption | 2026-08-21 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-08-22 | Opened SIG-20260822-002 from FIND-20260822-005 (BRIDGEHEAD npm typosquat WSL→Windows crypto-wallet stealer) |
| 2026-08-21 | Promoted KNOW-security-github-mcp-server-min-version from FIND-20260821-006 |
| 2026-08-17 | Domain hub created |
