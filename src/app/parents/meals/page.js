// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const foodImages = [
//   { src: '/food/caldo-de-res.jpg', alt: 'Caldo De Res' },
//   { src: '/food/albondigas.jpg', alt: 'Albondigas' },
//   { src: '/food/fideo.jpg', alt: 'Fideo' },
//   { src: '/food/red-rice.jpg', alt: 'Rice' },
//   { src: '/food/red-rice.jpg', alt: 'Rice' },
// ];

// const FoodGallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
//     }, 4000); 
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className=" bg-[#f8fbf4]">
//       {/* Hero Section with Image Slider */}
//       <div className="relative w-full h-[600px] overflow-hidden">
//         {foodImages.map((food, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
//               }`}
//           >
//             <Image
//               src={food.src}
//               alt={food.alt}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}

//       </div>

//       <h1 className=" text-center  text-6xl md:text-7xl font-bold bg-terracotta px-8 py-4 text-white rounded-lg shadow-lg">
//         Hecho en Casa
//       </h1>

//       <div className="mt-12 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-20">
//         {/* Allergy Info */}
//         <div className="flex flex-col items-center text-center">
//           {/* Allergy Icon */}
//           <div className="w-16 h-16 mb-4 animate-bounce">
//             <Image src="/icons/allergy.png" alt="Food Allergy Icon" className="w-full h-full object-contain" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Allergies</h2>
//           <p className="text-lg text-gray-600">
//             We carefully account for allergies to ensure the safety and well-being of every child.
//           </p>
//         </div>

//         {/* Daily Meals */}
//         <div className="flex flex-col items-center text-center">
//           {/* Daily Meals Icon */}
//           <div className="w-16 h-16 mb-4 animate-bounce">
//             <Image src="/icons/food-daily.png" alt="Daily Meals Icon" className="w-full h-full object-contain" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Daily Meals</h2>
//           <p className="text-lg text-gray-600">
//             We serve freshly prepared breakfast and lunch daily with nutritious, delicious options.
//           </p>
//         </div>

//         {/* Infant Formula */}
//         <div className="flex flex-col items-center text-center">
//           {/* Infant Formula Icon */}
//           <div className="w-16 h-16 mb-4 animate-bounce">
//             <Image src="/icons/formula-bottle.png" alt="Infant Formula Icon" className="w-full h-full object-contain" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Infant Formula</h2>
//           <p className="text-lg text-gray-600">
//             We feed formula provided by parents to ensure every infant’s unique needs are met.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodGallery;

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const foodImages = [

//   { src: "/food/albondigas.jpg", alt: "lunch time" },
//   { src: "/food/fideo.jpg", alt: "Fideo" },
//   { src: "/food/red-rice.jpg", alt: "rice" },
//   { src: "/food/pasta.jpg", alt: "pasta" },
//   { src: "/food/fruit-salad.jpg", alt: "fruit" },
//   { src: "/action-shots/mom-feeding-kids.png", alt: "lunch time" },
// ];

// const FoodGallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % foodImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-[#f8fbf4]">
//       {/* Hero Section with Image Slider */}
//       <div className="relative w-full h-[600px] overflow-hidden">
//         {foodImages.map((food, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             <Image
//               src={food.src}
//               alt={food.alt}
//               layout="fill" // Makes the image fill the container
//               objectFit="cover" // Ensures the image maintains aspect ratio and fills
//               className="transition-transform duration-300"
//             />
//           </div>
//         ))}
//       </div>

//       <h1 className="text-center text-6xl md:text-7xl font-bold bg-terracotta px-8 py-4 text-white rounded-lg shadow-lg">
//         Hecho en Casa
//       </h1>

//       <div className="mt-12 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-20">
//         {/* Allergy Info */}
//         <div className="flex flex-col items-center text-center">
//           {/* Allergy Icon */}
//           <div className="w-16 h-16 mb-4 animate-bounce relative">
//             <Image
//               src="/icons/allergy.png"
//               alt="Food Allergy Icon"
//               layout="fill"
//               objectFit="contain" // Maintains image aspect ratio inside its container
//               className="rounded-md"
//             />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Allergies</h2>
//           <p className="text-lg text-gray-600">
//             We carefully account for allergies to ensure the safety and
//             well-being of every child.
//           </p>
//         </div>

//         {/* Daily Meals */}
//         <div className="flex flex-col items-center text-center">
//           {/* Daily Meals Icon */}
//           <div className="w-16 h-16 mb-4 animate-bounce relative">
//             <Image
//               src="/icons/food-daily.png"
//               alt="Daily Meals Icon"
//               layout="fill"
//               objectFit="contain"
//               className="rounded-md"
//             />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Daily Meals</h2>
//           <p className="text-lg text-gray-600">
//             We serve freshly prepared breakfast and lunch daily with nutritious,
//             delicious options.
//           </p>
//         </div>

//         {/* Infant Formula */}
//         <div className="flex flex-col items-center text-center">
//           {/* Infant Formula Icon */}
//           <div className="w-16 h-16 mb-4 animate-bounce relative">
//             <Image
//               src="/icons/formula-bottle.png"
//               alt="Infant Formula Icon"
//               layout="fill"
//               objectFit="contain"
//               className="rounded-md"
//             />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Infant Formula
//           </h2>
//           <p className="text-lg text-gray-600">
//             We feed formula provided by parents to ensure every infant’s unique
//             needs are met.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodGallery;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const foodImages = [
  { src: "/food/albondigas.jpg", alt: "Albondigas" },
  { src: "/food/fideo.jpg", alt: "Fideo" },
  { src: "/food/red-rice.jpg", alt: "Rice" },
  { src: "/food/pasta.jpg", alt: "Pasta" },
  { src: "/food/fruit-salad.jpg", alt: "Fruit Salad" },
  { src: "/food/caldo-de-res.jpg", alt: "Lunch Time" },
];

const FoodGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 3; // Show 3 images at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + imagesPerSlide) % foodImages.length);
    }, 4000); // Image transition every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => [
    foodImages[currentIndex % foodImages.length],
    foodImages[(currentIndex + 1) % foodImages.length],
    foodImages[(currentIndex + 2) % foodImages.length],
  ];

  return (
    <div className="bg-[#f8fbf4]">
      <h1 className="text-center text-6xl md:text-7xl font-bold bg-terracotta px-8 py-4 text-white shadow-lg">
        Hecho en Casa
      </h1>

      {/* Food Image Collage */}
      <div className="relative max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {getVisibleImages().map((food, index) => (
          <div key={index} className="relative w-full h-[400px] overflow-hidden">
            <Image
              src={food.src}
              alt={food.alt}
              fill // New Next.js 13+ approach
              className="object-cover" // Ensures the image fills the container properly
            />
          </div>
        ))}
      </div>

      {/* Allergy, Meals, and Infant Formula Sections */}
      <div className="mt-12 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-20">
        {/* Allergy Info */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4 animate-bounce relative">
            <Image src="/icons/allergy.png" alt="Food Allergy Icon" fill className="object-contain rounded-md" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Allergies</h2>
          <p className="text-lg text-gray-600">
            We carefully account for allergies to ensure the safety and well-being of every child.
          </p>
        </div>

        {/* Daily Meals */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4 animate-bounce relative">
            <Image src="/icons/food-daily.png" alt="Daily Meals Icon" fill className="object-contain rounded-md" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Daily Meals</h2>
          <p className="text-lg text-gray-600">
            We serve freshly prepared breakfast and lunch daily with nutritious, delicious options.
          </p>
        </div>

        {/* Infant Formula */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-4 animate-bounce relative">
            <Image src="/icons/formula-bottle.png" alt="Infant Formula Icon" fill className="object-contain rounded-md" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Infant Formula</h2>
          <p className="text-lg text-gray-600">
            We feed formula provided by parents to ensure every infant’s unique needs are met.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodGallery;
