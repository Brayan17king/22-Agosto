/*Tipo Boolean. Boolean representa una entidad lógica y puede tener dos valores: true y false.*/

let isActive = true;
let isLoggedOut = false;

/*Tipo Null. El tipo Null tiene exactamente un valor: null.*/

let emptyValue = null;

/*Tipo Undefined. La propiedad global undefined representa el valor primitivo que no esta definido.*/

let undefinedValue; // No se le asigna un valor, por lo que es undefined

/*Tipo Number. El tipo Number es un valor en formato binario de 64 bits de doble precisión IEEE 754
(números entre -(253 - 1) y 253 - 1). Además de representar números de punto flotante.*/

let age = 25; // Número entero
let temperature = 98.6; // Número de punto flotante

/*Tipo BigInt. El tipo BigInt puede representar números enteros con precisión arbitraria.
Con BigInts, puedes almacenar y operar de forma segura en números enteros grandes incluso más allá del límite seguro de enteros para Numbers.*/

let bigIntValue = 1234567890123456789012345678901234567890n;

/*Tipo String. El tipo String de JavaScript se utiliza para representar datos textuales.
Es un conjunto de "elementos" de valores enteros sin signo de 16 bits.
Cada elemento del String ocupa una posición en la cadena. El primer elemento está en el índice 0, el siguiente en el índice 1, y así sucesivamente.
La longitud de una cadena es el número de elementos que contiene.*/

let greeting = "Hola, mundo!";
let name = 'Juan';

/*Tipo Symbol. Un símbolo es un valor primitivo único e inmutable y se puede utilizar como clave de una propiedad de objeto.
En algunos lenguajes de programación, los símbolos se denominan "átomos".
*/

let uniqueID = Symbol("id");
let anotherID = Symbol("id"); // Los símbolos son únicos, incluso si la descripción es la misma
