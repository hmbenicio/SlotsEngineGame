# SlotsEngine

Aplicação mobile de slot machine construída em React Native com Expo. Permite inserir créditos, escolher apostas, girar a roleta com animação, conferir ganhos, alternar tema claro/escuro e simular saques. O projeto foi organizado para demonstrar a lógica de jogos casuais, mantendo todos os cálculos no cliente e sem transações reais.

## Principais funcionalidades
- Depósito mínimo de R$ 20,00 com feedback visual e sonoro.
- Apostas pré-definidas (2 até 100) com validação de saldo e bloqueio de giros inválidos.
- Tabuleiro 3x3 animado, detecção de vitórias por linhas horizontais e diagonais e pagamento proporcional à raridade dos símbolos.
- Mensagens de status em tempo real, histórico da última aposta/premiação e banner de avisos.
- Modal de saque simulando retirada do saldo disponível e atualização imediata dos créditos.
- Modal de configurações para ligar/desligar sons e alternar o tema.

## Tecnologias
- React Native 0.81 + Expo 54
- Expo AV para áudio remoto
- Hooks personalizados (`useSlotMachine`, `useSounds`)

## Como executar
```bash
cd SlotsEngine/frontend
npm install
npm start   # menu do Expo (a para Android, i para iOS, w para web)
```
Requer Node.js 18+ e app Expo Go em dispositivo ou emulador configurado.

## Estrutura do repositório
- `SlotsEngine/` – código do app (Expo/React Native).
- `Docs/` – documentação funcional, técnica e de testes.
- `Src/` – orientações gerais de uso e histórico de versões.
- `Apresentação/` – resumo do projeto para apresentação.

## Documentação
- `Docs/01-Documentação de Contexto.md`
- `Docs/02-Especificação do Projeto.md`
- `Docs/03-Metodologia.md`
- `Docs/04-Projeto de Interface.md`
- `Docs/05-Arquitetura da Solução.md`
- `Docs/06-Template Padrão da Aplicação.md`
- `Docs/07-Programação de Funcionalidades.md`
- `Docs/08-Plano de Testes de Software.md`
- `Docs/09-Registro de Testes de Software.md`
- `Docs/10-Plano de Testes de Usabilidade.md`
- `Docs/11-Registro de Testes de Usabilidade.md`
- `Docs/12-Apresentação do Projeto.md`
- `Docs/13-Referências.md`

## Contatos e equipe
Projeto desenvolvido para fins acadêmicos e de portfólio. Ajuste a seção de equipe conforme o time atuante.
