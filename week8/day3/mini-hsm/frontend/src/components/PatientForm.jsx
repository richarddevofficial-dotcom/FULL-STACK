import React, { useState } from "react";
import axios from "axios";

const PatientForm = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await axios.post("http://localhost:5000/api/patients", {
        name,
        age,
        gender,
        contact,
      });
      console.log("Patient added:", res.data);

      setName("");
      setAge("");
      setGender("");
      setContact("");

      if (onSuccess) onSuccess(); // refresh the patient list
    } catch (err) {
      console.error("Error adding patient:", err);
      alert("Failed to add patient. Check backend server and CORS.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={age}
        type="number"
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
        required
      />
      <input
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Gender"
        required
      />
      <input
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Contact"
      />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default PatientForm;
