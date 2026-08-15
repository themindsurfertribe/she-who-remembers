# Lead intake and response operations

She Who Remembers currently uses a **manual** lead operating system.

This file is the single source for inquiry handling. It holds workflow, schema, templates, and SOPs. It does not hold real leads.

## What is live

| Source | System | Role |
| --- | --- | --- |
| Booking | Cal.com | Fit conversation scheduling |
| Contact | Formspree | Named messages with a reason |
| Operating inbox | She Who Remembers Proton | Where notifications arrive |
| Live lead tracker | External to Git | One row per inquiry |

The public booking event is the Cal.com conversation already linked from the site. Contact posts Name, Email, Reason, and Message. The website does not send confirmation email. Cal.com owns booking confirmation. Formspree delivers the contact message to Proton.

Because `PUBLIC_SITE_URL` is unset, Formspree may show its own thanks page rather than `/thank-you`. `/booking-confirmed` exists on the site only if Cal.com is later pointed there. `/application-received` is idle. Do not use it.

## What may live in this repository

- workflow
- schema
- templates
- SOPs

## What must never live in this repository

- real lead rows
- client names
- personal email addresses
- private inquiry narratives
- sensitive personal information

The live tracker stays outside Git (a private spreadsheet or Proton folder). This document may describe the columns. It must not contain records.

Do not add a CRM, autoresponder, webhook, newsletter sequence, or checkout as part of this operating system.

---

## Lead categories

Use the doors the website already creates. Do not add therapy-intake, newsletter, payment, or CRM categories.

| Code | Type | Typical source |
| --- | --- | --- |
| A | General question | Contact: General question or Other |
| B | Course interest | Contact: Courses, or a booking note that names a pathway |
| B1 | The Sacred No | Named, or clearly about voice and boundaries |
| B2 | The Remembering | Named, or clearly about self and identity |
| B3 | Legacy in Motion | Named, or clearly about purpose and contribution |
| B4 | Unsure which course | More than one door, or no named offer |
| C | Private Guidance interest | Contact: Private Guidance, or booking for 1:1 |
| D | Book question | Contact: Book |
| E | Collaboration / speaking | Contact: Collaboration / Speaking |
| F | Website issue | Contact: Website issue |
| G | Booked fit conversation | Cal.com booking |

---

## Status model

Use exactly these eight statuses. **Outcome remains separate from status.**

| Status | Meaning |
| --- | --- |
| NEW | Arrived. Not yet handled. |
| REPLIED | First human reply sent. |
| BOOKED | A fit conversation is on the calendar. |
| COMPLETED | Conversation happened. Outcome recorded. |
| FOLLOW-UP | One next ping is owed, with a date. |
| PARKED | Not now. May return when an offer opens, or when they are ready. |
| NOT A FIT | Honest mismatch or outside scope. |
| CLOSED | No further action. |

**Active** (must have exactly one next action):

- NEW
- REPLIED
- BOOKED
- FOLLOW-UP

**Inactive / finished:**

- COMPLETED
- PARKED
- NOT A FIT
- CLOSED

---

## Minimum lead record

The lead tracker is a **business operations tool, not a clinical record**.

### Required

- DATE RECEIVED
- NAME
- EMAIL
- SOURCE (`Cal.com` or `Contact`)
- INQUIRY TYPE (`A` through `G`, with `B1`–`B4` when course)
- BOOKED YES/NO
- STATUS
- NEXT ACTION (required while the lead is active)
- FOLLOW-UP DATE (when status is FOLLOW-UP, or PARKED with a planned date)

### Optional

- CONVERSATION DATE / TIME
- OFFER OF INTEREST (hypothesis only)
- LAST ACTION DATE
- OUTCOME
- SHORT OPERATIONAL NOTES

Suggested identifier off-repo: `SWR-YYYY-MM-DD-01` (sequence for that day).

### Tracker columns

| Column | Required |
| --- | --- |
| LEAD ID | yes |
| DATE RECEIVED | yes |
| NAME | yes |
| EMAIL | yes |
| SOURCE | yes |
| INTEREST | yes |
| STATUS | yes |
| BOOKED DATE | if booked |
| LAST ACTION | after first handling |
| NEXT ACTION | if active |
| FOLLOW-UP DATE | if FOLLOW-UP or dated PARKED |
| OUTCOME | after a decision |
| NOTES | short, operational |

Active next-action examples: reply to email, prepare for conversation, hold conversation, send requested link, follow up, wait for their reply, close.

---

## Privacy minimization

Do not copy unnecessary sensitive narrative into the tracker.

Do not store:

- trauma narrative
- diagnoses
- medical details
- psychiatric information
- sexual history
- legal history
- family allegations
- long personal stories

Acceptable note:

> asking about Sacred No vs private work; booked 20 Aug

Keep notes operational. If a message is outside scope, record only that it was outside scope and that they were directed to appropriate care. Do not paste the story.

---

## Booking workflow

