"use strict"

// in der function-1 wird lokal eine neue Variable erstellt "const message". Diese hat auch genau das gleiche Wort wie "Zeile 9"
// Trotzdem wird diese anders ausgegeben "siehe Terminal-1"

// in der function-2 hingegen, wird let message (siehe Zeile 9) geändert obwohl sie in der function ist.
// Wenn function-2 ausgeführt wird "siehe Terminal-2"

let message = "Test!"

//-------------------function-1-------------------------
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<löschen um diese function zu testen
function sayHello(name) {
  const message = "Hallo " + name + "!" // hier wird Lokal eine neue Variable erstellt "const message"
  console.log(message)
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
// Terminal
//
// Hallo Max!
// Test!

//-------------------function-2-------------------------
/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<löschen um diese function zu testen
function sayHello(name) {
  message = "Hallo " + name + "!" // hier wird die Globale Variable nur Lokal geändert "message" (Zeile 9 "let message")
  console.log(message)
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
//-------------------Ausgabe-------------------------

     sayHello("Max") // terminals
console.log(message) // terminals

// Terminal
//
// Hallo Max!
// Hallo Max!
