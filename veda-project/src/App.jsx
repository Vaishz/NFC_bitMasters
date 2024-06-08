import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import AboutUs from './Aboutus/AboutUs'
import Alternatives from "./Alternatives/Alternatives"
//import Diseases from './body-types/Diseases';
//import KaphaBodyType from './body-types/KaphaBodyType';
//import Vata from './body-types/VataBodyType';
// import DigestiveSystem from "./Digestive/DigestiveSystem";
// import Books from "./Books/Books";
import Products from "./Products/Products";
import Diseases from "./body-types/Diseases";
import Digestive from "./Digestive/Digestive";
import CustomerExperiences from './CustomerExperiences/CustomerExperiences'
//import PittaBodyType from "./body-types/PittaBodyType";
//import Digestive from "./Digestive/Digestive";



const App = () => {
  return (
    <>
      <BrowserRouter>
        {<Navbar/>}
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/alternatives" element={<Alternatives />} />
        <Route path="/products" element={<Products />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/digestive" element={<Digestive />} />
        <Route path="/customer" element={<CustomerExperiences />} />

        {/* <Route path="/kapha" element={<KaphaBodyType />} /> */}
        {/* <Route path="/pitta" element={<PittaBodyType />} /> */}

        </Routes>
      </BrowserRouter>
      {<Footer />}
    </>
  );
};

export default App;
