
//-------------------------------------------------------------------------------------------------------------------------
// Dieses Beispiel zeigt uns ob "Torsten" an einem der beiden Kurse teilnimmt
console.log("--------Aufgabe 1--------")

let students1 = ["Torsten", "Laura"] // Kurs 1 (wird für alle Aufgaben werwendet)
let students2 = ["Tobias", "Anna", "Michelle"] // Kurs 2 (wird für alle Aufgaben werwendet)

let student = "Torsten"

if (students1.indexOf(student) !== -1 || students2.indexOf(student) !== -1) {
    console.log("Torsten ist eingeschrieben")
} else {
    console.log("Torsten ist nicht eingeschrieben")
}

//-------------------------------------------------------------------------------------------------------------------------
// Dieses Beispiel zeigt uns wie man "Tom" einem Kurs hinzufügt! Aber der Kurs der am wenigsten Teilnehmer hat
console.log("--------Aufgabe 2--------")

let studentadd = "Tom"

if (students1.length < students2.length) {
    students1.push(studentadd)
} else if (students1.length > students2.length) {
    students2.push(studentadd)
} else {
    students1.push(studentadd)
}

console.log(students1) // Terminal: [ 'Torsten', 'Laura', 'Tom' ]
console.log(students2) // Terminal: [ 'Tobias', 'Anna', 'Michelle' ]

//-------------------------------------------------------------------------------------------------------------------------
/*  Dieses Beispiel zeigt uns wie man "Tobias" aus dem Kurs entfernen kann
    Er wird erstmal in dem jeweligen Kurs gesucht und dann wird students2.indexOf(Tobias) in eine neue Variable
    geändert, und zwar Index. Danach wird er mit der .splice(index, 1); funrktion gelöscht
    Die 1 bei .splice(index, 1); steht für ein Element löschen! */
console.log("--------Aufgabe 3.0--------")

let Tobias = "Tobias"

if (students1.indexOf(Tobias) !== -1) {
    // hier erstmal keine Aufgabe
} else if (students2.indexOf(Tobias) !== -1) {
    let index = students2.indexOf(Tobias);
    if (index !== -1) {
        students2.splice(index, 1);
    }
}

console.log(students1) // Terminal: [ 'Torsten', 'Laura', 'Tom' ]
console.log(students2) // Terminal: [ 'Anna', 'Michelle' ]

//-------------------------------------------------------------------------------------------------------------------------
// wenn man mehrere Teilnehmer löschen möchte
console.log("--------Aufgabe 3.1--------")

let studentsToRemove = ["Laura", "Tom"];

studentsToRemove.forEach(studentremove => {
    // Entferne aus students1
    let index1 = students1.indexOf(studentremove);
    if (index1 !== -1) {
        students1.splice(index1, 1);
    }

    // Entferne aus students2
    let index2 = students2.indexOf(studentremove);
    if (index2 !== -1) {
        students2.splice(index2, 1);
    }
})

console.log(students1)
console.log(students2)

//-------------------------------------------------------------------------------------------------------------------------
// Erklärung
console.log("--------Aufgabe 4--------")


