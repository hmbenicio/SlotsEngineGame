import React, { useEffect, useMemo, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Animated,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { useWindowDimensions } from "react-native";

import BottomBar from "./src/components/BottomBar";
import BetSelector from "./src/components/BetSelector";
import DepositSection from "./src/components/DepositSection";
import HeaderSection from "./src/components/HeaderSection";
import MessageBanner from "./src/components/MessageBanner";
import SettingsModal from "./src/components/SettingsModal";
import SlotBoard from "./src/components/SlotBoard";
import StatsRow from "./src/components/StatsRow";
import WithdrawModal from "./src/components/WithdrawModal";
import { apostasDisponiveis, gridSize } from "./src/constants/game";
import { themeColors } from "./src/constants/theme";
import useSlotMachine from "./src/hooks/useSlotMachine";
import { formatarBRL } from "./src/utils/format";
import { styles } from "./src/styles/main";

export default function App() {
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
      spinLoops.current.forEach((l) => l && l.stop && l.stop());
    },
    []
  );

  const pararAnimacao = () => {
    spinLoops.current.forEach((l) => l && l.stop && l.stop());
    spinColumns.forEach((v) => v.setValue(0));
  };

  const iniciarAnimacao = () => {
    spinLoops.current.forEach((l) => l && l.stop && l.stop());
    spinColumns.forEach((v) => v.setValue(0));
    spinLoops.current = spinColumns.map((v, idx) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(v, {
            toValue: 1,
            duration: 200,
            delay: idx * 80,
            useNativeDriver: true,
          }),
          Animated.timing(v, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
        ])
      )
    );
    spinLoops.current.forEach((l) => l.start());
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
              backgroundColor: temaAtivo.shellBg,
              borderColor: temaAtivo.shellBorder,
            },
          ]}
        >
          <HeaderSection temaAtivo={temaAtivo} responsiveStyles={responsiveStyles} />

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
        onInfo={() =>
          setMensagemComTipo("Sessao informativa: jogue com responsabilidade.")
        }
        onExit={() => setMensagemComTipo("Sessao encerrada.", false)}
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
}

