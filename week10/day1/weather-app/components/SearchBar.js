"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border p-2 rounded"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}
