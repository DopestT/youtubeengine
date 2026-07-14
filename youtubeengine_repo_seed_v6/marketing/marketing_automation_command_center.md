# Marketing Automation Command Center

Repo: `youtubeengine`  
Project: **The Last 60 Seconds**  
Purpose: turn every approved episode into a multi-platform marketing cycle without auto-publishing anything risky.

## Core rule

This is a **review-and-fire** marketing engine.

The machine may prepare assets, captions, emails, posts, thumbnails, and distribution tasks. Only the owner can mark an episode:

```text
APPROVED_TO_FIRE
```

No platform post, upload, email blast, or paid promotion should happen before that status.

---

## Marketing objective

Every approved 10-minute episode must create:

1. one YouTube long-form upload package
2. three YouTube Shorts
3. three TikTok/Reels cutdowns
4. one community post
5. one email/newsletter issue
6. one X/thread post
7. one sponsor-friendly summary
8. one performance feedback loop for future scripts

The point is not to post more for the sake of posting more. The point is to turn one strong episode into a full traffic system.

---

## Automation folders

Add these folders to the Google Drive production structure:

```text
/The Last 60 Seconds/
  /11_MARKETING_AUTOMATION/
    /01_APPROVED_TO_FIRE/
    /02_YOUTUBE_UPLOAD_PACKAGES/
    /03_SHORTS_PACKAGES/
    /04_TIKTOK_REELS_PACKAGES/
    /05_COMMUNITY_POSTS/
    /06_EMAIL_NEWSLETTER/
    /07_SPONSOR_SUMMARIES/
    /08_PERFORMANCE_REPORTS/
    /09_REUSE_NEXT_WEEK/
```

Per episode:

```text
/EP### - Case Name/
  /marketing/
    EP###_launch_plan.md
    EP###_youtube_upload_package.md
    EP###_shorts_schedule.md
    EP###_tiktok_reels_package.md
    EP###_community_post.md
    EP###_email_newsletter.md
    EP###_x_thread.md
    EP###_sponsor_summary.md
    EP###_performance_review.md
```

---

## Status labels

The marketing system reads only these statuses:

```text
SCRIPT_READY
EDITOR_READY
REVIEW_READY
APPROVED_TO_FIRE
PUBLISHED
CLIP_RECYCLING
PERFORMANCE_REVIEWED
```

Rules:

```text
REVIEW_READY       = prepare marketing drafts only
APPROVED_TO_FIRE   = schedule/upload tasks can be prepared for final confirmation
PUBLISHED          = activate clip recycle + community + email follow-up
PERFORMANCE_REVIEWED = use data to improve next episode
```

---

## n8n marketing workflow

### Trigger

Google Drive Trigger or Webhook Trigger watches for an episode folder where:

```json
{
  "episode_status": "APPROVED_TO_FIRE",
  "episode_id": "EP###",
  "channel": "The Last 60 Seconds"
}
```

### Node chain

```text
1. Trigger: episode marked APPROVED_TO_FIRE
2. Read episode package files
3. Check risk_review.md for unresolved RED/YELLOW flags
4. If unresolved flags exist -> stop and notify owner
5. Generate YouTube upload package
6. Generate Shorts cutdown package
7. Generate TikTok/Reels package
8. Generate community post
9. Generate newsletter/email issue
10. Generate X/thread post
11. Generate sponsor-safe summary
12. Save all marketing files
13. Notify owner: READY TO FIRE
14. After video is published, wait 24h
15. Pull performance metrics manually or via YouTube Analytics API
16. Generate performance review
17. Update future content rules
```

---

## Quality gates

### Hard stop flags

Do not proceed to marketing if any of these remain unresolved:

```text
unclear source
copyrighted third-party edit
minor visible and unblurred
private address visible
license plate visible
graphic injury thumbnail
unsupported criminal accusation
ongoing investigation presented as settled fact
no source link
```

### Marketing safety language

Use language like:

```text
publicly released footage
available records
according to the release
the footage appears to show
police said
officials said
records state
some details remain under investigation
```

Avoid language like:

```text
he definitely did it
criminal caught red-handed
evil suspect
shocking murder footage
watch them die
uncensored tragedy
```

---

## YouTube long-form launch package

Every approved episode gets:

```text
Title A: curiosity/mystery
Title B: bodycam/search intent
Title C: direct factual
Thumbnail A: face/bodycam moment + 3-word text
Thumbnail B: evidence marker + timestamp
Thumbnail C: final 60 seconds countdown concept
Description
Pinned comment
Chapters
Tags
Source citation block
Disclaimer block
```

### Description template

