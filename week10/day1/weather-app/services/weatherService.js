export async function getWeather(city) {
  const res = await fetch(`/api/weather?city=${city}`);

  if (!res.ok) {
    throw new Error("Failed to fetch weather");
  }

  return res.json();
}
