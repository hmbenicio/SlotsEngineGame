import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles/main";

const MessageBanner = ({ mensagem, mensagemTipo, temaAtivo, responsiveStyles }) => (
  <View
    style={[
      styles.message,
      responsiveStyles.message,
      mensagemTipo === "erro"
        ? {
            backgroundColor: temaAtivo.messageErrorBg,
            borderColor: temaAtivo.messageErrorBorder,
          }
        : {
            backgroundColor: temaAtivo.messageInfoBg,
            borderColor: temaAtivo.messageInfoBorder,
          },
    ]}
  >
    <Text
      style={[
        styles.messageText,
        responsiveStyles.buttonText,
        { color: temaAtivo.messageText },
      ]}
    >
      {mensagem}
    </Text>
  </View>
);

export default MessageBanner;

