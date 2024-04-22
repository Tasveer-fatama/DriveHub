'use client'
import React, { useEffect, useState } from "react";
import AOS from "aos";

const Header = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  }, [theme]); // Refresh AOS on theme change

  return (
    <div
      className={`bg-cover bg-no-repeat bg-center h-[620px] ${
        theme === "dark" ? "dark:bg-black dark:text-white" : ""
      }`}
      style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/05/63/85/90/360_F_563859074_o5W9SBAiMJx96qfaxSHRHPa61p6gPDjM.jpg)` }}
    >
      <div className="container min-h-full flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src="" // Remove empty image tag
              alt="Car"
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 text-white"> {/* Ensure white text on background image */}
            <p data-aos="fade-up" className=" text-2xl font-serif text-blue-600">
            Effortless Car Rentals for Every Journey
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif  "
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
            Experience the convenience of car rental. Book online, pick up your car at a convenient location, and hit the road.
We prioritize your safety. Our fleet is meticulously maintained, ensuring a smooth and reliable ride.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => AOS.refreshHard()}
              className="rounded-md bg-blue-600 hover:bg-blue-500 transition duration-500 py-2 px-6 text-black"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
