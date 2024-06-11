import React from 'react';
import '../index.css';
import BackgroundImage from '../components/BackgroundImage';
import Navbar from '../components/Navbar';
import NewsSection from '../components/NewsSection';
import ProductSection from '../components/ProductSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import LocationSection from '../components/LocationSection';

const Home = () => {
  return (
    <div>
      <BackgroundImage />
      <Navbar />
      <NewsSection />
      <ProductSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </div>
  );
};


export default Home;
