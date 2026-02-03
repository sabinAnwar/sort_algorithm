import { useCallback, useEffect, useState } from "react";
import { clamp } from "../utils/clamp";

export const usePlayback = (totalSteps: number, speed: number) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    setStepIndex(0);
    setIsPlaying(false);
    setHasCompleted(false);
  }, [totalSteps]);

  useEffect(() => {
    if (!isPlaying) return;
    if (stepIndex >= totalSteps - 1) {
      setIsPlaying(false);
      setHasCompleted(true);
      setStepIndex(0);
      return;
    }
    const timer = window.setInterval(() => {
      setStepIndex((prev) => clamp(prev + 1, 0, totalSteps - 1));
    }, speed);
    return () => window.clearInterval(timer);
  }, [isPlaying, speed, stepIndex, totalSteps]);

  const moveStep = useCallback(
    (delta: number) => {
      setStepIndex((prev) => clamp(prev + delta, 0, totalSteps - 1));
      setIsPlaying(false);
      setHasCompleted(false);
    },
    [totalSteps],
  );

  const reset = useCallback(() => {
    setStepIndex(0);
    setIsPlaying(false);
    setHasCompleted(false);
  }, []);

  return {
    stepIndex,
    setStepIndex,
    isPlaying,
    setIsPlaying,
    moveStep,
    reset,
    hasCompleted,
  };
};
