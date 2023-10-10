/*
Este código define una función llamada validarFormulario que se
ejecuta cuando se envía el formulario. Dentro de esta función,
se obtienen los valores ingresados por el usuario utilizando la
propiedad value de los elementos del formulario correspondientes.
Luego, se verifican si los campos están en blanco utilizando la
comparación === "".

Para validar el campo de nombre, se utiliza un bucle for que
recorre cada carácter de la cadena de nombre. Se utiliza la función
charCodeAt para obtener el código Unicode del carácter en la posi-
ción actual y se verifica si es un carácter alfabético (A-Z o a-z)
o un espacio ( ). Si el carácter no cumple con estas condiciones,
se muestra una alerta y se devuelve false.

Para validar el campo de DNI, se verifica si la longitud es exacta-
mente 8 dígitos y luego se utiliza otro bucle for para verificar si
cada carácter es un dígito numérico (0-9). Si el campo no cumple con
estas condiciones, se muestra una alerta y se devuelve false.

Finalmente, si todas las validaciones son exitosas, se muestra una
alerta indicando que el formulario se envió correctamente y se de-
vuelve true.
*/

function validarFormulario() {
    // Obtener los valores ingresados por el usuario y recortar
    // los posibles espacios en blanco al principio y al final.
    var nombre = document.getElementById("nombre").value.trim();
    var dni = document.getElementById("dni").value.trim();
    var direccion = document.getElementById("direccion").value.trim();

    // Verificar si algún campo está en blanco
    if (nombre === "" || dni === "" || direccion === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
      //enviar mensaje a un div -> innerHTML / createElement + appendChild

    }

    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < nombre.length; i++) {
      var charCode = nombre.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }

    // Verificar si el DNI contiene solo 8 dígitos numéricos
    if (dni.length !== 8) {
      alert("El campo 'dni' debe contener exactamente 8 dígitos numéricos.");
      return false;
    }
    for (var j = 0; j < dni.length; j++) {
      var digit = dni.charAt(j);
      if (digit < "0" || digit > "9") {
        alert("El campo 'dni' solo puede contener dígitos numéricos.");
        return false;
      }
    }

    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
  }
