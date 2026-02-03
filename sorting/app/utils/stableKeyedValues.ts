import type { StableKeyedValue } from "~/types/sortVisualizer";

export const buildStableKeyedValues = (values: number[]): StableKeyedValue[] => {
  // Ensure stable keys per value to keep animation continuity.
  const valueCounts = new Map<number, number>();
  return values.map((value) => {
    const countForValue = valueCounts.get(value) || 0;
    valueCounts.set(value, countForValue + 1);
    return {
      stableKey: `${value}-${countForValue}`,
      value,
    };
  });
};
