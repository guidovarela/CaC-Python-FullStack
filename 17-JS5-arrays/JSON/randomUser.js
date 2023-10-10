const fetchButton = document.getElementById('fetchButton');
const personInfo = document.querySelector('personInfo');

fetchButton.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const person = data.results[0];
            console.log(person)
            const name = `${person.name.first} ${person.name.last}`;
            const email = person.email;
            const picture = person.picture.large;
            const phone = person.phone;

            // Mostrar los datos de la persona en la página
            /* template strings
            "Cadena"+variable
            `Cadena ${variable}` */
            personInfo.innerHTML = 
            `   <h2>Datos de la Persona:</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <img src="${picture}" alt="${name}" />
                <p><strong>Telefono:</strong> ${phone}</p>
            `;
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});
