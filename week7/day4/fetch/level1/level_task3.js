//3️⃣ Print title of first post
async function level1_task3() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log("First title:", data[0].title);
}

level1_task3();

//trial

async function getFirst() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  console.log("Data ..", data[1].title);
}

getFirst();
