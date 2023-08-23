/*
Consola (para desarrolladores):
Puedes usar el objeto console para mostrar información en la consola del navegador.
Esto es útil para depurar y verificar valores. Los métodos más comunes son:
*/

console.log("Mensaje");  // Muestra un mensaje en la consola
console.error("Error");  // Muestra un mensaje de error en la consola
console.warn("Advertencia");  // Muestra una advertencia en la consola

/*
Ventana emergente (alert):
Puedes usar la función alert() para mostrar una ventana emergente en el navegador con un mensaje:
*/

alert("¡Hola, mundo!");

/*Contenido HTML:
Puedes insertar contenido en el HTML de la página web utilizando el DOM (Modelo de Objetos del Documento).
Un enfoque común es seleccionar un elemento en el HTML y modificar su contenido. Por ejemplo:
*/

<div id="output"></div> //html

// En tu archivo JavaScript
const outputDiv = document.getElementById("output");
outputDiv.textContent = "Este es un mensaje en el contenido HTML.";

/*
Manipulación directa del HTML:
Esta no es la mejor práctica debido a problemas de seguridad y estructura,
pero es útil para propósitos de aprendizaje o en situaciones muy específicas:
*/

document.write("Este mensaje se escribirá directamente en el HTML.");
