
import "./App.scss";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./componenets/NavBar/NavBar.jsx";


import HomePage from "./pages/Home/Home.jsx";
import UploadPage from "./pages/UploadPage/UploadPage.jsx";

function App() {
  return (

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/videos/:id" element={<HomePage />} /> 

      </Routes>

    </BrowserRouter>

  );
}

export default App;


