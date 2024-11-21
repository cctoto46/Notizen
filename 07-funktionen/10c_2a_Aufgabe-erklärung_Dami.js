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

const LANGUAGE_DE1 = [
  "hallo",
  "heute",
  "sprachkurs",
  "willkommen",
  "mikrofon",
  "und",
]

const LANGUAGE_EN1 = [
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
     um die Suche in "LANGUAGE_DE1" (Zeilen 123-130) zu verberssern */

  if (LANGUAGE_DE1.indexOf(WORD_TO_TRANSLATE) !== -1) {
    // ob es dieses Wort im Wörterbuch gibt
    const WORD_INDEX = LANGUAGE_DE1.indexOf(WORD_TO_TRANSLATE) // der Index des jeweiligen Wortes
    const englishword = LANGUAGE_EN1[WORD_INDEX] // das englische Wort wird aus dem Index gesucht
    console.log(englishword) //
  } else {
    console.log("Das Wort existiert nicht!")
  }
  return
}

translatedword("Sprachkurs") /* Die übersetzung wird ausgegeben und
               "Sprachkurs" ist die Varibale WORLD_TO_TRANSLATE */
