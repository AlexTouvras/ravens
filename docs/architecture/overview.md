# Ravens system architecture

Canonical diagrams for the Huginn / Muninn knowledge vault. Orbit sync is optional later (`ravens-architecture`); source of truth is this folder.

## System context

```mermaid
flowchart LR
  subgraph sources [External]
    Web[Web sources]
  end

  subgraph ravens [AlexTouvras/ravens]
    WL[watchlist.md]
    Inbox[inbox/]
    Know[knowledge/]
    Sig[signals/]
    Idx[index.md]
  end

  subgraph agents [Cursor Automations]
    H[Huginn 07:00]
    M[Muninn 07:45]
  end

  subgraph consumers [Portfolio - read only v1]
    FC[field-card]
    MP[mealplan]
    OR[Orbit]
    LD[Ledger]
    CO[careerops]
  end

  WL --> H
  Web --> H
  H --> Inbox
  Inbox --> M
  M --> Know
  M --> Sig
  M --> Idx
  Know --> consumers
  Sig --> consumers
  Idx --> consumers
```

## Daily data flow

```mermaid
sequenceDiagram
  participant Cron as Schedule
  participant H as Huginn
  participant Git as ravens main
  participant M as Muninn

  Cron->>H: 07:00 Europe/Helsinki
  H->>Git: read watchlist + contracts
  H->>H: web research + Gate 0
  H->>Git: commit inbox/YYYY-MM-DD.md
  Cron->>M: 07:45 Europe/Helsinki
  M->>Git: read inbox today+yesterday
  M->>M: quality Gates 0-2
  M->>Git: commit knowledge + signals + index
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
  Superseded --> [*]
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
