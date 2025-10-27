//Datatypes in JavaScript Primitives

//String
let name = "Fernando"
let alias = 'Fer'
let email = `fernando@example.com`
console.log(name)
console.log(alias)
console.log(email)

//Number
let age = 30 // Entero
let height = 1.75 // Decimal
console.log(age)
console.log(height)

//Boolean
let isStudent = true
let hasJob = false
console.log(isStudent)
console.log(hasJob)

//Undefined
let undefinedValue
console.log(undefinedValue)

//Null
let nullValue  = null
console.log(nullValue)

//Symbol
let mySymbol = Symbol("mySymbol")
console.log(mySymbol) 

//BigInt
let bigIntValue = 9007199254740991n // Nota la 'n' al final
console.log(bigIntValue)
let bigIntValue2 = BigInt(9007199254740991) // Usando la función BigInt
console.log(bigIntValue2)

//Mostrar tipos de datos
console.log(typeof name)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue) // Nota: esto devuelve 'object', es un comportamiento histórico de JavaScript
console.log(typeof mySymbol)
console.log(typeof bigIntValue)