```
CAL.COM BOOKING
→ PROTON
→ CLASSIFY G
→ CREATE OR UPDATE LEAD
→ STATUS BOOKED
→ REVIEW WHAT THEY SENT
→ PREPARE FIT-CONVERSATION CARD
→ HOLD CONVERSATION
→ RECORD OUTCOME
→ SET ONE NEXT ACTION
→ CLOSE OR CONTINUE
```

### Before the conversation

- confirm name
- confirm date/time
- confirm timezone
- read what they submitted once
- note a likely doorway as a hypothesis only
- prepare at most three clarifying questions
- note safety/scope only if the message raises it

### Do not

- research the prospect outside their submission
- diagnose
- assume the offer
- prepare a sales pitch
- invent a package
- invent a price

The conversation is orientation, not a closing technique. A respectful "not a fit" is a completed success.

---

## Contact workflow

```
FORMSPREE
→ PROTON
→ CLASSIFY A–F
→ CREATE LEAD
→ STATUS NEW
→ ANSWER / ROUTE / CLOSE
→ SET ONE NEXT ACTION
```

Do not convert every Contact message into a booking.

| Type | Default handling |
| --- | --- |
| General | Answer if known. |
| Course | Point to the relevant course page. Offer a fit conversation if useful. |
| Private Guidance | Point to Private Guidance. Offer a fit conversation. |
| Book | Explain that a purchase path is not yet listed. Point to the Book page. |
| Collaboration / speaking | Acknowledge. Ask one practical question if needed. Do not imply acceptance. |
| Website issue | Thank them. Record the issue. Ask for detail only if needed. |

If someone uses Contact to ask how to book, point them to Book a Conversation. Do not duplicate the calendar inside the email beyond the public Cal.com link.

---

## Response principles

Replies should be:

- human
- clear
- warm
- concise
- non-performative
- non-guru
- non-salesy

Do:

- answer the actual question
- name the appropriate doorway
- leave room for no
- remain within coaching and education

Do not:

- invent prices
- invent dates
- invent enrollment windows
- invent book links
- invent response-time guarantees
- create fake scarcity
- promise transformation
- diagnose
- spiritually one-up the person
- send everyone to Cal.com

Use the live public origin for site links. Do not treat github.io as a permanent canonical domain. Do not set `PUBLIC_SITE_URL` from this document.

---

## Response template library

These are **human starting points, not autoresponders**. Edit them to the person. Do not send them unchanged when a sentence does not fit.

Replace bracketed prompts. Use the live site paths (`/begin-here`, `/book`, `/private-guidance`, `/courses/the-sacred-no`, `/courses/the-remembering`, `/courses/legacy-in-motion`) and the live Cal.com conversation URL.

### 1. General inquiry

Thank you for writing.

I read your note. [One or two sentences that answer what they asked.]

If that covers it, nothing further is needed. If you want help locating a doorway, Begin Here is the quiet starting page, and Book a Conversation is the fit conversation when a human conversation would help.

### 2. Course interest

Thank you for writing about [The Sacred No / The Remembering / Legacy in Motion].

That pathway is described here: [course page]. There is no open enrollment checkout on the site. A short fit conversation is how we see whether that doorway, another pathway, or a different kind of support is the honest next step.

If you already know you want that conversation: [Cal.com link]. If you want to locate yourself first: [Begin Here].

### 3. Private Guidance interest

Thank you for writing.

Private Guidance is individualized support for a specific season. It does not replace your inner authority, and it is not therapy.

The page is here: [Private Guidance]. There are no prices listed yet. If you want to see whether private work is the right room, a short fit conversation is the next step: [Cal.com link].

### 4. Unsure where to start

You do not need to know the name of the work before beginning.

If you want to locate the season you are in, start here: [Begin Here]. If you want a short conversation to sort the door, you can book here: [Cal.com link]. Either is enough.

### 5. Book question

Thank you for asking about the book.

A purchase link is not listed yet. When a way to obtain it is ready, it will be named on the book page: [Book]. Until then, the ideas are already at work in the path and the courses. You do not need the book in hand to begin.

### 6. Collaboration / speaking

Thank you for reaching out.

I read your note. I cannot commit from a first message, and I will not invent a yes.

If this still seems like a fit from your side, reply with the event or project, the date if you have one, and what you are actually asking for. I will answer from there.

### 7. Website issue

Thank you for flagging this.

I have a record of what you described. If I need a detail to reproduce it, I will ask. No further action is required from you unless you want to add a screenshot or the page URL.

### 8. Not a fit / outside scope

Thank you for writing.

From what you described, this is outside what She Who Remembers offers. This work is coaching and education. It is not therapy, medical care, legal advice, or crisis support.

I am not the right room for this. Please use care that is built for what you need. I will not be following up on this inquiry.

### 9. Fit conversation follow-up

Thank you for the conversation.

What I heard as the live question: [one sentence].

A possible next step, if you want it: [book / self-directed path / wait / private guidance / a named course / nothing].

