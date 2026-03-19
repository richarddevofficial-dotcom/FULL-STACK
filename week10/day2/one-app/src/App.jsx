import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RandomUserCard from "./components/RandomUserCard";
import WeatherApp from "./components/WeatherApp";
import CountryExplorer from "./components/CountryExplorer";
import BlogViewer from "./components/BlogViewer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<RandomUserCard />} />
        <Route path="/weather" element={<WeatherApp />} />
        <Route path="/countries" element={<CountryExplorer />} />
        <Route path="/blog" element={<BlogViewer />} />
      </Routes>
    </>
  );
}

export default App;
