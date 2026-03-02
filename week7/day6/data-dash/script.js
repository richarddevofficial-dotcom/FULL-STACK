// ==========================================
// DOM CACHE
// ==========================================
const weatherCard = document.getElementById("weather-card");
const quoteCard = document.getElementById("quote-card");
const dogCard = document.getElementById("dog-card");

const refreshBtn = document.getElementById("refresh-btn");
const themeToggle = document.getElementById("theme-toggle");
const nextQuoteBtn = document.querySelector(".next-quote");

// Weather elements
const weatherLoading = weatherCard.querySelector(".loading");
const weatherData = weatherCard.querySelector(".data");

// Quote elements
const quoteLoading = quoteCard.querySelector(".loading");
const quoteData = quoteCard.querySelector(".data");

// Dog elements
const dogLoading = dogCard.querySelector(".loading");
const dogData = dogCard.querySelector(".data");

// ==========================================
// HELPER FUNCTIONS
// ==========================================
function showError(loadingEl, dataEl, message) {
  loadingEl.style.display = "none";
  dataEl.classList.remove("hidden");
  dataEl.innerHTML = `<p class="error"> ${message}</p>`;
}

function resetCard(loadingEl, dataEl, loadingText) {
  loadingEl.style.display = "block";
  loadingEl.textContent = loadingText;
  dataEl.classList.add("hidden");
  dataEl.innerHTML = "";
}

// ==========================================
// FETCH FUNCTIONS
// ==========================================
async function fetchWeather() {
  const API_KEY = "3abb9b459169fc9924ca3044d440a87a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Juba&appid=${API_KEY}&units=metric`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather API Error: ${res.status}`);

  const json = await res.json();

  return {
    temp: json.main.temp,
    desc: json.weather[0].description,
    city: json.name,
  };
}

// Using DummyJSON for stable browser CORS
async function fetchQuote() {
  const res = await fetch("https://dummyjson.com/quotes/random");

  if (!res.ok) throw new Error(`Quote API Error: ${res.status}`);

  const data = await res.json();

  return {
    text: data.quote,
    author: data.author,
  };
}

async function fetchDog() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!res.ok) throw new Error(`Dog API Error: ${res.status}`);

  const json = await res.json();
  return json.message;
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================
function renderWeather(weather) {
  weatherLoading.style.display = "none";
  weatherData.classList.remove("hidden");
  weatherData.innerHTML = `
    <p><strong>${weather.city}</strong></p>
    <p>${weather.temp}°C</p>
    <p style="text-transform: capitalize;">${weather.desc}</p>
  `;
}

function renderQuote(quote) {
  quoteLoading.style.display = "none";
  quoteData.classList.remove("hidden");
  quoteData.innerHTML = `
    <blockquote>"${quote.text}"</blockquote>
    <p style="text-align:right;">— ${quote.author}</p>
  `;
}

function renderDog(imageUrl) {
  dogLoading.style.display = "none";
  dogData.classList.remove("hidden");
  dogData.innerHTML = `<img src="${imageUrl}" alt="Random Dog"/>`;
}

// ==========================================
// LOAD AND RENDER SINGLE QUOTE
// ==========================================
async function loadAndRenderQuote() {
  resetCard(quoteLoading, quoteData, "Loading quote...");
  const quote = await fetchQuote().catch((err) => ({ error: err.message }));

  if (quote.error) {
    showError(quoteLoading, quoteData, quote.error);
  } else {
    renderQuote(quote);
  }
}

// ==========================================
// INIT DASHBOARD
// ==========================================
async function initDashboard() {
  // Weather + Dog fetch concurrently
  const [weather, dog] = await Promise.all([
    fetchWeather().catch((err) => ({ error: err.message })),
    fetchDog().catch((err) => ({ error: err.message })),
  ]);

  weather.error
    ? showError(weatherLoading, weatherData, weather.error)
    : renderWeather(weather);

  dog.error ? showError(dogLoading, dogData, dog.error) : renderDog(dog);

  // Fetch quote separately
  loadAndRenderQuote();
}

// ==========================================
// EVENTS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  initDashboard();
});

refreshBtn.addEventListener("click", () => {
  resetCard(weatherLoading, weatherData, "Loading weather...");
  resetCard(quoteLoading, quoteData, "Loading quote...");
  resetCard(dogLoading, dogData, "Loading dog...");
  initDashboard();
});

if (nextQuoteBtn) {
  nextQuoteBtn.addEventListener("click", loadAndRenderQuote);
}

// ==========================================
// THEME MANAGEMENT
// ==========================================
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
