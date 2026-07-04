# Intake and Scoring Prompt

Analyze the provided source package.

Inputs:
- video/transcript
- source URL
- agency/source name
- case notes
- release date if available
- incident date if available
- visual notes

Return:

```yaml
episode_id:
case_name:
source_confidence_score:
copyright_reuse_risk_score:
privacy_risk_score:
viral_potential_score:
ten_minute_fit_score:
final_decision:
reason_for_decision:
```

Score 1–10:

- opening shock
- mystery/confusion
- emotional stakes
- clear visual evidence
- audio clarity
- story arc
- bodycam relevance
- public-interest value
- title strength
- thumbnail strength
- ending payoff

Decision rules:

- GREEN: strong, usable, low risk
- YELLOW: usable after review/blur/research
- RED: do not use
- SHORTS ONLY: good moment, not enough for 10 minutes
- NEEDS SECONDARY SOURCE: promising but incomplete

Also list exact risk flags and exact recommended actions.
