import React from "react";
import Home from "./screens/home/Home";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./screens/createPost/CreatePost.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
