import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import AboutUs from './Aboutus/AboutUs';
import Alternatives from './Alternatives/Alternatives';
import Diseases from './body-types/Diseases';
import KaphaBodyType from './body-types/KaphaBodyType';
import Vata from './body-types/VataBodyType';
import Pitta from './body-types/PittaBodyType';
import Books from "./Books/Books";
import CustomerExperiences from './CustomerExperiences';
import DigestiveSystem from './DigestiveSystem';
import Doctors from './Doctors';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/alternatives" element={<Alternatives />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/kapha-body-type" element={<KaphaBodyType />} />
          <Route path="/vata-body-type" element={<Vata />} />
          <Route path="/pitta-body-type" element={<Pitta />} />
          <Route path="/books" element={<Books />} />
          <Route path="/customer-experience" element={<CustomerExperiences />} />
          <Route path="/digestive-system" element={<DigestiveSystem />} />
          <Route path="/doctors" element={<Doctors />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
};

export default App;
