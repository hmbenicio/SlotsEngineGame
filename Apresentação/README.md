# Apresentacao da Solucao

SlotsEngineGame e um app mobile de slot machine construido em React Native com Expo. Todo o fluxo de creditos, apostas e calculo de premios acontece no proprio dispositivo, com feedback visual e sonoro e sem qualquer transacao real. O foco agora e portfolio pessoal.

---

## 1. Visao Geral do Processo de Desenvolvimento
- **Levantamento e ideacao**: definicao do problema (simular um fluxo completo de slots para demonstrar UX e logica de jogo) e das regras de premiacao.
- **Prototipacao**: wireframes de um fluxo linear (deposito -> aposta -> giro -> saque) para validar a hierarquia visual em telas pequenas.
- **Construcao**: implementacao do hook `useSlotMachine`, camada de logica de sorteio (`slotLogic`) e componentes modais de saque/configuracao.
- **Teste e refinamento**: validacao manual no Expo Go (Android e web), ajustes em mensagens de erro, temas e limites de valores.

## 2. Desafios Encontrados
- Garantir UX clara em um fluxo sem backend, mantendo o usuario informado sobre saldo, aposta e resultado a cada giro.
- Balancear raridade x premiacao para que o jogo permanece compreensivel em uma grade 3x3.
- Tratar estados de erro (saldo insuficiente, deposito abaixo do minimo, saque maior que o saldo) com mensagens curtas e consistentes.

## 3. Solucao Desenvolvida
- **Deposito e saldo**: valor minimo de R$ 20 libera apostas; feedback sonoro ao creditar.
- **Apostas e giro**: selecao de apostas pre-definidas, debito imediato, animacao de giro e calculo de ganhos por linhas/diagonais.
- **Configuracoes e acessibilidade**: alternancia de tema claro/escuro e controle de som direto no modal.
- **Saque simulado**: retirada do saldo disponivel e atualizacao do banner de mensagem.

> Demonstracao sugerida: gravacao pelo Expo (Android) exibindo deposito, dois giros com resultados diferentes, troca de tema e saque.

## 4. Conclusao
O aplicativo comprova o fluxo completo de um jogo casual de slots em front-end puro, servindo como artefato de portfolio. A estrutura em Expo facilita futuras evolucoes, como internacionalizacao, ajustes de balanceamento ou persistencia local.
