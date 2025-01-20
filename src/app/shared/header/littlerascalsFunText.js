"use client";

import React from "react";

const LittleRascalsFunText = () => {

  const lettersWithColors = [
    { letter: "L", color: "#4285F4" }, // Blue
    { letter: "i", color: "#EA4335" }, // Red
    { letter: "t", color: "#FBBC05" }, // Yellow
    { letter: "t", color: "#34A853" }, // Green
    { letter: "l", color: "#4285F4" }, // Blue
    { letter: "e", color: "#EA4335" }, // Red
    { letter: " ", color: "transparent" }, // Space
    { letter: "R", color: "#FBBC05" }, // Yellow
    { letter: "a", color: "#34A853" }, // Green
    { letter: "s", color: "#4285F4" }, // Blue
    { letter: "c", color: "#EA4335" }, // Red
    { letter: "a", color: "#FBBC05" }, // Yellow
    { letter: "l", color: "#34A853" }, // Green
    { letter: "s", color: "#4285F4" }, // Blue
  ];

  return (
    <h1 className="text-4xl pb-4 flex justify-center items-center">
      {lettersWithColors.map((item, index) => (
        <span key={index} style={{ color: item.color }} className="font-bold">
          {item.letter}
        </span>
      ))}
    </h1>
  );
};

export default LittleRascalsFunText;
