export const getWeather = async (city) => {
  const res = await fetch(`https://wttr.in/${city}?format=j1`);

  if (!res.ok) {
    throw new Error("Weather not found");
  }

  const data = await res.json();
  return data.current_condition[0];
};
