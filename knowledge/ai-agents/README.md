---
schema: ravens.domain-hub/v1
domain: ai-agents
updated: 2026-09-28
status: active
---

# AI / agents

Frameworks, protocols (MCP / A2A), and Cursor agent patterns that change delivery choices on the field card and in ProjectBrain / JARVIS.

## Current guidance

- Prefer MCP `2026-07-28` stateless request/response + CIMD over session handshake / DCR — [mcp-2026-07-28-stateless](./mcp-2026-07-28-stateless.md)
- Prefer Cursor Agent Skills as the portable, version-controlled extension layer over duplicated rules/commands — [cursor-skills-portable-extension](./cursor-skills-portable-extension.md)

## Active signals

- [SIG-20260908-001](../../signals/SIG-20260908-001.md) — Microsoft Agent Framework Python 1.19.0 explicit HTTP cookies, ZIP-only MCP archives, per-invocation MCP sessions
- [SIG-20260928-001](../../signals/SIG-20260928-001.md) — Cursor Rollouts + Security Review last-mile PR bots (Teams/Enterprise; no auto-merge)

## Note index

| Slug | Title | Updated | Status |
|------|-------|---------|--------|
| mcp-2026-07-28-stateless | MCP 2026-07-28 is a stateless request/response core | 2026-08-11 | active |
| cursor-skills-portable-extension | Prefer Cursor Agent Skills as the portable extension layer | 2026-08-12 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-09-28 | Opened SIG-20260928-001 from FIND-20260928-001 (Cursor 23 Sep changelog: Rollouts deploy-health monitor + Security Review exploitable-bug PR comments; Teams/Enterprise; Rollouts will not merge or roll back alone). Signal until HITL / enablement settles. Expired SIG-20260909-001 (OpenAI Agents 0.22.2), SIG-20260911-001 (Cursor Projects), and SIG-20260912-001 (Google ADK 2.9.0) on default 14-day expiry — no named-consumer pin; 0.22.3 and ADK 2.10.0 do not reopen those contracts; Rollouts is a separate last-mile surface, not a Projects re-open. |
| 2026-09-21 | Updated SIG-20260908-001 from FIND-20260921-001 — raised the evaluate pin from microsoft/agent-framework python-1.18.0 to python-1.19.0 (explicit HTTP cookie persistence; ZIP-only MCP skill archives; per-invocation provider MCP sessions). 1.18.0 SecretString / Lab / Foundry-checkpoint contract unchanged. Expired SIG-20260903-002 (Cursor Self-Hosted Machines) and SIG-20260904-001 (LangChain 1.4.0 MCPAdapter) on default 14-day expiry — no named-consumer adoption; langchain==1.4.2 is an adapter patch, not a new contract. |
| 2026-09-12 | Opened SIG-20260912-001 from FIND-20260912-001 (google/adk-python v2.9.0: FallbackModel failover, YAML graphs, MCP SDK 2.x opt-in; breaking failed-node resume re-run, GCS `local_file_root`, InMemory `SessionNotFoundError`; Apache-2.0; evaluate this month). Expired SIG-20260829-003 (Cursor Origin) on default 14-day expiry — no named-consumer adoption. |
| 2026-09-11 | Opened SIG-20260911-001 from FIND-20260911-001 (Cursor Projects 10 Sep changelog: coordinator plans/delegates/returns work, shared context, Slack/schedule/PR subscriptions; beta; signal until HITL rules settle). Updated SIG-20260908-001 from FIND-20260911-002 — raised the evaluate pin from microsoft/agent-framework python-1.17.0 to python-1.18.0 (`SecretString` masked wrapper; Lab removed from `core[all]`; Foundry checkpoint allowlist). 1.17.0 middleware / `agent-hooks` contract unchanged. |
| 2026-09-10 | Updated SIG-20260909-001 from FIND-20260910-001 — raised the evaluate pin from openai/openai-agents-python v0.22.1 to v0.22.2 (`fix(sandbox): prevent UnixLocal file API symlink races`). MCP-guardrail contract unchanged; still signal-only until a consumer adopts. |
| 2026-09-09 | Opened SIG-20260909-001 from FIND-20260909-001 (openai/openai-agents-python v0.22.1: server-wide MCP tool guardrails + Unix-local sandbox isolation; MIT; evaluate this month, not a prefer/avoid pin). |
| 2026-09-08 | Opened SIG-20260908-001 from FIND-20260908-001 (microsoft/agent-framework python-1.17.0: breaking sequence-only middleware + `agent-hooks` extra removed; MIT; evaluate this month, not a prefer/avoid pin). |
| 2026-09-06 | Expired SIG-20260823-001 (Agent Plugins 1.0.0) on default 14-day expiry — no v1.1, no named-consumer packaging decision; Cursor Skills prefer-rule unchanged. |
| 2026-09-05 | Expired SIG-20260822-001 (SEP-2640 skills-over-MCP draft) on default 14-day expiry with no further draft churn or SDK convergence; standing Cursor Skills prefer-rule unchanged. |
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
