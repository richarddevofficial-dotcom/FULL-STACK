//5️⃣ Display all titles inside <ul><li>
async function level2_task5() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const ul = document.createElement("ul");

  data.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

level2_task5();
