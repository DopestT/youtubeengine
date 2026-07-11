# Runway Visual Pipeline

Runway is a visual support layer, not an evidence generator.

## Approved Runway asset types

Use Runway for:

- branded intro card
- `THE LAST 60 SECONDS` countdown card
- abstract crime-documentary texture
- public-record document motion
- map-style city grid motion
- timeline animations
- redaction/blur warning cards
- transition wipes
- neutral evidence-board style backgrounds
- non-literal B-roll that does not depict the actual crime

## Forbidden Runway uses

Do not generate:

- fake bodycam footage
- fake police interactions
- fake suspects or victims
- fake injuries
- fake weapon visuals tied to the case
- fake reenactments presented as real
- real person lookalikes
- images that imply guilt before confirmed

## Required Runway package per episode

```text
EP###_runway_asset_plan.md
EP###_runway_prompts.json
EP###_visual_safety_check.md
```

## Runway visual style

```text
Dark documentary style
black / charcoal / off-white / muted red
subtle bodycam HUD overlays
high contrast but not flashy
no cartoon effects
no fake police sirens
no casino-style motion
```

## Standard visual asset list

Every GREEN full episode should request:

1. `OPENING_PATTERN_INTERRUPT_CARD`
2. `CASE_FILE_CARD`
3. `PUBLIC_RECORD_SOURCE_CARD`
4. `TIMELINE_BUILD`
5. `WHAT_CHANGED_CARD`
6. `WATCH_CLOSELY_CARD`
7. `LISTEN_TO_THIS_CARD`
8. `THE_LAST_60_SECONDS_COUNTDOWN`
9. `FINAL_RECAP_BACKGROUND`
10. `END_SCREEN_NEXT_CASE_LOOP`

## Output instructions

Runway assets should be exported as clean clips, ideally 5–12 seconds each, named:

```text
EP###_RUNWAY_01_opening_pattern_interrupt.mp4
EP###_RUNWAY_02_case_file_card.mp4
EP###_RUNWAY_03_public_record_source.mp4
EP###_RUNWAY_04_timeline_build.mp4
EP###_RUNWAY_05_what_changed.mp4
EP###_RUNWAY_06_watch_closely.mp4
EP###_RUNWAY_07_listen_to_this.mp4
EP###_RUNWAY_08_last_60_countdown.mp4
EP###_RUNWAY_09_final_recap_bg.mp4
EP###_RUNWAY_10_end_screen_loop.mp4
```

## Editor handoff rule

Runway clips are used between real/source footage, not over facts that require proof. If a visual might make a viewer believe something happened on camera when it did not, reject it.
