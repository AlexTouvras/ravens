---
schema: ravens.knowledge/v1
id: KNOW-parenting-fi-kela-card-after-hetu-name
domain: parenting
title: Finland — do not apply for the newborn’s Kela card; it posts after hetu and name
status: active
updated: 2026-09-05
created: 2026-09-05
confidence: high
tags: [age-0-72h, kela, kela-card, hetu, finland]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260905-005
canonical_sources:
  - url: https://www.kela.fi/ilmoita-muutoksista-syntyma
    title: Miten syntymä vaikuttaa Kelan tukiin? — Kela
    accessed: 2026-09-05
---

# Finland — do not apply for the newborn’s Kela card; it posts after hetu and name

## Guidance

- Do **not** apply for the child's Kela card. Kela posts it **automatically** once the child has a **personal identity code** and a **name**.
- Kela takes those data from the **population information system**. The card is ready to post within **five days** of the data arriving.
- That sequence depends on [fi-dvv-birth-hetu-automatic](./fi-dvv-birth-hetu-automatic.md): the hospital files the birth, the hetu arrives without a parent filing, and names (and mother tongue) are the first parent-filed DVV/parish step.
- Distinct from [fi-kela-lapsilisa-before-birth](./fi-kela-lapsilisa-before-birth.md): Kela learning of the birth for lapsilisä is not a Kela-card application. File lapsilisä and the birthing parent's vanhempainraha in OmaKela as those notes say.
- If the household already receives **general housing allowance** or **social assistance**, review the amount in OmaKela — family size changes the payment. That is a review, not a card application.

## Rationale

Kela's living “how birth affects Kela benefits” page (updated 28 Aug 2026) is current Finnish-benefits protocol. Automatic card posting after hetu and name, and the five-day ready-to-post window, are standing admin rules — they hold if any single day's headline is deleted and they fill the gap the DVV hetu note and the lapsilisä note do not cover (no separate Kela-card application).

## Limits / do not apply when

- Age window: `age-0-72h` (adjacent prepare-now; the card follows the automatic hetu and the later name filing). Re-check [`knowledge/parenting/README.md`](./README.md) **Current stage** — a human sets `Child born`, not this note.
- **Finnish Kela** rules for a child entered in the Finnish population information system. Other countries' health-insurance cards are out of scope.
- The card does not post until **both** hetu and name are in the register — do not expect it on the discharge day. Name filing still has the three-month DVV/parish deadline.
- Not medical guidance and not a substitute for OmaKela. Housing-allowance / social-assistance review applies only if the household already receives those benefits. Does not change [hus-call-before-labor](./hus-call-before-labor.md).

## Related

- Domain hub: [parenting](./README.md)
- Sibling: [fi-dvv-birth-hetu-automatic](./fi-dvv-birth-hetu-automatic.md), [fi-kela-lapsilisa-before-birth](./fi-kela-lapsilisa-before-birth.md), [fi-kela-vanhempainraha-before-birth](./fi-kela-vanhempainraha-before-birth.md)
- Consumer hint: household arrival / first-weeks admin checklist
