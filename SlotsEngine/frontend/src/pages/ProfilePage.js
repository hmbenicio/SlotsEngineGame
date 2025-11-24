import React, { useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { themeColors } from "../constants/theme";

const ProfilePage = ({ tema = "dark", user, onBack }) => {
  const { width } = useWindowDimensions();
  const temaAtivo = themeColors[tema] || themeColors.dark;
  const isCompact = width < 720;
  const logoAccent = "#E9B24C";
  const logoAccentDark = "#25272b";

  const shellDynamic = useMemo(
    () => ({
      padding: isCompact ? 20 : 26,
      borderRadius: isCompact ? 22 : 30,
    }),
    [isCompact]
  );

  const cardDynamic = useMemo(
    () => ({
      padding: isCompact ? 14 : 18,
      borderRadius: isCompact ? 14 : 18,
    }),
    [isCompact]
  );

  const info = {
    nome: user?.nome || user?.identificador || "Jogador",
    email: user?.email || "Nao informado",
    telefone: user?.telefone || "Nao informado",
    status: user?.status || "Ativo",
    ultimoAcesso: user?.ultimoAcesso || "Agora mesmo",
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: temaAtivo.background }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.shell,
            shellDynamic,
            {
              backgroundColor: logoAccentDark,
              borderColor: logoAccent,
              shadowColor: logoAccent,
            },
          ]}
        >
          <View style={[styles.hero, { backgroundColor: "#1a1c1f" }]}>
            <View style={styles.header}>
              <View style={[styles.avatar, { borderColor: logoAccent }]}>
                <Text style={[styles.avatarText, { color: logoAccent }]}>U</Text>
              </View>
              <View style={styles.headerText}>
                <Text style={[styles.title, { color: temaAtivo.text }]}>{info.nome}</Text>
                <Text style={[styles.subtitle, { color: temaAtivo.subtext }]}>{info.email}</Text>
              </View>
            </View>
            <View style={styles.suitsRow}>
              {["\u2660", "\u2665", "\u2666", "\u2663"].map((suit) => (
                <Text key={suit} style={[styles.suit, { color: logoAccent }]}>
                  {suit}
                </Text>
              ))}
            </View>
          </View>

          <View
            style={[
              styles.card,
              cardDynamic,
              {
                backgroundColor: temaAtivo.panelBg,
                borderColor: logoAccent,
              },
            ]}
          >
            <Text style={[styles.cardTitle, { color: temaAtivo.text }]}>Dados do usuario</Text>
            <View style={styles.row}>
              <Text style={[styles.label, { color: temaAtivo.subtext }]}>Nome</Text>
              <Text style={[styles.value, { color: temaAtivo.text }]}>{info.nome}</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.label, { color: temaAtivo.subtext }]}>Email</Text>
              <Text style={[styles.value, { color: temaAtivo.text }]}>{info.email}</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.label, { color: temaAtivo.subtext }]}>Telefone</Text>
              <Text style={[styles.value, { color: temaAtivo.text }]}>{info.telefone}</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.label, { color: temaAtivo.subtext }]}>Status</Text>
              <Text style={[styles.value, { color: temaAtivo.text }]}>{info.status}</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.label, { color: temaAtivo.subtext }]}>Ultimo acesso</Text>
              <Text style={[styles.value, { color: temaAtivo.text }]}>{info.ultimoAcesso}</Text>
            </View>
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
            onPress={onBack}
          >
            <Text style={[styles.buttonText, { color: logoAccentDark }]}>
              Voltar ao cassino
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 24,
  },
  shell: {
    width: "100%",
    maxWidth: 640,
    borderWidth: 1,
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
    gap: 16,
  },
  hero: {
    borderRadius: 18,
    padding: 14,
    gap: 10,
    borderWidth: 1,
    borderColor: "#E9B24C",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 26,
    fontWeight: "900",
  },
  headerText: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 0.4,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  card: {
    borderWidth: 1,
    gap: 12,
  },
  cardTitle: {
    fontWeight: "900",
    fontSize: 17,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontWeight: "700",
    fontSize: 14,
  },
  value: {
    fontWeight: "800",
    fontSize: 14,
  },
  button: {
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  buttonText: {
    fontWeight: "900",
    letterSpacing: 0.6,
    fontSize: 15,
  },
  suitsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    paddingTop: 4,
  },
  suit: {
    fontSize: 28,
    fontWeight: "900",
  },
});

export default ProfilePage;
