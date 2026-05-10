# DASEIN (app)

Cliente web **SPA** para rituais de presença e reflexão. Interface de utilizador em **português brasileiro** (`lang="pt-BR"` em `index.html`). Stack: **React 19**, **Vite 8**, JavaScript (**JSX**), persistência apenas em **`localStorage`**.

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
| `src/storageKeys.js` | Chaves estáveis + `migrateOntoKeysToDasein()` |

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
3. Manter **copy de UI em português brasileiro**, tom calmo e direto alinhado ao restante fluxo; o nome da marca **DASEIN** pode aparecer só onde fizer sentido (título da página, documentação).
