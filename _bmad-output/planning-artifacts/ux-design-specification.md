---
stepsCompleted: []
inputDocuments:
  - _bmad-output/planning-artifacts/prd-ontoapp.md
  - _bmad-output/planning-artifacts/product-brief-ontoapp.md
  - _bmad-output/planning-artifacts/prfaq-ontoapp.md
workflowType: 'ux-design'
---

# UX Design Specification - Ontoapp

**Author:** BMad UX Designer
**Date:** 2026-05-10

## 1. Design Intent

Ontoapp is designed to feel calm, honest, and grounded. The UX must help users move out of autopilot without adding pressure, reward mechanics, or performance anxiety.

The product should feel like a reflective companion: quiet when the user is quiet, gently present when the user is distracted, and clear when the user needs direction.

## 2. UX Principles

- Presence over action: design for noticing, not doing.
- No gamification: avoid streaks, points, badges, or progress bars that imply performance.
- Soft invitation: prompts should feel like questions from a trusted guide, not alerts from an algorithm.
- Privacy by design: make data handling visible, optional, and easy to control.
- Balance as a feeling: the Forma do Ser should express integration through shape and rhythm, not through numeric scores.

## 3. Target Users

### Primary Persona
- Reflective seeker who already practices mindfulness, journaling, or philosophy.
- Wants a product that helps them catch themselves living on autopilot.
- Prefers subtle guidance to overt self-optimization.

### Secondary Persona
- Early adopter of wellness apps looking for an alternative to gamified trackers.
- Values privacy and thoughtful language over flashy visuals.

## 4. Core UX Experiences

### 4.1 Morning Embodied Ritual

Goal: Establish the app as a presence-building ritual, not a task.

Key elements:
- A calm onboarding screen that explains the ritual in plain language.
- A short breathing or body-awareness phase before voice capture.
- A simple audio recording interface with a single clear action.
- A personalized reflection prompt generated from the audio experience.

Design notes:
- Use breathing motion, soft gradients, and minimal text.
- Avoid timers with visible countdowns; instead, use progress metaphors like "settle in".
- Allow the user to pause or skip without guilt.

### 4.2 Internal Dialogue Capture

Goal: Give users a safe place to surface their inner argument without judgment.

Key elements:
- A nightly reflection screen with a gentle introduction.
- Prompt templates that emphasize authenticity over correctness.
- A text entry field that feels spacious and unpressured.
- A confirmation step that reinforces the choice to share or keep the entry ephemeral.

Design notes:
- Label the flow as "Internal Dialogue" or "Honest Reflection", not "Journal".
- Provide optional prompts such as "What am I saying to myself right now?" and "Where is my thinking trying to protect me?"
- Use soft affordances for text entry: large line height, muted placeholder text, and generous margins.

### 4.3 Existential Interruption

Goal: Interrupt autopilot gently and invite the user to name avoidance.

Key elements:
- A lightweight trigger overlay appearing during detected distraction.
- Two or three non-judgmental prompt choices.
- A follow-up screen that asks the user to choose between engaging or deferring.
- A record of the choice that feeds the Centro de Gravidade.

Design notes:
- Keep the interruption small and optional, never interrupt with a full-screen takeover.
- Offer an easy "Not now" option.
- Messages should be framed as invitations: "Notice this moment. What are you avoiding?"

### 4.4 Centro de Gravidade

Goal: Surface the app’s adaptive focus across Body, Mind, and Purpose.

Key elements:
- A dashboard summary showing which pillar has been active and which needs gentle attention.
- A recommendation card for the next reflection area.
- A short explanation of why the app is suggesting the current focus.

Design notes:
- Use the three pillars as the main navigation or filter labels.
- Avoid binary good/bad language. Use phrases like "more presence in Body" or "a gentle invitation toward Purpose."

### 4.5 Forma do Ser Visualization

Goal: Make balance visible without converting it into a score.

Key elements:
- A radial or shape-based visualization of Body, Mind, and Purpose.
- Imbalance represented as irregular form and integration represented as smooth, rounded shape.
- A brief caption explaining the visual metaphor.

Design notes:
- Use subtle colors and organic lines.
- Do not show percentages or numeric axis labels.
- Provide a small legend and a one-sentence interpretation of the current shape.

## 5. Information Architecture

### Primary Screens

1. Home / Balance Dashboard
2. Morning Ritual
3. Reflection Capture
4. Interruption Prompt
5. Forma do Ser
6. Privacy & Settings

### Navigation

- The home screen is the central hub, with the current balance summary and the next suggested action.
- Primary navigation tabs allow quick access to Ritual, Reflection, and Balance.
- A persistent privacy/settings access point is available from the home screen.

## 6. Interaction Flows

### Flow 1: Morning Ritual

1. User opens Ontoapp.
2. Home screen invites them to begin the morning practice.
3. User taps "Begin ritual".
4. App leads a short calm preparation phase.
5. User records a brief audio reflection.
6. App generates and displays a personalized prompt.
7. User reads the prompt and optionally writes or reflects silently.
8. App updates the Body/Mind/Purpose balance.

### Flow 2: Existential Interruption

1. App detects a distraction pattern.
2. A small overlay appears with a soft prompt.
3. User chooses whether to engage or defer.
4. If engaged, user selects what they may be avoiding.
5. App offers a follow-up question and logs the interaction.
6. App adjusts the next recommended focus if needed.

### Flow 3: Nightly Reflection

1. User chooses "Internal Dialogue" from the home screen.
2. App offers an opening invitation.
3. User enters their reflection in a text field.
4. App asks whether to save it or keep it ephemeral.
5. App records the response and uses it to inform the Mind/Purpose balance.

## 7. UI Patterns and Tone

- Headings and labels should be calm, supportive, and clear.
- Buttons should use gentle verbs: "Begin", "Notice", "Write", "Choose", "Keep private".
- Avoid jargon like "tasks", "goals", "score", "achievement".
- Use whitespace intentionally to make the experience feel spacious.
- Use tactile micro-interactions for transitions rather than loud animations.

## 8. Privacy and Control

- Provide a dedicated privacy settings screen.
- Clearly explain which signals are used for interruption detection.
- Allow users to opt out of behavioral detection while still using core rituals.
- Offer a mode for ephemeral reflections that are processed but not stored.

## 9. Accessibility

- Use readable font sizes and high-contrast text.
- Support both audio and text entry in core flows.
- Ensure focus order is logical for screen reader users.
- Label interactive elements clearly and avoid ambiguous icons.

## 10. Validation Strategy

- Prototype the morning ritual and test with 3-5 users who are familiar with mindfulness but wary of gamification.
- Observe whether users understand the Forma do Ser without numeric labels.
- Validate that the interruption prompt feels inviting rather than intrusive.
- Confirm that privacy language is clear and not buried.

## 11. UX Risks

- The ritual may feel too abstract without a strong opening explanation.
- The Forma do Ser may be misunderstood if the metaphor is not explained simply.
- The interruption may feel intrusive if it appears too often or too loudly.
- Privacy controls may be ignored if they are not easy to access.

## 12. Next UX Tasks

- Build a low-fidelity prototype for the home dashboard and morning ritual.
- Test the Forma do Ser visualization with users to confirm its readability.
- Define the exact wording for interruption and reflection prompts.
- Align the final UI with the anti-gamification and privacy-first principles.
