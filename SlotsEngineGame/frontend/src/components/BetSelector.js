import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/main";
import { formatarBRL } from "../utils/format";

const BetSelector = ({
  temaAtivo,
  responsiveStyles,
  apostasDisponiveis,
  apostaAtual,
  onSelecionar,
}) => (
  <View style={styles.control}>
    <Text style={[styles.label, { color: temaAtivo.label }]}>
      Escolha a aposta
    </Text>
    <View style={styles.chips}>
      {apostasDisponiveis.map((valor) => {
        const selecionado = apostaAtual === valor;
        return (
          <TouchableOpacity
            key={valor}
            style={[
              styles.chip,
              responsiveStyles.chip,
              {
                backgroundColor: temaAtivo.chipBg,
                borderColor: temaAtivo.chipBorder,
              },
              selecionado && {
                backgroundColor: temaAtivo.chipSelectedBg,
                borderColor: temaAtivo.chipSelectedBg,
              },
            ]}
            onPress={() => onSelecionar(valor)}
          >
            <Text
              style={[
                styles.chipText,
                responsiveStyles.buttonText,
                {
                  color: selecionado
                    ? temaAtivo.chipSelectedText
                    : temaAtivo.chipText,
                },
              ]}
            >
              {formatarBRL(valor)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);

export default BetSelector;

