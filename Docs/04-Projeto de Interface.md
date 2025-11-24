# Projeto de Interface

O app é composto por uma única tela com seções bem delimitadas para manter o fluxo linear (depositar → apostar → girar → sacar/configurar). A navegação acontece em scroll vertical curto e modais.

## Estrutura de tela
- **Header**: saldo atual (BRL), última aposta e último prêmio.
- **Depósito**: campo numérico, botão de confirmar e mensagem de validação do mínimo (R$ 20).
- **Apostas**: selector com valores pré-definidos e botão de “Girar”.
- **Tabuleiro 3x3**: exibe símbolos sorteados e destaca linhas/diagonais vencedoras.
- **Banner de mensagem**: comunica vitórias, erros e avisos.
- **Estatísticas**: total depositado e saldo atualizado.
- **Barra inferior**: atalhos para modal de saque, modal de configurações e encerramento de sessão (mensagem).

## Fluxos de navegação
- **Depositar**: o usuário insere o valor, confirma e recebe feedback sonoro/visual. Ao atingir R$ 20 libera o botão de giro.
- **Girar**: seleção da aposta → validação de saldo → animação de giro → mensagem de resultado.
- **Saque**: modal dedicado, validação do valor (não pode ultrapassar o saldo) e atualização imediata da tela.
- **Configurações**: alternância de tema e som aplicadas instantaneamente.

## Layout e responsividade
- O layout prioriza legibilidade em celulares, com espaçamento confortável e botões largos.
- Tema claro/escuro ajusta cores de fundo, texto e realces mantendo contraste mínimo recomendável.
- No modo web do Expo o conteúdo se recentraliza mantendo largura máxima para não esticar componentes.

## Estados e feedback
- **Erros**: mensagens curtas (“Créditos insuficientes...”, “Depósito mínimo é R$ 20,00”).
- **Sucesso**: “PARABÉNS!” em vitórias; detalhes exibidos quando há múltiplos bônus.
- **Som**: efeitos distintos para giro, vitória, erro, depósito e saque.

## Acessibilidade e usabilidade
- Texto conciso e botões com rótulos claros.
- Estados de carregamento mínimos; a rotação é a única animação mais longa.
- Não há dependência de teclado além dos campos numéricos de depósito e saque.
