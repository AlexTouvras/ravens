---
schema: ravens.knowledge/v1
id: KNOW-data-bi-dax-udfs-ga-compat-1702
domain: data-bi
title: Use DAX user-defined functions at compat 1702+
status: active
updated: 2026-08-12
created: 2026-08-12
confidence: high
tags: [dax, udf, power-bi, semantic-models]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260812-003
canonical_sources:
  - url: https://learn.microsoft.com/en-us/dax/best-practices/dax-user-defined-functions
    title: Use DAX user-defined functions - DAX | Microsoft Learn
    accessed: 2026-08-12
---

# Use DAX user-defined functions at compat 1702+

## Guidance

- For new or refactored semantic models on **compatibility level 1702+**, centralize repeated DAX business rules in **user-defined functions** (`FUNCTION`) instead of copy-pasted measures.
- Author and manage UDFs in **DAX query view**, **TMDL view**, and **Model explorer** (Functions node); reuse them from measures, calculated columns, visual calculations, and other UDFs.
- Prefer UDFs for shared logic on churn / RFM / readmission-style boards (tax-like transforms, status mapping, reusable table helpers) so one fix propagates.
- Treat Power BI Desktop and Service **June 2026+ GA** as the baseline — do not plan new shared logic around pre-GA workarounds.

## Rationale

Microsoft Learn documents DAX UDFs as generally available in Desktop and Service as of the June 2026 release at compat 1702+, with a first-class `FUNCTION` keyword and multi-surface management. That is durable model-authoring guidance, not a preview toggle.

## Limits / do not apply when

- Models stuck below compat **1702** — raise compatibility (and test) before introducing UDFs.
- One-off measures with no reuse path — a UDF layer can be premature; promote when the same expression appears twice or is a named business rule.
- External engines / non-Power BI DAX hosts that have not shipped UDF parity — keep portable expressions until the host catches up.

## Related

- Domain hub: [data-bi](./README.md)
- Sibling: [direct-lake-onelake-preferred](./direct-lake-onelake-preferred.md)
- Consumer hint: PowerBI portfolio semantic-model authoring
