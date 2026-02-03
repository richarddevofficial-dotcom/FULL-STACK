// DOM selection
const totalInput = document.getElementById("totalDays");
const presentInput = document.getElementById("presentDays");
const button = document.getElementById("checkBtn");
const resultText = document.getElementById("result");

// Event handling
button.addEventListener("click", function () {
  const total = Number(totalInput.value);
  const present = Number(presentInput.value);

  if (total === 0 || present > total) {
    resultText.textContent = "Invalid input!";
    resultText.style.color = "red";
    return;
  }

  const percentage = (present / total) * 100;

  if (percentage >= 80) {
    resultText.textContent = `EXCELLENT (${percentage.toFixed(1)}%)`;
    resultText.style.color = "green";
  } else if (percentage >= 60) {
    resultText.textContent = `OK (${percentage.toFixed(1)}%)`;
    resultText.style.color = "orange";
  } else {
    resultText.textContent = `POOR (${percentage.toFixed(1)}%)`;
    resultText.style.color = "red";
  }
});
