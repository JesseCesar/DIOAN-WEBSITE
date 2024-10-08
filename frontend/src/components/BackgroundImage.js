import React from 'react';
import { Link } from 'react-router-dom'
import background from '../assets/file.png'

const BackgroundImage = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 font-poppins">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome To DIOAN</h1>
        <p className="text-lg sm:text-2xl mb-8">Working to fufill your needs</p>
        <Link to="/about-us" className="bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-full transition-colors duration-300">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default BackgroundImage;
