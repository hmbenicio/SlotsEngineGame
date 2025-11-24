import React from "react";
import { Animated, Text, View } from "react-native";
import { styles } from "../styles/main";

const SlotBoard = ({
  grid,
  temaAtivo,
  responsiveStyles,
  cellSize,
  gridWidth,
  girando,
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
        { width: gridWidth, backgroundColor: temaAtivo.gridBg },
        responsiveStyles.grid,
      ]}
    >
      {grid.map((cell) => (
        <Animated.View
          key={cell.id}
          style={[
            styles.cell,
            responsiveStyles.cell,
            {
              backgroundColor: temaAtivo.cellBg,
              borderColor: cell.destaque
                ? temaAtivo.cellWinBorder
                : temaAtivo.cellBorder,
              shadowColor: cell.destaque ? temaAtivo.cellWinBorder : "#000",
              shadowOpacity: cell.destaque ? 0.5 : 0.25,
            },
            { width: cellSize, height: cellSize },
            girando && styles.cellSpinning,
            {
              transform: [
                {
                  rotateX: girando
                    ? spinColumns[cell.id % gridSize].interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "360deg"],
                      })
                    : "0deg",
                },
              ],
            },
          ]}
        >
          <Text style={[styles.cellText, responsiveStyles.cellText]}>
            {cell.valor}
          </Text>
        </Animated.View>
      ))}
    </View>
  </View>
);

export default SlotBoard;

