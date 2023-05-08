import { useState } from "react";
import AllCountries from "./components/AllCountries";
import Navbar from "./components/Navbar";
import CountryDetails from "./components/CountryDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const { mode } = useSelector((store) => store);
  return (
    <div className={`${mode === "light" ? "" : "bg-dark  "} `}>
      <div
        className={`mb-4 ${
          mode === "light" ? "" : "bg-dark border-b border-white/100"
        } `}
      >
        <Navbar />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:id" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
