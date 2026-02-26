//9️⃣ Simple Post Card Layout (First 4)
async function level3_task9() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  for (let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    card.style.border = "1px solid black";
    card.style.padding = "10px";
    card.style.margin = "10px";

    const title = document.createElement("h3");
    title.textContent = data[i].title;

    const body = document.createElement("p");
    body.textContent = data[i].body;

    const user = document.createElement("small");
    user.textContent = "User ID: " + data[i].userId;

    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(user);

    document.body.appendChild(card);
  }
}

level3_task9();
