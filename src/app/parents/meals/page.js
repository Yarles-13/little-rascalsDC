'use client';

import React from 'react';
import Image from 'next/image';

const foodImages = [
  { src: '/images/pasta.jpg', alt: 'Delicious pasta' },
  { src: '/images/sopa_de_fideo.jpg', alt: 'Sopa de fideo' },
  { src: '/images/broccoli.jpg', alt: 'Steamed broccoli' },
  { src: '/images/lentil_soup.jpg', alt: 'Lentil bean soup' },
  { src: '/images/turkey_meatball.jpg', alt: 'Turkey meatball soup' },
  { src: '/images/caldo_de_res.jpg', alt: 'Caldo de res' },
  { src: '/images/pancakes.jpg', alt: 'Morning pancakes' },
  { src: '/images/oatmeal.jpg', alt: 'Oatmeal breakfast' },
];

const FoodGallery = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center mt-40 py-16 px-20">
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
              layout="fill" 
              objectFit="cover" 
              className=""
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
