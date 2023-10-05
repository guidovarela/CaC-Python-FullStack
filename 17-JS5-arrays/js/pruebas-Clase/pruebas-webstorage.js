
let datos = []

let nuevoDato = prompt("Ingresa tu nombre: ")
datos.push(nuevoDato)

//guardamos el dato
sessionStorage.setItem("user",nuevoDato)




let mostrarDato = sessionStorage.getItem("user")
console.log(mostrarDato)


sessionStorage.clear()

