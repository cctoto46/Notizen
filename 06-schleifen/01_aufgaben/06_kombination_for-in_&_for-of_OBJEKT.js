

/*  Kombination von for...in und for...of
Verwende eine for...of Schleife, um durch das Array zu gehen.
Verwende für jedes Objekt eine for...in Schleife, um die Eigenschaften und deren Werte in der Konsole auszugeben. */

const personen = [
    { name: "Anna", alter: 28 }, // Objekt 1
    { name: "Ben", alter: 34 }, // Objekt 2
    { name: "Clara", alter: 21 } // Objekt 3
]


for (const person of personen) { // Geht durch jedes Objekt im Array
    for (const eigenschaft in person) {   // Geht durch jede Eigenschaft des Objekts (Beispiel: name: und dann alter:)
        const personenEigenschaft = person[eigenschaft] // die Eigenschaft der jeweiligen Person (Beispiel: "Anna" und dann 28)
        console.log(eigenschaft + ": " + personenEigenschaft )
    }
}

/* Terminal

name: Anna
alter: 28
name: Ben
alter: 34
name: Clara
alter: 21


--------------------------------------------------Erklärung--------------------------------------------------

1. Äußere Schleife (for...of): Die for...of Schleife iteriert über jedes Element im Array personen. Jedes Element ist ein Objekt, das eine Person darstellt.
2. Innere Schleife (for...in): Die for...in Schleife iteriert über die Eigenschaften des aktuellen Objekts (z.B. name und alter).
   Der Zugriff auf den Wert erfolgt mit person[eigenschaft].
*/