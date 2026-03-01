const output = document.getElementById("output");

async function getStudent(id) {
  output.textContent = "Loading...";

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    if (!response.ok) {
      throw new Error("Student not found");
    }

    const student = await response.json();

    console.log(student);

    output.textContent = "Student: " + student.name + student.email;
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
}

getStudent(2);

//post

async function createStudent() {
  output.textContent = "Creating student...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Drich",
        email: "drich@email.com",
        phone: "123456789",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create student");
    }

    const newStudent = await response.json();

    console.log(newStudent);

    output.textContent = "Created: " + newStudent.name + newStudent.email;
  } catch (err) {
    output.textContent = "Error: " + err.message;
  }
}

createStudent();
