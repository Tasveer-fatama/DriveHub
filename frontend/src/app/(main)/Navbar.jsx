'use client'
import React from 'react';

function ColorSchemesExample() {
  return (
    <>
      <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full  z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#home" className="flex items-center justify-center h-14 w-15 text-blue-600 font-bold text-3xl tracking-widest uppercase"> DriveHub</a>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-blue-500 font-bold">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 font-bold">About</a>
            </li>
            <li>
              <a href="/Pricing" className="hover:text-blue-500 font-bold">Pricing</a>
            </li>
            <li>
              <a href="/signup" className="hover:text-blue-500 font-bold">Signup</a>
            </li>
            
          </ul>
        </div>
      </nav>
      {/* Other content can go here */}

      <br />

      <nav className="bg-blue-700 text-white fixed top-0 left-0 w-full z-50">
        {/* Same structure as the first navbar */}
      </nav>

      <br />

      <nav className="bg-gray-100 text-gray-800 fixed top-0 left-0 w-full z-50">
        {/* Same structure as the first navbar */}
      </nav>
    </>
  );
}

export default ColorSchemesExample;
