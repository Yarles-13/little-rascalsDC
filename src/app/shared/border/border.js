"use client";
import React from "react";
import Image from 'next/image';

const BorderComponent = () => {
  return (
    <div className="w-full h-[20px] relative">
      <Image
        src="/assets/border.jpg"
        alt="Decorative Border"
        layout="fill"  // Ensures the image fills the container
        objectFit="cover"  // Ensures the image scales correctly
      />
    </div>
  );
};

export default BorderComponent;
