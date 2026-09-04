---
schema: ravens.domain-hub/v1
domain: ai-agents
updated: 2026-09-04
status: active
---

# AI / agents

Frameworks, protocols (MCP / A2A), and Cursor agent patterns that change delivery choices on the field card and in ProjectBrain / JARVIS.

## Current guidance

- Prefer MCP `2026-07-28` stateless request/response + CIMD over session handshake / DCR — [mcp-2026-07-28-stateless](./mcp-2026-07-28-stateless.md)
- Prefer Cursor Agent Skills as the portable, version-controlled extension layer over duplicated rules/commands — [cursor-skills-portable-extension](./cursor-skills-portable-extension.md)

## Active signals

- [SIG-20260822-001](../../signals/SIG-20260822-001.md) — SEP-2640 "skills over MCP" discovery draft keeps changing shape
- [SIG-20260823-001](../../signals/SIG-20260823-001.md) — Agent Plugins 1.0.0 vendor-neutral Agent Skills + MCP packaging spec
- [SIG-20260829-003](../../signals/SIG-20260829-003.md) — Cursor Origin removes the GitHub prerequisite for starting a cloud agent
- [SIG-20260831-002](../../signals/SIG-20260831-002.md) — Pydantic AI 2.36.0 public durable-execution backend API + named `@durable_operation`
- [SIG-20260903-002](../../signals/SIG-20260903-002.md) — Cursor Self-Hosted Machines keep Cloud Agent tool execution on your own network
- [SIG-20260904-001](../../signals/SIG-20260904-001.md) — LangChain 1.4.0 first-party `langchain.mcp` / `MCPAdapter` stable pin

## Note index

| Slug | Title | Updated | Status |
|------|-------|---------|--------|
| mcp-2026-07-28-stateless | MCP 2026-07-28 is a stateless request/response core | 2026-08-11 | active |
| cursor-skills-portable-extension | Prefer Cursor Agent Skills as the portable extension layer | 2026-08-12 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-09-04 | Opened SIG-20260904-001 from FIND-20260904-003 (LangChain 1.4.0 first-party `langchain.mcp` / `MCPAdapter`; GitHub/OSS signal until a consumer pins it). Revisited SIG-20260831-002 — Huginn noted Pydantic AI 2.39.0 as a model-catalog increment, not a new clone-vs-build SIG. |
| 2026-09-03 | Opened SIG-20260903-002 from FIND-20260903-002 (Cursor Self-Hosted Machines, 2 Sep changelog — tool execution on a worker you manage; signal until a named consumer adopts or requires it) |
| 2026-09-01 | Revisited SIG-20260831-002 — Huginn noted Pydantic AI 2.37.0 as a durable-execution bugfix follow-on; no new clone-vs-build SIG |
| 2026-08-31 | Opened SIG-20260831-002 from FIND-20260831-002 (Pydantic AI 2.36.0 public durable-execution backend API + required `@durable_operation` name; GitHub/OSS signal until a consumer adopts a pin) |
| 2026-08-29 | Opened SIG-20260829-003 from FIND-20260829-003 (Cursor Origin removes the GitHub prerequisite for starting a cloud agent — new bootstrap capability, no adoption decision yet) |
| 2026-08-26 | Expired SIG-20260812-001 (Cursor Automations `/automate`/triggers) — hit default expiry with no field-card HITL rule or ravens Subscriptions/`/goal` migration decision |
| 2026-08-25 | Expired SIG-20260811-001 (no fresh Workspace-write mutation reports or HITL rule in the intervening two weeks) |
| 2026-08-23 | Opened SIG-20260823-001 from FIND-20260823-002 (Agent Plugins 1.0.0 cross-vendor packaging spec); linked FIND-20260823-001 into SIG-20260812-001 — same 19 Aug Cursor changelog, no new SIG |
| 2026-08-22 | Opened SIG-20260822-001 from FIND-20260822-001 (SEP-2640 skills-over-MCP draft churn; corroborates existing cursor-skills-portable-extension guidance) |
| 2026-08-21 | Linked FIND-20260821-001 (Cursor Subscriptions + `/goal`) into SIG-20260812-001 — same watch item, no new SIG |
| 2026-08-12 | Promoted KNOW-ai-agents-cursor-skills-portable-extension; opened SIG-20260812-001 |
| 2026-08-11 | Promoted KNOW-ai-agents-mcp-2026-07-28-stateless; opened SIG-20260811-001 |
| 2026-08-10 | Domain hub created (foundation) |
