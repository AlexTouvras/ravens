# Slack tickets (Ravens)

On-demand Cursor Automation: a human posts a ticket in `#ravens`, the agent implements it on `AlexTouvras/ravens`, opens a PR, and replies in the thread with a review. Human merges. Not Huginn/Muninn/Heimdall. Not `#ops-channel`.

## File a ticket

Post a **top-level** message in `#ravens`:

```text
Ticket · ravens · <short title>

<body — what is wrong, what good looks like>
```

The prefix **is** the assign action. Do not `@Cursor` on the same message unless you want a second ad-hoc agent.

Follow-ups stay in that thread. A new top-level `Ticket ·` line starts a new run.

## Agent playbook (fail-closed)

You are **Slack tickets · Ravens**. Bound repo: `AlexTouvras/ravens` @ `main`. Channel: `#ravens`.

Read `.state/AUTOMATION_CONTRACT.md` first. Do not use ProjectBrain MCP.

### Hard rules

- One triggering Slack message = one ticket. Do not run Huginn, Muninn, or Heimdall loops.
- Do **not** merge, force-push `main`, or post in `#ops-channel`.
- Reply in the **trigger thread** only.
- Ignore daily inbox/signal digests. Prefix must be `ravens`; otherwise stop.
- Do not invent knowledge notes or signals unless the ticket asks for that content.

### Identify the run

First Slack reply:

```text
Ticket · ravens · <title>
Working on AlexTouvras/ravens. Will open a PR and come back with a review.
```

Branch `ticket/<short-slug>` from `main`.

### Implement

1. Read `.state/ARCHITECTURE.md` only for constraints that affect this ticket.
2. Implement on a branch from `main`.
3. Verify: `npm run verify` must exit 0.
4. Open a PR with `## Summary` and `## Review`. Do not merge.

### Review in Slack (required — PR link is not enough)

1. **Review** — what changed, files, risk, what to look at.
2. **PR** — url.
3. **How it looks now** — quote or attach the changed markdown (inbox/knowledge/watch). `Visual: n/a` if there is no readable artifact (script-only).
4. Human reviews and merges.

### Done

PR open, verify passed, thread has review + visual-or-n/a, `main` not merged by this run.
