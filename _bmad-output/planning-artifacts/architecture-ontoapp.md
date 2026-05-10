---
stepsCompleted: []
inputDocuments:
  - _bmad-output/planning-artifacts/prd-ontoapp.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
  - _bmad-output/planning-artifacts/product-brief-ontoapp.md
  - _bmad-output/planning-artifacts/prfaq-ontoapp.md
  - _bmad-output/planning-artifacts/ontoapp-research-report-2026-05-10.md
workflowType: 'architecture'
project_name: 'Ontoapp'
user_name: 'BMad Analyst'
date: '2026-05-10'
---

# Architecture Decision Document - Ontoapp

**Author:** BMad Architect
**Date:** 2026-05-10

## 1. Purpose

This architecture document defines the system and technical decisions needed to realize Ontoapp as a privacy-first, non-gamified mobile reflection experience. It translates the product vision, UX design, and PRD into a layered architecture that supports embodied rituals, interruption detection, balance visualization, and optional ephemeral input handling.

## 2. Inputs

The following planning artifacts were used as the primary input set:
- PRD: `_bmad-output/planning-artifacts/prd-ontoapp.md`
- UX design specification: `_bmad-output/planning-artifacts/ux-design-specification.md`
- Product brief: `_bmad-output/planning-artifacts/product-brief-ontoapp.md`
- PRFAQ: `_bmad-output/planning-artifacts/prfaq-ontoapp.md`
- Research report: `_bmad-output/planning-artifacts/ontoapp-research-report-2026-05-10.md`

## 3. Architectural Principles

- Privacy-first: minimize personal data collection, keep sensitive content local or ephemeral, and make tracking explicit and optional.
- Mobile-first: the core experience must feel native, responsive, and available on the device used for daily reflection.
- Offline-capable core: the ritual and reflection flows should work without continuous connectivity; external services are optional for advanced prompt generation and analytics.
- Non-gamified design: architecture must avoid support for reward-driven state or persistent scoring systems.
- Adaptive focus: support a runtime engine that evaluates Body, Mind, and Purpose state and adjusts guidance without hard-coded workflow sequences.

## 4. System Overview

Ontoapp is best realized as a mobile client with a lightweight backend for optional cloud services. The core architecture contains three layers:

1. Client layer: mobile UI and local runtime for audio capture, reflection entry, interruption prompts, and visualization.
2. Domain layer: balance engine, ritual orchestration, privacy manager, and state handling.
3. Service layer: optional backend for prompt generation, analytics, remote configuration, and secure storage of user consent settings.

## 5. Component Breakdown

### 5.1 Mobile Client

- Ritual UI module
  - Morning embodied ritual flow
  - Audio capture interface
  - Prompt presentation
- Reflection capture module
  - Nightly internal dialogue entry
  - Ephemeral mode toggle
- Interruption module
  - Trigger overlay
  - Choice-driven prompt flow
- Visualization module
  - Forma do Ser rendering
  - Centro de Gravidade summary
- Settings and privacy module
  - Behavioral detection consent
  - Data retention controls

### 5.2 Local Domain Services

- Balance engine
  - Tracks input types across Body, Mind, Purpose
  - Generates focus recommendations
- Privacy manager
  - Enforces ephemeral mode rules
  - Controls local data storage and deletion
- Ritual orchestration
  - Defines transition phases and guide states
  - Coordinates audio capture and prompt generation
- Behavior detection engine
  - Uses lightweight heuristics for autopilot patterns
  - Produces soft interruption triggers

### 5.3 Backend / Cloud Services

- Prompt service
  - Accepts minimal context from client
  - Generates personalized reflection prompts
  - Can optionally run on a private cloud or serverless environment
- Analytics and usage service
  - Collects only anonymized adoption metrics if consented
  - Tracks onboarding completion and feature use without user-level profiling
- Remote configuration
  - Allows tuning of interruption sensitivity and prompt templates

### 5.4 Data Storage

- Local persistence
  - User settings and consent choices
  - Non-ephemeral reflection entries
  - Balance state metadata
- Ephemeral handling
  - Temporary processing of sensitive input
  - Clear-after-use or session-only storage when requested
- Optional backend store
  - If used, only stores consented, anonymized telemetry and optional prompt metadata

## 6. Data Flow

### Morning Ritual

