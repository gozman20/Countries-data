import { useState } from "react";
import AllCountries from "./components/AllCountries";
import Navbar from "./components/Navbar";
import Continents from "./components/Continents";
import Country from "./components/CountryData";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { mode } = useSelector((store) => store);

  return (
    <div className={`${mode === "light" ? "" : "bg-dark h-screen"} `}>
      <Navbar />

      <BrowserRouter>
        <AllCountries />
        <Routes>
          <Route path="/" element={<Continents />} />
          <Route path="/country/:id" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
