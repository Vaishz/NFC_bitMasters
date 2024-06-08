import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AboutUs from './Aboutus/AboutUs'
// import Alternatives from "./Alternatives/Alternatives"
// import Diseases from './body-types/Diseases';
// import KaphaBodyType from './body-types/KaphaBodyType';
// import Vata from './body-types/VataBodyType';
// import Pitta from './body-types/PittaBodyType';
// import DigestiveSystem from "./Digestive/DigestiveSystem";
// import Books from "./Books/Books";


const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUs />} />

        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
};

export default App;
