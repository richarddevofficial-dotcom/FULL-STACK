// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-xl font-bold">Mini HMS</h1>
      <nav>
        <a href="/patients" className="mr-4">
          Patients
        </a>
        <a href="/doctors" className="mr-4">
          Doctors
        </a>
        <a href="/appointments">Appointments</a>
      </nav>
    </header>
  );
};

export default Header;
