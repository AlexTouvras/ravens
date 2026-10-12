---
schema: ravens.knowledge/v1
id: KNOW-data-bi-dax-contract-before-ai-measure
domain: data-bi
title: Write the DAX calculation contract before an assistant writes the measure
status: active
updated: 2026-10-12
created: 2026-10-12
confidence: medium
tags: [power-bi, dax, semantic-models, ai]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20261012-005
canonical_sources:
  - url: https://www.sqlbi.com/articles/understanding-dax-contracts-when-using-ai/
    title: Understanding DAX contracts when using AI — SQLBI, 5 October 2026
    accessed: 2026-10-12
---

# Write the DAX calculation contract before an assistant writes the measure

## Guidance

- When an assistant writes DAX, the **contract** is the work product: text that states how that semantic model must compute values (cohort, which filters count, tie-break, grain). Save the contract, then ask for the measure.
- Do not create a measure, including a simple one, without a contract first.
- The measure the assistant returns is **not** the production definition until it is validated. A later change edits the contract and asks the assistant to revise the DAX.

## Rationale

SQLBI (Marco Russo and Alberto Ferrari, 5 Oct 2026) separates the calculation contract from the generated measure. The contract survives a deleted headline: board measures stay explainable only if the rules live outside the DAX. This is the contract-first practice, not a model-compatibility pin.

## Limits / do not apply when

- Validation is still required. Do not ship the assistant’s measure because the contract looks complete. The article’s ranking example is an illustration, not a portfolio formula.
- This does not replace DAX user-defined functions or regression tests — see [dax-udfs-ga-compat-1702](./dax-udfs-ga-compat-1702.md). A contract can sit beside a UDF; it does not retire one.
- It is not the Power BI authoring-MCP deployment choice. The assistant may be Desktop, the service, or an MCP client; the contract rule is the same.
- Confidence is medium (specialist practitioner, one article). Do not treat it as a Microsoft product requirement.

## Related

- Domain hub: [data-bi](./README.md)
- Sibling: [dax-udfs-ga-compat-1702](./dax-udfs-ga-compat-1702.md), [powerbi-authoring-mcp-hosted-vs-local](./powerbi-authoring-mcp-hosted-vs-local.md)
- Consumer hint: Power BI portfolio AI-authored measures
