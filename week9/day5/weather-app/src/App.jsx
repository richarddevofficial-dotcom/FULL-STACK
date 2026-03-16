import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import { fetchWeather } from "./services/weatherApi";
import "./App.css";

function App() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadWeather = async () => {
      try {
        setLoading(true);
        const data = await fetchWeather(city);
        setWeather(data);
        setError("");
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    loadWeather();
  }, [city]);

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>

      <SearchBar setCity={setCity} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weather && (
        <>
          <WeatherCard weather={weather} />
          <WeatherDetails weather={weather} />
        </>
      )}
    </div>
  );
}

export default App;
