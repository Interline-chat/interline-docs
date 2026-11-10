---
description: Reply to clients in Interline — the reply editor, send options, scheduled messages, AI drafting, canned replies, attachments, and delivery status.
---

# Reading & Replying

This is the core of inbox work: open a conversation, read the history, and send a reply. This guide covers the reply editor and the tools that make replying faster.

## Opening a conversation

Click any conversation in the list to open it in the detail panel on the right. You'll see the full message history with the contact — every message in and out, in order, with timestamps. The most recent message is at the bottom, and the reply editor sits below it.

The channel of each conversation is shown by its icon (email, SMS, or WhatsApp), so you always know how your reply will be delivered.

## The reply editor

Type your reply in the editor at the bottom of the conversation, then send.

For **email** conversations the editor is a **rich text editor** — you can format with bold, italics, lists, and links, just like composing a normal email.

For **SMS and WhatsApp**, formatting is simpler because the channels themselves are plain text (WhatsApp supports light formatting like bold and italics; SMS is plain). Interline shows the editor appropriate to the channel you're replying on.

If a [signature](signatures.md) is set up for the channel, the editor shows it below your draft with an **Insert signature** checkbox — it's appended when you send, and you can untick it for a single message.

!!! tip "Saving a contact's name"
    The first time you reply to a new sender, Interline prompts you to **save their name to your contacts**. Do it — next time the conversation shows a name instead of a raw phone number or email address, which makes the whole inbox easier to scan. See [Contacts](contacts.md).

## Send, Send and close, Send later

The **Send** button has a small arrow next to it. Click the arrow for the other ways to send:

![The send menu with Send, Send and close, Send later, and Discard](../assets/media/composer-send-menu.png){ width="295" }

- **Send** — sends the reply and leaves the conversation open.
- **Send and close** — sends the reply and closes the conversation in one step. Use it when your reply finishes the job.
- **Send later** — schedules the reply. Pick a **date** and **time**, then click **Schedule**.
- **Discard** — clears your draft.

### Scheduled messages

A scheduled message appears in the conversation marked **Scheduled for** with its date and time. Until it goes out, open the menu on it to:

- **Edit** — change the text, date, or time.
- **Send now** — send it immediately instead of waiting.
- **Cancel** — cancel the send. The message is not sent.

### Your send preferences

Click your **profile avatar** → **Preferences** to set how sending works for you:

![The Preferences page with Default send button and Send shortcut](../assets/media/preferences-send.png){ width="658" }

- **Default send button** — whether the main button is **Send** or **Send and close**. The other action stays in the menu next to it. *Organization default* follows what your admin set for the workspace.
- **Send shortcut** — the key that sends a reply: **Enter**, or **Ctrl + Enter** (**⌘ + Enter** on a Mac). With **Enter**, press **Shift + Enter** to start a new line. The shortcut isn't used on mobile.

## Writing with AI

If your admin has set up the [AI Assistant](../admin/ai-assistant.md), the composer has AI tools next to the canned-reply button.

![The AI prompt box in the composer: describe the reply you want, then Generate](../assets/media/composer-ai-generate.png){ width="445" }

- **Suggest response** — drafts a reply to the customer's latest message, based on the conversation and, if enabled, your knowledge base. If you already have a draft, Interline asks before replacing it.
- **Write from a description** — click the **wand** icon while the editor is empty, describe the reply you want (for example *apologize for the late shipment and offer a 10% discount*), and click **Generate**.
- **Refine draft** — click the **wand** icon when you've already typed something to **Fix spelling**, **Fix grammar**, **Fix tone**, or **Fix all**. Click **Undo** if you prefer your original.

Nothing is sent automatically — the text lands in the editor for you to review, edit, and send.

## Canned replies

Canned replies are pre-written messages you can drop into the editor instead of typing the same thing over and over — things like “Thanks, we've received your order and will confirm shortly.”

To use one, open the canned-reply picker from the reply editor and choose the reply you want. It's inserted into the editor, where you can edit it before sending.

Canned replies can include **{variables}** — placeholders like `{first_name}` that fill in automatically with the contact's details, so a canned reply still reads as personal. Your admin manages the shared library of canned replies; see [Canned Replies](../admin/canned-messages.md).

![Inserting a canned reply into the editor from the canned-reply picker](../assets/media/inbox-canned-reply.gif){ width="760" }

## Attachments

You can attach files to your replies — images, PDFs, and other documents.

- **Upload from your device** the same way you'd attach a file to an email.
- **Pick from the cloud library** — a shared store of files your team uses often (price lists, brochures, forms), so you don't have to hunt for the same file each time.

!!! note "Channel limits"
    What can be attached depends on the channel. Email handles most file types and larger sizes. SMS and WhatsApp have stricter limits on file type and size, and images may be sent as MMS on SMS. If an attachment can't be delivered on a given channel, Interline will let you know.

## Delivery status

After you send, Interline shows the message's delivery state so you know it went through. A **delivered checkmark** appears on a message once the channel confirms it reached the recipient. If a message fails to deliver, it's flagged so you can follow up — for example by trying a different channel.

## Awaiting response

Conversations where the **client** sent the last message — meaning the ball is in your court — are marked as **awaiting response**. This makes it easy to see at a glance which conversations still need a reply from your team versus which are waiting on the client. More on this in [Organizing Conversations](organizing.md).

Next: [Organizing Conversations](organizing.md).
