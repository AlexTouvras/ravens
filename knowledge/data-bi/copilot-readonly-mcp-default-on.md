---
schema: ravens.knowledge/v1
id: KNOW-data-bi-copilot-readonly-mcp-default-on
domain: data-bi
title: Read-only Copilot and Microsoft MCP access to a semantic model is on until a write owner turns it off
status: active
updated: 2026-10-12
created: 2026-10-12
confidence: high
tags: [power-bi, copilot, mcp, governance]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20261012-004
canonical_sources:
  - url: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-semantic-models
    title: Use Copilot with Semantic Models in Power BI — Microsoft Learn
    accessed: 2026-10-12
---

# Read-only Copilot and Microsoft MCP access to a semantic model is on until a write owner turns it off

## Guidance

- Users with **write** permission control whether **read-only** users can reach a semantic model through AI. The model setting is: “Allow any person with only read permissions to use AI (for example, Copilot, Microsoft's MCP tools) on this model and its related reports.”
- **By default the setting is enabled.** Payroll, customer, or other sensitive models stay open to read-only Copilot and Microsoft MCP until a write owner turns it off.
- The switch covers Power BI Copilot consumption (report pane, standalone, apps), M365 Copilot Chat and Cowork, Data Agent, and remote Microsoft MCP tools.
- Turning it off hides, disables, or blocks those entry points for read-only users. It does not inherit to a model built on another model — set each model separately.

## Rationale

Microsoft Learn’s Copilot semantic-model page documents a model-level access default, not a one-week feature flag. A report that only grants Read still allows AI consumption until someone with write permission changes the setting. That default holds if the announcement headline is deleted.

## Limits / do not apply when

- This is **not** the hosted-vs-local authoring MCP choice in [powerbi-authoring-mcp-hosted-vs-local](./powerbi-authoring-mcp-hosted-vs-local.md). Authoring still follows that note.
- Users without Read cannot use the model. Write or Build owners who disable the setting can still open a restricted model by direct URL; search in multi-model experiences excludes the restricted model for everyone, including them.
- Do not treat the default as a tenant lockdown or as a reason to disable Copilot on every model. Turn it off where read-only AI access is not intended.
- Composite models need the switch on each model. A parent setting does not cover the child.

## Related

- Domain hub: [data-bi](./README.md)
- Sibling: [powerbi-authoring-mcp-hosted-vs-local](./powerbi-authoring-mcp-hosted-vs-local.md), [fabric-apps-read-permission](./fabric-apps-read-permission.md)
- Consumer hint: Power BI portfolio semantic-model governance
