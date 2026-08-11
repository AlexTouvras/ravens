---
schema: ravens.knowledge/v1
id: KNOW-ai-agents-mcp-2026-07-28-stateless
domain: ai-agents
title: MCP 2026-07-28 is a stateless request/response core
status: active
updated: 2026-08-11
created: 2026-08-11
confidence: high
tags: [mcp, protocols, auth, cimd]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260811-001
canonical_sources:
  - url: https://blog.modelcontextprotocol.io/posts/2026-07-28/
    title: The 2026-07-28 Specification | Model Context Protocol Blog
    accessed: 2026-08-11
---

# MCP 2026-07-28 is a stateless request/response core

## Guidance

- Target MCP `2026-07-28` (or newer) for any new MCP server or client seam — treat the old initialize/`Mcp-Session-Id` session model as legacy.
- Design servers as request/response: each call carries protocol version, client identity, and capabilities in `_meta`; do not rely on protocol-level sessions for load balancing.
- Prefer Client ID Metadata Documents (CIMD) for OAuth client registration; treat Dynamic Client Registration (DCR) as deprecated compatibility only.
- If application state must span calls, mint an explicit tool-returned handle and pass it as an argument — do not hide session state in the transport.
- Plan migrations with the twelve-month deprecation window; new work should not adopt deprecated Roots/Sampling/Logging or legacy HTTP+SSE transport.

## Rationale

The official MCP blog for the `2026-07-28` release documents retirement of the initialize handshake and session header, self-describing per-request `_meta`, header-based routing (`Mcp-Method` / `Mcp-Name`), and a formal shift from DCR to CIMD. Those are durable protocol rules, not a one-week product announcement.

## Limits / do not apply when

- Existing production servers still on pre-`2026-07-28` may keep sessions until a planned upgrade; do not break live automations mid-flight without a migration note.
- Application-level multi-step flows (approvals, long tasks) still need explicit patterns (e.g. MRTR / Tasks extension) — “stateless core” does not mean “no durable work.”
- Per-language MCP SDK churn alone is out of scope for this note; follow the spec and Tier-1 SDK migration guides.

## Related

- Domain hub: [ai-agents](./README.md)
- Consumer hint: agentic-ai-field-card protocol guidance
