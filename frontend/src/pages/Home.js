import React, { useRef } from 'react';
import '../index.css';
import BackgroundImage from '../components/BackgroundImage';
import Navbar from '../components/Navbar';
import NewsSection from '../components/NewsSection';
import ProductSection from '../components/ProductSection';
import TestimonialsSection from '../components/TestimonialsSection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';

const Home = () => {

  const locationRef = useRef(null);
  const socialsRef = useRef(null);

  return (
    <div>
      <BackgroundImage />
      <Navbar locationRef={locationRef} socialsRef={socialsRef}/>
      <NewsSection />
      <ProductSection />
      <TestimonialsSection />
      <LocationSection ref={locationRef}/>
      <Footer ref={socialsRef}/>
    </div>
  );
};

export default Home;
