"use strict"
//-------------------------kompakte Lösung-------------------------
console.log("---kompakte Lösung---")


// Wir definieren eine erste Funktion
function sayHello(name) {
  console.log("Hallo " + name + "!")
}

sayHello("Max")
sayHello("Erika")

/*
Terminal:

Hallo Max!
Hallo Erika!
*/


//-------------------------unkompaktere Lösung-------------------------
console.log("---unkompaktere Lösung---")


let name2 = "Max"

function sayHello2() {
  console.log("Hi " + name2 + "!")
} 

sayHello2()
name2 = "Peter"
sayHello2()

/*
 Terminal:

Hi Max!
Hi Peter!

*/




