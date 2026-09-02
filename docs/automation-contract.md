# Automation contract — ravens

## Repository

| Field | Value |
|-------|-------|
| GitHub | `AlexTouvras/ravens` |
| Default branch | `main` |

## Automations

| Name | Trigger | Output | Human gate |
|------|---------|--------|------------|
| Huginn | Cursor daily 08:00 | `#ravens` + `inbox/YYYY-MM-DD.md` | review inbox |
| Muninn | GitHub push to `main` (subject `huginn:`) | `#ravens` knowledge signals | review signals |
| Heimdall | weekly Sunday 10:00 Europe/Helsinki | `watch/` on `main` (consumer match) | review clips; sync fitness snapshot |

## Ship checklist

```bash
npm run ship:check   # runs npm run verify
```

## Definition of done

- [ ] `npm run verify` exits 0
- [ ] Playbooks/contracts unchanged or updated together
- [ ] First scheduled run observed in Slack
