---
schema: ravens.domain-hub/v1
domain: parenting
updated: 2026-09-05
status: active
---

# Parenting

General household parenting for a Finnish home. Huginn times findings to **week of life**, not to grocery, adult meal-planning, or generic “newborn” queries.

## Current stage

Huginn must read this section before scanning. **Do not invent or change `Child born`.** Only a human sets that date.

- Status: born
- Child born: 2026-08-20
- Formula (Europe/Helsinki calendar dates): `age_days = today − Child born`; `week_of_life = floor(age_days / 7) + 1` (week 1 = days 0–6)
- Snapshot **as of 2026-09-05:** 16 days, **week 3** of life (this week: 2026-09-03 – 2026-09-09). Coming week = **week 4** (starts 2026-09-10)
- Bucket tag now: `age-2-8w` (15–56 days). Adjacent only if a finding still bites: `age-3-14d` (cord, jaundice tail). Do **not** scan `late-pregnancy` or `labor`

Huginn **recomputes** age and week every run. Do not copy the snapshot if the calendar has moved. Search **this week of life and the coming week** so a household week-plan can be listed later (development, feeding, sleep, neuvola, safety, parent recovery). Skip first-days / labour topics already in this hub unless the living page changed the rule.

## This week's plan

Living list: [coming-week](./coming-week.md) (Muninn rewrites when week of life moves). Snapshot 2026-09-05 — week 3 now, week 4 from 10 Sep.

## Current guidance (this week / coming week)

Still in play at week 3–4:

- **Week-plan packing list** — [coming-week](./coming-week.md)
- LUVN: **2–4 week** nurse visit now, **4–6 week** nurse+doctor next — [luvn-neuvola-2-4w-4-6w](./luvn-neuvola-2-4w-4-6w.md)
- Vitamin D **10 µg/day from 2 weeks**; reduce if formula ≥500 ml/day — [fi-infant-vitamin-d-from-2-weeks](./fi-infant-vitamin-d-from-2-weeks.md)
- 0–1 month: eye contact, moving limbs together; birth weight back by ~2 weeks, then 150–200 g/week — [thl-0-1-month-development-growth](./thl-0-1-month-development-growth.md)
- AAP safe-sleep ABCs — [aap-safe-sleep-abcs](./aap-safe-sleep-abcs.md)
- Back sleep, ≥8 feeds; two-week nail rule is ending — [fi-newborn-first-days-care](./fi-newborn-first-days-care.md)
- Jaundice can linger through 4–6 weeks — [fi-newborn-jaundice-phototherapy](./fi-newborn-jaundice-phototherapy.md)
- If lochia becomes heavy again, or foul with fever, call the maternity hospital — [fi-postpartum-lochia-fever-red-flags](./fi-postpartum-lochia-fever-red-flags.md)
- OAE hearing retest ~2 weeks if both ears failed at discharge — [fi-newborn-tsh-oae-screens](./fi-newborn-tsh-oae-screens.md)
- Names and mother tongue to DVV or parish within three months; hetu is automatic — [fi-dvv-birth-hetu-automatic](./fi-dvv-birth-hetu-automatic.md)
- Do not apply for the newborn’s Kela card — it posts after hetu and name — [fi-kela-card-after-hetu-name](./fi-kela-card-after-hetu-name.md)
- Other parent files vanhempainraha **after birth** — [fi-kela-vanhempainraha-before-birth](./fi-kela-vanhempainraha-before-birth.md)
- Lapsilisä if not already in OmaKela — [fi-kela-lapsilisa-before-birth](./fi-kela-lapsilisa-before-birth.md)

Passed windows (do not re-scan unless the living page changed): labour start thresholds, waters breaking, first latch, vitamin K at birth, HUS labour call-first, hospital discharge / heel-prick, statutory 1–14 day home visit.

Related, other domains: infant feeding-safety here, not `food/`; postpartum activity under [`fitness/acog-pregnancy-postpartum-activity.md`](../fitness/acog-pregnancy-postpartum-activity.md) timed to the same week of life.

## Active signals

- [SIG-20260905-003](../../signals/SIG-20260905-003.md) — AAP 1-month 8–12 feeds/day (US; expire 20 Sep)

## Note index

| Slug | Title | Updated | Status |
|------|-------|---------|--------|
| coming-week | Household week-plan — week 3 now, week 4 next | 2026-09-05 | active |
| luvn-neuvola-2-4w-4-6w | LUVN — 2–4 week nurse visit, then 4–6 week nurse+doctor | 2026-09-05 | active |
| fi-infant-vitamin-d-from-2-weeks | Finland — 10 µg/day vitamin D from 2 weeks of age | 2026-09-05 | active |
| thl-0-1-month-development-growth | THL — 0–1 month development and ~2-week weight regain | 2026-09-05 | active |
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
| fi-newborn-tsh-oae-screens | Finland — cord-blood TSH at birth and both-ear OAE hearing screen before going home | 2026-09-04 | active |
| fi-dvv-birth-hetu-automatic | Finland — hospital reports the birth; the child gets a hetu without a parent filing | 2026-09-04 | active |
| fi-labor-start-contraction-thresholds | Finland — first-time labor is usually 2h of 5-minute contractions; subsequent 1h of 10-minute | 2026-09-05 | active |
| fi-postpartum-lochia-fever-red-flags | Finland — if lochia becomes heavy again, or foul with fever, call the maternity hospital | 2026-09-05 | active |
| fi-kela-card-after-hetu-name | Finland — do not apply for the newborn’s Kela card; it posts after hetu and name | 2026-09-05 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-09-05 | Human set Child born 2026-08-20; scans follow week of life. Promoted coming-week, luvn-neuvola-2-4w-4-6w, fi-infant-vitamin-d-from-2-weeks, thl-0-1-month-development-growth from FIND-20260905-006…008; opened SIG-20260905-003 from FIND-20260905-009. Morning Muninn also promoted labor-start, lochia/fever, and Kela-card notes from FIND-20260905-003…005 |
| 2026-09-04 | Promoted KNOW-parenting-fi-newborn-tsh-oae-screens from FIND-20260904-005 and KNOW-parenting-fi-dvv-birth-hetu-automatic from FIND-20260904-006 |
| 2026-09-03 | Promoted KNOW-parenting-fi-waters-breaking-call-first from FIND-20260903-003 and KNOW-parenting-fi-first-latch-hand-express from FIND-20260903-004 |
| 2026-09-02 | Promoted KNOW-parenting-fi-newborn-jaundice-phototherapy from FIND-20260902-002, KNOW-parenting-fi-kela-lapsilisa-before-birth from FIND-20260902-003, and KNOW-parenting-fi-newborn-first-days-care from FIND-20260902-004 |
| 2026-09-01 | Promoted KNOW-parenting-fi-newborn-heel-prick-screen from FIND-20260901-003 and KNOW-parenting-fi-kela-vanhempainraha-before-birth from FIND-20260901-004 |
| 2026-08-31 | Promoted KNOW-parenting-fi-newborn-hospital-discharge from FIND-20260831-003 |
| 2026-08-30 | Promoted KNOW-parenting-hus-call-before-labor from FIND-20260830-003 |
| 2026-08-27 | Promoted KNOW-parenting-nice-vitamin-k-newborn-prophylaxis from FIND-20260827-005 |
| 2026-08-22 | Promoted KNOW-parenting-fi-neuvola-home-visit-first-time-parents from FIND-20260822-004 |
| 2026-08-21 | Promoted KNOW-parenting-aap-safe-sleep-abcs from FIND-20260821-005 |
| 2026-08-17 | Domain hub created; stage = late pregnancy / birth imminent |
