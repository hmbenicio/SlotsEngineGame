# SlotsEngine (Expo + React Native)

Aplicacao mobile de slot machine construída em React Native com Expo. Permite inserir creditos, escolher apostas, girar a roleta com animacao, conferir ganhos e sacar valores simulados. Inclui alternancia de tema (dark/light) e controles de som.

## Funcionalidades
- Deposito minimo de R$ 20,00 com feedback sonoro e mensagem de confirmacao.
- Seletores de aposta predefinidos (2 ate 100) e validacao de saldo antes de cada giro.
- Tabuleiro 3x3 com animacao de giro, deteccao de vitorias por linhas horizontais, diagonais e combinacoes de tres simbolos iguais com premios graduais por raridade.
- Mensagens dinamicas de resultado (ganho, tentativa sem premio, erros de saldo/entrada) e banner de status.
- Modal de saque simulando retirada do saldo disponivel e atualizacao imediata dos creditos.
- Modal de configuracao para ligar/desligar sons e alternar tema claro/escuro.
- Barra inferior com atalho de informacoes e encerramento de sessao (mensagens apenas).

## Tecnologias
- React Native 0.81 + Expo 54
- Expo AV para audio remoto (URIs em `src/constants/game.js`)
- Hooks personalizados para maquina de slots (`useSlotMachine`) e sons (`useSounds`)

## Estrutura principal
- `App.js`: container principal, estilos responsivos, animacao das colunas e composicao das secoes.
- `src/hooks/useSlotMachine.js`: regra de negocio de saldo, apostas, rodada, saque, temas e mensagens.
- `src/game/slotLogic.js`: sorteio ponderado de simbolos, calculo de pagamentos e montagem da matriz 3x3.
- `src/components/*`: UI de deposito, apostas, tabuleiro, estatisticas, modais e barra inferior.
- `src/constants/theme.js` e `src/constants/game.js`: temas e configuracoes de jogo (apostas, sons, tamanho do grid).
- `src/utils/*`: formatacao monetaria e utilitarios de grid/destaque de linhas vencedoras.

## Regras do jogo
- Grid fixo 3x3 (`gridSize = 3`).
- Simbolos possuem raridade e multiplicadores; pesos de sorteio em `slotLogic.js` (`pesosRaridade`).
- Premiacao:
  - Tres simbolos iguais na mesma linha horizontal com valores diferenciados por simbolo.
  - Bonus por linha horizontal (top, middle, bottom) quando ha tres iguais.
  - Diagonais completas com o mesmo simbolo geram bonus adicional.
- Ganho final = soma dos premios multiplicados pelo valor da aposta da rodada.

## Requisitos
- Node.js 18+
- Expo CLI (recomendado) e app Expo Go em dispositivo ou emulador configurado.

## Como executar
```bash
cd frontend
npm install
npm start           # abre o menu do Expo (use a para Android, i para iOS, w para web)
```

Scripts adicionais:
- `npm run android` – inicia com alvo Android configurado.
- `npm run ios` – inicia com alvo iOS.
- `npm run web` – executa no navegador.

## Notas
- Os efeitos sonoros usam URLs externas; e necessario estar online para tocar os audios.
- Todos os valores sao simulados para fins de demonstracao e nao envolvem transacoes reais.
