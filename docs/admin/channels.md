# Channels

Channels are the ways Interline sends and receives messages: **SMS**, **WhatsApp**, and **Email**. You manage them under **Settings → Channels**.

## The Channels page

The Channels page shows a card for each channel type with a quick health summary:

- **SMS** — how many active numbers you have.
- **WhatsApp** — how many active numbers you have.
- **Email** — how many active sending addresses you have.

Expand a card (the chevron) to see its details: a **Channel status** toggle (turn the channel on/off), the number of **active numbers/addresses**, and **total messages today**. Each card also links to that channel's full **settings** (e.g. *WhatsApp Settings*, *Email Settings*) where its numbers/addresses are configured.

## Adding a number or address

Connecting a new SMS number, WhatsApp number, or email sending address is done from the relevant channel's settings. Because phone numbers and WhatsApp Business accounts require provisioning and verification with the underlying providers, **new channels are typically set up with the Interline team** rather than self-served end to end.

- **SMS** — a phone number capable of sending/receiving texts (and MMS for images).
- **WhatsApp** — a WhatsApp Business number; outbound campaigns use **approved templates** (see [Broadcast](../broadcast/index.md)).
- **Email** — a verified sending address on your domain. Sending email from your own domain requires DNS records (SPF/DKIM) so messages authenticate and don't land in spam.

!!! tip "Channel status toggle"
    Use the **Channel status** toggle to pause a channel without removing it — useful during maintenance or if you temporarily stop using a number.

## How channels relate to inboxes

Incoming messages on a channel are routed into [inboxes](../agent/mailboxes.md) so your team can work them. Which inbox a message lands in is governed by your [Auto-assign rules](automation.md). When sending a [campaign](../broadcast/index.md) or replying in the [Inbox](../agent/index.md), you choose which channel/number it goes out from.

!!! note
    Exact setup screens vary by provider and are being expanded in these docs. If you need a new number or address connected, reach out to your Interline contact.
