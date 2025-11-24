# Apresentação da Solução

SlotsEngine é um app mobile de slot machine construído em React Native com Expo. Todo o fluxo de créditos, apostas e cálculo de prêmios acontece no próprio dispositivo, com feedback visual e sonoro e sem qualquer transação real.

---

## 1. Visão Geral do Processo de Desenvolvimento
- **Levantamento e ideação**: definição do problema (simular um fluxo completo de slots para estudo de UX e lógica de jogo) e das regras de premiação.
- **Prototipação**: wireframes de um fluxo linear (depósito → aposta → giro → saque) para validar a hierarquia visual em telas pequenas.
- **Construção**: implementação do hook `useSlotMachine`, camada de lógica de sorteio (`slotLogic`) e componentes modais de saque/configuração.
- **Teste e refinamento**: validação manual no Expo Go (Android e web), ajustes em mensagens de erro, temas e limites de valores.

## 2. Desafios Encontrados
- Garantir UX clara em um fluxo sem backend, mantendo o usuário informado sobre saldo, aposta e resultado a cada giro.
- Balancear raridade x premiação para que o jogo permaneça compreensível em uma grade 3x3.
- Tratar estados de erro (saldo insuficiente, depósito abaixo do mínimo, saque maior que o saldo) com mensagens curtas e consistentes.

## 3. Solução Desenvolvida
- **Depósito e saldo**: valor mínimo de R$ 20 libera apostas; feedback sonoro ao creditar.
- **Apostas e giro**: seleção de apostas pré-definidas, débito imediato, animação de giro e cálculo de ganhos por linhas/diagonais.
- **Configurações e acessibilidade**: alternância de tema claro/escuro e controle de som direto no modal.
- **Saque simulado**: retirada do saldo disponível e atualização do banner de mensagem.

> Demonstração sugerida: gravação pelo Expo (Android) exibindo depósito, dois giros com resultados diferentes, troca de tema e saque.

## 4. Conclusão
O aplicativo comprova o fluxo completo de um jogo casual de slots em front-end puro, servindo como artefato de estudo e portfólio. A estrutura em Expo facilita futuras evoluções, como internacionalização, ajustes de balanceamento ou persistência local.
