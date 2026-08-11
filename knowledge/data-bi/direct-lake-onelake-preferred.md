---
schema: ravens.knowledge/v1
id: KNOW-data-bi-direct-lake-onelake-preferred
domain: data-bi
title: Prefer Direct Lake on OneLake over SQL-endpoint Direct Lake
status: active
updated: 2026-08-11
created: 2026-08-11
confidence: high
tags: [fabric, direct-lake, onelake, semantic-models]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260811-004
canonical_sources:
  - url: https://learn.microsoft.com/en-us/fabric/fundamentals/direct-lake-how-it-works
    title: How Direct Lake works - Microsoft Fabric | Microsoft Learn
    accessed: 2026-08-11
---

# Prefer Direct Lake on OneLake over SQL-endpoint Direct Lake

## Guidance

- For new Fabric semantic models, choose **Direct Lake on OneLake** as the default Direct Lake mode.
- Design capacity and Delta tables so queries stay in Direct Lake — Microsoft’s guidance is to avoid DirectQuery fallback when possible.
- Prefer semantic-model RLS/OLS over SQL-endpoint RLS/OLS/DDM when you need security without falling back through the SQL analytics endpoint.
- After creating or altering underlying Delta tables (including TOM/TMSL adds), refresh/frame the model before treating query results as authoritative.

## Rationale

Microsoft Learn documents Direct Lake on OneLake as not coupled to the SQL endpoint, without DirectQuery fallback, and as the recommended Direct Lake option for new models. SQL-endpoint Direct Lake can silently fall back when SQL RLS/OLS/DDM, unmaterialized views, or capacity guardrails are hit — slower and harder to reason about for churn/RFM/readmission-style boards.

## Limits / do not apply when

- Existing models already locked to Direct Lake on SQL endpoints may keep that mode until a deliberate rebuild; migration is a project decision, not an overnight flip.
- If you intentionally need always-latest SQL-endpoint reads and accept slower queries, fallback-capable modes may still be appropriate — document that trade explicitly.
- Guardrail breaches (Parquet file/row-group/row limits, memory pressure) still break Direct Lake behavior regardless of OneLake vs SQL path — fix the lake table or capacity first.

## Related

- Domain hub: [data-bi](./README.md)
- Consumer hint: PowerBI portfolio / Orbit Analytics Fabric models
