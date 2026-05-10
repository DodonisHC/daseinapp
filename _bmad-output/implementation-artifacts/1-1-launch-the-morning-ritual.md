# Story 1.1: Launch the morning ritual

Status: done

## Story

As a reflective user,
I want to begin the morning ritual with a calm introduction,
so that I can arrive in presence without feeling rushed.

## Acceptance Criteria

1. Given the user opens the app in the morning, when the ritual is presented, then the interface shows a calming entry screen with brief instructions.
2. The user can start, pause, or skip the ritual without pressure.
3. The experience uses minimal text and gentle visuals to reduce activation friction.

## Tasks / Subtasks

- [x] Design the ritual landing screen and calm onboarding flow.
- [x] Implement the morning ritual entry view with start/pause/skip controls.
- [x] Ensure the ritual entry uses the app's privacy-first presentation style.
- [x] Add navigation hooks to proceed into the transition and recording phases.

### Review Findings (AI)

- [x] [Review][Patch] Remover `user-scalable=no` do meta viewport (Viola Acessibilidade) [app/index.html]
- [x] [Review][Patch] Substituir `setTimeout` fixo por evento `transitionend` (Evita Race Condition) [app/app.js]
- [x] [Review][Patch] Substituir `height: 100vh` por `100dvh` para resolver overflow no Safari Mobile [app/style.css]
- [x] [Review][Patch] Prevenir múltiplos cliques no botão de "Begin" antes da transição terminar (Edge Case - Múltiplos Listeners) [app/app.js]

## Dev Notes

- The ritual launch screen should feel quiet, warm, and immediate.
- Prefer local UI state and avoid heavy animations that may feel intrusive.
- This story is the first entry point to the morning embodiment flow and should align with UX guidelines in `ux-design-specification.md`.
- Do not treat it like a productivity checklist; use supportive language.

### Project Structure Notes

- Place the screen component under the morning ritual or onboarding module in the mobile app.
- Keep the structure consistent with a mobile-first architecture and local-first data handling.

### References

- Source: `_bmad-output/planning-artifacts/epics-and-stories-ontoapp.md`
- Source: `_bmad-output/planning-artifacts/ux-design-specification.md`
- Source: `_bmad-output/planning-artifacts/prd-ontoapp.md`

## Dev Agent Record

### Agent Model Used

Gemini 3.1 Pro (High) - Amelia (Dev)

### Completion Notes List

- Completed all acceptance criteria using Vanilla HTML/CSS/JS.
- Checked and closed all story tasks/subtasks.
- Created a beautiful, calm CSS layout with Inter/Outfit typography to match the design specifications.
- Implemented smooth local transitions for start/skip actions.
- Story implementation completed and ready for review.

### File List

- app/index.html
- app/style.css
- app/app.js

### Change Log

- 2026-05-10: Implemented the PWA mobile-first view for the morning ritual. Updated status to review.
- 2026-05-10: Executed Code Review, appended 3 patches.
