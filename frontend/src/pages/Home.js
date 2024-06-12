import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Assuming you are using react-icons
import '../index.css';
import BackgroundImage from '../components/BackgroundImage';
import Navbar from '../components/Navbar';
import NewsSection from '../components/NewsSection';
import ProductSection from '../components/ProductSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import LocationSection from '../components/LocationSection';
import logo from '../assets/logo-white.png';

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const myRef = useRef(null);
  const upRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div>
      <BackgroundImage />

      <Navbar />
      <NewsSection />
      <ProductSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />

      <nav className="bg-transparent fixed w-full z-50 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className='hidden md:flex space-x-2'>
              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/about-us">
                About Us
              </Link>
              <button onClick={() => myRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                Our principles
              </button>
              <button onClick={() => myRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                News
              </button>
              <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/compliance">
                Compliance
              </Link>
            </div>
            <div className='hidden md:flex flex-grow justify-center'>
              <NavLink to="/" className="">
                <img className='h-12 w-12' src={logo} alt='DIOAN' />
              </NavLink>
            </div>
            <div className='hidden md:flex items-center'>
              <input type="text" placeholder="Search" className="bg-transparent border border-white text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-white focus:text-gray-800 transition duration-300" />
            </div>
            {/* Mobile and tablet view */}
            <div className="flex items-center">
              <button onClick={toggleDropdown} className="text-white focus:outline-none sm:hidden">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className={`transition-[opacity,margin] duration-300 ${isDropdownOpen ? 'opacity-100' : 'opacity-0'} ${isDropdownOpen ? 'block' : 'hidden'} md:hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-0.5 absolute top-20 left-0 w-1/6 z-40`} aria-labelledby="hs-dropdown-default">
                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/about-us">
                  About Us
                </Link>
                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/our-principles">
                  Our Principles
                </Link>
                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/news">
                  News
                </Link>
                <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/compliance">
                  Compliance
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0 md:hidden">
              <NavLink to="/" className="">
                <img className='h-12 w-12' src={logo} alt='DIOAN' />
              </NavLink>
            </div>
            <div className="flex justify-end items-center ">
              {isSearchVisible && (
                <input
                  type="text"
                  className="bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none"
                  placeholder="Search news"
                />
              )}
              <button onClick={toggleSearchBar} className="text-white focus:outline-none sm:hidden">
                <FaSearch size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Updates */}
      <div ref={myRef}>
        <div>
          <h1 className="text-4xl text-center font-bold text-gray-800 dark:text-white">News</h1>
        </div>
      </div>
      {/* contact us */}
      <div ref={upRef}></div>
      <footer className="bg-trueGray-100 rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 DIOAN. All Rights Reserved.</span>
          <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/about-us">
              About Us
            </Link>
            <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/contact-us">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
