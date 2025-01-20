
"use client";
import React from "react";
import MapComponent from "../contact/GoogleMapComponent";

const FindUs = () => {
  return (
    <div
      className="bg-black"
      style={{
        backgroundImage: `url('/wall-paintings/giraffe.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
      }}
    >
      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[700px] ">
        {/* Left Side - Google Map */}
        <div className="relative rounded-lg overflow-hidden">
          <div className="w-full h-[320px] md:h-full">
            <MapComponent />
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="relative flex flex-col justify-center items-center text-white space-y-8 py-8 md:py-0 px-4">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none"></div>

          {/* Address Section */}
          <div className="relative text-center">
            <h2 className="text-3xl md:text-5xl font-bold py-2 font-serif text-white">Address</h2>
            <p className="text-xl md:text-2xl font-semibold py-1">
              5240 W. 31st Street, Cicero, Illinois
            </p>
          </div>

          {/* Hours Section */}
          <div className="relative text-center">
            <h2 className="text-3xl md:text-5xl font-bold py-2 font-serif text-white">Hours</h2>
            <p className="text-xl md:text-2xl font-semibold py-1">
              <strong>Mon - Fri:</strong> 6:30 AM - 4:30 PM
            </p>
          </div>

          {/* Contact Section */}
          <div className="relative text-center">
            <h2 className="text-3xl md:text-5xl font-bold py-2 font-serif text-white">Contact Us</h2>
            <p className="text-xl md:text-2xl font-semibold py-1">(708) 652-6907</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
