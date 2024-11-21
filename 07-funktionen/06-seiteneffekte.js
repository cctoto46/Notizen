"use strict"

// WICHTIG! Es gibt elegantere Lösungen dafür und Seiteneffekte können zu Problemen führen!

const students = ["Max"]

function addStudent(name) {
  students.push(name)
}

addStudent("Erika")

console.log("students:", students)

/* terminal:

students: [ 'Max', 'Erika' ]

*/