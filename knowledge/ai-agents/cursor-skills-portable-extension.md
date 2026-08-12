---
schema: ravens.knowledge/v1
id: KNOW-ai-agents-cursor-skills-portable-extension
domain: ai-agents
title: Prefer Cursor Agent Skills as the portable extension layer
status: active
updated: 2026-08-12
created: 2026-08-12
confidence: high
tags: [cursor, skills, rules, automations, agentskills]
supersedes: []
superseded_by: null
source_findings:
  - FIND-20260812-001
canonical_sources:
  - url: https://cursor.com/docs/skills
    title: Agent Skills | Cursor Docs
    accessed: 2026-08-12
---

# Prefer Cursor Agent Skills as the portable extension layer

## Guidance

- Treat **Agent Skills** as the default way to extend Cursor agents with specialized, version-controlled capabilities — prefer skills over duplicating the same guidance as dynamic rules and slash commands.
- Discover skills from project and user skill directories (`.agents/skills/`, `.cursor/skills/`, and the matching home-directory paths); colocate package-scoped skills in monorepos when needed.
- Use built-ins intentionally: `/create-skill` to author, `/migrate-to-skills` (Cursor 2.4+) to convert eligible dynamic rules and slash commands into skills.
- Keep always-on / path-glob rules as rules when migration docs say they are ineligible — do not force every rule into a skill.
- For field-card and ravens playbooks, point agents at skills as the portable unit of expertise across Agent Skills–compatible tools.

## Rationale

Cursor documents Agent Skills as an open, portable, file-based standard for packaging agent capabilities. That is a durable authoring model (principle survives any single changelog headline), not a one-week UI tweak.

## Limits / do not apply when

- Rules with `alwaysApply: true` or specific globs (and non-filesystem commands) are not auto-migrated — keep those as rules until you redesign the trigger model.
- Skills do not replace human-in-the-loop approve gates for high blast-radius tools (mail, calendar, production writes).
- Non-Cursor agents that do not implement the Agent Skills standard still need their own extension mechanism.

## Related

- Domain hub: [ai-agents](./README.md)
- Sibling: [mcp-2026-07-28-stateless](./mcp-2026-07-28-stateless.md)
- Consumer hint: agentic-ai-field-card Cursor patterns
