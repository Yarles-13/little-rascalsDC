// "use client";
// import React from "react";
// import Image from "next/image";
// import Services from "./OurServices";

// const Collage: React.FC = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-2 px-6 md:px-20 py-10 min-h-screen">



//       <div className="col-span-1 md:col-span-4 row-span-7 bg-white p-8 md:p-12 rounded-lg shadow-2xl flex flex-col justify-center h-full w-full space-y-12">

//   {/* Section 1 - Header and Intro */}
//   <div>
//     <h2 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-cactusGreen leading-tight text-center">
//       Daycare Programs & Age Groups
//     </h2>
//     <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed text-center">
//       At Little Rascals Daycare, we nurture growth, creativity, and confidence through engaging programs for different age groups:
//     </p>
//   </div>

//   {/* Section 2 - Age Groups */}
//   <div className="space-y-8">
//     <h3 className="text-3xl font-bold text-terracotta mb-4 flex items-center">
//       <span className="inline-block w-8 h-8 bg-cactusGreen rounded-full mr-4"></span>
//       Programs by Age Group
//     </h3>
//     <ul className="list-none space-y-6 leading-relaxed">
//       <li className="flex items-start">
//         <div className="w-3 h-3 bg-cactusGreen rounded-full mt-2 mr-4"></div>
//         <p className="text-xl md:text-2xl text-gray-800">
//           <strong>6 months - 2 years:</strong> Sensory play, bonding activities, and music exploration.
//         </p>
//       </li>
//       <li className="flex items-start">
//         <div className="w-3 h-3 bg-cactusGreen rounded-full mt-2 mr-4"></div>
//         <p className="text-xl md:text-2xl text-gray-800">
//           <strong>3 - 5 years:</strong> Bilingual education, motor skills, and creative art sessions.
//         </p>
//       </li>
//       <li className="flex items-start">
//         <div className="w-3 h-3 bg-cactusGreen rounded-full mt-2 mr-4"></div>
//         <p className="text-xl md:text-2xl text-gray-800">
//           <strong>6 - 8 years:</strong> Interactive games, storytelling, and collaborative projects.
//         </p>
//       </li>
//       <li className="flex items-start">
//         <div className="w-3 h-3 bg-cactusGreen rounded-full mt-2 mr-4"></div>
//         <p className="text-xl md:text-2xl text-gray-800">
//           <strong>9 - 12 years:</strong> Leadership, skill-building, and academic preparation.
//         </p>
//       </li>
//     </ul>
//   </div>

//   {/* Section 3 - Why Choose Us */}
//   <div className="mt-6 border-t-2 border-gray-200 pt-12">
//     <h3 className="text-4xl font-bold text-terracotta mb-6 text-center">
//       Why Choose Us?
//     </h3>
//     <ul className="list-none space-y-6 leading-relaxed">
//       <li className="flex items-start bg-sunYellow bg-opacity-30 p-4 rounded-lg shadow-sm">
//         <div className="w-3 h-3 bg-cactusGreen rounded-full mt-2 mr-4"></div>
//         <p className="text-xl md:text-2xl text-gray-800">
//           <strong>Homemade Mexican Food:</strong> Warm, nutritious traditional meals.
//         </p>
//       </li>
//       <li className="flex items-start bg-sunYellow bg-opacity-30 p-4 rounded-lg shadow-sm">
//         <div className="w-3 h-3 bg-cactusGreen rounded-full mt-2 mr-4"></div>
//         <p className="text-xl md:text-2xl text-gray-800">
//           <strong>Transportation Services:</strong> Convenient pick-up and drop-off for families.
//         </p>
//       </li>
//       <li className="flex items-start bg-sunYellow bg-opacity-30 p-4 rounded-lg shadow-sm">
//         <div className="w-3 h-3 bg-cactusGreen rounded-full mt-2 mr-4"></div>
//         <p className="text-xl md:text-2xl text-gray-800">
//           <strong>Bilingual Education:</strong> Spanish learning through play and reading.
//         </p>
//       </li>
//     </ul>
//   </div>
// </div>







//       {/* Section 2 - Photo 1 */}
//       <div className="col-span-1 md:col-span-2 row-span-3 col-start-1 md:col-start-5 relative h-60 md:h-auto">
//         <Image
//           src="/wall-paintings/apple-picking.jpg"
//           alt="Daycare Play Area"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg"
//         />
//       </div>

