---
schema: ravens.domain-hub/v1
domain: security
updated: 2026-08-29
status: active
---

# Security

Secrets, auth, privacy, and local-vs-cloud handling for named consumers (JARVIS, ProjectBrain, Ledger, careerops, ravens). Not a CVE firehose.

## Current guidance

- Pin `github-mcp-server` to v1.10.0+ before any consumer adopts it for repo automation — [github-mcp-server-min-version](./github-mcp-server-min-version.md)

## Active signals

- [SIG-20260822-002](../../signals/SIG-20260822-002.md) — BRIDGEHEAD npm typosquat campaign bridges WSL into Windows
- [SIG-20260827-003](../../signals/SIG-20260827-003.md) — Anthropic unifies Claude memory across chat and Cowork with default-exclude sensitive topics

## Note index

| Slug | Title | Updated | Status |
|------|-------|---------|--------|
| github-mcp-server-min-version | Pin github-mcp-server to v1.10.0+ before adoption | 2026-08-21 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-08-29 | Dropped FIND-20260829-006 (CVE-2026-75130, critical unpatched prompt-injection in Context7 MCP doc server) — security filter fails on named-consumer: no portfolio project (JARVIS/ProjectBrain/Ledger/careerops/ravens) runs Context7 or any docs-serving MCP server today, so there is no secrets/auth/data-location decision to change; the general "treat MCP free-text/custom-instruction fields as untrusted" principle is already this automation's own default posture — revisit if a consumer adopts a docs-serving MCP server |
| 2026-08-28 | Dropped FIND-20260828-004 (GitHub MCP Server 1.11.0 per-call OAuth scope checks) — refines but does not change the existing v1.10.0+ pin; GitHub/OSS filter fails on named-consumer (no portfolio project adopts `github-mcp-server` today, per the existing note's own Limits) — revisit when a consumer actually adopts the server |
| 2026-08-27 | Opened SIG-20260827-003 from FIND-20260827-004 (Anthropic unified Claude memory, chat + Cowork, default-exclude sensitive topics — reference pattern for JARVIS/ProjectBrain, no consumer decision yet) |
| 2026-08-22 | Opened SIG-20260822-002 from FIND-20260822-005 (BRIDGEHEAD npm typosquat WSL→Windows crypto-wallet stealer) |
| 2026-08-21 | Promoted KNOW-security-github-mcp-server-min-version from FIND-20260821-006 |
| 2026-08-17 | Domain hub created |
