# YouTube Engine

A production-minded local engine for turning raw clips, generated videos, stream clips, music, captions, and brand rules into upload-ready YouTube Shorts and social video packages.

Built for:

- Legacy Works Ventures
- Archangels Club
- Terms & Conditions
- The Piker Way
- New Majority
- Future brands

This is the maxed-out local production foundation. It does not upload to YouTube yet. It prepares clean video packages that n8n or a future uploader can post.

## What it does

- Reads JSON jobs from `/jobs`
- Validates sources and settings
- Processes video with ffmpeg
- Exports 9:16 platform-ready MP4s
- Burns captions when provided
- Adds hook/CTA text overlays
- Generates thumbnails
- Generates metadata and social post copy
- Tracks status in `/output/status.json`
- Logs to `/logs/engine.log`
- Provides scaffolds for YouTube API, AI hooks, and n8n

## Requirements

- Node.js 20+
- ffmpeg installed and available as `ffmpeg`
- ffprobe optional for future inspection

Check ffmpeg:

```bash
ffmpeg -version
```

## Install

```bash
npm install
cp .env.example .env
npm run build
```

## Folder structure

```text
/input                  Raw source files
/output                 Rendered packages and status.json
/jobs                   JSON jobs
/assets/brands          Brand profiles
/assets/endcards        End card assets
/assets/watermarks      Watermark assets
/assets/music           Music beds
/assets/captions        Captions
/templates              Future templates
/logs                   Engine logs
/src                    TypeScript source
/docs                   Integration docs
```

## Commands

```bash
npm run sample
npm run validate jobs/sample-legacyworks.json
npm run process -- --job jobs/sample-legacyworks.json
npm run status
npm run clean
```

CLI form after build:

```bash
node dist/cli/index.js sample
node dist/cli/index.js validate jobs/sample-legacyworks.json
node dist/cli/index.js process --job jobs/sample-legacyworks.json
node dist/cli/index.js process --dry-run
node dist/cli/index.js status
node dist/cli/index.js clean
```

## Job format

Each job supports:

- jobId
- projectName
- brand
- sourceType
- sourceFiles
- targetPlatforms
- title
- description
- hashtags
- tags
- category
- visibility
- scheduledTime
- endCard
- watermark
- captions
- music
- voiceover
- thumbnailFrame
- hookText
- callToAction
- status
- retryCount
- createdAt
- updatedAt

See `/jobs/sample-*.json`.

## Running a sample

Put a video at:

```text
input/sample.mp4
```

Then run:

```bash
npm run build
node dist/cli/index.js process --job jobs/sample-legacyworks.json
```

Output appears at:

```text
output/sample-legacyworks/youtube/
output/sample-legacyworks/tiktok/
output/sample-legacyworks/instagram/
output/sample-legacyworks/x/
output/sample-legacyworks/facebook/
```

Each platform folder contains:

- final MP4
- thumbnail JPG
- metadata.json
- upload.txt
- hashtags.txt
- title_variants.txt
- description_variants.txt

## Roadmap

### Phase 1: Local production engine

Done in this foundation.

### Phase 2: YouTube upload

Wire `src/platforms/youtube/youtubeUploader.ts` to OAuth and YouTube Data API.

### Phase 3: n8n automation

Use n8n to create jobs, call the CLI, watch output, and post/schedule.

### Phase 4: AI upgrades

Connect OpenAI/Whisper/ElevenLabs/Cloudinary only after local processing is stable.

## Rule

Do not mix this engine into Archangels Club yet. Keep it as a separate production tool.
