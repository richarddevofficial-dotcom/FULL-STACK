// ===== SELECT ELEMENTS =====
const nameInput = document.getElementById("nameInput");
const techInput = document.getElementById("techInput");
const goalInput = document.getElementById("goalInput");

const updateBtn = document.getElementById("updateBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

const card = document.getElementById("card");
const cardName = document.getElementById("cardName");
const cardTech = document.getElementById("cardTech");
const cardGoal = document.getElementById("cardGoal");
const header = document.getElementById("header");

let darkMode = false;

// ===== UPDATE CARD =====
updateBtn.addEventListener("click", function () {
  const name = nameInput.value;
  const tech = techInput.value;
  const goal = goalInput.value;

  cardName.textContent = name || "Your Name";
  cardTech.textContent = "Favorite Tech: " + (tech || "-");
  cardGoal.textContent = "Goal: " + (goal || "-");

  // style changes (at least 3)
  card.style.border = "2px solid #4caf50";
  card.style.backgroundColor = "#e8f5e9";
  card.style.padding = "20px";
  card.style.borderRadius = "10px";
});

// ===== TOGGLE THEME =====
themeBtn.addEventListener("click", function () {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.backgroundColor = "#5e66b6ad";
    document.body.style.color = "#ffffff";
    card.style.backgroundColor = "#e2ebde";
    card.style.border = "2px solid #ffffff";
    header.style.color = "#e1e6ea";
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    card.style.backgroundColor = "#f9f9f9";
    card.style.border = "2px solid #000000";
    header.style.color = "#000000";
  }
});

// ===== RESET =====
resetBtn.addEventListener("click", function () {
  // clear inputs
  nameInput.value = "";
  techInput.value = "";
  goalInput.value = "";

  // restore text
  cardName.textContent = "Your Name";
  cardTech.textContent = "Favorite Tech: -";
  cardGoal.textContent = "Goal: -";

  // restore styles
  card.style.border = "none";
  card.style.backgroundColor = "transparent";
  card.style.padding = "0";
  card.style.borderRadius = "0";

  document.body.style.backgroundColor = "#ffffff";
  document.body.style.color = "#000000";
  header.style.color = "#000000";

  darkMode = false;
});
