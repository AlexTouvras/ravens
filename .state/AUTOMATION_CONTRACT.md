# Automation contract

> Repo-scoped contract for Cursor Automations and other headless agent runs.
> IDE agents use the same `.state/` files plus optional ProjectBrain MCP.

**Last updated:** 2026-09-02

## Runtime

| Field | Value |
|-------|-------|
| Repo | `AlexTouvras/ravens` |
| Branch | `main` |
| Primary verify | `npm run verify` exits 0 |
| Ship gate | `npm run ship:check` (runs verify) |
| Playbooks | `agents/huginn.md`, `agents/muninn.md`, `agents/heimdall.md`, `docs/runbook.md` |

## Automations

| Name | Trigger | Output | Human gate |
|------|---------|--------|------------|
| Huginn | Daily 08:00 | `#ravens` + `inbox/YYYY-MM-DD.md` | review inbox |
| Muninn | GitHub push `huginn:` | `#ravens` knowledge signals | review signals |
| Heimdall | Sun 10:00 Helsinki | `watch/` on `main` | review clips; sync fitness snapshot |

## Scope (one run = one item)

| Agent | One run produces |
|-------|------------------|
| Huginn | One daily inbox file |
| Muninn | Distill from one `huginn:` push |
| Heimdall | One weekly `watch/` pass |

## Read order (before acting)

1. `.state/AUTOMATION_CONTRACT.md` (this file)
2. Agent playbook (`agents/<name>.md`)
3. `.state/ARCHITECTURE.md`
4. `.state/CURRENT_TASK.md`

Do **not** depend on ProjectBrain MCP or chat history.

## Write order (before exit)

1. Complete agent output per playbook
2. `npm run verify` — must exit 0
3. Commit + push if playbook requires
4. Update `CURRENT_TASK.md` with verify output

## Out of scope

- Adding a database before verify + volume prove the need
- Inventing signals or inbox content

## IDE coexistence

IDE sessions may use ProjectBrain MCP. Automations use this file + `.state/` only.

Legacy copy: `docs/automation-contract.md` points here.
