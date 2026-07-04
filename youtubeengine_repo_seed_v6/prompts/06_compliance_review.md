# Compliance Review Prompt

Review the episode package for risk before edit/upload.

Flag:

- minors
- victims
- addresses
- license plates
- medical emergencies
- private bystanders
- uncensored faces
- graphic injury
- copyrighted third-party edit
- unclear source
- allegations not proven
- ongoing case
- protected/private information

Return:

```yaml
risk_level:
publish_status:
must_blur:
must_mute:
must_crop:
must_remove:
needs_source_citation:
needs_disclaimer:
human_review_required:
```

Use this disclaimer when appropriate:

“This episode is based on publicly released footage and available records. Some details may remain under investigation.”
