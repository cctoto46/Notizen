/*

Erstellt mit CHATGPT Link: https://chatgpt.com/c/67224bd7-6cc8-8001-8d10-ed4926b91d63

*/

const courses = [
  ["Max", "Manuela", "jenny"], // Erster Kurs
  ["Tim", "Erika"], // Zweiter Kurs
]

//-----------------------------------------------------Beispiel 1---------------------------------------------------------------------
console.log("------------------------Beispiel 1------------------------")
// ganze Kurse ausgeben! wird zweimal ausgegeben weil "Zeilen 2 und 3 " jeweils ein Kurs haben. (es ist halt eine Schleife)

for (const i in courses) {
  console.log(courses)
}
/* Terminal
[ [ 'Max', 'Manuela', 'janny' ], [ 'Tim', 'Erika' ] ]
[ [ 'Max', 'Manuela', 'janny' ], [ 'Tim', 'Erika' ] ]
*/
//-----------------------------------------------------Beispiel 2---------------------------------------------------------------------
console.log("------------------------Beispiel 2------------------------")
// Index der jeweiligen Kurse

for (const i in courses) {
  console.log(i)
}
/* Terminal
0
1
*/
//-----------------------------------------------------Beispiel 3---------------------------------------------------------------------
console.log("------------------------Beispiel 3------------------------")
// beide Kurse einzeln ausgegeben

for (const i in courses) {
  const course = courses[i]
  console.log(course)
}  
/* Terminal - 
[ 'Max', 'Manuela', 'janny' ]
[ 'Tim', 'Erika' ]
*/
//------------------------------------------------------------------------------------------------------------------------------------



// CHATGPT TEIL:


/*
Was bedeutet parseInt() ?

*/


//-------------------------------------------------------Beispiel 4--------------------------------------------------------------------
console.log("------------------------Beispiel 4 -----------------------")
console.log("------------------------ parseInt ------------------------")
// Iterieren durch die Hauptliste (Kurse)

for (let i in courses) {
  console.log("Kurs", parseInt(i) + 1, "hat folgende Teilnehmer:")
  console.log(courses[i])
}

/* Terminal
Kurs 1 hat folgende Teilnehmer:
[ 'Max', 'Manuela', 'jenny' ]
Kurs 2 hat folgende Teilnehmer:
[ 'Tim', 'Erika' ]
*/
//-----------------------------------------------------Beispiel 5----------------------------------------------------------------------
console.log("------------------------Beispiel 5------------------------")
// Durch jeden Kurs und jeden Teilnehmer iterieren

for (let i in courses) {
  console.log("Teilnehmer von Kurs", parseInt(i) + 1 + ":")
  for (let j in courses[i]) {
      console.log("- " + courses[i][j])
  }
}

/* Terminal
Teilnehmer von Kurs 1:
- Max
- Manuela
- jenny
Teilnehmer von Kurs 2:
- Tim
- Erika
*/
//-----------------------------------------------------Beispiel 6----------------------------------------------------------------------
console.log("------------------------Beispiel 6------------------------")
// Beispiel: Erstellen einer Liste aller Teilnehmer (Flatten Array)

let allParticipants = []

for (let i in courses) {
    for (let j in courses[i]) {
        allParticipants.push(courses[i][j])
    }
}

console.log("Alle Teilnehmer:", allParticipants)

/* Terminal
Alle Teilnehmer: [ 'Max', 'Manuela', 'jenny', 'Tim', 'Erika' ]
*/
//-----------------------------------------------------Beispiel 7----------------------------------------------------------------------
console.log("------------------------Beispiel 7------------------------")
// Anzahl der Teilnehmer pro Kurs berechnen

for (let i in courses) {
  console.log("Kurs", parseInt(i) + 1, "hat", courses[i].length, "Teilnehmer")
}

/* Terminal
Kurs 1 hat 3 Teilnehmer
Kurs 2 hat 2 Teilnehmer
*/
//-----------------------------------------------------Beispiel 8----------------------------------------------------------------------
console.log("------------------------Beispiel 8------------------------")
// Anzeigen des ersten Teilnehmers jedes Kurses

for (let i in courses) {
  console.log("Der erste Teilnehmer von Kurs", parseInt(i) + 1, "ist:", courses[i][0])
}

/* Terminal
Der erste Teilnehmer von Kurs 1 ist: Max
Der erste Teilnehmer von Kurs 2 ist: Tim
*/
//------------------------------------------------------------------------------------------------------------------------------------



// anstatt parseInt() kann man auch +i +1 benutzen



//-----------------------------------------------------Beispiel 9----------------------------------------------------------------------
console.log("------------------------Beispiel 9------------------------")
console.log("------------------------  +i + 1  ------------------------")
// 

for (let i in courses) {
  console.log("Kurs", +i + 1, "hat", courses[i].length, "Teilnehmer")
}

/* Terminal
Kurs 1 hat 3 Teilnehmer
Kurs 2 hat 2 Teilnehmer
*/
