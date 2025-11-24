import React from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/main";

const WithdrawModal = ({
  visivel,
  onClose,
  temaAtivo,
  responsiveStyles,
  saldo,
  valorSaque,
  onChangeValorSaque,
  onConfirmar,
}) => (
  <Modal animationType="fade" transparent visible={visivel} onRequestClose={onClose}>
    <View style={styles.modalOverlay}>
      <View
        style={[
          styles.modalBox,
          {
            backgroundColor: temaAtivo.modalBg,
            borderColor: temaAtivo.modalBorder,
          },
        ]}
      >
        <Text
          style={[
            styles.modalTitle,
            responsiveStyles.buttonText,
            { color: temaAtivo.text },
          ]}
        >
          Sacar Creditos
        </Text>
        <Text style={[styles.modalSubtitle, { color: temaAtivo.subtext }]}>
          Saldo disponivel: {saldo}
        </Text>
        <TextInput
          placeholder="Ex: 50"
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
        <View style={styles.modalActions}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: temaAtivo.buttonBg,
                borderColor: temaAtivo.buttonBorder,
              },
            ]}
            onPress={onConfirmar}
          >
            <Text style={[styles.buttonText, { color: temaAtivo.buttonText }]}>
              Confirmar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              styles.outline,
              {
                backgroundColor: temaAtivo.outlineBg,
                borderColor: temaAtivo.buttonBorder,
              },
            ]}
            onPress={onClose}
          >
            <Text
              style={[
                styles.buttonText,
                styles.outlineText,
                { color: temaAtivo.outlineText },
              ]}
            >
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

export default WithdrawModal;

