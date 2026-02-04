// // const display = document.getElementById("display");
// // const buttons = document.querySelectorAll("button");

// // let currentInput = "";
// // let operator = "";
// // let firstNumber = "";

// // buttons.forEach((button) => {
// //   button.addEventListener("click", () => {
// //     const value = button.textContent;

// //     // Clear Button
// //     if (value === "C") {
// //       currentInput = "";
// //       operator = "";
// //       firstNumber = null;
// //       display.value = "";
// //       return;
// //     }

// //     // Equals Button
// //     if (value === "=") {
// //       if (firstNumber !== null && operator && currentInput !== "") {
// //         const secondNumber = Number(currentInput);
// //         let result;

// //         if (operator === "+") result = firstNumber + secondNumber;
// //         if (operator === "-") result = firstNumber - secondNumber;
// //         if (operator === "*") result = firstNumber * secondNumber;
// //         if (operator === "/") result = firstNumber / secondNumber;

// //         display.value = result;
// //         currentInput = result.toString();
// //         firstNumber = null;
// //         operator = "";
// //       }
// //       return;
// //     }

// //     // Operators Button
// //     if (["+", "-", "*", "/"].includes(value)) {
// //       if (currentInput === "") return;
// //       firstNumber = Number(currentInput);
// //       operator = value;
// //       currentInput = "";
// //       return;
// //     }

// //     // Numbers
// //     currentInput += value;
// //     display.value = currentInput;
// //   });
// // });

// // selecting elements
// const display = document.getElementById("display");
// const buttons = document.querySelectorAll("button");

// // state Variable
// let currentInput = "";
// let operator = "";
// let firstNumber = null;

// // button handling
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const value = button.textContent;

//     if (value === "C") return clearAll();
//     if (value === "=") return calculate();
//     if (isOperator(value)) return handleOperator(value);

//     appendNumber(value);
//   });
// });

// // function for operations
// function clearAll() {
//   currentInput = "";
//   operator = "";
//   firstNumber = null;
//   display.value = "";
// }

// function calculate() {
//   if (firstNumber === null || !operator || currentInput === "") return;

//   const secondNumber = Number(currentInput);

//   const operations = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//     "*": (a, b) => a * b,
//     "/": (a, b) => a / b,
//   };

//   const result = operations[operator](firstNumber, secondNumber);

//   display.value = result;
//   currentInput = result.toString();
//   firstNumber = null;
//   operator = "";
// }

// function handleOperator(op) {
//   if (currentInput === "") return;
//   firstNumber = Number(currentInput);
//   operator = op;
//   currentInput = "";
// }

// function appendNumber(num) {
//   currentInput += num;
//   display.value = currentInput;
// }

// function isOperator(value) {
//   return ["+", "-", "*", "/"].includes(value);
// }

// ===== SELECT ELEMENTS =====
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// ===== STATE =====
let currentInput = "";
let operator = "";
let firstNumber = null;

// ===== BUTTON HANDLING =====
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") return clearAll();
    if (value === "=") return calculate();
    if (isOperator(value)) return handleOperator(value);

    appendNumber(value);
  });
});

// ===== FUNCTIONS =====
function clearAll() {
  currentInput = "";
  operator = "";
  firstNumber = null;
  display.value = "";
}

function calculate() {
  try {
    if (firstNumber === null || !operator || currentInput === "") return;

    const secondNumber = Number(currentInput);

    // Handle divide by zero
    if (operator === "/" && secondNumber === 0) {
      throw new Error("Cannot divide by zero");
    }

    const operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };

    const result = operations[operator](firstNumber, secondNumber);

    display.value = result;
    currentInput = result.toString();
    firstNumber = null;
    operator = "";
  } catch (error) {
    display.value = "Error";
    console.error(error);
    // Reset state
    currentInput = "";
    firstNumber = null;
    operator = "";
  }
}

function handleOperator(op) {
  if (currentInput === "") return;
  firstNumber = Number(currentInput);
  operator = op;
  currentInput = "";
}

function appendNumber(num) {
  currentInput += num;
  display.value = currentInput;
}

function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}
