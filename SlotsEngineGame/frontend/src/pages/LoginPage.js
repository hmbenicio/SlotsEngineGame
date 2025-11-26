import React, { useMemo, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { themeColors } from "../constants/theme";

const LoginPage = ({ tema = "dark", onSubmit, onCreateAccount }) => {
  const { width } = useWindowDimensions();
  const [identificador, setIdentificador] = useState("");
  const [senha, setSenha] = useState("");

  const temaAtivo = themeColors[tema] || themeColors.dark;
  const isCompact = width < 720;
  const logoAccent = "#E9B24C";
  const logoAccentDark = "#25272b";

  const shellDynamic = useMemo(
    () => ({
      padding: isCompact ? 20 : 28,
      borderRadius: isCompact ? 22 : 30,
    }),
    [isCompact]
  );

  const fieldDynamic = useMemo(
    () => ({
      paddingVertical: isCompact ? 12 : 14,
      paddingHorizontal: isCompact ? 12 : 14,
      borderRadius: isCompact ? 12 : 14,
    }),
    [isCompact]
  );

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({ identificador, senha });
    }
  };

  const handleCreateAccount = () => {
    if (onCreateAccount) {
      onCreateAccount();
    }
  };

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: temaAtivo.background }]}
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
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
            <View style={[styles.logoBox, isCompact && styles.logoBoxCompact]}>
              <Image
                source={require("../../assets/Logo.png")}
                style={styles.logo}
                resizeMode="contain"
              />
              <View style={styles.logoTextBlock}>
                <Text style={[styles.title, { color: temaAtivo.text }]}>
                  Bem-vindo de volta
                </Text>
                <Text style={[styles.subtitle, { color: temaAtivo.subtext }]}>
                  Faça login com CPF ou e-mail para continuar jogando com
                  segurança.
                </Text>
              </View>
              <View
                style={[
                  styles.badge,
                  {
                    backgroundColor: logoAccentDark,
                    borderColor: logoAccent,
                  },
                ]}
              >
                <Text style={[styles.badgeText, { color: logoAccent }]}>
                  Acesso seguro · 24/7
                </Text>
              </View>
            </View>
            <View
              style={[styles.heroStripe, { backgroundColor: logoAccent }]}
            />
          </View>

          <View
            style={[
              styles.panel,
              {
                backgroundColor: temaAtivo.panelBg,
                borderColor: logoAccent,
              },
            ]}
          >
            <View style={[styles.form, isCompact && styles.formCompact]}>
              <View style={styles.fieldGroup}>
                <Text style={[styles.label, { color: temaAtivo.label }]}>
                  CPF ou E-mail
                </Text>
                <TextInput
                  value={identificador}
                  onChangeText={setIdentificador}
                  placeholder="Digite seu CPF ou e-mail"
                  placeholderTextColor={temaAtivo.subtext}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  style={[
                    styles.input,
                    fieldDynamic,
                    {
                      backgroundColor: temaAtivo.inputBg,
                      borderColor: temaAtivo.inputBorder,
                      color: temaAtivo.inputText,
                    },
                  ]}
                />
              </View>

              <View style={styles.fieldGroup}>
                <Text style={[styles.label, { color: temaAtivo.label }]}>
                  Senha
                </Text>
                <TextInput
                  value={senha}
                  onChangeText={setSenha}
                  placeholder="Digite sua senha"
                  placeholderTextColor={temaAtivo.subtext}
                  secureTextEntry
                  style={[
                    styles.input,
                    fieldDynamic,
                    {
                      backgroundColor: temaAtivo.inputBg,
                      borderColor: temaAtivo.inputBorder,
                      color: temaAtivo.inputText,
                    },
                  ]}
                />
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
                onPress={handleSubmit}
              >
                <Text style={[styles.buttonText, { color: logoAccentDark }]}>
                  Entrar
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.linkBox}
              onPress={handleCreateAccount}
            >
              <Text style={[styles.linkText, { color: logoAccent }]}>
                Criar conta
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.suitsRow}>
            <Text style={[styles.suit, { color: logoAccent }]}>♠</Text>
            <Text style={[styles.suit, { color: logoAccent }]}>♣</Text>
            <Text style={[styles.suit, { color: logoAccent }]}>♥</Text>
            <Text style={[styles.suit, { color: logoAccent }]}>♦</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    padding: 18,
    paddingBottom: 32,
    alignItems: "center",
  },
  shell: {
    width: "100%",
    maxWidth: 720,
    alignSelf: "center",
    borderWidth: 1,
    shadowOpacity: 0.3,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
    gap: 18,
    alignItems: "stretch",
  },
  hero: {
    borderRadius: 18,
    padding: 16,
    gap: 12,
    overflow: "hidden",
  },
  heroStripe: {
    height: 6,
    width: "100%",
    borderRadius: 6,
  },
  logoBox: {
    alignItems: "center",
    gap: 12,
  },
  logoBoxCompact: {
    width: "100%",
  },
  logo: {
    width: 300,
    height: 120,
    borderRadius: 14,
  },
  logoTextBlock: {
    gap: 6,
    alignItems: "center",
  },
  badge: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 4,
  },
  badgeText: {
    fontWeight: "800",
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    letterSpacing: 1,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
  },
  panel: {
    borderRadius: 18,
    borderWidth: 1,
    padding: 18,
    gap: 14,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  form: {
    gap: 14,
  },
  formCompact: {
    width: "100%",
  },
  fieldGroup: {
    width: "100%",
    gap: 6,
  },
  label: {
    fontWeight: "800",
    letterSpacing: 0.3,
  },
  input: {
    borderWidth: 1,
    fontWeight: "600",
  },
  button: {
    borderRadius: 12,
    borderWidth: 1,
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
  linkBox: {
    alignItems: "center",
    paddingVertical: 8,
  },
  linkText: {
    fontWeight: "800",
    letterSpacing: 0.4,
  },
  suitsRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    paddingVertical: 6,
  },
  suit: {
    fontSize: 35,
  },
});
