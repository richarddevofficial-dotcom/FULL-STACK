import { useEffect, useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!city) return;

    fetch(`https://wttr.in/${city}?format=j1`)
      .then((res) => res.json())
      .then((data) => setWeather(data.current_condition[0]));
  }, [city]);

  return (
    <div className="card">
      <h2>Weather</h2>
      <input onChange={(e) => setCity(e.target.value)} placeholder="City..." />
      {weather && (
        <>
          <p>{weather.temp_C}°C</p>
          <p>{weather.weatherDesc[0].value}</p>
        </>
      )}
    </div>
  );
}

export default WeatherApp;
