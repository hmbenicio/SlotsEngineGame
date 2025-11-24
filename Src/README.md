# Instruções de Utilização

Este documento consolida como instalar e operar o aplicativo mobile SlotsEngine, além de registrar o histórico de versões públicas.

---

## 1. Instalação do app (Expo)

O projeto é um app mobile em React Native rodando no Expo. Não há backend: toda a lógica de jogo e estado de créditos vive no cliente.

1. **Pré-requisitos**
   - Node.js 18 ou superior.
   - Expo CLI (`npm install -g expo-cli`) e app Expo Go no dispositivo ou emulador configurado.

2. **Instalação**
   ```bash
   cd SlotsEngine/frontend
   npm install
   npm start
   ```
   Use as opções do menu do Expo para abrir em Android (`a`), iOS (`i`) ou web (`w`).

3. **Configuração opcional**
   - A aplicação consome sons via URLs externas em `src/constants/game.js`. Garanta conectividade à internet para ouvir os áudios.
   - Para testar offline, substitua as URLs por arquivos locais colocados em `assets/`.

---

## 2. Histórico de Versões

### [0.1.0] - 24/11/2025
#### Adicionado
- Máquina de slots 3x3 com sorteio ponderado por raridade e pagamentos para linhas e diagonais.
- Depósito mínimo de R$ 20, apostas pré-definidas e validação de saldo.
- Feedback sonoro para depósito, giro, vitória e erro.
- Modal de saque simulado e modal de configurações (tema e som).

---

## 3. Utilização

- **Depositar**: informe um valor mínimo de R$ 20 e confirme para liberar as apostas.
- **Apostar e girar**: escolha o valor da aposta, pressione “Girar” e acompanhe o banner de resultado. O saldo é debitado antes da rodada e creditado após o cálculo de ganhos.
- **Saque simulado**: abra o modal de saque, informe um valor até o saldo disponível e confirme para abater do crédito.
- **Configurações**: ligue/desligue sons e alterne entre tema claro/escuro no modal dedicado.

Todos os valores são fictícios e servem apenas para fins de demonstração do fluxo de um jogo casual de slots.
