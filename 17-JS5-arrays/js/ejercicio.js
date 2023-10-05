// Obtener el array existente en Local Storage o crear uno nuevo si no existe
let miArray = JSON.parse(sessionStorage.getItem("miArray")) || [];

// Solicitar al usuario que ingrese datos y agregarlos al array
let nuevoDato = prompt("Ingrese un nuevo dato:");
miArray.push(nuevoDato);

// Guardar el array actualizado en Local Storage
sessionStorage.setItem("miArray", JSON.stringify(miArray));

// Actualizar el elemento HTML con el nuevo dato
let resultadoElement = document.querySelector("#resultado");
resultadoElement.innerHTML = "Último dato ingresado: " + nuevoDato;

// Mostrar los datos almacenados en el array

for (let dato of miArray) {
  //console.log(dato);
  let resultadoElement = document.querySelector("#resultado");
resultadoElement.innerHTML += "<p>"+dato+"</p>"
}

function cerrarSesion(){
   sessionStorage.clear()
   document.querySelector("#resultado").innerHTML = "";
}