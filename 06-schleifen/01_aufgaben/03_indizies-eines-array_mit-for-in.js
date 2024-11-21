
/* Array von Strings: for...in
Erstelle ein Array mit den Namen deiner Lieblingsstädte, z. B. ["Berlin", "Hamburg", "München"].
Verwende eine for...in Schleife, um die Indexnummer und den Namen der Stadt auszugeben. */


const Lieblingsstädte = ["Berlin", "Hamburg", "München"]


for (const i in Lieblingsstädte) {
    let Lieblingsstadt = Lieblingsstädte[i]
    

    console.log("Index "+ i +": "+ Lieblingsstadt)
}

/* Terminal

Index 0: Berlin
Index 1: Hamburg
Index 2: München

*/





