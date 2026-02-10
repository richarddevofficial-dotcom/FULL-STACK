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
