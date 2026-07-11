# n8n Free Media Asset Branch

Add this branch after the graphics/editor-notes generation step.

## Branch logic

```text
Graphics/editor notes generated
→ Free Asset Selector AI
→ IF free_assets_required = false
   → continue to Review Package
→ IF free_assets_required = true
   → search approved local asset library or asset spreadsheet
   → attach candidate asset links
   → save EP###_free_asset_usage.md
   → keep status YELLOW_REVIEW until owner verifies rights
```

## Required fields

- episode_id
- timeline need
- asset type
- source URL
- license note
- editor label
- attribution note
- risk level

## Approved asset library structure

```text
/The Last 60 Seconds/15_BRAND_ASSETS/
  /free_broll_verified/
  /public_domain_verified/
  /runway_generated/
  /rejected_assets/
```

## Do not automate publishing from this branch

Any episode using outside free clips must go to review. The owner must verify that the clip is safe, accurate, and reusable.
