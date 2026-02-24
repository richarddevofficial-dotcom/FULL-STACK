// //callback , promise, async/await, event loop
// //settimeout
// // function orderFood() {
// //   console.log("ordering");

// //   setTimeout(function () {
// //     console.log("food is ready");
// //   }, 3000);

// //   setTimeout(function () {
// //     console.log("i am done eating!");
// //   }, 10000);
// // }

// // orderFood();

// // console.log("watching movies while waiting for the food ordered.");

// //callback: is afunction pass to another function to run later
// // function orderPizza(callback) {
// //   console.log("Ordering Pizza...");

// //   setTimeout(function () {
// //     console.log("Order received with thanks");
// //     callback();
// //   }, 6000);
// // }

// // function foodReady() {
// //   setTimeout(function () {
// //     console.log("order eaten!");
// //   }, 10000);
// // }

// // orderPizza(foodReady);

// //using promise
// // function orderPizza() {
// //   return new Promise((resolve, reject) => {
// //     console.log("Ordering pizza");
// //     setTimeout(() => {
// //       const success = true; // simulate success/failure

// //       if (success) {
// //         resolve("Pizza is ready 🍕");
// //       } else {
// //         reject("Order failed ❌");
// //       }
// //     }, 6000);
// //   });
// // }

// // orderPizza()
// //   .then((message) => {
// //     console.log(message);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// // function orderBug() {
// //   return new Promise((resolve, reject) => {
// //     console.log("Good morning ...");

// //     setTimeout(() => {
// //       const success = true; // simulate failure

// //       if (success) {
// //         resolve("Pass");
// //       } else {
// //         reject("Failed");
// //       }
// //     }, 5000);
// //   });
// // }

// // // Using then() and catch()
// // orderBug()
// //   .then((message) => {
// //     console.log("Message:", message);
// //   })
// //   .catch((error) => {
// //     console.log("Error:", error);
// //   });

// // // Function to process payment
// // function processPayment(amount) {
// //   return new Promise((resolve, reject) => {
// //     // simulate 2-second delay
// //     setTimeout(() => {
// //       if (amount > 0) {
// //         resolve(`Payment of KES ${amount} successful`);
// //       } else {
// //         reject(`Invalid payment amount`);
// //       }
// //     }, 2000);
// //   });
// // }

// // // ✅ Call with valid amount
// // processPayment(1500)
// //   .then((message) => {
// //     console.log("Success:", message);
// //   })
// //   .catch((error) => {
// //     console.log("Error:", error);
// //   });

// // // ✅ Call with invalid amount
// // processPayment(0)
// //   .then((message) => {
// //     console.log("Success:", message);
// //   })
// //   .catch((error) => {
// //     console.log("Error:", error);
// //   });

// //trial

// function fetchPayment(amounts) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (amounts > 0) {
//         resolve(`Payment of KES ${amounts} fetched successfully`);
//       } else {
//         reject(`Invalid payment amount`);
//       }
//     }, 2000);
//   });
// }

// fetchPayment(2000)
//   .then((message) => {
//     console.log("Success:", message);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// function fetchMoney(amount) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (amount > 0) {
//         resolve(`Money of KES ${amount} fetched successfully`);
//       } else {
//         reject(`Invalid money amount`);
//       }
//     }, 2000);
//   });
// }

// fetchMoney(3000)
//   .then((message) => {
//     console.log("Success:", message);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

//trial
const fetchPaymentApi = (amount) => {
  return new Promise((resolve, reject) => {
    console.log("Processing payment...");
    setTimeout(() => {
      if (amount > 0) {
        resolve(`hello your deposit of ${amount} is successful`);
      } else {
        reject(`hello your deposit of ${amount} failed`);
      }
    }, 5000);
  });
};

fetchPaymentApi(9000)
  .then((message) => {
    console.log("success:, ", message);
  })
  .catch((error) => {
    console.log("Error: ", error);
  })
  .finally(() => {
    console.log("Done would you like to try again");
  });
