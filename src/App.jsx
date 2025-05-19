// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopNavBar from './components/navbar';
import Footer from './components/footer';

import HeroSection from './components/herosection';
import FilterSection from './components/filtersection';
import GadgetGrid from './components/gadgetgrid';
import PartnersSection from './components/patners';

import AboutUs from './pages/AboutUs'; 
import ContactUs from './pages/ContactUs';

// Homepage Layout
const HomePage = () => (
  <>
    <HeroSection />
    <FilterSection />
    <GadgetGrid />
    <PartnersSection />
  </>
);

const App = () => {
  return (
    <Router>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
