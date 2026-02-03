export type AlgorithmKey = "bubble" | "insertion" | "selection" | "merge";

export type Step = {
  array: number[];
  highlight?: number[];
  activeLine?: number;
  note?: string;
};

export type AlgorithmData = {
  name: string;
  structure: string;
  complexity: {
    best: string;
    average: string;
    worst: string;
    space: string;
  };
  code: string[];
  buildSteps: (input: number[]) => Step[];
};

export type StableKeyedValue = {
  stableKey: string;
  value: number;
};
