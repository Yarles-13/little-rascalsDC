"use client";
import React from "react";
import Border from "../shared/border/border"
import { FaGraduationCap, FaBookOpen, FaCalendarAlt } from 'react-icons/fa';

const InfoCard = ({ icon, title, description, buttonText }) => (
  <div className="relative text-center bg-white p-6 sm:p-8 shadow-2xl rounded-3xl transform transition duration-300 group hover:scale-105 hover:shadow-3xl border-4 border-fiestaRed hover:border-cactusGreen max-w-full sm:max-w-sm">
    <div className="relative inline-block mb-6">
      <div className="bg-sunYellow p-6 rounded-full border-8 border-terracotta shadow-md relative z-10">
        {icon}
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-0">
        <div className="w-2 h-40 bg-gray-500 rounded-full p-3 group-hover:animate-wiggle"></div>
      </div>
    </div>
    <h2 className="text-xl sm:text-3xl font-bold text-fiestaRed">{title}</h2>
    <p className="mt-4 text-base sm:text-lg text-gray-700">{description}</p>
    <button className="mt-6 bg-cactusGreen text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-terracotta">
      {buttonText}
    </button>
  </div>
);

const Homepage = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-br from-[#c8c4be] to-[#f4f0ea]  flex flex-wrap justify-center gap-6 md:justify-evenly px-6 py-10 sm:px-20">
        <InfoCard
          icon={<FaGraduationCap size={48} className="text-white" />}
          title="FOR PARENTS"
          description="See information about illness, medication, or what to bring when your child starts daycare."
          buttonText="Learn More"
        />
        
        <InfoCard
          icon={<FaBookOpen size={48} className="text-white" />}
          title="ENROLLMENT"
          description="Click here for links to enrollment forms and detailed instructions."
          buttonText="Forms"
        />
        
        <InfoCard
          icon={<FaCalendarAlt size={48} className="text-white" />}
          title="SCHEDULE A TOUR"
          description="Visit our daycare and experience the warm, family environment firsthand."
          buttonText="Learn More"
        />
      </div>
      <Border />
    </div>
  );
};

export default Homepage;
