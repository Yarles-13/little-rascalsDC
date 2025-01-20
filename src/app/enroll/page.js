
'use client';

import React from 'react';
import Link from 'next/link';
import FAQ from "../contact/forms/FAQ";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

const Enroll = () => {
  return (
    <div className="min-h-screen bg-[#f8fbf4] flex flex-col items-center py-10">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-[#37d281] leading-snug">
            Child Care Assistance (CCAP) Forms
          </h1>

        </div>

    
<div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 p-8 bg-[#f8fbf4] rounded-lg ">
  {/* Image Section */}
  <div className="w-full md:w-[50%] lg:w-[60%] relative">
    <Image
      src="/classroom-photos/kids-playing.jpg"
      alt="Mother and child filling forms"
      className="rounded-lg shadow-lg border-4 border-[#b3A3D8]"
      width={1000}
      height={500}
      priority
      style={{ objectFit: 'cover' }}
    />
  </div>

  {/* Content Section */}
  <div className="text-center max-w-2xl space-y-6 ">
    {/* Header */}
    <h2 className="text-5xl font-extrabold text-[#735bdf] leading-snug">
      What to Do
    </h2>

    {/* Description */}
    <p className="text-3xl text-gray-600 leading-relaxed">
      Follow these steps to make your visit:
    </p>

    {/* Steps List */}
    <ul className="list-disc list-inside mt-4 space-y-6 text-2xl text-gray-800 list-none font-semibold  ">
      <li>Schedule a visit</li>
      <li>Download forms below</li>
      <li>Fill out all forms</li>
      <li>Bring printed copies to your visit</li>
    </ul>

    {/* Schedule Visit Button */}
    <Link href="/contact">
      <button className=" mt-6 inline-block bg-[#735bdf] text-white text-lg font-medium px-8 py-4 rounded-lg shadow-[10px_10px_0px_3px_#dfbe31] hover:bg-[#49b9f5] hover:shadow-[10px_10px_0px_3px_#37d281] transition-transform transform hover:scale-105">
        Schedule a Visit
      </button>
    </Link>
  </div>
</div>



        {/* Forms Download Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-10">
          {/* English Form */}
          <div className="transition ease-in-out delay-100 p-12 rounded-lg text-center my-20  sm:bg-transparent md:bg-transparent lg:bg-[#e0e4d8]">
            <h2 className="text-4xl font-semibold text-black">English</h2>
            <p className="text-3xl text-gray-700 mt-6">
              Download and complete forms before your visit.
            </p>
            <a
              href="https://www.actforchildren.org/wp-content/uploads/2024/03/IL444-3455-01242017-English-App-.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center bg-gradient-to-r from-[#5c47b2] to-[#735bdf] text-white text-2xl font-bold px-10 py-5 rounded-lg shadow-lg hover:scale-105  hover:opacity-80 transition-all"
            >
              <FiDownload className="mr-3 text-3xl" />
              Download
            </a>
          </div>

          {/* Spanish Form */}
          <div className="transition ease-in-out delay-100 p-12 rounded-lg text-center my-20 sm:bg-transparent md:bg-transparent lg:bg-[#e0e4d8]">
            <h2 className="text-4xl font-semibold text-black">Español</h2>
            <p className="text-3xl text-gray-700 mt-6">
              Descarga y completa antes de la visita.
            </p>
            <a
              href="https://www.actforchildren.org/wp-content/uploads/2024/04/CCAPApplication-Spanish.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center bg-gradient-to-r from-[#5c47b2] to-[#735bdf] text-white text-2xl font-bold px-10 py-5 rounded-lg shadow-lg hover:scale-105 hover:opacity-80 transition-all"
            >
              <FiDownload className="mr-3 text-3xl" />
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
