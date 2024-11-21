"use strict"

const students = [
  {firstname: "Max", lastname: "Mustermann"},
  {firstname: "Erika", lastname: "Mustermann"}
]

console.log("students:", students)

for (const student of students) {
  console.log("student:", student)
}

const obj = {
  items: ["Apfel", "Orange"]
}
console.log("obj:", obj)

/* Terminal GANZER

students: [
  { firstname: 'Max', lastname: 'Mustermann' },
  { firstname: 'Erika', lastname: 'Mustermann' }
]
student: { firstname: 'Max', lastname: 'Mustermann' }
student: { firstname: 'Erika', lastname: 'Mustermann' }
obj: { items: [ 'Apfel', 'Orange' ] }

*/