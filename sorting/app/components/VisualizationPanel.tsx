import {
  BarChart2,
  ChevronLeft,
  ChevronRight,
  Gauge,
  LayoutGrid,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Step, StableKeyedValue } from "../types/sortVisualizer";

type VisualizationPanelProps = {
  viewMode: "chart" | "boxes";
  onViewModeChange: (mode: "chart" | "boxes") => void;
  keyedValues: StableKeyedValue[];
  activeStep: Step;
  maxValue: number;
  isPlaying: boolean;
  speed: number;
  speedMultiplier: number;
  stepIndex: number;
  totalSteps: number;
  hasCompleted: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSpeedChange: (speedValue: number) => void;
};

export function VisualizationPanel({
  viewMode,
  onViewModeChange,
  keyedValues,
  activeStep,
  maxValue,
  isPlaying,
  speed,
  speedMultiplier,
  stepIndex,
  totalSteps,
  hasCompleted,
  onTogglePlay,
  onReset,
  onPrev,
  onNext,
  onSpeedChange,
}: VisualizationPanelProps) {
  return (
    <div className="panel">
      <div className="panel-header">
        <p className="panel-title panel-title-tight">Visualisierung</p>
        <div className="view-toggle">
          <button
            onClick={() => onViewModeChange("chart")}
            className={`view-toggle-button ${
              viewMode === "chart" ? "is-active" : ""
            }`}
            title="Balkendiagramm"
          >
            <BarChart2 size={18} />
          </button>
          <button
            onClick={() => onViewModeChange("boxes")}
            className={`view-toggle-button ${
              viewMode === "boxes" ? "is-active" : ""
            }`}
            title="Boxenansicht"
          >
            <LayoutGrid size={18} />
          </button>
        </div>
      </div>

      {viewMode === "chart" ? (
        <div className="chart">
          <AnimatePresence>
            {keyedValues.map((item, index) => {
              const isHighlighted =
                activeStep.highlight?.includes(index) ?? false;
              const heightPercent = (item.value / maxValue) * 100;

              return (
                <motion.div
                  layout
                  key={item.stableKey}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{
                    opacity: 1,
                    scaleY: 1,
                    height: `${heightPercent}%`,
                    backgroundColor: isHighlighted ? "#34d399" : "#6366f1",
                  }}
                  exit={{ opacity: 0, scaleY: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    duration: speed * 0.0005,
                  }}
                  style={{
                    flex: 1,
                    maxWidth: 48,
                    width: "100%",
                    borderRadius: "6px 6px 2px 2px",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <span className="bar-value">{item.value}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      ) : (
        <div className="box-container">
          {keyedValues.map((item, index) => {
            const isHighlighted =
              activeStep.highlight?.includes(index) ?? false;
            return (
              <motion.div
                layout
                key={item.stableKey}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`box ${isHighlighted ? "active" : ""}`}
              >
                <span className="box-value">{item.value}</span>
              </motion.div>
            );
          })}
        </div>
      )}

      <div className="control-row control-row-between">
        <div className="control-row control-row-group">
          <button
            type="button"
            className="button secondary"
            onClick={onReset}
            title="Von vorn beginnen"
          >
            <RotateCcw size={18} />
          </button>
          <button type="button" className="button secondary" onClick={onPrev}>
            <ChevronLeft size={18} />
            Zurueck
          </button>
          <button
            type="button"
            className="button"
            onClick={onTogglePlay}
            style={{ minWidth: 100 }}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button type="button" className="button secondary" onClick={onNext}>
            Weiter
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="control-row control-row-group">
          <label className="chip flex items-center gap-3">
            <Gauge size={16} />
            <span style={{ minWidth: 60, fontVariantNumeric: "tabular-nums" }}>
              Speed: {speedMultiplier}x
            </span>
            <input
              className="speed-range"
              type="range"
              min="1"
              max="3"
              step="1"
              value={speedMultiplier}
              onChange={(event) => onSpeedChange(Number(event.target.value))}
              style={{ width: 100 }}
            />
          </label>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <p className="subtle" style={{ marginBottom: 8 }}>
          Schritt {stepIndex + 1} von {totalSteps} ·{" "}
          {activeStep.note ?? "Zwischenschritt"}
        </p>
        {hasCompleted ? (
          <p className="subtle" style={{ color: "#34d399", marginBottom: 8 }}>
            Animation beendet. Zurueck am Anfang.
          </p>
        ) : null}
        <div className="steps">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <span
              key={`step-${index}`}
              className={`step-dot ${index === stepIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
