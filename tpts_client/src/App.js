import React, { Component } from 'react';
import './App.css';
import Admin from "./Pages/Admin.js";
import Articles from "./Pages/Articles.js";
import Audio from "./Pages/Audio.js";
import Videos from "./Pages/Videos.js";
import Home from "./Pages/Home.js";
import Page404 from "./Pages/Page404.js";

import BurgerMenu from "./Components/BurgerMenu.js";

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <BurgerMenu/>
      <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/Audio" element={<Audio/>} />
      <Route path="/Videos" element={<Videos/>} />
      <Route path="/Articles" element={<Articles/>} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/404" element={<Page404/>} />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
