// Obtener el array existente en Local Storage o crear uno nuevo si no existe
let miArray = JSON.parse(localStorage.getItem("miArray")) || [];

// Función para mostrar los datos en la pantalla
function mostrarDatos() {
  let datosElement = document.querySelector("#datos");
  datosElement.innerHTML = ""; // Limpiar el contenido actual

  for (let dato of miArray) {
    let p = document.createElement("p");
    p.textContent = dato;
    datosElement.appendChild(p);
  }
}

// Función para agregar un nuevo dato
function agregarDato() {
  let nuevoDato = prompt("Ingrese un nuevo dato:");
  miArray.push(nuevoDato);
  localStorage.setItem("miArray", JSON.stringify(miArray));
  mostrarDatos();
}

// Mostrar los datos almacenados en el array al cargar la página
//mostrarDatos();

function cerrarSesion(){
    sessionStorage.clear();
    miArray = []
    mostrarDatos();
}