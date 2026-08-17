# Architecture (working log)

> Tracked in git. Living decisions for this repo — not a substitute for `docs/architecture/`.

## Overview

Ravens is a shared markdown knowledge vault with versioned contracts. **Huginn** (08:00 Europe/Helsinki) scans the web against `watchlist.md` and writes `inbox/YYYY-MM-DD.md`. **Muninn** runs when that inbox lands on `main` (GitHub push, subject `huginn:`) and applies a quality rubric to produce durable `knowledge/<domain>/` notes and time-bounded `signals/`. Git is the database for v1; MCP/DB are documented extension seams only.

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

- Two ravens, two runs — Huginn on cron; Muninn on Huginn’s `huginn:` push to `main` (09:00 cron is a retry if HEAD is still `huginn:`)
- Contracts before content — schemas in `docs/contracts/`
- Promote via rubric — drop / signal / knowledge (`docs/quality.md`)
- Read-only consumers — no cross-repo writes in v1
- Fixture IDs reserved — `*-20990101-*` only under `examples/`

## Dependencies

| Dependency | Why introduced | Date |
|------------|----------------|------|
| Node ≥20 | `scripts/verify.mjs` | 2026-08-10 |
| Cursor Automations (cron + GitHub push) | Huginn daily; Muninn on `huginn:` landing | 2026-08-10 |
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
| 2026-08-12 | Watchlist + quality: project-relevant GitHub/OSS findings | Cross-cutting scan for repos that change tooling for named consumers; still ban awesome-lists / star magnets; ≤2 repo findings/day; Muninn prefers signal unless prefer/avoid guidance is durable |
| 2026-08-13 | Schedules shifted earlier: Huginn 06:00 / Muninn 06:30 (Europe/Helsinki) | Avoid 07:00 cloud rate-limit pileup that failed Huginn on 2026-08-13; Muninn custom cron `30 3 * * *` UTC |
| 2026-08-17 | Schedules shifted later: Huginn 08:00 / Muninn 09:00 (Europe/Helsinki) | 06:00/06:30 still hit team concurrent-run cap (Huginn 5/5 failed since 13 Aug; Muninn 3/5). After 07:00 wave; 60m gap so Muninn waits for Huginn. |
| 2026-08-17 | Muninn trigger = GitHub push to `main` (Huginn returning) | Clock gap still misses if Huginn is late or branches. Push trigger fires when `huginn:` lands on `main`. Playbook aborts unless subject starts with `huginn:` so Muninn's own push does not loop. Keep 09:00 cron as a retry if the push trigger missed and HEAD is still `huginn:`. |
