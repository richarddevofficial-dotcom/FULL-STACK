//1️⃣ Fetch all posts and print entire array
async function level1_task1() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}

level1_task1();

//trial
async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  const data = await response.json();
  console.log(data);
}

getPost(1);
