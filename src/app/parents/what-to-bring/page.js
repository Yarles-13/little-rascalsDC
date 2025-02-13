// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { FaTshirt, FaBaby, FaThermometer, FaUmbrella } from 'react-icons/fa';

// const WhatToBring = () => {
//   return (
//     <div className="min-h-screen bg-[#f8fbf4] flex flex-col items-center">
//       {/* Full-Width Content */}
//       <div className="w-full mx-auto">
//         {/* Banner Section */}
//         <div className="relative w-full h-[40vh] mb-16">
//           <Image
//             src="/assets/locker-room.jpg"
//             alt="Daycare Closet with Supplies"
//             fill
//             style={{ objectFit: 'cover' }}
//             className="rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Header Section */}
//         <div className="text-center mb-16 px-4">
//           <h1 className="text-6xl font-extrabold text-gray-800">What to Bring</h1>
//           <p className="text-2xl text-gray-600 mt-6 max-w-4xl mx-auto">
//             Help your child have a comfortable and enjoyable day at our daycare! Use this checklist to prepare the essential items.
//           </p>
//         </div>

//         {/* Essentials Section */}

//          <section className="max-w-6xl mx-auto bg-white p-12 rounded-lg shadow-lg ">
//           <div className="flex flex-col justify-center space-y-12 px-4">
            
//             <div className="flex items-center space-x-6">
//               <FaTshirt className="text-6xl text-[#ff7043]" />
//               <div>
//                 <p className="text-3xl font-bold text-gray-800">Extra Change of Clothes</p>
//                 <p className="text-xl text-gray-600">Leave a full set of labeled clothes for emergencies.</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-6">
//               <FaBaby className="text-6xl text-[#ff7043]" />
//               <div>
//                 <p className="text-3xl font-bold text-gray-800">Diapers</p>
//                 <p className="text-xl text-gray-600">Bring a box of diapers for non-potty-trained children, labeled for easy storage.</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-6">
//               <FaThermometer className="text-6xl text-[#ff7043]" />
//               <div>
//                 <p className="text-3xl font-bold text-gray-800">Medications</p>
//                 <p className="text-xl text-gray-600">Ensure medications are in their original packaging and accompanied by completed forms.</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-6">
//               <FaUmbrella className="text-6xl text-[#ff7043]" />
//               <div>
//                 <p className="text-3xl font-bold text-gray-800">Outerwear</p>
//                 <p className="text-xl text-gray-600">Provide jackets, hats, or other weather-appropriate clothing, all labeled.</p>
//               </div>
//             </div>

//             <div className="flex items-center space-x-6">
//               <FaTshirt className="text-6xl text-[#ff7043]" />
//               <div>
//                 <p className="text-3xl font-bold text-gray-800">Water Bottle</p>
//                 <p className="text-xl text-gray-600">Bring a labeled, leak-proof water bottle daily.</p>
//               </div>
//             </div>
//           </div>
//         </section> 



//       </div>
//     </div>
//   );
// };

// export default WhatToBring;

"use client";

import React from "react";
import Image from "next/image";
import { FaTshirt, FaBaby, FaThermometer, FaUmbrella } from "react-icons/fa";

const WhatToBring = () => {
  return (
    <div className="min-h-screen bg-[#f8fbf4] flex flex-col items-center">
      {/* Full-Width Content */}
      <div className="w-full mx-auto">
        {/* Banner Section */}
        <div className="relative w-full h-[30vh] sm:h-[40vh] mb-12">
          <Image
            src="/assets/locker-room.jpg"
            alt="Daycare Closet with Supplies"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Header Section */}
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800">What to Bring</h1>
          <p className="text-lg sm:text-2xl text-gray-600 mt-6 max-w-4xl mx-auto">
            Help your child have a comfortable and enjoyable day at our daycare! Use this checklist to prepare the essential items.
          </p>
        </div>

        {/* Essentials Section */}
        <section className="max-w-4xl mx-auto bg-white p-6 sm:p-12 rounded-lg shadow-lg mb-1">
          <div className="flex flex-col space-y-8">
            {/* Items */}
            {[
              {
                icon: <FaTshirt className="text-4xl sm:text-6xl text-[#ff7043]" />,
                title: "Extra Change of Clothes",
                description: "Leave a full set of labeled clothes for emergencies.",
              },
              {
                icon: <FaBaby className="text-4xl sm:text-6xl text-[#ff7043]" />,
                title: "Diapers",
                description:
                  "Bring a box of diapers, labeled",
              },
              {
                icon: <FaThermometer className="text-4xl sm:text-6xl text-[#ff7043]" />,
                title: "Medicine",
                description:
                  "label medications with name",
              },
              {
                icon: <FaUmbrella className="text-4xl sm:text-6xl text-[#ff7043]" />,
                title: "Outerwear",
                description:
                  "Provide jackets, hats, boots, etc - labeled.",
              },
              {
                icon: <FaTshirt className="text-4xl sm:text-6xl text-[#ff7043]" />,
                title: "Water Bottle (optional)",
                description: "leak-proof water bottle, labeled",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start sm:items-center space-x-4 sm:space-x-6 p-4 sm:p-6 bg-[#f8f8f8] rounded-lg shadow-md "
              >
                {item.icon}
                <div>
                  <p className="text-xl sm:text-3xl font-bold text-gray-800">{item.title}</p>
                  <p className="text-base sm:text-xl text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatToBring;
