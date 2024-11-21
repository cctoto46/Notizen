
/* In JavaScript kannst du Module verwenden,
um deinen Code in separate Dateien zu organisieren und zwischen diesen Dateien Funktionen,
Objekte oder Variablen auszutauschen. Dies geschieht mit den Schlüsselwörtern import und export.
Hier ein einfaches Beispiel, wie du mit Modulen arbeiten kannst: */

// <script type="module" src="script.js"></script>
// einfach type="module" hinzufügen


/* ----- 1. Exportieren von Funktionen oder Variablen----------------------------------------------------

In der Datei, die du exportieren möchtest (zum Beispiel math.js), kannst du Funktionen,
Variablen oder Klassen exportieren, damit andere Dateien sie verwenden können. */

// Beispiel: math.js

// Eine Funktion exportieren
export function add(a, b) {
    return a + b;
}

// Eine andere Funktion exportieren
export function subtract(a, b) {
    return a - b;
}

// Eine Variable exportieren
export const pi = 3.14159;

/* In diesem Beispiel haben wir zwei Funktionen (add und subtract) sowie eine Konstante (pi) exportiert. */ 



/* ----- 2. Importieren von Funktionen oder Variablen----------------------------------------------------

In der Datei, die du die Funktionen oder Variablen verwenden möchtest (zum Beispiel app.js),
kannst du import verwenden, um die exportierten Teile aus einer anderen Datei zu importieren. */

//Beispiel: app.js

// Funktionen und Variablen aus math.js importieren
import { add, subtract, pi } from './math.js';

console.log(add(2, 3));       // Gibt 5 aus
console.log(subtract(5, 2));  // Gibt 3 aus
console.log(pi);              // Gibt 3.14159 aus

/* In diesem Fall importierst du die spezifischen Funktionen (add, subtract und pi) aus der Datei math.js. */
