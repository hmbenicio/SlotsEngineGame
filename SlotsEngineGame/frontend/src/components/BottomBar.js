import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/main";

const BottomBar = ({ temaAtivo, onProfile, onExit, onOpenSettings }) => (
  <View
    style={[
      styles.bottomBar,
      {
        backgroundColor: temaAtivo.panelBg,
        borderColor: temaAtivo.panelBorder,
      },
    ]}
  >
    <TouchableOpacity style={styles.iconButton} onPress={onProfile}>
      <Text style={[styles.bottomIcon, { color: temaAtivo.text }]}>👤</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.exitButton,
        {
          backgroundColor: temaAtivo.exitButtonBg,
          borderColor: temaAtivo.shellBorder,
        },
      ]}
      onPress={onExit}
    >
      <Text style={[styles.exitButtonText, { color: temaAtivo.exitButtonText }]}>
        Sair
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconButton} onPress={onOpenSettings}>
      <Text style={[styles.bottomIcon, { color: temaAtivo.text }]}>⚙</Text>
    </TouchableOpacity>
  </View>
);

export default BottomBar;
