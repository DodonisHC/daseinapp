# AGENTS — orientação para assistentes/automações

Este ficheiro descreve **com onde trabalhar**, **como validar**, e **limites esperados** para agentes ou automações que toquem neste repositório. É orientação operacional; não substitui requisitos negociais externos.

---

## Âmbito pré-definido

- **Alterações de código de produto**: em geral apenas em **`app/src`**, **`app/index.html`**, **`app/README.md`** (docs da SPA), **`app/vite.config.js`**, **`app/vitest.config.js`**, **`app/eslint.config.js`**, e testes sob **`app/src/**/__tests__/**`**, **`app/src/*.test.js`**, ou **`app/tests/`**.
- **`app-vanilla/`**: tratado como **protótipo**; não mover lógica de negócio para lá nem duplicar fluxos React sem decisão explícita do proprietário do repo.
- **`.claude/`**, **`_bmad/`**, **`_bmad-output/`**, **`.agents/`**: conteúdo de metodologia/templates; só editar quando a tarefa for explicitamente sobre esses artefactos.

---

## Stack e convenções

| Área | Escolha no repo |
|------|----------------|
| Framework UI | React 19, JSX |
| Bundler / dev | Vite 8, `@vitejs/plugin-react` |
| Estilo código | ESLint flat config (`eslint.config.js`) |
| Testes rápidos | Vitest + jsdom + Testing Library |

Convenções práticas:

- Preferir **hooks** (`use*` em `src/hooks/`) para I/O repetível (ex.: storage).
- Vistas compostas sob **`components/views/`**; elementos reutilizáveis sob **`components/ui/`**.
- Evitar aumentar dependências sem necessidade; o produto atual é deliberadamente leve (`react`, `react-dom`, `lucide-react`).

---

## Contratos que não devem ser partidos inadvertidamente

1. **`localStorage`**: canónicas **`dasein_metadata`** e **`dasein_content`** (definidas em **`app/src/storageKeys.js`**). Existiram chaves **`ontoapp_*`** herdadas — a entrada da app corre **`migrateOntoKeysToDasein()`** antes do render (**`main.jsx`**). Ao mudar formato, atualizar migração/compat e testes; não regressar dados de utilizadores sem plano explícito.
2. **`type` nos metadados**: valores como **`morning_ritual`**, **`nightly_reflection`**, **`interruption_response`** são consumidos por **`useBalance`**. Alterar semantics sem atualizar esse agregador quebra métricas de balance card.
3. **E2E Playwright**: specs em `tests/e2e/` assumem **copy** específico em **pt-BR** (ex.: *“Chegue ao seu corpo.”*) e porta **5173**. Ajustes de copy ou base URL obrigam a atualizar testes ou a introduzir uma config estável (`playwright.config` + `baseURL`).

---

## Estado conhecido (não regressar ignorando)

- **`useBalance`** recalcula no mount (`useEffect([])`); após regressar a um fluxo sem reload, os números podem ficar **desatualizados** até haver novo mount ou refactor explícito. Não declarar esse comportamento como “bug novo” ao introduzir outra regressão paralela sem verificar causa raiz.

---

## Checklist antes de propor merge

Executar sob **`app/`**:

```bash
npm run lint
npm test
npm run build
```

Para alterações tocando fluxos navegacionais/copy: atualizar **`app/tests/e2e/`** quando aplicável ou documentar porque o Playwright ficou opcional/desatualizado.

---

## Segurança e dados

- Não introduzir **segredos** (API keys, tokens) na árvore; não há backend neste slice do repo como suporte oficial a segredos.
- Qualquer novo envolvimento **de rede** (sync, analytics) deve vir com revisão explícita de privacidade (os dados históricos são locais ao browser).

---

## Estilo de patch

- Diffs **pequenos e justificados** pela tarefa; evitar refactor estético unrelated.
- Manter nomenclatura e padrões de ficheiros existentes; quando introduzir ficheiros novos, colocá-los no mesmo nível semântico (view vs hook vs ui).
- Manter texto de UI em **português brasileiro**, consistente entre vistas (a menos que a tarefa peça mudança explícita de idioma ou internacionalização).

---

## Falha rápida: que comando corre onde

| Objetivo | Directoria | Comando |
|----------|------------|---------|
| Servidor dev | `app/` | `npm run dev` |
| Testes unitários | `app/` | `npm test` |
| Lint | `app/` | `npm run lint` |
| Build | `app/` | `npm run build` |
| Playwright (manual) | `app/` | `npx playwright test` (com dev server noutro processo, salvo config futura) |

Se um comando falhar, **ler a mensagem completa**, corrigir a causa, e só então avançar; não mascarar falhas com `--force` sem registo explícito no PR/commit message.
