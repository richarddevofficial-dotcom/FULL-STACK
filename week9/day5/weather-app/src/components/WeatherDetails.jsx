function WeatherDetails({ weather }) {
  return (
    <div className="weather-details">
      <p>💨 Wind: {weather.wind.speed} m/s</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌡️ Feels like: {weather.main.feels_like}°C</p>
    </div>
  );
}

export default WeatherDetails;
