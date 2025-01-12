'use client';

import React from 'react';
import Link from 'next/link';
import FAQ from "../contact/forms/FAQ";
import Image from "next/image";

const Enroll = () => {
  return (
    <div className="min-h-screen bg-[#d9d3c9] flex flex-col items-center py-10">
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="w-full md:w-[50%] lg:w-[60%] relative">
            <Image
              src="/assets/MHGP1.jpg"
              alt="Mother and child filling forms"
              className="rounded-lg shadow-2xl"
              width={1000} // Increase width
              height={750} // Increase height
              priority // Optimizes for page load
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="text-left max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-800 leading-relaxed">
              What to do
            </h2>
            <ul className="list-disc list-outside mt-8 space-y-6 text-3xl text-gray-700 pl-6">
              <li>Download forms below</li>
              <li>Fill out all forms</li>
              <li>Bring printed copies to visit</li>
            </ul>

            {/* Schedule Visit Button */}
            <Link href="/contact">
              <button className="mt-8 inline-block bg-gray-100 text-terracotta text-2xl font-semibold px-10 py-5 rounded-lg shadow-lg hover:bg-terracotta hover:text-white transition">
                Schedule a Visit
              </button>
            </Link>
          </div>
        </div>

        {/* Forms Download Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          {/* English Form */}
          <div className=" transition ease-in-out delay-100 p-12 rounded-lg text-center my-20">
            <h2 className="text-4xl font-semibold text-black">English</h2>
            <p className="text-3xl text-gray-700 mt-6">
              Download and complete forms before your visit.
            </p>
            <a
              href="https://www.actforchildren.org/wp-content/uploads/2024/03/IL444-3455-01242017-English-App-.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block  bg-terracotta  text-black hover:bg-white text-2xl px-10 py-5 rounded-lg transition"
            >
              Download
            </a>
          </div>

          {/* Spanish Form */}
          <div className=" transition ease-in-out delay-100 p-12 rounded-lg text-center my-20">
            <h2 className="text-4xl font-semibold text-black">Español</h2>
            <p className="text-3xl text-gray-700 mt-6">
              Descarga y completa antes de la visita.
            </p>
            <a
              href="https://www.actforchildren.org/wp-content/uploads/2024/04/CCAPApplication-Spanish.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block bg-terracotta text-black hover:bg-white  text-2xl px-10 py-5 rounded-lg hover:bg-red-500 transition"
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
