# Projeto de Interface

O app possui quatro telas principais (LoginPage, CreateAccountPage, CasinoPage e ProfilePage), mantendo a mesma identidade visual dourado/escuro do login em todas as telas e modais. O fluxo e linear: entrada (login ou cadastro) leva ao cassino; perfil e ajustes sao acessados por acoes diretas.

## Telas
- **LoginPage**: logo, campos de identificacao/senha, linha de naipes e atalho para cadastro; e a tela inicial do app.
- **CreateAccountPage**: coleta nome, email, telefone e senha; aplica mascaras (CPF, data, telefone, CEP) e consulta ViaCEP para preencher endereco; retorna ao login apos envio ou cancelamento.
- **CasinoPage**: layout em rolagem curta com card tematico (naipes), header com aviso de entrada minima, paineis de deposito/apostas/tabuleiro/estatisticas/mensagens, botoes de giro, saque e ajustes.
- **ProfilePage**: exibe dados do usuario logado (nome, email, telefone, status, ultimo acesso) com visual do login e linha de naipes.
- **SettingsModal**: modal de ajustes com paleta dourado/escuro do login, inclui naipes e botoes tematicos para tema e som.
- **WithdrawModal**: modal de saque com mascara BRL no input, exibicao do saldo formatado e campos de valor + chave PIX.

## Fluxos de navegacao
- **Entrada**: LoginPage -> (submit) -> CasinoPage; LoginPage -> (link) -> CreateAccountPage -> (submit ou cancelar) -> LoginPage.
- **Depositar**: inserir valor, validar minimo de R$ 20 e liberar giro com feedback visual/sonoro.
- **Girar**: escolher aposta -> validar saldo -> animacao de giro -> mensagem de resultado.
- **Saque**: abrir modal, mascara BRL aplicada, validar valor (nao pode exceder saldo) e chave PIX obrigatoria, atualizar saldo imediatamente.
- **Configuracoes**: abrir modal pela barra inferior, alternar tema e som com aplicacao instantanea mantendo cores do login.
- **Perfil**: abrir pelo icone da barra inferior; consulta de dados e retorno ao cassino.

## Layout e responsividade
- Layout prioriza legibilidade em celulares, com espaco confortavel e botoes largos; no web o conteudo centraliza com largura maxima controlada.
- Tema claro/escuro ajusta cores de fundo, texto e realces; no tema claro, titulos do header seguem a cor dos naipes.
- Tabuleiro, tipografia e cards escalam proporcionalmente a largura da tela para preservar legibilidade.
- Inputs de saque e deposito usam espaco amplo e contraste alto para leitura rapida.

## Estados e feedback
- **Erros**: mensagens curtas ("Creditos insuficientes...", "O valor minimo para inserir e R$ 20,00.", "Informe a chave PIX...").
- **Sucesso**: "PARABENS!" em vitorias; detalhes aparecem quando ha multiplos bonus.
- **Som**: efeitos distintos para giro, vitoria, erro, deposito e saque, respeitando a flag de som ativo.
- **Mascara**: valores de saque exibidos em BRL enquanto o usuario digita, reduzindo erro de formato.

## Acessibilidade e usabilidade
- Texto direto e botoes com rotulos claros; campos monetarios com teclado numerico.
- Animacoes resumidas ao giro; demais interacoes sao imediatas.
- Busca de CEP automatiza endereco para reduzir digitacao em telas pequenas.
- Sem dependencia de hardware especifico alem do toque e teclado numerico quando aplicavel.
