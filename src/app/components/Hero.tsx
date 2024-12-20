"use client";

import React from "react";
import { useState, useEffect } from "react";

interface Slide {
  id: number,
  imageSrc: string,
  title: string,

}

const Hero: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      imageSrc: "https://images.unsplash.com/photo-1567405258710-35a7015252c0?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "We can't wait to meet you and your child ",

    },
    {
      id: 2,
      imageSrc: "https://images.unsplash.com/photo-1586694680938-9682c9e1f736?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "A Caring Environment Awaits",
 
    },
    {
      id: 3,
      imageSrc: "https://plus.unsplash.com/premium_photo-1663099230808-ff36ef2545fd?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Join Our Family Today",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-end h-full w-full items-center justify-center bg-black bg-opacity-50 relative">
            <div className=" text-white px-6 max-w-md  absolute right-20 py-5 sm: flex flex-col ">
              <h1 className="text-3xl font-bold mb-4">{slide.title}</h1>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition">
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
