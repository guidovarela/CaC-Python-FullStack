//https://openweathermap.org/api

const cityInput = document.getElementById('cityInput');
const fetchWeatherButton = document.getElementById('fetchWeatherButton');
const weatherInfo = document.getElementById('weatherInfo');

fetchWeatherButton.addEventListener('click', () => {
    const cityName = cityInput.value;

    // Verificar si se ingresó el nombre de la ciudad
    if (cityName.trim() === '') {
        alert('Por favor, ingresa el nombre de una ciudad.');
        return;
    }

    // Hacer una solicitud a la API de OpenWeatherMap
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=INSERT_YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convertir de Kelvin a Celsius
            const cityName = data.name;

            // Mostrar la información del clima en la página
            weatherInfo.innerHTML = `
                <h2>Clima en ${cityName}:</h2>
                <p><strong>Descripción:</strong> ${weatherDescription}</p>
                <p><strong>Temperatura:</strong> ${temperature}°C</p>
            `;
        })
        .catch(error => {
            console.error('Error al obtener los datos del clima:', error);
        });
});
