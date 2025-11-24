import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/main";

const HeaderSection = ({ temaAtivo, responsiveStyles }) => (
  <View style={styles.header}>
    <View>
      <Text
        style={[
          styles.title,
          responsiveStyles.title,
          { color: temaAtivo.text },
        ]}
      >
        MEU CASSINO
      </Text>
      <Text
        style={[
          styles.discreet,
          responsiveStyles.discreet,
          { color: temaAtivo.subtext },
        ]}
      >
        So vale combinacao horizontal ou transversal.
      </Text>
    </View>
    <View
      style={[
        styles.badge,
        {
          backgroundColor: temaAtivo.badgeBg,
          borderColor: temaAtivo.badgeBorder,
        },
      ]}
    >
      <Text
        style={[
          styles.badgeText,
          responsiveStyles.badgeText,
          { color: temaAtivo.badgeText },
        ]}
      >
        Entrada minima: R$ 20,00
      </Text>
    </View>
  </View>
);

export default HeaderSection;

