
let persona = {
    nombre: "Guido",
    edad: 42,
    estaVivo: true,
    saludar: function saludar() {
        return "Hola "+this.nombre+" !"
    },
    recibeNews: true,
}
let persona2 = {}
/*
objeto = { propiedad: valor,}
*/
console.log(persona.saludar()+", soy "+persona.nombre+" y tengo "+persona.edad+" años")


//Modificar y agregar propiedades
persona.edad = 12
persona['mascota'] = false
persona['recibeNews'] = false
if(!persona.recibeNews){alert(persona.nombre + "no recibe notificaciones")}

if(persona.edad > 18){
    alert(persona.nombre+" es mayor de edad")
}else{
    alert(persona.nombre+" es menor")

}