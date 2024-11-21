"use strict"

/* function return
mit dieser function kann ich die ausgegebene Zahl weiter auserhalb der function verwenden! */

const items = [15, 25, 30]

function summe(liste) {
  let s = 0
  for (let element of liste) {
    s += element // addiere "element" zu "s"
  }
  return s
}

console.log(summe(items)) // items (zeile 6) werden in die Liste (Zeile 8) gepackt

/* Terminal

70

*/
