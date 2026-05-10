# Story 3.1: Detect autopilot behavior

Status: done

## Story

As a user in distraction,
I want the app to recognize when I am likely on autopilot,
so that I can be invited to pause and notice what I am avoiding.

## Acceptance Criteria

1. Given behavior detection is enabled, when the app senses an autopilot pattern, then it presents a lightweight interruption overlay.
2. The interruption overlay does not take over the full screen.
3. The detection feels optional, gentle, and non-invasive.

## Tasks / Subtasks

- [x] Define simple autopilot detection heuristics from available behavioral signals.
- [x] Implement a lightweight detection service with privacy-first safeguards.
- [x] Add the interruption overlay and ensure it is non-disruptive.
- [x] Provide a setting to enable or disable behavior detection.

## Dev Notes

- Behavior detection should rely on local device events or usage signals, not invasive tracking.
- The overlay must not feel mandatory, and the user should be able to dismiss it easily.
- Keep the detection threshold conservative to avoid false positives.

### Project Structure Notes

- Add this behavior detection feature to the core balance or interruption module.
- Ensure privacy settings from the settings module are respected.

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