```text
This episode breaks down publicly released footage and available records from [agency/source]. Some details may remain under investigation.

In this case, the key moment happens near the end — and the final minute changes how the footage should be read.

Sources:
- [Official source link]
- [Agency release link]
- [Court/public-record link if available]

The Last 60 Seconds: Every case comes down to the final minute.
```

### Pinned comment template

```text
What detail did you catch before The Last 60 Seconds recap?
```

---

## Shorts and cutdown system

Each long episode produces three Shorts:

```text
SHORT 1 — The Hook
Best 20–45 second high-tension moment.
Goal: reach new viewers.

SHORT 2 — The Missed Detail
One visual or audio detail most viewers miss.
Goal: comments and rewatches.

SHORT 3 — The Last 60 Seconds
Compressed version of the final recap.
Goal: drive viewers to full episode.
```

### Short CTA format

Avoid weak CTAs like:

```text
Watch the full video on my channel.
```

Use:

```text
The full breakdown changes what this moment means.
```

or:

```text
The final 60 seconds explains why this mattered.
```

---

## Community post system

Use after publishing or 6–12 hours before publishing.

### Pre-publish post

```text
New case breakdown is in review.

The key moment happens in the final minute — but the warning signs start much earlier.

Would you rather see:
A) more traffic stop breakdowns
B) interrogation/bodycam breakdowns
C) courtroom/public-record cases
```

### Post-publish post

```text
The new episode is live.

Question: at what point did the situation actually change?

Most people will say the ending. I think the real shift happens earlier.
```

---

## Email/newsletter automation

Audience: people who want a direct alert when a new case drops.

### Subject line options

```text
The final minute changed the whole case
New breakdown: watch the final 60 seconds
This bodycam detail was easy to miss
```

### Email body template

```text
A new episode of The Last 60 Seconds is ready.

This one starts like a routine incident, but the key moment comes later — when one detail changes the way the footage should be understood.

Watch the full breakdown here:
[YouTube link]

The final 60-second recap pulls the case together.

— The Last 60 Seconds
```

---

## Sponsor summary file

Purpose: keep a sponsor-safe version of each episode so outreach can happen later.

Template:

```text
Episode: EP### - [Case Name]
Category: public-record/bodycam breakdown
Runtime: 10 minutes
Tone: documentary, investigative, non-graphic
Audience: true crime, public safety, legal/process viewers
Monetization risk: LOW / MEDIUM / HIGH
Sensitive content: [list]
Brand-safe summary:
This episode analyzes publicly released footage and available records with original narration, captions, and graphics. The focus is timeline clarity, public-interest context, and responsible review.
```

---

## Retention feedback loop

After publishing, collect:

```text
CTR
average view duration
average percentage viewed
first 30-second retention
largest retention dip
largest replay spike
comments mentioning confusion
comments mentioning “final 60 seconds”
shorts conversion to full episode
subscribers gained per episode
```

### Performance rules

```text
If CTR < 5%:
  rewrite title + thumbnail concept.

If first 30-second retention < 65%:
  cold open is too slow or unclear.

If view drop happens before 02:00:
  setup is too long; move conflict earlier.

If drop happens around 06:00:
  add a new evidence card, replay, or shift in question.

If comments ask the same question repeatedly:
  future scripts need clearer context earlier.

If viewers mention “final 60 seconds”:
  strengthen the branded recap and use it in Shorts.
```

---

## Automation prompt: Marketing Director

Use this prompt in the n8n AI node after an episode is approved.

```text
You are the Marketing Director for The Last 60 Seconds.

Input:
- episode script
- title options
- thumbnail concepts
- risk review
- source summary
- final 60-second recap
- episode scorecard

Create a complete marketing package for this episode.

Rules:
- Do not invent facts.
- Do not create unsupported accusations.
- Do not exaggerate graphic or violent elements.
- Keep the tone serious, documentary, and high-retention.
- Use source-safe language.
- Promote the final 60-second recap as the channel signature.
- Produce launch assets that can be reviewed and fired by the owner.

Output:
1. YouTube upload package
2. YouTube Shorts package
3. TikTok/Reels package
4. Community post
5. Email/newsletter
6. X/thread post
7. Sponsor-safe summary
8. Performance prediction
9. Risk check before publishing
```

---

## Webhook payload example

```json
{
  "episode_id": "EP001",
  "episode_status": "APPROVED_TO_FIRE",
  "episode_folder_url": "GOOGLE_DRIVE_FOLDER_URL",
  "youtube_upload_ready": true,
  "shorts_required": true,
  "newsletter_required": true,
  "community_post_required": true,
  "human_approval_required": true
}
```

---

## Why this file exists

A content engine wins when every episode has a second life.

The main episode is the asset.  
Shorts create discovery.  
Community posts create conversation.  
Email creates return traffic.  
Performance reports improve the next script.  

Do not let strong episodes die after one upload.
