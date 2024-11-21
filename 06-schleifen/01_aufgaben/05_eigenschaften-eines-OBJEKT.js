

/*  Eigenschaften eines Objekts: for...in
Schreibe eine for...in Schleife, die jede Eigenschaft des Objekts und deren Wert in der Konsole ausgibt. */

const auto = {
    marke: "BMW",
    modell: "X5",
    baujahr: 2020,
    farbe: "schwarz"
}


for (const i in auto) {
    let werte = auto[i]
    console.log(`${i} : ${werte}`)
}

/* Terminal

marke: BMW
modell: X5
baujahr: 2020
farbe: schwarz

*/





