# Metodologia

O desenvolvimento do SlotsEngine seguiu um ciclo curto de ideação, prototipação e implementação em uma única base de front-end (React Native + Expo). As decisões privilegiam simplicidade, legibilidade do código e facilidade de teste manual no Expo Go.

## Organização e ferramentas
- **Versionamento**: Git/GitHub.
- **IDE**: VS Code.
- **Execução e testes**: Expo CLI + Expo Go (Android/web).
- **Comunicação e tarefas**: issues e checklist curtos (Backlog → Em andamento → Revisado).

## Processo de trabalho
1. **Levantamento**: definição de regras (mínimo de depósito, apostas predefinidas, pagamentos por linhas/diagonais).
2. **Prototipação**: esboço da tela única com seções (saldo/header, depósito/aposta, tabuleiro, mensagens, modais).
3. **Implementação**: criação do hook `useSlotMachine`, componentes isolados e constantes de jogo/tema.
4. **Teste manual**: cenários críticos (depósito insuficiente, giro com e sem saldo, vitória, saque inválido, troca de tema/som).
5. **Refino**: ajustes de mensagens, pesos de raridade e feedback sonoro.

## Gestão de Configuração
- Estrutura do app em `SlotsEngine/frontend`, separando constantes (`src/constants`), lógica (`src/game` e `src/hooks`) e UI (`src/components`).
- Ajustes de balanceamento são feitos apenas em `src/game/slotLogic.js` e `src/constants/game.js`, mantendo histórico via git.

## Padrões adotados
- Componentes funcionais com hooks.
- Estilos centralizados em `src/styles/main.js`.
- Mensagens e valores de regra sempre vindos de constantes para evitar divergências.

## Critérios de pronto
- Fluxo principal completo e validado no Expo Go.
- Mensagens de erro claras para qualquer tentativa inválida.
- Tema e som configuráveis sem recarregar o app.
