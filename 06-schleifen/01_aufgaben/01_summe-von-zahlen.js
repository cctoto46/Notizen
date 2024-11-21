
/* Berechnung der Summe: for...of
Gegeben ist ein Array mit Zahlen: [5, 10, 15, 20, 25]. Schreibe eine for...of Schleife,
die die Summe aller Zahlen berechnet und in der Konsole ausgibt. */


const ZAHLEN = [5, 10, 15, 20, 25]
let summe = 0

for (const zahl of ZAHLEN) {
    summe += zahl  // fügt den Wert von zahl zu summe hinzu
}

console.log(summe)  // Terminal 75


/*----------------------------------Erklärung-----------------------------------------

- for...of durchläuft direkt die Werte in ZAHLEN, also 5, 10, 15, 20, und 25
- summe += zahl; addiert jeden dieser Werte zu summe, sodass am Ende die Summe der Zahlen berechnet wird */


//----------------------------------------------------------------------------------------------------------------

/* warum geht das nicht mit der for in schleife?

Das Problem liegt darin, dass for...in in JavaScript für das Durchlaufen der Eigenschaften eines Objekts verwendet wird,
nicht für die Werte eines Arrays. Bei einem Array wie ZAHLEN bedeutet das, dass for...in die Indizes des Arrays durchläuft,
also 0, 1, 2, 3, und 4, anstatt die eigentlichen Werte 5, 10, 15, 20 und 25.

*/