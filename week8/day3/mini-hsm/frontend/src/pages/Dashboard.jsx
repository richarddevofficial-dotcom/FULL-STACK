// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [patients, setPatients] = useState(0);
  const [doctors, setDoctors] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/patients")
      .then((res) => setPatients(res.data.length));
    axios
      .get("http://localhost:5000/api/doctors")
      .then((res) => setDoctors(res.data.length));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <p>Total Patients: {patients}</p>
      <p>Total Doctors: {doctors}</p>
    </div>
  );
};

export default Dashboard;
