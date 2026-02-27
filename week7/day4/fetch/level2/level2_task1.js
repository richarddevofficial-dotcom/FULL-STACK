//✅ LEVEL 2 – Working With Data (JS DOM Manipulation)
//4️⃣ Display first 5 titles (new line)
async function level2_task4() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  for (let i = 0; i < 5; i++) {
    const p = document.createElement("p");
    p.textContent = data[i].title;
    document.body.appendChild(p);
  }
}

// level2_task4();

async function getdata() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  for (let i = 0; i < 10; i++) {
    const p = document.createElement("p");
    p.textContent = data[i].title;
    document.body.appendChild(p);
  }
}

getdata();

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 10; i++) {
      const p = document.createElement("p");
      p.textContent = data[i].title;
      fragment.appendChild(p);
    }

    document.body.appendChild(fragment);
  } catch (error) {
    console.error(error.message);
  }
}

getData();
