# Registro de Testes de Usabilidade

Resultados de sessoes rapidas com 3 participantes usando Expo Go (Android).

| Participante | Tarefas concluidas | Tempo ate 1o giro | Mensagens de erro vistas | Observacoes |
| --- | --- | --- | --- | --- |
| P1 (casual) | 6/6 | 45s | 1 (deposito < 20) | Apos mensagem, ajustou o deposito sem ajuda |
| P2 (casual) | 6/6 | 38s | 0 | Elogiou clareza do banner e destaque da linha vencedora |
| P3 (dev) | 6/6 | 30s | 2 (saque > saldo, PIX vazio) | Pediu opcao de persistir saldo e salvar chave PIX |

## Insights
- Mensagens curtas foram suficientes para corrigir erros de entrada.
- O botao de configuracoes foi encontrado facilmente; som e tema alternaram sem atrito.
- Mascara de saque ajudou a evitar formato errado; CEP preencheu endereco quando havia rede.

## Acoes sugeridas
- Avaliar inclusao de persistencia local para saldo/tema/chave PIX.
- Acrescentar tooltip curto explicando regras de pagamento para novos usuarios.
- Exibir aviso quando a consulta de CEP falhar para incentivar preenchimento manual.
