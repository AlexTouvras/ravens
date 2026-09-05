# Consumer contract

How other projects use Ravens. **v1: read-only.**

## Principles

1. Treat `AlexTouvras/ravens` as the source of truth for shared AI knowledge.
2. Prefer `knowledge/<domain>/` and `index.md` over raw `inbox/`. Use `watch/` for form/how-to/motivate videos.
3. Use `signals/` for time-bounded watch items; check `expires` and `status`.
4. Never require Huginn/Muninn/Heimdall to write into your repo until an explicit consumer automation is designed.

## Watch matching (Heimdall)

Heimdall does **not** post to Slack. Value is in **`watch/` notes on `main`** that consumers join by slug, `consumer`, and body hooks.

| Consumer project | Ravens path | Join key | How |
|------------------|-------------|----------|-----|
| **fitness** coach | `watch/fitness/` | `Coach library: …` line in note body + slug | `exercise_videos.py` parses frontmatter; `video_url_for(lift_name)` at HTML/Slack render. Snapshot: `fitness/data/library/exercise_videos.json` via `coach-strength --sync-videos` after Heimdall lands. |
| **fitness** kickoff | `watch/fitness/` motivate slugs | `gym-anime`, `lift-motivation` | `week_boost.py` rotates by `week_id`; not mixed with form-check. |
| **mealplan** | `knowledge/fitness/`, `knowledge/food/` | domain hubs | Text nutrition/activity only today; no direct `watch/` join yet. |
| **household** parenting | `watch/parenting/` + `knowledge/parenting/` | `stage` / week of life vs hub **Current stage** | Human or agent reads how-tos for this week of life (and next) from `Child born`. |

### Fitness sync (after Heimdall push)

From the fitness repo (sibling `../ravens` or `RAVENS_DIR`):

```powershell
python -m fitness_coach.scripts.coach_strength --sync-videos
```

Rewrites `data/library/exercise_videos.json` from live `watch/fitness/*.md`. Cloud automations use the snapshot when ravens is not checked out.

### Watch note hooks (Heimdall must maintain)

- **Form-check:** `consumer: fitness` and `Coach library: Back squat` (exact coach-library name) under **Related**.
- **Motivate:** `consumer: fitness`, `intent: motivate`; join by slug only — no fake form cues.
- **Parenting how-to:** `consumer: household`, one `stage` tag matching the hub window.

## Suggested read paths

| Consumer | Primary paths |
|----------|----------------|
| agentic-ai-field-card | `knowledge/ai-agents/`, matching `signals/` |
| Power BI / Orbit Analytics | `knowledge/data-bi/` |
| careerops / careerDev | `knowledge/career/`, `knowledge/security/` |
| mealplan | `knowledge/food/`, `knowledge/fitness/` |
| fitness coach | `knowledge/fitness/`, `watch/fitness/` (form-check + motivate) |
| household (parenting) | `knowledge/parenting/` (read **Current stage** / week of life first), `watch/parenting/` |
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
- `watch/` **is** the public video API — stable slugs and `WATCH-` ids; URL may refresh, id must not.
