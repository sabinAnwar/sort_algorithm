type ComplexityPanelProps = {
  complexity: {
    best: string;
    average: string;
    worst: string;
    space: string;
  };
};

export function ComplexityPanel({ complexity }: ComplexityPanelProps) {
  return (
    <div className="panel">
      <p className="panel-title">Laufzeitkomplexitaet (O-Notation)</p>
      <div className="control-row">
        <span className="badge">Best: {complexity.best}</span>
        <span className="badge">Average: {complexity.average}</span>
        <span className="badge">Worst: {complexity.worst}</span>
        <span className="badge">Space: {complexity.space}</span>
      </div>
    </div>
  );
}
