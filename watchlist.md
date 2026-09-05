# Watchlist

Topics Huginn scans daily. Prefer delivery-changing signals over hype. Skip game-loop experiments, crypto/HFT, generic model-launch PR, and world-news firehoses.

Last reviewed: 2026-09-05

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
- **Postpartum week matches the child's week of life** (read `knowledge/parenting/README.md` Child born). Scan activity that is realistic *this postpartum week* (walking, pelvic-floor, medically staged return). Do **not** search late-pregnancy exercise or “pregnancy workout” as if birth had not happened. ACOG ≥150 min/week remains the durable ceiling, not a week-3 lift program
- Nordic / Finnish outdoor season tips only when they change weekly movement (ice, dark winter, heat)
- GitHub: programming calculators / open training templates only when they change a weekly plan (not fitness-app clones). Mealplan is still a named consumer here; do not file grocery or nutrition repos.
- Prefer: ACSM, ACOG, NSCA-class writing, THL activity notes. Skip Instagram and challenge blogs.

## parenting

General household parenting for a Finnish home — not grocery, not adult meal-planning. **Time every search to the child's week of life**, not to a generic “newborn” or late-pregnancy query.

Read `knowledge/parenting/README.md` **Current stage** first. That hub holds `Child born`. Compute in Europe/Helsinki:

`age_days = today − Child born`; `week_of_life = floor(age_days / 7) + 1` (week 1 = days 0–6).

Scan **this week of life and the coming week** (lookahead for a household week-plan: development, feeding, sleep, neuvola, safety). File under the matching age **bucket**, plus `week-N` in `topics`:

| Age | Topic tag |
|-----|-----------|
| 0–2 days | `age-0-72h` |
| 3–14 days | `age-3-14d` |
| 15–56 days (~2–8 weeks) | `age-2-8w` |
| 2–6 months | `age-2-6m` |

Older than the hub stage, toddler, and school-age: skip (empty is success). After `Child born` is set, **do not** search `late-pregnancy` or `labor` unless a living page changed a still-actionable rule (e.g. other-parent Kela after birth).

Query shape (search the week number, not “newborn”):

- Development at week W and W+1 (THL / Terveyskirjasto / AAP 1-month visit topics — not wonder-weeks blogs)
- Feeding and growth that bite this week (birth-weight regain by ~2 weeks; then weekly gain; cluster feeding only from primary sources)
- Sleep / soothing at this age; supervised awake tummy time (never as sleep position)
- Finnish calendar: Espoo is **LUVN** neuvola, not HUS. Typical: 2–4 week nurse visit (in play at week 3), 4–6 week nurse+doctor (coming week / week 4–6). Vitamin D drops from 2 weeks (Ruokavirasto)
- Safety newly relevant this week (not hospital discharge)
- Parent recovery that is not gym programming (sleep shifts, postpartum mood flags). Activity/pelvic-floor stays under `fitness` at the same postpartum week

Every finding **must** put exactly one age-bucket tag and `week-N` in `topics`, and say “applies at week N of life …” in `why_it_matters`. Prefer THL, LUVN/neuvola, Kela, Ruokavirasto, WHO, AAP, NICE (Yle only when it cites those). Infant feeding-safety (honey, formula prep, vitamin D) lives here, not under retired `food`.

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
