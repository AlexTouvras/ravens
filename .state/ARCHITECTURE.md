# Architecture (working log)

> Tracked in git. Living decisions for this repo — not a substitute for `docs/architecture/`.

## Overview

Ravens is a shared markdown knowledge vault. **Huginn** (scheduled cloud agent) scans the web against `watchlist.md` and writes dated files under `inbox/`. **Muninn** (second scheduled agent) distills inbox items into `knowledge/<domain>/` and refreshes `index.md`. Other portfolio projects may read this repo; they are not written by these automations in v1.

## Data shapes

| Name | Shape / location | Notes |
|------|------------------|-------|
| Watchlist | `watchlist.md` | Domains + ignore list; Huginn input |
| Inbox day file | `inbox/YYYY-MM-DD.md` | Raw findings with sources |
| Domain notes | `knowledge/<domain>/` | Muninn-curated durable guidance |
| Index | `index.md` | Cross-project entry points |

## Design patterns

- Two ravens, two runs — scan and store are separate schedules so memory can lag thought
- Markdown-first vault — no DB; git is the store
- Read-only consumers — essays/cards/mealplan pull later; automations never touch them in v1

## Dependencies

| Dependency | Why introduced | Date |
|------------|----------------|------|
| Cursor Automations (cron) | Daily Huginn + Muninn runs | 2026-08-10 |

## File structure

```text
ravens/
├── README.md
├── watchlist.md
├── index.md
├── inbox/
├── knowledge/
│   ├── ai-agents/
│   ├── data-bi/
│   ├── career/
│   ├── food/
│   ├── finance/
│   └── content/
├── .state/
└── .cursor/rules/
```

## Key decisions

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-08-10 | Repo named ravens (not eagles) | Norse ravens Huginn & Muninn |
| 2026-08-10 | Private GitHub repo | May hold career/finance/food context |
| 2026-08-10 | Two cron automations | Separate thought vs memory |
| 2026-08-10 | No consumer writes in v1 | Vault-first; avoid cross-repo churn |
