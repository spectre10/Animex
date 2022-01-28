import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
// import ContactThanks from "./components/ContactThanks";
// import Contact from "./components/Contact";
import Explore from "./components/Explore";
import Anime from "./components/Anime";
import "./index.css"; 
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Search from "./components/Search";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="explore" element={<Explore />} />
      <Route path="categories/:catId" element={<Category />} />
      <Route path="anime/:animeId" element={<Anime />} />
      <Route path="search/:searchId" element={<Search />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
  rootElement
);
