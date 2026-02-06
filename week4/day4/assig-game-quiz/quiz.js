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
    question: "Which language runs in the browser?",
    A: "Python",
    B: "Java",
    C: "JavaScript",
    correct: "C",
  },
  {
    question: "HTML stands for?",
    A: "Hyper Text Markup Language",
    B: "High Tech Machine Language",
    C: "Hyper Transfer Markup Language",
    correct: "A",
  },
  {
    question: "CSS is mainly used for?",
    A: "Logic",
    B: "Styling",
    C: "Database",
    correct: "B",
  },
  {
    question: "Which is NOT a JavaScript framework?",
    A: "React",
    B: "Angular",
    C: "Laravel",
    correct: "C",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    A: "//",
    B: "<!-- -->",
    C: "#",
    correct: "A",
  },
  {
    question: "Which company developed JavaScript?",
    A: "Microsoft",
    B: "Netscape",
    C: "Google",
    correct: "B",
  },
  {
    question: "What does DOM stand for?",
    A: "Document Object Model",
    B: "Data Object Method",
    C: "Digital Output Model",
    correct: "A",
  },
  {
    question: "Which keyword is used to declare a variable?",
    A: "var",
    B: "int",
    C: "string",
    correct: "A",
  },
  {
    question: "Which method adds an element to the DOM?",
    A: "appendChild()",
    B: "push()",
    C: "add()",
    correct: "A",
  },
];

// state variable
let currentIndex = 0;
let score = 0;

// selecting elements
const questionText = document.getElementById("questionText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

// functions
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

// Event listner
choiceBtns.forEach((btn) => {
  btn.addEventListener("click", checkAnswer);
});

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

//inital load
loadQuestion();
