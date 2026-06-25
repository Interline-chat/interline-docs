# Automation

Automation handles messages and conversations for you, without an agent doing it manually — auto-replies, keyword responses, and routing rules. You build and manage these from the **Automation** area in the left navigation.

## The automation list

**Automation** lists everything you've set up, each with its **name**, **status** (Active or Paused), **type**, the **channels** it runs on, and **last activity**. You can search and filter by status, channel, and date, and pause/resume or edit any automation from its row menu (**⋯**).

To create one, click **New Automation** and pick a type.

## Automation types

Creating a new automation is a short wizard: **1. Automation type → 2. Triggers & response**. The available types are grouped into message workflows and automations.

### Available now

- **Auto assign** — set rules that automatically assign new conversations and messages to the right inbox, team, or person (for example route a specific incoming number or address to a particular inbox). This is how incoming messages get to the right place without manual triage. See [routing & inboxes](#auto-assign-routing).
- **Autoresponder** — automatically reply to incoming messages based on rules, most often for after-hours or out-of-office acknowledgements. Covered in detail in [Auto-Responders](auto-responders.md).
- **Keyword campaign** — reply automatically when a contact texts a specific keyword (e.g. `SALE`, `HELP`, `HOURS`), and optionally add them to a list. Covered in [Keywords](../keywords/index.md).

### Coming soon

These appear in the **New Automation** menu but aren't available yet:

- **Open or Close conversations** — automatically close or reopen conversations after some time or action.
- **Ask for contact name** — ask new contacts for their details and save them to the profile.
- **Feedback collection** — request feedback after a conversation ends.
- **Drip campaign** — send scheduled messages over a period of time.
- **AI agent** — let AI handle conversations based on your business rules and data.

## Auto-assign (routing)

Auto-assign rules decide where incoming messages land. Use them to route conversations to the correct [inbox](../agent/mailboxes.md) or owner based on simple conditions — such as the incoming phone number or email address — so the right team picks them up automatically instead of everything piling into one queue.

!!! tip "Keep rules simple"
    Start with a few clear routing rules (by number, address, or channel) and expand as needed. Overlapping rules can fight each other, so review them when conversations end up in the wrong place.

## Related

- [Auto-Responders](auto-responders.md) — time-based automatic replies.
- [Keywords](../keywords/index.md) — keyword-triggered replies and list sign-ups.
- [Channels](channels.md) — the numbers/addresses automations act on.
