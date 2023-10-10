//Sorteo en JS

function sorteo(e) {
    
    e.preventDefault()
    /* Llamar a preventDefault en cualquier momento durante la ejecución, cancela el evento, lo que significa que cualquier acción por defecto que deba producirse como resultado de este evento, no ocurrirá */
    //Cantidad de numeros para sortear
    /* cantNumeros = parseInt(prompt("Insertar la cantidad de numeros, para el sorteo"))*/
    let numeros = [] 
    let resultados = [] 

    let cantNumeros = document.getElementById("campoNumeros").value

    for (let i = 0; i < cantNumeros; i++) {
        numeros.push(i)
    }
    console.log("Cantidad de numeros del sorteo: "+numeros.length)
    //

    // Genera un número aleatorio para seleccionar al ganador
    var ganadorIndex = Math.floor(Math.random() * numeros.length);

    // Obtiene el numero ganador utilizando el índice generado aleatoriamente
    var ganador = numeros[ganadorIndex] + 1;
    resultados.push(ganador)

    // Muestra el resultado en el DOM

    document.querySelector(".titulo-resultado").innerHTML = "El numero <br> ganador es: "
    
    document.querySelector(".nro-ganador").innerHTML = ganador 
    
    document.querySelector(".posibles").innerHTML = "(de "+numeros.length+" posibles)"
}

let activarSorteo = document.getElementById("formSorteo")
activarSorteo.addEventListener("submit",sorteo)