# Quality & promotion rubric

Muninn uses the text gates to decide **drop**, **signal**, or **knowledge**. Heimdall uses the **video gates** at the end for `watch/` only.

## Gate 0 — Integrity (hard fail → drop)

- [ ] Source URL resolves to a real page (or reputable archive)
- [ ] Claim is attributable to that source (no invented quotes)
- [ ] `source_url` is the publisher’s page (article, official doc, repo, release). Not Google News, World Monitor, an RSS-reader host, or an awesome-list
- [ ] Not on the watchlist ignore list
- [ ] Not duplicate of an active note/signal with the same claim
- [ ] Date / retrospective rules below pass

### Date and retrospective

Journalism, blog, and RSS items:

- Drop if there is no parseable publish date (`published: unknown` is a fail)
- Drop if publish time is more than 1 hour in the future
- Drop historical retrospectives even on a fresh URL: “on this day”, throwback, anniversary of an event ≥2 years ago
- Default window is the last 48–72 hours. Slow domains (public-health guidance, a vendor page that changed a rule) may go older, but they still need a date unless they qualify as living docs

Living official/vendor pages (THL current guidance, Kela, Microsoft Learn, GitHub release notes):

- Allowed without a news `pubDate`. Use last-updated if the page shows it; otherwise `published: unknown` and say it is current guidance in the claim
- `unknown` on a news article still drops

### Source tiers (Gate 1 credibility)

Cite the publisher. You may *find* a story on an aggregator; open the origin and put that URL in `source_url`.

| Tier | What | Examples | Default confidence |
|------|------|----------|-------------------|
| 1 | Wire, official government, public-health body, vendor primary docs, GitHub release | Reuters, AP, Yle, THL, Kela, ECB, Fed, Microsoft Learn | high if the claim matches the page |
| 2 | Major established outlet | FT, Guardian, Ars Technica | medium |
| 3 | Specialist practitioner | Krebs, SQLBI, NSCA-class coach writing | medium |
| 4 | Aggregator or unsourced blog | Google News, World Monitor, HN comment, Substack with no primary | low; cannot be `source_url` |

Muninn may score Gate 1 **credibility** only for tiers 1–3. A tier-4 URL fails Gate 0.

## Gate 1 — Signal worth (→ signal if yes, else drop)

Score ≥ 2 of:

1. **Portfolio fit** — maps to a named domain and a real consumer (field-card, mealplan, Ledger, household for `parenting`, …)
2. **Actionability** — changes a decision this month (guidance, watchlist, tooling choice, or this week’s parenting window)
3. **Novelty** — new vs last 30 days of inbox/knowledge
4. **Credibility** — source tier 1–3 (table above), not engagement bait

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

Promote when it changes secrets, auth, or where data lives for a **named** consumer. Drop generic CVE roundups, antivirus reviews, and crypto-wallet news. CISA KEV / IOC lists only when they hit a dependency a named consumer actually runs. Default path: **signal** unless prefer/avoid guidance is durable with limits.

## Finance-specific filters

Promote official actions on **one** primary page: an IR release, exchange notice, filing, or central-bank decision.

**Investment-opportunity** and **macro / regime-shift** narratives need two independent streams before signal or knowledge:

1. The catalyst page (IR, filing, OMX/Nasdaq notice, ECB/Fed/BoE)
2. A second stream that is not the same wire rewrite (another primary, or a named Nordnet-tradable implication)

Huginn should set `corroboration_url` when the second stream exists. Without it, Muninn drops the opportunity/macro finding rather than promoting; a single-source official action still proceeds. Dual-stream does not apply to GitHub/OSS clone-vs-build notes under finance.

## GitHub / OSS repo filters

Promote (signal or knowledge) only when **all** hold:

1. **Named consumer** — `why_it_matters` cites a real portfolio project
2. **Decision change** — clone-vs-build, replace custom glue, adopt a skill/server/CLI, or drop a dependency
3. **Primary artifact** — `source_url` is the repo, release notes, or upstream docs (not an awesome-list, “top repos” roundup, or World Monitor)
4. **Usable license + activity** — license allows portfolio use; recent release or meaningful commit signal (not abandoned star magnets)

Default path: **signal** for “watch this repo / try this month”; **knowledge** only when guidance is durable (“prefer X over Y for Z”) with clear limits.  
Drop: awesome-lists, SDK spam, crypto bots, repos with no consumer fit.

## Bias toward fewer artifacts

A quiet day with three strong findings beats twenty weak ones. Empty domains are success, not failure.

## Heimdall video gates (watch catalog only)

Huginn / Muninn do not use this section. Heimdall catalogs YouTube clips into `watch/`. Fail any gate → skip the topic (leave a gap); do not invent a URL.

### Video Gate 0 — Integrity

- [ ] `primary_url` is a YouTube watch URL that oEmbed (or the watch page) resolves
- [ ] Title and channel match the resolved video (no invented ids)
- [ ] Not on `sight.md` **Explicitly ignore**
- [ ] Not a second file for an already-active slug (update the existing note instead)

### Video Gate 1 — Worth cataloging

All of:

1. **Topic fit** — slug is on `sight.md` (or the human named it in chat) and maps to a real consumer (`fitness` coach library or household parenting)
2. **Usable length** — about 2–12 minutes for technique; skip Shorts-only when a longer tutorial exists
3. **Visible demo** — camera shows the movement (or the parenting skill), not talking-head only
4. **Credentials** — PT / strength coach / public-health body / equivalent. Drop engagement bait even if the title is tempting

### Fitness video filters

Prefer the exact library movement (back squat, RDL, split squat, …). A close variation is allowed if Limits say so (e.g. Bulgarian split squat vs rear-foot-down split squat).  
Drop: challenges, before/after ads, “destroy your knees” bait, steroid discourse, prenatal-circuit marketing that contradicts ACOG notes.

### Parenting video filters

Same age window as Huginn. Prefer THL, neuvola, NHS, AAP, WHO, Global Health Media.  
Drop: influencer listicles, product hauls, sleep-training wars, toddler/school content while Current stage is pregnancy/newborn. Not medical diagnosis.

### Motivate video filters

`intent: motivate` only for the named slugs `gym-anime` and `lift-motivation`. Shorts and AMV edits are allowed. Do not invent form cues. Do not mix a motivate URL into a form-check note.

### Bias toward fewer artifacts

One active clip per topic. A quiet catalog beats a folder of almost-duplicates.

