/*
    Die Schleifen for...in und for...of sind spezielle Arten von Schleifen in JavaScript, die dir helfen, über Objekte und Arrays zu iterieren.
    Es gibt einige wichtige Unterschiede zwischen diesen beiden Schleifen, und ich werde sie im Folgenden erklären.
*/





/* ------------------1. for...in - Schleife------------------

    Die for...in-Schleife wird verwendet, um über die Eigenschaften eines Objekts oder die Indizes eines Arrays zu iterieren.
    Sie gibt die Schlüssel (oder Indizes) der Eigenschaften zurück.


---Beispiel:--- */

const students2 = ["Tim", "Luca", "Hans"];

for (const i in students2) {
  console.log("i:", i); // Gibt den Index aus
  console.log(students2[i]); // Gibt den Wert des Arrays an diesem Index aus
}

/* Terminal

i: 0
Tim
i: 1
Luca
i: 2
Hans

---Erklärungen:---

- i ist der Index des Arrays (0, 1, 2).
- students2[i] gibt den entsprechenden Wert im Array zurück. 

---Wichtig:---

for...in sollte nicht mit Arrays verwendet werden, es wird empfohlen, es für Objekte zu verwenden.
Es kann unerwartete Ergebnisse liefern, insbesondere wenn das Array erweiterte Eigenschaften hat, die nicht Teil der Standard-Indizes sind.
*/




/* ------------------2. for...of - Schleife------------------

Die for...of-Schleife wird verwendet, um über iterierbare Objekte wie Arrays, Strings, Sets oder Maps zu iterieren.
Sie gibt die Werte der Elemente zurück, nicht die Indizes.

---Beispiel:--- */

const students = ["Tim", "Luca", "Hans"]

for (const student of students) {
  console.log(student)
}
/*

---Ausgabe:---

Tim
Luca
Hans


---Erklärungen:---

- student ist der Wert des aktuellen Elements im Array.
- Es gibt keine Indizes, die zurückgegeben werden; die Schleife arbeitet direkt mit den Werten.
*/




/* -----------------------------Zusammenfassung der Unterschiede:-----------------------------

Schleife  Verwendung                                                            Gibt zurück	            Empfohlen für

for...in	Über Eigenschaften von Objekten oder Indizes von Arrays iterieren	    Indizes (Schlüssel)     Objekte

for...of	Über iterierbare Objekte (Arrays, Strings) iterieren	                Werte                   Arrays, Strings, Sets, Maps

*/


/* -------------------------------------------Fazit-------------------------------------------

- Verwende for...in, um die Eigenschaften eines Objekts zu durchlaufen, und sei vorsichtig bei der Verwendung mit Arrays.

- Verwende for...of, um einfach und direkt durch die Werte eines Arrays oder einer anderen iterierbaren Struktur zu iterieren.

*/
