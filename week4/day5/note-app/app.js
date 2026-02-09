// DOM elements
const titleInput = document.getElementById("titleInput");
const noteInput = document.getElementById("noteInput");
const colorInput = document.getElementById("colorInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");
const searchInput = document.getElementById("searchInput");

// Load notes from LocalStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];
renderNotes(notes);

// Add new note
addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const content = noteInput.value.trim();
  const color = colorInput.value;

  if (!title || !content) return;

  const note = {
    id: Date.now(),
    title,
    content,
    color,
  };

  notes.push(note);
  saveNotes();
  renderNotes(notes);

  titleInput.value = "";
  noteInput.value = "";
});

// Render notes
function renderNotes(noteList) {
  notesContainer.innerHTML = "";

  noteList.forEach((note) => {
    const div = document.createElement("div");
    div.className = `note ${note.color}`;

    div.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <button onclick="editNote(${note.id})">Edit</button>
      <button onclick="deleteNote(${note.id})">Delete</button>
    `;

    notesContainer.appendChild(div);
  });
}

// Delete note
function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  saveNotes();
  renderNotes(notes);
}

// Edit note
function editNote(id) {
  const note = notes.find((note) => note.id === id);

  titleInput.value = note.title;
  noteInput.value = note.content;
  colorInput.value = note.color;

  deleteNote(id);
}

// Search notes
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(value) ||
      note.content.toLowerCase().includes(value),
  );

  renderNotes(filteredNotes);
});

// Save to LocalStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}
