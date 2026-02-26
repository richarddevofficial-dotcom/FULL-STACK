//🔥 CHALLENGE TASK
//100️⃣ Show posts where body.length > 150
async function challengeTask() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const longPosts = data.filter((post) => post.body.length > 150);

  longPosts.forEach((post) => {
    console.log("Title:", post.title, "| Body length:", post.body.length);
  });
}

challengeTask();
