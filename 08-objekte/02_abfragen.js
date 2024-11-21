"use strict"

const student = {
  name: "Max Mustermann",
  age: 21,
  subject: "Englisch"
}

// student["age"] = 22 // man kann den Code auch so schreiben (diese wird seltener verwendet, aber es gibt einen Grund (siehe 04_schreibweisen.js))
student.age = 22

console.log(student["name"])
console.log(student["age"])
console.log(student["subject"])

console.log(student)

/* Terminal

Max Mustermann
22
Englisch
{ name: 'Max Mustermann', age: 22, subject: 'Englisch' }

*/