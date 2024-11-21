
// break (hiermit kann man einen Stop hinzufügen)

for (let j = 1; j <= 5; j++) {
  if (j === 4) {
    break
  }
  console.log("j:", j)
}

/* Terminal
j: 1
j: 2
j: 3

*/

//-----------------------------------------------------------
// continue (damit kann man etwas überspringen)

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue
  }
  console.log("i:", i)
}

/* Terminal
i: 1
i: 2
i: 4
i: 5

*/

