function iniciar() {
        // La variable nombre es una variable local creada por iniciar. 
        var nombre = "Codo a Codo" 
        // La función mostrarNombre es una función interna, una clausura. 
        function mostrarNombre() { 
        // Usa una variable declarada en la función externa. 
        alert(nombre); 
      }
      mostrarNombre()
    }
    iniciar()

// Ejemplo 2
    function creaSumador(x) {
      return function(y) {
        return x + y;
      };
    }
   
    var suma5 = creaSumador(5);
    var suma10 = creaSumador(10);
   
    console.log(suma5(2));  // muestra 7
    console.log(suma10(2)); // muestra 12
    