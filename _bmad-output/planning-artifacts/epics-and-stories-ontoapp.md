---
stepsCompleted: []
inputDocuments:
  - _bmad-output/planning-artifacts/prd-ontoapp.md
  - _bmad-output/planning-artifacts/ux-design-specification.md
  - _bmad-output/planning-artifacts/architecture-ontoapp.md
  - _bmad-output/planning-artifacts/product-brief-ontoapp.md
  - _bmad-output/planning-artifacts/prfaq-ontoapp.md
workflowType: 'epics-and-stories'
---

# Ontoapp - Epic Breakdown

## Overview

This document decomposes Ontoapp’s MVP requirements into epics and user stories. It is grounded in the PRD, UX design, architecture, and product brief so the team can move directly into implementation planning.

## Requirements Inventory

### Functional Requirements

- FR1: Morning ritual flow with guided audio presence exercise.
- FR2: Nightly internal dialogue capture with authenticity prompts.
- FR3: Gentle existential interruption for autopilot/digital escape.
- FR4: Centro de Gravidade focus engine across Body, Mind, Purpose.
- FR5: Forma do Ser qualitative balance visualization.
- FR6: Optional ephemeral input mode for sensitive content.
- FR7: Consent and privacy settings with opt-in/opt-out controls.

### NonFunctional Requirements

- NFR1: Simple, calm onboarding and reflective language.
- NFR2: Minimal data storage and clear privacy handling.
- NFR3: Fast audio capture and prompt generation.
- NFR4: Accessible typography, contrast, audio and text flows.

### Additional Requirements

- No gamification: avoid streaks, points, badges, or progress metrics.
- Mobile-first experience with offline-capable core functionality.
- Balance as a feeling, not a score.
- Soft invitation model for all prompts and interruptions.

### UX Design Requirements

- Calm, spacious interface with gentle verbs and soft language.
- Clear distinction between internal dialogue and journaling.
- Lightweight interruption overlay that is optional and non-intrusive.
- Balance visualization that uses organic shape rather than numbers.
- Explicit privacy controls and an ephemeral input mode.
- Simple home dashboard with next recommended focus.

### FR Coverage Map

- FR1 → Epic 1: Morning Embodied Ritual
- FR2 → Epic 2: Internal Dialogue Capture
- FR3 → Epic 3: Existential Interruption
- FR4 → Epic 4: Balance Engine & Recommendations
- FR5 → Epic 4: Forma do Ser Visualization
- FR6 → Epic 5: Privacy, Consent, and Data Handling
- FR7 → Epic 5: Privacy, Consent, and Data Handling

## Epic List

- Epic 1: Morning Embodied Ritual
- Epic 2: Internal Dialogue Capture
- Epic 3: Existential Interruption
- Epic 4: Balance Engine & Forma do Ser Visualization
- Epic 5: Privacy, Consent, and Trust

## Epic 1: Morning Embodied Ritual

Provide a calm, device-native morning ritual that helps users arrive in their body, record a brief audio reflection, and receive a personalized prompt.

### Story 1.1: Launch the morning ritual

As a reflective user,
I want to begin the morning ritual with a calm introduction,
So that I can arrive in presence without feeling rushed.

**Acceptance Criteria:**
- **Given** the user opens the app in the morning,
- **When** the ritual is presented,
- **Then** the interface shows a calming entry screen with brief instructions.
- **And** the user can start, pause, or skip without pressure.

### Story 1.2: Guide a breathing/attention transition

As a user preparing for reflection,
I want a short breathing or attention-focused transition before recording,
So that I can settle into the experience before speaking.

**Acceptance Criteria:**
- **Given** the ritual has started,
- **When** the transition phase begins,
- **Then** the app guides the user through a brief breath/body awareness step.
- **And** the audio recording does not begin until the transition ends.

### Story 1.3: Capture audio and generate a prompt

As a user completing the ritual,
I want the app to record a short audio segment and turn it into a reflection prompt,
So that I can move from presence to meaningful reflection.

**Acceptance Criteria:**
- **Given** the user has completed the transition,
- **When** they record the audio,
- **Then** the app captures the audio locally.
- **And** the app uses derived context to generate a tailored prompt.
- **And** the prompt is displayed in a calm, supportive format.

## Epic 2: Internal Dialogue Capture

Create a nightly reflection flow that invites honest internal dialogue, preserves thoughtful language, and supports ephemeral confidentiality.

### Story 2.1: Open internal dialogue flow

As a nightly user,
I want to open an internal dialogue capture screen,
So that I can articulate my present thinking without it feeling like a journal.

**Acceptance Criteria:**
- **Given** the user chooses reflection,
- **When** the internal dialogue flow opens,
- **Then** the app introduces the experience as honest reflection.
- **And** the text entry field is spacious and low-pressure.

### Story 2.2: Provide authenticity prompts

As a user seeking honest insight,
I want optional prompts that contrast justification and authenticity,
So that I can better identify the stories I am telling myself.

