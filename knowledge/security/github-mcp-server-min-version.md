---
schema: ravens.knowledge/v1
id: KNOW-security-github-mcp-server-min-version
domain: security
title: Pin github-mcp-server to v1.10.0+ before adoption
status: active
updated: 2026-08-21
created: 2026-08-21
confidence: high
tags: [github, mcp, oss, credential-hardening]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260821-006
canonical_sources:
  - url: https://github.com/github/github-mcp-server/releases/tag/v1.10.0
    title: GitHub MCP Server 1.10.0 — Release notes
    accessed: 2026-08-21
---

# Pin github-mcp-server to v1.10.0+ before adoption

## Guidance

- Before wiring GitHub's `github-mcp-server` into ProjectBrain, JARVIS, or any ravens/careerops repo-automation stack, pin to **v1.10.0 or later** (the "safer by default" hardening release; v1.10.1 patches it further).
- Confirm the MCP client supports form elicitation before relying on the repository-deletion confirmation gate — deletion requires an eligible modern MCP client with elicitation support and the correct scopes, not just the server version.
- Expect bearer credentials to be restricted to configured GitHub authorities with HTTPS enforced by default; do not disable that restriction to work around a misconfigured client — fix the client instead.

## Rationale

GitHub's own v1.10.0 release notes describe the prior defaults as less safe (broader bearer-credential scope, unconfirmed symlink updates, unconfirmed destructive deletes). A minimum-version pin is a durable adoption rule that holds regardless of any single day's release-notes headline.

## Limits / do not apply when

- Only applies once/if a portfolio project actually adopts `github-mcp-server`; no named consumer runs it today.
- Does not cover other MCP servers' credential handling — evaluate each on its own release notes.
- Re-check this minimum version if a later release introduces a more significant hardening change, a regression, or a new CVE.

## Related

- Domain hub: [security](./README.md)
