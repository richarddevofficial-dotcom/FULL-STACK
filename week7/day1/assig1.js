function loginUser(username, password) {
  console.log("Attempting login...");

  return new Promise((resolve, reject) => {
    // simulate 3-second server delay
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve({
          status: 200,
          message: "Login successful",
          user: username,
        });
      } else {
        reject({
          status: 401,
          message: "Invalid credentials",
        });
      }
    }, 3000);
  });
}

// ✅ Call with correct credentials
loginUser("admin", "12342")
  .then((res) => console.log(res.message))
  .catch((err) => console.log(err.message))
  .finally(() => console.log("Login attempt finished"));

// ✅ Call with incorrect credentials
// loginUser("user", "0000")
//   .then((resolve) => console.log(resolve.message))
//   .catch((error) => console.log(error.message))
//   .finally(() => console.log("Login attempt finished"));
