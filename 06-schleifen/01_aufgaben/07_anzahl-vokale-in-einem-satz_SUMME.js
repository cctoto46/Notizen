

/*   Zähle Buchstaben in einem Satz: for...of
Schreibe eine Funktion countVowels, die einen Satz entgegennimmt und die Anzahl der Vokale (a, e, i, o, u) darin zählt.
Verwende eine for...of Schleife. */



function countVowels(satz) {
    let vowelCount = 0
    const vowels = "aeiouAEIOU" // Definiert die Vokale (inklusive Großbuchstaben) 

    for (let char of satz) {  // Iteriert über jedes Zeichen im Satz
        if (vowels.includes(char)) { // Überprüft, ob das Zeichen ein Vokal ist
            vowelCount++  // Erhöht den Zähler für Vokale
        }
    }
    return `Anzahl der Vokale: ${vowelCount}`
}

console.log(countVowels("Dies ist ein Beispielsatz."))


/* Terminal

Anzahl der Vokale: 10



--------------------------------------------------Erklärung--------------------------------------------------

1. Die Variable vowelCount wird verwendet, um die Anzahl der Vokale zu speichern.
2. Die Zeichenfolge vowels enthält alle Vokale (sowohl Klein- als auch Großbuchstaben).
3. Die for...of-Schleife iteriert durch jedes Zeichen des Satzes.
4. Wenn das Zeichen ein Vokal ist (überprüft mit vowels.includes(char)), wird der Zähler vowelCount um 1 erhöht.
5. Die Funktion gibt die Anzahl der Vokale zurück.

*/
