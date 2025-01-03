'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const VisitUs = () => {
  const images = [
    '/assets/living-room.jpg',
    '/assets/room1-painting.jpg',
    '/assets/room1.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setTimeout(nextSlide, 5000);
    return () => clearTimeout(interval);
  }, [currentIndex]);

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900">Visit Our Center</h2>
          <p className="mt-4 text-lg text-gray-700">
            Discover a place where care and creativity come together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <Image 
                src={images[currentIndex]}
                alt="Daycare view"
                layout="responsive"
                width={700}
                height={500}
                className="object-cover w-full h-96 transition-transform duration-700 ease-in-out"
              /> 
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-indigo-200 hover:scale-110 transition duration-300"
              aria-label="Previous Slide"
            >
              <FaChevronLeft size={24} className="text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-indigo-200 hover:scale-110 transition duration-300"
              aria-label="Next Slide"
            >
              <FaChevronRight size={24} className="text-gray-800" />
            </button>
          </div>

          <div className="animate-fadeInRight transform transition duration-700 ease-in-out">
            <h3 className="text-5xl font-bold text-gray-900 leading-tight">
              A Warm Welcome Awaits
            </h3>
            <p className="mt-8 text-2xl text-gray-700 leading-relaxed">
              Our daycare is more than just a place—it’s a second home for your child. We create an environment where children feel safe, loved, and inspired to thrive.
            </p>
            <p className="mt-6 text-2xl text-gray-700 leading-relaxed">
              From fresh, home-cooked meals to engaging activities like arts and crafts, your child will experience a nurturing space designed to foster creativity and growth.
            </p>
            <button className="mt-12 px-10 py-5 bg-orange-500 text-white font-semibold rounded-full shadow-2xl hover:bg-orange-600 transform hover:scale-110 transition">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
