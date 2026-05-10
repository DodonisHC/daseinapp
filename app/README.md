# DASEIN (app)

Cliente web **SPA** para rituais de presença e reflexão (**DASEIN**). Interface **bilíngue**: **Português (Brasil)** e **Inglês** via **`i18next` / `react-i18next`**; preferência **`dasein_locale`**. BMAD ↔ código: **`_bmad-output/planning-artifacts/traceability-dasein-bmad.md`**. Stack: **React 19**, **Vite 8**, JavaScript (**JSX**), persistência apenas em **`localStorage`**.

Para contexto do monorepo pai, consulte [`../README.md`](../README.md).

---

## Comandos

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
npm run lint
npm test
```

E2E (Playwright) em `tests/e2e/`: por defeito assume o dev server na porta **5173** (ver especificações individuais).

---

## Layout do código

| Caminho | Papel |
|---------|--------|
| `src/main.jsx` | Bootstrap; migração de storage legacy antes do render |
| `src/App.jsx` | Estado de vistas (`entry`, `ritual`, `dialogue`), toasts |
| `src/components/views/` | Fluxos compositos (`EntryView`, `MorningRitual`, `InternalDialogue`) |
| `src/components/ui/` | Peças reutilizáveis (`BalanceCard`, overlay de interrupção, toasts) |
| `src/hooks/` | `useStorage`, `useBalance` |
| `src/storageKeys.js` | Chaves estáveis + `migrateOntoKeysToDasein()` + `LOCALE_STORAGE_KEY` |
| `src/i18n/` | Bundles **`pt-BR` / `en`**, inicialização **`config.js`** |
| `src/components/ui/LanguageSwitcher.jsx` | Selector PT / EN persistente |

---

## Nome da app e marca

- **Nome do produto**: **DASEIN** (`index.html`: título da página).
- **Pacote npm** (área da app): `dasein` (`package.json` → `name`).

---

## `localStorage`

| Chave | Conteúdo |
|-------|----------|
| `dasein_metadata` | Array JSON de entradas de eventos (tipos, timestamps, ids, extras). |
| `dasein_content` | Array JSON de `{ id, content }` para reflexões persistidas (não efémeras). |

**Migração**: na primeira execução após a mudança de marca, `migrateOntoKeysToDasein()` copia dados de **`ontoapp_metadata`** / **`ontoapp_content`** se as chaves `dasein_*` estiverem vazias (não apaga legacy).

Os tipos **`type`** usados pela agregação de balanceamento incluem pelo menos:

- `morning_ritual`
- `nightly_reflection` (campo `ephemeral` na entrada)
- `interruption_response` (campo `choice`)

Sem backend neste projeto: respeitar quotas do browser e evoluir formato com cuidado (migrations).

---

## Testes unitários

- **Vitest** + **jsdom** + **Testing Library**; config em `vitest.config.js`.

```bash
npm test
```

---

## Boas práticas para PRs aqui dentro

1. Rode `npm run lint`, `npm test` e idealmente `npm run build`.
2. Qualquer mudança de chaves/formato em `localStorage` deve atualizar **`storageKeys.js`**, migração se aplicável e testes relacionados.
3. Ao mudar texto de produto: actualizar **`pt-BR.json`** e **`en.json`** mantendo tom calmo; seguir **`traceability-dasein-bmad.md`** para PR/epic quando o PRD/arquitecture precisarem de entrada.
