# Arquitetura da Solução

SlotsEngine é um aplicativo 100% client-side em React Native com Expo. Toda a lógica de sorteio, cálculo de pagamento e gerenciamento de saldo roda localmente; não há backend nem persistência remota.

## Visão geral

```mermaid
flowchart LR
    User[Usuário] --> App[SlotsEngine (Expo)]
    App --> Logic[Hook useSlotMachine\n+ slotLogic.js]
    Logic --> UI[Componentes de UI\n(Depósito, Apostas, Tabuleiro, Modais)]
    App --> Sons[Expo AV (URLs remotas)]
```

- **UI**: componentes em `src/components` organizam seções (header, depósito, apostas, tabuleiro, estatísticas, modais).
- **Lógica**: `src/hooks/useSlotMachine.js` controla saldo, apostas, mensagens e modais; `src/game/slotLogic.js` gera a grade 3x3, aplica pesos de raridade e calcula pagamentos.
- **Constantes**: regras de jogo e URIs de som em `src/constants/game.js`; temas em `src/constants/theme.js`.
- **Utilitários**: formatação monetária e transformação de grid em `src/utils`.

## Modelagem de dados (client-side)
- **Saldo**: número inteiro em centavos (armazenado como número JS) controlado pelo hook.
- **Aposta**: valor selecionado a partir de `apostasDisponiveis`.
- **Grid**: matriz 3x3 de símbolos; posições vencedoras marcadas para destacar na UI.
- **Mensagens**: texto + flag de erro exibidos no banner.

## Regras de negócio principais
- Depósito mínimo de R$ 20 para habilitar giros.
- Débito do saldo antes do giro; crédito de ganhos após cálculo.
- Pagamentos por três símbolos iguais na mesma linha e bônus para linhas/diagonais completas.
- Pesos de raridade definem a probabilidade de cada símbolo no sorteio.
- Saque simulado subtrai do saldo sem validação externa.

## Estrutura de pastas do app
```
SlotsEngine/frontend/
  App.js                # composição geral, animações e layout
  src/components/       # UI (DepositSection, BetSelector, SlotBoard, etc.)
  src/constants/        # game.js, theme.js
  src/game/             # slotLogic.js (sorteio/pagamentos)
  src/hooks/            # useSlotMachine, useSounds
  src/styles/           # estilos globais
  src/utils/            # formatadores e helpers de grid
```

## Tecnologias
- **Frontend**: React Native 0.81 + Expo 54.
- **Áudio**: Expo AV usando URLs externas.
- **Deploy/execução**: Expo Go (Android/iOS/web). Sem serviços de backend.

## Hospedagem e distribuição
- Execução via Expo (CLI + QR Code).
- Não há publicação em lojas; para build standalone usar `eas build` futuramente, se necessário.

## Qualidade e manutenibilidade
- Estado centralizado em um hook, facilitando testes isolados da lógica.
- Regras configuráveis em arquivos de constantes e lógica, permitindo ajustes de balanceamento sem refatorar UI.
- Estrutura modular de componentes favorece substituição futura (ex.: novos layouts de tabuleiro).
