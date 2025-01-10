"use client";
import React from "react";
import MapComponent from "../contact/GoogleMapComponent";

const FindUs = () => {
  return (
    <div className="bg-terracotta">
      {/* Section Header */}
 

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pr-20 h-[500px]">
        {/* Left Side - Google Map */}
        <div className="relative rounded-lg overflow-hidden">
          <div className="w-full h-full">
            <MapComponent />
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col align-center space-y-6 mt-5">
          {/* Address Card */}
          <div className="pt-8 text-center">
            <h2 className="text-3xl font-bold text-gray-200 mb-4">Address</h2>
            <p className="text-3xl text-black">
              5240 W. 31st Street, Cicero, Illinois
            </p>
        
          </div>

          {/* Hours Card */}
          <div className="pb-5 text-center">
            <h2 className="text-3xl font-bold text-gray-200 mb-4"> Hours</h2>
            <p className="text-3xl text-black-800">
              <strong className="text-black">Mon - Fri:</strong> 6:30 AM - 4:30 PM
            </p>
          </div>

          {/* Contact Card */}
          <div className="pb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-200 mb-4">Contact Us</h2>
            <p className="text-3xl text-black">
            (708) 652-6907
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
