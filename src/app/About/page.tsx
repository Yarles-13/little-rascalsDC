import React from "react";
import CallToAction from './components/CallToAction';
import VisitUs from './components/VisitOurCenter'


const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#c8c4be] to-[#f4f0ea]">
        <div className="relative w-full h-[400px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/cafe-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
      
        </div>
      </div>

      

      

    </div>
  );
};

export default About;
