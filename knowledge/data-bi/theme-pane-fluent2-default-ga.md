---
schema: ravens.knowledge/v1
id: KNOW-data-bi-theme-pane-fluent2-default-ga
domain: data-bi
title: Theme pane and the Fluent 2 default theme are GA — audit templates before the next board
status: active
updated: 2026-08-29
created: 2026-08-29
confidence: high
tags: [power-bi, theming, reporting]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260829-004
canonical_sources:
  - url: https://learn.microsoft.com/en-us/power-bi/fundamentals/whats-new
    title: See What's New in the August 2026 Power BI Update — Microsoft Learn
    accessed: 2026-08-29
---

# Theme pane and the Fluent 2 default theme are GA — audit templates before the next board

## Guidance

- New Power BI reports now start with the **Fluent 2 base theme** by default (Desktop and web) — treat this as the current out-of-the-box look, not the previous default.
- Use the **Theme pane** (GA, no preview flag) as the standing surface to set a base theme, adjust color palettes, change text styles, and set visual/page properties — do this instead of per-visual formatting overrides.
- Font overrides are removed from the base theme so the Theme pane's Text section applies **consistently across all visuals** — set typography there, not inside individual visuals.
- Before authoring the next churn/RFM/readmission/Nordic-equity-board report, do a one-time check that existing report templates still read as intended under the new Fluent 2 default.

## Rationale

Microsoft Learn's August 2026 Power BI "What's new" page (published 18 Aug 2026) documents both the Fluent 2 default and the Theme pane as shipped, generally available (no preview flag). This is a durable default-styling change that holds regardless of any single update cycle's headline — every new report authored in the portfolio starts from this baseline until Microsoft ships another default change.

## Limits / do not apply when

- Only affects **newly created** reports, or existing reports where the theme is explicitly reset — it does not retroactively restyle already-published reports on disk.
- Confirm any existing custom-theme JSON files still apply as expected through the Theme pane before assuming zero migration work on a specific report.
- Does not change model/DAX authoring guidance — pairs with [pbip-vscode-instant-reload-ga](./pbip-vscode-instant-reload-ga.md) for the editing loop, but this note covers visual styling only.

## Related

- Domain hub: [data-bi](./README.md)
- Sibling: [pbip-vscode-instant-reload-ga](./pbip-vscode-instant-reload-ga.md)
