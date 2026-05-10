---
title: DASEIN — traceabilidade código ↔ BMAD
date: '2026-05-11'
locale_policy: Reflective UX em pt-BR (primário) + en (secundário)
---

# Traceabilidade DASEIN ↔ fluxo BMAD

Este ficheiro **amarra** a implementação ao pipeline BMAD (`_bmad/`, `_bmad-output/`) quando o utilizador trabalha ritos de reflexão sob a marca **DASEIN**.

## Mapa rápido

| Camada BMAD | Artefacto | Ligação ao código (`app/`) |
|-------------|-----------|----------------------------|
| PRD | `planning-artifacts/prd-ontoapp.md` **FR8 / NFR5** | `src/i18n/locales/*.json`, sem strings hardcoded nos componentes primários |
| Arquitetura | `planning-artifacts/architecture-ontoapp.md` **§12** | `src/i18n/config.js`, `LanguageSwitcher.jsx`, `LOCALE_STORAGE_KEY` |
| Épicos & histórias | `planning-artifacts/epics-and-stories-ontoapp.md` **Epic 7** | funcionalidades listadas aqui devem gerar/atualizar story sob `implementation-artifacts/` |
| Sprint | `implementation-artifacts/sprint-status.yaml` | estado **epic-7**, story **7-1** ↔ PR em curso ou review |
| Story executável | `implementation-artifacts/7-1-multilingual-ui-and-bmad-traceability.md` | critérios de aceite verificados via `npm test` + Playwright onde aplicável |

## Nome do produto

Documentos históricos usam **Ontoapp**; o cliente web actual chama-se **DASEIN**. Ao criar novo material BMAD, incluir linha explícita *“Ontoapp (legado nominal) → DASEIN (marca)”* ou renomear ficheiros numa iniciativa posterior de PM.

## Quando atualizar esta matriz

- Novo requisito de reflexão/copy → actualizar PRD (**FR**/ **NFR**) **e** ficheiros `locales/*.json`.
- Novo comportamento técnico (detector, storage, i18n) → actualizar Architecture e **esta** página.
- Qualquer mudança de stack i18n → Architecture §12 + esta tabela.

## Comandos de verificação (dev)

Na pasta `app/`: `npm run lint`, `npm test`, `npm run build`. Para E2E, servidor em `5173`, depois `npx playwright test`.
