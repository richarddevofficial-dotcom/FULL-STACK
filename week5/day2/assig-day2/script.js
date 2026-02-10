// write a JavaScript program that adds all numbers up to 1000 until the largest prime number within this rage is entered

// Start from 1000 to find the largest prime

let n = 1000;

// Finding the largest prime number
while (n > 1) {
  let i = 2;
  while (i * i <= n && n % i !== 0) i++;
  if (i * i > n) break;
  n--;
}

// Summing from 1 to largest prime number
let sum = 0,
  num = 1;
while (num <= n) sum += num++;

console.log("Largest prime <= 1000 is:", n);
console.log("Sum of numbers from 1 to largest prime:", sum);
