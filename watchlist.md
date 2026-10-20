# Watchlist

Topics Huginn scans weekly for **named portfolio consumers** (field-card, mealplan, fitness, household, Ledger, careerops, Orbit, ravens, ProjectBrain/JARVIS). Every section below is in scope every run. Do **not** compute week of life or write a household week-plan — that lives outside ravens. Prefer delivery-changing signals over hype. Skip game-loop experiments, crypto/HFT, generic model-launch PR, and world-news firehoses.

Last reviewed: 2026-10-20

Cite the **publisher** (`source_url`). Preferred sources below are search hints, not a quota you must fill. Empty is success.

## Project-relevant GitHub / OSS (cross-cutting)

Find **individual repos** (or significant releases/RFCs in them) that would change a tooling, clone-vs-build, or delivery choice for a named consumer. File under the matching domain below.

- Must name the consumer in `why_it_matters` (field-card, mealplan, Ledger, Power BI portfolio, Orbit, careerops, ravens, ProjectBrain/JARVIS)
- Prefer: recent release, breaking change, first usable CLI/SDK, or a pattern we can adopt this month — not “interesting README”
- `source_url` should be the repo, release, or primary docs page (not a roundup article)
- Cap: at most **2** GitHub/OSS findings per run across all domains unless something exceptional shipped
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
- Multi-month price-versus-business setups live under **stocks** below. Keep this section for dated catalysts, construction, and macro.

## stocks

Mid- and long-term buy setups for a liquid Nordnet book (months to years). File each hit as `domain: finance` with exactly one setup tag in `topics`. These are research leads for **Ledger**: name the setup and what would kill it. Do not name a target price or say to buy.

Search only when both sides are on a real page: the price or the scare is from the last few weeks, and the latest filing or IR page says the business is in better shape than that price implies. The report itself may be older than a news cycle. Cap **2** findings a run. Empty is success.

Prefer company IR, the interim or annual report, and the exchange’s own statistics. A wire (Reuters, Yle, Kauppalehti) may carry the price move or the scare as the second stream. It cannot be the only source.

| Tag | File when |
|-----|-----------|
| `fear-dip` | The price fell on a scare (headline, lawsuit, one soft line in guidance, a sector panic) and the company’s own outlook or medium-term targets stayed intact or improved. Name the fear, and why the filing does not treat it as the new base case. |
| `fundamentals-ahead` | Margins, returns on capital, growth, backlog, or free cash flow in the filing look strong next to the current price or multiple, and the market has not re-rated the name. Use the company’s numbers, not a blogger model. |
| `forced-selling` | Holders are selling because they must: index deletion, a spin-off orphan window, an ETF rebalance, a fund outflow. Say who is forced out, and that the business did not deteriorate in the same window. |
| `compounder-on-sale` | The filing still shows a durable advantage (pricing power, switching costs, high returns on capital) and the multiple is cheap versus that company’s own recent history. The moat discussion in the report did not break. |
| `trough-as-forever` | A one-off cost, an input-cost spike, or a cycle low is being treated as permanent. The filing’s own bridge, plus a second primary, says the hole is temporary. |
| `mix-shift` | A higher-margin or more recurring segment is already large in the filing, and the stock still trades like the old mix. |
| `owner-earnings` | Free cash flow after maintenance capex, taken from the filing, is high versus government yields and close peers. Skip adjusted-EBITDA stories. |
| `balance-sheet-floor` | Net cash, a listed stake, or a sum-of-parts in the filing covers a large share of the market cap, and the operating business is not in structural decline. |

On every finding:

- One setup tag
- One sentence on what is cheap or feared
- One sentence on what kills it (guidance cut, moat break, structural margin loss, dilution, or the “temporary” item showing up in the next guidance)
- `source_url` is the IR page or filing for the business claim
- `corroboration_url` is an independent page for the price, the multiple, or the scare when that fact is not on the same page
- `why_it_matters` names **Ledger** and a months-to-years horizon

Leave day-trade charts, “oversold” with no filing, analyst price targets, social-sentiment piles, penny stocks, and names a Nordnet account cannot trade. Dated catalysts (earnings, M&A, index add, buyback start) stay in **finance**.

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
- Chart-only “oversold” calls, analyst price-target roundups, and “buy this stock” posts with no filing
- Generic AI news firehose, world-news / geopolitics roundups, and OSINT dashboards (World Monitor, worldmonitor.app, similar) as `source_url` or as a domain
- Academic thesis-style writing advice
- “On this day” / throwback / anniversary recap pages
- Fitness influencer challenges, before/after marketing, steroid discourse, extreme cuts
- Grocery flyers, calorie trackers, adult meal-plan templates, restaurant/recipe roundups. Adult food-safety stays off-watchlist (existing `knowledge/food/` notes). Infant feeding-safety belongs under `parenting`
- Parenting influencer listicles, product hauls, sleep-training wars without a primary source, toddler/school content, “10 baby gadgets”
- Generic CVE roundups, consumer antivirus reviews, crypto wallets
- One-off gadget reviews and “10-minute abs” listicles with no programming value
- Repos with no named consumer fit, no recent release/activity signal, or license that blocks portfolio use