1. User launches ritual flow.
2. Client records brief audio locally.
3. Local audio features are computed to determine presence and tone.
4. Client sends only derived context (not raw audio) to prompt service if cloud generation is enabled.
5. Prompt service returns a tailored prompt.
6. Client displays prompt and updates local balance state to reflect Body focus.

### Internal Dialogue Capture

1. User writes or edits text entry.
2. User chooses save or ephemeral processing.
3. If ephemeral, text is analyzed locally or transiently processed and then discarded.
4. If saved, entry is stored locally with metadata and used by the balance engine to update Mind/Purpose state.

### Existential Interruption

1. Behavior engine detects autopilot patterns using device state and app context.
2. Client displays a lightweight prompt overlay.
3. User engages or defers.
4. Response is logged locally and influences the next recommended focus.

## 7. Technical Decisions

### Decision 1: Cross-platform mobile client

Ontoapp should use a cross-platform framework such as React Native or Flutter for mobile delivery. This approach enables faster iteration, consistent UX, and broad device coverage while still allowing access to native audio capture and local storage.

### Decision 2: Local-first experience with optional cloud services

The app’s core reflection, ritual, and balance experience must function without network dependency. Cloud services are optional for advanced prompt generation and remote tuning.

### Decision 3: Minimal signal sharing

Architect the client to send only derived context and metadata for optional prompt generation. Raw audio and private reflection text should remain local unless the user explicitly opts in to remote processing.

### Decision 4: Privacy boundary enforcement

Implement a clear boundary between ephemeral and persisted content. The privacy manager must control whether entries remain local-only, whether they are deleted on session end, and whether analytics are forwarded.

### Decision 5: Modular balance engine

Build the Centro de Gravidade as a standalone module that can consume input events and produce focus recommendations. This keeps the user experience adaptive and decouples UI rendering from decision logic.

## 8. Architecture Patterns

- Clean architecture / layered boundaries for UI, domain, and infrastructure.
- Local-first data handling with explicit sync gates.
- Component-based UI for ritual, interruption, and visualization flows.
- Event-driven state updates for the balance engine.

## 9. Security and Privacy Considerations

- Encrypt local storage where sensitive reflection data is retained.
- Avoid storing raw audio in permanent storage.
- Provide explicit consent toggles before any behavioral detection or analytics are enabled.
- Document what is collected, why it is collected, and how it is used.

## 10. Risks

- Cloud-based prompt generation may undermine the privacy promise if not handled transparently.
- Autopilot detection may feel intrusive if triggers are too sensitive.
- The Forma do Ser visualization may be misinterpreted without clear explanatory text.
- Offline capability adds complexity if prompt generation is expected to be fully available.

## 11. Next Steps

1. Confirm the selected mobile technology stack (React Native, Flutter, or native).
2. Define the concrete API contract for optional prompt generation.
3. Create the detailed component and module design for the balance engine and privacy manager.
4. Translate this architecture into epics and implementation stories.

---

## 12. Localization (internationalisation)

Aligned with PRD **FR8 / NFR5** and **BMAD Epic 7** (`_bmad-output/implementation-artifacts/7-1-multilingual-ui-and-bmad-traceability.md`).

### Client responsibilities

| Concern | Implementation (web reference client **DASEIN**) |
|---------|---------------------------------------------------|
| Resource bundles | `app/src/i18n/locales/pt-BR.json`, `app/src/i18n/locales/en.json` |
| Runtime | **`i18next`** + **`react-i18next`** (`app/src/i18n/config.js`) |
| Language selection | **`LanguageSwitcher`** component; persists **`dasein_locale`** |
| Semantic HTML locale | **`document.documentElement.lang`** updates on **`languageChanged`** |
| Fallback | **`pt-BR`** when navigator/storage does not specify a supported code |

Domain keys (`morning_ritual`, `interruption_response`, etc.) remain **language-agnostic** in `localStorage` metadata—only displayed copy varies by locale.

## Appendix: Candidate Architecture Diagram

- Mobile client
  - Ritual UI
  - Reflection UI
  - Interruption UI
  - Visualization UI
  - Localization / i18n resources **(bundles + switch + persistence)**  
  - Local balance engine
  - Privacy manager
- Optional backend
  - Prompt generation service
  - Analytics/telemetry service
  - Remote configuration service

Data boundaries:
- Local-only: raw reflection text, consent settings, balance metadata
- Optional remote: derived prompt context, anonymized usage metrics
