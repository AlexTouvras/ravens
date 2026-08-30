# Consumer contract

How other projects use Ravens. **v1: read-only.**

## Principles

1. Treat `AlexTouvras/ravens` as the source of truth for shared AI knowledge.
2. Prefer `knowledge/<domain>/` and `index.md` over raw `inbox/`. Use `watch/` for form/how-to videos.
3. Use `signals/` for time-bounded watch items; check `expires` and `status`.
4. Never require Huginn/Muninn to write into your repo until an explicit consumer automation is designed.

## Suggested read paths

| Consumer | Primary paths |
|----------|----------------|
| agentic-ai-field-card | `knowledge/ai-agents/`, matching `signals/` |
| Power BI / Orbit Analytics | `knowledge/data-bi/` |
| careerops / careerDev | `knowledge/career/`, `knowledge/security/` |
| mealplan | `knowledge/food/`, `knowledge/fitness/` |
| fitness coach | `knowledge/fitness/`, `watch/fitness/` (form-check clips; motivate lane is optional pump only) |
| household (parenting) | `knowledge/parenting/` (read **Current stage** first), `watch/parenting/` |
| Ledger | `knowledge/finance/`, `knowledge/security/` |
| JARVIS / ProjectBrain | `knowledge/ai-agents/`, `knowledge/security/` |
| Orbit Writes / Signals | `knowledge/content/`, high-priority signals |

## Integration patterns (when ready)

1. **Clone or sparse-checkout** this repo in a weekly job; copy relevant notes into your brief.
2. **Submodule** (optional) if you want a pinned SHA.
3. **MCP bridge** (later) — ProjectBrain or a thin ravens server that returns hub JSON.

## Stability promises

- Paths under `docs/contracts/` are versioned; consumers should key off `schema:` frontmatter.
- Domain folder names are stable: `ai-agents`, `data-bi`, `career`, `food`, `fitness`, `parenting`, `finance`, `security`, `content`.
- A domain may leave the daily watchlist without deleting its hub. `food/` is existing notes only; Huginn does not scan it.
- Inbox is **not** a public API — may be noisy; Muninn output is the API.
