🟢 Week 7: Asynchronous JavaScript
1️⃣ What is Asynchronous JS?

JavaScript normally runs line by line (synchronously). But some tasks take time (like fetching data from a server), and we don’t want the page to freeze.

Asynchronous JS lets the program continue running while waiting for these tasks.

2️⃣ Callbacks

A callback is a function passed as an argument to another function, executed after a task finishes.

function greet(name, callback) {
console.log("Hello, " + name);
callback();
}

function sayBye() {
console.log("Goodbye!");
}

greet("Drich", sayBye);
// Output:
// Hello, Drich
// Goodbye!

Exercise:
Create a function calculate(a, b, operation) where operation is a callback (add, subtract, multiply, divide).

3️⃣ setTimeout & setInterval

These are built-in asynchronous functions:

setTimeout → run a function after a delay

setTimeout(() => console.log("Hello after 2 seconds"), 2000);

setInterval → run a function repeatedly every interval

let count = 0;
const interval = setInterval(() => {
console.log("Count:", count);
count++;
if(count > 5) clearInterval(interval); // stop after 5 times
}, 1000);

Exercise:
Create a countdown timer from 10 to 0 using setInterval.

4️⃣ Promises

A promise represents a future value. It can be resolved (success) or rejected (failure).

const myPromise = new Promise((resolve, reject) => {
let success = true;
if(success) {
resolve("Task completed!");
} else {
reject("Task failed!");
}
});

myPromise
.then(result => console.log(result))
.catch(error => console.log(error));

Exercise:
Create a promise that resolves if a number is even and rejects if odd.

5️⃣ Async/Await

Async/Await is modern, cleaner syntax for promises.

function wait(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
console.log("Start");
await wait(2000); // wait 2 seconds
console.log("End after 2 seconds");
}

run();

Exercise:
Make a function that waits 3 seconds and then logs a random number.

6️⃣ Fetch API

fetch() is how you get data from a server (API) in the browser.

fetch("https://api.agify.io?name=drich")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

Exercise:
Fetch random jokes from https://official-joke-api.appspot.com/random_joke and display them in the console.

Async/Await version:

async function getJoke() {
try {
const response = await fetch("https://official-joke-api.appspot.com/random_joke");
const joke = await response.json();
console.log(joke.setup + " - " + joke.punchline);
} catch(error) {
console.log("Error:", error);
}
}

getJoke();

7️⃣ Mini Project: Fetch Weather Data
<input type="text" id="city" placeholder="Enter city">
<button id="getWeather">Get Weather</button>

<p id="weatherInfo"></p>

const cityInput = document.getElementById("city");
const btn = document.getElementById("getWeather");
const weatherInfo = document.getElementById("weatherInfo");

btn.addEventListener("click", async () => {
const city = cityInput.value;
try {
const response = await fetch(`https://wttr.in/${city}?format=j1`);
const data = await response.json();
weatherInfo.textContent = `Temperature in ${city}: ${data.current_condition[0].temp_C}°C`;
} catch(error) {
weatherInfo.textContent = "Error fetching weather";
}
});

Exercise:

Allow multiple cities to be fetched.

Add error handling if city name is invalid.

8️⃣ Key Takeaways

By the end of Week 7, you will:

Understand callbacks, promises, async/await.

Use setTimeout/setInterval for timed actions.

Fetch data from APIs and display dynamically.

Combine asynchronous JS with DOM manipulation to make real-world apps.
