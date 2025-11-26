import React from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { themeColors } from "../constants/theme";
import { styles } from "../styles/main";

const WithdrawModal = ({
  visivel,
  onClose,
  temaAtivo,
  responsiveStyles,
  saldo,
  valorSaque,
  onChangeValorSaque,
  chavePix,
  onChangeChavePix,
  onConfirmar,
}) => {
  const logoAccent = "#E9B24C";
  const logoAccentDark = "#25272b";
  const isLight = temaAtivo === themeColors.light;
  const infoTextColor = isLight ? "#FFFFFF" : temaAtivo.subtext;

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visivel}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View
          style={[
            styles.modalBox,
            {
              backgroundColor: logoAccentDark,
              borderColor: logoAccent,
              shadowColor: logoAccent,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 8,
              paddingVertical: 6,
            }}
          >
            {["\u2660", "\u2665", "\u2666", "\u2663"].map((suit) => (
              <Text
                key={suit}
                style={{ fontSize: 22, color: logoAccent, fontWeight: "900" }}
              >
                {suit}
              </Text>
            ))}
          </View>

          <Text
            style={[
              styles.modalTitle,
              responsiveStyles.buttonText,
              { color: logoAccent, textAlign: "center", marginBottom: 8 },
            ]}
          >
            Sacar Creditos
          </Text>

          <Text style={[styles.modalSubtitle, { color: infoTextColor }]}>
            Saldo disponivel: {saldo}
          </Text>

          <TextInput
            placeholder="Digite o valor"
            keyboardType="numeric"
            value={valorSaque}
            onChangeText={onChangeValorSaque}
            style={[
              styles.input,
              {
                backgroundColor: temaAtivo.inputBg,
                borderColor: temaAtivo.inputBorder,
                color: temaAtivo.inputText,
              },
            ]}
            placeholderTextColor={temaAtivo.subtext}
          />

          <Text style={[styles.modalSubtitle, { color: infoTextColor }]}>
            Informe a chave PIX para receber
          </Text>
          <TextInput
            placeholder="Email, telefone ou chave aleatoria"
            value={chavePix}
            onChangeText={onChangeChavePix}
            style={[
              styles.input,
              {
                backgroundColor: temaAtivo.inputBg,
                borderColor: temaAtivo.inputBorder,
                color: temaAtivo.inputText,
              },
            ]}
            placeholderTextColor={temaAtivo.subtext}
            autoCapitalize="none"
            autoCorrect={false}
          />

          <View style={styles.modalActions}>
            <TouchableOpacity
              style={[
                styles.button,
                styles.modalActionButton,
                {
                  backgroundColor: logoAccent,
                  borderColor: logoAccent,
                  shadowColor: logoAccent,
                },
              ]}
              onPress={onConfirmar}
            >
              <Text style={[styles.buttonText, { color: logoAccentDark }]}>
                Confirmar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                styles.outline,
                styles.modalActionButton,
                {
                  backgroundColor: temaAtivo.outlineBg,
                  borderColor: logoAccent,
                },
              ]}
              onPress={onClose}
            >
              <Text style={[styles.buttonText, { color: logoAccent }]}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WithdrawModal;
