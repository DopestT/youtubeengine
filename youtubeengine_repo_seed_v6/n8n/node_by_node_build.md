# n8n Node-by-Node Build

## 1. Trigger

Use either:

- Google Drive Trigger: watches `/00_INCOMING_FOOTAGE`
- Webhook Trigger: receives JSON payload

## 2. Validate Intake

Function node checks:

- video_url exists
- source_type exists
- review_required is true
- episode_id exists or is generated

## 3. Create Episode Folder

Google Drive node creates:

```text
EP### - Case Name/
```

Then subfolders:

```text
raw_footage
source_links
transcript
machine_analysis
script
captions
graphics
thumbnail
voiceover
social_posts
review_checklist
final_exports
```

## 4. Extract Audio

Use one of:

- ffmpeg via Execute Command
- cloud media API
- manual upload to transcription provider

Command example:

```bash
ffmpeg -i input.mp4 -vn -acodec mp3 output.mp3
```

## 5. Transcribe

Use Whisper/OpenAI transcription or another provider that returns timestamps.

## 6. AI Intake and Scoring

Prompt: `prompts/02_intake_and_scoring.md`

Input:
- transcript
- source notes
- source URL
- case notes

Output:
- scorecard JSON
- GREEN/YELLOW/RED/SHORTS ONLY decision

## 7. Switch Router

Route based on `final_decision`.

## 8. Full Episode Package

For GREEN/YELLOW/NEEDS SECONDARY SOURCE:
Run:

- master producer
- script writer
- graphics/editor notes
- title/thumbnail metadata
- compliance review
- final 60 seconds

## 9. RED route

Create rejection report only. Do not script.

## 10. SHORTS ONLY route

Create 3 Shorts packages:
- 30 sec
- 45 sec
- 60 sec

## 11. Save files

Save generated content to the episode folder.

## 12. Notify

Send:

```text
Episode package ready.
Decision:
Viral score:
Risk score:
Folder link:
Review required:
```
