// ===== QUESTIONS DATA =====
const quizQuestions = [
  {
    question: "What is the capital of France?",
    A: "Berlin",
    B: "Paris",
    C: "Rome",
    correct: "B",
  },
  {
    question: "2 + 2 equals?",
    A: "3",
    B: "4",
    C: "5",
    correct: "B",
  },
  {
    question: "Which is a JS framework?",
    A: "React",
    B: "Laravel",
    C: "Django",
    correct: "A",
  },
];

// ===== STATE =====
let currentIndex = 0;
let score = 0;

// ===== SELECT ELEMENTS =====
const questionText = document.getElementById("questionText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

// ===== FUNCTIONS =====
function loadQuestion() {
  const currentQ = quizQuestions[currentIndex];
  questionText.textContent = currentQ.question;
  choiceBtns.forEach((btn) => {
    const key = btn.dataset.choice;
    btn.textContent = `${key}: ${currentQ[key]}`;
    btn.disabled = false;
    btn.classList.remove("correct", "incorrect");
  });

  feedback.textContent = "";
  nextBtn.disabled = true;
}

function checkAnswer(e) {
  const selected = e.target.dataset.choice;
  const correct = quizQuestions[currentIndex].correct;

  choiceBtns.forEach((btn) => (btn.disabled = true));

  if (selected === correct) {
    score++;
    feedback.textContent = "Correct!";
    e.target.classList.add("correct");
  } else {
    feedback.textContent = "Incorrect!";
    e.target.classList.add("incorrect");
  }

  scoreDisplay.textContent = `Score: ${score}`;
  nextBtn.disabled = false;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  questionText.textContent = "Quiz Finished!";
  feedback.textContent = `Final Score: ${score}/${quizQuestions.length}`;
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  nextBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  loadQuestion();
}

// ===== EVENT LISTENERS =====
choiceBtns.forEach((btn) => {
  btn.addEventListener("click", checkAnswer);
});

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// ===== INITIAL LOAD =====
loadQuestion();
