---
schema: ravens.domain-hub/v1
domain: parenting
updated: 2026-08-17
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

_(none yet)_

Related, other domains: pregnancy fish/listeria under [`food/`](../food/); pregnancy activity under [`fitness/acog-pregnancy-postpartum-activity.md`](../fitness/acog-pregnancy-postpartum-activity.md).

## Active signals

_(none)_

## Note index

_(none yet)_

## Changelog

| Date | Change |
|------|--------|
| 2026-08-17 | Domain hub created; stage = late pregnancy / birth imminent |
