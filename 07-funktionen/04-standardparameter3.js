"use strict"

// Wir definieren eine erste Funktion
function sayHello(name, language = "de") {  // language = "de" --- ist auf Standard gesetzt
  if (language === "de") {
    console.log("Hallo " + name + "!")
  }
  else if (language === "en") {
    console.log("Hi " + name + "!")
  }
}

sayHello("Max")
sayHello("Erika")
sayHello("Erika", "en") // hier kann man sehen, wie man den Standardparameter ändern kann