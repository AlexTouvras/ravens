---
schema: ravens.knowledge/v1
id: KNOW-data-bi-fabric-apps-read-permission
domain: data-bi
title: Fabric App consumers only need Read on the underlying semantic model
status: active
updated: 2026-08-26
created: 2026-08-26
confidence: high
tags: [fabric, power-bi-apps, governance, permissions]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260826-004
canonical_sources:
  - url: https://learn.microsoft.com/en-us/power-bi/fundamentals/whats-new
    title: See What's New in the August 2026 Power BI Update — Microsoft Learn
    accessed: 2026-08-26
---

# Fabric App consumers only need Read on the underlying semantic model

## Guidance

- By end of August 2026, a Power BI/Fabric **App consumer** needs only **Read** permission on the underlying semantic model to open and use the app — **Build** is no longer required for that path.
- **App authors** still need Build permission to publish/edit the app and its content.
- When granting or auditing app-audience access, stop defaulting viewer accounts to Build "just so the app opens" — grant Read for pure consumption and reserve Build for authors/editors.
- Re-review existing app-audience permission grants that were over-provisioned to Build to work around the old requirement; downgrade viewer-only accounts to Read where the only need was opening the app.

## Rationale

Microsoft Learn's official Power BI "What's new" page documents this as a shipped change to required semantic-model permissions for Fabric Apps, distinct from — and additive to — the same release's Direct Lake calculated-column and granular-refresh changes already captured in `KNOW-data-bi-direct-lake-onelake-preferred`. It is a permission-model change, not a feature preview, so it should hold as standing governance guidance once live.

## Limits / do not apply when

- Scoped to **app consumption only** — direct access to the semantic model outside an app (Analyze in Excel, building a new report against it, the workspace itself) still needs Build/appropriate permission as before.
- App **authors** and anyone publishing/editing the app still need Build permission — this does not relax authoring access.
- Confirm the change has actually rolled out to the target tenant before relying on it for an access-review decision — Microsoft's page frames it as "by the end of August," not a date-certain cutover.

## Related

- Domain hub: [data-bi](./README.md)
- Sibling: [direct-lake-onelake-preferred](./direct-lake-onelake-preferred.md)
- Consumer hint: PowerBI portfolio / Orbit Analytics governance
