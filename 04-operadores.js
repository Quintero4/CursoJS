//Operadores

//Operadores aritméticos

let a = 10;
let b = 5;
console.log(a + b); //Suma
console.log(a - b); //Resta
console.log(a * b); //Multiplicación
console.log(a / b); //División
console.log(a % b); //Módulo o resto de la división
console.log(a ** b); //Exponente

console.log(10 + 5); //Suma
console.log(10 - 5); //Resta
console.log(10 * 5); //Multiplicación
console.log(10 / 5); //División
console.log(10 % 3); //Módulo
console.log(10 ** 2); //Exponente   

a++; //Incremento
console.log(a);
b--; //Decremento
console.log(b);

//Operadores de asignación

let myVariable = 2; //Asignación simple
console.log(myVariable);
myVariable += 3; //Asignación con suma
console.log(myVariable);
myVariable -= 1; //Asignación con resta
console.log(myVariable);
myVariable *= 4; //Asignación con multiplicación
console.log(myVariable);
myVariable /= 2; //Asignación con división
console.log(myVariable);
myVariable %= 3; //Asignación con módulo
console.log(myVariable);
myVariable **= 2; //Asignación con exponente
console.log(myVariable);

//Operadores de comparación

let x = 10;
let y = 5;
console.log(x == y); //Igualdad
console.log(x != y); //Desigualdad
console.log(x === y); //Igualdad estricta
console.log(x !== y); //Desigualdad estricta
console.log(x > y); //Mayor que
console.log(x < y); //Menor que     
console.log(x >= y); //Mayor o igual que
console.log(x <= y); //Menor o igual que

//truthy values and falsy values

console.log(true); // true
console.log(false); // false
console.log(1); // 1 es true
console.log(0); // 0 es false
console.log("hola"); // Cadena de texto es true
console.log(""); // Cadena vacía es false
console.log([]); // objeto vacío es false
console.log([1, 2, 3]); // objeto no vacío es true
console.log({}); // objeto vacío es true
console.log(null); // null es false
console.log(undefined); // undefined es false

//Operadores lógicos    
//AND
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
//OR
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
//NOT
console.log(!true); // false
console.log(!false); // true

//Operador ternario
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote."; // ? significa "si" y : significa "sino"
console.log(canVote); // Output: Yes, you can vote.