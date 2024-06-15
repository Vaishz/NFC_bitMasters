import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import AboutUs from './Aboutus/AboutUs'
import Alternatives from "./Alternatives/Alternatives"
import KaphaBodyType from './body-types/KaphaBodyType';
import VataBodyType from './body-types/VataBodyType';
import PittaBodyType from './body-types/PittaBodyType'
import Products from "./Products/Products";
import Diseases from "./body-types/Diseases";
import Digestive from "./Digestive/Digestive";
import CustomerExperiences from './CustomerExperiences/CustomerExperiences'
import Doctor from "./Doctor/Doctor";
import FAQ from "./FAQ/FAQ";
import Services from "./Services/Services";
import Skin from "./Skin/Skin";
import MassageMaps from './Map/MassageMap'
import Learn from "./WhatIs/Learn";
import Books from "./Books/Books";





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
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/kapha" element={<KaphaBodyType /> }/> 
        <Route path="/pitta" element={<PittaBodyType />} /> 
        <Route path="/vata" element={<VataBodyType />} />
        <Route path="/massage" element={<MassageMaps />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
      {<Footer />}
    </>
  );
};

export default App;
