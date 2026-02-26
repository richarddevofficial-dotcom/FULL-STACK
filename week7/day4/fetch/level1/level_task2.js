//2️⃣ Print how many posts exist
async function level1_task2() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log("Total posts:", data.length);
}

level1_task2();

//trila
async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await res.json();

  console.log("Total post", data.length);
}

getPost();
