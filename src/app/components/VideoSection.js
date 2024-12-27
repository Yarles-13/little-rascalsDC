"use client";
import React from "react";
import Link from 'next/link'

const VideoBackground = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: 'brightness(60%)' }} // Optional darker overlay
      >
        <source src="/assets/drake.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-12">
        <h1 className="text-6xl font-extrabold leading-tight drop-shadow-lg">
          Welcome to Little Rascals
        </h1>
        <p className="text-2xl mt-4 drop-shadow-md max-w-2xl">
          A nurturing environment for children to learn, grow, and play.
        </p>

        <Link href="/schedule">
          <button className="mt-8 px-8 py-4 bg-[#FF7F50] text-white font-semibold rounded-lg shadow-lg hover:bg-[#FFD166] hover:scale-105 transition-all duration-300">
            Schedule a Visit
          </button>
        </Link>
      </div>
    </section>
  );
};

export default VideoBackground;
