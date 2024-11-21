"use strict"

//---------------for---------------

console.log("-------for-------")

const students1 = ["Max", "Erika", "Monika"]

for (let i = 0; i < students1.length; i++) {
  console.log(i + ": " + students1[i])
}
/* Terminal:

0: Max
1: Erika
2: Monika

*///-----------------------------------------------------------------------------------


//---------------for in---------------

console.log("-----for in-----")

const students2 = ["Max", "Erika", "Monika"]

for (const j in students2) {
  console.log(j , ": " + students2[j])
}
/* Terminal:

0: Max
1: Erika
2: Monika

*///-----------------------------------------------------------------------------------

//---------------for of---------------

console.log("-----for of-----")

const students3 = ["Max", "Erika", "Monika"]

for (const student of students3) {
  console.log(student)
}

/* Terminal:

Max
Erika
Monika

*/