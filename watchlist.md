# Watchlist

Topics Huginn scans daily. Prefer delivery-changing signals over hype. Skip game-loop experiments, crypto/HFT, and generic model-launch PR.

Last reviewed: 2026-08-17

## Project-relevant GitHub / OSS (cross-cutting)

Find **individual repos** (or significant releases/RFCs in them) that would change a tooling, clone-vs-build, or delivery choice for a named consumer. File under the matching domain below.

- Must name the consumer in `why_it_matters` (field-card, mealplan, Ledger, Power BI portfolio, Orbit, careerops, ravens, ProjectBrain/JARVIS)
- Prefer: recent release, breaking change, first usable CLI/SDK, or a pattern we can adopt this month — not “interesting README”
- `source_url` should be the repo, release, or primary docs page (not a roundup article)
- Cap: at most **2** GitHub/OSS findings per day across all domains unless something exceptional shipped
- Examples of fit: MCP servers that replace custom glue; PBIR/TMDL tooling; agent-skill packs; long-only quant libs (Lean/Nautilus-class) when evaluating Ledger build-vs-clone

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

## fitness

- Strength / hypertrophy programming for a lean high-protein goal (progressive overload, weekly volume, deloads)
- Time-efficient full-body or upper/lower templates that fit a busy week (home or gym)
- Recovery, sleep, and injury-prevention basics that change how you train this week
- Pregnancy- and postpartum-safe activity guidelines (what to avoid, intensity caps, pelvic-floor / return-to-lift notes) for household planning alongside mealplan training modes
- Nordic / Finnish outdoor season tips only when they change weekly movement (ice, dark winter, heat)
- GitHub: programming calculators / open training templates only when they change a weekly plan (not fitness-app clones). Mealplan is still a named consumer here; do not file grocery or nutrition repos.

## parenting

General household parenting for a Finnish home — not grocery, not adult meal-planning. **Time every finding to child age.** Read `knowledge/parenting/README.md` **Current stage** before scanning; that hub is the source of truth for “born yet?” and which windows are in play.

Until **Current stage** says the child is born, treat birth as imminent (days). Scan only:

- `late-pregnancy` — last weeks: labor signs, when to go in, partner support, hospital/home-coming prep
- `labor` — birth and immediate postpartum for the parents
- `age-0-72h` — first hours/days at home (adjacent window; gather so it is ready on arrival)

After **Child born** is a date, compute age in Europe/Helsinki and scan **that window plus one adjacent only**:

| Age | Topic tag |
|-----|-----------|
| 0–2 days | `age-0-72h` |
| 3–14 days | `age-3-14d` |
| 15–56 days (~2–8 weeks) | `age-2-8w` |
| 2–6 months | `age-2-6m` |

Older than the hub stage, toddler, and school-age: skip (empty is success).

What to look for (public-health and Finnish systems, not blogs):

- Neuvola schedule, Kela parental leave / benefits timing, birth registration — only when it bites this window
- Newborn care: safe sleep, feeding (breast/formula/latch/supply — not recipes), soothing, nappies, temperature, jaundice/weight red flags, when to call neuvola or 112
- Safety: car seat home, co-sleeping guidance, heat/cold, pets
- Parent recovery that is not gym programming (sleep shifts, postpartum mental-health flags). Activity/pelvic-floor stays under `fitness`

Every finding **must** put exactly one age/stage tag in `topics` and say “applies at …” in `why_it_matters`. Prefer THL, neuvola, Kela, WHO, AAP, NICE. Infant feeding-safety (honey, formula prep) lives here, not under retired `food`.

GitHub: only a household tool you would actually use this month (rare). No baby-tracker spam.

## security

Secrets, auth, privacy, and local-vs-cloud data handling that would change how a **named** consumer runs.

- MCP / agent auth, API keys in automations, Cursor cloud-agent data handling
- JARVIS / ProjectBrain memory: what may be stored, where, and who can read it
- Ledger credentials and portfolio-data handling (not investment tips)
- GDPR / Finnish data-protection only with a concrete portfolio implication
- GitHub: secret scanning, vault/OIDC patterns, local-model privacy tools — only when ravens, JARVIS, ProjectBrain, Ledger, or careerops would adopt them this month

Skip the CVE firehose unless it hits a dependency a named consumer actually uses.

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
- Grocery flyers, calorie trackers, adult meal-plan templates, restaurant/recipe roundups. Adult food-safety stays off-watchlist (existing `knowledge/food/` notes). Infant feeding-safety belongs under `parenting`
- Parenting influencer listicles, product hauls, sleep-training wars without a primary source, toddler/school content, “10 baby gadgets”
- Generic CVE roundups, consumer antivirus reviews, crypto wallets
- One-off gadget reviews and “10-minute abs” listicles with no programming value
- Repos with no named consumer fit, no recent release/activity signal, or license that blocks portfolio use
