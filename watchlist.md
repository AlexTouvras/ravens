# Watchlist

Topics Huginn scans daily for **named portfolio consumers** (field-card, mealplan, fitness, household, Ledger, careerops, Orbit, ravens, ProjectBrain/JARVIS). Every section below is in scope every run. Do **not** compute week of life or write a household week-plan — that lives outside ravens. Prefer delivery-changing signals over hype. Skip game-loop experiments, crypto/HFT, generic model-launch PR, and world-news firehoses.

Last reviewed: 2026-09-06

Cite the **publisher** (`source_url`). Preferred sources below are search hints, not a quota you must fill. Empty is success.

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
- Prefer: vendor docs and GitHub **releases** for named frameworks; MCP spec. Skip HN roundups.

## data-bi

- Microsoft Fabric + Power BI Desktop / PBIR / semantic-model authoring
- DAX and model design (SQLBI-class depth), Direct Lake, executive report storytelling
- Patterns we ship: churn propensity, RFM/segmentation, 30-day readmission, credit PD/PSI, Nordic equity boards
- GitHub: PBIR/PBIP/TMDL CLIs, Fabric deployment helpers, DAX/test tooling that changes how portfolio reports ship
- Prefer: Microsoft Learn, SQLBI, Fabric blog, those CLIs’ release notes

## career

- FI/EU analytics, risk, BI manager, and technology-delivery role market
- Progression ladders / capability frameworks (DDaT-style data + delivery)
- Agile / Scrum / continuous-delivery practice useful for Delivery Lead / app ops (not generic PM hype)
- GitHub: only when a public framework/repo is the primary artifact careerops would cite (rare)
- Prefer: official FI/EU role frameworks (DDaT-style), named employer or agency pages. Skip LinkedIn influencer posts.

## fitness

- Strength / hypertrophy programming for a lean high-protein goal (progressive overload, weekly volume, deloads)
- Time-efficient full-body or upper/lower templates that fit a busy week (home or gym)
- Recovery, sleep, and injury-prevention basics that change how you train this week
- Postpartum return for mealplan / fitness (walking, pelvic-floor, medically staged). After `Child born` is set on the parenting hub, do **not** search late-pregnancy exercise. ACOG ≥150 min/week remains the durable ceiling, not a newborn-era lift program
- Nordic / Finnish outdoor season tips only when they change weekly movement (ice, dark winter, heat)
- GitHub: programming calculators / open training templates only when they change a weekly plan (not fitness-app clones). Mealplan is still a named consumer here; do not file grocery or nutrition repos.
- Prefer: ACSM, ACOG, NSCA-class writing, THL activity notes. Skip Instagram and challenge blogs.

## parenting

Gather Finnish household infant / postpartum care that the **household** consumer would read. Not grocery, not adult meal-planning, not a week-of-life plan (another project owns that).

Read `knowledge/parenting/README.md` **Current stage** only to know whether birth has happened. After `Child born` is set, skip `late-pregnancy` / `labor` unless a living page changed a still-actionable rule (e.g. other-parent Kela). Skip toddler and school-age. Do **not** compute week of life.

Tag findings with one age **bucket** from the source’s own age range (so household can filter):

| Age | Topic tag |
|-----|-----------|
| 0–2 days | `age-0-72h` |
| 3–14 days | `age-3-14d` |
| 15–56 days (~2–8 weeks) | `age-2-8w` |
| 2–6 months | `age-2-6m` |

Useful gather lanes (primary sources, not a quota): development, feeding/growth, sleep/soothing, LUVN neuvola (Espoo is LUVN, not HUS), vitamin D / infant feeding-safety, parent recovery that is not gym programming. Activity/pelvic-floor stays under `fitness`. `why_it_matters` names **household**. Prefer THL, LUVN/neuvola, Kela, Ruokavirasto, WHO, AAP, NICE.

GitHub: only a household tool you would actually use this month (rare). No baby-tracker spam.

## security

Secrets, auth, privacy, and local-vs-cloud data handling that would change how a **named** consumer runs.

- MCP / agent auth, API keys in automations, Cursor cloud-agent data handling
- JARVIS / ProjectBrain memory: what may be stored, where, and who can read it
- Ledger credentials and portfolio-data handling (not investment tips)
- GDPR / Finnish data-protection only with a concrete portfolio implication
- GitHub: secret scanning, vault/OIDC patterns, local-model privacy tools — only when ravens, JARVIS, ProjectBrain, Ledger, or careerops would adopt them this month

Skip the CVE firehose unless it hits a dependency a named consumer actually uses. Prefer vendor security advisories and CISA KEV **for that stack**, not World Monitor / IOC dashboards.

## finance

- Liquid long-only equity research: momentum vs equal-weight vs buy-and-hold, turnover bars
- Nordic + US names relevant to a Nordnet book; portfolio construction (not day-trading)
- Quant platform OSS only when evaluating clone-vs-build (Lean, Nautilus) — not crypto bots
- **Investment opportunities** (actionable, sourced, time-bounded): Nordic / EU / US liquid equities or broad ETFs with a clear catalyst in the next weeks–months (earnings, guidance, regulatory, M&A, index events, capital-return programs). Needs `corroboration_url` before Muninn promotes (same rule as macro)
- New listings / spin-offs / secondary offerings on venues a retail Nordnet book can actually trade
- Macro or sector regime shifts that change what is worth watching this month (rates, FX, commodity input costs) — primary source **plus** a second independent stream (`corroboration_url`); see `docs/quality.md` finance filters
- Prefer: company IR / filings, Nasdaq Helsinki / Nasdaq / NYSE notices, ECB, Fed, BoE. Yle/Reuters are fine as the second stream, not as the only one for an “opportunity”
- Skip tips, paywalled “stock picks,” undisclosed research, and anything that smells like tipster or crypto promotion
- GitHub: long-only backtest / portfolio libs and Nordnet-adjacent tooling when Ledger faces a build-vs-clone choice

## content

- RSS / news-radar and “build in public” essay craft (Orbit weekly Write)
- Faceless short-video pipeline tooling: TTS, captions, beat-aligned image gen (only when reels stack is active)
- GitHub: RSS/radar or MDX/essay pipeline tools only when Orbit Writes stack is actively changing
- Prefer: the essay or pipeline repo itself. Skip world-news dashboards.

## Explicitly ignore

- Game sandboxes (Unity garden, endless-runner, match-3 Ralph demos)
- WhatsApp/Telegram/Discord bots, **awesome-lists**, “top N GitHub repos” listicles, MetaGPT-style star magnets
- Per-language MCP SDK spam; watch spec + servers instead
- Crypto / tipster finance / HFT
- Generic AI news firehose, world-news / geopolitics roundups, and OSINT dashboards (World Monitor, worldmonitor.app, similar) as `source_url` or as a domain
- Academic thesis-style writing advice
- “On this day” / throwback / anniversary recap pages
- Fitness influencer challenges, before/after marketing, steroid discourse, extreme cuts
- Grocery flyers, calorie trackers, adult meal-plan templates, restaurant/recipe roundups. Adult food-safety stays off-watchlist (existing `knowledge/food/` notes). Infant feeding-safety belongs under `parenting`
- Parenting influencer listicles, product hauls, sleep-training wars without a primary source, toddler/school content, “10 baby gadgets”
- Generic CVE roundups, consumer antivirus reviews, crypto wallets
- One-off gadget reviews and “10-minute abs” listicles with no programming value
- Repos with no named consumer fit, no recent release/activity signal, or license that blocks portfolio use
