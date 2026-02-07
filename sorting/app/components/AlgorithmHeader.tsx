import { Link } from "react-router";
import { Activity, ArrowLeft, FileCode, Hash } from "lucide-react";

type AlgorithmHeaderProps = {
  name: string;
  structure: string;
};

export function AlgorithmHeader({ name, structure }: AlgorithmHeaderProps) {
  return (
    <header className="algorithm-header">
      <div>
        <Link className="link-back eyebrow flex items-center gap-2" to="/">
          <ArrowLeft size={16} />
          Zurück zur Übersicht
        </Link>
        <h1 className="title">{name}</h1>
        <p className="text-[color:var(--ink-soft)] text-[1.15rem] max-w-[600px] leading-relaxed">
          {structure}
        </p>
      </div>
      <div className="algorithm-header-card">
        <div className="control-row">
          <span className="pill flex items-center gap-2">
            <Hash size={16} /> Max 10 Werte
          </span>
          <span className="pill flex items-center gap-2">
            <FileCode size={16} /> TypeScript Code
          </span>
          <span className="pill flex items-center gap-2">
            <Activity size={16} /> Live-Ablauf
          </span>
        </div>
        <p className="" style={{ marginTop: 12 }}>
          Probiere die Schritte einzeln oder als Animation und beobachte die
          aktive Codezeile.
        </p>
      </div>
    </header>
  );
}
