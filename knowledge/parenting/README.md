---
schema: ravens.domain-hub/v1
domain: parenting
updated: 2026-09-03
status: active
---

# Parenting

General household parenting for a Finnish home. Huginn times findings to **Current stage** (child age), not to grocery or adult meal-planning.

## Current stage

Huginn must read this section before scanning. **Do not invent a birth.** After the child arrives, a human sets the date here (Huginn and Muninn must not).

- Status: late pregnancy — birth expected in days (as of 2026-08-17)
- Child born: pending
- Scan windows now: `late-pregnancy`, `labor`, `age-0-72h` (adjacent, prepare-now)

Once `Child born` is `YYYY-MM-DD`, compute age in Europe/Helsinki and scan that window plus one adjacent (`age-0-72h` / `age-3-14d` / `age-2-8w` / `age-2-6m`).

## Current guidance

- AAP safe-sleep ABCs (alone, on the back, firm flat surface; room-share without bed-sharing ≥6 months; no soft bedding; avoid overheating) — set up before birth — [aap-safe-sleep-abcs](./aap-safe-sleep-abcs.md)
- Finland: expect a statutory neuvola home visit within 1–14 days of birth for a first child — no booking needed, just be ready — [fi-neuvola-home-visit-first-time-parents](./fi-neuvola-home-visit-first-time-parents.md)
- Expect vitamin K prophylaxis to be offered for the newborn at/around birth; confirm the local (Finnish) administration protocol with the delivering hospital — [nice-vitamin-k-newborn-prophylaxis](./nice-vitamin-k-newborn-prophylaxis.md)
- HUS: always call **09 471 71500** before travelling in; go in when contractions are regular under 10 minutes; Espoo births move to Jorvi from 1 Sep 2026 09:00 — [hus-call-before-labor](./hus-call-before-labor.md)
- Finland: expect a pediatrician discharge exam, book 24h / 24–36h hospital follow-up by discharge age, and call the discharging ward for jaundice or first-days red flags — [fi-newborn-hospital-discharge](./fi-newborn-hospital-discharge.md)
- Finland: expect a rare-disease heel-prick (VasSeu) at **2–5 days**, with parental consent, on the ward or at a lab point — [fi-newborn-heel-prick-screen](./fi-newborn-heel-prick-screen.md)
- Kela: the birthing parent can file vanhempainraha in OmaKela **before birth** (bundle with raskausraha); the other parent files only after birth; two-month deadline per period — [fi-kela-vanhempainraha-before-birth](./fi-kela-vanhempainraha-before-birth.md)
- Kela: file lapsilisä in OmaKela **before birth**; Kela learns of the birth from the population register — no separate birth notice; first-child EUR 94.88 + EUR 26 under-3 — [fi-kela-lapsilisa-before-birth](./fi-kela-lapsilisa-before-birth.md)
- Finland: jaundice is common (up to half of term newborns); physiological peak at **3–5 days**; phototherapy is the standard next step — [fi-newborn-jaundice-phototherapy](./fi-newborn-jaundice-phototherapy.md)
- Finland: first-days care — back sleep, ≥8 breastfeeds/24h, dry-cotton-bud cord care, check warmth at the neck, no nail cutting for two weeks — [fi-newborn-first-days-care](./fi-newborn-first-days-care.md)
- Finland: waters breaking — call the maternity hospital first; pad-check at home; usual 12h review and 24h induction — [fi-waters-breaking-call-first](./fi-waters-breaking-call-first.md)
- Finland: first latch — let the baby crawl to the breast; hand-express colostrum if no latch within two hours — [fi-first-latch-hand-express](./fi-first-latch-hand-express.md)

Related, other domains: pregnancy fish/listeria under [`food/`](../food/); pregnancy activity under [`fitness/acog-pregnancy-postpartum-activity.md`](../fitness/acog-pregnancy-postpartum-activity.md).

## Active signals

_(none)_

## Note index

