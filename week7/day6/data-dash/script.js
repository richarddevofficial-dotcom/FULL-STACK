// 1. Cache DOM Elements
const weatherCard = document.getElementById("weather-card");
const quoteCard = document.getElementById("quote-card");
const dogCard = document.getElementById("dog-card");

const weatherLoading = weatherCard.querySelector(".loading");
const weatherData = weatherCard.querySelector(".data");

const quoteLoading = quoteCard.querySelector(".loading");
const quoteData = quoteCard.querySelector(".data");

const dogLoading = dogCard.querySelector(".loading");
const dogData = dogCard.querySelector(".data");

const refreshBtn = document.getElementById("refresh-btn");
const themeToggle = document.getElementById("theme-toggle");

// 2. Helper Functions
function showError(loadingEl, dataEl, message) {
  loadingEl.style.display = "none";
  dataEl.style.display = "block";
  dataEl.innerHTML = `<p class="error">❌ ${message}</p>`;
}

function resetCard(loadingEl, dataEl, text) {
  loadingEl.style.display = "block";
  loadingEl.textContent = text;
  dataEl.style.display = "none";
  dataEl.innerHTML = "";
}

// 3. Fetch Functions
async function fetchWeather() {
  const API_KEY = "YOUR_API_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Nairobi&units=metric&appid=${API_KEY}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Weather API Error: ${res.status}`);

  const json = await res.json();

  return {
    city: json.name,
    temp: json.main.temp,
    desc: json.weather[0].description,
  };
}

async function fetchQuote() {
  const url = "https://zenquotes.io/api/random";
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Quote API Error: ${res.status}`);

  const [quoteObj] = await res.json();

  return {
    text: quoteObj.q,
    author: quoteObj.a,
  };
}

async function fetchDog() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Dog API Error: ${res.status}`);

  const json = await res.json();

  return {
    imageUrl: json.message,
  };
}

// 4. Render Functions

function renderWeather(weather) {
  if (weather.error) {
    showError(weatherLoading, weatherData, weather.error);
  } else {
    weatherLoading.style.display = "none";
    weatherData.style.display = "block";
    weatherData.innerHTML = `
      <p><strong>${weather.city}</strong></p>
      <p>${weather.temp}°C</p>
      <p style="text-transform: capitalize;">${weather.desc}</p>
    `;
  }
}

function renderQuote(quote) {
  if (quote.error) {
    showError(quoteLoading, quoteData, quote.error);
  } else {
    quoteLoading.style.display = "none";
    quoteData.style.display = "block";
    quoteData.innerHTML = `
      <blockquote style="font-style: italic;">
        "${quote.text}"
      </blockquote>
      <p style="text-align:right;">— <strong>${quote.author}</strong></p>
      <button id="next-quote" style="margin-top:1rem;">Next Quote</button>
    `;

    document
      .getElementById("next-quote")
      .addEventListener("click", loadNextQuote);
  }
}

function renderDog(dog) {
  if (dog.error) {
    showError(dogLoading, dogData, dog.error);
  } else {
    dogLoading.style.display = "none";
    dogData.style.display = "block";
    dogData.innerHTML = `
      <img src="${dog.imageUrl}" style="width:100%; border-radius:8px;" />
    `;
  }
}

// 5. Quote Pagination
async function loadNextQuote() {
  resetCard(quoteLoading, quoteData, "Loading quote...");
  const quote = await fetchQuote().catch((err) => ({ error: err.message }));
  renderQuote(quote);
}

// 6. Initialization

async function initDashboard() {
  const [weather, quote, dog] = await Promise.all([
    fetchWeather().catch((err) => ({ error: err.message })),
    fetchQuote().catch((err) => ({ error: err.message })),
    fetchDog().catch((err) => ({ error: err.message })),
  ]);

  renderWeather(weather);
  renderQuote(quote);
  renderDog(dog);
}

// 7. Event Listeners
refreshBtn.addEventListener("click", () => {
  resetCard(weatherLoading, weatherData, "Loading weather...");
  resetCard(quoteLoading, quoteData, "Loading quote...");
  resetCard(dogLoading, dogData, "Loading dog...");
  initDashboard();
});

function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const current = localStorage.getItem("theme") || "light";
  const newTheme = current === "light" ? "dark" : "light";
  applyTheme(newTheme);
});

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
  initDashboard();
});
