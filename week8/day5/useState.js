function AddStudent() {
  const [student, setStudent] = useState("");

  const addStudent = () => {
    console.log(student);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setStudent(e.target.value)} />

      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}
