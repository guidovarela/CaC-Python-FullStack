//Función sin parámetros ni valor de retorno
function saludar() {
    console.log("¡Hola, mundo!");
}
saludar(); // Llama a la función para imprimir "¡Hola, mundo!" en la consola


//Función con parámetros y valor de retorno
function suma(a, b) {
    return a + b;
}
const resultado = suma(3, 5); // Llama a la función para sumar 3 y 5
console.log(resultado); // Imprime el resultado (8) en la consola


//Función anónima (expresión de función)
const resta = function(a, b) {
    return a - b;
};
const resultadoResta = resta(8, 3); // Llama a la función para restar 3 de 8
console.log(resultadoResta); // Imprime el resultado (5) en la consola


//Función flecha (Arrow Function)
const multiplicar = (a, b) => a * b;
const resultadoMultiplicacion = multiplicar(4, 6); // Llama a la función para multiplicar 4 y 6
console.log(resultadoMultiplicacion); // Imprime el resultado (24) en la consola
