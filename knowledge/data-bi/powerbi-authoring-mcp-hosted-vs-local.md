---
schema: ravens.knowledge/v1
id: KNOW-data-bi-powerbi-authoring-mcp-hosted-vs-local
domain: data-bi
title: Power BI Authoring MCP — hosted for Fabric models, local for Desktop and PBIP; do not register both
status: active
updated: 2026-10-05
created: 2026-10-05
confidence: high
tags: [power-bi, mcp, semantic-models, fabric]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20261005-003
canonical_sources:
  - url: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp
    title: Power BI Authoring MCP server — Microsoft Learn
    accessed: 2026-10-05
---

# Power BI Authoring MCP — hosted for Fabric models, local for Desktop and PBIP; do not register both

## Guidance

- One authoring server, two deployments. **Hosted (preview)** is `https://api.fabric.microsoft.com/v1/mcp/powerbi/authoring` over Streamable HTTP: nothing to install, Microsoft-managed updates. **Local (GA)** is stdio via the VS Code extension or `@microsoft/powerbi-modeling-mcp`.
- Use the **hosted** server for a semantic model in a Fabric workspace when the client can keep the session. The Fabric admin must enable the tenant setting that allows the Power BI Model Context Protocol server endpoint. The client must return the `mcp-Session-Id` header on later calls; a new session each call drops the model connection.
- Use the **local** server when the model is open in Power BI Desktop, when the work is PBIP or TMDL on disk, or when auth is a **service principal** (CI). Local is also the path that supports **transactions** and Analysis Services **traces**.
- Do **not** register hosted and local at the same time. The agent then sees two overlapping tool sets.
- On **macOS**, the local server is unsupported. Use the hosted server.

## Rationale

Microsoft Learn’s authoring-MCP page is current vendor guidance for which deployment an agent should call. The hosted-vs-local split and the “don’t register both” rule survive a single feature headline: Desktop and PBIP stay on the machine, Fabric workspace models can use the hosted endpoint, and two registrations confuse tool routing.

## Limits / do not apply when

- Hosted is **preview**. Do not treat it as the CI or service-principal path, and do not assume transactions or traces.
- Clients that only do dynamic OAuth client registration cannot sign in to the hosted server (Entra ID does not support that). Use local, or register an Entra app.
- Write permission is required to change model objects. Build alone can run DAX queries, not author.
- This is the **authoring** server, not the FabricIQ query-endpoint move and not a report-page editor. The local Modeling MCP path used for Desktop DAX checks stays local — see [dax-udfs-ga-compat-1702](./dax-udfs-ga-compat-1702.md).
- Back up or work in Git-backed PBIP before an agent writes. Modeling changes can be irreversible.

## Related

- Domain hub: [data-bi](./README.md)
- Sibling: [dax-udfs-ga-compat-1702](./dax-udfs-ga-compat-1702.md), [pbip-vscode-instant-reload-ga](./pbip-vscode-instant-reload-ga.md)
- Consumer hint: Power BI portfolio semantic-model authoring
