// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Home from "./Home/Home";


const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
          <Routes>           
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
     {/* <Footer /> */}
      
      
    </>
  );
};

export default App;
