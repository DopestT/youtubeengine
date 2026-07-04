# Complete Operating Plan — The Last 60 Seconds

## 1. Channel identity

**Name:** The Last 60 Seconds  
**Tagline:** Every case comes down to the final minute.  
**Format:** 10-minute crime/bodycam/public-record breakdowns with a branded 60-second final recap.  
**Positioning:** Serious, cinematic, investigative, public-record-driven.

## 2. The channel is not a clip dump

This channel wins by transforming raw footage into a structured episode:

1. Give context.
2. Show what happened.
3. Slow down the crucial moments.
4. Explain what is known and what is unclear.
5. End with a tight final 60-second recap.

## 3. Episode runtime lock

Every full episode targets 10 minutes:

```text
00:00–00:20 — Cold Open
00:20–01:10 — What We’re Watching
01:10–02:30 — The Setup
02:30–04:30 — First Escalation
04:30–06:30 — Key Footage Breakdown
06:30–07:45 — Turning Point
07:45–08:45 — Aftermath
08:45–09:00 — Transition
09:00–10:00 — THE LAST 60 SECONDS
```

If a source package cannot support 10 minutes without filler, classify it as:

- `SHORTS ONLY`
- `NEEDS SECONDARY SOURCE`
- `REJECTED`

## 4. Source intake standards

Each episode needs a source folder:

```text
/EP### - Case Name/
  /raw_footage/
  /source_links/
  /case_notes/
```

Required fields:

- episode_id
- case_name
- source_url
- agency/source name
- footage type
- release date if known
- incident date if known
- city/state if known
- source license or reuse note
- notes on visible private information
- notes on whether the footage is official, news, reposted, or third-party edited

## 5. Scoring system

Every candidate receives:

### Viral Potential Score
1–10 based on:
- opening shock
- mystery/confusion
- emotional stakes
- clear visual evidence
- audio clarity
- story arc
- public-interest value
- title strength
- thumbnail strength
- ending payoff

### 10-Minute Fit Score
1–10 based on:
- enough footage
- enough context
- enough turning points
- enough clear visuals
- enough known aftermath
- enough replay/analysis moments

### Risk Score
1–10 based on:
- minors
- victims
- medical emergency
- address/license plates
- ongoing case
- unclear allegation
- third-party copyright
- graphic injury
- private bystanders

## 6. Green / Yellow / Red decision

```text
GREEN:
Strong source, official/public-record confidence, low privacy/copyright risk, strong story, 10-minute fit.

YELLOW:
Usable after blur, secondary research, source confirmation, or legal/privacy review.

RED:
Do not use. Source unclear, privacy risk too high, copyrighted edit, too graphic, too exploitative, or facts too uncertain.

SHORTS ONLY:
Good moment, weak episode depth.
```

## 7. Production package outputs

For every approved full episode, create:

- `EP###_machine_scorecard.md`
- `EP###_source_summary.md`
- `EP###_risk_review.md`
- `EP###_10_minute_script.md`
- `EP###_voiceover_script.md`
- `EP###_timestamped_captions.srt`
- `EP###_graphics_direction.md`
- `EP###_editor_notes.md`
- `EP###_thumbnail_concepts.md`
- `EP###_youtube_metadata.md`
- `EP###_tiktok_package.md`
- `EP###_instagram_package.md`
- `EP###_shorts_cutdowns.md`
- `EP###_review_checklist.md`

## 8. Voice and style

The channel voice is:

- serious
- controlled
- cinematic
- direct
- investigative
- not goofy
- not fake-dramatic
- not AI-sounding

Banned phrases:

- “In today’s video…”
- “You won’t believe…”
- “Like and subscribe” in the opening minute
- unsupported “killer,” “criminal,” “psycho,” “guilty,” unless legally established

Allowed phrases:

- “The footage shows…”
- “According to the released records…”
- “What happens next changes the entire stop.”
- “Watch the left side of the frame.”
- “This is the moment the situation shifts.”
- “Now we go to The Last 60 Seconds.”

## 9. Brand graphics

Recurring graphics:

- `CASE FILE`
- `PUBLIC RECORD SOURCE`
- `WATCH CLOSELY`
- `LISTEN TO THIS`
- `WHAT CHANGED?`
- `THE LAST 60 SECONDS`
- red countdown 60 → 0

Visual direction:

- black background
- white text
- red timestamp/accent
- subtle bodycam overlay
- clean evidence markers
- no goofy crime graphics
- no fake police lights unless from real footage

## 10. Weekly improvement loop

Every week, review:

- CTR
- average view duration
- retention drop points
- title performance
- thumbnail performance
- comments
- recurring viewer questions
- episode types that outperform
- source types that underperform

Then update prompt instructions and scoring thresholds.
