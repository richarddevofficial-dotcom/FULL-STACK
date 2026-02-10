// //

// const numbersInput = document.getElementById("numbersInput");
// const sumBtn = document.getElementById("sumBtn");
// const multiplyBtn = document.getElementById("multiplyBtn");
// const resultEl = document.getElementById("result");

// // Function using rest + reduce for sum
// const sum = (...nums) => nums.reduce((total, n) => total + n, 0);

// // Function using rest + reduce for multiply
// const multiply = (...nums) => nums.reduce((total, n) => total * n, 1);

// // Helper function to convert input string to numbers using spread
// const getNumbers = (input) =>
//   [...input.split(",")].map((num) => parseFloat(num.trim()));

// sumBtn.addEventListener("click", () => {
//   const numbers = getNumbers(numbersInput.value);
//   const total = sum(...numbers); // spread array into rest parameter
//   resultEl.textContent = `Sum: ${total}`;
// });

// multiplyBtn.addEventListener("click", () => {
//   const numbers = getNumbers(numbersInput.value);
//   const total = multiply(...numbers); // spread array into rest parameter
//   resultEl.textContent = `Multiply: ${total}`;
// });

function mergeOptions(defaults, overrides) {
  return { ...defaults, ...overrides };
}

// varaible
const defaults = { a: 1, b: 2 };
const overrides = { b: 42, c: 3 };

// const result = mergeOptions(defaults, overrides);
// console.log(result); // { a: 1, b: 42, c: 3 }

console.log(mergeOptions(defaults, overrides));
