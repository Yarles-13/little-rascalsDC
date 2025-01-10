"use client";
import React from "react";
import MapComponent from "../contact/GoogleMapComponent";
import Border from "../shared/border/border"

const FindUs = () => {
  return (
    <div className="bg-black" style={{
      backgroundImage: `url('/bg/desktop.jpg')`,
      backgroundRepeat: "repeat",
      backgroundPosition: "center",
     

    }} >
      {/* Section Header */}
      

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[500px]" >
        {/* Left Side - Google Map */}
        <div className="relative rounded-lg overflow-hidden">
          <div className="w-full h-full">
            <MapComponent />
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col align-center space-y-6  items-stretch " 
       
         >
          {/* Address Card */} 
          <div className="pt-8 text-center">
            <h2 className="bg-black text-3xl font-bold text-white mt-5 mb-4 py-1">Address</h2>
            <p className="text-3xl text-black bg-gray-200 py-1">
              5240 W. 31st Street, Cicero, Illinois
            </p>
        
          </div>

          {/* Hours Card */}
          <div className="pb-5 text-center">
            <h2 className="bg-black text-3xl font-bold text-white mb-4 py-1"> Hours</h2>
            <p className="text-3xl text-black-800 bg-gray-200 py-1">
              <strong className="text-black">Mon - Fri:</strong> 6:30 AM - 4:30 PM
            </p>
          </div>

          {/* Contact Card */}
          <div className="pb-8 text-center">
            <h2 className="bg-black text-3xl font-bold text-white mb-4 py-1">Contact Us</h2>
            <p className="text-3xl text-black bg-gray-200 py-1">
            (708) 652-6907
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FindUs;

