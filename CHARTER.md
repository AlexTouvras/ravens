---
name: ravens
domain: personal
---

# ravens Charter

## Vision

Shared markdown knowledge vault: **Huginn** daily scan, **Muninn** distill, **Heimdall** video catalog for portfolio consumers (Orbit, mealplan, fitness, careerops, field-card …).

## Goals

- Keep a citable, contract-versioned knowledge layer in git — no database in v1
- Run Huginn → Muninn daily with Slack digests to `#ravens`
- Maintain Heimdall `watch/` catalog; portfolio projects match clips (fitness coach, household parenting)
- Age-staged parenting notes as household needs evolve (week of life from Child born)
- Read-only consumers — no cross-repo writes from automations

## Success Criteria

- `npm run verify` exits 0 after every automation landing
- Huginn inbox + Muninn knowledge/signals land on `main` most days; digests in `#ravens`
- Heimdall refreshes `watch/` weekly; fitness sync via `coach-strength --sync-videos`
- Key architecture decisions recorded in ProjectBrain
