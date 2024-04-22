'use client'
import React from "react";

const About = () => {
  return (
    <div
      className="sm:min-h-[600px] sm:grid sm:place-items-center duration-300"
      style={{ backgroundImage: `url()` }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src="https://www.altexsoft.com/static/blog-post-featured/2023/10/4fae8217-b4ac-49b4-b02a-91c243524301.jpg"
              alt="Modern Car"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 sm:p-16 pb-6">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-serif text-blue-700" // Light blue heading text
            >
              {/* Choose your preferred heading (replace with your company name): */}
              {/* Option 1 (Intriguing with Light Blue Text):  */}
              <span style={{ color: "text-blue-900" }}></span> DRIVEHUB
              {/* Option 2 (Benefit-Oriented with Light Blue Accent): */}
              {/* Effortless Journeys Start Here: Your Guide to <span style={{ color: "blue" }}>[Your Company Name]</span> */}
              {/* Option 3 (Playful with Light Blue Emphasis): */}
              {/* Buckle Up for More! Meet the Team Behind <span style={{ color: "blue" }}>[Your Company Name]</span> */}
            </h1>
            <p data-aos="fade-up" className="leading-8 tracking-wide">
              <span style={{ color: "blue" }}>[DRIVEHUB]</span> is a leading car rental company
              dedicated to providing a <span style={{ color: "green" }}>seamless and enjoyable</span>
              experience for our customers. We offer a wide variety of vehicles to suit any need,
              from budget-friendly compacts to luxurious SUVs. Whether you're exploring the city
              for a weekend getaway or embarking on a cross-country road trip, we have the
              perfect car for you.
            </p>
            <button className="rounded-lg bg-primary py-2 px-4 text-white hover:bg-primary/80 transition duration-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
