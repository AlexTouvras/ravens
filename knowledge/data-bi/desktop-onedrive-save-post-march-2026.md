---
schema: ravens.knowledge/v1
id: KNOW-data-bi-desktop-onedrive-save-post-march-2026
domain: data-bi
title: Power BI Desktop from March 2026 or earlier cannot save to OneDrive or SharePoint
status: active
updated: 2026-10-12
created: 2026-10-12
confidence: high
tags: [power-bi, desktop, onedrive, sharepoint]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20261012-003
canonical_sources:
  - url: https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-sharepoint-save-share
    title: Power BI Desktop OneDrive and SharePoint integration — Microsoft Learn
    accessed: 2026-10-12
---

# Power BI Desktop from March 2026 or earlier cannot save to OneDrive or SharePoint

## Guidance

- Starting **October 2026**, Power BI Desktop versions from **March 2026 or earlier** no longer support OneDrive and SharePoint **saving and sharing**. Update to the latest Desktop before the next board edit that uses that path.
- Only **.PBIX** files can be saved to OneDrive or SharePoint. Personal OneDrive accounts are not supported.
- Sharing from Desktop stays subject to the tenant admin setting (on unless an admin turns it off) and to the author's own Desktop preview opt-out.

## Rationale

Microsoft Learn’s Desktop OneDrive and SharePoint page states the October 2026 version cutoff in both the file-picker section and Considerations and limitations. Once that month starts, an old Desktop build is not a save path for cloud-shared reports. The floor remains after any single headline is gone.

## Limits / do not apply when

- A Desktop build **newer than March 2026** is outside this cutoff. Confirm the installed build before treating a save failure as this rule.
- This is the Desktop save-and-share integration, not PBIP/TMDL on disk and not the service model editor. Local PBIP work stays on [pbip-vscode-instant-reload-ga](./pbip-vscode-instant-reload-ga.md).
- The page is still marked public preview. An admin can disable sharing for the tenant, and an author can opt out in Desktop options.
- Do not use a personal OneDrive account as a workaround.

## Related

- Domain hub: [data-bi](./README.md)
- Sibling: [pbip-vscode-instant-reload-ga](./pbip-vscode-instant-reload-ga.md)
- Consumer hint: Power BI portfolio Desktop save path
