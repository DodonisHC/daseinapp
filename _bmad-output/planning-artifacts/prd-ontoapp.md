---
stepsCompleted: []
inputDocuments:
  - _bmad-output/planning-artifacts/product-brief-ontoapp.md
  - _bmad-output/planning-artifacts/prfaq-ontoapp.md
workflowType: 'prd'
---

# Product Requirements Document - Ontoapp

**Author:** BMad Analyst
**Date:** 2026-05-10

## 1. Product Vision

Ontoapp is a mobile reflection companion that helps people move from autopilot existence to authentic presence. It does this by creating a privacy-first, non-gamified space for embodied rituals, existential confrontation, and dynamic balance across Body, Mind, and Purpose.

The product is for users who find traditional wellness apps too shallow and want a practical system to notice their own patterns, confront avoidance, and reconnect with meaning.

## 2. Problem Statement

Many people live reactive, distracted lives. Their attention is captured by external stimuli and habits, while their body, mind, and sense of purpose drift apart.

Current apps emphasize relaxation, productivity, or habit tracking, but they do not help users detect when they are living inauthentically or guide them toward deeper inner alignment.

## 3. Target Users

### Primary Users
- Reflective individuals who already practice meditation or journaling but want a deeper, more meaningful experience.
- People who feel they are living on autopilot and want tools to notice that pattern.
- Learners who seek philosophical, ontological framing rather than productivity or wellness gamification.

### Secondary Users
- Early adopters of mental wellness tools looking for a privacy-focused alternative.
- Coaches and facilitators who want a safe, non-judgmental app to recommend for clients.

## 4. Success Criteria

### User success
- Users complete the morning embodied ritual at least twice per week.
- Users report greater bodily presence and reduced autopilot experience.
- Users can identify and name avoidance patterns via interruption prompts.
- Users understand their current balance across Body, Mind, and Purpose using the Forma do Ser.
- Users report that Ontoapp feels more like a mirror than a game.

### Business success
- Onboarding completion rate for the ritual is at least 60%.
- Engagement is sustained by meaningful reflection, not reward loops.
- Qualitative feedback highlights privacy, calm, and non-gamified design.

## 5. Product Principles

- **Presence over productivity:** emphasize noticing and choosing instead of tracking output.
- **No gamification:** do not use streaks, points, badges, or leaderboards.
- **Privacy-first:** make clear what is stored, what is ephemeral, and how the user controls their data.
- **Gentle confrontation:** encourage awareness without shaming or pressure.
- **Balance over checklist:** support the Body/Mind/Purpose triad rather than forcing a single dimension.

## 6. Functional Requirements

### FR1: Morning Embodied Ritual
- The app must offer a morning ritual flow that guides the user through a brief audio-based presence exercise.
- The ritual must include a breathing- or attention-focused transition before asking the user to speak.
- The app must capture a short voice recording and use it to generate a personalized reflection prompt.

### FR2: Internal Dialogue Capture
- The app must allow users to record a nightly text entry that captures their internal dialogue.
- Prompts should help the user articulate the tension between justification and authenticity.
- The app must store that entry and attach temporal metadata.

### FR3: Existential Interruption
- The app must provide a gentle interruption when it detects a user pattern consistent with autopilot or digital escape.
- The interruption flow must offer a choice-based prompt that invites the user to name what they are avoiding.
- The app must record the choice and whether the user engages or defers.

### FR4: Centro de Gravidade
- The app must track user inputs across Body, Mind, and Purpose.
- The app must assess which pillar is currently underrepresented and adjust suggestions accordingly.
- The app must use this logic to surface the next recommended reflection focus.

### FR5: Forma do Ser Visualization
- The app must display a qualitative visualization of the user’s balance across Body, Mind, and Purpose.
- The visualization should reflect presence/intensity without using gamified metrics.
- The app must show imbalance as a deformity in the shape and relative balance as a more regular form.

### FR6: Ephemeral Input Mode
- The app must offer an option to process some inputs without saving the raw content permanently.
- The user must be able to choose a confidential mode for sensitive interruption responses.

