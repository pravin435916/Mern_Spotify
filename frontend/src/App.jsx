import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Error404 from "./components/Error404";
import Uploadsong from "./components/UploadSong";
import Liked from "./components/Liked";
// import Search from "./components/Search";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/upload" element={<Uploadsong />} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
