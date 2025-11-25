# Instrucoes de Utilizacao

Este documento consolida como instalar e operar o aplicativo mobile SlotsEngine, alem de registrar o historico de versoes publicas.

---

## 1. Instalacao do app (Expo)

O projeto e um app mobile em React Native rodando no Expo. Nao ha backend: toda a logica de jogo e estado de creditos vive no cliente.

1. **Pre-requisitos**
   - Node.js 18 ou superior.
   - Expo CLI (`npm install -g expo-cli`) e app Expo Go no dispositivo ou emulador configurado.

2. **Instalacao**
   ```bash
   cd SlotsEngine/frontend
   npm install
   npm start
   ```
   Use as opcoes do menu do Expo para abrir em Android (`a`), iOS (`i`) ou web (`w`).

3. **Configuracao opcional**
   - A aplicacao consome sons via URLs externas em `src/constants/game.js`. Garanta conectividade a internet para ouvir os audios.
   - Para testar offline, substitua as URLs por arquivos locais colocados em `assets/`.
   - A consulta de CEP usa ViaCEP diretamente na tela de cadastro; se estiver offline, os campos permanecem editaveis para preenchimento manual.

---

## 2. Historico de Versoes

### [0.1.0] - 24/11/2025
#### Adicionado
- Maquina de slots 3x3 com sorteio ponderado por raridade e pagamentos para linhas e diagonais.
- Deposito minimo de R$ 20, apostas pre-definidas e validacao de saldo.
- Feedback sonoro para deposito, giro, vitoria e erro.
- Modal de saque simulado e modal de configuracoes (tema e som).
- Mascaras de cadastro (CPF, data, telefone, CEP) e busca de endereco via ViaCEP.
- Mascara BRL no input de saque e exigencia de chave PIX para confirmar.

---

## 3. Utilizacao

- **Depositar**: informe um valor minimo de R$ 20 e confirme para liberar as apostas.
- **Apostar e girar**: escolha o valor da aposta, pressione "Girar roleta" e acompanhe o banner de resultado. O saldo e debitado antes da rodada e creditado apos o calculo de ganhos.
- **Saque simulado**: abra o modal de saque, informe um valor ate o saldo disponivel e uma chave PIX para confirmar; o valor e abatido na hora.
- **Configuracoes**: ligue/desligue sons e alterne entre tema claro/escuro no modal dedicado.
- **Cadastro**: preencha dados com mascaras de CPF/data/telefone/CEP. Ao digitar um CEP valido, a tela tenta preencher endereco/bairro/cidade/UF via ViaCEP.

Todos os valores sao ficticios e servem apenas para fins de demonstracao do fluxo de um jogo casual de slots.
