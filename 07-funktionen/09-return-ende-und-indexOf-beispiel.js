"use strict"
//--------------------------return beendet eine function---------------------------------------------
console.log("----return beendet eine function----")

// return beendet eine function
function sayHello() {
  console.log("Hallo")
  return 5 //function beendet
  console.log("Welt") // wird nicht angezeit, wiel beendet
}
sayHello()

//terminal = Hallo

//--------------------------indexOf function Beispiel---------------------------------------------
console.log("----indexOf function Beispiel----")

function indexOf(liste, value) {  // zwei Variablen
  for (const i in liste) {  // "i" ist die Variable für das Index in der Varbialbe "Liste"
    if (liste[i] === value) { // wenn "i" (also das Index) in der Liste gefunden wird, dann gleich= === value (value steht für "siehe Zeile 21")
      return i // ende
    }
  }
  return -1 // das ist dafür da, wenn bei Zeile 27 "Hallo" etwas steht was garnicht in der Liste ist z.b. "Peter" dann gibt Zeile 27 -1 aus
}

console.log(indexOf(["Hallo", "Welt", "!"], "Hallo")) // wir definieren einmal "liste" was ein array ist und "value" was ein string ist


/* Terminal

0                    // bedeutet, das der Index von "Hallo" (siehe Zeile 27) gleich 0 ist!

*/