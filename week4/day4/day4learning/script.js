// // selecting elements
// const btnA = document.getElementById("btnA");
// const btnB = document.getElementById("btnB");
// const btnC = document.getElementById("btnC");
// const result = document.getElementById("result");

// btnA.addEventListener("click", () => {
//   result.textContent = "Wrong ❌";
// });

// btnB.addEventListener("click", () => {
//   result.textContent = "Correct ✅";
// });

// btnC.addEventListener("click", () => {
//   result.textContent = "Wrong ❌";
// });

// level 2 js
const question = {
  text: "Capital of France?",
  A: "Berlin",
  B: "Paris",
  C: "Rome",
  correct: "B",
};

const qText = document.getElementById("question");
const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");

qText.textContent = question.text;

choices.forEach((btn) => {
  const key = btn.dataset.answer;
  btn.textContent = question[key];

  btn.addEventListener("click", () => {
    if (key === question.correct) {
      result.textContent = "Correct ✅";
    } else {
      result.textContent = "Wrong ❌";
    }
  });
});
