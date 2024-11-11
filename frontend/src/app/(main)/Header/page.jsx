'use client'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="https://carfromjapan.com/wp-content/uploads/2019/09/a-Black-car-on-the-road-min-1024x683.jpg"
      alt="Background Image"
      className="object-cover object-center w-full h-full"
    />
    <div className="absolute inset-0 bg-black opacity-50" />
  </div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4 ">
      Welcome to Our Awesome Website
    </h1>
    <p className="text-lg text-gray-300 mb-8">
      Discover amazing features and services that await you.
    </p>
    <a
      href="#"
      className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    >
      Get Started
    </a>
  </div>
</div>

    </div>
  )
}

export default Header
