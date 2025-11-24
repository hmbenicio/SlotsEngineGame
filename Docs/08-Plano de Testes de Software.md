# Plano de Testes de Software

Plano para validar o fluxo principal e os estados críticos do SlotsEngine. Testes são manuais no Expo Go (Android/web) focando no comportamento do front-end.

## Objetivos
- Garantir que depósito, aposta, giro e saque funcionem conforme regras.
- Verificar mensagens de erro/sucesso e atualização de saldo.
- Confirmar que tema e sons podem ser alternados sem recarregar o app.

## Escopo
- Lógica de jogo (`slotLogic.js` e `useSlotMachine`).
- Componentes de UI que disparam as ações principais.
- Feedback sonoro/visual básico (não inclui testes automatizados de áudio).

## Ambiente
- Expo CLI + Expo Go em dispositivo Android e navegador (modo web).
- Node.js 18+, dependências instaladas com `npm install`.

## Casos de teste planejados

| ID | Caso | Passos | Resultado esperado |
| --- | --- | --- | --- |
| CT-01 | Depósito mínimo | Inserir R$ 10, confirmar | Mensagem de erro “Depósito mínimo é R$ 20,00” e saldo inalterado |
| CT-02 | Depósito válido | Inserir R$ 50, confirmar | Saldo = 50, som de depósito, mensagem de sucesso |
| CT-03 | Giro sem saldo | Sem depositar, tentar girar | Mensagem de erro de saldo insuficiente |
| CT-04 | Giro com vitória | Depositar, apostar R$ 2, girar até obter linha vencedora | Saldo aumentado pelo pagamento, mensagem “PARABÉNS!” |
| CT-05 | Giro sem vitória | Depositar, apostar, girar | Saldo debitado, mensagem de tentativa sem prêmio |
| CT-06 | Saque inválido | Saldo 50, sacar 100 | Mensagem de erro e saldo inalterado |
| CT-07 | Saque válido | Saldo 50, sacar 30 | Saldo = 20, som de saque, mensagem de sucesso |
| CT-08 | Alternar tema | Abrir configurações, mudar tema | Cores atualizadas imediatamente |
| CT-09 | Alternar som | Desligar som e girar | Nenhum áudio reproduzido |

## Critérios de aceitação
- Todos os casos críticos (CT-01 a CT-07) sem falhas.
- Mensagens coerentes com a ação executada.
- Nenhum travamento ou estado inconsistente do saldo/aposta após sequência de giros e saques.
