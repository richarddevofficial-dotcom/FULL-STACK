export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const city = searchParams.get("city");
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  const API_KEY = process.env.WEATHER_API_KEY;

  let url;

  if (lat && lon) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  }

  const res = await fetch(url);
  const data = await res.json();

  return Response.json(data);
}
