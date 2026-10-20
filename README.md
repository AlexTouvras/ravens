# Ravens

Shared AI knowledge vault — **Huginn** (thought / weekly web scan), **Muninn** (memory / curated store), and **Heimdall** (sight / video catalog).

Inspired by Odin’s ravens plus Heimdall, the watchman: two fly for news and memory; one keeps what is worth watching.

## Why this exists

Portfolio projects (Orbit essays, agentic-ai-field-card, mealplan, Ledger, careerops, fitness, household …) need a **shared, fresh, citable** knowledge layer. Ravens is that layer: git-native markdown with strict contracts, not a scrapbook and not a database (yet).

## Quick map

```text
watchlist.md              What Huginn is allowed to care about
sight.md                  What Heimdall may catalog (videos)
agents/huginn.md          Huginn playbook (automation prompt source)
agents/muninn.md          Muninn playbook
agents/heimdall.md        Heimdall playbook
inbox/YYYY-MM-DD.md       Raw weekly findings (Huginn)
knowledge/<domain>/       Durable notes + domain hubs (Muninn)
signals/                  Time-bounded watch items (Muninn)
watch/<domain>/           Video catalog (Heimdall)
index.md                  Cross-project entry points
docs/contracts/           Schemas (versioned)
docs/quality.md           Promotion rubric + video gates
docs/architecture/        Mermaid system diagrams
examples/                 Golden fixtures
scripts/verify.mjs        Named verify gate
```

## Weekly rhythm

Automations store UTC. Europe/Helsinki is three hours ahead until the autumn clock change, then two.

| Time | Agent | Writes |
|------|--------|--------|
| Monday 19:00 Helsinki (`0 16 * * 1` UTC) | Huginn | `inbox/YYYY-MM-DD.md` |
| after Huginn lands on `main` | Muninn | `knowledge/` + `signals/` + `index.md` |
| Monday 20:00 Helsinki (`0 17 * * 1` UTC) | Muninn retry | only if that push was missed and HEAD is still `huginn:` |
| Sunday 10:00 Helsinki (`0 7 * * 0` UTC) | Heimdall | `watch/` (fitness + parenting clips) |

## Domains

| Domain | Feeds |
|--------|--------|
| `ai-agents` | field-card, ProjectBrain, JARVIS |
| `data-bi` | PowerBI portfolio, Orbit Analytics |
| `career` | careerops, careerDev |
| `food` | mealplan (existing notes only; not on the watchlist) |
| `fitness` | mealplan goals, fitness coach — **`watch/fitness/`** matched by lift name / motivate slug |
| `parenting` | household (age-bucket tags; week-plans live in that project) |
| `finance` | Ledger — catalysts, plus the `stocks` watchlist section (mid/long setups, same domain) |
| `security` | JARVIS, ProjectBrain, Ledger, careerops, ravens |
| `content` | Orbit Writes / Signals |

## Verify

```powershell
npm run verify
```

## Consumers

Read-only in v1 — see [docs/consumers.md](docs/consumers.md). Automations never write other portfolio repos.

## Agent entry

See [AGENTS.md](AGENTS.md) and [docs/runbook.md](docs/runbook.md).
