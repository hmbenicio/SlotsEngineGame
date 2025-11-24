const simbolos = [
  { simbolo: "💎", display: "💎", multiplicador: 10, raridade: "legendary" },
  { simbolo: "👑", display: "👑", multiplicador: 8, raridade: "epic" },
  { simbolo: "🏆", display: "🏆", multiplicador: 6, raridade: "rare" },
  { simbolo: "🪙", display: "🪙", multiplicador: 4, raridade: "uncommon" },
  { simbolo: "💰", display: "💰", multiplicador: 3, raridade: "uncommon" },
  { simbolo: "🎯", display: "🎯", multiplicador: 2, raridade: "common" },
  { simbolo: "♠️", display: "♠️", multiplicador: 1, raridade: "common" },
];

export const simboloDisplay = simbolos.reduce(
  (acc, curr) => ({ ...acc, [curr.simbolo]: curr.display }),
  {}
);

const pagamentos = {
  tresIguais: {
    "💎": 50,
    "👑": 40,
    "🏆": 30,
    "🪙": 20,
    "💰": 15,
    "🎯": 10,
    "♠️": 5,
  },
  linhaHorizontal: {
    top: 5,
    middle: 10,
    bottom: 5,
  },
  linhaDiagonal: {
    esquerdaParaDireita: 15,
    direitaParaEsquerda: 15,
  },
};

const pesosRaridade = {
  common: 50,
  uncommon: 30,
  rare: 15,
  epic: 4,
  legendary: 1,
};

const GRID_LENGTH = 3;

const sortearSimbolo = (simbolosLista) => {
  const pool = [];
  simbolosLista.forEach((s) => {
    const peso = pesosRaridade[s.raridade] ?? 1;
    for (let i = 0; i < peso; i += 1) pool.push(s.simbolo);
  });
  const idx = Math.floor(Math.random() * pool.length);
  return pool[idx];
};

const girar = (simbolosLista) => {
  const grid = [];
  for (let r = 0; r < GRID_LENGTH; r += 1) {
    const linha = [];
    for (let c = 0; c < GRID_LENGTH; c += 1) {
      linha.push(sortearSimbolo(simbolosLista));
    }
    grid.push(linha);
  }
  return grid;
};

const checarTresIguais = (linha) =>
  linha[0] === linha[1] && linha[1] === linha[2] ? linha[0] : null;

const calcularPagamentoTotal = (grid, pagamentosTabela, valorAposta) => {
  let total = 0;
  const detalhes = [];
  const labelsLinhas = ["top", "middle", "bottom"];

  for (let i = 0; i < GRID_LENGTH; i += 1) {
    const linha = grid[i];
    const tres = checarTresIguais(linha);
    if (tres) {
      const ganhoBase = pagamentosTabela.tresIguais[tres] || 0;
      const ganho = ganhoBase * valorAposta;
      total += ganho;
      detalhes.push(
        `3 ${tres} na linha ${labelsLinhas[i]} (tresIguais) +${ganho}`
      );

      const bonusLinha = pagamentosTabela.linhaHorizontal[labelsLinhas[i]] || 0;
      if (bonusLinha) {
        const ganhoBonus = bonusLinha * valorAposta;
        total += ganhoBonus;
        detalhes.push(
          `Bonus linha ${labelsLinhas[i]} (linhaHorizontal) +${ganhoBonus}`
        );
      }
    }
  }

  const diagEsq = [grid[0][0], grid[1][1], grid[2][2]];
  const diagDir = [grid[0][2], grid[1][1], grid[2][0]];
  const todasIguais = (arr) => arr.every((x) => x === arr[0]);

  if (todasIguais(diagEsq)) {
    const ganho =
      pagamentosTabela.linhaDiagonal.esquerdaParaDireita * valorAposta;
    total += ganho;
    detalhes.push(`Diagonal esquerda-direita (${diagEsq.join("")}) +${ganho}`);
  }
  if (todasIguais(diagDir)) {
    const ganho =
      pagamentosTabela.linhaDiagonal.direitaParaEsquerda * valorAposta;
    total += ganho;
    detalhes.push(`Diagonal direita-esquerda (${diagDir.join("")}) +${ganho}`);
  }

  return { total, detalhes };
};

const jogarRodada = (valorAposta) => {
  const grid = girar(simbolos);
  const { total, detalhes } = calcularPagamentoTotal(
    grid,
    pagamentos,
    valorAposta
  );
  return { grid, ganho: total, detalhes };
};

export {
  simbolos,
  pagamentos,
  girar,
  sortearSimbolo,
  calcularPagamentoTotal,
  jogarRodada,
  GRID_LENGTH,
};
