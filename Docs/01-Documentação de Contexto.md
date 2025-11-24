# Introdução

SlotsEngine é um aplicativo mobile de slot machine criado em React Native com Expo. O projeto simula o ciclo completo de um jogo casual de caça-níqueis (depósito, aposta, giro, cálculo de ganhos e saque fictício), mantendo todo o estado no cliente e expondo a lógica de sorteio e pagamento de forma transparente.

# Problema

Jogos de slots costumam depender de backends ou serviços proprietários para controlar regras, pagamentos e feedback ao usuário. Para fins de estudo e portfólio, o objetivo aqui é demonstrar esse fluxo de ponta a ponta apenas no front-end, garantindo:
- clareza sobre créditos e apostas sem envolver dinheiro real;
- feedback instantâneo sobre vitórias/erros em uma grade compacta (3x3);
- alternância de tema e sons para reforçar a experiência audiovisual mesmo sem infraestrutura externa.

# Objetivos

**Objetivo geral:** entregar um protótipo funcional de slots, autossuficiente no cliente, com regras de premiação configuráveis e UX clara.

**Objetivos específicos:**
- Validar a interação principal (depósito → aposta → giro → saque) em tela pequena, com mensagens curtas e status visível.
- Implementar regras de raridade e pagamentos por linhas/diagonais, permitindo ajustes rápidos de balanceamento.
- Disponibilizar controles de acessibilidade imediata: ligar/desligar sons e alternar tema claro/escuro.
- Documentar a arquitetura e o fluxo de jogo para facilitar reuso didático ou evolução futura.

# Justificativa

O projeto funciona como laboratório de UX e lógica de jogos casuais sem dependências de backend. Ele permite demonstrar:
- como estruturar estados críticos (saldo, aposta, resultados) em um único hook;
- como comunicar erros comuns (saldo insuficiente, depósito abaixo do mínimo, saque maior que o saldo) de forma consistente;
- como aplicar pesos de raridade e pagamentos graduais em uma grade pequena para manter legibilidade.

Foram usados benchmarks simples: inspeção de apps de slots populares, entrevistas rápidas com colegas jogadores ocasionais e sessões exploratórias no Expo Go.

# Público-alvo

- **Jogadores ocasionais** que querem entender rapidamente saldo, aposta e resultado sem tutoriais longos.
- **Estudantes/desenvolvedores** interessados em examinar a lógica de sorteio, pagamentos e controle de estado em React Native.
- **Stakeholders acadêmicos/mentores** que avaliam clareza da documentação e da experiência.

## Perfis
- **Marina (24, designer júnior)**: testa UX de jogos casuais, valoriza clareza visual e feedback imediato.
- **Carlos (29, dev mobile)**: busca exemplos de hooks e animações simples para jogos 2D.
- **Gerente/mentor**: precisa validar que não há transações reais e que o fluxo está bem documentado.

## Mapa de stakeholders

```flowchart LR
    %% ESTILO CORPORATIVO
    classDef node fill:#ffffff,stroke:#1f2937,stroke-width:1.2px,color:#1f2937,font-size:14px,font-weight:bold;
    classDef center fill:#f3f4f6,stroke:#1f2937,stroke-width:1.5px,color:#1f2937,font-size:14px,font-weight:bold;

    %% NODES
    U["• Jogadores ocasionais"]
    D["• Desenvolvedores / Estudantes"]
    M["• Mentores / Avaliadores"]
    E["⚙️ Equipe de Desenvolvimento"]
    A["🎰 SlotsEngine (Frontend)"]

    %% APLICAÇÃO DE CLASSES
    class U,D,M,E node;
    class A center;

    %% RELACIONAMENTOS
    U -->|"Feedback"| E
    D -->|"Contribuições"| E
    M -->|"Validação"| E

    E -->|"Implementação"| A

    A -->|"Uso / Experiência"| U
    A -->|"Estudo / Código"| D
    A -->|"Documentação"| M
```


O entendimento desses perfis guiou mensagens curtas, limites claros de valores e a escolha por não depender de backend.
