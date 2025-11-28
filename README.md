# SlotsEngineGame

Aplicacao mobile de slot machine em React Native com Expo. Todo o fluxo e client-side: saldo, apostas, sorteios e calculo de ganhos vivem no dispositivo, sem backend ou transacoes reais. Projeto voltado para portfolio pessoal.

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
cd SlotsEngineGame/frontend
npm install
npm start   # menu do Expo (a para Android, i para iOS, w para web)
```

Requer Node.js 18+ e app Expo Go em dispositivo ou emulador configurado.

## Estrutura do repositorio

- `SlotsEngineGame/` - codigo do app (Expo/React Native).
  - `frontend/src/pages/` - telas `LoginPage`, `CreateAccountPage`, `CasinoPage` e `ProfilePage`.
  - `frontend/src/components/` - componentes de interface reutilizaveis.
- `Docs/` - documentacao funcional, tecnica e de testes.
- `Src/` - instrucoes de uso e historico de versoes.
- `Apresentacao/` - resumo para apresentacao.

## Documentacao

<li><a href="Docs/01-Documentacao de Contexto.md">Documentacao de Contexto</a></li>
<li><a href="Docs/02-Especificacao do Projeto.md">Especificacao do Projeto</a></li>
<li><a href="Docs/03-Metodologia.md">Metodologia</a></li>
<li><a href="Docs/04-Projeto de Interface.md">Projeto de Interface</a></li>
<li><a href="Docs/05-Arquitetura da Solucao.md">Arquitetura da Solucao</a></li>
<li><a href="Docs/06-Template Padrao da Aplicacao.md">Template Padrao da Aplicacao</a></li>
<li><a href="Docs/07-Programacao de Funcionalidades.md">Programacao de Funcionalidades</a></li>
<li><a href="Docs/08-Plano de Testes de Software.md">Plano de Testes de Software</a></li>
<li><a href="Docs/09-Registro de Testes de Software.md">Registro de Testes de Software</a></li>
<li><a href="Docs/10-Plano de Testes de Usabilidade.md">Plano de Testes de Usabilidade</a></li>
<li><a href="Docs/11-Registro de Testes de Usabilidade.md">Registro de Testes de Usabilidade</a></li>
<li><a href="Docs/12-Apresentacao do Projeto.md">Apresentacao do Projeto</a></li>
<li><a href="Docs/13-Referencias.md">Referencias</a></li>

## Contatos e equipe

Projeto de portfolio pessoal; ajuste a secao de equipe conforme o time atuante.
