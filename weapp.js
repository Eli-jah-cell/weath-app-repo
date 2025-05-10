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
            });
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
            });
}

function displayWeather(data) {

    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    // Clear previous content
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';
}
function displayWeather(data) {
    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = '<p>${data.message}</p>';
    } else {

        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = 'https://openweathermap.org/img/wn/${iconCode}@4x.png';
    }
}
