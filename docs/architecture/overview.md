# Ravens system architecture

Canonical diagrams for the Huginn / Muninn / Heimdall knowledge vault. Orbit sync is optional later (`ravens-architecture`); source of truth is this folder.

## System context

```mermaid
flowchart LR
  subgraph sources [External]
    Web[Web sources]
    YT[YouTube]
  end

  subgraph ravens [AlexTouvras/ravens]
    WL[watchlist.md]
    Sight[sight.md]
    Inbox[inbox/]
    Know[knowledge/]
    Sig[signals/]
    Watch[watch/]
    Idx[index.md]
  end

  subgraph agents [Cursor Automations]
    H[Huginn 08:00]
    M[Muninn on Huginn push]
    D[Heimdall weekly / on-demand]
  end

  subgraph consumers [Portfolio - read only v1]
    FC[field-card]
    MP[mealplan]
    FT[fitness coach]
    OR[Orbit]
    LD[Ledger]
    CO[careerops]
    JV[JARVIS / ProjectBrain]
    HH[household]
  end

  WL --> H
  Web --> H
  H --> Inbox
  Inbox --> M
  M --> Know
  M --> Sig
  M --> Idx
  Sight --> D
  YT --> D
  D --> Watch
  Know --> consumers
  Sig --> consumers
  Watch --> FT
  Watch --> HH
  Idx --> consumers
```

## Daily data flow

```mermaid
sequenceDiagram
  participant Cron as Schedule
  participant H as Huginn
  participant Git as ravens main
  participant M as Muninn

  Cron->>H: 08:00 Europe/Helsinki
  H->>Git: read watchlist + contracts
  H->>H: web research + Gate 0
  H->>Git: commit inbox/YYYY-MM-DD.md
  Git->>M: push to main (huginn: subject)
  M->>Git: read inbox today+yesterday
  M->>M: quality Gates 0-2
  M->>Git: commit knowledge + signals + index
```

## Heimdall watch flow

Huginn gathers news. Heimdall maintains a small video catalog. They do not share an inbox.

```mermaid
sequenceDiagram
  participant Ask as Chat or weekly cron
  participant D as Heimdall
  participant Git as ravens main
  participant YT as YouTube

  Ask->>D: topic from sight.md or this week's lifts
  D->>Git: read watch/ and parenting Current stage
  alt Catalog hit
    D-->>Ask: existing watch note URL
  else Gap
    D->>YT: search + video quality gates
    D->>Git: commit watch/domain/slug.md
    D-->>Ask: new primary URL
  end
```

## Artifact lifecycle

```mermaid
stateDiagram-v2
  [*] --> Finding: Huginn writes FIND
  Finding --> Dropped: Fail Gate 0/1
  Finding --> Signal: Pass Gate 1
  Finding --> Knowledge: Pass Gate 2
  Signal --> Knowledge: Later promotion
  Signal --> Expired: Past expires
  Signal --> Dropped: Noise on revisit
  Knowledge --> Superseded: Guidance replaced
  [*] --> WatchNote: Heimdall writes WATCH
  WatchNote --> WatchStale: URL dead or better clip
  WatchNote --> WatchSuperseded: Movement or stage retired
  WatchStale --> WatchNote: Refresh URL
  Superseded --> [*]
  WatchSuperseded --> [*]
  Expired --> [*]
  Dropped --> [*]
```

## Extension seams (not built yet)

```mermaid
flowchart TB
  Know[knowledge hubs]
  Sig[signals]
  Know --> MCP[Future: ProjectBrain / ravens MCP]
  Sig --> ConsAuto[Future: consumer automations]
  MCP --> Agents[Coding agents across repos]
  ConsAuto --> PRs[PRs in mealplan / field-card / Orbit]
```
