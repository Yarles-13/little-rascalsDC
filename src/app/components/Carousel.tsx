"use client";

import React, { useState, useEffect } from "react";
import { Permanent_Marker } from "next/font/google"; 
import Border from "../shared/border/border";



interface Slide {
  id: number;
  imageSrc: string;
  title: string;
}

const Hero: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      imageSrc: "/assets/room1-painting.jpg",
      title: "Home-Loving Childcare",
    },
    {
      id: 2,
      imageSrc: "/assets/home-outside.jpg",
      title: "Located in Cicero!",
    },
    {
      id: 3,
      imageSrc: "/wall-paintings/farm.jpg",
      title: "Playful Learning Every Day",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
    <div className="relative h-[850px] w-full overflow-hidden py-40">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-95" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",  // Ensures the image centers
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-end h-full w-full items-center justify-center bg-black bg-opacity-50 relative">
            <div
              className={`text-white px-6 max-w-lg text-center py-5 flex flex-col items-center `}
            >
              <h1 className="text-5xl md:text-7xl mb-6 leading-snug">
                {slide.title}
              </h1>
              
            </div>
          </div>
          
        </div>
        
      ))}
      
    </div>
   
    </>
  );
};

export default Hero;
