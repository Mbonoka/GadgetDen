// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavBar from "./components/navbar";
import Footer from "./components/footer";

import HeroSection from "./components/herosection";
import FilterSection from "./components/filtersection";
import PartnersSection from "./components/patners";
import ProductList from "./components/ProductList";

import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AdminLogin from "./pages/adminlogin";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";

// Homepage Layout
const HomePage = () => (
  <>
    <HeroSection />
    <FilterSection />
    <ProductList />
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
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
