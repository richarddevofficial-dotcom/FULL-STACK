//8️⃣ Count posts where userId === 2
async function level3_task8() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const count = data.filter((post) => post.userId === 2).length;
  console.log("User 2 post count:", count);
}

level3_task8();
