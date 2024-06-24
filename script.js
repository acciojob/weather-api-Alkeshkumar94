 document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

        function getWeather() {
            const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
            const city = 'London';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.weather && data.weather.length > 0) {
                        const weatherDescription = data.weather[0].description;
                        document.getElementById('weatherData').innerText = `Current weather in ${city}: ${weatherDescription}`;
                    } else {
                        document.getElementById('weatherData').innerText = 'Weather data not available';
                    }
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    document.getElementById('weatherData').innerText = 'Error fetching weather data';
                });
        }