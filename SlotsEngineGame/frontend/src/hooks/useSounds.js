import { useEffect, useRef } from "react";
import { Audio } from "expo-av";

const useSounds = (enabled = true) => {
  const soundsRef = useRef({});

  const play = async (tipo, uri) => {
    if (!enabled || !uri) return;
    try {
      if (!soundsRef.current[tipo]) {
        const { sound } = await Audio.Sound.createAsync(
          { uri },
          { volume: 0.35, shouldPlay: false }
        );
        soundsRef.current[tipo] = sound;
      }
      await soundsRef.current[tipo].replayAsync();
    } catch (_e) {
      // ignora erros de audio para nao travar o jogo
    }
  };

  useEffect(
    () => () =>
      Object.values(soundsRef.current).forEach((s) => s?.unloadAsync?.()),
    []
  );

  return { play };
};

export default useSounds;

