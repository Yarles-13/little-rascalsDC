"use client";
import React from "react";

const ForParents = () => {
  return (
    <div className="bg-gradient-to-br from-[#c8c4be] to-[#f4f0ea] min-h-screen px-20 sm:p-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-cactusGreen">Welcome Parents!</h1>
        <p className="text-xl text-gray-700 mt-4">
          Everything You Need to Know About Your Child's Day at Little Rascals Daycare.
        </p>
      </header>

      {/* Daily Schedule Section */}
      

     

      

      {/* Emergency Contact Section */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-4xl font-bold text-cactusGreen mb-8 text-center">
          Emergency Contact Information
        </h2>

        <div className="text-lg text-gray-800 space-y-6 leading-relaxed">
          <p>
            Ensure that emergency contact information is up to date and that listed
            contacts are aware and able to pick up your child if necessary.
          </p>
          <p>
            If we cannot contact a parent, we will go down the list of emergency
            contacts provided. Immediate pick-up within 30 minutes is required upon
            notification.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ForParents;
