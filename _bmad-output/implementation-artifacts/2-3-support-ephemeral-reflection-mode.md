# Story 2.3: Support ephemeral reflection mode

Status: done

## Story

As a privacy-conscious user,
I want to process sensitive entries without saving raw content permanently,
so that I can be honest without leaving a permanent record.

## Acceptance Criteria

1. Given the user chooses ephemeral mode, when they submit an entry, then the app processes it transiently and does not persist the raw text.
2. The app clearly labels the entry as ephemeral.
3. The user can still benefit from the reflection flow without stored raw content.

## Tasks / Subtasks

- [x] Implement an ephemeral submission mode for reflection entries.
- [x] Ensure raw text is held only in memory or secure temporary storage.
- [x] Add UI labels to indicate ephemeral versus saved reflection.
- [x] Verify that ephemeral entries do not create persistent history records.

### Review Findings (AI)

- [x] [Review] Clean Pass: A lógica de bloqueio de UI via `isTransitioning` durante os 1.5s de animação previne double-clicks perfeitamente. O sincronismo entre o botão "Close" e o estado vazio do textarea (`.trim() !== ""`) também cobre corretamente espaços em branco e JS resets. Nenhuma vulnerabilidade ou edge case identificado.

## Dev Notes

- This flow must support a privacy-first experience by default.
- Ephemeral mode should be clearly explained and reversible.
- Avoid storing raw text anywhere outside secure temporary scope.
- Use the privacy controls defined in the architecture and UX docs.

### Project Structure Notes

- Add ephemeral mode handling to the reflection service layer.
- Keep state isolated from the saved reflection storage subsystem.

### References

- Source: `_bmad-output/planning-artifacts/epics-and-stories-ontoapp.md`
- Source: `_bmad-output/planning-artifacts/architecture-ontoapp.md`
- Source: `_bmad-output/planning-artifacts/ux-design-specification.md`

## Dev Agent Record

### Agent Model Used

Gemini 3.1 Pro (High) - Amelia (Dev)

### Completion Notes List

- Completed all tasks via dev-story workflow.
- Created "Let it go" button with CSS burn animation.
- Implemented input listeners to show dynamic actions when text is typed.
- Added Privacy Badge for ephemeral session.

### File List

- app/index.html
- app/style.css
- app/app.js

### Change Log

- 2026-05-10: Marked story implementation complete via dev-story workflow.
