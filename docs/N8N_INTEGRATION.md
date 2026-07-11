# n8n Integration

YouTube Engine is designed to be called by n8n without needing a database.

## Basic flow

1. n8n receives a trigger:
   - uploaded video
   - Google Drive file
   - Dropbox file
   - finished AI video
   - stream clip
   - manual webhook
2. n8n writes a job JSON into `/jobs`.
3. n8n calls:

```bash
npm run build
node dist/cli/index.js process --job jobs/my-job.json
```

4. n8n watches `/output/<jobId>/<platform>/`.
5. n8n picks up:
   - final MP4
   - thumbnail JPG
   - metadata.json
   - upload.txt
   - hashtags.txt
   - title_variants.txt
   - description_variants.txt

## Future webhook mode

Add a small HTTP wrapper later:

```text
POST /jobs
POST /jobs/:jobId/process
GET /status
```

## Future YouTube upload mode

Phase 2 should use `src/platforms/youtube/youtubeUploader.ts` with OAuth refresh token credentials from `.env`.

Keep this repo local-first until rendering is stable.
