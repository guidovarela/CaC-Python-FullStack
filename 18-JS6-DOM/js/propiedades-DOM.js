
//Acceder a elementos del DOM:
const header = document.getElementById('header');
const firstParagraph = document.querySelector('p');
const allParagraphs = document.querySelectorAll('p');


//manipular contenido
const element = document.getElementById('myElement');
element.innerHTML = '<strong>Nuevo contenido</strong>';


//Modificar atributos
const image = document.getElementById('myImage');
image.setAttribute('src', 'new-image.jpg');

//Añadir o eliminar elementos:
/* document.createElement() 
añadirlo con appendChild() o insertBefore()
eliminar con removeChild() */
const parent = document.getElementById('parentElement');
const newElement = document.createElement('div');
newElement.textContent = 'Nuevo elemento';
parent.appendChild(newElement);

//Manejar Eventos
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Botón clickeado');
});

//manejo de estilos
const element = document.getElementById('myElement');
element.style.color = 'red';
element.classList.add('highlight');

