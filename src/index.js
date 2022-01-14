import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import ContactThanks from "./components/ContactThanks";
// import Contact from "./components/Contact";
import Explore from "./components/Explore";
import Anime from "./components/Anime";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import ContactPage from "./components/ContactPage";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="explore" element={<Explore />} />
      <Route path="anime/:animeId" element={<Anime />} />
      
    </Routes>
  </BrowserRouter>,
  rootElement
);
