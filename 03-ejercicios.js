//1. Escribe un comentario en una línea

//Esto es un comentario de una línea

//2. Escribe un comentario de varias líneas

/*Estos son comentarios
en varias
líneas*/

//3. Declara una variable con valores asociados a todos los datos de tipo primitivos.

let name = "Fernando"; //String
let age = '36'
let istecnico = false
let isProgramador = true
let undefined 
let nullValue  = null
let symbol = Symbol("symbol")
let bigInt = 235363523452342343563452352n

//4.Imprime por consola el valor de todas las variables.

console.log (name)
console.log (age)
console.log (istecnico)
console.log (isProgramador)
console.log (undefined)
console.log (nullValue)
console.log (symbol)
console.log (bigInt)

//5. Imprime por consola el tipo de dato de cada variable.

console.log (typeof name)
console.log (typeof age)
console.log (typeof istecnico)
console.log (typeof isProgramador)
console.log (typeof undefined)
console.log (typeof nullValue)
console.log (typeof symbol)
console.log (typeof bigInt)

//6. A continuación, modifica los valores de las variables por otros del mismo tipo de dato.

name = "fer";
age = '37'
istecnico = true
isProgramador = false
undefined = 5
nullValue  = null
symbol = Symbol("newSymbol")
bigInt = 9876543210123456789n

console.log (name)
console.log (age)
console.log (istecnico)
console.log (isProgramador)
console.log (undefined)
console.log (nullValue)
console.log (symbol)
console.log (bigInt)

//7. A continuación, intenta modificar los valores de las variables por otros de distinto tipo de dato. 

name = 123; //String a Number
age = true //String a Boolean
istecnico = "yes" //Boolean a String
isProgramador = 0 //Boolean a Number
undefined = "now defined" //Undefined a String
nullValue  = false //Null a Boolean
symbol = "not a symbol" //Symbol a String
bigInt = 12345 //BigInt a Number

//8. Declara constantes con valores asociados a todos los tipos de dato primitivos.

const constName = "ConstFernando"; //String
const constAge = '40'
const constIstecnico = false   
const constIsProgramador = true
const constUndefined = undefined
const constNullValue  = null
const constSymbol = Symbol("constSymbol")
const constBigInt = 12345678901234567890n
console.log (constName)
console.log (constAge)
console.log (constIstecnico)
console.log (constIsProgramador)
console.log (constUndefined)
console.log (constNullValue)
console.log (constSymbol)
console.log (constBigInt)
//9. A continuación, modifica los valores de las constantes.
constName = "NewConstFernando"; //Da error
constAge = '41' //Da error
constIstecnico = true //Da error
constIsProgramador = false //Da error
constUndefined = "now defined" //Da error
constNullValue  = false //Da error
constSymbol = Symbol("newConstSymbol") //Da error
constBigInt = 9876543210987654321n //Da error



//10. Comenta las líneas que producen error para que el código pueda ejecutarse sin problemas.
//constName = "NewConstFernando"; //Da error
//constAge = '41'
//constIstecnico = true
//constIsProgramador = false
//constUndefined = "now defined"
//constNullValue  = false
//constSymbol = Symbol("newConstSymbol")
//constBigInt = 9876543210987654321n