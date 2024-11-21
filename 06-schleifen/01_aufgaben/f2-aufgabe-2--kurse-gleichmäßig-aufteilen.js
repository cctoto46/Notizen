// Aufgabe 2: Sprachschule
console.log("---Aufgabe 2---")

// Ein Kurs ist zu groß geworden. Teile die Teilnehmer daher
// gleichmäßig in 2 Kurse auf!
//
// Sorge dafür, dass dein Code auch mit anderen Kursgrößen
// funktioniert!
//
// Hinweis: Hier gibt es verschiedene Lösungswege - solange
// der Kurs in 2 Kurse aufgeteilt wird, die ungefähr gleich 
// groß sind, ist deine Lösung richtig!
//
// Tipp: Modulo!
const students = [
  "Max", 
  "Monika", 
  "Franziska", 
  "Bernd", 
  "Tobias", 
  "Andreas"
]

const students1 = []
const students2 = []

for (const i in students) {
  if (i % 2 === 0) {
    students1.push(students[i])
  }
  else {
    students2.push(students[i])
  }
}
console.log("students1", students1)
console.log("students2", students2)


/* Terminal

students1 [ 'Max', 'Franziska', 'Tobias' ]
students2 [ 'Monika', 'Bernd', 'Andreas' ]

*/