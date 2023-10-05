//Sorteo en JS

function sorteo() {

    //Cantidad de numeros para sortear
    cantNumeros = parseInt(prompt("Insertar la cantidad de numeros, para el sorteo"))
    let numeros = []
    for (let i = 0; i < cantNumeros; i++) {
        numeros.push(i)
    }
    console.log("Cantidad de numeros del sorteo: "+numeros.length)

    // Genera un número aleatorio para seleccionar al ganador
    var ganadorIndex = Math.floor(Math.random() * numeros.length);

    // Obtiene el numero ganador utilizando el índice generado aleatoriamente
    var ganador = numeros[ganadorIndex];

    // Muestra el resultado en el DOM

    document.querySelector(".titulo-resultado").innerHTML = "El numero <br> ganador es: "
    
    document.querySelector(".nro-ganador").innerHTML = ganador 
    
    document.querySelector(".posibles").innerHTML = "(de "+numeros.length+" posibles)"
}