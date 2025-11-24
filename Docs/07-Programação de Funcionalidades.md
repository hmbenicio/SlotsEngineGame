# Programacao de Funcionalidades

Lista de funcionalidades implementadas no SlotsEngine, mapeadas para componentes/arquivos e regras principais.

## Entrada (login e cadastro)
- **Componentes**: `LoginPage`, `CreateAccountPage` em `src/pages`.
- **Navegacao**: `App.js` inicia em `LoginPage` e roteia para `CreateAccountPage`, `CasinoPage` ou `ProfilePage` conforme a acao do usuario.
- **Regras**: nao ha autenticacao real; os formularios apenas conduzem o fluxo ate a tela do cassino.

## Deposito de creditos
- **Componente**: `DepositSection`
- **Regras**:
  - Valor minimo R$ 20,00 para liberar apostas.
  - Feedback sonoro (`deposit`) e mensagem de sucesso/erro.
- **Logica**: `useSlotMachine` valida, soma ao saldo e atualiza `totalInserido`.

## Selecao de aposta
- **Componente**: `BetSelector`
- **Regras**:
  - Valores pre-definidos de `apostasDisponiveis`.
  - Pode ser alterado antes de cada giro.

## Giro da roleta
- **Componente**: botao de giro em `CasinoPage` (renderizado junto ao `SlotBoard`).
- **Logica**:
  - Verifica saldo = aposta (senao mensagem de erro).
  - Debita saldo, chama `jogarRodada` (em `slotLogic.js`), toca som `spin`.
  - Atualiza grid, destaca linhas vencedoras (`obterPosicoesVencedoras`), credita ganhos e exibe mensagem.

## Calculo de pagamento
- **Arquivo**: `src/game/slotLogic.js`
- **Regras**:
  - Grid 3x3, pesos de raridade por simbolo.
  - Pagamento por tres simbolos iguais em linhas horizontais + bonus de linha.
  - Bonus adicional para diagonais completas.
  - Ganho final = soma das ocorrencias * valor da aposta.

## Mensagens e status
- **Componente**: `MessageBanner`
- **Fontes**: `useSlotMachine` define texto e tipo (erro ou sucesso).
- **Casos**: deposito insuficiente, saldo insuficiente, vitoria, tentativa sem premio, saque invalido.

## Saque simulado
- **Componente**: `WithdrawModal`
- **Regras**:
  - Valor deve ser positivo e <= saldo.
  - Som de `withdraw` em caso de sucesso.

## Configuracoes
- **Componente**: `SettingsModal`
- **Opcoes**: alternar tema (claro/escuro) e ligar/desligar sons. Roda com paleta do login; textos de labels permanecem brancos no tema claro.
- **Efeito**: aplica tema global e bloqueia reproducao de audio quando desativado.

## Perfil do usuario
- **Componente**: `ProfilePage`
- **Dados**: nome, email, telefone, status e ultimo acesso exibidos em memoria.
- **Fluxo**: aberto pelo icone da barra inferior; botao retorna ao cassino.

## Encerramento de sessao
- **Componente**: botao na `BottomBar` dentro de `CasinoPage`.
- **Acao**: exibe mensagem de saida e retorna ao `LoginPage` via `onExit` do `App.js` (estado nao e persistido).
