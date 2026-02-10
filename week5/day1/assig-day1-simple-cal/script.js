// function flexCalc(operator, ...nums) {
//   // Edge case: no numbers passed
//   if (nums.length === 0) {
//     if (operator === "+") return 0;
//     if (operator === "*") return 1;
//     return null;
//   }

//   // Default missing numbers (if fewer than two)
//   if (nums.length === 1) {
//     nums.push(0);
//   }

//   let result = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     if (operator === "+") {
//       result += nums[i];
//     } else if (operator === "-") {
//       result -= nums[i];
//     } else if (operator === "*") {
//       result *= nums[i];
//     } else if (operator === "/") {
//       if (nums[i] === 0) return "Error: division by zero";
//       result /= nums[i];
//     } else {
//       return "Error: invalid operator";
//     }
//   }

//   return result;
// }

// console.log(flexCalc("+", 1, 2, 3, 4)); // 10
// console.log(flexCalc("*", 2, 3, 4)); // 24
// console.log(flexCalc("-", 10)); // 10 - 0 = 10
// console.log(flexCalc("/", 20)); // Handle division by zero

// const number = 2;

// switch (number) {
//   case 2:
//     console.log("This is number one");
//     break;
//   case 3:
//     console.log("this is the final number");
//     break;
//   case 5:
//     console.log("this is line 5");
//   default:
//     console.log("this is the original number");
// }

// while loop

// let age = 20;

// while (age < 30) {
//   console.log("You can go to school");
//   age++;
// }

let nums;
while (true) {
  nums = prompt("Enter a number greater than 10");
  if (nums > 10) break; // stop when valid
}
console.log("You entered:", nums);
