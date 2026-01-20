# Bereits implementierte Features

Folgende Funktionalitäten sind in der Sortieralgorithmus-Anwendung bereits vollständig umgesetzt:

## 1. Sortieralgorithmen
Folgende Algorithmen sind inklusive Visualisierung, Code-Anzeige und Komplexitätsdaten implementiert:
-   **Bubble Sort**: Klassischer Vergleichs-Algorithmus.
-   **Insertion Sort**: Schrittweises Einfügen.
-   **Selection Sort**: Schrittweises Auswählen des Minimums.
-   **Merge Sort**: Rekursives Teilen und Zusammenfügen.

## 2. Visualisierung
-   **Balkendiagramm (Chart View)**: Animierte Balken, Höhen repräsentieren Werte, Farben für Status (aktiv, sortiert).
-   **Boxenansicht (Box View)**: Alternative Darstellung mit Zahlen in Boxen.
-   **Code-Highlighting**: Der ausgeführte TypeScript-Code wird angezeigt und die aktuell aktive Zeile live hervorgehoben.
-   **Animation**: Flüssige Animationen mit *Framer Motion* für Bewegungen und Zustandsänderungen.

## 3. Steuerung & Interaktion
-   **Playback Controls**: Start/Pause, Schritt vor, Schritt zurück, Neuer Start (Reset).
-   **Geschwindigkeit**: Anpassbare Abspielgeschwindigkeit (1x, 2x, 3x).
-   **Slider**: Timeline-Slider (indirekt über Steps).

## 4. Dateneingabe
-   **Manuelle Eingabe**: Benutzer kann eigene Zahlenreihen (kommagetrennt) eingeben.
-   **Zufallsgenerator**: Erstellung von Zufallsarrays mit wählbarer Länge (2 bis 10 Elemente).
-   **Validierung**: Prüfung auf ungültige Eingaben, negative Zahlen oder zu lange Arrays.

## 5. Informationen
-   **Komplexitäts-Anzeige**: Laufzeit (Best, Average, Worst) und Platzkomplexität (Space) für jeden Algorithmus.
-   **Erklärungen**: Kurze Beschreibung der Funktionsweise/Struktur des Algorithmus.
-   **Schritt-Anzeige**: Aktueller Schritt und Gesamtzahl der Schritte sowie kurze Notizen zum aktuellen Vorgang (z.B. "Tausche 5 und 3").

## 6. Technik
-   **Tech Stack**: React (React Router), Vite, TypeScript, Tailwind CSS (evtl. via styles), Framer Motion, Lucide Icons.
-   **Architektur**: Trennung von Algorithmus-Logik (`algorithms.ts`) und UI-Komponente (`SortVisualizer.tsx`).
