import { useMemo, useState } from "react";

import type { AlgorithmKey } from "~/types/sortVisualizer";
import { clamp } from "~/utils/clamp";
import { AlgorithmHeader } from "~/components/AlgorithmHeader";
import { ArrayControls } from "~/components/ArrayControls";
import { CodePanel } from "~/components/CodePanel";
import { ComplexityPanel } from "~/components/ComplexityPanel";
import { VisualizationPanel } from "~/components/VisualizationPanel";
import { usePlayback } from "~/hooks/usePlayback";
import { buildStableKeyedValues } from "~/utils/stableKeyedValues";
import { ALGORITHMS, DEFAULT_ARRAY } from "./algorithms";

type SortVisualizerProps = {
  algorithmKey: AlgorithmKey;
};

export function SortVisualizer({ algorithmKey }: SortVisualizerProps) {
  const algorithmData = ALGORITHMS[algorithmKey];
  const [inputMode, setInputMode] = useState<"manual" | "random">("manual");
  const [inputValue, setInputValue] = useState(DEFAULT_ARRAY.join(","));
  const [array, setArray] = useState<number[]>(DEFAULT_ARRAY);
  const [inputError, setInputError] = useState<string | null>(null);
  const [speed, setSpeed] = useState(2000);
  const [randomLength, setRandomLength] = useState(10);
  const [viewMode, setViewMode] = useState<"chart" | "boxes">("chart");

  const steps = useMemo(
    () => algorithmData.buildSteps(array),
    [array, algorithmData],
  );
  const { stepIndex, isPlaying, setIsPlaying, moveStep, reset, hasCompleted } =
    usePlayback(steps.length, speed);

  // Clamp against steps length in case the array changes mid-play.
  const activeStep = steps[clamp(stepIndex, 0, steps.length - 1)];
  const maxValue = Math.max(1, ...activeStep.array);

  const stableKeyedValues = useMemo(
    () => buildStableKeyedValues(activeStep.array),
    [activeStep.array],
  );

  const applyManualInput = () => {
    
const numbers = inputValue.split(",").map((value) => Number(value));
    if (numbers.length === 0) {
      setInputError("Bitte mindestens eine Zahl eingeben.");
      return;
    }
    if (numbers.length > 10) {
      setInputError("Maximal 10 Werte erlaubt.");
      return;
    }
  if (numbers.some((value) => !Number.isFinite(value))) {
    setInputError("Bitte nur ganze Zahlen eingeben.");
    return;
  }

    if (numbers.some((value) => value < 0)) {
      setInputError("Bitte nur positive Zahlen verwenden.");
      return;
    }
    setInputError(null);
    setArray(numbers);
  };

  const generateRandomArray = () => {
    const length = clamp(randomLength, 2, 10);
    const next = Array.from(
      { length },
      () => Math.floor(Math.random() * 18) + 2,
    );
    setInputValue(next.join(","));
    setInputError(null);
    setArray(next);
  };

  const speedMultiplier = Math.round(2000 / speed);

  return (
    <main className="page">
      <AlgorithmHeader
        name={algorithmData.name}
        structure={algorithmData.structure}
      />

      <section className="workspace">
        <ArrayControls
          inputMode={inputMode}
          inputValue={inputValue}
          inputError={inputError}
          randomLength={randomLength}
          onInputModeChange={setInputMode}
          onInputChange={setInputValue}
          onApplyManual={applyManualInput}
          onRandomLengthChange={setRandomLength}
          onGenerateRandom={generateRandomArray}
        />
        <ComplexityPanel complexity={algorithmData.complexity} />
      </section>

      <section className="workspace">
        <VisualizationPanel
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          keyedValues={stableKeyedValues}
          activeStep={activeStep}
          maxValue={maxValue}
          isPlaying={isPlaying}
          speed={speed}
          speedMultiplier={speedMultiplier}
          stepIndex={stepIndex}
          totalSteps={steps.length}
          hasCompleted={hasCompleted}
          onTogglePlay={() => setIsPlaying((prev) => !prev)}
          onReset={reset}
          onPrev={() => moveStep(-1)}
          onNext={() => moveStep(1)}
          onSpeedChange={(value) => setSpeed(2000 / value)}
        />
        <CodePanel
          algorithmKey={algorithmKey}
          code={algorithmData.code}
          activeStep={activeStep}
        />
      </section>
    </main>
  );
}
