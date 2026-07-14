# n8n Workflow Plan — The Last 60 Seconds

## Goal

Automatically turn a dropped footage/source package into a review-ready episode folder.

## Trigger options

Use either:

### Option A — Google Drive Trigger
Best for daily production.

```text
User drops files into:
The Last 60 Seconds/00_INCOMING_FOOTAGE/
```

n8n watches that folder and starts the workflow.

### Option B — Webhook Trigger
Best if another app or upload form submits the package.

```text
POST /webhook/bodycam-intake
```

## Node chain

```text
1. Trigger
2. Validate intake payload
3. Create episode ID
4. Create episode folder structure
5. Save raw footage/source notes
6. Extract audio
7. Transcribe audio
8. Analyze source confidence
9. Score viral potential
10. Score 10-minute fit
11. Score compliance/privacy risk
12. Route:
    GREEN → full package
    YELLOW → full package + review warnings
    RED → save rejection report
    SHORTS ONLY → shorts package only
13. Generate full episode script
14. Generate voiceover script
15. Generate SRT captions
16. Generate graphics direction
17. Generate editor notes
18. Generate title/thumbnail metadata
19. Generate social posts
20. Generate review checklist
21. Save all output files
22. Notify owner
```

## Episode folder created by n8n

```text
/EP### - Case Name/
  /raw_footage/
  /source_links/
  /transcript/
  /machine_analysis/
  /script/
  /captions/
  /graphics/
  /thumbnail/
  /voiceover/
  /social_posts/
  /review_checklist/
  /final_exports/
```

## Environment variables

```bash
GOOGLE_DRIVE_INCOMING_FOLDER_ID=
GOOGLE_DRIVE_OUTPUT_FOLDER_ID=
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
TRANSCRIPTION_PROVIDER=openai_whisper
ELEVENLABS_API_KEY=
ELEVENLABS_VOICE_ID=
YOUTUBE_CHANNEL_ID=
OWNER_REVIEW_EMAIL=
SLACK_WEBHOOK_URL=
```

## Routing logic

### GREEN

Criteria:
- source confidence >= 8
- viral potential >= 7.5
- risk score <= 5
- 10-minute fit >= 7.5

Action:
- Create full episode package
- Mark `READY_FOR_HUMAN_REVIEW`

### YELLOW

Criteria:
- usable but needs blur/research/check

Action:
- Create full episode package
- Add `REVIEW_REQUIRED`
- Highlight exact risks

### RED

Criteria:
- unclear source, copyrighted edit, minor/victim risk, too graphic, or unsupported allegations

Action:
- Do not script full episode
- Save rejection report

### SHORTS ONLY

Criteria:
- strong moment but weak 10-minute story

Action:
- Generate 3 Shorts packages
- Do not generate full 10-minute script

## Human review notification

Message format:

```text
New episode package ready:
Episode: EP###
Case: [Case Name]
Decision: GREEN/YELLOW/RED/SHORTS ONLY
Viral score: #
10-minute fit: #
Risk score: #
Folder: [Drive Link]

Action needed:
Review checklist before edit/upload.
```
