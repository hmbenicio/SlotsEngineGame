import React from "react";
import { Modal, Switch, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/main";

const SettingsModal = ({
  visivel,
  onClose,
  temaAtivo,
  responsiveStyles,
  somAtivo,
  onToggleSom,
  tema,
  onToggleTema,
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
          Configuracoes
        </Text>
        <View style={styles.configRow}>
          <Text style={[styles.configLabel, { color: temaAtivo.text }]}>
            Som
          </Text>
          <Switch value={somAtivo} onValueChange={onToggleSom} />
        </View>
        <View style={styles.configRow}>
          <Text style={[styles.configLabel, { color: temaAtivo.text }]}>
            Modo escuro
          </Text>
          <Switch value={tema === "dark"} onValueChange={onToggleTema} />
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: temaAtivo.buttonBg,
              borderColor: temaAtivo.buttonBorder,
            },
          ]}
          onPress={onClose}
        >
          <Text style={[styles.buttonText, { color: temaAtivo.buttonText }]}>
            Fechar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

export default SettingsModal;

