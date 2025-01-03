"use client";
import React from "react";
import MapComponent from "../contact/GoogleMapComponent";

const FindUs = () => {
  return (
    <div 
      className="px-30 py-20 md:px-20 min-h-screen flex flex-col md:flex-row items-center justify-between bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/assets/home-outside.jpg')`,
      }}
    >
      
      {/* Overlay for Darkening Background */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Left Section - Contact and Hours with Frosted Glass Effect */}
      <div className="w-full px-10 md:px-20 md:w-1/2 space-y-10 relative z-10 mt-20">
        <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-xl p-10">
          <h2 className="text-5xl font-extrabold mb-6 text-white">FIND US</h2>
          <p className="text-2xl text-gray-800">
            5240 W. 31st Street, Cicero, Illinois
          </p>
          <p className="text-2xl mt-4 text-red-300">
            <span className="text-orange-200 font-bold">Call us:</span> 708-203-6817
          </p>
        </div>

        <div className="bg-white bg-opacity-30 backdrop-blur-lg rounded-lg shadow-xl p-10">
          <h2 className="text-4xl font-bold mb-6 text-white">OPENING TIMES</h2>
          <ul className="text-2xl text-red-300 space-y-2">
            <li>
              <span className="font-bold text-orange-200 ">Mon - Fri:</span> 6:30 AM - 4:30 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section - Embedded Google Map */}
      <div className="sm:px-20 w-full md:w-1/2  rounded-lg shadow-lg mt-10 md:mt-0 relative z-10 overflow-hidden">
      <MapComponent />
      </div>
    </div>
  );
};

export default FindUs;