There is no enrollment to complete on the website right now. If you want to continue, reply and we can name the next practical step. If this is enough, you can leave it here.

### 10. Person not ready yet

That is a complete answer.

You do not need to force a doorway. The site will still be here: Begin Here if you want orientation, Book a Conversation if a human conversation would help later.

I will not chase this. You can write again when it is useful.

---

## Fit-conversation prep card

One page per upcoming call. Objective: **orientation, not closing a sale.**

NAME

DATE / TIME

TIMEZONE

HOW THEY FOUND THE SITE  
(if known)

WHAT THEY SAID THEY WANT TO DISCUSS

LIKELY DOORWAY  
(hypothesis only)

QUESTIONS TO CLARIFY  
(maximum three)

SAFETY / SCOPE  
(only when relevant)

DO NOT ASSUME

NEXT DECISION TO HELP THEM MAKE

The decision is usually one of: locate the season, choose a doorway, wait, or name that this is not the room.

---

## Outcome model

After a conversation, pick one:

- COURSE MAY FIT (name which, as a maybe)
- PRIVATE GUIDANCE MAY FIT
- BOOK / SELF-DIRECTED PATH FIRST
- NOT READY
- NOT A FIT
- OUTSIDE SCOPE
- FOLLOW UP LATER

FOLLOW UP LATER requires a date.

Success means reaching an honest next step, including no.

---

## Follow-up rules

Manual only. No nurture sequence.

- Answered question with nothing open: no follow-up.
- No-show: one reschedule note, pointing them back to Cal.com. Then close if silent.
- Requested material not acknowledged: one follow-up after about a week.
- Second follow-up only when they started the thread and an explicit practical question remains open.
- Then CLOSED or PARKED.
- Parked until an offer opens: contact once when a real offer exists. Do not drip.
- Never chase an explicit no.
- Never follow up on crisis or OUTSIDE SCOPE.

---

## Safety / outside-scope workflow

This work is coaching and education. It is not therapy, medical care, legal advice, crisis support, or emergency monitoring.

If an inquiry asks for therapy, medical advice, legal advice, emergency help, or describes acute danger or abuse:

1. Do not diagnose, counsel, or problem-solve the crisis in email.
2. Reply with template 8, adapted: this is not crisis care and is not monitored as emergency support.
3. Tell them to use local emergency services or an appropriate professional if they are in danger.
4. Do not add unsourced hotline lists to this repository.
5. Set status to NOT A FIT or CLOSED.
6. Set outcome to OUTSIDE SCOPE.
7. Tracker note stays minimal: outside scope; directed to appropriate care.

If they want therapy but are not in crisis: say this is coaching and education, not a substitute for treatment. Do not redirect that request into a sales conversation.

---

## Daily operating routine

No fixed clock.

When Proton is checked:

1. CHECK new Formspree and Cal.com mail
2. CLASSIFY A–G
3. RECORD the row
4. RESPOND the same sitting if it is a normal inquiry
5. SET one NEXT ACTION and status
6. CLOSE if nothing remains

Handle outside-scope and crisis language first. Do not leave opened NEW items sitting.

---

## Weekly lead review

Once a week, scan the tracker:

- new inquiries
- conversations booked
- conversations completed
- replies owed
- follow-ups due
- repeated questions
- people choosing the wrong offer
- booking confusion
- requested offerings not currently available

End with one short operational insight.

Do not rebuild the website from one inquiry.

---

## Website feedback loop

Change the site only with a pattern, or with an obvious defect.

| Signal | Possible later change |
| --- | --- |
| Same question 3+ times | FAQ candidate |
| Repeated wrong-offer selection | Offer distinction review |
| Repeated booking misunderstanding | Booking copy review |
| Offer consistently ignored | Visibility review |
| Contact repeatedly used as coaching intake | Contact positioning review |
| Repeated price or date questions | Do not invent information. Add only when real. |

Isolated curiosity is not a rewrite request.

---

## Future automation candidates

Recorded for later. **Do not implement from this document.**

- create a lead row from Formspree
- create or update a lead from Cal.com
- mark BOOKED from the calendar
- follow-up reminders
- weekly open-lead summary
- repeated-question detection
- optional Cal.com redirect to `/booking-confirmed`

Explicitly excluded for now:

- lead scoring
- AI qualification
- automated nurture
- CRM implementation
- automated sales sequences
- checkout

---

## Owner-dependent items

These remain unresolved until the owner chooses. Do not invent answers.

- Verify that Cal.com booking notifications consistently reach the She Who Remembers Proton inbox.
- Decide whether Cal.com should later redirect to `/booking-confirmed`.
- Decide where the live lead tracker will live (private spreadsheet or Proton; never Git).
- No public response-time promise unless explicitly chosen.
- No call-duration statement unless verified.
- Permanent domain remains Gate 13B. Do not set `PUBLIC_SITE_URL` from lead operations.
- Payments remain a separate gate. Do not invent prices or payment instructions.
