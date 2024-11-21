

/*   Einfache Schleifen-Vergleichsaufgabe
Verwende eine for...of Schleife, um durch das Array zu gehen.
Verwende für jedes Objekt eine for...in Schleife, um die Eigenschaften und deren Werte in der Konsole auszugeben. */

const Früchte = [
    "Apfel", 
    "Banane", 
    "Kirsche", 
    "Dattel", 
    "Erdbeere"
]


for (const Frucht of Früchte) {
    console.log(Frucht)
}

for (const Frucht in Früchte) {
    console.log("Index: " + Frucht)
}

/* Terminal

Apfel
Banane
Kirsche
Dattel
Erdbeere

Index 0
Index 1
Index 2
Index 3
Index 4

*/





