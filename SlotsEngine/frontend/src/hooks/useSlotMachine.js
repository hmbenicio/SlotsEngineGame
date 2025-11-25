import { useEffect, useMemo, useRef, useState } from "react";
import { apostasDisponiveis, gridSize, soundUris } from "../constants/game";
import { formatarBRL } from "../utils/format";
import { matrixToCells, obterPosicoesVencedoras } from "../utils/grid";
import {
  girar as slotGirar,
  jogarRodada,
  simbolos,
  simboloDisplay,
} from "../game/slotLogic";
import useSounds from "./useSounds";

const onlyDigits = (value = "") => value.replace(/\D/g, "");

const formatarValorSaqueInput = (valor) => {
  const digits = onlyDigits(valor);
  if (!digits) return "";

  const padded = digits.padStart(3, "0"); // garante pelo menos 3 dígitos para 1,00
  const inteiro = padded.slice(0, -2).replace(/^0+/, "") || "0";
  const centavos = padded.slice(-2);
  const inteiroFormatado = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${inteiroFormatado},${centavos}`;
};

const useSlotMachine = () => {
  const [saldo, setSaldo] = useState(0);
  const [totalInserido, setTotalInserido] = useState(0);
  const [ultimaAposta, setUltimaAposta] = useState(0);
  const [ultimoPremio, setUltimoPremio] = useState(0);
  const [deposito, setDeposito] = useState("");
  const [aposta, setAposta] = useState(apostasDisponiveis[0]);
  const [grid, setGrid] = useState(() =>
    matrixToCells(slotGirar(simbolos), new Set(), gridSize, simboloDisplay)
  );
  const [mensagem, setMensagem] = useState(
    "Insira R$ 20,00 ou mais para comecar."
  );
  const [mensagemErro, setMensagemErro] = useState(false);
  const [modalSaqueAberto, setModalSaqueAberto] = useState(false);
  const [modalConfigAberto, setModalConfigAberto] = useState(false);
  const [valorSaque, setValorSaque] = useState("");
  const [chavePix, setChavePix] = useState("");
  const [girando, setGirando] = useState(false);
  const [somAtivo, setSomAtivo] = useState(true);
  const [tema, setTema] = useState("dark");

  const sounds = useSounds(somAtivo);
  const resultadoRef = useRef(null);
  const saldoAnteriorRef = useRef(saldo);

  const setMensagemComTipo = (texto, erro = false) => {
    setMensagem(texto);
    setMensagemErro(erro);
  };

  const prepararRodada = () => {
    const valorAposta = Number(aposta);
    if (saldo < valorAposta) {
      setMensagemComTipo(
        "Creditos insuficientes para essa aposta. Insira mais saldo.",
        true
      );
      sounds.play("error", soundUris.lose);
      return false;
    }

    setGirando(true);
    setUltimaAposta(valorAposta);
    setSaldo((prev) => prev - valorAposta);
    resultadoRef.current = jogarRodada(valorAposta);
    sounds.play("spin", soundUris.spin);
    return true;
  };

  const aplicarResultado = () => {
    const resultado = resultadoRef.current;
    if (!resultado) {
      setGirando(false);
      return;
    }
    const posVitoria = obterPosicoesVencedoras(resultado.grid, gridSize);
    setGrid(matrixToCells(resultado.grid, posVitoria, gridSize, simboloDisplay));
    setSaldo((prev) => prev + resultado.ganho);
    setUltimoPremio(resultado.ganho);
    if (resultado.ganho > 0) {
      setMensagemComTipo("PARABENS!");
    } else {
      setMensagemComTipo(
        resultado.detalhes.length
          ? resultado.detalhes.join(" | ")
          : "Nao foi dessa vez. Tente de novo!"
      );
    }
    const soundUri = resultado.ganho > 0 ? soundUris.win : soundUris.lose;
    sounds.play(resultado.ganho > 0 ? "win" : "lose", soundUri);
    setGirando(false);
    resultadoRef.current = null;
  };

  const handleDepositar = () => {
    const valor = Number(deposito);
    if (Number.isNaN(valor) || valor < 20) {
      setMensagemComTipo("O valor minimo para inserir e R$ 20,00.", true);
      return;
    }
    setSaldo((prev) => prev + valor);
    setTotalInserido((prev) => prev + valor);
    setMensagemComTipo(`Credito inserido: ${formatarBRL(valor)}. Boa sorte!`);
    setDeposito("");
    sounds.play("deposit", soundUris.deposit);
  };

  const abrirModalSaque = () => {
    if (saldo <= 0) {
      setMensagemComTipo("Nenhum credito disponivel para saque.", true);
      return;
    }
    setValorSaque("");
    setChavePix("");
    setModalSaqueAberto(true);
  };

  const confirmarSaque = () => {
    const digits = onlyDigits(valorSaque);
    const valor = Number(digits) / 100;
    if (Number.isNaN(valor) || valor <= 0) {
      setMensagemComTipo("Valor invalido para saque.", true);
      return;
    }
    if (valor > saldo) {
      setMensagemComTipo("Valor solicitado excede o saldo disponivel.", true);
      return;
    }
    if (!chavePix.trim()) {
      setMensagemComTipo("Informe a chave PIX para concluir o saque.", true);
      return;
    }
    setSaldo((prev) => prev - valor);
    setMensagemComTipo(`Voce sacou ${formatarBRL(valor)}. Volte sempre!`);
    setModalSaqueAberto(false);
    setChavePix("");
    sounds.play("withdraw", soundUris.withdraw);
  };

  const toggleTema = () =>
    setTema((prev) => (prev === "dark" ? "light" : "dark"));

  const mensagemTipo = useMemo(
    () => (mensagemErro ? "erro" : "info"),
    [mensagemErro]
  );

  useEffect(() => {
    const saldoAnterior = saldoAnteriorRef.current;
    if (saldoAnterior > 0 && saldo <= 0) {
      sounds.play("lose", soundUris.lose);
    }
    saldoAnteriorRef.current = saldo;
  }, [saldo, sounds]);

  return {
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
    setValorSaque: (valor) => setValorSaque(formatarValorSaqueInput(valor)),
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
    totalInserido,
  };
};

export default useSlotMachine;
