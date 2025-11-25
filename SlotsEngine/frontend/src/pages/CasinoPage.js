import React, { useEffect, useMemo, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Animated,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import BottomBar from "../components/BottomBar";
import BetSelector from "../components/BetSelector";
import DepositSection from "../components/DepositSection";
import HeaderSection from "../components/HeaderSection";
import MessageBanner from "../components/MessageBanner";
import SettingsModal from "../components/SettingsModal";
import SlotBoard from "../components/SlotBoard";
import StatsRow from "../components/StatsRow";
import WithdrawModal from "../components/WithdrawModal";
import { apostasDisponiveis, gridSize } from "../constants/game";
import { themeColors } from "../constants/theme";
import useSlotMachine from "../hooks/useSlotMachine";
import { formatarBRL } from "../utils/format";
import { styles } from "../styles/main";

const CasinoPage = ({ onExit, onOpenProfile }) => {
  const { width } = useWindowDimensions();
  const {
    aposta,
    setAposta,
    saldo,
    ultimaAposta,
    ultimoPremio,
    deposito,
    setDeposito,
    grid,
    mensagem,
    mensagemTipo,
    modalSaqueAberto,
    setModalSaqueAberto,
    modalConfigAberto,
    setModalConfigAberto,
    valorSaque,
    setValorSaque,
    chavePix,
    setChavePix,
    girando,
    somAtivo,
    setSomAtivo,
    tema,
    toggleTema,
    prepararRodada,
    aplicarResultado,
    handleDepositar,
    abrirModalSaque,
    confirmarSaque,
    setMensagemComTipo,
  } = useSlotMachine();

  const temaAtivo = themeColors[tema];
  const logoAccent = "#E9B24C";
  const logoAccentDark = "#25272b";

  const gridWidth = useMemo(() => {
    const maxWidth = 300;
    const minWidth = 180;
    return Math.max(Math.min(width * 0.78, maxWidth), minWidth);
  }, [width]);

  const referenceWidth = 390;
  const scale = Math.min(Math.max(width / referenceWidth, 0.9), 1.08);
  const fontScale = Math.min(Math.max(width / referenceWidth, 0.94), 1.1);

  const s = (value) => Math.round(value * scale);
  const fs = (value) => Math.round(value * fontScale);

  const cellSize = useMemo(() => {
    const gaps = 8;
    const gridInnerPadding = 12;
    return (gridWidth - gaps * 2 - gridInnerPadding * 2) / gridSize;
  }, [gridWidth]);

  const responsiveStyles = useMemo(
    () => ({
      shell: { padding: s(18), borderRadius: s(28) },
      panel: { padding: s(12), borderRadius: s(18) },
      header: { marginBottom: s(18) },
      title: { fontSize: fs(30) },
      discreet: { fontSize: fs(13) },
      badgeText: { fontSize: fs(13) },
      input: { padding: s(12), borderRadius: s(12), fontSize: fs(16) },
      button: { paddingVertical: s(14), borderRadius: s(12) },
      buttonText: { fontSize: fs(15) },
      chip: {
        paddingVertical: s(10),
        paddingHorizontal: s(14),
        borderRadius: s(14),
      },
      grid: { padding: s(8), borderRadius: s(12), gap: s(6) },
      cell: {
        borderRadius: s(12),
        borderWidth: Math.max(1, Math.round(1 * scale)),
      },
      cellText: { fontSize: fs(50) },
      board: { padding: s(16), borderRadius: s(22) },
      message: { padding: s(12), borderRadius: s(14) },
      statCard: {
        paddingVertical: s(10),
        paddingHorizontal: s(12),
        borderRadius: s(14),
      },
      statValue: { fontSize: fs(16) },
    }),
    [scale, fontScale]
  );

  const spinColumns = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;
  const spinLoops = useRef([]);
  const timeoutRef = useRef(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      spinLoops.current.forEach((loop) => loop && loop.stop && loop.stop());
    },
    []
  );

  const pararAnimacao = () => {
    spinLoops.current.forEach((loop) => loop && loop.stop && loop.stop());
    spinColumns.forEach((value) => value.setValue(0));
  };

  const iniciarAnimacao = () => {
    spinLoops.current.forEach((loop) => loop && loop.stop && loop.stop());
    spinColumns.forEach((value) => value.setValue(0));
    spinLoops.current = spinColumns.map((value, idx) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(value, {
            toValue: 1,
            duration: 200,
            delay: idx * 80,
            useNativeDriver: true,
          }),
          Animated.timing(value, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
        ])
      )
    );
    spinLoops.current.forEach((loop) => loop.start());
  };

  const handleGirar = () => {
    const podeGirar = prepararRodada();
    if (!podeGirar) return;

    iniciarAnimacao();
    timeoutRef.current = setTimeout(() => {
      aplicarResultado();
      pararAnimacao();
    }, 300);
  };

  const handleExit = () => {
    setMensagemComTipo("Sessao encerrada.", false);
    if (onExit) {
      onExit();
    }
  };

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: temaAtivo.background }]}
    >
      <StatusBar style={tema === "dark" ? "light" : "dark"} />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.shell,
            responsiveStyles.shell,
            {
              width: "100%",
              maxWidth: 540,
              backgroundColor: logoAccentDark,
              borderColor: logoAccent,
              shadowColor: logoAccent,
            },
          ]}
        >
          <View
            style={{
              backgroundColor: "#1a1c1f",
              borderRadius: s(18),
              padding: s(14),
              marginBottom: s(12),
              shadowColor: logoAccent,
              shadowOpacity: 0.25,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 6 },
              elevation: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: s(30),
              }}
            >
              {["\u2660", "\u2665", "\u2666", "\u2663"].map((suit) => (
                <Text
                  key={suit}
                  style={{
                    color: logoAccent,
                    fontWeight: "900",
                    fontSize: fs(34),
                  }}
                >
                  {suit}
                </Text>
              ))}
            </View>
          </View>
          <HeaderSection
            temaAtivo={temaAtivo}
            responsiveStyles={responsiveStyles}
            accentColor={tema === "light" ? logoAccent : undefined}
          />

          <View
            style={[
              styles.panel,
              responsiveStyles.panel,
              styles.controls,
              {
                backgroundColor: temaAtivo.panelBg,
                borderColor: temaAtivo.panelBorder,
              },
            ]}
          >
            <DepositSection
              temaAtivo={temaAtivo}
              responsiveStyles={responsiveStyles}
              deposito={deposito}
              onChangeDeposito={setDeposito}
              onDepositar={handleDepositar}
            />

            <BetSelector
              temaAtivo={temaAtivo}
              responsiveStyles={responsiveStyles}
              apostasDisponiveis={apostasDisponiveis}
              apostaAtual={aposta}
              onSelecionar={setAposta}
            />
          </View>

          <SlotBoard
            grid={grid}
            temaAtivo={temaAtivo}
            responsiveStyles={responsiveStyles}
            cellSize={cellSize}
            gridWidth={gridWidth}
            girando={girando}
            spinColumns={spinColumns}
            gridSize={gridSize}
          />

          <StatsRow
            temaAtivo={temaAtivo}
            responsiveStyles={responsiveStyles}
            saldo={saldo}
            ultimaAposta={ultimaAposta}
            ultimoPremio={ultimoPremio}
          />

          <TouchableOpacity
            style={[
              styles.button,
              responsiveStyles.button,
              girando && styles.buttonDisabled,
              {
                backgroundColor: temaAtivo.buttonBg,
                borderColor: temaAtivo.buttonBorder,
                marginTop: 12,
              },
            ]}
            onPress={handleGirar}
            disabled={girando}
          >
            <Animated.Text
              style={[
                styles.buttonText,
                responsiveStyles.buttonText,
                { color: temaAtivo.buttonText },
              ]}
            >
              {girando ? "Girando..." : "Girar roleta"}
            </Animated.Text>
          </TouchableOpacity>

          <MessageBanner
            mensagem={mensagem}
            mensagemTipo={mensagemTipo}
            temaAtivo={temaAtivo}
            responsiveStyles={responsiveStyles}
          />

          <TouchableOpacity
            style={[
              styles.button,
              responsiveStyles.button,
              styles.outline,
              {
                backgroundColor: temaAtivo.outlineBg,
                borderColor: temaAtivo.buttonBorder,
                marginTop: 8,
              },
            ]}
            onPress={abrirModalSaque}
          >
            <Animated.Text
              style={[
                styles.buttonText,
                responsiveStyles.buttonText,
                styles.outlineText,
                { color: temaAtivo.outlineText },
              ]}
            >
              Sacar dinheiro
            </Animated.Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomBar
        temaAtivo={temaAtivo}
        onProfile={onOpenProfile}
        onExit={handleExit}
        onOpenSettings={() => setModalConfigAberto(true)}
      />

      <WithdrawModal
        visivel={modalSaqueAberto}
        onClose={() => setModalSaqueAberto(false)}
        temaAtivo={temaAtivo}
        responsiveStyles={responsiveStyles}
        saldo={formatarBRL(saldo)}
        valorSaque={valorSaque}
        onChangeValorSaque={setValorSaque}
        chavePix={chavePix}
        onChangeChavePix={setChavePix}
        onConfirmar={confirmarSaque}
      />

      <SettingsModal
        visivel={modalConfigAberto}
        onClose={() => setModalConfigAberto(false)}
        temaAtivo={temaAtivo}
        responsiveStyles={responsiveStyles}
        somAtivo={somAtivo}
        onToggleSom={setSomAtivo}
        tema={tema}
        onToggleTema={toggleTema}
      />
    </SafeAreaView>
  );
};

export default CasinoPage;
