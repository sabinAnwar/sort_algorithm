import { Link } from "react-router";

import {
  Rocket,
  Eye,
  BarChart2,
  Layers,
  Zap,
  ArrowRight,
  Code2,
  GitMerge,
  ArrowRightToLine,
  Scan,
} from "lucide-react";
import { ALGORITHMS, type AlgorithmKey } from "~/features/algorithms";

const ROUTES: Record<AlgorithmKey, string> = {
  bubble: "/bubble",
  insertion: "/insertion",
  selection: "/selection",
  merge: "/merge",
};

const ICONS: Record<AlgorithmKey, React.ElementType> = {
  bubble: Zap,
  insertion: ArrowRightToLine,
  selection: Scan,
  merge: GitMerge,
};

const COLORS: Record<AlgorithmKey, string> = {
  bubble: "text-rose-400",
  insertion: "text-amber-400",
  selection: "text-cyan-400",
  merge: "text-indigo-400",
};

export default function Index() {
  return (
    <main className="page home">
      <header className="home-hero editor-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Sortieralgorithmen</p>
          <h1 className="title">Editor-Look fuer echte Klarheit.</h1>
          <p className="lead">
            Fokus auf das Wesentliche: klare Visualisierung, saubere Codezeilen
            und die O-Notation immer im Blick. Waehle deinen Algorithmus und
            starte.
          </p>

          <div className="home-stats">
            <div>
              <span className="home-stat-value">
                <BarChart2 size={24} className="inline-icon" /> 4
              </span>
              <span className="home-stat-label">Algorithmen</span>
            </div>
            <div>
              <span className="home-stat-value">
                <Layers size={24} className="inline-icon" /> 6
              </span>
              <span className="home-stat-label">Max Werte</span>
            </div>
            <div>
              <span className="home-stat-value">
                <Zap size={24} className="inline-icon" /> 1x
              </span>
              <span className="home-stat-label">Interaktiv</span>
            </div>
          </div>
        </div>
        <div className="editor-card">
          <div className="editor-header">
            <div className="editor-dots">
              <span className="editor-dot" />
              <span className="editor-dot" />
              <span className="editor-dot" />
            </div>
            <span className="editor-title flex items-center gap-2">
              <Code2 size={14} /> bubble-sort.ts
            </span>
            <span className="pill">VS Code Dark</span>
          </div>
          <div className="editor-body">
            <div className="editor-line">
              <span className="editor-line-no">1</span>
              <span className="token-keyword">function</span>{" "}
              <span className="token-func">bubbleSort</span>
              <span>(</span>
              <span className="token-operator">arr</span>
              <span>: </span>
              <span className="token-type">number</span>
              <span>[]</span>
              <span>)</span>
              <span>: </span>
              <span className="token-type">number</span>
              <span>[] </span>
              <span>{`{`}</span>
            </div>
            <div className="editor-line">
              <span className="editor-line-no">2</span>
              <span className="token-keyword">const</span> <span>n</span>
              <span> = </span>
              <span>arr.length;</span>
            </div>
            <div className="editor-line active">
              <span className="editor-line-no">3</span>
              <span className="token-keyword">for</span> <span>(</span>
              <span className="token-keyword">let</span> <span>i</span>
              <span> = </span>
              <span className="token-number">0</span>
              <span>; i &lt; n - </span>
              <span className="token-number">1</span>
              <span>; i++) </span>
              <span>{`{`}</span>
            </div>
            <div className="editor-line">
              <span className="editor-line-no">4</span>
              <span className="token-keyword">if</span>{" "}
              <span>(arr[j] &gt; arr[j + 1]) </span>
              <span>{`{`}</span>
            </div>
            <div className="editor-line">
              <span className="editor-line-no">5</span>
              <span>[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];</span>
            </div>
            <div className="editor-line">
              <span className="editor-line-no">6</span>
              <span>{`}`}</span>
            </div>
          </div>
          <div className="editor-foot">
            <span className="pill">Schritt-fuer-Schritt</span>
            <span className="pill">Live Highlight</span>
          </div>
        </div>
      </header>

      <section className="home-section">
        <div className="home-section-head">
          <h2 className="home-section-title">Algorithmus-Auswahl</h2>
          <p className="subtle">
            Waehle einen Algorithmus, um die Visualisierung zu oeffnen.
          </p>
        </div>
        <div className="home-grid">
          {(Object.keys(ALGORITHMS) as AlgorithmKey[]).map((key) => {
            const data = ALGORITHMS[key];
            const Icon = ICONS[key];
            const colorClass = COLORS[key];

            return (
              <Link key={key} to={ROUTES[key]} className="home-card group">
                <div className="home-card-header">
                  <div className={`home-card-icon ${colorClass}`}>
                    <Icon size={32} />
                  </div>
                  <div className="home-card-arrow transition-transform group-hover:translate-x-1">
                    <ArrowRight
                      size={20}
                      className="text-slate-500 group-hover:text-white"
                    />
                  </div>
                </div>

                <div className="mt-4 mb-4">
                  <h3 className="home-card-title group-hover:text-white transition-colors">
                    {data.name}
                  </h3>
                  <p className="home-card-body">{data.structure}</p>
                </div>

                <div className="home-card-meta">
                  <span className="badge text-emerald-400 border-emerald-400/20 bg-emerald-400/10">
                    Best: {data.complexity.best}
                  </span>
                  <span className="badge text-slate-400 border-slate-700 bg-slate-800">
                    Worst: {data.complexity.worst}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
