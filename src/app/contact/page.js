"use client";
import React, { useState } from "react";
import FAQSection from "../contact/forms/FAQ";
import Gallery from "../enroll/Gallery"
import ScheduleVisit from "../contact/forms/ScheduleVisit"

const ContactPage = () => {
 
  
  return (
    <>
      {/* Background Video Section */}
      <div className="relative w-full h-[400px] overflow-hidden ">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/cafe-video.mp4" type="video/mp4" />
        </video>
        <div className=" absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Schedule a Visit</h1>
          
        </div>
      </div>

      <div className="bg-black py-16 px-40 flex flex-col items-center justify-center  space-y-12">
     
        <h1 className="text-4xl text-white font-bold">Fill out this form to set up an appointment </h1>
        <ScheduleVisit />
        <Gallery />
      </div>
    </>
  );
};

export default ContactPage;
