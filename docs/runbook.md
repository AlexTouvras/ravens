# Operations runbook

## Daily rhythm (Europe/Helsinki)

| Time | Raven | Expectation |
|------|-------|-------------|
| 07:00 | Huginn | `inbox/YYYY-MM-DD.md` committed |
| 07:45 | Muninn | knowledge/signals/index updated from last 48h inbox |

Cloud Agent compute must be enabled in the [Cloud Agents dashboard](https://cursor.com/dashboard?tab=cloud-agents).

## Verify (named gate)

From repo root:

```powershell
npm run verify
```

Must exit 0 before calling the foundation “healthy”. After each automation lands, re-run verify locally or in a follow-up agent.

## Failure modes

| Symptom | Likely cause | Action |
|---------|--------------|--------|
| No inbox file | Huginn failed or cron/tz misconfigured | Check automation run log; run Huginn manually |
| Inbox but no Muninn commit | Muninn failed or ran before Huginn finished | Re-run Muninn; consider widening gap past 45m |
| Verify fails on frontmatter | Contract drift | Fix file or bump contract version deliberately |
| Duplicate FIND/SIG ids | Non-idempotent rewrite | Dedupe; keep earliest; link in changelog |

## Manual runs

In Cursor Automations, use “Run now” on Huginn first, wait for the push, then run Muninn.

## Extending later (not v1)

- **ProjectBrain MCP** — expose curated hubs as portfolio memory tools
- **Consumer automations** — mealplan/field-card/Orbit *read* signals and open PRs
- **Search index** — only if markdown grep becomes painful

Do not add a database until verify + volume prove the need.
