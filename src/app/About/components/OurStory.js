import React from 'react';
import Image from 'next/image';

const OurStory = () => {
  return (
    <section className="relative py-10 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30 transform -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-100 rounded-full blur-3xl opacity-30 transform translate-x-20 translate-y-20"></div>

        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">Our Story</h2>
          <p className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
            Nurturing young minds with love, care, and dedication since 2002.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-gray-900 leading-snug">
              A Passion for Care, A Commitment to Growth
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2002 by Rebeca Frausto, Little Rascals Daycare has been a safe haven for children to learn, play, and grow. With over 20 years of experience, Rebeca has created a warm, enriching environment where every child feels valued and loved.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Her passion for education and nurturing children is reflected in her continuous pursuit of professional certifications and unwavering commitment to quality care.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full text-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Learn More About Us
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src='/assets/MHGP2.jpg'
                alt="Rebeca with children"
                layout="responsive"
                width={600}
                height={400}
                className="object-cover w-full h-96"
              />
            </div>
            {/* Decorative Shape */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
