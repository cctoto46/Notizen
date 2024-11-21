
// Aufgabe 4


// Unsere Sprachschule wächst dank unserer Hilfe immer weiter.
// Inzwischen sollen weitere Kurse hinzugefügt werden, und unser
// Code soll darauf vorbereitet werden.
//
// Die Teilnehmer werden ja pro Kurs gespeichert. Bisher hatten
// wir dafür immer separate Variablen verwendet.
//
// Hier in dem Beispiel wäre das in der Schreibweise von vorher,
// students1 wäre der erste Kurs, students2 der Zweite:
//  >> let students1 = ["Max", "Monika"]
//  >> let students2 = ["Erik", "Erika"]
//
// Damit die Sprachschule wachsen kann, wird die Struktur in eine
// verschachtelte Liste umgestellt. Dadurch kann später ein 3.
// Kurs hinzugefügt werden:

let Courses = [
    ["Max", "Manuela"], // Erster Kurs
    ["Tim", "Erika"], // Zweiter Kurs
  ];
  
  
  // Teilaufgabe A-------------------------------------------
  console.log("---Aufgabe 4a---")
  
  //Berechne die Anzahl der Teilnehmer in allen Kursen zusammen!
  
  let num = 0
  for (const course of Courses) {
    num += course.length // unkompakter=  num = num + course.length
  }
  console.log(num)
  
  // Terminal = 4
  
  
  // Teilaufgabe b-------------------------------------------
  console.log("---Aufgabe 4b---")
  
  //     Der Teilnehmer "Max" musste seinen Sprachkurs absagen. Schreibe
  //     ein Programm, was ihn aus seinem Kurs entfernt. Dieses Programm
  //     soll auch in der Lage sein, z.B. "Erika" aus ihrem entsprechenden
  //     Kurs entfernen zu können.
  //
  //     Sorge auch dafür, dass wenn z.B. "Jens" seinen Sprachkurs absagen
  //     muss, dass darauf hingewiesen wird, dass Jens nicht ausgetragen
  //     werden konnte, da er ja gar nicht eingeschrieben ist.
  //
  // Wichtig: Schreibe den Code so, dass er später auch mit 3 oder mehr
  // Sprachkursen zurechtkommt!
  
  const studentToCancel = "Max"
  let studentFound = false
  
  for (const course of Courses) {
    if (course.indexOf(studentToCancel) !== -1) {
      const posStudentToCancel = course.indexOf(studentToCancel)
      course.splice(posStudentToCancel, 1)
  
      studentFound = true
      break;
    }
  }
  console.log(Courses)
  
  if (studentFound === false) {
    console.log("Kein Teilnehmer entfernt")
  }
  
  // Terminal = [ [ 'Monika' ], [ 'Erik', 'Erika' ] ]
  
  
  //------------------------------------------------------------------------------------------------
  
  
  // Teilaufgabe c-------------------------------------------
  console.log("---Aufgabe 4c---")
  
  //     Ein neuer Teilnehmer soll eingeschrieben werden. Schreibe ein
  //     Programm, welches diesen neuen Teilnehmern in den Sprachkurs
  //     platziert, der bisher noch am wenigsten Teilnehmer hat.
  //
  //     Wie geht dein Programm mit dem Fall um, dass 2 Sprachkurse
  //     genau gleich viele Teilnehmer haben? Ist das Verhalten
  //     für eine Sprachschule akzeptabel?
  
  let indexLeastStudents = -1
  for (const i in Courses) {
    const course = Courses[i]
  
    if (indexLeastStudents === -1) {
      indexLeastStudents = i
    } else {
      if (course.length < Courses[indexLeastStudents].length) {
        indexLeastStudents = i
      }
    }
  }
  console.log(indexLeastStudents)
  
  
  // Terminal = 0
  