// const jokeBtn = document.getElementById("jokeBtn");
// const jokeText = document.getElementById("jokeText");
// const status = document.getElementById("status");

// jokeBtn.addEventListener("click", getJoke);

// async function getJoke() {
//   status.textContent = "Loading...";
//   jokeText.textContent = "";

//   try {
//     const response = await fetch(
//       "https://official-joke-api.appspot.com/random_joke",
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch joke");
//     }

//     const data = await response.json();

//     jokeText.textContent = `${data.setup} — ${data.punchline}`;
//     status.textContent = "";
//   } catch (error) {
//     status.textContent = "Something went wrong 😢";
//   }
// }

//practicing logic

const status = document.getElementById("status");
const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener("click", getJoke);

async function getJoke() {
  status.textContent = "loading...";
  status.style.color = "red";
  jokeText.textContent = "";

  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );

    // validation
    if (!response.ok) {
      throw new Error("Failed to load");
    }

    const data = await response.json();

    jokeText.textContent = `${data.setup} - ${data.punchline}`;
    status.textContent = "";
  } catch (error) {
    status.textContent = "something went wrong";
  }
}
