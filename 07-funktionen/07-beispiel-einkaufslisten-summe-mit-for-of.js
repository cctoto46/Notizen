"use strict"

const items = [15, 25, 30] //array (Die Elemente)

/* Diese Zeilen definiert die Funktion summe, die eine Liste (liste) als Argument erhält und die Summe ihrer Elemente berechnet und dann ausgibt. */
function summe(liste) {
  let s = 0
  for (let element of liste) {
    s += element
  }
  console.log("s:", s)
}

(summe(items)); /* Diese Zeile ruft die Funktion summe mit items als Argument auf.
Die Berechnung und Ausgabe erfolgt innerhalb der Funktion. */


