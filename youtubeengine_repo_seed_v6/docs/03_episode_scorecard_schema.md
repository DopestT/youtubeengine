# Episode Scorecard Schema

## Scorecard fields

```yaml
episode_id:
case_name:
source_url:
source_name:
source_type:
incident_date:
release_date:
location:
footage_type:
public_record_confidence_score:
copyright_reuse_risk_score:
privacy_risk_score:
viral_potential_score:
ten_minute_fit_score:
final_decision:
```

## Viral potential scoring

Rate each 1–10:

```yaml
opening_shock:
mystery_confusion:
emotional_stakes:
clear_visual_evidence:
audio_clarity:
story_arc:
police_bodycam_relevance:
public_interest_value:
title_strength:
thumbnail_strength:
ending_payoff:
```

Final viral potential is the weighted average:

- opening shock: 15%
- mystery/confusion: 10%
- emotional stakes: 10%
- clear visual evidence: 10%
- audio clarity: 5%
- story arc: 15%
- public-interest value: 10%
- title strength: 10%
- thumbnail strength: 10%
- ending payoff: 5%

## Risk flags

```yaml
minors_visible:
victim_identity_visible:
addresses_visible:
license_plates_visible:
medical_emergency:
private_bystanders:
graphic_injury:
unclear_legal_status:
ongoing_case:
third_party_copyright_edit:
source_unclear:
allegations_not_proven:
```

## Recommended actions

```yaml
blur_required:
mute_required:
crop_required:
secondary_research_required:
source_confirmation_required:
do_not_use:
human_review_required:
```

## Final decisions

```text
GREEN
YELLOW
RED
SHORTS ONLY
NEEDS SECONDARY SOURCE
```
