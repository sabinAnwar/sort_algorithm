import { FileCode } from "lucide-react";
import type { AlgorithmKey, Step } from "../types/sortVisualizer";
import { tokenizeLine } from "../utils/tokenizeLine";
// TODO: Put import in types
type CodePanelProps = {
  algorithmKey: AlgorithmKey;
  code: string[];
  activeStep: Step;
};

export function CodePanel({ algorithmKey, code, activeStep }: CodePanelProps) {
  return (
    <div className="panel">
      <p className="panel-title flex items-center gap-2">
        <FileCode size={20} />
        Code Visualisierung (TypeScript)
      </p>
      <pre className="code-block">
        {code.map((line, index) => {
          const lineNumber = index + 1;
          return (
            <div
              key={`${algorithmKey}-${lineNumber}`}
              className={`code-line ${
                activeStep.activeLine === lineNumber ? "active" : ""
              }`}
            >
              <span className="code-number">{lineNumber}</span>
              <span>
                {tokenizeLine(line).map((token, tokenIndex) => (
                  <span
                    key={`${algorithmKey}-${lineNumber}-${tokenIndex}`}
                    className={token.className}
                  >
                    {token.text}
                  </span>
                ))}
              </span>
            </div>
          );
        })}
      </pre>
    </div>
  );
}
