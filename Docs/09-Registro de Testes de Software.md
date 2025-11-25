# Registro de Testes de Software

Registro da execucao manual dos casos descritos no Plano de Testes.

| Data | Ambiente | Caso | Resultado | Observacoes |
| --- | --- | --- | --- | --- |
| 24/11/2025 | Expo Go (Android) | CT-01 | Aprovado | Mensagem exibida e saldo permaneceu 0 |
| 24/11/2025 | Expo Go (Android) | CT-02 | Aprovado | Som reproduzido e saldo atualizado |
| 24/11/2025 | Expo Go (Android) | CT-03 | Aprovado | Bloqueio do giro e mensagem de erro |
| 24/11/2025 | Expo Go (Android) | CT-04 | Aprovado | Apos algumas tentativas, bonus aplicado e destaque da linha |
| 24/11/2025 | Expo Go (Android) | CT-05 | Aprovado | Mensagem "Nao foi dessa vez. Tente de novo!" e saldo debitado |
| 24/11/2025 | Expo Go (Android) | CT-06 | Aprovado | Modal de saque impediu valor superior ao saldo |
| 24/11/2025 | Expo Go (Android) | CT-07 | Aprovado | Bloqueio ao deixar chave PIX vazia |
| 24/11/2025 | Expo Go (Android) | CT-08 | Aprovado | Saldo abatido corretamente e mensagem de sucesso |
| 24/11/2025 | Expo Go (Web) | CT-09 | Aprovado | Tema alternou imediatamente |
| 24/11/2025 | Expo Go (Web) | CT-10 | Aprovado | Audio suprimido com som desligado |
| 24/11/2025 | Expo Go (Web) | CT-11 | Aprovado | Mascara de saque manteve formato BRL durante digitacao |
| 24/11/2025 | Expo Go (Web) | CT-12 | Parcial | ViaCEP respondeu e preencheu endereco; caso offline reverter para preenchimento manual |

## Pendencias
- Automacao futura dos testes de logica (`slotLogic.js`) com Jest para validar pagamentos e pesos de raridade.
- Mock de requisicao ViaCEP para testar fluxo offline sem depender da rede.
