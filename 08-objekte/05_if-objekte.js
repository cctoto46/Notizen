"use strict"

const student = {
  name: "Max Mustermann",
  age: 21,
  enrolled: false,
  numberOfCourses: 0
}

/* diese if abfrage wird nicht angezeit weil "numberOfCourses: 0" auf 0 gesetzt ist. Es ergibt dann false. die Lösung ist in Zeile 16*/
if (student.numberOfCourses) {
  console.log("Hallo Welt!")
}

if ("numberOfCourses" in student) { // dieser Code wird im Terminal ausgegeben
  console.log("numberOfCourses in student")
}

/* Terminal

numberOfCourses in student

*/

