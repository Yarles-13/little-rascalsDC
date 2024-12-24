"use client";

import React, { useState, useEffect } from "react";
import { Permanent_Marker } from "next/font/google"; 

// Import Crayon-Like Font
const crayonFont = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface Slide {
  id: number;
  imageSrc: string;
  title: string;
}

const Hero: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      imageSrc: "/assets/room1.jpg",
      title: "Home-Loving Childcare",
    },
    {
      id: 2,
      imageSrc: "/assets/living-room.jpg",
      title: "Sharing Cultures Bilingually",
    },
    {
      id: 3,
      imageSrc: "/assets/room1-painting.jpg",
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
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-95" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-end h-full w-full items-center justify-center bg-black bg-opacity-50 relative">
            <div
              className={`text-white px-6 max-w-lg text-center py-5 flex flex-col items-center ${crayonFont.className}`}
            >
              <h1 className="text-5xl md:text-7xl mb-6 leading-snug">
                {slide.title}
              </h1>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-md shadow-lg hover:bg-yellow-500 transition animate-shake">
                SCHEDULE A TOUR
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
