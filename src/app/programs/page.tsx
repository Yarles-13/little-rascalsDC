import React from "react";

const ScheduleVisit: React.FC = () => {
  return (
    <div className="relative  flex flex-col items-center justify-center px-4 py-10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 "></div>

      {/* Content Container */}
      <div className="relative bg-white shadow-lg rounded-lg w-full max-w-4xl p-6 md:p-10 z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-800 mb-4">
          Schedule a Visit to Little Rascals Daycare
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Use the calendar below to select a time that works best for you. We
          look forward to meeting you!
        </p>
        {/* Embedding Calendly via iframe */}
        <iframe
          src="https://calendly.com/your-calendly-link"
          title="Schedule a Visit"
          className="w-full h-[600px] border-none rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default ScheduleVisit;
