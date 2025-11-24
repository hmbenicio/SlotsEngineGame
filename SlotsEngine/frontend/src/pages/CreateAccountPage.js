import React, { useMemo, useState } from "react";
import {
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

const initialState = {
  nomeCompleto: "",
  cpf: "",
  dataNascimento: "",
  contato: "",
  email: "",
  confirmarEmail: "",
  senha: "",
  confirmarSenha: "",
  cep: "",
  endereco: "",
  numero: "",
  bairro: "",
  cidade: "",
  uf: "",
};

const CreateAccountPage = ({ tema = "dark", onSubmit, onCancel }) => {
  const { width } = useWindowDimensions();
  const [form, setForm] = useState(initialState);

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

  const fieldDynamic = useMemo(
    () => ({
      paddingVertical: isCompact ? 12 : 14,
      paddingHorizontal: isCompact ? 12 : 14,
      borderRadius: isCompact ? 12 : 14,
    }),
    [isCompact]
  );

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(form);
    }
  };

  const handleCancel = () => {
    setForm(initialState);
    if (onCancel) {
      onCancel();
    }
  };

  const renderField = (key, label, placeholder, options = {}) => (
    <View style={[styles.fieldGroup, isCompact && styles.fieldGroupCompact]} key={key}>
      <Text style={[styles.label, { color: temaAtivo.label }]}>{label}</Text>
      <TextInput
        value={form[key]}
        onChangeText={(text) => handleChange(key, text)}
        placeholder={placeholder}
        placeholderTextColor={temaAtivo.subtext}
        secureTextEntry={options.secureTextEntry}
        keyboardType={options.keyboardType}
        autoCapitalize={options.autoCapitalize || "none"}
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
  );

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
              <Text style={[styles.title, { color: temaAtivo.text }]}>Criar conta</Text>
              <Text style={[styles.subtitle, { color: temaAtivo.subtext }]}>
                Complete seus dados para começar a jogar com segurança.
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
              <Text style={[styles.badgeText, { color: logoAccent }]}>Conta protegida</Text>
            </View>
            <View style={[styles.heroStripe, { backgroundColor: logoAccent }]} />
          </View>

          <View
            style={[
              styles.section,
              {
                backgroundColor: temaAtivo.panelBg,
                borderColor: logoAccent,
              },
            ]}
          >
            <Text style={[styles.sectionTitle, { color: temaAtivo.text }]}>Dados pessoais</Text>
            <View style={[styles.formRow, isCompact && styles.formRowStacked]}>
              {renderField("nomeCompleto", "Nome completo", "Digite seu nome", {
                autoCapitalize: "words",
              })}
              {renderField("cpf", "CPF", "000.000.000-00", {
                keyboardType: "numeric",
              })}
            </View>
            <View style={[styles.formRow, isCompact && styles.formRowStacked]}>
              {renderField("dataNascimento", "Data de nascimento", "DD/MM/AAAA", {
                keyboardType: "numeric",
              })}
              {renderField("contato", "Contato (telefone)", "(00) 90000-0000", {
                keyboardType: "phone-pad",
              })}
            </View>
          </View>

          <View
            style={[
              styles.section,
              {
                backgroundColor: temaAtivo.panelBg,
                borderColor: logoAccent,
              },
            ]}
          >
            <Text style={[styles.sectionTitle, { color: temaAtivo.text }]}>Contato</Text>
            <View style={[styles.formRow, isCompact && styles.formRowStacked]}>
              {renderField("email", "E-mail", "Digite seu e-mail", {
                keyboardType: "email-address",
                autoCapitalize: "none",
              })}
              {renderField("confirmarEmail", "Confirmar E-mail", "Repita seu e-mail", {
                keyboardType: "email-address",
                autoCapitalize: "none",
              })}
            </View>
          </View>

          <View
            style={[
              styles.section,
              {
                backgroundColor: temaAtivo.panelBg,
                borderColor: logoAccent,
              },
            ]}
          >
            <Text style={[styles.sectionTitle, { color: temaAtivo.text }]}>Segurança</Text>
            <View style={[styles.formRow, isCompact && styles.formRowStacked]}>
              {renderField("senha", "Senha", "Crie uma senha segura", {
                secureTextEntry: true,
              })}
              {renderField("confirmarSenha", "Confirmar senha", "Repita a senha", {
                secureTextEntry: true,
              })}
            </View>
          </View>

          <View
            style={[
              styles.section,
              {
                backgroundColor: temaAtivo.panelBg,
                borderColor: logoAccent,
              },
            ]}
          >
            <Text style={[styles.sectionTitle, { color: temaAtivo.text }]}>Endereço</Text>
            <View style={[styles.formRow, isCompact && styles.formRowStacked]}>
              {renderField("cep", "CEP", "00000-000", {
                keyboardType: "numeric",
              })}
              {renderField("endereco", "Endereço (Rua ou Av.)", "Informe seu endereço", {
                autoCapitalize: "words",
              })}
              {renderField("numero", "Número", "Ex: 123", {
                keyboardType: "numeric",
              })}
            </View>

            <View style={[styles.formRow, isCompact && styles.formRowStacked]}>
              {renderField("bairro", "Bairro", "Digite o bairro", {
                autoCapitalize: "words",
              })}
              {renderField("cidade", "Cidade", "Digite a cidade", {
                autoCapitalize: "words",
              })}
              {renderField("uf", "UF", "Ex: SP", {
                autoCapitalize: "characters",
              })}
            </View>
          </View>

          <View style={[styles.actions, isCompact && styles.formRowStacked]}>
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
              <Text style={[styles.buttonText, { color: logoAccentDark }]}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                styles.buttonGhost,
                {
                  backgroundColor: temaAtivo.outlineBg,
                  borderColor: logoAccent,
                },
              ]}
              onPress={handleCancel}
            >
              <Text style={[styles.buttonText, { color: logoAccent }]}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateAccountPage;

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
    maxWidth: 880,
    alignSelf: "center",
    borderWidth: 1,
    shadowOpacity: 0.3,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 12 },
    elevation: 8,
    gap: 16,
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
  header: {
    gap: 6,
    alignItems: "center",
  },
  badge: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1,
    alignSelf: "center",
  },
  badgeText: {
    fontWeight: "800",
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    letterSpacing: 1,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
  },
  formRow: {
    flexDirection: "row",
    gap: 12,
  },
  formRowStacked: {
    flexDirection: "column",
  },
  fieldGroup: {
    flex: 1,
  },
  fieldGroupCompact: {
    width: "100%",
  },
  label: {
    fontWeight: "800",
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  input: {
    borderWidth: 1,
    fontWeight: "600",
  },
  actions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
  },
  button: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 14,
    alignItems: "center",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  buttonGhost: {
    opacity: 0.95,
  },
  buttonText: {
    fontWeight: "900",
    letterSpacing: 0.6,
    fontSize: 15,
  },
  section: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    gap: 12,
  },
  sectionTitle: {
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 0.4,
  },
});
