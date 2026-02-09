const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const status = document.getElementById("status");
const currentWeather = document.getElementById("currentWeather");
const forecastContainer = document.getElementById("forecast");

// Your OpenWeatherMap API key
const API_KEY = "YOUR_API_KEY"; // <-- replace with your key

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) return;
  getWeather(city);
});

// Fetch weather data
async function getWeather(city) {
  status.textContent = "Loading...";
  currentWeather.innerHTML = "";
  forecastContainer.innerHTML = "";

  try {
    // Current weather
    const currentRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
    );

    if (!currentRes.ok) throw new Error("City not found");

    const currentData = await currentRes.json();
    displayCurrentWeather(currentData);

    // 5-day forecast
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`,
    );

    if (!forecastRes.ok) throw new Error("Forecast not available");

    const forecastData = await forecastRes.json();
    displayForecast(forecastData);

    status.textContent = "";
  } catch (error) {
    status.textContent = error.message;
  }
}

// Display current weather
function displayCurrentWeather(data) {
  const html = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
  currentWeather.innerHTML = html;
}

// Display 5-day forecast
function displayForecast(data) {
  // Filter to one forecast per day at 12:00
  const daily = data.list.filter((item) => item.dt_txt.includes("12:00:00"));

  daily.forEach((item) => {
    const div = document.createElement("div");
    div.className = "weather-card";
    div.innerHTML = `
      <h3>${new Date(item.dt_txt).toLocaleDateString()}</h3>
      <p>Temp: ${item.main.temp}°C</p>
      <p>${item.weather[0].description}</p>
    `;
    forecastContainer.appendChild(div);
  });
}