//       {/* Section 3 - Photo 2 */}
//       <div className="col-span-1 md:col-span-2 row-span-3 col-start-1 md:col-start-7 relative h-60 md:h-auto">
//         <Image
//           src="/wall-paintings/elephant-and-monkey.jpg"
//           alt="Daycare Art Session"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg"
//         />
//       </div>

//       {/* Section 4 - Big Headline */}
//       <div className="col-span-1 md:col-span-4 row-span-2 col-start-1 md:col-start-5 row-start-4 flex items-center justify-center bg-terracotta rounded-lg shadow-lg p-6 md:p-0">
//         <h1 className="text-4xl md:text-7xl font-bold text-white tracking-wider text-center leading-relaxed uppercase">
//           ¡Bienvenidos a Nuestra Guardería!
//         </h1>
//       </div>

//       {/* Section 5 - Photo 3 */}
//       <div className="col-span-1 md:col-span-4 row-span-2 col-start-1 md:col-start-5 row-start-6 relative h-60 md:h-auto">
//         <Image
//           src="/wall-paintings/worm.jpg"
//           alt="Outdoor Activities"
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg"
//         />
//       </div>

//     </div>
//   );
// };

// export default Collage;
"use client";
import React from "react";
import Image from "next/image";
import Services from "./OurServices";
import Border from "../shared/border/border";

const Collage: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#c8c4be] to-[#f4f0ea] grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-2 px-6 md:px-20 py-40 min-h-screen">

        {/* Left Section - Daycare Info */}
        <div className="col-span-1 md:col-span-4 row-span-7 bg-white p-8 md:p-12 rounded-lg shadow-2xl flex flex-col justify-center h-full w-full space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-cactusGreen leading-tight text-center">
              Daycare Programs
            </h2>
          </div>

          <div className="space-y-6 text-center">
            <p className="text-2xl font-semibold text-cactusGreen">
              Serving Ages 6 months - 12 years
            </p>
          </div>

          <div className="mt-6 border-t-2 border-gray-200 pt-12">
            <h3 className="text-4xl font-bold text-terracotta mb-6 text-center">
              Why Choose Us?
            </h3>
            <ul className="list-none space-y-6 leading-relaxed">
              <li className="flex items-start bg-sunYellow bg-opacity-30 p-4 rounded-lg shadow-sm">
                <p className="text-xl md:text-2xl text-gray-800">
                  <strong>Homemade Mexican Food:</strong> Nutritious, home-cooked meals every day.
                </p>
              </li>
              <li className="flex items-start bg-sunYellow bg-opacity-30 p-4 rounded-lg shadow-sm">
                <p className="text-xl md:text-2xl text-gray-800">
                  <strong>Transportation Services:</strong> Convenient pick-up and drop-off.
                </p>
              </li>
              <li className="flex items-start bg-sunYellow bg-opacity-30 p-4 rounded-lg shadow-sm">
                <p className="text-xl md:text-2xl text-gray-800">
                  <strong>Bilingual Education:</strong> Spanish learning through play and activities.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 2 - Photo 1 */}
        <div className="col-span-1 md:col-span-2 row-span-3 col-start-1 md:col-start-5 relative h-60 md:h-auto">
          <Image
            src="/wall-paintings/apple-picking.jpg"
            alt="Daycare Play Area"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Section 3 - Photo 2 */}
        <div className="col-span-1 md:col-span-2 row-span-3 col-start-1 md:col-start-7 relative h-60 md:h-auto">
          <Image
            src="/wall-paintings/elephant-and-monkey.jpg"
            alt="Daycare Art Session"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Section 4 - Static Bienvenidos Section */}
        <div className="col-span-1 md:col-span-4 row-span-2 col-start-1 md:col-start-5 row-start-4 flex items-center justify-center bg-terracotta rounded-lg shadow-lg p-4 md:p-6 h-28 md:h-36">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center uppercase">
            ¡Bienvenidos!
          </h1>
        </div>

        {/* Section 5 - Photo 3 (Worm Image) */}
        <div className="col-span-1 md:col-span-4 row-span-3 col-start-1 md:col-start-5 row-start-5 relative h-96 md:h-auto">
          <Image
            src="/wall-paintings/worm.jpg"
            alt="Outdoor Activities"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

      </div>
      <Border />
    </>
  );
};

export default Collage;
