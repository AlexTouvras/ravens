---
schema: ravens.domain-hub/v1
domain: data-bi
updated: 2026-08-11
status: active
---

# Data / BI

Microsoft Fabric, Power BI / PBIR, semantic models, and analytics patterns used in the Nordic Boardroom portfolio.

## Current guidance

- Prefer Direct Lake on OneLake for new semantic models; design to avoid DirectQuery fallback — [direct-lake-onelake-preferred](./direct-lake-onelake-preferred.md)

## Active signals

- [SIG-20260811-002](../../signals/SIG-20260811-002.md) — Copilot in Excel snapshot-analyzes Power BI reports

## Note index

| Slug | Title | Updated | Status |
|------|-------|---------|--------|
| direct-lake-onelake-preferred | Prefer Direct Lake on OneLake over SQL-endpoint Direct Lake | 2026-08-11 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-08-11 | Promoted KNOW-data-bi-direct-lake-onelake-preferred; opened SIG-20260811-002; dropped FIND-20260811-003 (settings-pane UI chrome) |
| 2026-08-10 | Domain hub created (foundation) |
