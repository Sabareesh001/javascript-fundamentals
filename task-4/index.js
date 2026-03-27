// OpenWeatherMap API configuration
// Note: Replace 'YOUR_API_KEY' with your actual API key from https://openweathermap.org/api
const API_KEY = "bd5e378503939ddaee76f12ad7a97608";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Get DOM elements
const cityInput = document.getElementById("cityInput");
const fetchBtn = document.getElementById("fetchBtn");
const weatherDisplay = document.getElementById("weatherDisplay");
const errorMessage = document.getElementById("errorMessage");

// Add event listener to fetch button
fetchBtn.addEventListener("click", fetchWeather);

// Allow Enter key to trigger weather fetch
cityInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    fetchWeather();
  }
});

// Function to fetch weather data from OpenWeatherMap API
function fetchWeather() {
  // Get city name from input
  const city = cityInput.value.trim();

  // Validate input
  if (!city) {
    showError("Please enter a city name!");
    return;
  }

  // Check if API key is configured
  if (API_KEY === "YOUR_API_KEY") {
    showError("Please configure your OpenWeatherMap API key in the code!");
    return;
  }

  // Clear previous messages
  clearMessages();

  // Construct API URL with city name and API key
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

  // Fetch weather data from API
  fetch(url)
    .then((response) => {
      // Check if response is successful
      if (!response.ok) {
        throw new Error("City not found or API error");
      }
      return response.json();
    })
    .then((data) => {
      // Display weather data
      displayWeather(data);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error fetching weather:", error);
      showError("Error: " + error.message);
    });
}

// Function to display weather data in the DOM
function displayWeather(data) {
  // Extract relevant weather information
  const city = data.name;
  const country = data.sys.country;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const description = data.weather[0].description;
  const windSpeed = data.wind.speed;
  const icon = data.weather[0].icon;

  // Construct weather information HTML
  const weatherHTML = `
        <div class="weather-card">
            <div class="location">
                <h2>${city}, ${country}</h2>
            </div>
            
            <div class="weather-main">
                <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="${description}" class="weather-icon">
                <div class="temperature">
                    <span class="temp-value">${temp}°C</span>
                    <span class="description">${description.charAt(0).toUpperCase() + description.slice(1)}</span>
                </div>
            </div>

            <div class="weather-details">
                <div class="detail-item">
                    <span class="detail-label">Feels Like:</span>
                    <span class="detail-value">${feelsLike}°C</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Humidity:</span>
                    <span class="detail-value">${humidity}%</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Pressure:</span>
                    <span class="detail-value">${pressure} hPa</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Wind Speed:</span>
                    <span class="detail-value">${windSpeed} m/s</span>
                </div>
            </div>
        </div>
    `;

  // Insert weather HTML into the display area
  weatherDisplay.innerHTML = weatherHTML;
}

// Function to display error message
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  weatherDisplay.innerHTML = "";
}

// Function to clear all messages
function clearMessages() {
  errorMessage.innerHTML = "";
  errorMessage.style.display = "none";
  weatherDisplay.innerHTML = "";
}
