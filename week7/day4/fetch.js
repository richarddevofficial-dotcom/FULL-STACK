//Simple GET Request Example
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//asyn fuction
// async function getPosts() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getPosts();

// async function makePost() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     const data = await response.json();

//     console.log(data);
//   } catch (err) {
//     console.log("Error", err.makePost);
//   }
// }

// makePost();

//async
// async function instagram() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1000",
//     );

//     if (!response.ok) {
//       throw new Error("Post Not Found");
//     }

//     const post = await response.json();

//     console.log("full post", post);
//   } catch (error) {
//     console.log("Error", error.message);
//   }
// }

// instagram();

//trial
// async function getPost(id) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP ERROR: ${response.status}`);
//     }

//     const data = await response.json();

//     console.log("Post:", data);
//   } catch (err) {
//     console.log("something went wrong:", err.message);
//   }
// }

// getPost(101);

// //greatig object

// async function createPost() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title: "Drich Post",
//         body: "Learning async/await",
//         userId: 1,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to create post");
//     }

//     const data = await response.json();
//     console.log("Created:", data);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// createPost();

//Reusable Fetch Wrapper
async function fetchData(url, options = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error.message);
    throw error; // re-throw for outer handling
  }
}

// Usage
async function main() {
  try {
    const posts = await fetchData(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    console.log(posts);
  } catch (error) {
    console.log("Handled in main");
  }
}

main();

//advance level
async function fetchWithRetry(url, attempts = 3) {
  for (let i = 1; i <= attempts; i++) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Attempt ${i}: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.log(`Retrying... (${i})`);

      if (i === attempts) {
        throw new Error("All attempts failed");
      }
    }
  }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1000")
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

//time out control
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
    });

    clearTimeout(timer);

    if (!response.ok) {
      throw new Error("Request failed");
    }

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    throw error;
  }
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 2000)
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
