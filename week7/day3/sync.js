// function getData() {
//   return Promise.reject("failed");
// }
// async function test() {
//   try {
//     const result = await getData();
//     console.log(result);
//   } catch (error) {
//     console.log("caugth", error);
//   }
// }

// test();

//test
// async function checkAge(age) {
//   if (age < 18) {
//     throw new Error("you must above 18");
//   }
//   return "Access granted";
// }

// async function tests() {
//   try {
//     const message = await checkAge(19);
//     console.log(message);
//   } catch (err) {
//     console.log("error", err.message);
//   }
// }

// tests();

// bank

// async function withdraw(amount, balance) {
//   if (amount > balance) {
//     throw new Error("insufficient funds");
//   }
//   return `withdrawal of ${amount} succeffully`;
// }

// async function runWithdraw() {
//   try {
//     const result = await withdraw(400, 300);
//     console.log(result);
//   } catch (err) {
//     console.log("error", err.message);
//   }
// }

// runWithdraw();

// //exercise
// function getMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello world");
//     }, 7000);
//   });
// }

// getMessage().then(function (message) {
//   console.log(message);
// });

//using asyn
// async function getMassages() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("hello world");
//     }, 7000);
//   });
// }

// async function runMessage() {
//   try {
//     const results = await getMassages();
//     console.log(results);
//   } catch (err) {
//     console.log("error", err.message);
//   }
// }

// runMessage();

//add error handling
function getUser(userExists) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (userExists) {
        resolve("user found");
      } else {
        reject("user not found");
      }
    }, 5000);
  });
}

async function runUser() {
  try {
    const result = await getUser(true);
    console.log(result);
  } catch (err) {
    console.log("error", err);
  }
}

runUser();