**Acceptance Criteria:**
- **Given** the user has opened the reflection flow,
- **When** they request prompt support,
- **Then** the app offers questions such as "What am I saying to myself right now?"
- **And** those prompts avoid productivity or judgmental language.

### Story 2.3: Support ephemeral reflection mode

As a privacy-conscious user,
I want to process sensitive entries without saving raw content permanently,
So that I can be honest without leaving a permanent record.

**Acceptance Criteria:**
- **Given** the user chooses ephemeral mode,
- **When** they submit an entry,
- **Then** the app processes it transiently and does not persist the raw text.
- **And** the app clearly labels the entry as ephemeral.

### Story 2.4: Store reflection metadata

As a user tracking my reflection habits,
I want my saved entries to include timestamps,
So that the app can correlate them with balance state over time.

**Acceptance Criteria:**
- **Given** the user saves a reflection,
- **When** the entry commits,
- **Then** the app records the date/time metadata.
- **And** the metadata is used by the balance engine, not shown as gamified history.

## Epic 3: Existential Interruption

Offer a gentle, optional interruption during autopilot moments that invites the user to notice avoidance without feeling intrusive.

### Story 3.1: Detect autopilot behavior

As a user in distraction,
I want the app to recognize when I am likely on autopilot,
So that I can be invited to pause and notice what I am avoiding.

**Acceptance Criteria:**
- **Given** behavior detection is enabled,
- **When** the app senses an autopilot pattern,
- **Then** it presents a lightweight interruption overlay.
- **And** it does not take over the full screen.

### Story 3.2: Offer choice-driven prompts

As a user receiving an interruption,
I want the prompt to offer a choice of reflective invitations,
So that I can engage in a way that feels safe and meaningful.

**Acceptance Criteria:**
- **Given** the interruption triggers,
- **When** the overlay appears,
- **Then** the user sees two or three gentle prompt options.
- **And** the wording is framed as invitation, not demand.

### Story 3.3: Record engagement or deferral

As a user responding to an interruption,
I want the app to log whether I engage or defer,
So that the balance engine can learn from my resistance.

**Acceptance Criteria:**
- **Given** the user responds to the prompt,
- **When** they choose engage or defer,
- **Then** the app records the choice locally.
- **And** the response influences future focus recommendations.

## Epic 4: Balance Engine & Forma do Ser Visualization

Translate the user’s interactions into a Body/Mind/Purpose balance model, then surface that balance with a qualitative visualization and recommendation engine.

### Story 4.1: Track balance across Body, Mind, Purpose

As a user exploring integration,
I want the app to track my inputs across the three pillars,
So that it can identify which area needs more attention.

**Acceptance Criteria:**
- **Given** the user completes ritual, reflection, or interruption inputs,
- **When** the app processes the event,
- **Then** it categorizes the input into Body, Mind, or Purpose.
- **And** it updates the balance engine accordingly.

### Story 4.2: Surface a recommendation card

As a user on the home screen,
I want to see a next recommended focus,
So that I can understand where the app suggests I lean next.

**Acceptance Criteria:**
- **Given** the balance engine has current state,
- **When** the home dashboard renders,
- **Then** it shows a recommendation card for Body, Mind, or Purpose.
- **And** it explains why that focus is suggested.

### Story 4.3: Display the Forma do Ser

As a user reviewing my balance,
I want a qualitative shape visualization,
So that I can sense my current integration without seeing numeric scores.

**Acceptance Criteria:**
- **Given** the user views the balance screen,
- **When** the visualization renders,
- **Then** it shows a shape whose regularity reflects balance.
- **And** it includes a short interpretive caption.

## Epic 5: Privacy, Consent, and Trust

Build trust through transparent settings, explicit consent, and clear control over data retention.

### Story 5.1: Present privacy and consent settings

As a privacy-conscious user,
I want a dedicated settings screen for behavioral detection and data handling,
So that I can control what is collected and when.

**Acceptance Criteria:**
- **Given** the user opens settings,
- **When** they review privacy options,
- **Then** the app explains interruption detection and data storage clearly.
- **And** the user can turn detection on or off.

### Story 5.2: Explain storage vs ephemeral handling

As a user deciding how honest to be,
I want the app to explain what is saved and what is ephemeral,
So that I can choose the right mode for each reflection.

**Acceptance Criteria:**
- **Given** the user selects reflection mode,
- **When** the app displays the option,
- **Then** it clearly states whether raw content will be stored.
- **And** ephemeral entries are labeled as temporary.

### Story 5.3: Support low-data core operation

As a user who opts out of tracking,
I want the core app features to still work,
So that I can use Ontoapp without behavioral detection enabled.

**Acceptance Criteria:**
- **Given** behavioral detection is disabled,
- **When** the user opens the app,
- **Then** the morning ritual, reflection capture, and Forma do Ser still function.
- **And** the app does not prompt for behavioral signal consent again unless requested.

## Implementation Notes

- The epics are organized around the core user-facing flows: ritual, reflection, interruption, balance, and privacy.
- Acceptance criteria focus on calm, optional, privacy-first interaction, consistent with the product principles.
- This breakdown is ready for further decomposition into implementation tasks and sprint planning.
