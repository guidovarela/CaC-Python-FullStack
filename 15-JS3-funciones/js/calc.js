
function calculadora(){
    //usuario ingrese 2 datos y la operacion -> prompt
    let num1 = parseFloat(prompt("Ingresar el 1er numero"))
    let num2 = parseFloat(prompt("Ingresar el 2do numero"))
    let signo = prompt("Elegir la operacion: / * + -")
    
    //if(signo == "/" || signo == "*" || signo == "+" || signo == "-"){ 
    if(signo == "/" || "*" || "+" || "-"){ 
    
        switch(signo){
            case "/": resultado = num1 / num2
            break
            case "*": resultado = num1 * num2
            break
            case "+": resultado = num1 + num2
            break
            default : resultado = num1 - num2
        }
    }else{
        resultado = "Operacion no valida. Falta el signo"
    }

    //mostrar el resultado de la operacion
    //document.write(resultado)
    document.querySelector("#calculadora").innerHTML="El resultado es: <span>"+resultado+"</span>"
}
