
//-------------------------------------------------------use strict------------------------------------------------------------
"use strict" // möchte alte Features nicht benuzten! Fehlermeldung wenn alte Features vorhanden sind!

//-----------------------------------------------Indizes (Index)------------------------------------------------------
/* was bedeutet Indizes?

In der Programmierung (und in der Mathematik) bezeichnet ein Index (Plural: Indizes)
die Position eines Elements in einer Liste, einem Array oder einer Sequenz.

Beispiel in JavaScript --- Angenommen, wir haben ein Array: */

const items = [15, 25, 30]

/* In diesem Array gibt es drei Elemente:

15 befindet sich an Index 0
25 befindet sich an Index 1
30 befindet sich an Index 2

In JavaScript (und in vielen anderen Programmiersprachen) beginnen die Indizes bei 0, nicht bei 1.
Das heißt, das erste Element hat den Index 0, das zweite Element den Index 1, und so weiter. */

//-----------------------------------------------String, Zahlen, Booleans------------------------------------------------------
// String
let a = 'Hallo Welt!'
console.log(typeof a) // Terminal Ergebnis: string
console.log(a) // Terminal Ergebnis: Hallo Welt!

// Zahlen
let b = 42.5
console.log(typeof b) // Terminal Ergebnis: number
console.log(b) // Terminal Ergebnis: 42.5

// Booleans (true / false)
let c = true
console.log(typeof c) // Terminal Ergebnis: boolean
console.log(c) // Terminal Ergebnis: true

//-------------------------------------------------------Variablen------------------------------------------------------------
let BuchstabeA = "A"
//zweites Beispiel:
let Ergebnis = 1 + "A"

console.log(BuchstabeA) // Terminal Ergebnis: A
console.log(Ergebnis) // Terminal Ergebnis: 1A

//-------------------------------------------------------Kommentare------------------------------------------------------------
/* 
Das hier ist auch ein Kommentar mit mehreren Zeilen
*/

//-------------------------------------------------------Arrays----------------------------------------------------------------

// Mit einem Array können wir z.B. eine komplette Teilnehmerliste speichern!

let students = [
    "Max Müller",
    "Erika Mustermann",
    "Annika Müller",
    "Max Mustermann"
  ]
  console.log(students)

//------------------------
//-1 beim Ergebnis bedeutet das ein teilnehmer nicht in der Liste ist!
//------------------------
