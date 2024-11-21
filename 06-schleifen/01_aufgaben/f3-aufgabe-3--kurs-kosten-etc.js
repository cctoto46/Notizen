// Aufgabe 3

// Für eine Sprachschule soll ein Preisrechner entwickelt werden,
// der den Gesamtpreis bis hin zu einem bestimmten Level berechnet.
//
// Beispiel: Für das Level levels[0] = A1 beträgt der Preis exakt
// prices[0] = 400€.
//
// Für jeden Index kannst du also in der Variable "levels" nachschauen,
// wie dieses Level bezeichnt wird, und in der Variable "prices",
// wie viel dieses Kostet.
//
// Schreibe den Code für die folgenden Teilaufgaben möglichst universell,
// sodass wir z.B. ein Level A3 noch dazwischen schalten können, indem
// wir nur die Listen "levels" und "prices" anpassen!
// 
// a) Wie viel kostet es für einen Teilnehmer, die Sprache bis 
//    einschließlich des Levels "C1" zu lernen? Schreibe deinen Code so
//    universell, dass er auch mit anderen Level-Bezeichnungen / Preisen
//    zurecht käme.
//
// b) Wie viel kostet es, einen Teilnehmer von (einschließlich) A2 bis
//    einschließlich C1 zu bringen?
// 
// c) Ein Teilnehmer möchte (maximal) 1500€ in seine Sprachkenntnisse 
//    investieren. Bis zu welchem Level (bei A1 angefangen) können wir
//    ihn dafür unterrichten?

let levels = ["A1", "A2", "B1", "B2", "C1", "C2"]
let prices = [400, 500, 550, 600, 650, 700]


// Teilaufgabe a-------------------------------------------
console.log("---Aufgabe 3a---")

let costsUntilC1 = 0
for (const i in levels) {
  const level = levels[i]
  const price = prices[i]
  
  costsUntilC1 += price

  if (level === "C1") {
    break
  }
}
console.log(costsUntilC1)

// Terminal = 2700


// Teilaufgabe b-------------------------------------------
console.log("---Aufgabe 3b---")

let costsFromA2ToC1 = 0
let levelA2Seen = false

for (const i in levels) {
  const level = levels[i]
  const price = prices[i]

  if (level === "A2") {
    levelA2Seen = true
  }
  
  if (levelA2Seen) {
    costsFromA2ToC1 += price
  }

  if (level === "C1") {
    break
  }
}
console.log(costsFromA2ToC1)

// Terminal = 2300


// Teilaufgabe c-------------------------------------------
console.log("---Aufgabe 3c---")

let priceSoFar = 0
for (const i in levels) {
  const level = levels[i]
  const price = prices[i]

  if (priceSoFar + price >= 1500) {
    // Der Teilnehmer kann sich den aktuell betrachteten Kurs
    // nicht mehr leisten.
    console.log("Wir können bis einschließlich hierhin unterrichten:", levels[i - 1])
    break
  }

  priceSoFar += price
}

// Terminal = Wir können bis einschließlich hierhin unterrichten: B1