# Ravens

Shared AI knowledge vault — **Huginn** (daily thought / web scan) and **Muninn** (memory / curated store).

Inspired by Odin’s ravens: one flies out for news, the other keeps what matters.

## Layout

```text
watchlist.md          Topics Huginn scans every day
inbox/YYYY-MM-DD.md   Raw daily findings (Huginn)
knowledge/<domain>/   Curated notes (Muninn)
index.md              Cross-cutting index for other projects
```

## Automations

| Raven  | Role                         | Schedule (local) |
|--------|------------------------------|------------------|
| Huginn | Scan web against watchlist   | Daily 07:00      |
| Muninn | Distill inbox → knowledge    | Daily 07:45      |

Consumers (Orbit essays, agentic-ai-field-card, mealplan, etc.) **read** this vault; they are not modified by these automations.

## Domains

- `ai-agents` — frameworks, MCP/A2A, Cursor agent patterns
- `data-bi` — Fabric, Power BI, analytics patterns
- `career` — FI/EU analytics & delivery market
- `food` — pescatarian / FI grocery / household meal planning
- `finance` — long-only liquid equities (Ledger)
- `content` — Orbit radar, essay craft, short-form tooling
