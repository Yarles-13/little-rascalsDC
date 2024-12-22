'use client'
import React, { useEffect, useRef, useState } from "react";

const OurTeam = () => {
  const containerRef = useRef(null);
  const [imageOffset, setImageOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      // Get the container's position relative to the viewport
      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Calculate the scroll position relative to the container
      if (containerTop < windowHeight && containerTop > -container.offsetHeight) {
        const scrolledRatio =
          (windowHeight - containerTop) / (windowHeight + container.offsetHeight);
        setImageOffset(scrolledRatio * 50); // Adjust the multiplier for the movement amount
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative py-16 overflow-hidden bg-gray-800"
      ref={containerRef}
    >
      {/* Background Container */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving Image */}
       
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/70"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-16 lg:px-24 z-10">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl font-extrabold text-gray-200">Our Team</h2>
          <p className="mt-4 text-gray-300 font-medium">
            Meet the wonderful individuals who create magic every day.
          </p>
        </div>

        {/* Team Grid */}
        <div className=" grid grid-cols-2 gap-8">
          {[
            {
              name: "Rebeca Frausto",
              role: "Owner",
              image: "https://via.placeholder.com/150",
            },
            {
              name: "Rosa Avila",
              role: "Assistant Caregiver",
              image: "https://via.placeholder.com/150",
            }
        
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1 group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={`${member.name}`}
                  className="w-full h-56 object-cover rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-gray-800/20 group-hover:bg-gray-800/40 transition-all duration-300"></div>
              </div>
              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-500 mt-2 group-hover:text-gray-400 transition-colors duration-300">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
