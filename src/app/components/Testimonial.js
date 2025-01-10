// 'use client';
// import React from 'react';

// const testimonials = [
//   {
//     name: 'Azure F.',
//     date: 'May 2024',
//     description: 'Interface is easy to use and intuitive, all the info provided is very clear, they were my first credit card, I 100% recommend them.',
//     bgColor: 'bg-green-200',
//     cornerColor: 'bg-green-400',
//   },
//   {
//     name: 'Tina A.',
//     date: 'May 2024',
//     description: "It's a wonderful option when you don't have any credit history and they are giving cash back. I applied in different institutions but this was the only one that opened their door to me. Just check it out.",
//     bgColor: 'bg-yellow-200',
//     cornerColor: 'bg-yellow-400',
//   },
//   {
//     name: 'E. Henry',
//     date: 'Jun 2024',
//     description: 'Very simple and easy access. Thanks for making my life FREE from unnecessary STRESS.',
//     bgColor: 'bg-cyan-200',
//     cornerColor: 'bg-cyan-400',
//   },
// ];

// const Testimonial = () => {
//   return (
//     <div className="bg-gray-800 py-16 " style={{
//       backgroundImage: `url('/bg/bulletin.jpg')`,
//       backgroundRepeat: "no-repeat",
//       backgroundPosition: "center"
//     }}>
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">What Parents Are Saying</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className={`relative p-6 shadow-lg rounded-md ${testimonial.bgColor}`}
//               style={{
//                  // Tailwind replacement
//                 clipPath: 'polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 92% 8%, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)',
//               }}
//             >
//               {/* Folded Corner Effect */}
//               <div
//                 className={`absolute top-0 right-0 w-12 h-12 ${testimonial.cornerColor}`}
//                 style={{
//                   clipPath: 'polygon(0 0, 0% 100%, 100% 100%)',
//                 }}
//               />
//               {/* Content */}
//               <p className="text-lg text-gray-700 p-4">{testimonial.description}</p>
//               <div className="mt-8">
//                 <p className="font-bold text-gray-800">{testimonial.name}</p>
//                 <p className="text-sm text-gray-600">{testimonial.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

'use client';
import React from 'react';

const testimonials = [
  {
    name: 'Azure F.',
    date: 'May 2024',
    description: 'Interface is easy to use and intuitive, all the info provided is very clear, they were my first credit card, I 100% recommend them.',
    bgColor: 'bg-green-200',
    cornerColor: 'bg-green-400',
  },
  {
    name: 'Tina A.',
    date: 'May 2024',
    description: "It's a wonderful option when you don't have any credit history and they are giving cash back. I applied in different institutions but this was the only one that opened their door to me. Just check it out.",
    bgColor: 'bg-yellow-200',
    cornerColor: 'bg-yellow-400',
  },
  {
    name: 'E. Henry',
    date: 'Jun 2024',
    description: 'Very simple and easy access. Thanks for making my life FREE from unnecessary STRESS.',
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
        backgroundSize: 'cover', // Ensures the image covers the full area
      }}
    >
      {/* Black Header */}
      <div className="bg-black py-4">
        <h1 className="text-center text-4xl font-bold text-white py-5  text-6xl">Testimonials</h1>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-6 shadow-lg rounded-md ${testimonial.bgColor}`}
              style={{
                clipPath: 'polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 92% 8%, 100% 15%, 100% 85%, 100% 100%, 85% 100%, 15% 100%, 0 100%, 0% 85%)',
              }}
            >
              {/* Folded Corner Effect */}
              <div
                className={`absolute top-0 right-0 w-12 h-12 ${testimonial.cornerColor}`}
                style={{
                  clipPath: 'polygon(0 0, 0% 100%, 100% 100%)',
                }}
              />
              {/* Content */}
              <p className="text-lg text-gray-700 p-4">{testimonial.description}</p>
              <div className="mt-8">
                <p className="font-bold text-gray-800">{testimonial.name}</p>
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
