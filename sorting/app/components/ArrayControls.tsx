import { CheckCircle, Edit3, RefreshCw, Shuffle } from "lucide-react";
//TODO: Put import in types
type ArrayControlsProps = {
  inputMode: "manual" | "random";
  inputValue: string;
  inputError: string | null;
  randomLength: number;
  onInputModeChange: (mode: "manual" | "random") => void;
  onInputChange: (value: string) => void;
  onApplyManual: () => void;
  onRandomLengthChange: (value: number) => void;
  onGenerateRandom: () => void;
};

export function ArrayControls({
  inputMode,
  inputValue,
  inputError,
  randomLength,
  onInputModeChange,
  onInputChange,
  onApplyManual,
  onRandomLengthChange,
  onGenerateRandom,
}: ArrayControlsProps) {
  return (
    <div className="panel">
      <p className="panel-title">Array erstellen</p>
      <div className="control-row" style={{ marginBottom: 10 }}>
        <button
          type="button"
          className={`button ${inputMode === "manual" ? "" : "secondary"}`}
          onClick={() => onInputModeChange("manual")}
        >
          <Edit3 size={18} />
          Manuell
        </button>
        <button
          type="button"
          className={`button ${inputMode === "random" ? "" : "secondary"}`}
          onClick={() => onInputModeChange("random")}
        >
          <Shuffle size={18} />
          Zufall
        </button>
      </div>
      {inputMode === "manual" ? (
        <div className="control-row">
          <input
            className="input"
            value={inputValue}
            onChange={(event) => onInputChange(event.target.value)}
            placeholder="z.B. 5,3,4,9..."
          />
          <button type="button" className="button" onClick={onApplyManual}>
            <CheckCircle size={18} />
            Uebernehmen
          </button>
        </div>
      ) : (
        // TODO: Fix min/max values
        <div className="control-row">
          <label className="chip">
            Laenge
            <input
              className="input"
              type="number"
              min={2}
              max={10}
              value={randomLength}
              onChange={(event) => onRandomLengthChange(Number(event.target.value))}
              style={{ marginLeft: 8, width: 80 }}
            />
          </label>
          <button type="button" className="button" onClick={onGenerateRandom}>
            <RefreshCw size={18} />
            Neu generieren
          </button>
        </div>
      )}
      {inputError ? (
        <p className="subtle" style={{ color: "#ef4444", marginTop: 8 }}>
          {inputError}
        </p>
      ) : null}
    </div>
  );
}
