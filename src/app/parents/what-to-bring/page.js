'use client';

import React from 'react';
import Image from 'next/image';

const WhatToBring = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-32">
      <div className=" w-full">
        {/* Banner Image */}
        <div className="w-full h-60 mb-24 relative">
          <Image 
            src="/path/to/your-closet-image.jpg" 
            alt="Daycare Closet with Supplies" 
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <div className="text-center mb-24">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-snug">What to Bring</h1>
          <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto">
            Please ensure your child has the necessary items for a comfortable and safe day at our daycare. Below is a list of items to bring.
          </p>
        </div>

        <section className=" max-w-6xl mx-auto bg-white p-12 rounded-lg mb-20">
          <h2 className="text-4xl font-bold text-cactusGreen mb-12 text-center">
            Essential Items
          </h2>
          <ul className="text-xl space-y-8 text-gray-800 list-disc pl-10">
            <li>Extra change of clothes (to leave at school).</li>
            <li>Labeled leak/spill-proof bottle of water (brought daily).</li>
            <li>Box of diapers (for non-potty-trained children) to leave with the teacher.</li>
            <li>Labeled outerwear for cooler weather.</li>
            <li>Medications (with original packaging and completed forms) for daily use.</li>
            
          </ul>
        </section>
      </div>
    </div>
  );
};

export default WhatToBring;
