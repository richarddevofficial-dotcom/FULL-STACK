1️⃣ What is fetch() in JavaScript?

fetch() is a built-in JavaScript function used to make HTTP requests (GET, POST, PUT, DELETE, etc.) to servers.

It is used for:

Getting data from APIs

Sending data to servers

Communicating with backend systems

It replaces the older XMLHttpRequest.

2️⃣ Basic Syntax
fetch(url, options)

url → The API endpoint

options → (optional) configuration object

fetch() returns a Promise.

3️⃣ Simple GET Request Example
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
console.log(data);
})
.catch(error => {
console.error("Error:", error);
});
4️⃣ Step-by-Step Explanation
Step 1:
fetch("https://jsonplaceholder.typicode.com/posts")

➡ Sends a GET request to the server.

Step 2:
.then(response => response.json())

The server responds.

response is a Response object.

response.json() converts response body into JavaScript object.

This also returns a Promise.

Step 3:
.then(data => console.log(data))

Receives parsed JSON data.

Prints it.

Step 4:
.catch(error => console.error(error))

Handles:

Network errors

Server not reachable

5️⃣ Using Async / Await (Cleaner Way)
async function getPosts() {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();

    console.log(data);

} catch (error) {
console.error("Error:", error);
}
}

getPosts();
6️⃣ Making a POST Request
async function createPost() {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
title: "Drich API",
body: "Learning fetch deeply",
userId: 1
})
});

    const data = await response.json();
    console.log(data);

} catch (error) {
console.error(error);
}
}

createPost();
7️⃣ Understanding the options Object
{
method: "POST", // HTTP method
headers: { // Request headers
"Content-Type": "application/json"
},
body: JSON.stringify(data) // Data being sent
}
8️⃣ Important Concept: fetch DOES NOT Reject on 404 or 500

This is very important ⚠️

fetch() only rejects if:

Network fails

Server unreachable

If server returns:

404

500

It still resolves successfully!

You must check:

if (!response.ok) {
throw new Error("HTTP error " + response.status);
}

Full example:

async function getData() {
try {
const response = await fetch("https://api.example.com/data");

    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }

    const data = await response.json();
    console.log(data);

} catch (error) {
console.error("Handled Error:", error.message);
}
}
9️⃣ Common HTTP Methods with fetch
Method Purpose
GET Retrieve data
POST Create data
PUT Update data
PATCH Partial update
DELETE Remove data
🔟 Real-World Flow (How It Works Internally)

Browser sends HTTP request.

Server processes request.

Server sends response.

fetch() resolves with Response object.

You extract body using:

.json()

.text()

.blob()

.formData()

1️⃣1️⃣ Response Object Properties
response.status // 200, 404, 500
response.ok // true if status 200-299
response.headers // response headers
response.url // final URL
1️⃣2️⃣ Example for Your Dev Level (API + JWT style)

Since you work with APIs and authentication:

async function getProfile() {
const token = localStorage.getItem("token");

const response = await fetch("https://api.myapp.com/profile", {
method: "GET",
headers: {
"Authorization": `Bearer ${token}`
}
});

if (!response.ok) {
throw new Error("Unauthorized");
}

return response.json();
}
🚀 Interview-Level Explanation

If asked:

What is fetch in JavaScript?

You say:

fetch is a modern JavaScript API used to make HTTP requests. It returns a Promise that resolves to a Response object. It does not reject on HTTP errors like 404 or 500, so we must manually check response.ok. It supports async/await and allows sending headers, methods, and body data.
