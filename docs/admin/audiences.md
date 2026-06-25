# Audiences

An **audience** is a list of contacts you send [campaigns](../broadcast/index.md) to. You manage them on the **Audiences** tab of the **Contacts** page. Each audience shows its **name**, **description**, **type**, **contact count**, and **created** date.

## Two kinds of audience

- **Manual** — a fixed list you build by hand or by [import](contacts-import.md). Contacts stay in it until you remove them. Best for a specific, known set of people.
- **Dynamic** — a rule-based segment that updates itself. Contacts join or leave automatically as they match (or stop matching) the rules — for example *customers with high lifetime value*. Best for "always current" segments.

!!! note "Manual vs. Dynamic (a.k.a. Automatic)"
    The Audiences page labels rule-based lists **Dynamic**; the campaign builder may call the same thing **Automatic**. They're the same concept: a self-updating segment.

## Creating an audience

1. On **Contacts → Audiences**, click **New audience** and give it a **name**.
2. Choose the type:
    - For a **Manual** audience, add contacts to it (hand-pick them, or add during a [CSV import](contacts-import.md) by selecting the audience there).
    - For a **Dynamic** audience, define the **rules** that decide membership; contacts matching the rules are included automatically and kept up to date.
3. Save. The audience is now available to select when building a [campaign](../broadcast/index.md).

## How audiences are used

When you send a [Broadcast campaign](../broadcast/index.md), you pick one or more audiences as the recipients, and the builder shows the total recipient count. [Keyword campaigns](../keywords/index.md) can also **add contacts to an audience** automatically (the "text JOIN to sign up" pattern), and [imports](contacts-import.md) can drop a whole batch into an audience.

!!! tip "Keep audiences purposeful"
    Build audiences around how you actually send — by location, interest, plan, or signup source. Combine with [tags and custom fields](custom-fields.md) so your dynamic segments can be precise.
