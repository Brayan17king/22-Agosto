/*
Formularios HTML:
Los formularios HTML son una manera estándar de recopilar datos del usuario en una página web. 
Puedes usar elementos como <input>, <textarea> y <select> para permitir que los usuarios ingresen información.
Aquí hay un ejemplo básico:
*/

/*HTML*/
//<form id="myForm">
  //<label for="name">Nombre:</label>
  //<input type="text" id="name" name="name">
  //<button type="submit">Enviar</button>
//</form>

// En tu archivo JavaScript
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  const nameInput = document.getElementById("name");
  const nameValue = nameInput.value;
  console.log("Nombre ingresado:", nameValue);
});


/*
Consola (para desarrolladores):
En la consola del navegador, puedes utilizar el método prompt() para solicitar al usuario que ingrese un valor. 
La función prompt() mostrará una ventana emergente con un campo de entrada
y un botón "Aceptar". El valor ingresado se almacena en la variable que asignes:
*/

const userInput = prompt("Ingresa algo:");
console.log("Input del usuario:", userInput);

/*
Ventana emergente (prompt):
Similar al método anterior, puedes usar la función prompt() para obtener entradas del usuario en una ventana emergente.
Sin embargo, esto no es común en aplicaciones web modernas debido a la experiencia de usuario menos favorable.
*/

/*
Eventos de teclado:
En algunos casos, puedes escuchar eventos de teclado para obtener entradas del usuario.
Esto es más común cuando deseas capturar una entrada mientras el usuario interactúa con la página,
como en un juego o una aplicación interactiva.
*/

document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;
    console.log("Tecla presionada:", keyPressed);
  });
  