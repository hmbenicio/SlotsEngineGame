import { gridSize as defaultGridSize } from "../constants/game";

const calcCellId = (row, col, size) => row * size + col;

export const matrixToCells = (
  matrix,
  winners = new Set(),
  size = defaultGridSize,
  displayMap = {}
) =>
  matrix.flatMap((row, r) =>
    row.map((valor, c) => ({
      id: calcCellId(r, c, size),
      valor: displayMap[valor] ?? valor,
      destaque: winners.has(calcCellId(r, c, size)),
    }))
  );

export const obterPosicoesVencedoras = (matrix, size = defaultGridSize) => {
  const pos = new Set();
  for (let r = 0; r < size; r++) {
    if (matrix[r][0] === matrix[r][1] && matrix[r][1] === matrix[r][2]) {
      pos.add(calcCellId(r, 0, size));
      pos.add(calcCellId(r, 1, size));
      pos.add(calcCellId(r, 2, size));
    }
  }
  if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
    pos.add(calcCellId(0, 0, size));
    pos.add(calcCellId(1, 1, size));
    pos.add(calcCellId(2, 2, size));
  }
  if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
    pos.add(calcCellId(0, 2, size));
    pos.add(calcCellId(1, 1, size));
    pos.add(calcCellId(2, 0, size));
  }
  return pos;
};
