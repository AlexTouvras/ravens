---
schema: ravens.domain-hub/v1
domain: parenting
updated: 2026-08-31
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
| fi-newborn-hospital-discharge | Finland — pediatrician discharge exam, 24–36h follow-up, and first-days red flags | 2026-08-31 | active |

## Changelog

| Date | Change |
|------|--------|
| 2026-08-31 | Promoted KNOW-parenting-fi-newborn-hospital-discharge from FIND-20260831-003 (Terveyskylä Naistalo living discharge page: pediatrician exam, 24h / 24–36h follow-up, jaundice + first-days red flags; age-0-72h) |
| 2026-08-30 | Promoted KNOW-parenting-hus-call-before-labor from FIND-20260830-003 (HUS living synnytys page: call-first 09 471 71500, go-in under 10-minute contractions, Espoo→Jorvi 1 Sep 2026; late-pregnancy / labor) |
| 2026-08-27 | Promoted KNOW-parenting-nice-vitamin-k-newborn-prophylaxis from FIND-20260827-005 (NICE NG235 reinstated vitamin K prophylaxis recommendation, age-0-72h) |
| 2026-08-22 | Promoted KNOW-parenting-fi-neuvola-home-visit-first-time-parents from FIND-20260822-004 (age-0-72h, adjacent prepare-now; statutory home visit within 1–14 days) |
| 2026-08-21 | Promoted KNOW-parenting-aap-safe-sleep-abcs from FIND-20260821-005 (age-0-72h) |
| 2026-08-17 | Domain hub created; stage = late pregnancy / birth imminent |
