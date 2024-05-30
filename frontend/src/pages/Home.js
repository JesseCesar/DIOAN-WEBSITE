import React from 'react';
import '../index.css';
import Navbar from '../components/Navbar';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <div className=''>
      <BackgroundImage />
      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
