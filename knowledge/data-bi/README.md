---
schema: ravens.domain-hub/v1
domain: data-bi
updated: 2026-08-21
status: active
---

# Data / BI

Microsoft Fabric, Power BI / PBIR, semantic models, and analytics patterns used in the Nordic Boardroom portfolio.

## Current guidance

- Prefer Direct Lake on OneLake for new semantic models; design to avoid DirectQuery fallback — [direct-lake-onelake-preferred](./direct-lake-onelake-preferred.md)
- Use DAX user-defined functions (`FUNCTION`) at compat 1702+ to centralize shared measure logic — [dax-udfs-ga-compat-1702](./dax-udfs-ga-compat-1702.md)

## Active signals

- [SIG-20260811-002](../../signals/SIG-20260811-002.md) — Copilot in Excel snapshot-analyzes Power BI reports
- [SIG-20260812-002](../../signals/SIG-20260812-002.md) — TMDL View + Model Options on Power BI web
- [SIG-20260821-001](../../signals/SIG-20260821-001.md) — PBIP + VS Code dev-loop speedups (auto-reload, direct entry)

## Note index

| Slug | Title | Updated | Status |
|------|-------|---------|--------|
| direct-lake-onelake-preferred | Prefer Direct Lake on OneLake over SQL-endpoint Direct Lake | 2026-08-11 | active |
| dax-udfs-ga-compat-1702 | Use DAX user-defined functions at compat 1702+ | 2026-08-12 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-08-21 | Opened SIG-20260821-001 from FIND-20260821-002 (Power BI PBIP + VS Code dev-loop speedups) |
| 2026-08-12 | Promoted KNOW-data-bi-dax-udfs-ga-compat-1702; opened SIG-20260812-002; dropped FIND-20260812-004 (PBIR Feature Summary URL 403 / Gate 0) |
| 2026-08-11 | Promoted KNOW-data-bi-direct-lake-onelake-preferred; opened SIG-20260811-002; dropped FIND-20260811-003 (settings-pane UI chrome) |
| 2026-08-10 | Domain hub created (foundation) |
