# Ravens

Shared AI knowledge vault — **Huginn** (thought / daily web scan) and **Muninn** (memory / curated store).

Inspired by Odin’s ravens: one flies out for news, the other keeps what matters.

## Why this exists

Portfolio projects (Orbit essays, agentic-ai-field-card, mealplan, Ledger, careerops, …) need a **shared, fresh, citable** knowledge layer. Ravens is that layer: git-native markdown with strict contracts, not a scrapbook and not a database (yet).

## Quick map

```text
watchlist.md              What Huginn is allowed to care about
agents/huginn.md          Huginn playbook (automation prompt source)
agents/muninn.md          Muninn playbook
inbox/YYYY-MM-DD.md       Raw daily findings (Huginn)
knowledge/<domain>/       Durable notes + domain hubs (Muninn)
signals/                  Time-bounded watch items (Muninn)
index.md                  Cross-project entry points
docs/contracts/           Schemas (versioned)
docs/quality.md           Promotion rubric
docs/architecture/        Mermaid system diagrams
examples/                 Golden fixtures
scripts/verify.mjs        Named verify gate
```

## Daily rhythm (Europe/Helsinki)

| Time | Raven  | Writes |
|------|--------|--------|
| 07:00 | Huginn | `inbox/YYYY-MM-DD.md` |
| 07:45 | Muninn | `knowledge/` + `signals/` + `index.md` |

## Domains

| Domain | Feeds |
|--------|--------|
| `ai-agents` | field-card, ProjectBrain, JARVIS |
| `data-bi` | PowerBI portfolio, Orbit Analytics |
| `career` | careerops, careerDev |
| `food` | mealplan |
| `fitness` | mealplan goals, training plans |
| `finance` | Ledger |
| `content` | Orbit Writes / Signals |

## Verify

```powershell
npm run verify
```

## Consumers

Read-only in v1 — see [docs/consumers.md](docs/consumers.md). Automations never write other portfolio repos.

## Agent entry

See [AGENTS.md](AGENTS.md) and [docs/runbook.md](docs/runbook.md).
