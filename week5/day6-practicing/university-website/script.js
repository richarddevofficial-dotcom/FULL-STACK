const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const programs = [
  {
    title: "Mechanical Engineering",
    description: "Advanced mechanical systems and design.",
    category: "Engineering",
  },
  {
    title: "Electrical Engineering",
    description: "Power systems and electronics.",
    category: "Engineering",
  },
  {
    title: "Business Administration",
    description: "Leadership and entrepreneurship.",
    category: "Business",
  },
  {
    title: "Computer Science",
    description: "Software and system development.",
    category: "Technology",
  },
  {
    title: "Medicine",
    description: "Clinical and medical sciences.",
    category: "Health",
  },
];

const programContainer = document.getElementById("programContainer");

function renderPrograms(filteredPrograms) {
  programContainer.innerHTML = "";

  filteredPrograms.forEach((program) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = program.title;

    const desc = document.createElement("p");
    desc.textContent = program.description;

    card.appendChild(title);
    card.appendChild(desc);

    programContainer.appendChild(card);
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked
    button.classList.add("active");

    const category = button.dataset.category;

    if (category === "All") {
      renderPrograms(programs);
    } else {
      const filtered = programs.filter(
        (program) => program.category === category,
      );
      renderPrograms(filtered);
    }
  });
});

renderPrograms(programs);

const news = [
  {
    title: "New Semester Registration Open",
    date: "March 1, 2026",
    content: "Students can now register for the upcoming semester online.",
  },
  {
    title: "Tech Innovation Conference",
    date: "April 12, 2026",
    content:
      "Join us for a national conference on AI and Software Development.",
  },
  {
    title: "Scholarship Program Announced",
    date: "May 5, 2026",
    content: "New merit-based scholarships available for outstanding students.",
  },
];

const newsContainer = document.getElementById("newsContainer");

function renderNews() {
  newsContainer.innerHTML = "";

  news.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("news-card");

    const title = document.createElement("h3");
    title.textContent = item.title;

    const date = document.createElement("p");
    date.classList.add("news-date");
    date.textContent = item.date;

    const content = document.createElement("p");
    content.textContent = item.content;

    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(content);

    newsContainer.appendChild(card);
  });
}

renderNews();

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("applyModal");
const applyForm = document.getElementById("applyForm");

openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

applyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const program = document.getElementById("programSelect").value;

  if (!name || !email || !program) {
    alert("Please fill all fields.");
    return;
  }

  alert("Application submitted successfully!");

  applyForm.reset();
  modal.style.display = "none";
});

// ===== SCROLL ANIMATION =====

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

hiddenElements.forEach((el) => observer.observe(el));
