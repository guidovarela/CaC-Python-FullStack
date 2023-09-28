/*
Funciones
function nombreFuncion(parametros o argumentos){
    //intrucciones de la funcion - scope

}
*/

//Defincion
function saludarUsuario() {
    let saludo = prompt("Ingrese el nombre del usuario")
    alert("Hola "+saludo)
    console.log(saludo)
}
//Ejecucion
//saludar()

//Ambito de Variable -> Local o Global

function saludar(nombre) {
    console.log("Nombre de usuario: "+nombre)
}
//saludar("Guido")
//saludar("Matias")

function usuario(user,pass,active){
    if(active==true){
        console.log("El usuario generado es "+user+" "+pass+" activado:"+active)    
    }else{
        console.log("Usuario desactivado")
    }
}

//usuario("Guido",1234,true)

function sumar(a,b){
    let suma = a + b
    console.log(sumar)
    return suma
}

function sumarFuera(a,b){
    return a + b
}
const suma1 = sumar(20,40)

const probarUsuario = usuario("Maria",1234,false)

