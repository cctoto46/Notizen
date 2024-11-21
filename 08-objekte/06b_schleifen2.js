"use strict"

const student = {
  name: "Max Mustermann",
  age: 21
}

//-----------------------------------------------------------------------------------------------------

for (const key in student) { // for in Schleife
  const value = student[key] // hier nehmen wir das Wert(value) vom key(name und age) - (bedeutet das was im key ist (name und age))
  console.log("key:", key)
  /* Terminal
  key: name (erster Durchlauf)
  key: age  (zweiter Durchlauf) */
  console.log("value:", value) // Terminal = value: Max Mustermann
  /* Terminal
  value: Max Mustermann (erster Durchlauf)
  value: 21  (zweiter Durchlauf) */
}

//-----------------------------------------------------------------------------------------------------

// Object.keys() --- die Schlüssel
console.log("Object.keys:",  Object.keys(student)) // Terminal = Object.keys: [ 'name', 'age' ]

// Object.values() --- die Werte im key
console.log("Object.values:", Object.values(student)) // Terminal = Object.values: [ 'Max Mustermann', 21 ]

// Object.entries() --- in einem verschachteltes Array
console.log("Object.entries:", Object.entries(student)) // Terminal = Object.entries: [ [ 'name', 'Max Mustermann' ], [ 'age', 21 ] ]

//-----------------------------------------------------------------------------------------------------

for (const entry of Object.entries(student)) {
  console.log(entry[0] + ": " + entry[1])

}

//-----------------------------------------------------------------------------------------------------

/* Terminal GANZER

key: name
value: Max Mustermann
key: age
value: 21
Object.keys: [ 'name', 'age' ]
Object.values: [ 'Max Mustermann', 21 ]
Object.entries: [ [ 'name', 'Max Mustermann' ], [ 'age', 21 ] ]
name: Max Mustermann
age: 21

*/
