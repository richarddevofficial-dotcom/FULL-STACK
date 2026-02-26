//6️⃣ Display first 3 posts (Title + Body)
async function level2_task6() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  for (let i = 0; i < 3; i++) {
    const title = document.createElement("h3");
    title.textContent = data[i].title;

    const body = document.createElement("p");
    body.textContent = data[i].body;

    document.body.appendChild(title);
    document.body.appendChild(body);
  }
}

level2_task6();
