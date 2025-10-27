//1. Crea una variable para cada operación aritmética (suma, resta, multiplicación, división, módulo y exponente) entre dos números cualesquiera e imprime el resultado por consola.

let q = 3;
let w = 2;

console.log(q + w); //Suma
console.log (q-w); //Resta
console.log (q*w);  //Multiplicación
console.log (q/w);  //División
console.log (q%w);  //Módulo
console.log (q**w); //Exponente
console.log (q<w);  //Menor que
console.log (q>w);  //Mayor que

q++;
console.log (q);        
q--;
console.log (q);
q+=2;
console.log (q);
q-=1;
console.log (q);

//2. Crea una variable para cada tipo de operación de asignación que haga uso.
let a = 5;
let b = 10;

a += 2; // Suma
b -= 3; // Resta
a *= 2; // Multiplicación
b /= 2; // División
a %= 3; // Módulo
b **= 2; // Exponente

console.log(a);
console.log(b);

// 3. Imprime 5 compraciones falsas con diferentes operadores de comparación.
console.log (q<w);
console.log (q==w);
console.log (q===w);
console.log (q<=w);
console.log (q>=w);

// 4. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación.
console.log (q>w);
console.log (q!=w);
console.log (q!==w);
console.log (q>=w);

//5. Utiliza el operador lógico and
console.log (q>w && w<q);

//6. Utiliza el operador lógico or
console.log (q>w || w<q);

//7. Combina ambos operadores lógicos en una misma expresión
console.log (q>w || w<q && a>b);

//8. Añade alguna negación

console.log (!(q>w && w<q));

//9. Utiliza el operador ternario

const estoyAprobado = a >= 5
estoyAprobado ? console.log ("No he aprobado") : console.log ("He aprobado") 

//10. Combina operadores ariteméticos, de comparación y lógicos en una misma expresión.

