function getWeather() {
    const apiKey = '67a223e7942351e458e0a049e3aa2d62';
    const city = document.getElementById('city').valur;

    if (!city) {
        alert('Please enter a city name');
        return;
    }

const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}';
}

function getWeather() {

    fetch(currentWeatherUrl)
          .then(response => response.json())
          .then(data => {
            displayWeather(data);
          })
            .catch(error => {
            console.error('Error fetching current weather data:', error);
            alert('error fetching current weather data. Please try again.');
            })
}
function getWeather() {
    fetch(forecastUrl)
          .then(response => response.json())
          .then(data => {
            displayHourlyForecast(data.list);
          })
            .catch(error => {
            console.error('Error fetching forecast data:', error);
            alert('error fetching forecast data. Please try again.');
            })
}