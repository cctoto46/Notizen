"use strict"

const student = {
  name: "Max Mustermann",
  age: 21
}

student.subject = "Englisch" // damit kann man sachen zu "student" hinzufügen
student["interestedIn"] = "Bulgarian" // man kann den Code auch so schreiben

delete student.age // damit kann man eine Eigenschaft in "students" gelöscht
// delete student["age"]

console.log("student", student)

/* Terminal

student {
  name: 'Max Mustermann',
  subject: 'Englisch',
  interestedIn: 'Bulgarian'
}

*/