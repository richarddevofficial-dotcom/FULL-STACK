✅ 1️⃣ GET

👉 Retrieve data from server
👉 Does NOT change anything

Example:

Get all posts

Get one user

fetch("/posts") // GET by default

Think: Read

✅ 2️⃣ POST

👉 Send new data to server
👉 Creates something new

Example:

Create new post

Register new user

fetch("/posts", {
method: "POST",
body: JSON.stringify(data)
})

Think: Create

✅ 3️⃣ PUT

👉 Update existing data (replace completely)

Example:

Update full user profile

Replace a post

fetch("/posts/1", {
method: "PUT",
body: JSON.stringify(updatedData)
})

Think: Replace

✅ 4️⃣ DELETE

👉 Remove data from server

Example:

Delete post

Delete user

fetch("/posts/1", {
method: "DELETE"
})

Think: Remove
