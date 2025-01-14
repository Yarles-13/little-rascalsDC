
'use client';
import React from 'react';

const testimonials = [
  {
    name: 'Azure F.',
    date: 'May 2024',
    description: 'write a review dhdshfakghakgaegaehkgharejkhgaerjhgajregajkrehgajerhgajehgjkaehgraehjhjk',
    bgColor: 'bg-green-200',
    cornerColor: 'bg-green-400',
  },
  {
    name: 'Tina A.',
    date: 'May 2024',
    description: 'wrtite e a reivew ',
    bgColor: 'bg-yellow-200',
    cornerColor: 'bg-yellow-400',
  },
  {
    name: 'E. Henry',
    date: 'Jun 2024',
    description: 'write a revieww',
    bgColor: 'bg-cyan-200',
    cornerColor: 'bg-cyan-400',
  },
];

const Testimonial = () => {
  return (
    <div
      className="bg-gray-800 pb-16 w-full"
      style={{
        backgroundImage: `url('/bg/bulletin.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Black Header */}
      <div className="bg-[#49b9f5] ">
   

        <h1 className="text-center text-6xl font-bold text-white py-5 ">Reviews</h1>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-3">
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:px-20 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
            key={index}
            className={`relative p-8 shadow-lg rounded-md ${testimonial.bgColor} w-full sm:w-[85%] mx-auto`}
            style={{
              clipPath: 'polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 92% 8%, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)',
            }}
            >
              {/* Folded Corner Effect */}
              <div
                className={`absolute w-14 h-14 ${testimonial.cornerColor}`}
                style={{
                  clipPath: 'polygon(0 0, 0% 100%, 100% 100%)',
                  top: '-13px', // Adjusted
                  right: '-10px', // Adjusted
                }}
              />
              {/* Content */}
              <p className="text-2xl text-gray-700 p-5 mb-10 flex flex-wrap">{testimonial.description}</p>

              {/* Bottom Left Name and Date */}
              <div className="absolute bottom-4 left-4">
                <p className="text-gray-800 text-lg font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

