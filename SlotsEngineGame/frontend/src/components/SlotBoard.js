import React from "react";
import { Animated, Text, View } from "react-native";
import { styles } from "../styles/main";

const SlotBoard = ({
  grid,
  temaAtivo,
  responsiveStyles,
  cellSize,
  gridWidth,
  colunasGirando,
  spinColumns,
  gridSize,
}) => (
  <View
    style={[
      styles.board,
      responsiveStyles.board,
      {
        backgroundColor: temaAtivo.boardBg,
        borderColor: temaAtivo.boardBorder,
      },
    ]}
  >
    <View
      style={[
        styles.grid,
        {
          width: gridWidth,
          backgroundColor: temaAtivo.gridBg,
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "flex-start",
          overflow: "hidden",
        },
        responsiveStyles.grid,
      ]}
    >
      {Array.from({ length: gridSize }).map((_, colIdx) => {
        const columnCells = grid.filter((cell) => cell.id % gridSize === colIdx);
        const columnGap = responsiveStyles.grid?.gap ?? 6;
        const colunaAtiva = colunasGirando[colIdx];
        const displayCells = colunaAtiva
          ? [...columnCells, ...columnCells]
          : columnCells;
        const travel = (cellSize + columnGap) * columnCells.length;
        const colunaAltura =
          cellSize * gridSize + columnGap * (gridSize - 1);

        return (
          <View
            key={`col-${colIdx}`}
            style={[
              {
                height: colunaAltura,
                width: cellSize,
                overflow: "hidden",
                marginRight: colIdx === gridSize - 1 ? 0 : columnGap,
              },
            ]}
          >
            <Animated.View
              style={[
                { flexDirection: "column", gap: columnGap },
                colunaAtiva && styles.cellSpinning,
                {
                  opacity: colunaAtiva ? 0.94 : 1,
                  transform: colunaAtiva
                    ? [
                        {
                          translateY: spinColumns[colIdx].interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, -travel],
                          }),
                        },
                      ]
                    : [],
                },
              ]}
            >
              {displayCells.map((cell, idx) => (
                <View
                  key={`${cell.id}-${idx}`}
                  style={[
                    styles.cell,
                    responsiveStyles.cell,
                    {
                      backgroundColor: temaAtivo.cellBg,
                      borderColor: cell.destaque
                        ? temaAtivo.cellWinBorder
                        : temaAtivo.cellBorder,
                      shadowColor: cell.destaque
                        ? temaAtivo.cellWinBorder
                        : "#000",
                      shadowOpacity: cell.destaque ? 0.5 : 0.25,
                    },
                    { width: cellSize, height: cellSize },
                  ]}
                >
                  <Text style={[styles.cellText, responsiveStyles.cellText]}>
                    {cell.valor}
                  </Text>
                </View>
              ))}
            </Animated.View>
          </View>
        );
      })}
    </View>
  </View>
);

export default SlotBoard;

