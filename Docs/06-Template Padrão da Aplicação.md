# Template Padrão da Aplicação

Este template define como organizar código, estilos e constantes dentro do SlotsEngine para manter consistência e facilitar ajustes de regras.

## Organização de componentes
- **Seções principais**: `HeaderSection`, `DepositSection`, `BetSelector`, `SlotBoard`, `StatsRow`, `MessageBanner`, `BottomBar`.
- **Modais**: `WithdrawModal` (saque simulado) e `SettingsModal` (tema e som).
- **Ponto de entrada**: `App.js` orquestra layout e animação das colunas.

## Hooks e lógica
- `useSlotMachine`: estado central (saldo, aposta, último prêmio, mensagens, modais, tema/som). Deve receber apenas interações da UI.
- `useSounds`: encapsula Expo AV e respeita a flag `somAtivo`.
- `slotLogic.js`: funções puras (`girar`, `jogarRodada`, `calcularPagamentoTotal`) para manter testabilidade.

## Constantes e temas
- `src/constants/game.js`: apostas disponíveis, tamanho do grid e URIs de som.
- `src/constants/theme.js`: paletas para tema claro/escuro; novos tons devem preservar contraste mínimo.

## Estilos
- Estilos globais em `src/styles/main.js`, com uso de `StyleSheet` e variáveis de cor vindas de `themeColors`.
- Preferir componentes pequenos com estilos próprios ao invés de estilos inline extensos.

## Convenções
- Mensagens de erro sempre iniciam com verbo/ação clara (ex.: “Créditos insuficientes...”).
- Valores monetários formatados via `formatarBRL` para consistência.
- Funções puras em arquivos de lógica/utilitários para facilitar testes unitários futuros.

## Extensões futuras sugeridas
- Persistência local (AsyncStorage) para saldo e tema.
- Internacionalização das mensagens.
- Novos layouts de tabuleiro (ex.: 5x3) mantendo o mesmo contrato do hook.
