# Story 4.2: Surface a recommendation card

Status: done

## Story

As a user on the home screen,
I want to see a next recommended focus,
so that I can understand where the app suggests I lean next.

## Acceptance Criteria

1. Given the balance engine has current state, when the home dashboard renders, then it shows a recommendation card for Body, Mind, or Purpose.
2. The card explains why that focus is suggested.
3. The recommendation remains calm, optional, and reflective.

## Tasks / Subtasks

- [x] Design the recommendation card UI for the home screen.
- [x] Implement the recommendation algorithm based on balance engine state.
- [x] Add supporting text that explains the suggestion clearly.
- [x] Ensure the card is not framed as a task or urgency.

## Dev Notes

- Recommendations should feel like invitations, not commands.
- Avoid language that suggests the user is behind or must catch up.
- Provide a gentle explanation of the current balance state.

### Project Structure Notes

- Add this UI component to the home/dashboard module.
- Let the recommendation card consume the balance engine's output.

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
