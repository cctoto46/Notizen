"use strict"

const student = {
  name: "Max Mustermann",
  age: 21
}

/*
diese for Schleife gibt beim ersten Durchlauf
key in student = name

und beim zweiten Durchlauf
key in student = age
*/

for (const key in student) {
  console.log("key:", key)
}

/* Terminal

key: name
key: age

*/
