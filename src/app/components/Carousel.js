
"use client";

import React from "react";


const Hero = () => {
  const slide = {
    imageSrc: "/assets/home-outside.jpg",
  
  };

  return (
    <>
      <div className="relative h-[300px] w-full overflow-hidden py-40">
        <div
          className="absolute inset-0 opacity-85"
          style={{
            backgroundImage: `url(${slide.imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat",
          }}
        >
      
        </div>
      </div>
    </>
  );
};

export default Hero;
