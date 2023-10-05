/* Local Storage:
Almacenar datos en Local Storage: */

// Guardar un valor en Local Storage
localStorage.setItem("nombre", "Juan");

// Guardar un objeto en Local Storage (convertido a cadena JSON)
let usuario = { nombre: "Ana", edad: 25 };
localStorage.setItem("usuario", JSON.stringify(usuario));


/* Obtener datos de Local Storage: */
let nombre = localStorage.getItem("nombre");
console.log(nombre); // Muestra "Juan"

// Obtener y convertir un objeto de Local Storage desde JSON
let usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioGuardado); // Muestra el objeto { nombre: "Ana", edad: 25 }

// Eliminar un elemento de Local Storage
localStorage.removeItem("nombre");

// Eliminar todos los elementos de Local Storage
localStorage.clear();