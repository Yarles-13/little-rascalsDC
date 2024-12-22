'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa"; // Chevron icon for navigation

const VisitUs = () => {
  const images = [
    '/assets/living-room.jpg',
    '/assets/room1-painting.jpg',
    '/assets/room1.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Auto slide every 4000ms
  useEffect(() => {
    const interval = setTimeout(nextSlide, 4000);
    return () => clearTimeout(interval);
  }, [currentIndex]);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Visit Our Center</h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover a place where care and creativity come together.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 md:order-1">
            <div className="overflow-hidden rounded-lg shadow-lg relative transition-all duration-700 ease-in-out">
              <Image 
                src={images[currentIndex]}
                alt="Daycare view"
                layout="responsive"
                width={600}
                height={400}
                className="object-cover w-full h-96 transition-opacity duration-700 ease-in-out"
              /> 
            </div>

            {/* Decorative Shape */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
              <button
                onClick={nextSlide}
                className="bg-white p-3 rounded-full shadow-lg hover:bg-blue-200 hover:scale-110 hover:shadow-xl transform transition-all duration-300 ease-in-out active:scale-90"
                aria-label="Next Slide"
              >
                <FaChevronRight size={32} className="text-gray-800" />
              </button>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-semibold text-gray-800">
              A Warm Welcome Awaits
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our daycare is more than just a place—it’s a second home for your
              child. Located in a warm and inviting house, we’ve created an
              environment where children feel safe, loved, and inspired to
              thrive.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              From fresh, home-cooked meals to engaging activities like arts and
              crafts, your child will experience a nurturing space designed to
              foster creativity, independence, and growth.
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
