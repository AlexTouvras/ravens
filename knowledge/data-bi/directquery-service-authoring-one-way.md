---
schema: ravens.knowledge/v1
id: KNOW-data-bi-directquery-service-authoring-one-way
domain: data-bi
title: DirectQuery models can be authored in the Power BI service; an Import save does not switch back
status: active
updated: 2026-10-05
created: 2026-10-05
confidence: high
tags: [power-bi, directquery, semantic-models, web-modeling]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20261005-004
canonical_sources:
  - url: https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-directquery-about
    title: DirectQuery in Power BI — Microsoft Learn
    accessed: 2026-10-05
---

# DirectQuery models can be authored in the Power BI service; an Import save does not switch back

## Guidance

- When the model is DirectQuery, you can **author, edit, and manage** it in the Power BI service. Desktop is not required for that path.
- You cannot currently create or edit DirectQuery models in the service for **SAP HANA as a relational source**, **cubes** (Analysis Services / Multidimensional), or **Blank Query**. Those stay off the web editor.
- In the web editor, saving a table as **Import** is one-way: you cannot switch that table back to DirectQuery.

## Rationale

The DirectQuery article on Microsoft Learn states the service-authoring rule and the storage-mode limit in the same section. That is a delivery constraint for near-real-time boards, not a monthly what’s-new blurb. New Fabric models still prefer Direct Lake on OneLake; this note only covers the case where DirectQuery is already the chosen mode.

## Limits / do not apply when

- Do not read this as a reason to pick DirectQuery over Direct Lake or Import. Prefer Direct Lake on OneLake for new Fabric models — [direct-lake-onelake-preferred](./direct-lake-onelake-preferred.md).
- SAP HANA (relational), Analysis Services / multidimensional cubes, and Blank Query are outside in-service DirectQuery authoring.
- A table saved as Import in the web editor cannot be switched back there. Plan the storage mode before that save.
- Service query timeout, gateway, and concurrency limits in the same article still apply. Authoring in the service does not remove them.

## Related

- Domain hub: [data-bi](./README.md)
- Sibling: [direct-lake-onelake-preferred](./direct-lake-onelake-preferred.md)
- Consumer hint: Power BI portfolio semantic-model authoring
