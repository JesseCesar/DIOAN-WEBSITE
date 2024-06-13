import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-trueGray-100 rounded-lg dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row items-center justify-between font-poppins">

        {/* Left Section: Copyright */}
        <span className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
          © 2024 DIOAN. All Rights Reserved.
        </span>

        {/* Center Section: Social Links */}
        <div className="flex justify-center space-x-6 mt-4 md:mt-0">
          <a href="https://www.facebook.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.twitter.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:example@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FaEnvelope size={24} />
          </a>
          <a href="https://wa.me/1234567890" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FaWhatsapp size={24} />
          </a>
          <a href="tel:+1234567890" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            <FaPhone size={24} />
          </a>
        </div>

        {/* Right Section: Address and Working Hours */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Address:</strong> Avenida 21 de Janeiro Luanda (Morro-Bento)
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Working Hours:</strong> Mon - Fri: 9 AM - 5 PM
          </p>
        </div>
      </div>

      {/* Bottom Section: Navigation Links */}
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-wrap items-center justify-center text-center md:text-left text-sm font-medium text-gray-500 dark:text-gray-400 mt-4 md:mt-0 font-poppins">
        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" to="/about-us">
          About Us
        </Link>
      </div>

      {/* Dev team and credits */}
      <div>
        <p className="text-center text-gray-300 dark:text-gray-300 text-sm mt-4">
          Developed by
          <a href="https://github.com/JesseCesar" className="text-blue-200 hover:underline"> Jesse  </a>
          and
          <a href="https://github.com/mrjacksoncool" className="text-blue-200 hover:underline"> Mojela</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
