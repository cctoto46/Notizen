"use strict"


console.log("!true:", !true) //false
console.log("!false", !false) //true

// console.log(!(42 === 13))
// console.log(42 !== 13)



// Logisches UND
console.log("true && true:", true && true) //true
console.log("true && false:", true && false) //false (weil nicht beide true sind)
console.log("false && true:", false && true) //false (weil nicht beide true sind)
console.log("false && false:", false && false) //false (weil nicht beide true sind)

// Logisches ODER
console.log("true || true:", true || true) //true
console.log("true || false:", true || false) //true (weil true auf der linken Seite vorhanden ist)
console.log("false || true:", false || true) //true (weil true auf der rechten Seite vorhanden ist)
console.log("false || false:", false || false) //false (weil keins vom beiden true ist)

//---------------------------------------------------------------------------------------------------------

// Beispiel!
let students1 = ["Max"]
let students2 = ["Monika"]

if (students1.indexOf("Erika") === -1 && students2.indexOf("Erika") === -1) {
  console.log("Erika ist weder Teilnehmer von students1 noch von students2")
}
