---
schema: ravens.knowledge/v1
id: KNOW-parenting-fi-newborn-tsh-oae-screens
domain: parenting
title: Finland — cord-blood TSH at birth and both-ear OAE hearing screen before going home
status: active
updated: 2026-09-04
created: 2026-09-04
confidence: high
tags: [age-0-72h, newborn, screening, tsh, oae, terveyskyla, finland]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260904-005
canonical_sources:
  - url: https://www.terveyskyla.fi/naistalo/synnytyksen-jalkeen/vastasyntynyt/vastasyntyneen-seulonta
    title: Vastasyntyneen seulonta — Terveyskylä Naistalo
    accessed: 2026-09-04
---

# Finland — cord-blood TSH at birth and both-ear OAE hearing screen before going home

## Guidance

- Every newborn has a **cord-blood TSH** sample after birth to rule out congenital hypothyroidism. Untreated congenital hypothyroidism can cause a severe growth disorder and permanent developmental disability; early hormone replacement prevents that. Clinical diagnosis in a newborn is hard, so Finland screens all newborns from cord blood.
- Every newborn has an **otoacoustic-emission (OAE) hearing screen in both ears**. The aim is to find children with poor hearing early enough that care can start on time.
- If the baby **fails OAE in both ears**, the test is repeated on the maternity ward, at the paediatric clinic, or at a midwife appointment about **two weeks** later.
- If both-ear OAE still fails under good conditions, a paediatrician refers the child to a **paediatric hearing centre by three months** of age.
- One ear that hears is described as enough for social hearing and learning to speak — the two-ear fail path is the one that triggers the two-week retest and the three-month referral.
- This is **not** the 2–5-day heel-prick (VasSeu) in [fi-newborn-heel-prick-screen](./fi-newborn-heel-prick-screen.md). Expect TSH + OAE around birth / before discharge, and the consent-based heel-prick separately at 2–5 days.

## Rationale

Terveyskylä Naistalo's living newborn-screening page (last reviewed 12 Jan 2026) is current Finnish-hospital protocol. Cord-blood TSH at birth and both-ear OAE before going home are standing checklist items — they hold if any single day's headline is deleted and they fill the gap the VasSeu-only note does not cover.

## Limits / do not apply when

- Age window: `age-0-72h` (adjacent prepare-now) through the ward screens and any **two-week** OAE retest (referral window to three months). Re-check [`knowledge/parenting/README.md`](./README.md) **Current stage** — a human sets `Child born`, not this note.
- **Finnish hospital / Terveyskylä Naistalo** national guidance. Individual units may time the OAE retest slightly differently; the discharging ward's own instructions win on the day.
- Not a diagnosis and not a substitute for the discharging ward or the paediatric hearing centre. A failed screen is a next-test trigger, not a hearing-loss verdict.
- Does not replace [fi-newborn-heel-prick-screen](./fi-newborn-heel-prick-screen.md) or the pediatrician discharge exam in [fi-newborn-hospital-discharge](./fi-newborn-hospital-discharge.md).

## Related

- Domain hub: [parenting](./README.md)
- Sibling: [fi-newborn-heel-prick-screen](./fi-newborn-heel-prick-screen.md), [fi-newborn-hospital-discharge](./fi-newborn-hospital-discharge.md), [fi-newborn-first-days-care](./fi-newborn-first-days-care.md), [nice-vitamin-k-newborn-prophylaxis](./nice-vitamin-k-newborn-prophylaxis.md)
- Consumer hint: household arrival checklist / ward screens
