
//Array - vector - arreglo - matriz

//Declaracion
let animales = ["perro", "gato", "raton","elefante"]

//contar indices -> lenght
//console.log(animales.length)

//agregar indices -> push
//let nuevoAnimal = prompt("Cargar nuevo animal:")
//animales.push(nuevoAnimal)

//eliminar ultimo indice -> pop
//animales.pop()

//eliminar al principio
//animales.shift()

//agrega el indice cero
let nuevoDato = "Pez espada"
animales.unshift(nuevoDato)

//invertir indices
//animales.reverse()

//ordenar indices
//animales.sort()

/* for (let i = 0; i < animales.length; i++) {
    console.log(animales[i])
} */

//FOR OF
for(let resultados of animales){
    console.log(resultados)
}

//FOR IN -> array de objetos
for(let resultados in animales){
    console.log(resultados)
}













