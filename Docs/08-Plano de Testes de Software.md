# Plano de Testes de Software

Plano para validar o fluxo principal e os estados criticos do SlotsEngine. Testes sao manuais no Expo Go (Android/web) focando no comportamento do front-end.

## Objetivos
- Garantir que deposito, aposta, giro e saque funcionem conforme regras.
- Verificar mensagens de erro/sucesso, atualizacao de saldo e mascara monetaria.
- Confirmar que tema e sons podem ser alternados sem recarregar o app.
- Validar que a busca de CEP preenche campos quando a rede responde.

## Escopo
- Logica de jogo (`slotLogic.js` e `useSlotMachine`).
- Componentes de UI que disparam as acoes principais.
- Feedback sonoro/visual basico (nao inclui testes automatizados de audio).
- Mascaras de input (saque BRL, CPF, data, telefone, CEP).

## Ambiente
- Expo CLI + Expo Go em dispositivo Android e navegador (modo web).
- Node.js 18+, dependencias instaladas com `npm install`.
- Rede ativa para testes de som e ViaCEP.

## Casos de teste planejados

| ID | Caso | Passos | Resultado esperado |
| --- | --- | --- | --- |
| CT-01 | Deposito minimo | Inserir R$ 10, confirmar | Mensagem de erro "O valor minimo para inserir e R$ 20,00." e saldo inalterado |
| CT-02 | Deposito valido | Inserir R$ 50, confirmar | Saldo = 50, som de deposito, mensagem de sucesso |
| CT-03 | Giro sem saldo | Sem depositar, tentar girar | Mensagem de erro de saldo insuficiente e nenhum debito |
| CT-04 | Giro com vitoria | Depositar, apostar R$ 2, girar ate obter linha vencedora | Saldo aumentado pelo pagamento, mensagem "PARABENS!" ou detalhes do bonus |
| CT-05 | Giro sem vitoria | Depositar, apostar, girar | Saldo debitado, mensagem de tentativa sem premio |
| CT-06 | Saque invalido (valor) | Saldo 50, sacar 100 | Mensagem de erro e saldo inalterado |
| CT-07 | Saque invalido (PIX vazio) | Saldo 50, sacar 20 sem chave PIX | Mensagem de erro e modal permanece aberto |
| CT-08 | Saque valido | Saldo 50, sacar 30 com chave PIX | Saldo = 20, som de saque, mensagem de sucesso |
| CT-09 | Alternar tema | Abrir configuracoes, mudar tema | Cores atualizadas imediatamente |
| CT-10 | Alternar som | Desligar som e girar | Nenhum audio reproduzido |
| CT-11 | Mascara de saque | Digitar "1000" no valor de saque | Campo mostra "10,00" e depois "100,00" conforme digitacao |
| CT-12 | Busca de CEP | Informar CEP valido no cadastro | Endereco/bairro/cidade/UF preenchidos automaticamente (quando rede responde) |

## Criterios de aceitacao
- Todos os casos criticos (CT-01 a CT-10) sem falhas; CT-12 depende de rede e pode ser marcado como opcional.
- Mensagens coerentes com a acao executada.
- Nenhum travamento ou estado inconsistente do saldo/aposta apos sequencia de giros e saques.
