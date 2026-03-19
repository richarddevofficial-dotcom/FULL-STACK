"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Loader from "../components/Loader";
import RecentSearches from "../components/RecentSearches";
import { getWeather } from "../services/weatherService";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    try {
      setLoading(true);
      const data = await getWeather(city);

      setWeather({
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });

      // Save to localStorage
      const saved = JSON.parse(localStorage.getItem("cities")) || [];
      if (!saved.includes(city)) saved.push(city);
      localStorage.setItem("cities", JSON.stringify(saved));
    } catch {
      alert("City not found");
    } finally {
      setLoading(false);
    }
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const res = await fetch(
        `/api/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`,
      );
      const data = await res.json();

      setWeather({
        city: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    });
  };

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center gap-6 mt-10">
        <SearchBar onSearch={handleSearch} />

        <button
          onClick={handleLocation}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Use My Location
        </button>

        <RecentSearches onSelect={handleSearch} />

        {loading && <Loader />}

        {weather && <WeatherCard {...weather} />}
      </div>
    </div>
  );
}
