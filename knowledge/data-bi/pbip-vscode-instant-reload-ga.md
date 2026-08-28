---
schema: ravens.knowledge/v1
id: KNOW-data-bi-pbip-vscode-instant-reload-ga
domain: data-bi
title: PBIP instant-reload and built-in VS Code entry point are GA — adopt as the standing edit loop
status: active
updated: 2026-08-28
created: 2026-08-28
confidence: high
tags: [pbip, vs-code, dev-loop, power-bi-desktop]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260821-002
  - FIND-20260828-003
canonical_sources:
  - url: https://learn.microsoft.com/en-us/power-bi/fundamentals/whats-new
    title: See What's New in the August 2026 Power BI Update — Microsoft Learn
    accessed: 2026-08-28
---

# PBIP instant-reload and built-in VS Code entry point are GA — adopt as the standing edit loop

## Guidance

- Edit PBIP project files (PBIR/TMDL) directly in **VS Code**, using Power BI Desktop's built-in entry point to open the project there — treat this as the standing round-trip, not a workaround.
- Rely on Power BI Desktop's **instant-reload detection**: when it detects an external change to PBIP project files it offers a one-click apply, so there is no need to close/reopen the file after editing outside Desktop.
- Both behaviors are **generally available** as of the August 2026 Power BI update (no preview flag) — no need to gate adoption behind a preview toggle or opt-in feature switch.

## Rationale

Microsoft Learn's August 2026 Power BI "What's new" page (published 18 Aug, last updated 25 Aug 2026) documents both the instant-reload detection and the built-in VS Code entry point as shipped, GA features — this was previously tracked as a preview item (SIG-20260821-001, opened from the same page while the feature still carried a preview caveat). GA status means the portfolio can standardize the PBIR/TMDL authoring workflow around it without a rollback plan for a toggled-off preview.

## Limits / do not apply when

- Only applies to projects saved in the **PBIP** format (PBIR/TMDL); .pbix-only files have no external project files for Desktop to detect changes in.
- Confirm no regressions moving edits between VS Code and Desktop on the actual Nordic Boardroom authoring workflow before treating this as fully hands-off — GA removes the preview caveat, not the need for a first real-workflow check.
- Does not change semantic-model authoring guidance itself (see [dax-udfs-ga-compat-1702](./dax-udfs-ga-compat-1702.md)) — this note covers the edit-and-reload loop, not model design.

## Related

- Domain hub: [data-bi](./README.md)
- Sibling: [dax-udfs-ga-compat-1702](./dax-udfs-ga-compat-1702.md)
- Promoted from: [SIG-20260821-001](../../signals/SIG-20260821-001.md)
- Consumer hint: PowerBI portfolio PBIR/TMDL authoring
