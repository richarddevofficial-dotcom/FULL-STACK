// // flexCalc

// function flexCalc(operator, ...numbers) {
//   // validation If less than 2 numbers are provided, default missing ones to 0
//   if (numbers.length < 2) {
//     numbers = [...numbers, 0];
//   }

//   switch (operator) {
//     case "+":
//       return numbers.reduce((total, num) => total + num, 0);

//     case "-":
//       return numbers.reduce((total, num) => total - num);

//     case "*":
//       return numbers.reduce((total, num) => total * num, 1);

//     case "/":
//       if (numbers.slice(1).includes(0)) {
//         return "Error: Division by zero";
//       }
//       return numbers.reduce((total, num) => total / num);

//     default:
//       return "Invalid operator";
//   }
// }

// console.log(flexCalc("+", 1, 2, 3, 4));
// // 10

// console.log(flexCalc("*", 2, 3, 4));
// // 24

// console.log(flexCalc("-", 10));
// // 10  (10 - 0)

// console.log(flexCalc("/", 20));
// // "Error: Division by zero"

const flexCalc = (operator, ...numbers) => {
  //check 2 number in array
  if (numbers.length < 2) {
    numbers = [...numbers, 0];
  }

  switch (operator) {
    case "+":
      return numbers.reduce((total, num) => total + num, 0);

    case "-":
      return numbers.reduce((total, num) => total - num);

    case "*":
      return numbers.reduce((total, num) => total * num, 1);
    case "/":
      //validation to start from index 1 and check 0
      if (numbers.slice(1).includes(0)) {
        return "error can not divide by zero";
      }
      return numbers.reduce((total, num) => total / num);
    default:
      return "error";
  }
};

console.log(flexCalc("-", 4, 0, 6));
