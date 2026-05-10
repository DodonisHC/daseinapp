# Retrospective: Epic 2 - Internal Dialogue & Secure Storage

**Date:** 2026-05-10
**Project:** Ontoapp
**Status:** Completed

## 🎯 Epic Review
O Épico 2 focou na transição do ritual matinal para o diálogo interno noturno, garantindo uma experiência de escrita fluida, provocativa e extremamente privada.

### ✅ O que funcionou bem
- **UX "Vanilla" Fluida:** A decisão de manter o app leve sem frameworks provou-se correta. As animações CSS (`.text-burn`) e a reatividade via Vanilla JS estão entregando uma sensação "premium".
- **Metáfora de Privacidade:** A animação de queima para o modo efêmero e o badge de "Ephemeral Session" aumentam a percepção de segurança do usuário.
- **Resiliência:** A inclusão de `try...catch` no armazenamento local e travas de transição (`isTransitioning`) garantiram que o app não trave em condições adversas (como modo incógnito).
- **Ambiente de Dev:** Agora o ambiente conta com Node.js e Python configurados via `winget`, facilitando testes futuros.

### ⚠️ Desafios e Lições Aprendidas
- **Gerenciamento de Estado Manual:** Como não usamos frameworks, o "reset" das telas está se tornando complexo. Tivemos que lidar com vazamentos de UI (cards que ficavam abertos).
- **Instalação de Ferramentas:** Descobrimos que o PATH do Windows não atualiza em tempo real, exigindo reinicialização do ambiente de dev após instalações de sistema.

## 🛠️ Action Items (Próximos Passos)
1. **[Tech] Padronizar Ciclo de Vida de Views:** Criar uma função `onExitView` ou similar no `app.js` para centralizar a limpeza de estados (reset de campos, esconder cards) e evitar bugs de vazamento de UI.
2. **[UX] Heurísticas de Autopilot (Épico 3):** Iniciar pesquisa sobre sinais de "piloto automático" no navegador (ex: tempo de aba inativa, padrões de scroll repetitivo) para a História 3.1.

## 🚀 Próximo Épico: 3 - Autopilot Intervention
O foco agora muda para a **intervenção ativa**. Vamos construir a inteligência que detecta quando o usuário está perdendo a presença e oferece um "spark" de consciência.

---
*Retrospectiva facilitada por Amelia (Developer) com a participação de DodonisHC (Project Lead).*
