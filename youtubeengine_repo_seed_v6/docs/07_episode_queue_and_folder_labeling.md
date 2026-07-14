# Episode Queue + Folder Labeling System

This is the production traffic-control layer. It keeps every video from becoming a loose file with no status.

## Main Drive structure

```text
/The Last 60 Seconds/
  /00_INCOMING_FOOTAGE/
  /01_EPISODE_QUEUE/
  /02_SOURCE_CHECK/
  /03_TRANSCRIBING/
  /04_MACHINE_REVIEW/
  /05_GREEN_FULL_EPISODES/
  /06_YELLOW_HUMAN_REVIEW/
  /07_SHORTS_ONLY/
  /08_RED_REJECTED/
  /09_SCRIPT_READY/
  /10_RUNWAY_ASSETS_READY/
  /11_EDITOR_READY/
  /12_REVIEW_READY/
  /13_APPROVED_TO_FIRE/
  /14_PUBLISHED/
  /15_BRAND_ASSETS/
  /16_PROMPT_LIBRARY/
```

## Episode folder naming convention

```text
EP###__CASE_SLUG__STATUS
```

Examples:

```text
EP001__traffic_stop_turns_search__NEW_INTAKE
EP001__traffic_stop_turns_search__SCORECARD_READY
EP001__traffic_stop_turns_search__RUNWAY_ASSETS_READY
EP001__traffic_stop_turns_search__REVIEW_READY
EP001__traffic_stop_turns_search__APPROVED_TO_FIRE
```

The automation should rename or move the folder when the status changes.

## Required sidecar metadata file

Every video package must have:

```text
EP###_episode_queue_item.json
```

This JSON travels with the episode and acts as the source of truth.

## Queue fields

```text
episode_id
case_slug
current_status
priority
assigned_package_folder
raw_video_files
source_links
agency_source
incident_date
release_date
runtime_raw
public_record_confidence
copyright_reuse_risk
privacy_risk
viral_score
full_episode_fit
runway_assets_required
editor_assets_required
review_required
approved_to_fire
published_url
notes
```

## Status definitions

- `NEW_INTAKE`: video/source files were added, no analysis yet.
- `SOURCE_CHECK`: engine is checking whether source is official, public-record, third-party edit, or unclear.
- `TRANSCRIBING`: audio/transcript is being generated.
- `SCORECARD_READY`: risk/viral/fit scoring is complete.
- `GREEN_FULL_EPISODE`: safe enough and strong enough for a 10-minute episode.
- `YELLOW_REVIEW`: likely usable, but needs human/legal/privacy review.
- `RED_REJECTED`: do not use.
- `SHORTS_ONLY`: not enough story for a 10-minute episode.
- `SCRIPT_READY`: full 10-minute script package generated.
- `RUNWAY_ASSETS_READY`: supporting visual prompts/assets are ready.
- `EDITOR_READY`: editor can assemble.
- `REVIEW_READY`: final package ready for owner review.
- `APPROVED_TO_FIRE`: owner approved upload/publish.
- `PUBLISHED`: final URL saved.

## Hard rule

Nothing reaches `APPROVED_TO_FIRE` without human review. This protects the channel from reused-content problems, privacy problems, and false claim risk.
