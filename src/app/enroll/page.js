// 'use client';

// import React from 'react';

// const Enroll = () => {
//   return (
//     <div className="min-h-screen bg-gray-300 flex flex-col items-center py-10">
//       <div className="max-w-6xl w-full">
//         <div className="text-center  mb-20 ">
//           <h1 className="text-6xl font-extrabold text-gray-900 leading-snug">Child Care Assistance (CCAP) Forms</h1>
//           <p className="text-2xl text-gray-600 mt-8 max-w-3xl mx-auto">
//             Please complete the required application form before your visit to our daycare. Access the CCAP application and related forms below to get started.
//           </p>
//         </div>

//         <div className="flex flex-col md:flex-row items-center justify-center gap-20">
//           <img 
//             src="/assets/MHGP1.jpg" 
//             alt="Mother and child filling forms" 
//             className="w-full md:w-[40%] rounded-lg shadow-2xl" 
//           />

//           <div className="text-left max-w-2xl">
//             <h2 className="text-4xl font-bold text-gray-800 leading-relaxed">What to do</h2>
//             <ul className="list-disc list-outside mt-8 space-y-6 text-xl text-gray-700 pl-6">
//               <li>Download forms below</li>
//               <li>Fill out all forms</li>
//               <li>Bring printed copies to visit</li>
//             </ul>
    
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
//           <div className="bg-gray-200 p-12 rounded-lg">
//             <h2 className="text-4xl font-semibold text-black">English </h2>
//             <p className="text-xl text-gray-700 mt-6">Download and complete forms before visit</p>
//             <a
//               href="https://www.actforchildren.org/wp-content/uploads/2024/03/IL444-3455-01242017-English-App-.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-10 inline-block bg-blue-600 text-white text-2xl px-10 py-5 rounded-lg hover:bg-blue-700 transition"
//             >
//               Download 
//             </a>
//           </div>

//           <div className="bg-gray-200 p-12 rounded-lg">
//             <h2 className="text-4xl font-semibold text-black"> Español</h2>
//             <p className="text-xl text-gray-700 mt-6">
// Descarga y completa antes de la visita.
// </p>
//             <a
//               href="https://www.actforchildren.org/wp-content/uploads/2024/04/CCAPApplication-Spanish.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-10 inline-block bg-blue-600  text-white text-2xl px-10 py-5 rounded-lg hover:bg-blue-700 transition"
//             >
//               Descargar 
//             </a>
//           </div>
         
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default Enroll;

//option with schedule button 
'use client';

import React from 'react';
import Link from 'next/link';
import FAQ from "../contact/forms/FAQ"

const Enroll = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-snug">
            Child Care Assistance (CCAP) Forms
          </h1>
          <p className="text-2xl text-gray-600 mt-8 max-w-3xl mx-auto">
            Please complete the required application form before your visit to our daycare. Access the CCAP application and related forms below to get started.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
          <img
            src="/assets/MHGP1.jpg"
            alt="Mother and child filling forms"
            className="w-full md:w-[40%] rounded-lg shadow-2xl"
          />

          <div className="text-left max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-800 leading-relaxed">
              What to do
            </h2>
            <ul className="list-disc list-outside mt-8 space-y-6 text-xl text-gray-700 pl-6">
              <li>Download forms below</li>
              <li>Fill out all forms</li>
              <li>Bring printed copies to visit</li>
            </ul>

            {/* Schedule Visit Button */}
            <Link href="/contact">
               
               <button className="mt-8 inline-block bg-blue-600 text-white text-2xl font-semibold px-10 py-5 rounded-lg shadow-lg hover:bg-blue-700 transition">Schedule a Visit</button> 
              
            </Link>
          </div>
        </div>

        {/* Forms Download Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          {/* English Form */}
          <div className="bg-gray-200 p-12 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-black">English</h2>
            <p className="text-xl text-gray-700 mt-6">
              Download and complete forms before your visit.
            </p>
            <a
              href="https://www.actforchildren.org/wp-content/uploads/2024/03/IL444-3455-01242017-English-App-.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-green-600 text-white text-2xl px-10 py-5 rounded-lg hover:bg-green-700 transition"
            >
              Download
            </a>
          </div>

          {/* Spanish Form */}
          <div className="bg-gray-200 p-12 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-black">Español</h2>
            <p className="text-xl text-gray-700 mt-6">
              Descarga y completa antes de la visita.
            </p>
            <a
              href="https://www.actforchildren.org/wp-content/uploads/2024/04/CCAPApplication-Spanish.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-green-600 text-white text-2xl px-10 py-5 rounded-lg hover:bg-green-700 transition"
            >
              Descargar
            </a>
          </div>
        </div>
      </div>
       {/* FAQ Section */}
         <div className="w-full max-w-6xl">
          <FAQ />
        </div> 
    </div>
  );
};

export default Enroll;
