---
schema: ravens.domain-hub/v1
domain: ai-agents
updated: 2026-08-21
status: active
---

# AI / agents

Frameworks, protocols (MCP / A2A), and Cursor agent patterns that change delivery choices on the field card and in ProjectBrain / JARVIS.

## Current guidance

- Prefer MCP `2026-07-28` stateless request/response + CIMD over session handshake / DCR — [mcp-2026-07-28-stateless](./mcp-2026-07-28-stateless.md)
- Prefer Cursor Agent Skills as the portable, version-controlled extension layer over duplicated rules/commands — [cursor-skills-portable-extension](./cursor-skills-portable-extension.md)

## Active signals

- [SIG-20260811-001](../../signals/SIG-20260811-001.md) — Cursor Google Workspace plugins; approve-gate writes
- [SIG-20260812-001](../../signals/SIG-20260812-001.md) — Cursor Automations `/automate`, GitHub/Slack triggers, computer use default

## Note index

| Slug | Title | Updated | Status |
|------|-------|---------|--------|
| mcp-2026-07-28-stateless | MCP 2026-07-28 is a stateless request/response core | 2026-08-11 | active |
| cursor-skills-portable-extension | Prefer Cursor Agent Skills as the portable extension layer | 2026-08-12 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-08-21 | Linked FIND-20260821-001 (Cursor Subscriptions + `/goal`) into SIG-20260812-001 — same watch item, no new SIG |
| 2026-08-12 | Promoted KNOW-ai-agents-cursor-skills-portable-extension; opened SIG-20260812-001 |
| 2026-08-11 | Promoted KNOW-ai-agents-mcp-2026-07-28-stateless; opened SIG-20260811-001 |
| 2026-08-10 | Domain hub created (foundation) |
