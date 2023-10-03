//Definicion de la clase
class Persona {
    constructor(nombre,edad,estaVivo,saludo){
        this.nombre = nombre
        this.edad = edad
        this.estaVivo = estaVivo
        this.saludo = saludo
        //this.especie = "Humana"
        this.iniciacion = 0
    }
}

let saludo = function saludar(){return "Hola!"}

//Creacion de una instancia
let persona1 = new Persona("Marcela",23,true,saludo)
let persona2 = new Persona("Jose",32,true,null)

persona1.apellido = "Morelo"
persona2.iniciacion = 10
console.log(persona2.nombre+" inició hace "+persona2.iniciacion+" años")