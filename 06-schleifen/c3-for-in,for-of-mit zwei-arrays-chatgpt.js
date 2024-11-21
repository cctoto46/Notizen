/*

In JavaScript gibt es verschiedene Arten von Schleifen, um durch Arrays oder Objekte zu iterieren. Hier sind die for...of und for...in Schleifen:

for...of Schleife
Die for...of Schleife iteriert über die Werte eines Arrays. Das bedeutet, dass du direkt die Elemente (in diesem Fall: Arrays von Namen) erhältst und mit ihnen arbeiten kannst.

for...in Schleife
Die for...in Schleife iteriert über die Indizes (bei Arrays) oder über die Schlüssel (bei Objekten). Sie liefert die Indexpositionen des Arrays, mit denen du dann auf die einzelnen Elemente zugreifen kannst.

Schauen wir uns das anhand deines Arrays Kurse an.
*/

let Kurse = [
    ["Max", "Manuela"], // Erster Kurs
    ["Tim", "Erika"],   // Zweiter Kurs
];

// Mit der for...of Schleife iterieren wir direkt über die Werte.
console.log("for...of Schleife:")
for (let kurs of Kurse) {
    console.log("Kurs:", kurs) // Gibt das Array ["Max", "Manuela"] und dann ["Tim", "Erika"] aus
    for (let student of kurs) {
        console.log("Student:", student) // Gibt die Namen Max, Manuela, Tim, Erika aus
    }
}

// Mit der for...in Schleife iterieren wir über die Indizes.
console.log("for...in Schleife:")
for (let index in Kurse) {
    console.log("Index:", index)       // Gibt die Indizes 0 und 1 aus
    console.log("Kurs:", Kurse[index]) // Gibt das Array ["Max", "Manuela"] und dann ["Tim", "Erika"] aus
    for (let studentIndex in Kurse[index]) {
        console.log("Student:", Kurse[index][studentIndex]) // Gibt die Namen Max, Manuela, Tim, Erika aus
    }
}

/*  ---Erklärung des Outputs---

1. for...of Schleife:

- Die Schleife gibt direkt die Kurs-Arrays (z.B. ["Max", "Manuela"]) aus.
- Durch die innerste Schleife (for...of über kurs) erhältst du jeden Studentennamen im jeweiligen Kurs.

2. for...in Schleife:

- Die Schleife gibt die Indexpositionen (0, 1, usw.) des Arrays Kurse aus.
- Durch Zugriff über Kurse[index] bekommst du die Kurs-Arrays.
- Die innere for...in Schleife verwendet dann studentIndex, um auf jeden einzelnen Studentennamen zuzugreifen.


    ---Kurz zusammengefasst---

- for...of ist praktisch, wenn du nur die Werte des Arrays brauchst.
- for...in ist sinnvoll, wenn du die Indizes brauchst oder wenn du Schlüssel eines Objekts iterieren möchtest.


*/