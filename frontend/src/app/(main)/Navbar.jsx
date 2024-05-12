'use client'
import React from 'react';

function Navbar() {
  return (
    <div className=" flex flex-col">
      <nav className="bg-black from-purple-500 via-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-5 py-5 flex justify-between items-center">
          <a href="#home" className="logo text-white font-extrabold text-3xl uppercase tracking-wider">
            <span className="text-yellow-400">D</span>rive<span className="text-yellow-400">H</span>ub
          </a>
          <ul className="nav-links flex space-x-4">
            <li>
              <a href="#home" className="hover:text-yellow-400 font-semibold">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 font-semibold">About</a>
            </li>
            <li>
              <a href="/Pricing" className="hover:text-yellow-400 font-semibold">Pricing</a>
            </li>
            <li>
              <a href="/signup" className="hover:text-yellow-400 font-semibold">Signup</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex-1">
        {/* Content for hero section goes here */}
      </div>
    </div>
  );
}

export default Navbar;
