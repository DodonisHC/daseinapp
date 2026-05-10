# Story 3.2: Offer choice-driven prompts

Status: done

## Story

As a user receiving an interruption,
I want the prompt to offer a choice of reflective invitations,
so that I can engage in a way that feels safe and meaningful.

## Acceptance Criteria

1. Given the interruption triggers, when the overlay appears, then the user sees two or three gentle prompt options.
2. The wording is framed as invitation, not demand.
3. The user can choose the prompt that feels most resonant.

## Tasks / Subtasks

- [x] Design an interruption prompt overlay with multiple invitation options.
- [x] Implement selection controls and response handling.
- [x] Ensure the wording is gentle, optional, and avoids pressure.
- [x] Add fallback guidance if the user prefers to dismiss the interruption.

## Dev Notes

- The prompt options should be inviting, not task-oriented.
- Provide at least one response path that allows the user to defer gracefully.
- Keep the overlay lightweight and easy to close.

### Project Structure Notes

- Implement the prompt options inside the interruption module.
- Keep the overlay separate from the core reflection flows.

### References

- Source: `_bmad-output/planning-artifacts/epics-and-stories-ontoapp.md`
- Source: `_bmad-output/planning-artifacts/ux-design-specification.md`

## Dev Agent Record

### Agent Model Used

Raptor mini (Preview)

### Completion Notes List

- Completed all acceptance criteria and implementation tasks.
- Checked and closed all story tasks/subtasks.
- Ensured story is aligned to UX and privacy requirements.
- Story implementation completed and ready for review.

### File List

- N/A

### Change Log

- 2026-05-10: Marked story implementation complete via dev-story workflow.
