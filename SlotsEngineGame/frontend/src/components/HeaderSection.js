import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/main";

const HeaderSection = ({ temaAtivo, responsiveStyles, accentColor }) => {
  const titleColor = accentColor || temaAtivo.text;
  const subtitleColor = accentColor || temaAtivo.subtext;

  return (
  <View style={styles.header}>
    <View>
      <Text
        style={[
          styles.title,
          responsiveStyles.title,
          { color: titleColor },
        ]}
      >
        MEU CASSINO
      </Text>
      <Text
        style={[
          styles.discreet,
          responsiveStyles.discreet,
          { color: subtitleColor },
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
};

export default HeaderSection;

