'use client';

import React from 'react';
import Image from 'next/image';

const foodImages = [
  { src: '/icons/infant.png', alt: 'Delicious pasta' },
  { src: '/bg/desktop.jpg', alt: 'Sopa de fideo' },
  { src: '/bg/desktop.jpg', alt: 'Steamed broccoli' },
  { src: '/bg/desktop.jpg', alt: 'Lentil bean soup' },
  { src: '/bg/desktop.jpg', alt: 'Turkey meatball soup' },
  { src: '/bg/desktop.jpg', alt: 'Caldo de res' },
  { src: '/bg/desktop.jpg', alt: 'Morning pancakes' },
  { src: '/bg/desktop.jpg', alt: 'Oatmeal breakfast' },
];

const FoodGallery = () => {
  return (
    <div className="min-h-screen bg-[#d9d3c9]  flex flex-col items-center  py-16 px-20">
      <div className="text-center mb-15">
        <h1 className=" text-6xl font-extrabold text-gray-900 leading-snug">
          Our Delicious Home-Cooked Meals
        </h1>
        <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto">
          We take pride in providing nutritious, home-cooked meals for the children in our care. Below are some of the delicious foods we prepare.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl">
        {foodImages.map((food, index) => (
          <div key={index} className="w-full h-72 relative group">
            <Image 
              src={food.src} 
              alt={food.alt} 
              fill
              style={{objectFit: "cover"} }
             sizes="33vw"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg text-lg">
              {food.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
