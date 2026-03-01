//Get
const postsContainer = document.getElementById("posts");

async function getPosts() {
  postsContainer.innerHTML = "Loading...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    postsContainer.innerHTML = "";

    data.slice(0, 5).forEach((post) => {
      displayPost(post);
    });
  } catch (err) {
    postsContainer.innerHTML = "Error: " + err.message;
  }
}

getPosts();

//creating post
function displayPost(post) {
  const card = document.createElement("div");
  card.style.border = "1px solid black";
  card.style.padding = "10px";
  card.style.margin = "10px";

  card.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <button onclick="deletePost(${post.id})">Delete</button>
    <button onclick="editPost(${post.id})">Edit</button>
  `;

  postsContainer.appendChild(card);
}

//for creating new post
async function createPost() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    const newPost = await response.json();

    displayPost(newPost);
  } catch (err) {
    alert(err.message);
  }
}

//deleting post
async function deletePost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to delete");
    }

    alert("Post deleted (simulated)");
    postsContainer.innerHTML = "";
    getPosts();
  } catch (err) {
    alert(err.message);
  }
}

//updating post
async function editPost(id) {
  const newTitle = prompt("Enter new title:");

  if (!newTitle) return;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
          body: "Updated body",
          userId: 1,
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to update");
    }

    alert("Post updated (simulated)");
    postsContainer.innerHTML = "";
    getPosts();
  } catch (err) {
    alert(err.message);
  }
}
