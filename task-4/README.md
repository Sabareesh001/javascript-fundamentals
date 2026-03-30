# Task 4: Weather App

## Objective

Build a weather application that fetches real-time weather data from an external API and displays current conditions for any city.

## Features

- **City Search**: Enter any city name to get current weather
- **Real-time Data**: Fetches live weather data from OpenWeatherMap API
- **Temperature Display**: Shows current temperature in Celsius
- **Weather Details**: Displays weather conditions, humidity, wind speed, and more
- **Error Handling**: Shows helpful error messages for invalid cities or API issues
- **Enter Key Support**: Press Enter to search without clicking the button
- **Input Validation**: Prompts users to enter a valid city name

## Technologies Used

- HTML5 for structure
- CSS3 for styling
- Vanilla JavaScript (ES6)
- OpenWeatherMap API (Free tier)

## Getting Started

### Setup Instructions

1. Sign up for a free OpenWeatherMap API key at https://openweathermap.org/api
2. Replace `YOUR_API_KEY` with your actual API key in `index.js` (line with `const API_KEY`)
3. Open `index.html` in a web browser
4. No local dependencies; requires internet connection for API calls

### How to Use

1. Enter a city name in the input field
2. Click **Fetch Weather** or press **Enter**
3. View current weather conditions including:
   - Temperature
   - Weather description
   - Humidity
   - Wind speed
   - Pressure
4. Enter a new city to get updated weather data

## File Structure

- `index.html` - Weather app interface
- `index.js` - API integration and weather logic
- `styles.css` - Application styling

## Key Functions

- `fetchWeather()` - Fetches weather data from API
- `displayWeather(data)` - Renders weather information to DOM
- `showError(message)` - Displays error messages
- `clearMessages()` - Clears previous results

## API Configuration

- **Base URL**: `https://api.openweathermap.org/data/2.5/weather`
- **Units**: Metric (Celsius)
- **Free Tier Limits**: 60 API calls per minute

## Learning Concepts

- Async/await and Promises
- Fetch API for HTTP requests
- JSON data parsing
- Error handling and validation
- DOM manipulation for dynamic content
- Event listeners for user input

## Security Notes

⚠️ **Important**: The API key is visible in the client-side code. For production:

- Use a backend server to proxy API requests
- Store API keys securely (environment variables, server-side)
- Implement rate limiting on the backend

## Error Handling

- Validates that a city name is entered
- Checks API key configuration
- Handles network errors
- Shows user-friendly error messages

## Dependencies (None - Pure JavaScript)

- No npm packages required
- Uses browser's built-in Fetch API

## Potential Enhancements

- Add weather icons/images
- Display forecast (7-day, hourly)
- Save favorite cities to localStorage
- Convert between Celsius/Fahrenheit
- Add geolocation to auto-detect user's city
