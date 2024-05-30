import React from 'react';
import { Link } from 'react-router-dom'
import background from '../assets/file.png'

const BackgroundImage = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl font-bold m-8">The Best in Agribusiness, the Best Quality, the Best Yield.</h1>
        <p className="mt-4 m-8 text-lg">Let us reserve the best for your satisfaction, our incredible products</p>
        <Link to="/products" className="bg-white text-black font-bold py-2 px-4 rounded-full">
          <button className="bg-white text-black font-bold py-1 px-2 rounded-full">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default BackgroundImage;

