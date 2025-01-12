"use client";
import React from "react";
import MapComponent from "../contact/GoogleMapComponent";

const FindUs = () => {
  return (
    <div
      className="bg-black"
      style={{
        backgroundImage: `url('/bg/desktop.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: "cover",
      }}
    >
      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[700px]">
        {/* Left Side - Google Map */}
        <div className="relative rounded-lg overflow-hidden">
          <div className="w-full h-full">
            <MapComponent />
          </div>
        </div>

        {/* Right Side - Details */}

        
       <div className=" align-center pt-40 space-y-6 items-stretch">
          
          <div className="text-center text-white">
            <h2 className="text-7xl  sm:text-4xl md:text-7xl font-bold py-1 font-serif">
              Address
            </h2>
            <p className="text-4xl  text-white font-semibold py-1">
              5240 W. 31st Street, Cicero, Illinois
            </p>
          </div>

       
          <div className=" text-center">
            <h2 className="text-7xl sm:text-4xl  md:text-7xl  font-bold text-white py-1 font-serif">
              Hours
            </h2>
            <p className="text-4xl text-white font-semibold  py-1">
              <strong>Mon - Fri:</strong> 6:30 AM - 4:30 PM
            </p>
          </div>

  
          <div className="text-center ">
            <h2 className="text-7xl sm:text-4xl  md:text-7xl  font-bold text-white py-1 font-serif">
              Contact Us
          </h2>
            <p className="text-4xl  md: text-5xl text-white font-semibold  py-1">(708) 652-6907</p>
          </div>

        </div>  
       




        
      </div>
    </div>
  );
};

export default FindUs;
