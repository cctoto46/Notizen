"use strict"

//    Variable        Bedingung    Was passieren soll 
for (let counter = 0; counter < 5; counter++) {
  console.log(counter)
}

for (let i = 1; i <= 10; i++) {
  console.log("i", i)
}




// man könnte auch die Schleife in dem Code ändern

for (let i = 1; i <= 10; i++) {
  i = i + 2 // jedes mal wird die Zahl mit +2 addiert
  console.log("i", i)
}
/*Terminal:

i 3
i 6
i 9
i 12

*/
