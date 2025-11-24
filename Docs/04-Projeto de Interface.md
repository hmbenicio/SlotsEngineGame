# Projeto de Interface

O app agora conta com quatro telas principais (LoginPage, CreateAccountPage, CasinoPage e ProfilePage), mantendo a mesma identidade visual dourado/escuro do login nas demais telas e modais. O fluxo e linear: entrada (login ou cadastro) leva ao cassino; perfil e ajustes sao acessados por acoes diretas.

## Telas
- **LoginPage**: logo, campos de identificacao/senha, linha de naipes e atalho para cadastro; e a tela inicial do app.
- **CreateAccountPage**: coleta nome, email, telefone e senha; retorna ao login apos envio ou cancelamento.
- **CasinoPage**: layout em rolagem curta com card tematico (naipes), header de saldo, paineis de deposito/apostas/tabuleiro/estatisticas/mensagens, botoes de giro, saque e ajustes.
- **ProfilePage**: exibe dados do usuario logado (nome, email, telefone, status, ultimo acesso) com visual do login e linha de naipes.
- **SettingsModal**: modal de ajustes com mesma paleta dourado/escuro do login, inclui naipes e botoes tematicos.

## Fluxos de navegacao
- **Entrada**: LoginPage -> (submit) -> CasinoPage; LoginPage -> (link) -> CreateAccountPage -> (submit ou cancelar) -> LoginPage.
- **Depositar**: inserir valor, validar minimo de R$ 20 e liberar giro com feedback visual/sonoro.
- **Girar**: escolher aposta -> validar saldo -> animacao de giro -> mensagem de resultado.
- **Saque**: abrir modal, validar valor (nao pode exceder saldo) e atualizar imediatamente o painel.
- **Configuracoes**: abrir modal pela barra inferior, alternar tema e som com aplicacao instantanea mantendo cores do login.
- **Perfil**: abrir pelo icone da barra inferior; consulta de dados e retorno ao cassino.

## Layout e responsividade
- Layout prioriza legibilidade em celulares, com espaco confortavel e botoes largos; no web o conteudo centraliza com largura maxima controlada.
- Tema claro/escuro ajusta cores de fundo, texto e realces; no tema claro, titulos do header seguem a cor dos naipes.
- Tabuleiro, tipografia e cards escalam proporcionalmente a largura da tela para preservar legibilidade.

## Estados e feedback
- **Erros**: mensagens curtas ("Creditos insuficientes...", "Deposito minimo e R$ 20,00").
- **Sucesso**: "PARABENS!" em vitorias; detalhes quando ha multiplos bonus.
- **Som**: efeitos distintos para giro, vitoria, erro, deposito e saque, respeitando a flag de som ativo.

## Acessibilidade e usabilidade
- Texto direto e botoes com rotulos claros; poucos campos digitaveis (login, cadastro, deposito, saque).
- Animacoes resumidas ao giro; demais interacoes sao imediatas.
- Sem dependencia de hardware especifico alem do toque e teclado numerico quando aplicavel.
