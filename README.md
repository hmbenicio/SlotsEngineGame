# SlotsEngine

Aplicacao mobile de slot machine construida em React Native com Expo. Permite inserir creditos, escolher apostas, girar a roleta com animacao, conferir ganhos, alternar tema claro/escuro e simular saques. Todo o calculo roda no cliente, sem backend ou transacoes reais.

## Principais funcionalidades
- Fluxo inicial centrado na tela de login, com opcao de cadastro e redirecionamento para o cassino simulado.
- Deposito minimo de R$ 20,00 com feedback visual e sonoro.
- Apostas pre-definidas (2 ate 100) com validacao de saldo e bloqueio de giros invalidos.
- Tabuleiro 3x3 animado, deteccao de vitorias por linhas horizontais e diagonais e pagamento proporcional a raridade dos simbolos.
- Mensagens de status em tempo real, historico da ultima aposta/premiacao e banner de avisos.
- Modal de saque simulando retirada do saldo disponivel e atualizacao imediata dos creditos.
- Modal de configuracoes para ligar/desligar sons e alternar o tema, tematizado conforme a tela de login.
- Tela de perfil com dados do usuario logado, acessivel pelo icone da barra inferior.

## Fluxo atual
1. A aplicacao abre em `LoginPage` como tela principal.
2. O usuario pode ir para `CreateAccountPage` ou seguir direto para o cassino ao submeter o login.
3. O cassino roda em `CasinoPage`, com visual consistente ao login e todos os fluxos de deposito, apostas, giro, saque e configuracoes.
4. O perfil (`ProfilePage`) pode ser aberto pelo icone na barra inferior para consultar dados do usuario.

## Tecnologias
- React Native 0.81 + Expo 54
- Expo AV para audio remoto
- Hooks personalizados (`useSlotMachine`, `useSounds`)

## Como executar
```bash
cd SlotsEngine/frontend
npm install
npm start   # menu do Expo (a para Android, i para iOS, w para web)
```
Requer Node.js 18+ e app Expo Go em dispositivo ou emulador configurado.

## Estrutura do repositorio
- `SlotsEngine/` - codigo do app (Expo/React Native).
  - `frontend/src/pages/` - telas `LoginPage`, `CreateAccountPage`, `CasinoPage` (cassino) e `ProfilePage`.
  - `frontend/src/components/` - componentes de interface reutilizaveis.
- `Docs/` - documentacao funcional, tecnica e de testes.
- `Src/` - orientacoes gerais de uso e historico de versoes.
- `Apresentacao/` - resumo do projeto para apresentacao.

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
Projeto desenvolvido para fins academicos e de portfolio. Ajuste a secao de equipe conforme o time atuante.
