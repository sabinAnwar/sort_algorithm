import type { AlgorithmData, AlgorithmKey, Step } from "~/types/sortVisualizer";

export const ALGORITHMS: Record<AlgorithmKey, AlgorithmData> = {
  bubble: {
    name: "Bubble Sort",
    structure:
      "Vergleicht benachbarte Paare und tauscht sie, bis die groessten Werte nach oben „aufsteigen“.",
    complexity: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)",
      space: "O(1)",
    },
    code: [
      "function bubbleSort(arr: number[]): number[] {",
      "  const n = arr.length;",
      "  for (let i = 0; i < n - 1; i++) {",
      "    for (let j = 0; j < n - i - 1; j++) {",
      "      if (arr[j] > arr[j + 1]) { // swap neighbors",
      "        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];",
      "      }",
      "    }",
      "  }",
      "  return arr;",
      "}",
    ],
    buildSteps: (input) => {
      const arr = [...input];
      const steps: Step[] = [
        { array: [...arr], activeLine: 1, note: "Startzustand." },
      ];
      const n = arr.length;
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          steps.push({
            array: [...arr],
            highlight: [j, j + 1],
            activeLine: 4,
            note: `Vergleiche Position ${j} und ${j + 1}.`,
          });
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            steps.push({
              array: [...arr],
              highlight: [j, j + 1],
              activeLine: 5,
              note: "Tauschen der Werte.",
            });
          }
        }
      }
      steps.push({
        array: [...arr],
        activeLine: 10,
        note: "Fertig sortiert.",
      });
      return steps;
    },
  },
  insertion: {
    name: "Insertion Sort",
    structure:
      "Baut die sortierte Sequenz von links auf und fuegt jedes neue Element an der richtigen Stelle ein.",
    complexity: {
      best: "O(n)",
      average: "O(n^2)",
      worst: "O(n^2)",
      space: "O(1)",
    },
    code: [
      "function insertionSort(arr: number[]): number[] {",
      "  for (let i = 1; i < arr.length; i++) {",
      "    const key = arr[i]; // item to insert",
      "    let j = i - 1;",
      "    while (j >= 0 && arr[j] > key) { // shift larger items",
      "      arr[j + 1] = arr[j];",
      "      j--;",
      "    }",
      "    arr[j + 1] = key; // insert here",
      "  }",
      "  return arr;",
      "}",
    ],
    buildSteps: (input) => {
      const arr = [...input];
      const steps: Step[] = [
        { array: [...arr], activeLine: 1, note: "Startzustand." },
      ];
      for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        steps.push({
          array: [...arr],
          highlight: [i],
          activeLine: 2,
          note: `Neues Element ${key} einfuegen.`,
        });
        while (j >= 0 && arr[j] > key) {
          steps.push({
            array: [...arr],
            highlight: [j, j + 1],
            activeLine: 5,
            note: `Verschiebe ${arr[j]} nach rechts.`,
          });
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = key;
        steps.push({
          array: [...arr],
          highlight: [j + 1],
          activeLine: 9,
          note: `Setze ${key} an Position ${j + 1}.`,
        });
      }
      steps.push({
        array: [...arr],
        activeLine: 11,
        note: "Fertig sortiert.",
      });
      return steps;
    },
  },
  selection: {
    name: "Selection Sort",
    structure:
      "Sucht in jedem Durchlauf das kleinste Element im Rest und setzt es an die aktuelle Position.",
    complexity: {
      best: "O(n^2)",
      average: "O(n^2)",
      worst: "O(n^2)",
      space: "O(1)",
    },
    code: [
      "function selectionSort(arr: number[]): number[] {",
      "  for (let i = 0; i < arr.length - 1; i++) {",
      "    let min = i; // current minimum index",
      "    for (let j = i + 1; j < arr.length; j++) {",
      "      if (arr[j] < arr[min]) {",
      "        min = j;",
      "      }",
      "    }",
      "    if (min !== i) { // swap into position",
      "      [arr[i], arr[min]] = [arr[min], arr[i]];",
      "    }",
      "  }",
      "  return arr;",
      "}",
    ],
    buildSteps: (input) => {
      const arr = [...input];
      const steps: Step[] = [
        { array: [...arr], activeLine: 1, note: "Startzustand." },
      ];
      for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        steps.push({
          array: [...arr],
          highlight: [i],
          activeLine: 2,
          note: `Suche Minimum ab Position ${i}.`,
        });
        for (let j = i + 1; j < arr.length; j++) {
          steps.push({
            array: [...arr],
            highlight: [min, j],
            activeLine: 4,
            note: `Vergleiche aktuelles Minimum mit Position ${j}.`,
          });
          if (arr[j] < arr[min]) {
            min = j;
            steps.push({
              array: [...arr],
              highlight: [min],
              activeLine: 6,
              note: `Neues Minimum bei ${min}.`,
            });
          }
        }
        if (min !== i) {
          [arr[i], arr[min]] = [arr[min], arr[i]];
          steps.push({
            array: [...arr],
            highlight: [i, min],
            activeLine: 10,
            note: "Tausche Minimum an die aktuelle Position.",
          });
        }
      }
      steps.push({
        array: [...arr],
        activeLine: 13,
        note: "Fertig sortiert.",
      });
      return steps;
    },
  },
  merge: {
    name: "Merge Sort",
    structure:
      "Teilt rekursiv, sortiert Teilbereiche und fuegt sie anschliessend geordnet zusammen.",
    complexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)",
      space: "O(n)",
    },
    code: [
      "function mergeSort(arr: number[]): number[] {",
      "  if (arr.length <= 1) return arr; // base case",
      "  const mid = Math.floor(arr.length / 2);",
      "  const left = mergeSort(arr.slice(0, mid));",
      "  const right = mergeSort(arr.slice(mid));",
      "  return merge(left, right);",
      "}",
      "",
      "function merge(left: number[], right: number[]): number[] {",
      "  const result: number[] = []; // merged output",
      "  let i = 0;",
      "  let j = 0;",
      "  while (i < left.length && j < right.length) {",
      "    if (left[i] <= right[j]) { // take smaller",
      "      result.push(left[i]);",
      "      i++;",
      "    } else {",
      "      result.push(right[j]);",
      "      j++;",
      "    }",
      "  }",
      "  while (i < left.length) { // remaining left",
      "    result.push(left[i]);",
      "    i++;",
      "  }",
      "  while (j < right.length) { // remaining right",
      "    result.push(right[j]);",
      "    j++;",
      "  }",
      "  return result; // merged array",
      "}",
    ],
    buildSteps: (input) => {
      const steps: Step[] = [
        { array: [...input], activeLine: 1, note: "Startzustand." },
      ];
      const arr = [...input];

      const merge = (start: number, mid: number, end: number) => {
        const left = arr.slice(start, mid);
        const right = arr.slice(mid, end);
        let i = 0;
        let j = 0;
        let k = start;
        while (i < left.length && j < right.length) {
          steps.push({
            array: [...arr],
            highlight: [k],
            activeLine: 13,
            note: "Vergleiche Werte aus den Teilfeldern.",
          });
          if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
          } else {
            arr[k] = right[j];
            j++;
          }
          steps.push({
            array: [...arr],
            highlight: [k],
            activeLine: 15,
            note: "Schreibe kleinstes Element zurueck.",
          });
          k++;
        }
        while (i < left.length) {
          arr[k] = left[i];
          steps.push({
            array: [...arr],
            highlight: [k],
            activeLine: 22,
            note: "Linken Rest einfuegen.",
          });
          i++;
          k++;
        }
        while (j < right.length) {
          arr[k] = right[j];
          steps.push({
            array: [...arr],
            highlight: [k],
            activeLine: 26,
            note: "Rechten Rest einfuegen.",
          });
          j++;
          k++;
        }
      };

      const sort = (start: number, end: number) => {
        if (end - start <= 1) return;
        const mid = Math.floor((start + end) / 2);
        sort(start, mid);
        sort(mid, end);
        merge(start, mid, end);
      };

      sort(0, arr.length);
      steps.push({
        array: [...arr],
        activeLine: 6,
        note: "Fertig sortiert.",
      });
      return steps;
    },
  },
};

export const DEFAULT_ARRAY = [5, 3, 4, 9,19,1,2,12,13,6];

export type { AlgorithmData, AlgorithmKey, Step };
