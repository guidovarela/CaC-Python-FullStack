/* Session Storage funciona de manera similar a Local Storage, pero los datos se eliminan cuando se cierra la ventana del navegador o la pestaña.
Almacenar datos en Session Storage:
 */
// Guardar un valor en Session Storage
sessionStorage.setItem("colorFondo", "azul");

// Obtener un valor de Session Storage
let colorFondo = sessionStorage.getItem("colorFondo");
console.log(colorFondo); // Muestra "azul"


// Eliminar un elemento de Session Storage
sessionStorage.removeItem("colorFondo");


// Eliminar todos los elementos de Session Storage
sessionStorage.clear();