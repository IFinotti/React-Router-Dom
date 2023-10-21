import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { Home } from "./components/Home/index.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/About/index.tsx";
import { Menu } from "./components/Menu/index.tsx";
import { Post } from "./components/Post/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
