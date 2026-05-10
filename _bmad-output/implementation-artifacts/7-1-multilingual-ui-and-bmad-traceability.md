---
epic_id: epic-7
story_id: 7-1
status: review
product_name: DASEIN
tracing:
  prd: _bmad-output/planning-artifacts/prd-ontoapp.md (FR8, NFR5)
  architecture: _bmad-output/planning-artifacts/architecture-ontoapp.md (§12 Localization)
  epic_breakdown: _bmad-output/planning-artifacts/epics-and-stories-ontoapp.md#epic-7-localization--traced-bmad-execution-dasein
---

# Story 7.1 — Multilingual UI & BMAD traceability

## Goal

Expose **Portuguese (Brazil)** and **English** for all reflective surfaces, persist `dasein_locale`, and wire planning ↔ implementation pointers so sprint / PRD / architecture stay aligned.

## Developer context

| Item | Location |
|------|-----------|
| i18n bootstrap | `app/src/i18n/config.js` |
| Strings | `app/src/i18n/locales/pt-BR.json`, `en.json` |
| Persisted preference | `LOCALE_STORAGE_KEY` → `app/src/storageKeys.js` (`dasein_locale`) |
| Language switch UI | `app/src/components/ui/LanguageSwitcher.jsx` |
| Wired views | `EntryView`, `BalanceCard`, `MorningRitual`, `InternalDialogue`, `InterruptionOverlay`; chrome in `App.jsx` |
| Unit tests | `app/src/components/views/__tests__/InternalDialogue.test.jsx` (+ `setup.js` loads i18n) |
| E2E hints | `app/tests/e2e/autopilot.spec.js` |

## Acceptance checklist

- [x] Toggle **PT** / **EN** updates copy across primary flows without reload.
- [x] Reload restores language from **`dasein_locale`**.
- [x] `document.documentElement.lang` mirrors active locale (**`pt-BR`** | **`en`**).
- [x] PRD **FR8 / NFR5** and Architecture **§12** reference implementation paths.
- [x] **`traceability-dasein-bmad.md`** lists this story and artefacts.

## Out of scope (follow-up stories)

- Full locale pluralization beyond current copy.
- Additional languages (reuse JSON pattern + `SUPPORTED_LANGUAGES`).
- Migrating BMAD authoring language (English) into Portuguese artefacts—tracked separately when PM runs bilingual PRDs.
