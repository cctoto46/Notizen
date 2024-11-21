"use strict"

// Wir definieren eine erste Funktion
function sayHello(name, language) { // Zwei Variablen (name, language)
  if (language === "de") { // guck Zeile 13 und 14
    console.log("Hallo " + name + "!")
  }
  else if (language === "en") { // guck Zeile 15
    console.log("Hi " + name + "!")
  }
}

sayHello("Max", "de") // weil die zweite Variable "de" ist dann wird der if in Zeile 4 ausgeführt
sayHello("Erika", "de") // weil die zweite Variable "de" ist dann wird der if in Zeile 4 ausgeführt
sayHello("John", "en") // weil die zweite Variable "en" ist dann wird der if in Zeile 8 ausgeführt

/* Terminal

Hallo Max!
Hallo Erika!
Hi John!

*/