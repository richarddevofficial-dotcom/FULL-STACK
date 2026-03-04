// src/pages/Patients.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientForm from "../components/PatientForm";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/patients");
      setPatients(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Patients</h1>
      <PatientForm onSuccess={fetchPatients} />
      <ul className="mt-4">
        {patients.map((p) => (
          <li key={p._id} className="mb-2 border p-2 rounded">
            <strong>{p.name}</strong> - {p.age} yrs - {p.gender} - {p.contact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
