"use client";
import React from "react";
import Image from 'next/image';

const BorderComponent = () => {
  return (
    <div className="w-full h-[20px] relative">
      <Image
        src="/assets/border2.jpg"
       
        alt="Decorative Border"
        layout="fill"  
        objectFit="cover"  
      />
    </div>
  );
};

export default BorderComponent;
