
// Das -= ist ein sogenannter "verkürzter Zuweisungsoperator" in JavaScript.
// Es kombiniert eine Subtraktion und eine Zuweisung in einem Schritt.
// WICHTIG! ist auch mit += möglich!

let geld1 = 1500;
let geld2 = 1500;
let price = 300;
let summe1 = 0;
let summe2 = 0;

// Die Zeile:

summe1 = geld1 -= price;

// bedeutet das Gleiche wie:

summe2 = geld2 - price;

console.log("Summe 1 =", summe2)
console.log("Summe 2 =", summe2)

/*  Hier wird der Wert von prices[z] vom aktuellen Wert von geld subtrahiert,
    und das Ergebnis wird dann wieder in der Variablen geld gespeichert. 
    Dieser Operator reduziert den Code und macht ihn kompakter. */

// Beispiel:

// Wenn geld zu Beginn den Wert 1500 hat und prices[z] den Wert 200, dann wird:

// geld -= 200;

// zu:

// geld = 1500 - 200;

// Das Ergebnis ist, dass geld danach den Wert 1300 hat.