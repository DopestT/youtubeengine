# Free Media Clip Policy

This engine may use free or public-domain media files when they improve clarity, pacing, or visual polish. These assets are support visuals only. They must never be presented as actual footage from the incident unless they are the original source footage.

## Approved free clip uses

Use free clips for:

- generic police lights / city night atmosphere
- courthouse exterior style B-roll
- public-record document texture
- map/grid motion backgrounds
- abstract evidence-board visuals
- neutral transition cards
- empty street / traffic / dashboard-style atmosphere
- public-domain archival clips where relevant and accurately labeled

## Forbidden free clip uses

Do not use free clips to fake:

- bodycam footage
- a suspect or victim
- a police confrontation
- a weapon or injury connected to the case
- a crash, chase, shooting, or arrest that did not come from the source material
- a location as if it is the real incident location unless verified

## Required labeling rule

If a free clip is not actual source footage, the editor notes must label it as one of:

```text
SUPPORT VISUAL
ATMOSPHERE B-ROLL
PUBLIC-DOMAIN ARCHIVAL
ABSTRACT VISUALIZATION
MAP / TIMELINE GRAPHIC
```

## Free clip selection hierarchy

Prefer assets in this order:

1. Original official/public-record footage
2. Official public-domain government media
3. Licensed free stock with reuse rights
4. Generated abstract visuals from Runway
5. Neutral graphics made by the engine

## Required output file

For every episode that uses free assets, generate:

```text
EP###_free_asset_usage.md
```

The file must include:

- asset name
- source URL
- license/reuse note
- exact episode timestamp used
- label shown to viewer if necessary
- why the asset is safe to use
- whether attribution is required

## Human review rule

Any episode that uses outside free clips must stay `YELLOW_REVIEW` until the owner confirms reuse rights and visual accuracy.
