
'use client';
import React from 'react';

const testimonials = [
  {
    name: 'Lino',
    date: 'May 2024',
    description: 'leave review ',
    bgColor: 'bg-green-200',
    cornerColor: 'bg-green-400',
  },
  {
    name: 'Yardley',
    date: 'May 2024',
    description: 'leave review',
    bgColor: 'bg-yellow-200',
    cornerColor: 'bg-yellow-400',
  },
  {
    name: 'Kevin',
    date: 'Jun 2024',
    description: 'leave review',
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
      <div className="bg-[#37d281] ">
   

        <h1 className="text-center text-6xl font-bold text-gray-200 py-5 ">Reviews</h1>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-3">
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:mx-20 lg:grid-cols-3 gap-10">
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
                  top: '-25px', // Adjusted
                  right: '0px', // Adjusted
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

