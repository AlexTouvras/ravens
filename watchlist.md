# Watchlist

Topics Huginn scans daily. Prefer delivery-changing signals over hype. Skip game-loop experiments, crypto/HFT, and generic model-launch PR.

Last reviewed: 2026-08-12

## Project-relevant GitHub / OSS (cross-cutting)

Find **individual repos** (or significant releases/RFCs in them) that would change a tooling, clone-vs-build, or delivery choice for a named consumer. File under the matching domain below.

- Must name the consumer in `why_it_matters` (field-card, mealplan, Ledger, Power BI portfolio, Orbit, careerops, ravens, ProjectBrain/JARVIS)
- Prefer: recent release, breaking change, first usable CLI/SDK, or a pattern we can adopt this month — not “interesting README”
- `source_url` should be the repo, release, or primary docs page (not a roundup article)
- Cap: at most **2** GitHub/OSS findings per day across all domains unless something exceptional shipped
- Examples of fit: MCP servers that replace custom glue; PBIR/TMDL tooling; agent-skill packs; meal-planning / nutrition APIs with clear license; long-only quant libs (Lean/Nautilus-class) when evaluating Ledger build-vs-clone

## ai-agents

- Agent frameworks that change delivery choices (LangGraph, CrewAI, LlamaIndex, MS Agent Framework, OpenAI/Claude Agent SDKs, Pydantic AI, Google ADK)
- Protocols: MCP and A2A — spec + server ecosystem (not every language SDK)
- Cursor / IDE agent patterns: skills vs rules, automations, human-in-the-loop approve gates
- RAG, evaluation, durable agent state — only when it changes field-card guidance
- GitHub: Cursor skill packs, MCP servers, agent eval harnesses that field-card or ProjectBrain would actually wire in

## data-bi

- Microsoft Fabric + Power BI Desktop / PBIR / semantic-model authoring
- DAX and model design (SQLBI-class depth), Direct Lake, executive report storytelling
- Patterns we ship: churn propensity, RFM/segmentation, 30-day readmission, credit PD/PSI, Nordic equity boards
- GitHub: PBIR/PBIP/TMDL CLIs, Fabric deployment helpers, DAX/test tooling that changes how portfolio reports ship

## career

- FI/EU analytics, risk, BI manager, and technology-delivery role market
- Progression ladders / capability frameworks (DDaT-style data + delivery)
- Agile / Scrum / continuous-delivery practice useful for Delivery Lead / app ops (not generic PM hype)
- GitHub: only when a public framework/repo is the primary artifact careerops would cite (rare)

## food

- Pescatarian + pregnancy/newborn food safety (mercury, leftovers, undercooked bans)
- Finnish grocery / seasonal produce; Lidl–K–S offer patterns (Asola / Vantaa)
- High-protein eggless-fish week templates (oats, yogurt/cottage, one-tray, legumes/tofu)
- GitHub: meal-plan / grocery / nutrition OSS only with license clarity and mealplan fit (not calorie-tracker spam)

## fitness

- Strength / hypertrophy programming for a lean high-protein goal (progressive overload, weekly volume, deloads)
- Time-efficient full-body or upper/lower templates that fit a busy week (home or gym)
- Recovery, sleep, and injury-prevention basics that change how you train this week
- Pregnancy- and postpartum-safe activity guidelines (what to avoid, intensity caps, pelvic-floor / return-to-lift notes) for household planning alongside mealplan
- Nordic / Finnish outdoor season tips only when they change weekly movement (ice, dark winter, heat)
- GitHub: programming calculators / open training templates only when they change a weekly plan (not fitness-app clones)

## finance

- Liquid long-only equity research: momentum vs equal-weight vs buy-and-hold, turnover bars
- Nordic + US names relevant to a Nordnet book; portfolio construction (not day-trading)
- Quant platform OSS only when evaluating clone-vs-build (Lean, Nautilus) — not crypto bots
- **Investment opportunities** (actionable, sourced, time-bounded): Nordic / EU / US liquid equities or broad ETFs with a clear catalyst in the next weeks–months (earnings, guidance, regulatory, M&A, index events, capital-return programs)
- New listings / spin-offs / secondary offerings on venues a retail Nordnet book can actually trade
- Macro or sector regime shifts that change what is worth watching this month (rates, FX, commodity input costs) — only with a primary source and a concrete portfolio implication
- Skip tips, paywalled “stock picks,” undisclosed research, and anything that smells like tipster or crypto promotion
- GitHub: long-only backtest / portfolio libs and Nordnet-adjacent tooling when Ledger faces a build-vs-clone choice

## content

- RSS / news-radar and “build in public” essay craft (Orbit weekly Write)
- Faceless short-video pipeline tooling: TTS, captions, beat-aligned image gen (only when reels stack is active)
- GitHub: RSS/radar or MDX/essay pipeline tools only when Orbit Writes stack is actively changing

## Explicitly ignore

- Game sandboxes (Unity garden, endless-runner, match-3 Ralph demos)
- WhatsApp/Telegram/Discord bots, **awesome-lists**, “top N GitHub repos” listicles, MetaGPT-style star magnets
- Per-language MCP SDK spam; watch spec + servers instead
- Crypto / tipster finance / HFT
- Generic AI news firehose and academic thesis-style writing advice
- Fitness influencer challenges, before/after marketing, steroid discourse, extreme cuts
- One-off gadget reviews and “10-minute abs” listicles with no programming value
- Repos with no named consumer fit, no recent release/activity signal, or license that blocks portfolio use
