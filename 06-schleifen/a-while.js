"use strict"

// einen Zähler erstellen

let counter = 0
while (counter < 5) {
  counter++ // counter = counter + 1       (man könnte auch so schreiben counter = counter + 1)
  console.log("Counter: " + counter)
}
/*
// Endlosschleife (mit STRG + C abbrechen)

while (true) {
  console.log("Hallo Welt!")
}






// extrem seltener feature

let counter2 = 0
do {
  counter2++
  console.log(counter2)
} while (counter2 < 5)
 */