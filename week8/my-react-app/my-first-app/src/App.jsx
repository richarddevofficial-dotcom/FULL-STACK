import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./index.css"; // Import your CSS

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
