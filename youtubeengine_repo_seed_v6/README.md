# The Last 60 Seconds — YouTube Engine

This repo is the operating system for **The Last 60 Seconds**, a 10-minute YouTube crime/bodycam/public-record breakdown channel.

## Core format

Every full episode targets **10 minutes** and ends with a branded final segment:

> **THE LAST 60 SECONDS**  
> Every case comes down to the final minute.

## Production promise

Raw footage and public-record material go in. A review-ready episode package comes out.

The engine produces:

- source tracking
- public-record confidence scoring
- copyright/reuse risk flags
- privacy/compliance risk review
- viral potential scoring
- 10-minute episode suitability scoring
- full 10-minute script
- voiceover script
- timestamped captions
- graphics direction
- editor notes
- title package
- thumbnail concepts
- YouTube metadata
- TikTok/Instagram packages
- Shorts cutdowns
- human review checklist

## Human approval rule

This engine is **auto-produce, human-approve**.

It must not auto-publish without review. Bodycam/crime footage can include minors, victims, private addresses, medical emergencies, ongoing investigations, and unclear allegations. The system flags risk; a human makes the final call.

## Repo map

```text
/docs
  01_complete_operating_plan.md
  02_n8n_workflow_plan.md
  03_episode_scorecard_schema.md
  04_first_10_episode_launch_checklist.md
  05_weekly_improvement_loop.md

/prompts
  01_master_episode_producer.md
  02_intake_and_scoring.md
  03_script_writer.md
  04_graphics_and_editor_notes.md
  05_title_thumbnail_metadata.md
  06_compliance_review.md
  07_final_60_seconds.md

/schemas
  intake_payload.schema.json
  episode_scorecard.schema.json
  episode_package_output.schema.json

/n8n
  the_last_60_seconds_workflow_blueprint.json
  node_by_node_build.md
  webhook_payload_example.json

/samples
  EP001_sample_episode_package.md

/scripts
  bootstrap_push.sh

.env.example
```

## First build objective

Get to this working loop:

```text
Drop footage + source notes into intake
→ n8n creates episode folder
→ transcription runs
→ AI scores the episode
→ AI creates the package
→ docs are saved
→ human receives review checklist
→ approved episodes move to edit/upload
```

## Non-negotiables

- Do not invent facts.
- Do not claim guilt unless legally established.
- Do not use third-party edited footage as if it is original source footage.
- Blur minors, addresses, license plates, private bystanders, and sensitive details.
- Cite official/source links in the metadata.
- If the story cannot support 10 minutes, label it `SHORTS ONLY`.
- If the source is risky or unclear, label it `RED` or `YELLOW`, not `GREEN`.

## Current status

This is the repo seed package. Push it into `DopestT/youtubeengine` and then wire n8n.


## Episode Queue + Runway pass

The v4 build adds a strict queue system so every uploaded video/source package gets a visible production label and sidecar metadata before it moves through the engine.

Queue statuses:

```text
NEW_INTAKE
SOURCE_CHECK
TRANSCRIBING
SCORECARD_READY
GREEN_FULL_EPISODE
YELLOW_REVIEW
RED_REJECTED
SHORTS_ONLY
SCRIPT_READY
RUNWAY_ASSETS_READY
EDITOR_READY
REVIEW_READY
APPROVED_TO_FIRE
PUBLISHED
```

Runway is used for **abstract support visuals only**: title cards, countdowns, map-style motion, document motion, redaction cards, timelines, and transitions. It must not fabricate evidence, fake bodycam moments, or fake crime reenactments.

## Queue + Runway + free asset branch

The latest build adds:

```text
docs/07_episode_queue_and_folder_labeling.md
docs/08_runway_visual_pipeline.md
docs/09_review_and_fire_sop.md
docs/10_free_media_clip_policy.md
prompts/09_episode_queue_router.md
prompts/10_runway_visual_director.md
prompts/11_free_asset_selector.md
schemas/episode_queue_item.schema.json
schemas/runway_asset_request.schema.json
schemas/free_asset_usage.schema.json
n8n/drive_queue_workflow_blueprint.json
n8n/free_media_asset_branch.md
samples/EP001_episode_queue_item.json
samples/EP001_runway_asset_prompts.md
samples/EP001_free_asset_usage.md
```

## Status language

Use folder labels to control production:

```text
NEW_INTAKE
SOURCE_CHECK
TRANSCRIBING
SCORECARD_READY
GREEN_FULL_EPISODE
YELLOW_REVIEW
RED_REJECTED
SHORTS_ONLY
SCRIPT_READY
RUNWAY_ASSETS_READY
EDITOR_READY
REVIEW_READY
APPROVED_TO_FIRE
PUBLISHED
```

Only the owner can set `APPROVED_TO_FIRE`.

## Runway rule

Runway is allowed for support visuals only: countdowns, timeline cards, document motion, maps, texture, transitions, and branded cards.

Runway must not generate fake bodycam footage, fake suspects, fake victims, fake police encounters, fake weapons, fake injuries, or reenactments presented as real.

## Free file rule

Free/public-domain clips can be used as support visuals when applicable, but they must be labeled in the editor notes and reviewed before publishing. They cannot be used to fake the actual incident.

## Marketing automation

The repo now includes a marketing automation command file:

```text
/marketing/marketing_automation_command_center.md
/n8n/marketing_distribution_workflow_blueprint.json
```

This prepares YouTube metadata, Shorts packages, TikTok/Reels captions, community posts, email/newsletter copy, sponsor summaries, and performance review loops after an episode is marked `APPROVED_TO_FIRE`.
