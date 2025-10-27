//Concatenaión de strings

let nombre = "Fernando";
let greeting = 'Hola,';
console.log(greeting + " " + nombre);

let greeting2 = "Hola, " + nombre + "!"; // Concatenación con el operador + y "!" al final para saludar
console.log(greeting2);

//Longitud de un string
console.log(greeting2.length); // Imprime la longitud del string greeting2)

//Acceder a caracteres individuales
console.log(nombre[0]); // Imprime la primera letra del nombre
console.log(nombre.charAt(2)); // Imprime la tercera letra del nombre
console.log(nombre[nombre.length - 1]); // Imprime la última letra del nombre

