import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#01514e] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-white text-2xl font-bold">RoyalAU Furniture</div>
        </Link>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/products" className="text-white hover:text-gray-300">
            Products
          </a>
          <a href="/about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="/terms" className="text-white hover:text-gray-300">
            Terms
          </a>
          <a href="/privacy" className="text-white hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block text-white px-2 py-1">
            Home
          </a>
          <a href="#shop" className="block text-white px-2 py-1">
            Shop
          </a>
          <a href="#about" className="block text-white px-2 py-1">
            About
          </a>
          <a href="#contact" className="block text-white px-2 py-1">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Header;
