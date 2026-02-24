// function loginUser(username, password) {
//   console.log("Attempting login...");

//   return new Promise((resolve, reject)){
//     //simulate to 3 second server delay
//     setTimeout(() => {
//       if (username === "admin" && password === "1234") {
//         resolve({
//           status: 200,
//           message: "Login successful",
//           user: username,
//         });
//       } else {
//         reject({
//           status: 401,
//           message: "Invalid credentials",
//         });
//       }
//     }, 3000);
//   }
// }

// // ✅ Call with correct credentials
// loginUser("admin", "1234")
// .then((res) => {
//     console.log(res.message);
// })
// .catch((err) => {
//     console.log(err.message);
// })
// .finally(() => {
//     console.log("Login attempt finished");
// });

// // ✅ Call with incorrect credentials
// loginUser("user", "0000")
// .then((res) => {
//     console.log(res.message);
// })
// .catch((err) => {
//     console.log(err.message);
// })
// .finally(() => {
//     console.log("Login attempt finished");
// });

//exam checker
// function checkExamScore(score) {
//   console.log("Checking exam score...");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (score >= 50) {
//         resolve("Passed");
//       } else {
//         reject("Failed");
//       }
//     }, 2000);
//   });
// }

// // ✅ Call with passing score
// checkExamScore(75)
//   .then((result) => {
//     console.log("Exam result:", result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Exam check completed");
//   });

// // ✅ Call with failing score
// checkExamScore(30)
//   .then((result) => {
//     console.log("Exam result:", result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Exam check completed");
//   });

//async and await plus promise

function fetchData(amount) {
  console.log(`Loading...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 0) {
        resolve(`You have deposited ${amount}`);
      } else {
        reject(`Your request failed because you have zero amount: ${amount}`);
      }
    }, 5000);
  });
}

async function processPayment() {
  try {
    const result = await fetchData(7);
    console.log("Success:", result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Done. Would you like to try again?");
  }
}

processPayment();
