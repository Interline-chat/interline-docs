---
description: Work with contacts in Interline — the contact panel, saving names, custom fields, notes, tags, audiences, conversation history, and blocking or unblocking a conversation.
---

# Contacts

Every conversation is with a contact, and Interline keeps that contact's details right beside the conversation so you always have context while you reply.

## The contact panel

When you open a conversation, the **contact details panel** appears alongside it. It shows who you're talking to — their name, the channels you can reach them on (phone number, email), and other details on file. Having this in view means you don't have to leave the conversation to remember who a client is or how else to reach them.

## Saving a name on reply

When a message comes in from a number or address that isn't yet in your contacts, the conversation shows the raw phone number or email. The first time you reply, Interline **prompts you to save the sender's name** to a contact.

Saving the name is a small habit with a big payoff: from then on the conversation — and the whole inbox list — shows a real name instead of a string of digits, which makes everything far easier to scan and search.

!!! tip
    Save the name even if you only have a first name or a company name. Anything is more recognizable than a phone number, and you can fill in the rest of the details later.

## Contact details

A contact record can hold the information your team needs to recognize and serve the person — their name, phone number(s), email, and the tags or list memberships that apply to them. Those tags and lists are what [Broadcast](../broadcast/index.md) uses to decide who receives a campaign, and what [Keywords](../keywords/index.md) can add people to automatically.

To edit a contact, click the **pencil** icon in the contact panel, update the fields, and **Save** — the new name updates everywhere it appears (the panel, the conversation header, and the list):

![Editing a contact's name from the contact panel and saving](../assets/media/inbox-edit-contact.gif){ width="760" }

## The expanded panel

Expand the contact panel (the chevron below the name) to see the full record. It's organized into sections:

- **Activity** — at-a-glance history: when the contact was **first added**, when they were **last contacted**, and the **total messages** exchanged.
- **Contact information** — the core fields plus any custom fields your team uses (for example *Company*, *Size*, or *Admin*). Click the pencil to edit.
- **Notes** — free-text notes about the contact that stay internal to your team (never sent to the client). Use them for context like preferences or account history.
- **Tags** — labels that categorize the contact (e.g. **VIP**). Tags are shared across your team and drive filtering and audience building.
- **Audiences** — the contact lists/segments this person belongs to, which [Broadcast](../broadcast/index.md) uses to decide who receives a campaign.
- **Conversations** — a quick history of this contact's other threads, so you can jump to past interactions.

### Adding tags and notes

To **tag** a contact, click **+ Add tag**, search for a tag (or create a new one), and press the **+** to apply it. To add a **note**, click the pencil next to Notes, type your note, and **Save**. Both update instantly:

![Expanding the contact panel, adding a VIP tag, and saving a note](../assets/media/inbox-contact-panel.gif){ width="760" }

!!! tip
    Tags and audiences aren't just labels — they're what powers targeted [Broadcast](../broadcast/index.md) campaigns and [Keywords](../keywords/index.md) sign-ups. Keeping contacts well-tagged pays off when you send.

!!! note "Managing contacts in bulk"
    Adding and editing a contact happens right here in the conversation, but importing contacts in bulk (for example from a CSV) and managing the full contact database is an admin task. See the [Admin Guide](../admin/index.md).

## Blocking a conversation

Use **Block contact** to get a conversation out of your way — spam, a wrong number, someone you've stopped working with. It disappears from your inbox lists and counts, but nothing is deleted.

!!! note "It blocks the conversation, not the person"
    Blocking applies only to the conversation you block. If the same person also has a conversation with you on another channel or number, that one isn't blocked — block it separately if you need to. The contact record itself isn't affected: it stays in Contacts with its details and history.

!!! warning "Blocked conversations still receive messages"
    Blocking hides the conversation — it doesn't stop the person sending. New messages are still received and saved to the conversation; they just don't show in your inbox while it's blocked. Unblock it and everything sent in the meantime is there.

### Block a conversation

1. Open the conversation.
2. Click **⋯** (top right of the conversation) and choose **Block contact**.

![Opening the conversation menu and choosing Block contact](../assets/media/block-contact.gif){ width="760" }

It takes effect right away: the conversation drops out of **Unread**, **Open**, and **All**, along with the inbox counts in the sidebar.

### See blocked conversations

Blocked conversations are hidden from the normal lists, so you get to them with a filter:

1. In the conversation list, click the **filter** icon (next to *All Channels*).
2. Go to **Blocked** and turn on **Show blocked contacts only**.
3. Click **Apply filters**.

![The Blocked section of Advanced Filters](../assets/media/blocked-contacts-filter.png){ width="560" }

The list now shows every blocked conversation, whatever its status, with a **Showing only blocked contacts** chip at the top. Click the **×** on the chip to go back to your normal inbox.

![The conversation list filtered to blocked conversations](../assets/media/blocked-contacts-list.png){ width="820" }

### How to tell a conversation is blocked

A blocked conversation has a red **blocked** icon next to the contact's name — in the conversation header (hover it and it reads *Blocked*) and in the conversation list.

![The blocked icon next to the contact's name in the conversation header](../assets/media/blocked-contact-header.png){ width="590" }

### Unblock a conversation

1. Find the conversation using the blocked filter above and open it.
2. Click **⋯** and choose **Unblock contact**.

![Opening the conversation menu and choosing Unblock contact](../assets/media/unblock-contact.gif){ width="760" }

You'll see **Contact unblocked**, the blocked icon goes away, and the conversation is back in your inbox lists — including any messages that came in while it was blocked.

Next: [Notifications](notifications.md).
