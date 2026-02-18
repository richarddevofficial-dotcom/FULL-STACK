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

// console.log(flexCalc("/", 1, 2, 0, 4));

const flexCalc = (operator, ...numbers) => {
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
      if (numbers.slice(1).includes(0)) {
        return "error not divisor by zero";
      }
      return numbers.reduce((total, num) => total / num);
    default:
      return "invalid";
  }
};

console.log(flexCalc("+", 1, 2, 3));