| Slug | Title | Updated | Status |
|------|-------|---------|--------|
| aap-safe-sleep-abcs | AAP safe-sleep ABCs for the newborn's first days home | 2026-08-21 | active |
| fi-neuvola-home-visit-first-time-parents | Finland — statutory neuvola home visit within 1–14 days of birth | 2026-08-22 | active |
| nice-vitamin-k-newborn-prophylaxis | Expect vitamin K prophylaxis to be offered for the newborn at/around birth | 2026-08-27 | active |
| hus-call-before-labor | HUS — call 09 471 71500 before going in; go-in under 10-minute contractions | 2026-08-30 | active |
| fi-newborn-hospital-discharge | Finland — pediatrician discharge exam, 24–36h follow-up, and first-days red flags | 2026-09-02 | active |
| fi-newborn-heel-prick-screen | Finland — newborn rare-disease heel-prick at 2–5 days, with parental consent | 2026-09-01 | active |
| fi-kela-vanhempainraha-before-birth | Finland — birthing parent can file vanhempainraha in OmaKela before birth | 2026-09-01 | active |
| fi-kela-lapsilisa-before-birth | Finland — file lapsilisä in OmaKela before birth; Kela learns of the birth from the register | 2026-09-02 | active |
| fi-newborn-jaundice-phototherapy | Finland — newborn jaundice is common; phototherapy is the standard next step | 2026-09-02 | active |
| fi-newborn-first-days-care | Finland — first-days newborn care (back sleep, ≥8 feeds, cord, neck warmth) | 2026-09-02 | active |
| fi-waters-breaking-call-first | Finland — waters breaking: call the maternity hospital first; pad-check at home | 2026-09-03 | active |
| fi-first-latch-hand-express | Finland — first latch: let the baby crawl to the breast; hand-express if no latch in two hours | 2026-09-03 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-09-03 | Promoted KNOW-parenting-fi-waters-breaking-call-first from FIND-20260903-003 (Terveyskylä Naistalo living waters page: call-first, pad check, 12h review, 24h induction; late-pregnancy / labor) and KNOW-parenting-fi-first-latch-hand-express from FIND-20260903-004 (Terveyskylä Naistalo living first-breastfeed page: crawl-to-breast, two-hour latch window, hand-express colostrum; labor / age-0-72h) |
| 2026-09-02 | Promoted KNOW-parenting-fi-newborn-jaundice-phototherapy from FIND-20260902-002 (Terveyskylä Naistalo living jaundice page: common, 3–5-day peak, phototherapy; age-0-72h), KNOW-parenting-fi-kela-lapsilisa-before-birth from FIND-20260902-003 (Kela living lapsilisä page: file before birth, register-notified birth; late-pregnancy), and KNOW-parenting-fi-newborn-first-days-care from FIND-20260902-004 (Terveyskylä Naistalo living basic-care page: ≥8 feeds, cord, neck warmth, two-week nails; age-0-72h) |
| 2026-09-01 | Promoted KNOW-parenting-fi-newborn-heel-prick-screen from FIND-20260901-003 (Terveyskylä living VasSeu page: 2–5-day heel-prick + parental consent; age-0-72h) and KNOW-parenting-fi-kela-vanhempainraha-before-birth from FIND-20260901-004 (Kela living vanhempainraha page: birthing parent may file before birth; late-pregnancy) |
| 2026-08-31 | Promoted KNOW-parenting-fi-newborn-hospital-discharge from FIND-20260831-003 (Terveyskylä Naistalo living discharge page: pediatrician exam, 24h / 24–36h follow-up, jaundice + first-days red flags; age-0-72h) |
| 2026-08-30 | Promoted KNOW-parenting-hus-call-before-labor from FIND-20260830-003 (HUS living synnytys page: call-first 09 471 71500, go-in under 10-minute contractions, Espoo→Jorvi 1 Sep 2026; late-pregnancy / labor) |
| 2026-08-27 | Promoted KNOW-parenting-nice-vitamin-k-newborn-prophylaxis from FIND-20260827-005 (NICE NG235 reinstated vitamin K prophylaxis recommendation, age-0-72h) |
| 2026-08-22 | Promoted KNOW-parenting-fi-neuvola-home-visit-first-time-parents from FIND-20260822-004 (age-0-72h, adjacent prepare-now; statutory home visit within 1–14 days) |
| 2026-08-21 | Promoted KNOW-parenting-aap-safe-sleep-abcs from FIND-20260821-005 (age-0-72h) |
| 2026-08-17 | Domain hub created; stage = late pregnancy / birth imminent |
