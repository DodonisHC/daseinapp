Sprint 01 Plan — Ontoapp
Date: 2026-05-10
Sprint length: 2 weeks (2026-05-11 → 2026-05-24)
Sprint goal: Deliver core Morning Ritual and Internal Dialogue flows to enable the first in-app ritual experience and basic reflection capture.

Selected stories (priority order):
1. 1-1-launch-the-morning-ritual — Owner: TBD — Estimate: 3d — Status: ready-for-dev
2. 1-2-guide-a-breathing-attention-transition — Owner: TBD — Estimate: 2d — Status: ready-for-dev
3. 1-3-capture-audio-and-generate-a-prompt — Owner: TBD — Estimate: 3d — Status: ready-for-dev
4. 2-1-open-internal-dialogue-flow — Owner: TBD — Estimate: 3d — Status: ready-for-dev
5. 2-2-provide-authenticity-prompts — Owner: TBD — Estimate: 2d — Status: ready-for-dev

Scope notes:
- Core MVP: ritual entry, breathing transition, 20-30s audio capture, local prompt generation fallback, basic reflection text entry with prompt library.
- Exclude for Sprint 01: interruption heuristics (Epic 3), balance engine visualizations (Epic 4), advanced privacy visualizations (Epic 5).

Acceptance criteria (Sprint-level):
- User can complete a morning ritual flow end-to-end (entry → breathing → audio capture → generated prompt) on-device.
- Reflection entry supports prompt suggestions and ephemeral toggle.
- All selected stories meet their story-level acceptance criteria as written in _bmad-output/implementation-artifacts (stories).

Risks & Mitigations:
- Audio capture variability: include retry + clear guidance on microphone placement.
- Prompt generation latency: use local heuristics first, cloud fallback if enabled.
- Device compatibility: test on iPhone 11 / Galaxy A51 early in QA.

Next steps:
- Assign owners and confirm estimates (today)
- Create tasks in issue tracker and link to each story file
- Schedule sprint kickoff meeting (2026-05-11)

Artifacts:
- sprint-status.yaml (updated)
- Selected story files: _bmad-output/implementation-artifacts/1-1-launch-the-morning-ritual.md, etc.

Prepared by: bmad sprint-planning agent
