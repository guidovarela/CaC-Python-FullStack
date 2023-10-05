class Libros {
    constructor(titulo,autor,anioPubli){
        this.titulo = titulo
        this.autor = autor
        this.anioPubli = anioPubli
    }
}

//Definir los objetos 
let libro1 = new Libros("El señor de los anillos","J.R.R. Tolkien",1966)
let libro2 = new Libros("El tunel", "E. Sabato", 1971)
let libro3 = new Libros("Moby Dick","Hernan Melvy",1850)
let libro4 = new Libros("El hobbit","J.R.R. Tolkien",1970)

//agrupar en un array -> arreglo, vector, matriz
let libreria = [libro1,libro2,libro3,libro4]

//libreria posicion 1 -> libreria[2]
//alert("Tenemos "+libreria.length+" libros")
document.querySelector(".cantidad").innerHTML="Cantidad de libros: "+libreria.length

//iterar los datos para mostralos en pantalla
for(let i=0;i < libreria.length; i++){
    //recorrer el objeto -> for in
    for(let libro in libreria[i]){
        document.querySelector(".libros").innerHTML+= "<p>"+libreria[i][libro]+ "</p>"
    }
    document.querySelector(".libros").innerHTML+= "<p> ------------------ </p>"
}

