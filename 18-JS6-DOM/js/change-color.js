// Obtener elementos del DOM
const myDiv = document.getElementById('myDiv');
const changeColorButton = document.getElementById('changeColorButton');

// Función para cambiar el color de fondo del div
function changeBackgroundColor() {
    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightsalmon'];
    const currentColor = myDiv.style.backgroundColor;
    const newIndex = (colors.indexOf(currentColor) + 1) % colors.length;
    myDiv.style.backgroundColor = colors[newIndex];
}

// Agregar un evento de clic al botón para cambiar el color de fondo
changeColorButton.addEventListener('click', changeBackgroundColor);
