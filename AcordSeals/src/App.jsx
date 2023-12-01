import React, { useState } from 'react';
import acordlogo from "./assets/Images/acordlogo.png";

const CustomNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex px-4 border-b md:shadow-lg items-center relative">
        <div className="flex items-center">
          <img src={acordlogo} alt="Acord Logo" className="h-12" />
          <div className="ml-2 md:ml-4">
            <span className="text-lg font-bold block">A-CORD SEALS INDIA PVT LTD</span>
            <span className="text-sm text-gray-500 block">Your attention, Our Co-ordination</span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:px-2 md:ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent md:flex-row">
          <li>
            <a href="#" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
              <span>Home</span>
            </a>
          </li>
          <li className="relative parent" onClick={toggleDropdown}>
            <a href="#" className="flex justify-between md:inline-flex p-4 items-center hover:bg-gray-50 space-x-2">
              <span>Products</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24">
                <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
              </svg>
            </a>
            <ul
              className={`child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg md:rounded-b ${
                isDropdownOpen ? 'opacity-100 h-auto overflow-none transform translate-y-0' : 'opacity-0 h-0 overflow-hidden transform translate-y-1'
              }`}
            >
              <li>
                <a href="#" className="flex px-4 py-3 hover:bg-gray-50">
                  Web development
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-3 hover:bg-gray-50">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="flex px-4 py-3 hover:bg-gray-50">
                  Machine Learning
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
              <span>About us</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex md:inline-flex p-4 items-center hover:bg-gray-50">
              <span>Contact us</span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="ml-auto md:hidden text-gray-500 cursor-pointer" onClick={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default CustomNavbar;
