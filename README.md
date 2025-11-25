# SlotsEngine

Aplicacao mobile de slot machine em React Native com Expo. Todo o fluxo e client-side: saldo, apostas, sorteios e calculo de ganhos vivem no dispositivo, sem backend ou transacoes reais.

## Principais funcionalidades
- Login com atalho para cadastro; apos autenticar o usuario entra direto no cassino.
- Deposito minimo de R$ 20,00 com feedback visual/sonoro e bloqueio de giros sem saldo.
- Apostas pre-definidas (2 a 100), tabuleiro 3x3 animado e pagamento por linhas horizontais/diagonais ponderados por raridade.
- Banner de status em tempo real, exibicao de ultima aposta/premio e mensagens detalhadas quando ha bonus.
- Modal de saque com mascara em BRL (ex.: 1.000,00) e confirmacao apenas se houver saldo e chave PIX preenchida.
- Modal de configuracoes para ligar/desligar sons e alternar tema claro/escuro (paleta dourado/escuro herdada do login).
- Tela de perfil acessivel pela barra inferior.
- Cadastro com mascaras de CPF, data, telefone e CEP, incluindo preenchimento automatico de endereco via ViaCEP.

## Fluxo atual
1. App inicia em `LoginPage`.
2. Usuario pode ir para `CreateAccountPage` ou enviar o login para seguir.
3. `CasinoPage` concentra deposito, apostas, giro, saque e configuracoes.
4. `ProfilePage` abre pelo icone da barra inferior.

## Tecnologias
- React Native 0.81 + Expo 54.
- Expo AV para audio remoto.
- Hooks personalizados (`useSlotMachine`, `useSounds`).

## Como executar
```bash
cd SlotsEngine/frontend
npm install
npm start   # menu do Expo (a para Android, i para iOS, w para web)
```
Requer Node.js 18+ e app Expo Go em dispositivo ou emulador configurado.

## Estrutura do repositorio
- `SlotsEngine/` - codigo do app (Expo/React Native).
  - `frontend/src/pages/` - telas `LoginPage`, `CreateAccountPage`, `CasinoPage` e `ProfilePage`.
  - `frontend/src/components/` - componentes de interface reutilizaveis.
- `Docs/` - documentacao funcional, tecnica e de testes.
- `Src/` - instrucoes de uso e historico de versoes.
- `Apresentacao/` - resumo para apresentacao.

## Documentacao
- `Docs/01-Documentacao de Contexto.md`
- `Docs/02-Especificacao do Projeto.md`
- `Docs/03-Metodologia.md`
- `Docs/04-Projeto de Interface.md`
- `Docs/05-Arquitetura da Solucao.md`
- `Docs/06-Template Padrao da Aplicacao.md`
- `Docs/07-Programacao de Funcionalidades.md`
- `Docs/08-Plano de Testes de Software.md`
- `Docs/09-Registro de Testes de Software.md`
- `Docs/10-Plano de Testes de Usabilidade.md`
- `Docs/11-Registro de Testes de Usabilidade.md`
- `Docs/12-Apresentacao do Projeto.md`
- `Docs/13-Referencias.md`

## Contatos e equipe
Projeto de portfolio; ajuste a secao de equipe conforme o time atuante.
