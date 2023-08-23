/*
El DOM, o Modelo de Objetos del Documento (Document Object Model en inglés),
es una representación estructural y jerárquica de un documento HTML o XML que proporciona
una interfaz para interactuar y manipular los elementos y contenido de una página web.
*/

/*
El DOM organiza los elementos HTML (como etiquetas <div>, <p>, <img>, etc.)
en una estructura de árbol, donde cada nodo del árbol representa un elemento,
atributo, texto o comentario en el documento.
*/

/*
<!DOCTYPE html>
<html>
<head>
  <title>DOM Ejemplo</title>
</head>
<body>
  <h1>Mi Página Web</h1>
  <p>¡Bienvenido al DOM!</p>
</body>
</html>
*/

/*
Document
└── html
    ├── head
    │   └── title
    │       └── "DOM Ejemplo"
    └── body
        ├── h1
        │   └── "Mi Página Web"
        └── p
            └── "¡Bienvenido al DOM!"
*/

//Aquí hay un ejemplo simple de cómo podrías usar JavaScript para cambiar el contenido del párrafo:

// Obtener el elemento <p> por su etiqueta y cambiar su contenido
const paragraph = document.querySelector('p');
paragraph.textContent = '¡El DOM es genial!';
