import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/main";
import { formatarBRL } from "../utils/format";

const StatCard = ({ label, value, temaAtivo, responsiveStyles }) => (
  <View
    style={[
      styles.statCard,
      {
        backgroundColor: temaAtivo.panelBg,
        borderColor: temaAtivo.panelBorder,
      },
    ]}
  >
    <Text style={[styles.statLabel, { color: temaAtivo.statusText }]}>
      {label}
    </Text>
    <Text
      style={[
        styles.statValue,
        responsiveStyles.statValue,
        { color: temaAtivo.statusValue },
      ]}
    >
      {value}
    </Text>
  </View>
);

const StatsRow = ({
  temaAtivo,
  responsiveStyles,
  saldo,
  ultimaAposta,
  ultimoPremio,
}) => (
  <View style={styles.status}>
    <StatCard
      label="Creditos"
      value={formatarBRL(saldo)}
      temaAtivo={temaAtivo}
      responsiveStyles={responsiveStyles}
    />
    <StatCard
      label="Ultima aposta"
      value={formatarBRL(ultimaAposta)}
      temaAtivo={temaAtivo}
      responsiveStyles={responsiveStyles}
    />
    <StatCard
      label="Ultimo premio"
      value={formatarBRL(ultimoPremio)}
      temaAtivo={temaAtivo}
      responsiveStyles={responsiveStyles}
    />
  </View>
);

export default StatsRow;

