# Template Padrao da Aplicacao

Este template define como organizar codigo, estilos e constantes dentro do SlotsEngine para manter consistencia e facilitar ajustes de regras.

## Organizacao de componentes e paginas
- **Pages**: `LoginPage` (tela inicial), `CreateAccountPage` (cadastro), `CasinoPage` (cassino) e `ProfilePage` (dados do usuario) em `src/pages`.
- **Secoes principais da CasinoPage**: `HeaderSection`, `DepositSection`, `BetSelector`, `SlotBoard`, `StatsRow`, `MessageBanner`, `BottomBar`.
- **Modais**: `WithdrawModal` (saque simulado com mascara BRL e chave PIX) e `SettingsModal` (tema e som) seguindo a paleta dourado/escuro do login.
- **Ponto de entrada**: `App.js` roteia entre as pages; `CasinoPage` orquestra layout, animacao das colunas e chamadas do hook.

## Hooks e logica
- `useSlotMachine`: estado central (saldo, aposta, ultimo premio, mensagens, modais, tema/som). Recebe interacoes da UI e encapsula validacoes de deposito, giro e saque.
- `useSounds`: encapsula Expo AV e respeita a flag `somAtivo`.
- `slotLogic.js`: funcoes puras (`girar`, `jogarRodada`, `calcularPagamentoTotal`) para manter testabilidade.

## Constantes e temas
- `src/constants/game.js`: apostas disponiveis, tamanho do grid e URIs de som.
- `src/constants/theme.js`: paletas para tema claro/escuro; titulos do header usam a cor dos naipes no tema claro.

## Estilos
- Estilos globais em `src/styles/main.js`, com uso de `StyleSheet` e variaveis de cor vindas de `themeColors`.
- Preferir componentes pequenos com estilos proprios em vez de blocos inline extensos.

## Convencoes
- Mensagens de erro iniciam com verbo/acao clara (ex.: "Creditos insuficientes...", "Informe a chave PIX...").
- Valores monetarios formatados via `formatarBRL` para consistencia; input de saque mascarado durante a digitacao.
- Funcoes puras em arquivos de logica/utilitarios para facilitar testes unitarios futuros.
- Mascaras de cadastro (CPF, data, telefone, CEP) implementadas no front.

## Extensoes futuras sugeridas
- Persistencia local (AsyncStorage) para saldo, tema e dados basicos do usuario.
- Internacionalizacao das mensagens.
- Novos layouts de tabuleiro (ex.: 5x3) mantendo o mesmo contrato do hook.
- Validacao adicional de cadastro (confirmacao de email/senha) e retentativa de CEP offline.
