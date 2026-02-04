// select elements
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

// counter state
let count = 0;

// increase
increaseBtn.addEventListener("click", () => {
  count = count + 1;
  countDisplay.textContent = count;
});

// decrease
decreaseBtn.addEventListener("click", () => {
  count = count - 1;
  countDisplay.textContent = count;
});
