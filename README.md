# daseinapp

Monorepo de trabalho centrado na aplicação **DASEIN** (`app/`): SPA em React/Vite focada em rituais de presença e reflexão, com persistência apenas no lado cliente (`localStorage`). Junto existem um protótipo em HTML/JS (`app-vanilla/`) e pastas para metodologia BMAD / skills em `.claude/`.

Documentação específica da app: **[`app/README.md`](app/README.md)**.

---

## Requisitos

- **Node.js** 18+ recomendado (alinhado a Vite 8 / React 19).
- Gestor **npm** (ou compatível).

---

## Arranque rápido (`app/`)

```bash
cd app
npm install
npm run dev
```

Por defeito o Vite expõe a app em **`http://localhost:5173`**.

Outros comandos úteis:

| Comando           | Finalidade                                   |
|-------------------|----------------------------------------------|
| `npm run build`   | Build de produção para `dist/`               |
| `npm run preview` | Preview do build                             |
| `npm run lint`    | ESLint (flat config)                         |
| `npm test`        | Vitest (jsdom); exclui `tests/e2e`           |

---

## O que o produto faz (alto nível)

- **Entrada**: lema *“Chegue ao seu corpo.”*, indicadores de balanceamento (`BalanceCard`) e navegação para fluxos principais.
- **Ritual matinal**: fluxo guiado que regista conclusões em metadados locais (`morning_ritual`).
- **Diálogo interno**: fluxo complementar que pode gravar reflexões persistentes ou efémeras.
- **Interrupção consciente** (`InterruptionOverlay`): na vista inicial, após um período de inatividade, convida a registar estado emocional/atenção (`interruption_response`).

Backend não faz parte deste repositório: tudo opera **offline-first** na mesma origem.

---

## Modelo de dados (cliente)

Chaves **`localStorage`** canónicas (**DASEIN**):

| Chave              | Formato      | Uso                                                                 |
|--------------------|--------------|---------------------------------------------------------------------|
| `dasein_metadata`  | `JSON` array | Eventos/resumos (`type`, timestamps, ids, campos opcionais).       |
| `dasein_content`   | `JSON` array | Conteúdo textual associado por `id` quando não efémero.            |

**Legacy** (Onto-era): `ontoapp_metadata` / `ontoapp_content`. Na arranque, a app executa migração **não destrutiva** para copiar valores para `dasein_*` se estes estiverem vazios (ver `app/src/storageKeys.js`).

Tipos **`type`** relevantes observados no código incluem:

- `morning_ritual`
- `nightly_reflection` (com bandeira `ephemeral` ao nível da entrada de metadados)
- `interruption_response` (campo `choice`; ex.: `drifting`, `avoiding`, `deferred`)

O hook `useBalance` agrega contagens desses registos para as dimensões **body / mind / purpose** com normalização simples até 100% (ver `app/src/hooks/useBalance.js`).

---

## Testes

### Unitários / integração de componentes (Vitest)

```bash
cd app
npm test
```

Configuração: `vitest.config.js` (ambiente `jsdom`, `setupFiles`: `src/test/setup.js`). A pasta `tests/e2e/**` é excluída do runner de Vitest.

### E2E (Playwright)

Os specs assumem a app a correr em **`http://localhost:5173`**. Não há `playwright.config.*` versionado na raiz de `app/`; use a configuração por defeito do CLI ou adicione uma no futuro (recomendado: `webServer` a arrancar o Vite automaticamente).

```bash
cd app
npm run dev
# noutro terminal:
npx playwright test
```

---

## Estrutura do repositório

```
daseinapp/
├── app/                  # DASEIN — aplicação principal (React + Vite); README em app/README.md
├── app-vanilla/          # Protótipo legado/paralelo (HTML + JS)
├── .claude/              # Skills e templates BMAD (não é runtime da app)
├── _bmad/                # Artefactos BMAD
├── _bmad-output/
├── docs/                 # Reservado para documentação futura
├── AGENTS.md             # Orientação para agentes/automações
├── README.md
└── ...
```

---

## Notas para quem desenvolve

- Manter mudanças **focadas** e alinhadas com o estilo existente (hooks, vistas em `components/views`, UI em `components/ui`).
- Antes de abrir um PR/local commit: **`npm run lint`** e **`npm test`** sob `app/`.
- Persistência só em `localStorage`: considerar quotas, migrações de formato e regressões em cenários Safari/ITP se o projeto evoluir.

---

## Licença

Não especificada neste repositório. Defina conforme política da equipa antes de distribuição pública.