### FR7: Consent and Privacy Settings
- The app must explain what behavioral signals are used for interruptions.
- The app must allow users to opt in or out of behavioral detection.
- The app must make it clear which data is stored and which is ephemeral.

### FR8: Multilingual reflective experience *(DASEIN / BMAD Epic 7)*
- The app **must** support **Portuguese (Brazil)** and **English** for all primary user-visible strings across ritual, dialogue, interruption, balance, and navigation.
- Users **must** be able to **switch languages** explicitly; the preference **must persist** locally (aligned with **`dasein_locale`** in `app/src/storageKeys.js`).
- New copy **must** be added to **`app/src/i18n/locales/*.json`** and validated against acceptance criteria for story **7-1**.
- Canonical traceability → `_bmad-output/planning-artifacts/traceability-dasein-bmad.md`.

## 7. Non-Functional Requirements

### NFR1: Usability
- The onboarding flow must be simple and calm, with minimal options at first launch.
- Interaction text must use philosophical, reflective language and avoid productivity jargon.

### NFR2: Privacy
- The app must store only the minimum data needed for the experience.
- Sensitive inner responses must be clearly labeled and optionally treated as ephemeral.

### NFR3: Performance
- Audio capture and prompt generation should complete within a few seconds.
- UI rendering for the Forma do Ser should be smooth and responsive.

### NFR4: Accessibility
- The app should support readable font sizes and accessible contrast.
- Audio and text experiences should both be available for users with different preferences.

### NFR5: Internationalization discipline
- All user-facing strings should live in **resource bundles**, not inlined ad hoc across components (current implementation: **`i18next` + `react-i18next`** under `app/src/i18n/`).
- Fallback language **`pt-BR`** remains the reflective default for the LATAM persona; **`en`** supports secondary adoption and aligns with BMAD English planning artifacts without blocking execution in Portuguese.

## 8. User Journeys

### Journey 1: Morning Presence
1. User opens Ontoapp shortly after waking.
2. The app offers a calm breathing transition.
3. The user records a 20-30 second reflection about how their body feels.
4. Ontoapp generates a tailored prompt based on the audio and invites reflection.
5. The user completes the prompt and sees a Body focus reflected in their Forma do Ser.

### Journey 2: Digital Escape
1. The user is scrolling on the phone and feels distracted.
2. Ontoapp detects an autopilot pattern and offers a gentle interruption.
3. The user chooses a prompt such as "I am avoiding something I feel."
4. The app asks a follow-up question tailored to the chosen avoidance category.
5. The user either engages or defers, and the app logs the resistance.

### Journey 3: Nightly Reflection
1. The user opens Ontoapp in the evening.
2. The app prompts them to write an internal dialogue entry.
3. The user records a text entry that contrasts self-justification with authenticity.
4. The app saves the entry and uses the input to adjust the Mind/Purpose balance.

## 9. Scope

### In scope for MVP
- Morning embodied ritual with audio capture and prompt generation.
- Nightly internal dialogue text entry.
- Lightweight interruption detection and choice-driven prompt.
- Basic Centro de Gravidade focus recommendations.
- Forma do Ser qualitative visualization.
- Privacy controls and ephemeral input options.

### Out of scope for MVP
- Wearable data integration.
- Advanced AI tone analysis beyond simple audio state estimation.
- Social, sharing, or community features.
- Gamified achievements, points, or streaks.

## 10. Assumptions

- Users who want deeper reflection will prefer non-gamified, privacy-respecting experiences.
- A morning embodied ritual can be a compelling entry point even without productivity framing.
- Users will accept lightweight behavioral detection if it is clearly explained and optional.

## 11. Risks

- The interruption feature may feel intrusive if detection is too aggressive.
- Users may not adopt the morning ritual if the experience is not immediately meaningful.
- The Forma do Ser visualization may be misunderstood if it is too abstract.
- Privacy concerns may limit adoption unless controls are transparent and easy.

## 12. Next Steps

- Validate the PRD with a short user interview or feedback round focused on the core ritual and interruption concept.
- Prototype the morning ritual flow and the Forma do Ser visualization.
- Define the minimum behavioral detection heuristics and privacy language.
- Prepare epics and stories based on the MVP requirements in this PRD.
