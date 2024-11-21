"use strict"

const courses = [
  ["Christian", "Annika"], // Kurs 1
  ["Julian", "Lisa", "Tobias"], // Kurs 2
]

// 1a) Ergänze die Funktion, die ermittelt, welcher Kurs
//     bisher am wenigsten Teilnehmer hat.
//
//     Wenn 2 Kurse genau gleich viele Teilnehmer haben, ist
//     es egal, welcher Index zurückgegeben wird.
//
//     Beispiel (für die Variable "courses" von oben):
//      >> console.log(getSmallestCourse())
//      >> Rückgabewert: 0, weil der 1. Kurs (Kurs mit Index 0) am
//                       wenigsten Teilnehmer hat

function getSmallestCourse() {
  let indexLeastStudents = -1
  /*  Die Variable indexLeastStudents wird hier mit dem Wert -1 initialisiert. Dieser Wert bedeutet, dass zunächst noch kein Kurs
        mit den wenigsten Teilnehmern festgelegt ist. Die Variable wird verwendet, um den Index des Kurses zu speichern, der am wenigsten Teilnehmer hat. */

  for (const i in courses) {
    /*  - Diese Zeile startet eine for...in-Schleife, die jeden Index in der Liste courses durchläuft.
        - i ist der Index des aktuellen Kurses (zum Beispiel 0 für den ersten Kurs).
        - for...in eignet sich hier, da wir den Index brauchen, um auf Elemente in courses zuzugreifen. */

    const course = courses[i]
    /*Hier wird der aktuelle Kurs (courses[i]) in der Schleife in der Variablen course gespeichert. course ist ein Array,
    das die Namen der Teilnehmer des jeweiligen Kurses enthält (zum Beispiel ["Christian", "Annika"] für den ersten Kurs). */

    if (indexLeastStudents === -1) {
      indexLeastStudents = i
      /*- In diesem Block wird geprüft, ob indexLeastStudents noch den Startwert -1 hat.
        - Falls ja, bedeutet das, dass dies der erste Durchlauf der Schleife ist, also der erste Kurs geprüft wird.
        - Der Index i des ersten Kurses wird dann als neuer Wert in indexLeastStudents gespeichert. */

    } else {
      if (course.length < courses[indexLeastStudents].length) {
        indexLeastStudents = i
      }/* - else Block: Dieser wird ausgeführt, wenn indexLeastStudents bereits gesetzt wurde (also nicht mehr -1 ist).
          - Die innere if-Bedingung prüft, ob die Anzahl der Teilnehmer im aktuellen Kurs (course.length) kleiner ist als die Anzahl der Teilnehmer
            im bisher festgelegten Kurs (courses[indexLeastStudents].length).
          - Wenn diese Bedingung wahr ist, bedeutet das, dass der aktuelle Kurs weniger Teilnehmer hat als der bisher "kleinste" Kurs,
            und der Index i des aktuellen Kurses wird in indexLeastStudents gespeichert. */
    }
  }
  return parseInt(indexLeastStudents) // Rückgabe des Index des Kurses mit den wenigsten Teilnehmern (Es wird durch parseInt in eine Zahl umgewandelt)
  /* - Am Ende der Funktion wird indexLeastStudents zurückgegeben.
       parseInt konvertiert den Wert in eine Zahl (falls i als String gespeichert war, da for...in-Schleifen mit String-Indizes arbeiten).
     - Die Rückgabe ist der Index des Kurses mit den wenigsten Teilnehmern.*/
}

console.log(
  "Der Kurs mit den wenigsten Teilnehmern ist Kurs " + (getSmallestCourse() + 1)
)
/* - Hier wird getSmallestCourse() aufgerufen, und der Rückgabewert wird um + 1 erhöht,
     da die Ausgabe für den Benutzer den Kurs als "1" (statt 0-basiert) nummerieren soll.
   - Das Ergebnis wird in einem String in der Konsole ausgegeben, um dem Benutzer mitzuteilen, welcher Kurs die wenigsten Teilnehmer hat. */


//------------------------------------------------------------------------------------------------------------------------------------------------------

// Terminal = Der Kurs mit den wenigsten Teilnehmern ist Kurs 1