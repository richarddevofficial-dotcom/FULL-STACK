const API_KEY = "3abb9b459169fc9924ca3044d440a87a";

export const fetchWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch weather");
  }

  return data;
};
