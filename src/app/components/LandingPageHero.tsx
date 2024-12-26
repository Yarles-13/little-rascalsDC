"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const randomPositions = [
  { top: "60%", left: "10%" },  
  { top: "45%", left: "24%" },  
  { top: "42%", left: "60%" },  
  { top: "65%", left: "70%" },  
];

const HeroSection = () => {
  const [fadeIn, setFadeIn] = useState([false, false, false, false]);

  const croppedImages = [
    "/assets/Cropped.png",
    "/assets/Cropped.png",
    "/assets/Cropped.png",
    "/assets/Cropped.png",
  ];

  useEffect(() => {
    croppedImages.forEach((_, index) => {
      setTimeout(() => {
        setFadeIn((prev) => {
          const newFadeIn = [...prev];
          newFadeIn[index] = true;
          return newFadeIn;
        });
      }, index * 400); // Staggered fade-in (Domino effect)
    });
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/landscape2.jpg"
        alt="Background Image"
        fill
        className="w-full h-full object-cover"
        priority
      />

      {/* Cropped Images - Now visible on all screen sizes */}
      {croppedImages.map((src, index) => (
        <div
          key={index}
          className={`absolute transition-transform duration-700 ease-in-out ${
            fadeIn[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            top: randomPositions[index].top,
            left: randomPositions[index].left,
          }}
        >
          <Image
            src={src}
            alt={`Child ${index + 1}`}
            width={index === 0 || index === croppedImages.length - 1 ? 220 : 150}
            height={index === 0 || index === croppedImages.length - 1 ? 280 : 200}
            className="object-contain rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
