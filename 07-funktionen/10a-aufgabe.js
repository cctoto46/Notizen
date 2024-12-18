"use strict"

const courses = [
  ["Christian", "Annika"], // Kurs 1
  ["Julian", "Lisa", "Tobias"], // Kurs 2
]




// Aufgabe 1
//
// Die Sprachschule, die wir betreuen, hat herausgefunden,
// dass es Funktionen gibt!
//
// Die Kurse, die aktuell gerade unterrichtet werden,
// sind in der Variable "courses" gespeichert.
//
// Wir sollen daher ein paar Funktionen schreiben, die die
// Arbeit mit den Teilnehmern der Kurse erleichtern:


//--------------------------------------------------------------------------------------------------------------------
console.log("-----------------------Aufgabe 1a-----------------------")

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

  for (const i in courses) {
    const course = courses[i]
    
    if (indexLeastStudents === -1) {
      indexLeastStudents = i
    } else {
      if (course.length < courses[indexLeastStudents].length) {
        indexLeastStudents = i
      }
    }
  }
  return parseInt(indexLeastStudents)  // Rückgabe des Index des Kurses mit den wenigsten Teilnehmern (Es wird durch parseInt in eine Zahl umgewandelt)
}



console.log("Der Kurs mit den wenigsten Teilnehmern ist Kurs " + (getSmallestCourse() + 1))


//--------------------------------------------------------------------------------------------------------------------
console.log("-----------------------Aufgabe 1b-----------------------")

// 1b) Ergänze die Funktion, die einen Teilnehmer in den Kurs
//     einfügt, der bisher am wenigsten Teilnehmer hat!
//     Wir nutzen hier das Ergebnis aus Teilaufgabe 1a weiter!



function addStudent(name) {
  
  const smallestCourseIndex = getSmallestCourse() // Kurs der am wenigsten Teilnehmer hat
  courses[smallestCourseIndex].push(name) // Fügen wir den neuen Teilnehmer zum Kurs hinzu
  console.log("Teilnehmer" + name + "wurde zum Kurs" + (getSmallestCourse() + 1) + "hinzugefügt")
  console.log("Aktuelle Kursübersicht:", courses)
}

addStudent("Max") // Max wird zum Kurs mit den wenigsten Teilnehmern hinzugefügt


//--------------------------------------------------------------------------------------------------------------------

// Aufgabe 2
//
// Mit Hilfe von Funktionen sollen wir ein einfaches Wörterbuch
// entwickeln.
//
// Die entsprechenden Sprachbausteine findest du in den Variablen
// "LANGUAGE_DE" bzw. "LANGUAGE_EN". Das sind übrigends ganz normale
// Variablennamen, und mit der kompletten Großschreibung deuten wir
// für andere Programmierer nochmal zusätzlich an, dass diese Variablen
// nie abgeändert werden sollen.

// Die Indexe stimmen jeweils überein, also LANGUAGE_DE[0]
// enthält das gleiche Wort in Deutsch, wie LANGUAGE_EN[0]
// auf Englisch.
//
// Hinweis: Der Code den wir hier schreiben, der wird zwangs-
// läufig eher ineffizient. Später lernst du noch mit Objekten
// eine sehr viel "effizientere" Möglichkeit für solche
// Nachschlage-Aktionen kennen!
//
// 2a) Ergänze die Funktion, die ein einzelnes Wort von
//     Deutsch nach Englisch übersetzt. Diese Funktion
//     soll das englische Wort über ein "return"
//     zurückgeben.
//
//     Wichtig: Bitte beachte hier Groß- und Kleinschreibung.
//     Das Wörterbuch liegt ausschließlich in Kleinbuchstaben
//     vor - das Wort, was hier übergeben wird, musst
//     du also noch mit .toLowerCase() umwandeln!
//
//     Kann ein Wort nicht übersetzt werden, so soll 1:1
//     das deutsche Wort zurückgegeben werden.
//
//     >> translateWord("Sprachkurs")
//     >> // Rückgabewert: "language course"
console.log("-----------------------Aufgabe 2a-----------------------")


const LANGUAGE_DE = [
  "hallo",
  "heute",
  "sprachkurs",
  "willkommen",
  "mikrofon",
  "und",
]

const LANGUAGE_EN = [
  "hello",
  "today",
  "language course",
  "welcome",
  "microphone",
  "and",
]

