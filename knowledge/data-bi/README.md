---
schema: ravens.domain-hub/v1
domain: data-bi
updated: 2026-09-13
status: active
---

# Data / BI

Microsoft Fabric, Power BI / PBIR, semantic models, and analytics patterns used in the Nordic Boardroom portfolio.

## Current guidance

- Prefer Direct Lake on OneLake for new semantic models; design to avoid DirectQuery fallback — Direct Lake now also supports calculated columns and schema/data/table-level refresh control (Aug 2026) — [direct-lake-onelake-preferred](./direct-lake-onelake-preferred.md)
- Use DAX user-defined functions (`FUNCTION`) at compat 1702+ to centralize shared measure logic, and use the Power BI Modeling MCP server + an AI assistant to auto-generate PASS/FAIL regression tests for those measures — [dax-udfs-ga-compat-1702](./dax-udfs-ga-compat-1702.md)
- Fabric App consumers need only Read on the underlying semantic model (Build stays author-only) — re-review app-audience grants that were over-provisioned to Build — [fabric-apps-read-permission](./fabric-apps-read-permission.md)
- Edit PBIP projects (PBIR/TMDL) directly in VS Code via Desktop's built-in entry point, and rely on Desktop's instant-reload detection for external changes — both GA as of the August 2026 update — [pbip-vscode-instant-reload-ga](./pbip-vscode-instant-reload-ga.md)
- New reports start on the Fluent 2 base theme by default; use the Theme pane (GA) for base theme, palette, text, and visual/page property changes, and audit existing templates against the new default before the next board — [theme-pane-fluent2-default-ga](./theme-pane-fluent2-default-ga.md)

## Active signals

- [SIG-20260907-001](../../signals/SIG-20260907-001.md) — microsoft/skills-for-fabric 0.3.16 single-skill APM install + Azure CLI reuse for remote MCP

## Note index

| Slug | Title | Updated | Status |
|------|-------|---------|--------|
| direct-lake-onelake-preferred | Prefer Direct Lake on OneLake over SQL-endpoint Direct Lake | 2026-08-22 | active |
| dax-udfs-ga-compat-1702 | Use DAX user-defined functions at compat 1702+ | 2026-08-27 | active |
| fabric-apps-read-permission | Fabric App consumers only need Read on the underlying semantic model | 2026-08-26 | active |
| pbip-vscode-instant-reload-ga | PBIP instant-reload and built-in VS Code entry point are GA | 2026-08-28 | active |
| theme-pane-fluent2-default-ga | Theme pane and the Fluent 2 default theme are GA | 2026-08-29 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-09-13 | Expired SIG-20260830-003 (Power BI Copilot bookmark-hidden visuals) on default 14-day expiry — no report check and no durable authoring rule. |
| 2026-09-11 | Updated SIG-20260907-001 from FIND-20260911-003 — raised the evaluate pin from microsoft/skills-for-fabric v0.3.15 to v0.3.16 (single-skill `apm install --skill`; Azure CLI reuse for remote MCP; no second OAuth app). 0.3.15 OneLake / Capacity Metrics workflows still in the evaluate set. |
| 2026-09-07 | Opened SIG-20260907-001 from FIND-20260907-002 (microsoft/skills-for-fabric v0.3.15: onelake-catalog-govern-cli + read-only Capacity Metrics workflow in sqldw-cli; MIT; evaluate this month, not a prefer/avoid pin) |
| 2026-08-30 | Opened SIG-20260830-003 from FIND-20260830-004 (Microsoft Learn August 2026 update: Copilot Summary/Narrative can read display-only bookmark-hidden visuals; capability landing, not yet a delivery rule) |
| 2026-08-29 | Promoted KNOW-data-bi-theme-pane-fluent2-default-ga from FIND-20260829-004 (Microsoft Learn August 2026 update: Fluent 2 base theme becomes the new-report default, Theme pane reaches GA, font overrides removed from base theme) |
| 2026-08-28 | Promoted KNOW-data-bi-pbip-vscode-instant-reload-ga from SIG-20260821-001 + FIND-20260828-003 (Microsoft Learn August 2026 update: PBIP instant-reload + built-in VS Code entry point ship GA, no preview flag) |
| 2026-08-27 | Updated KNOW-data-bi-dax-udfs-ga-compat-1702 with FIND-20260827-003 (SQLBI, 24 Aug 2026: AI + Power BI Modeling MCP server auto-generates DAX UDF-based regression tests for measures) |
| 2026-08-26 | Promoted KNOW-data-bi-fabric-apps-read-permission from FIND-20260826-004 (Microsoft Learn, Aug 2026 update: Fabric App consumers need only Read, not Build); expired SIG-20260812-002 (TMDL View/Model Options) — hit its 2026-08-26 default expiry with no team decision on web-vs-Desktop modeling |
| 2026-08-25 | Dropped FIND-20260825-004 (per-table Direct Lake → Import Storage-mode switch) — Gate 0 fails: `source_url` (community.fabric.microsoft.com) returns 403 to Muninn's fetch tools and the Wayback snapshot did not render verifiable article content, so the claim could not be confirmed attributable to the source (same pattern as FIND-20260812-004); expired SIG-20260811-002 (Copilot-in-Excel feature stayed niche, no consumer pull) |
| 2026-08-22 | Updated KNOW-data-bi-direct-lake-onelake-preferred with FIND-20260822-002 (Direct Lake calculated-column support GA, schema/data/table-level refresh control — same August 2026 update page as SIG-20260821-001) |
| 2026-08-21 | Opened SIG-20260821-001 from FIND-20260821-002 (Power BI PBIP + VS Code dev-loop speedups) |
| 2026-08-12 | Promoted KNOW-data-bi-dax-udfs-ga-compat-1702; opened SIG-20260812-002; dropped FIND-20260812-004 (PBIR Feature Summary URL 403 / Gate 0) |
| 2026-08-11 | Promoted KNOW-data-bi-direct-lake-onelake-preferred; opened SIG-20260811-002; dropped FIND-20260811-003 (settings-pane UI chrome) |
| 2026-08-10 | Domain hub created (foundation) |
