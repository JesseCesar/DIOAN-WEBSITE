import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer class="bg-trueGray-100 rounded-lg shadow m-4 dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 DIOAN. All Rights Reserved.
        </span>
        <div class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/about-us">
            About Us
          </Link>
          <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
