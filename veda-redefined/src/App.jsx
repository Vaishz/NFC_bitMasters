// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Home from "./Home/Home";
import AboutUs from "../Aboutus/AboutUs";


const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
          <Routes>           
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs/>} />
          </Routes>
      </BrowserRouter>
     {/* <Footer /> */}
      
      
    </>
  );
};

export default App;
