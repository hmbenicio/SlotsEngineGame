import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/main";

const DepositSection = ({
  temaAtivo,
  responsiveStyles,
  deposito,
  onChangeDeposito,
  onDepositar,
}) => (
  <View style={styles.control}>
    <Text style={[styles.label, { color: temaAtivo.label }]}>
      Valor para inserir (R$)
    </Text>
    <TextInput
      placeholder="Ex: 20"
      keyboardType="numeric"
      value={deposito}
      onChangeText={onChangeDeposito}
      style={[
        styles.input,
        responsiveStyles.input,
        {
          backgroundColor: temaAtivo.inputBg,
          borderColor: temaAtivo.inputBorder,
          color: temaAtivo.inputText,
        },
      ]}
      placeholderTextColor={temaAtivo.subtext}
    />
    <TouchableOpacity
      style={[
        styles.button,
        responsiveStyles.button,
        {
          backgroundColor: temaAtivo.buttonBg,
          borderColor: temaAtivo.buttonBorder,
        },
      ]}
      onPress={onDepositar}
    >
      <Text
        style={[
          styles.buttonText,
          responsiveStyles.buttonText,
          { color: temaAtivo.buttonText },
        ]}
      >
        Inserir credito
      </Text>
    </TouchableOpacity>
  </View>
);

export default DepositSection;

