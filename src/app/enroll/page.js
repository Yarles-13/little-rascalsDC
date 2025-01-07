'use client';

import React from 'react';

const Enroll = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-32 px-10">
      <div className="max-w-6xl w-full">
        <div className="text-center mt-40 mb-20 ">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-snug">Child Care Assistance (CCAP) Forms</h1>
          <p className="text-2xl text-gray-600 mt-8 max-w-3xl mx-auto">
            Please complete the required application form before your visit to our daycare. Access the CCAP application and related forms below to get started.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
          <img 
            src="/assets/MHGP1.jpg" 
            alt="Mother and child filling forms" 
            className="w-full md:w-[40%] rounded-lg shadow-2xl" 
          />

          <div className="text-left max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-800 leading-relaxed">What to do</h2>
            <ul className="list-disc list-outside mt-8 space-y-6 text-xl text-gray-700 pl-6">
              <li>Download forms below</li>
              <li>Fill out all forms</li>
              <li>Bring printed copies to visit</li>
            </ul>
    
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-40">
          <div className="bg-gray-200 p-12 rounded-lg">
            <h2 className="text-4xl font-semibold text-black">English Application</h2>
            <p className="text-xl text-gray-700 mt-6">Download the application form in English.</p>
            <a
              href="https://www.actforchildren.org/wp-content/uploads/2024/03/IL444-3455-01242017-English-App-.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-blue-600 text-white text-2xl px-10 py-5 rounded-lg hover:bg-blue-700 transition"
            >
              Download (English)
            </a>
          </div>

          <div className="bg-gray-200 p-12 rounded-lg">
            <h2 className="text-4xl font-semibold text-black">Aplicación en Español</h2>
            <p className="text-xl text-gray-700 mt-6">Descarga el formulario de aplicación en español.</p>
            <a
              href="https://www.actforchildren.org/wp-content/uploads/2024/04/CCAPApplication-Spanish.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-blue-600  text-white text-2xl px-10 py-5 rounded-lg hover:bg-blue-700 transition"
            >
              Descargar (Español)
            </a>
          </div>
         
        </div>
        <h1 className='text-red-500 pt-20 flex justify-center text-3xl font-bold '>Complete all forms before visiting daycare! </h1>
      </div>
    </div>
  );
};

export default Enroll;
