/*Declarar un array vacío:
*/
let miArray = [];

/*
Declarar un array con elementos:
*/
let frutas = ["manzana", "banana", "cereza"];

/* Agregar elementos al final del array: */
frutas.push("naranja");

/* Eliminar el último elemento del array:
 */
frutas.pop();

/* Encontrar un elemento en el array: */
let indice = frutas.indexOf("banana"); // Devuelve el índice del elemento

/* Eliminar un elemento en una posición específica del array: */
frutas.splice(1, 1); // Elimina el elemento en el índice 1

/* Copiar un array: */
let copiaFrutas = frutas.slice();

/* Comprobar si un elemento existe en el array: */
if (frutas.includes("manzana")) {
  console.log("La manzana está en la lista.");
}

//inserta al principio
users.unshift()

//invierte el orden
users.reverse()

/* Recorrer un array con un bucle for...of: */
for (let fruta of frutas) {
  console.log(fruta);
}