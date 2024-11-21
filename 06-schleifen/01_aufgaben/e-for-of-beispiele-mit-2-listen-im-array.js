
/*

Erstellt mit CHATGPT Link: https://chatgpt.com/c/67223c46-569c-8001-a40e-58d5898ef5ba

*/

const courses = [
    ["Max", "Manuela", "jenny"], // Erster Kurs
    ["Tim", "Erika"], // Zweiter Kurs
]

//-----------------------------------------------------Beispiel 1-----------------------------------------------------------------------
console.log("------------------------Beispiel 1------------------------")
// Beide Kurse anzeigen lassen

for (let course of courses) {
    console.log(course)
}
/* Terminal - Beide Kurse ausgeben
[ 'Max', 'Manuela', 'jenny' ]
[ 'Tim', 'Erika' ]

*///---------------------------------------------------Beispiel 2-----------------------------------------------------------------------
console.log("------------------------Beispiel 2------------------------")
// Alle Teilnehmer aus allen Kursen ausgeben

for (let course of courses) {
    for (let participant of course) {
        console.log(participant)
    }
}
/* Terminal
Max
Manuela
jenny
Tim
Erika

*///---------------------------------------------------Beispiel 3a----------------------------------------------------------------------
console.log("------------------------Beispiel 3a------------------------")
// Anzahl der Teilnehmer in jedem Kurs zählen

let courseNumber = 1

for (let course of courses) {
    console.log("Kurs " + courseNumber + ": Anzahl der Teilnehmer: " + course.length)
    courseNumber++
}
/* Terminal
Kurs 1: Anzahl der Teilnehmer: 3
Kurs 2: Anzahl der Teilnehmer: 2

*///---------------------------------------------------Beispiel 3b----------------------------------------------------------------------
console.log("------------------------Beispiel 3b------------------------")
// Anzahl der Teilnehmer in jedem Kurs zählen --- mit dem `` und ${}

for (let course of courses) {
    console.log(`Anzahl der Teilnehmer: ${course.length}`)
}
/* Terminal
Anzahl der Teilnehmer: 3
Anzahl der Teilnehmer: 2

*///---------------------------------------------------Beispiel 4-----------------------------------------------------------------------
console.log("------------------------Beispiel 4------------------------")
// Teilnehmernamen mit Kursnummer anzeigen

let courseNumber2 = 1

for (let course of courses) {
    console.log(`Kurs ${courseNumber2}:`)
    for (let participant of course) {
        console.log(participant)
    }
    courseNumber2++
}
/* Terminal
Kurs 1:
Max
Manuela
jenny
Kurs 2:
Tim
Erika
*///-------------------------------------------------Beispiel x-----------------------------------------------------------------------
/* console.log("------------------------Beispiel x------------------------")
// Nur Teilnehmernamen ausgeben, die mit "M" beginnen

let courses = [
    ["Max", "Manuela", "Janny"], // Erster Kurs
    ["Tim", "Erika"], // Zweiter Kurs
];

for (let course of courses) {
    for (let participant of course) {
        if (participant.startsWith("M")) {
            console.log(participant);
        }
    }
}

// Terminal
Max
Manuela

*///-------------------------------------------------Beispiel x-----------------------------------------------------------------------
/* console.log("------------------------Beispiel x------------------------")
// Teilnehmer in jedem Kurs durchnummerieren

let courses = [
    ["Max", "Manuela", "Janny"], // Erster Kurs
    ["Tim", "Erika"], // Zweiter Kurs
];

for (let course of courses) {
    let participantNumber = 1
    for (let participant of course) {
        console.log(`Teilnehmer ${participantNumber}: ${participant}`)
        participantNumber++
    }
}

// Terminal
Teilnehmer 1: Max
Teilnehmer 2: Manuela
Teilnehmer 3: Janny
Teilnehmer 1: Tim
Teilnehmer 2: Erika

*///-------------------------------------------------Beispiel x-----------------------------------------------------------------------