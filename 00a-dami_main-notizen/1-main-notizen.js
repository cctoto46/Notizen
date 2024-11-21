
//---------------------------------------------- Javascript und CSS & HTML ---------------------------------------------------------------

/*
-------Javascript in HTML einbinden (im Body Bereich)--------------------------------------------------------
<script type="module" src="script.js"></script>

-------manifest.json in Html einbinden (im Head Bereich)-----------------------------------------------------
<link rel="manifest" href="/manifest.json">

-------CSS in HTML einbinden (im Head Bereich)---------------------------------------------------------------
<link rel="stylesheet" href="styles.css"></link>

-------Javascript Datei Beispiel (dictionary.js) in eine script.js Datei einbinden---------------------------
Javascript Datei Beispiel (dictionary.js) in eine script.js Datei einbinden
dictionary.js Datei: (muss noch testen ob man das nur am Ende der Datei hinzufügen kann oder auch am Anfang)
export default dictionary

in der script.js Datei einbinden:
import dictionary from './dictionary.js'                                                                   */

//---------------------------------------------------- Bezeichnungen ---------------------------------------------------------------------

//Objekte:

const students = [
   {firstname: "Max"},
//  firstname: ist der Schlüssel (key)
//  "Max": ist das Wert
]
//------------------------------------------------------- if, else -----------------------------------------------------------------------

// Beispiel Erklärung:

let studentCount = 3 // diese Zahl hier ändern um andere Ergebnisse zu bekommen

if /* jetzt kommt die Aufgabe>>> */ (studentCount < 5) {
  /* hier kommt dann was man mit dem Ergebnis machen möchte>>> */ console.log("Es sind noch viele Plätze im Sprachkurs frei!")
  }
  else if /* jetzt kommt die Aufgabe>>> */ (studentCount < 8) {
     /* hier kommt dann was man mit dem Ergebnis machen möchte>>> */ console.log("Es sind noch wenige Plätze frei")
  } 
  else if /* jetzt kommt die Aufgabe>>> */ (studentCount < 10) {
     /* hier kommt dann was man mit dem Ergebnis machen möchte>>> */ console.log("Es sind noch kaum Plätze frei")
  }
  else {
     /* hier kommt dann was man mit dem Ergebnis machen möchte>>> */ console.log("Es sind keine Plätze mehr frei")
  }
//-------------------------------------------------- Vergleichs-Zeichen ------------------------------------------------------------------

let zahl1 = 5
let zahl2 = 6

console.log("zahl1 === zahl2:",  zahl1 === zahl2) //false (ob die Zahlen gleich sind)
console.log("zahl1 !== zahl2:",  zahl1 !== zahl2) //true (ob die Zahlen unterschiedlich sind)
console.log("zahl1 < zahl2:",  zahl1 < zahl2) //true (ob zahl1 kleiner ist als zahl2)
console.log("zahl1 <= zahl2:", zahl1 <= zahl2) //true (ob zahl1 kleiner oder gleich ist als zahl2)
console.log("zahl1 > zahl2:",  zahl1 > zahl2) //false (ob zahl1 größer ist als zahl2)
console.log("zahl1 >= zahl2:", zahl1 >= zahl2) //false (ob zahl1 größer oder gleich ist als zahl2)

//------------------------------------------------- Logisches UND und ODER ---------------------------------------------------------------

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

//---------------------------------------------  Zuweisungsoperatoren +=, -=  ----------------------------------------------------------

/* Der += Operator in JavaScript ist ein Zuweisungsoperator, der häufig verwendet wird, um einer Variablen einen bestimmten Wert hinzuzufügen
und das Ergebnis in derselben Variablen zu speichern. Dies ist besonders nützlich für die Arbeit mit Zahlen und Strings. */

let d = 5
d += 3 // Das ist gleichbedeutend mit a = a(5) + 3
console.log(d) // Ausgabe: 8

//------------------------------------------------    Operatoren ++ und --    -----------------------------------------------------------

let x = 5
x++            // Gibt zuerst den Wert von x aus, dann wird x um 1 erhöht
console.log(x) // Jetzt ist x gleich 6

//----------------------------------------------------------------------------

let z = 5
z--            // Gibt zuerst den Wert von x aus, dann wird x um 1 verringert
console.log(z) // Jetzt ist x gleich 4

//----------------------------------------------------------------------------

// verständliches Beispiel:

let y = 5
y = y + 1       // Erhöht y um 1
console.log(y)  // Jetzt ist y gleich 6

//-------------------------- Javascript Sachen in anderen Javascript Dateien importieren oder exportieren ------------------------------

// Gehe zu 00a-HTML_type=module


