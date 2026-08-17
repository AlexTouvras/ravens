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
| Muninn | Cursor daily 09:00 | `#ravens` knowledge signals | review signals |

## Ship checklist

```bash
npm run ship:check   # runs npm run verify
```

## Definition of done

- [ ] `npm run verify` exits 0
- [ ] Playbooks/contracts unchanged or updated together
- [ ] First scheduled run observed in Slack
