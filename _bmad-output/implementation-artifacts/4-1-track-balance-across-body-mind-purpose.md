# Story 4.1: Track balance across Body, Mind, Purpose

Status: done

## Story

As a user exploring integration,
I want the app to track my inputs across the three pillars,
so that it can identify which area needs more attention.

## Acceptance Criteria

1. Given the user completes ritual, reflection, or interruption inputs, when the app processes the event, then it categorizes the input into Body, Mind, or Purpose.
2. The app updates the balance engine accordingly.
3. The categorization supports future recommendation and visualization logic.

## Tasks / Subtasks

- [x] Define the Body/Mind/Purpose classification model for input events.
- [x] Implement balance engine state updates from categorized inputs.
- [x] Ensure the engine stores only aggregate balance signals, not raw content.
- [x] Add unit tests for classification and update behavior.

## Dev Notes

- Balance tracking should be qualitative, not numeric scoring.
- Use the balance model to support recommendations and the Forma do Ser visualization.
- Keep the data flow local-first and privacy-safe.

### Project Structure Notes

- Implement the balance engine as a dedicated service component.
- Keep classification rules modular for later tuning.

### References

- Source: `_bmad-output/planning-artifacts/epics-and-stories-ontoapp.md`
- Source: `_bmad-output/planning-artifacts/architecture-ontoapp.md`

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
