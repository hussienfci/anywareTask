"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, 
  faBell, 
  faEnvelope,
  faBars
} from '@fortawesome/free-solid-svg-icons';

import { CAvatar } from "@coreui/react";
const TopNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const image = null ; 
  return (
    <nav className="bg-white shadow-md py-3 px-4 md:px-6 flex items-center justify-between">
      {/* Left side: Welcome text and mobile menu button */}
      <div className="flex items-center">
        {/* <span
          className="md:hidden mr-1 text-gray-600"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </span> */}
        <h1 className="text-sm md:text-xl md:ml-2 ml-10 font-bold text-blue-800">Welcome to Tailia</h1>
      </div>

      {/* Middle: Search bar (hidden on mobile) */}
      <div className=" md:flex flex-1 mx-4 lg:ml-100 max-w-md">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-4xl focus:ring-blue-500 focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Right side: Icons and profile */}
      <div className="flex items-center space-x-3 md:space-x-6">
        {/* Notification icon with badge */}
        <div className="relative">
          <button className="text-gray-600 hover:text-blue-700">
            <FontAwesomeIcon icon={faBell} size="lg" />
          </button>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            1
          </span>
        </div>

        {/* Messages icon with badge */}
        <div className="relative">
          <button className="text-gray-600 hover:text-blue-700">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </button>
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </div>

        {/* Profile image placeholder */}
        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
          TL
        </div>
      </div>

      {/* Mobile search bar (appears when menu is open) */}
      {showMobileMenu && (
        <div className="absolute top-full left-0 right-0 bg-white p-4 shadow-md md:hidden">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNavbar;