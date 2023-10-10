// Obtener el formulario y los campos de entrada
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Función de validación del formulario
function validateForm(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Validar el nombre (debe tener al menos 3 caracteres)
    if (nameInput.value.length < 3) {
        errorMessage.textContent = 'El nombre debe tener al menos 3 caracteres.';
        return;
    }

    // Validar el correo electrónico utilizando una expresión regular simple
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = 'El correo electrónico no es válido.';
        return;
    }

    // Validar la contraseña (debe tener al menos 6 caracteres)
    if (passwordInput.value.length < 6) {
        errorMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return;
    }

    // Si todas las validaciones pasan, mostrar un mensaje de éxito
    errorMessage.textContent = 'Formulario validado correctamente. ¡Registro exitoso!';
}

// Agregar un evento de escucha para la validación cuando se envíe el formulario
form.addEventListener('submit', validateForm);
