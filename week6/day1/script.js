// // repeat on functions
// function Name(firstName, ...lastName) {
//   console.log(`My name is ${firstName + " " + lastName} and i am software dev`);
// }

// Name("richard drich");

// // funtion to add shpping

// function calculateShipping(region = "domestic") {
//   let cost;
//   if (region === "domestic") {
//     cost = 500;
//   } else if (region === "international") {
//     cost = 1000;
//   } else {
//     cost = 2000;
//   }

//   return `shipping cost for ${region} is ${cost}`;
// }

// console.log(calculateShipping());

// // practising
// const calAge = (age, country = "south sudan") => {
//   let status;

//   if (age <= 17) {
//     status = "ineligible";
//   } else if (age >= 18) {
//     status = "eligible";
//   } else {
//     status = "invalid age";
//   }

//   return `I am from ${country} and I am ${status} to vote!`;
// };

// console.log(calAge(20));

// // more project

// const gradeCalculators = (score = 50) => {
//   let status;

//   if (score >= 90) {
//     status = "A";
//   } else if (score >= 80) {
//     status = "B";
//   } else if (score >= 70) {
//     status = "C";
//   } else if (score >= 60) {
//     status = "D";
//   } else {
//     status = "F";
//   }

//   return `my grade is ${status}`;
// };

// console.log(gradeCalculator(78));

// // using switch
// const gradeCalculator = (score) => {
//   let status;

//   switch (true) {
//     case score >= 90:
//       status = "A";
//       break;
//     case score >= 80:
//       status = "B";
//       break;
//     case score >= 70:
//       status = "C";
//       break;
//     case score >= 60:
//       status = "D";
//       break;
//     default:
//       status = "F";
//   }

//   return `my grade is ${status}`;
// };

// console.log(gradeCalculators(70));

// // Advance Js functions

// function createRateLimiter(limit, duration) {
//   let count = 0;
//   let startTime = Date.now();

//   return function () {
//     const now = Date.now();

//     if (now - startTime > duration) {
//       count = 0;
//       startTime = now;
//     }

//     if (count < limit) {
//       count++;
//       console.log("Request allowed");
//     } else {
//       console.log("Too many requests. Try again later.");
//     }
//   };
// }

// const limiter = createRateLimiter(3, 5000);

// limiter();
// limiter();
// limiter();
// limiter();

// subcriber
// ✅ Full Corrected Subscription Function
// function subscribe(plan = "free") {
//   // Map of plans to their access
//   const plans = {
//     free: "Landing Page",
//     basic: "Home Page",
//     fullpaid: "Full Website",
//   };

//   // Check if plan exists, otherwise deny access
//   const access = plans[plan] || "Access denied";

//   return `My subscription gives access to: ${access}`;
// }

// // Test cases
// console.log(subscribe()); // Default free plan
// console.log(subscribe("basic")); // Basic plan
// console.log(subscribe("fullpaid")); // Full paid plan
// console.log(subscribe("vip")); // Invalid plan

// // payment process
// function processPayment(amount, method = "card", discountCallback = null) {
//   // Validate amount
//   if (amount <= 0) {
//     return "Payment failed: Amount must be greater than 0";
//   }

//   // Apply discount if callback is provided
//   if (discountCallback && typeof discountCallback === "function") {
//     amount = discountCallback(amount);
//   }

//   // Payment method handling
//   let result;
//   switch (method.toLowerCase()) {
//     case "card":
//       result = `Paid $${amount} using Credit/Debit Card ✅`;
//       break;
//     case "paypal":
//       result = `Paid $${amount} via PayPal ✅`;
//       break;
//     case "mobile":
//       result = `Paid $${amount} via Mobile Money ✅`;
//       break;
//     default:
//       result = `Payment failed: Unsupported method '${method}' ❌`;
//   }

//   return result;
// }

// // ✅ Example Usage
// console.log(processPayment(100)); // Default card
// console.log(processPayment(200, "paypal")); // PayPal
// console.log(processPayment(50, "mobile")); // Mobile Money
// console.log(processPayment(150, "crypto")); // Unsupported
// console.log(processPayment(100, "card", (amount) => amount * 0.9)); // With 10% discount

// // payment process using callback
// function processPayment(amount, method = "card", callback = null) {
//   // Validate amount
//   if (amount <= 0) {
//     return "Payment failed: Amount must be greater than 0";
//   }

//   // Apply callback if provided
//   if (callback && typeof callback === "function") {
//     amount = callback(amount); // callback can modify the amount
//   }

//   // Payment method logic
//   let result;
//   switch (method.toLowerCase()) {
//     case "card":
//       result = `Paid $${amount} using Credit/Debit Card ✅`;
//       break;
//     case "paypal":
//       result = `Paid $${amount} via PayPal ✅`;
//       break;
//     case "mobile":
//       result = `Paid $${amount} via Mobile Money ✅`;
//       break;
//     default:
//       result = `Payment failed: Unsupported method '${method}' ❌`;
//   }

//   return result;
// }

// grading
const calGrade = (score = 50) => {
  let status;
  switch (score) {
    case 90:
      status = "Excellent";
      break;
    case 80:
      status = "V.Good";
      break;
    case 70:
      status = "Good";
      break;
    case 60:
      status = "Fair";
      break;
    default:
      status = "Poor";
  }
  return `your score is ${score} and your grade is ${status}`;
};

console.log(calGrade());

// trying with if else
const calGradeIfElse = (score = 50) => {
  let status;
  if (score === 90) {
    status = "Excellent";
  }
  if (score >= 80 && score < 90) {
    status = "Very Good";
  }
  if (score >= 70 && score < 80) {
    status = "Good";
  }
  if (score >= 60 && score < 70) {
    status = "Fair";
  }
  if (score < 60) {
    status = "Poor";
  }
  return `your score is ${score} and your grade is ${status}`;
};

console.log(calGradeIfElse(78));
