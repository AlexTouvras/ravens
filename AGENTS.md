# AGENTS.md

Instructions for any agent working in **ravens**.

## What this repo is

Shared AI knowledge vault. **Huginn** gathers; **Muninn** remembers. Markdown + git are the database for v1.

## Read before writing

1. `.state/CURRENT_TASK.md` and `.state/ARCHITECTURE.md`
2. `docs/contracts/` for schemas you touch
3. `agents/huginn.md` or `agents/muninn.md` if you are those roles

## Named verify

```powershell
npm run verify
```

Do not claim the foundation is healthy unless verify exits 0.

## Rules of the roost

- Do not write to other portfolio repos from this project’s automations (v1).
- Do not add a database or MCP server without an explicit decision recorded in `.state/ARCHITECTURE.md`.
- Prefer updating knowledge notes over duplicating them.
- Empty high-quality days beat noisy digests.
