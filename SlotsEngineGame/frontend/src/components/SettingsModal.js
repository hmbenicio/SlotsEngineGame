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
}) => {
  const logoAccent = "#E9B24C";
  const logoAccentDark = "#25272b";
  const labelColor = tema === "light" ? "#FFFFFF" : temaAtivo.text;

  return (
    <Modal animationType="fade" transparent visible={visivel} onRequestClose={onClose}>
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
              <Text key={suit} style={{ fontSize: 22, color: logoAccent, fontWeight: "900" }}>
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
            AJUSTES
          </Text>
          <View style={styles.configRow}>
            <Text style={[styles.configLabel, { color: labelColor }]}>
              Som
            </Text>
            <Switch value={somAtivo} onValueChange={onToggleSom} />
          </View>
          <View style={styles.configRow}>
            <Text style={[styles.configLabel, { color: labelColor }]}>
              Modo escuro
            </Text>
            <Switch value={tema === "dark"} onValueChange={onToggleTema} />
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: logoAccent,
                borderColor: logoAccent,
                shadowColor: logoAccent,
              },
            ]}
            onPress={onClose}
          >
            <Text style={[styles.buttonText, { color: logoAccentDark }]}>
              Fechar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;

