
function sayHello1(name, age) {  // Zwei Variablen werden erstellt (name, age)

  console.log(`Mein Name ist ${name} und ich bin ${age} Jahre alt`)
}

sayHello1("Max", "32") // die beiden Variablen (name, age) werden bei Zeile 2 definiert




//----------------------------------------------------------------------------------------------------
// Beispiel


function sayHello2(name, language) { // Zwei Variablen (name, language)
  if (language === "de") { // guck Zeile 13 und 14
    console.log("Hallo " + name + "!")
  } else if (language === "en") { // guck Zeile 15
    console.log("Hi " + name + "!")
  }
}

sayHello2("Max", "de") // weil die zweite Variable "de" ist dann wird der if in Zeile 4 ausgeführt
