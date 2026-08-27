---
schema: ravens.knowledge/v1
id: KNOW-data-bi-dax-udfs-ga-compat-1702
domain: data-bi
title: Use DAX user-defined functions at compat 1702+
status: active
updated: 2026-08-27
created: 2026-08-12
confidence: high
tags: [dax, udf, power-bi, semantic-models, testing]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260812-003
  - FIND-20260827-003
canonical_sources:
  - url: https://learn.microsoft.com/en-us/dax/best-practices/dax-user-defined-functions
    title: Use DAX user-defined functions - DAX | Microsoft Learn
    accessed: 2026-08-12
  - url: https://www.sqlbi.com/articles/testing-dax-measures-by-using-ai/
    title: Testing DAX measures by using AI — SQLBI
    accessed: 2026-08-27
---

# Use DAX user-defined functions at compat 1702+

## Guidance

- For new or refactored semantic models on **compatibility level 1702+**, centralize repeated DAX business rules in **user-defined functions** (`FUNCTION`) instead of copy-pasted measures.
- Author and manage UDFs in **DAX query view**, **TMDL view**, and **Model explorer** (Functions node); reuse them from measures, calculated columns, visual calculations, and other UDFs.
- Prefer UDFs for shared logic on churn / RFM / readmission-style boards (tax-like transforms, status mapping, reusable table helpers) so one fix propagates.
- Treat Power BI Desktop and Service **June 2026+ GA** as the baseline — do not plan new shared logic around pre-GA workarounds.
- For regression-testing shared measures, connect an AI assistant to Power BI Desktop via Microsoft's **Power BI Modeling MCP server**, have it inspect the semantic model to identify representative filter-context cases (positive, negative, prevent-false-positive, prevent-false-negative), and generate DAX UDF-based regression-test queries that return a uniform PASS/FAIL row per case — repeat after any measure or UDF change.

## Rationale

Microsoft Learn documents DAX UDFs as generally available in Desktop and Service as of the June 2026 release at compat 1702+, with a first-class `FUNCTION` keyword and multi-surface management. That is durable model-authoring guidance, not a preview toggle. SQLBI (24 Aug 2026) demonstrates a concrete, repeatable way to close the testing gap on top of that GA feature by pairing it with MCP-based AI tooling already in use — not a new dependency, just a documented workflow for an existing one.

## Limits / do not apply when

- Models stuck below compat **1702** — raise compatibility (and test) before introducing UDFs.
- One-off measures with no reuse path — a UDF layer can be premature; promote when the same expression appears twice or is a named business rule.
- External engines / non-Power BI DAX hosts that have not shipped UDF parity — keep portable expressions until the host catches up.
- The AI-generated regression-test pattern needs the Power BI Modeling MCP server and an AI assistant wired to it — without that tooling, write the same test cases by hand instead of skipping testing.

## Related

- Domain hub: [data-bi](./README.md)
- Sibling: [direct-lake-onelake-preferred](./direct-lake-onelake-preferred.md)
- Consumer hint: PowerBI portfolio semantic-model authoring