function translatedword(WORD_TO_TRANSLATE) {
  WORD_TO_TRANSLATE = WORD_TO_TRANSLATE.toLowerCase()
  /* Das gesuchte Wort Sprachkurs wird komplett in Kleinbuchstaben verwandelt
     um die Suche in "LANGUAGE_DE" (Zeilen 123-130) zu verberssern */

if (LANGUAGE_DE.indexOf(WORD_TO_TRANSLATE) !== -1) { // ob es dieses Wort im Wörterbuch gibt
  const WORD_INDEX = LANGUAGE_DE.indexOf(WORD_TO_TRANSLATE) // der Index des jeweiligen Wortes
  const englishword = LANGUAGE_EN[WORD_INDEX] // das englische Wort wird aus dem Index gesucht
  console.log(englishword) // 

} else {
  console.log("Das Wort existiert nicht!")
}
return 
}

translatedword("Sprachkurs") /* Die übersetzung wird ausgegeben und
               "Sprachkurs" ist die Varibale WORLD_TO_TRANSLATE */

//---------------------------------------------------------------------------------------------------

// 2b) Schreibe eine Funktion, die den ersten Buchstaben eines
//     Wortes in Großbuchstaben umwandeln kann.
//
//     Bezüglich des Funktionsnamens, uc = uppercase, d.h.
//     ucFirst = "mach' den ersten Buchstaben in Uppercase"
//
//     Tipp: Zerlege hierfür das Wort, einmal in den ersten Buchstaben,
//     und einmal in den Rest des Wortes / Strings.
//
//     Wandle anschließend den ersten Buchstaben in Großbuchstaben um
//     (.toUpperCase()), und baue den String wieder zusammen!
//
//     Beispiel:
//      >> ucFirst("sprachschule")
//      >> // Rückgabewert: "Sprachschule"
//
//     Das Ergebnis soll per "return" zurückgegeben werden
console.log("-----------------------Aufgabe 2b-----------------------")
/*

function ucFirst(word) { // funciotn mit der Variable "word"
  
  const ersterBuchstabe = word.charAt(0)   // Der Anfangsbuchstabe
  const restDesWortes = word.slice(1) // Das restilche Wort
  const upperCaseWord = ersterBuchstabe.toUpperCase() // s wird in S umgewandelt
  const changedword = (upperCaseWord + restDesWortes) // Das Wort wird wieder zusammengefügt
  console.log(changedword) // ausgabe
  return changedword // wird auserhalb von der Funktion zum weiterverarbeiten ausgegeben
}

ucFirst("sprachschule") // Der String "sprachschule" wird in die Varibale (Zeile 178) erstellt

*/
//---------------------------------------------------------------------------------------------------

// 2c) Aufbauend den Funktionen aus 2a und 2b, entwickle eine weitere
//     Funktion, die einen ganzen Satz übersetzen kann!
//
//     Zerlege dazu den Satz in Wörter, übersetze diese einzeln
//     und setze den Satz wieder zusammen!
//
//     Zudem stelle sicher, dass der erste Buchstabe des Satzes in
//     Großbuchstaben geschrieben wird!
//
//     Beispiel:
//     >> translateSentence("Hallo und willkommen beim Sprachkurs")
//     >> // Rückgabewert: "Hello and welcome beim language course"
//
//    Hinweis:
//      Es geht hier nur um eine "rudimentäre" Übersetzung, das
//      siehst du auch am Sprachfehler, das Wort "beim" wurde einfach 1:1
//      übernommen.
//      Tatsächliche Übersetzungstools sind sehr viel komplexer,
//      inzwischen so komplex, dass i.d.R. selbstlernende Programme wie z.B.
//      Neuronale Netze verwendet werden. Die würde man dann aber eher in
//      C++ oder Python entwickeln als in JavaScript.
console.log("-----------------------Aufgabe 2c-----------------------")





function translateSentence(sentence) {

}


translateSentence("Hallo und willkommen beim Sprachkurs")

/*
function ucFirst(word) { // funciotn mit der Variable "word"
  
  const ersterBuchstabe = word.charAt(0)   // Der Anfangsbuchstabe
  const restDesWortes = word.slice(1) // Das restilche Wort
  const upperCaseWord = ersterBuchstabe.toUpperCase() // s wird in S umgewandelt
  const changedword = (upperCaseWord + restDesWortes) // Das Wort wird wieder zusammengefügt
  console.log(changedword) // ausgabe
  return changedword // wird auserhalb von der Funktion zum weiterverarbeiten ausgegeben
}
ucFirst("sprachschule") // Der String "sprachschule" wird in die Varibale (Zeile 178) erstellt
*/