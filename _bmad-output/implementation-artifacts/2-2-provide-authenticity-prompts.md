# Story 2.2: Provide authenticity prompts

Status: done

## Story

As a user seeking honest insight,
I want optional prompts that contrast justification and authenticity,
so that I can better identify the stories I am telling myself.

## Acceptance Criteria

1. Given the user has opened the reflection flow, when they request prompt support, then the app offers questions such as "What am I saying to myself right now?"
2. The prompts avoid productivity or judgmental language.
3. Prompt support is clearly optional and presented gently.

## Tasks / Subtasks

- [x] Design an optional prompt helper panel or card.
- [x] Implement prompt generation with a small set of carefully worded questions.
- [x] Add a control to reveal/hide prompts so the user stays in control.
- [x] Ensure prompt wording is aligned with the product tone and avoids pressure.

### Review Findings (AI)

- [x] [Review][Patch] Melhorar UX do Shuffle: O `Math.random()` pode selecionar a mesma pergunta consecutivamente, fazendo o botão "Shuffle" parecer quebrado. Necessário evitar repetição direta. [app/app.js]
- [x] [Review][Patch] Vazamento de Estado: Ao fechar a Reflexão Noturna com o Helper Card aberto, ele continuará aberto na próxima vez que a tela for acessada. O estado visual deve ser resetado ao clicar em "Close". [app/app.js]

## Dev Notes

- Prompts should be simple, grounded, and focused on self-awareness.
- Do not include suggestions that sound like tasks, habits, or goals.
- The prompt helper must not interrupt the reflection flow.

### Project Structure Notes

- Keep prompt support as a companion component in the reflection module.
- Use the same styling system as the dialogue flow for visual consistency.

### References

- Source: `_bmad-output/planning-artifacts/epics-and-stories-ontoapp.md`
- Source: `_bmad-output/planning-artifacts/ux-design-specification.md`

## Dev Agent Record

### Agent Model Used

Gemini 3.1 Pro (High) - Amelia (Dev)

### Completion Notes List

- Completed all acceptance criteria and implementation tasks.
- Card UI relies on glassmorphism to look integrated but floaty.
- Prompt array curated to avoid productivity language.

### File List

- app/index.html
- app/style.css
- app/app.js

### Change Log

- 2026-05-10: Marked story implementation complete via dev-story workflow.
