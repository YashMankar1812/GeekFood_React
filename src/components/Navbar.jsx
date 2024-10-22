import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close buttons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4 bg-white text-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            GeekFoods
          </span>
        </Link>

        {/* Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-black font-semibold hover:text-blue-500">
            Home
          </Link>
          <Link to="/quote" className="text-black font-semibold hover:text-blue-500">
            Quote
          </Link>
          <Link to="/restaurent" className="text-black font-semibold hover:text-blue-500">
            Restaurant
          </Link>
          <Link to="/food" className="text-black font-semibold hover:text-blue-500">
            Food
          </Link>
          <Link to="/contact" className="text-black font-semibold hover:text-blue-500">
            Contact
          </Link>
        </div>

        {/* Get Started Button (always visible) */}
        <div className="hidden md:block">
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when mobile menu is open) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 mt-4 py-4 space-y-4">
          <Link to="/" className="block text-white hover:bg-gray-700 px-4 py-2" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link to="/quote" className="block text-white hover:bg-gray-700 px-4 py-2" onClick={toggleMobileMenu}>
            Quote
          </Link>
          <Link to="/restaurent" className="block text-white hover:bg-gray-700 px-4 py-2" onClick={toggleMobileMenu}>
            Restaurant
          </Link>
          <Link to="/food" className="block text-white hover:bg-gray-700 px-4 py-2" onClick={toggleMobileMenu}>
            Food
          </Link>
          <Link to="/contact" className="block text-white hover:bg-gray-700 px-4 py-2" onClick={toggleMobileMenu}>
            Contact
          </Link>
          <button className="bg-blue-700 text-white px-4 py-2 w-full rounded hover:bg-blue-800">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






























