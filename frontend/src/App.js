import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Compliance from './pages/Compliance';
import News from './pages/News';
import Products from './pages/Products';
import OurPrinciples from './pages/OurPrinciples';
import Services from './pages/Services';
import LogIn from './pages/LogIn';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (


    <div className="App">

    <News />
  </div>



    /*<Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/news" element={<News />} />
          <Route path="/products" element={<Products />} />
          <Route path="/our-principles" element={<OurPrinciples />} />
          <Route path="/services" element={<Services />} />
          <Route path='/login' element={<LogIn />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    </Router>
    */
  );
};

export default App;
