# Review and Fire SOP

The engine can prepare everything, but the owner fires the upload.

## Review order

1. Watch the raw source moment.
2. Read `source_summary.md`.
3. Read `risk_review.md`.
4. Confirm all blur/mute/crop recommendations.
5. Read the first 45 seconds of the script.
6. Read `THE LAST 60 SECONDS` recap.
7. Check title/thumbnail for unsupported claims.
8. Confirm metadata cites source.
9. Mark the queue item `APPROVED_TO_FIRE` or send it back.

## Approved-to-fire checklist

```text
[ ] Source link is saved
[ ] Footage is public-record / official / licensed / fair-use transformed
[ ] No private address visible
[ ] No minor face visible unless officially blurred/source-safe
[ ] No license plate visible unless already officially blurred/source-safe
[ ] No medical private info exposed
[ ] No fake claims in title
[ ] No guilt claim unless legally established
[ ] Episode has original narration and analysis
[ ] Episode has original graphics
[ ] Final 60-second recap is exactly 60 seconds
[ ] YouTube metadata includes source/disclaimer
[ ] Thumbnail is accurate
[ ] Owner approves upload
```

## Fire command

When approved, set:

```json
{
  "current_status": "APPROVED_TO_FIRE",
  "approved_to_fire": true,
  "approved_by": "Brother Big",
  "approval_timestamp": "AUTO"
}
```

n8n can then move the folder to `/13_APPROVED_TO_FIRE/` and notify the editor/uploader.
