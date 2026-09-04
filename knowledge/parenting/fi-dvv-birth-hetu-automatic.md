---
schema: ravens.knowledge/v1
id: KNOW-parenting-fi-dvv-birth-hetu-automatic
domain: parenting
title: Finland — hospital reports the birth; the child gets a hetu without a parent filing
status: active
updated: 2026-09-04
created: 2026-09-04
confidence: high
tags: [age-0-72h, dvv, hetu, birth-registration, finland]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260904-006
canonical_sources:
  - url: https://dvv.fi/lapsen-syntyma-ja-adoptio
    title: Lapsen syntymä ja tiedot — Digi- ja väestötietovirasto
    accessed: 2026-09-04
---

# Finland — hospital reports the birth; the child gets a hetu without a parent filing

## Guidance

- A **healthcare professional reports** the newborn. Do **not** plan a separate DVV birth notice when the birth is in a Finnish hospital (or otherwise attended by a healthcare professional).
- A child born in Finland is entered in the population information system and receives a **personal identity code (hetu)** when the birth parent has a Finnish hetu and a hometown in Finland — or a hetu plus a temporary Finnish address, or is a Finnish citizen living permanently abroad.
- Obtaining that code for a child born or adopted in Finland **requires no action from the parents**.
- After the hetu is issued, DVV posts the **"Lapsen tietojen ilmoittaminen"** form so parents can notify the child's names.
- **Names and mother tongue** must be reported to DVV or the parish within **three months** of birth (easiest electronically via the link on the DVV page). That is the first parent-filed step.
- Distinct from [fi-kela-lapsilisa-before-birth](./fi-kela-lapsilisa-before-birth.md): Kela learns of the birth from the population register and does not need a separate birth notice. DVV is the register; Kela is the benefit.

## Rationale

DVV's living birth-registration page is current Finnish-systems protocol. Automatic hospital filing, automatic hetu (when the birth-parent conditions hold), and the three-month name-and-mother-tongue deadline are standing checklist items — they hold if any single day's headline is deleted and they fill the gap the Kela lapsilisä note does not cover (who files the birth, and when the household first files with DVV).

## Limits / do not apply when

- Age window: `age-0-72h` (adjacent prepare-now; hospital filing and hetu happen at birth) through the **three-month** name deadline. Re-check [`knowledge/parenting/README.md`](./README.md) **Current stage** — a human sets `Child born`, not this note.
- **Finnish DVV** rules. Home birth with **no** healthcare professional: a parent must notify a hospital or a doctor / midwife / public-health nurse so *they* can report it. A child born **abroad** is not entered automatically — the household must notify DVV.
- Does not apply when the birth parent lacks a Finnish hetu and the hometown / temporary-address / Finnish-citizen-abroad conditions. Adoption and parenthood-confirmation paths have their own DVV steps.
- Not medical guidance and not a substitute for the DVV form or the parish. Does not change [hus-call-before-labor](./hus-call-before-labor.md) or Kela filing.

## Related

- Domain hub: [parenting](./README.md)
- Sibling: [fi-kela-lapsilisa-before-birth](./fi-kela-lapsilisa-before-birth.md), [fi-kela-vanhempainraha-before-birth](./fi-kela-vanhempainraha-before-birth.md), [fi-newborn-hospital-discharge](./fi-newborn-hospital-discharge.md)
- Consumer hint: household arrival / first-weeks admin checklist
