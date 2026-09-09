---
schema: ravens.domain-hub/v1
domain: security
updated: 2026-09-09
status: active
---

# Security

Secrets, auth, privacy, and local-vs-cloud handling for named consumers (JARVIS, ProjectBrain, Ledger, careerops, ravens). Not a CVE firehose.

## Current guidance

- Pin `github-mcp-server` to v1.12.1+ before any consumer adopts it for repo automation — [github-mcp-server-min-version](./github-mcp-server-min-version.md)

## Active signals

- [SIG-20260827-003](../../signals/SIG-20260827-003.md) — Anthropic unifies Claude memory across chat and Cowork with default-exclude sensitive topics

## Note index

| Slug | Title | Updated | Status |
|------|-------|---------|--------|
| github-mcp-server-min-version | Pin github-mcp-server to v1.12.1+ before adoption | 2026-09-09 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-09-09 | Updated KNOW-security-github-mcp-server-min-version from FIND-20260909-003 — raised the adoption pin from v1.12.0+ to v1.12.1+ (OAuth protected-resource metadata advertised extra scopes on 1.12.0; 1.12.1 advertises only default scopes). Write-safety / ruleset-tool contract from 1.12.0 is unchanged. |
| 2026-09-05 | Expired SIG-20260822-002 (BRIDGEHEAD npm typosquat) on default 14-day expiry with no named-consumer exposure and no durable lockfile/allowlist rule. |
| 2026-09-04 | Updated KNOW-security-github-mcp-server-min-version from FIND-20260904-004 — raised the adoption pin from v1.10.0+ to v1.12.0+ (safer writes: pin merge HEADs, recover file SHAs, least-privilege `public_repo`, dropped-label detection; plus ruleset/custom-property tools). 1.11.0 stayed a no-op pin refine; 1.12.0 is the hardening step the note said to re-check. |
| 2026-08-29 | Dropped FIND-20260829-006 (CVE-2026-75130, critical unpatched prompt-injection in Context7 MCP doc server) — security filter fails on named-consumer: no portfolio project (JARVIS/ProjectBrain/Ledger/careerops/ravens) runs Context7 or any docs-serving MCP server today, so there is no secrets/auth/data-location decision to change; the general "treat MCP free-text/custom-instruction fields as untrusted" principle is already this automation's own default posture — revisit if a consumer adopts a docs-serving MCP server |
| 2026-08-28 | Dropped FIND-20260828-004 (GitHub MCP Server 1.11.0 per-call OAuth scope checks) — refines but does not change the existing v1.10.0+ pin; GitHub/OSS filter fails on named-consumer (no portfolio project adopts `github-mcp-server` today, per the existing note's own Limits) — revisit when a consumer actually adopts the server |
| 2026-08-27 | Opened SIG-20260827-003 from FIND-20260827-004 (Anthropic unified Claude memory, chat + Cowork, default-exclude sensitive topics — reference pattern for JARVIS/ProjectBrain, no consumer decision yet) |
| 2026-08-22 | Opened SIG-20260822-002 from FIND-20260822-005 (BRIDGEHEAD npm typosquat WSL→Windows crypto-wallet stealer) |
| 2026-08-21 | Promoted KNOW-security-github-mcp-server-min-version from FIND-20260821-006 |
| 2026-08-17 | Domain hub created |
