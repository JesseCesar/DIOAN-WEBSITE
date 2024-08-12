import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo-white.png';
import { FaSearch } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
// import { useParams } from 'react-router-dom';

const Navbar = ({ locationRef, socialsRef }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [top, setTop] = useState(0);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setTop(0); // Show navbar when scrolling up
      } else {
        setTop(-70); // Hide navbar when scrolling down
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/news`)
      .then(response => response.json())
      .then(data => {
        setNews(data);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearchBar = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredArticles = news.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scrollToSection = (ref) => {
    if (ref && ref.current) {  // Add check to ensure ref is defined
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleItemClick = (ref) => {
    scrollToSection(ref);           // Scroll to the section
    setIsDropdownOpen(false);       // Close the dropdown
  };

  return (
    <nav className="bg-white fixed w-full z-50 top-0 left-0 transition-transform duration-300" style={{ top: `${top}px` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
        <div className="flex items-center justify-between h-20">
          {/* Large screen navbar */}
          <div className="hidden md:flex items-center space-x-4 w-full justify-between">
            <div className="flex items-center space-x-2">
              <Link className="py-2 px-3 text-sm text-green-500 hover:bg-gray-100 rounded-lg" to="/about-us">
                About Us
              </Link>
              <button className="py-2 px-3 text-sm text-green-500 hover:bg-gray-100 rounded-lg" onClick={() => scrollToSection(locationRef)}>
                Location
              </button>
              <Link className="py-2 px-3 text-sm text-green-500 hover:bg-gray-100 rounded-lg" to="/news">
                News
              </Link>
              <button className="py-2 px-3 text-sm text-green-500 hover:bg-gray-100 rounded-lg" onClick={() => scrollToSection(socialsRef)} >
                Socials
              </button>
            </div>
            <div className="flex items-center justify-center">
              <NavLink to="/" className="flex items-center">
                <img className="sm:w-30 sm:h-20" src={logo} alt='logo' />
              </NavLink>
            </div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search news"
                className="bg-transparent border border-lime-700 text-black rounded-full py-2 px-4 focus:outline-none focus:bg-white focus:text-gray-800 transition duration-300"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
          {/* Mobile and tablet view */}
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="flex items-center">
              <button
                onClick={toggleDropdown}
                className="text-black focus:outline-none"
              >
                {isDropdownOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className='flex items-center'>
              <NavLink to="/" className="ml-4">
                <img className='h-15 w-20' src={logo} alt='logo' />
              </NavLink>
            </div>
            <div className="flex items-center">
              {isSearchVisible && (
                <input
                  type="text"
                  className="bg-gray-700 text-white rounded-full px-4 py-2 focus:outline-none w-40 transition-opacity duration-300"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
              )}
              <button
                onClick={toggleSearchBar}
                className="text-black focus:outline-none ml-2"
              >
                {isSearchVisible ? (
                  <FiX size={20} />
                ) : (
                  <FaSearch size={20} />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Dropdown for mobile view */}
        {isDropdownOpen && (
          <div className="md:hidden bg-white shadow-md rounded-lg mt-1 absolute top-16 left-0 right-0 z-40 transition-opacity duration-300 w-1/2 font-poppins">
            <Link className="block py-2 px-4 text-gray-800 hover:bg-gray-100" to="/about-us">About Us</Link>
            <button className="block py-2 px-4 text-gray-800 hover:bg-gray-100" onClick={() => handleItemClick(locationRef)}>Location</button>
            <Link className="block py-2 px-4 text-gray-800 hover:bg-gray-100" to="/news">News</Link>
            <button className="block py-2 px-4 text-gray-800 hover:bg-gray-100" onClick={() => handleItemClick(socialsRef)}>Socials</button>
          </div>
        )}
      </div>
      {/* Render news articles */}
      {searchQuery && (
        <div className="bg-white p-4 font-poppins">
          <ul>
            {filteredArticles.map(article => {
              // Extract the first 7 characters from article.content
              const firstFewCharacters = article.content.substring(0, 7);
              // Function to highlight the search query in the first few characters
              const highlightText = (text, query) => {
                if (!query) return text;
                const regex = new RegExp(`(${query})`, 'gi');
                return text.split(regex).map((part, index) =>
                  part.toLowerCase() === query.toLowerCase() ?
                    <span key={index} className="bg-yellow-300">{part}</span> : part
                );
              };
              return (
                <li key={article.id} className="border-b border-gray-300 py-2">
                  <Link to={`/news/${article._id}`}>
                    <span className="font-bold">
                      {highlightText(article.title, searchQuery)}
                    </span>
                    <p>
                      {highlightText(firstFewCharacters, searchQuery)}...
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
