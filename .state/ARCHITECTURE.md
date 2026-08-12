# Architecture (working log)

> Tracked in git. Living decisions for this repo — not a substitute for `docs/architecture/`.

## Overview

Ravens is a shared markdown knowledge vault with versioned contracts. **Huginn** (07:00 Europe/Helsinki) scans the web against `watchlist.md` and writes `inbox/YYYY-MM-DD.md`. **Muninn** (07:45) applies a quality rubric to produce durable `knowledge/<domain>/` notes and time-bounded `signals/`. Git is the database for v1; MCP/DB are documented extension seams only.

## Data shapes

| Name | Shape / location | Notes |
|------|------------------|-------|
| Watchlist | `watchlist.md` | Domains + ignore list |
| Inbox | `inbox/YYYY-MM-DD.md` | `ravens.inbox/v1` |
| Domain hub | `knowledge/<domain>/README.md` | `ravens.domain-hub/v1` |
| Knowledge note | `knowledge/<domain>/<slug>.md` | `ravens.knowledge/v1` |
| Signal | `signals/SIG-….md` | `ravens.signal/v1` |
| Playbooks | `agents/huginn.md`, `agents/muninn.md` | Automation instruction source |
| Verify | `npm run verify` | Layout + schema + ID uniqueness |

## Design patterns

- Two ravens, two runs — scan and store are separate schedules
- Contracts before content — schemas in `docs/contracts/`
- Promote via rubric — drop / signal / knowledge (`docs/quality.md`)
- Read-only consumers — no cross-repo writes in v1
- Fixture IDs reserved — `*-20990101-*` only under `examples/`

## Dependencies

| Dependency | Why introduced | Date |
|------------|----------------|------|
| Node ≥20 | `scripts/verify.mjs` | 2026-08-10 |
| Cursor Automations (cron) | Daily Huginn + Muninn | 2026-08-10 |
| Cursor Automations → Slack `#ravens` | Post-run digests (CareerOps workspace) | 2026-08-12 |

## File structure

See `README.md` quick map and `docs/architecture/overview.md`.

## Key decisions

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-08-10 | Repo named ravens (not eagles) | Norse ravens Huginn & Muninn |
| 2026-08-10 | Private GitHub repo | May hold career/finance/food context |
| 2026-08-10 | Two cron automations | Separate thought vs memory |
| 2026-08-10 | No consumer writes in v1 | Vault-first; avoid cross-repo churn |
| 2026-08-10 | Added `fitness` domain | Aligns with mealplan lean / pregnancy_nourish |
| 2026-08-10 | Markdown+git over DB/MCP for v1 | Strong contracts first; seams documented |
| 2026-08-10 | Named verify `npm run verify` | Prove foundation health by observation |
| 2026-08-12 | Daily digests to CareerOps Slack `#ravens` (`C0BPJSPCMAR`) | Notify without writing other repos; Cursor Automations **Send to Slack** |
| 2026-08-12 | Watchlist: investment opportunities under `finance` | Actionable Nordic/EU/US liquid equity & ETF catalysts; still exclude crypto/HFT/tipster |
