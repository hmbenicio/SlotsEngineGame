# Programação de Funcionalidades

Lista de funcionalidades implementadas no SlotsEngine, mapeadas para componentes/arquivos e regras principais.

## Depósito de créditos
- **Componente**: `DepositSection`
- **Regras**:
  - Valor mínimo R$ 20,00 para liberar apostas.
  - Feedback sonoro (`deposit`) e mensagem de sucesso/erro.
- **Lógica**: `useSlotMachine` valida, soma ao saldo e atualiza `totalInserido`.

## Seleção de aposta
- **Componente**: `BetSelector`
- **Regras**:
  - Valores pré-definidos de `apostasDisponiveis`.
  - Pode ser alterado antes de cada giro.

## Giro da roleta
- **Componente**: botão de giro em `SlotBoard` (orquestrado por `App.js`).
- **Lógica**:
  - Verifica saldo ≥ aposta (senão mensagem de erro).
  - Debita saldo, chama `jogarRodada` (em `slotLogic.js`), toca som `spin`.
  - Atualiza grid, destaca linhas vencedoras (`obterPosicoesVencedoras`), credita ganhos e exibe mensagem.

## Cálculo de pagamento
- **Arquivo**: `src/game/slotLogic.js`
- **Regras**:
  - Grid 3x3, pesos de raridade por símbolo.
  - Pagamento por três símbolos iguais em linhas horizontais + bônus de linha.
  - Bônus adicional para diagonais completas.
  - Ganho final = soma das ocorrências * valor da aposta.

## Mensagens e status
- **Componente**: `MessageBanner`
- **Fontes**: `useSlotMachine` define texto e tipo (erro ou sucesso).
- **Casos**: depósito insuficiente, saldo insuficiente, vitória, tentativa sem prêmio, saque inválido.

## Saque simulado
- **Componente**: `WithdrawModal`
- **Regras**:
  - Valor deve ser positivo e ≤ saldo.
  - Som de `withdraw` em caso de sucesso.

## Configurações
- **Componente**: `SettingsModal`
- **Opções**: alternar tema (claro/escuro) e ligar/desligar sons.
- **Efeito**: aplica tema global e bloqueia reprodução de áudio quando desativado.

## Encerramento de sessão
- **Componente**: botão na `BottomBar`.
- **Ação**: exibe mensagem de saída; estado não é persistido.
