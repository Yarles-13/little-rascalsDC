"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const EnrollmentSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }, []);

  return (
    <div className="relative w-full flex flex-col overflow-hidden">
      
      {/* Full-Width Overlay Image (Hidden on Small and Medium Screens) */}
      <div className="absolute top-0 left-[8%] w-[1/3] h-full z-40 hidden md:block">
        <img 
          src="/assets/Cropped.png" 
          alt="child" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Yellow Block */}
      <div className="w-full bg-[#FC9E4F] p-12 flex justify-end relative z-20">
        <div className={`w-full md:w-1/2  p-5  transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-4">Now Enrolling</h2>
          <p className="text-lg mb-6">
            Please visit our Enrollment page for our enrollment process, forms & other parent forms.
          </p>
          <Link href={'/enroll'}>
          <button className="bg-[#fed8b9] text-black py-3 px-8 rounded-lg text-lg hover:bg-[#E87C3A]  transition">

ENROLL
</button></Link>
         
          
        </div>
      </div>

      {/* Orange Block */}
      <div className="w-full bg-[#EDD382] p-12 flex justify-end relative z-20">
    
        <div className={`w-full md:w-1/2 p-5 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-bold mb-4">Questions?</h2>
          <p className="text-lg text-black mb-6">
            Please complete our inquiry form if you are ready to inquire or join our waiting list.
          </p>
          <Link href={'/contact'}>
          <button className="bg-[#fed8b9] text-black py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition">
            CONTACT US
          </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSection;

