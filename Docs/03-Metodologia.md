# Metodologia

O desenvolvimento do SlotsEngine seguiu um ciclo curto de ideacao, prototipacao e implementacao em uma unica base de front-end (React Native + Expo). As decisoes privilegiam simplicidade, legibilidade do codigo e facilidade de teste manual no Expo Go.

## Organizacao e ferramentas
- **Versionamento**: Git/GitHub.
- **IDE**: VS Code.
- **Execucao e testes**: Expo CLI + Expo Go (Android/web).
- **Comunicacao e tarefas**: issues e checklist curtos (Backlog -> Em andamento -> Revisado).

## Processo de trabalho
1. **Levantamento**: definicao de regras (minimo de deposito, apostas predefinidas, pagamentos por linhas/diagonais, saque com PIX).
2. **Prototipacao**: esboco da tela unica com secoes (saldo/header, deposito/aposta, tabuleiro, mensagens, modais).
3. **Implementacao**: criacao do hook `useSlotMachine`, componentes isolados, mascaras de input e constantes de jogo/tema.
4. **Teste manual**: cenarios criticos (deposito insuficiente, giro com e sem saldo, vitoria, saque invalido, falta de chave PIX, troca de tema/som, mascara de saque).
5. **Apoio de dados externos**: integracao simples com ViaCEP para preencher endereco a partir do CEP no cadastro.
6. **Refino**: ajustes de mensagens, pesos de raridade, feedback sonoro e responsividade.

## Gestao de Configuracao
- Estrutura do app em `SlotsEngine/frontend`, separando constantes (`src/constants`), logica (`src/game` e `src/hooks`) e UI (`src/components`).
- Ajustes de balanceamento sao feitos apenas em `src/game/slotLogic.js` e `src/constants/game.js`, mantendo historico via git.
- Sons e temas ficam em constantes, permitindo trocar URLs ou paletas sem alterar a logica central.

## Padroes adotados
- Componentes funcionais com hooks.
- Estilos centralizados em `src/styles/main.js`.
- Mensagens e valores de regra vindos de constantes para evitar divergencias.
- Mascaras de entrada implementadas no front (CPF, data, telefone, CEP, saque em BRL).

## Criterios de pronto
- Fluxo principal completo e validado no Expo Go.
- Mensagens de erro claras para qualquer tentativa invalida.
- Tema e som configuraveis sem recarregar o app.
- Cadastro preenchido com mascaras e suporte a busca de CEP.
