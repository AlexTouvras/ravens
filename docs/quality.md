# Quality & promotion rubric

Muninn uses this to decide: **drop**, **signal**, or **knowledge**.

## Gate 0 — Integrity (hard fail → drop)

- [ ] Source URL resolves to a real page (or reputable archive)
- [ ] Claim is attributable to that source (no invented quotes)
- [ ] Not on the watchlist ignore list
- [ ] Not duplicate of an active note/signal with the same claim

## Gate 1 — Signal worth (→ signal if yes, else drop)

Score ≥ 2 of:

1. **Portfolio fit** — maps to a named domain and a real consumer (field-card, mealplan, Ledger, household for `parenting`, …)
2. **Actionability** — changes a decision this month (guidance, watchlist, tooling choice, or this week’s parenting window)
3. **Novelty** — new vs last 30 days of inbox/knowledge
4. **Credibility** — primary source, known practitioner, vendor docs, or public-health body (not pure engagement bait)

## Gate 2 — Durability (→ knowledge if yes)

All of:

1. Still true if the headline is deleted (principle, not PR)
2. Survivable as a bullet under “Current guidance” for ≥ 30 days
3. Has clear **limits / do not apply when**
4. Confidence is `medium` or `high` (low stays signal-only or drop)

## Fitness-specific filters

Promote when it changes programming, recovery, or pregnancy-safe activity rules.  
Drop: influencer challenges, before/after ads, gadget listicles, extreme cuts, steroid discourse.

## Food domain (not scanned)

`knowledge/food/` notes remain as durable mealplan guidance. Huginn must not gather grocery, adult nutrition, or meal-plan findings. Do not open new food notes from inbox. If a fitness finding mentions protein targets, keep it under `fitness` without a paired food note. Infant feeding-safety belongs under `parenting`.

## Parenting-specific filters

Promote only when the finding applies to **Current stage** in `knowledge/parenting/README.md` (or one adjacent age window). Every inbox item needs an age/stage topic tag.

Default path: **signal** with a short expiry that matches the window (days, not months). **Knowledge** only when the guidance is durable *and* the note’s Limits section states the child-age range. Drop influencer listicles, product hauls, and anything for toddlers/school while the hub is still pregnancy/newborn.

Do not promote low-confidence medical claims. Do not write `Child born` or change Current stage — a human does that after birth.

## Security-specific filters

Promote when it changes secrets, auth, or where data lives for a **named** consumer. Drop generic CVE roundups, antivirus reviews, and crypto-wallet news. Default path: **signal** unless prefer/avoid guidance is durable with limits.

## GitHub / OSS repo filters

Promote (signal or knowledge) only when **all** hold:

1. **Named consumer** — `why_it_matters` cites a real portfolio project
2. **Decision change** — clone-vs-build, replace custom glue, adopt a skill/server/CLI, or drop a dependency
3. **Primary artifact** — `source_url` is the repo, release notes, or upstream docs (not an awesome-list or “top repos” roundup)
4. **Usable license + activity** — license allows portfolio use; recent release or meaningful commit signal (not abandoned star magnets)

Default path: **signal** for “watch this repo / try this month”; **knowledge** only when guidance is durable (“prefer X over Y for Z”) with clear limits.  
Drop: awesome-lists, SDK spam, crypto bots, repos with no consumer fit.

## Bias toward fewer artifacts

A quiet day with three strong findings beats twenty weak ones. Empty domains are success, not failure.
