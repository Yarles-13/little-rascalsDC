'use client';

import React from 'react';

const foodImages = [
  { src: '/food/caldo-de-res.jpg', alt: 'Caldo De Res' },
  { src: '/assets/border2.jpg', alt: 'Fresh Fruit Platter' },
  { src: '/assets/living-room.jpg', alt: 'Vegetable Soup' },
  { src: '/assets/room1.jpg', alt: 'Grilled Cheese Sandwich' },
  { src: '/assets/desktop.jpg', alt: 'Fluffy Pancakes' },
  { src: '/assets/bg-photo2.jpg', alt: 'Turkey Meatball Soup' },
  { src: '/assets/bulletin.jpg', alt: 'Steamed Broccoli' },
];

const FoodGallery = () => {
  return (
    <div className="min-h-screen bg-[#f8fbf4] flex flex-col items-center  mb-20">
      {/* Hero Section */}
      <div
        className="w-full h-[500px] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${foodImages[0].src})` }} // Static Image for SSR
      >
        
        <h1 className="text-7xl mt-4 bg-black bg-opacity-50 px-6 py-2 rounded-lg">
     Hecho en Casa
        </h1>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 max-w-7xl">
        {foodImages.map((food, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div
              className="w-full h-60 bg-cover bg-center"
              style={{ backgroundImage: `url(${food.src})` }}
            ></div>
            <div className="bg-white text-center py-4">
              <p className="text-lg font-semibold text-gray-800">{food.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;

