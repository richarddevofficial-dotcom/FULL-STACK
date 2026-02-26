//✅ LEVEL 3 – Slight Thinking
//7️⃣ Display posts where userId === 1
async function level3_task7() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const filtered = data.filter((post) => post.userId === 1);

  filtered.forEach((post) => {
    const p = document.createElement("p");
    p.textContent = post.title;
    document.body.appendChild(p);
  });
}

level3_task7();
