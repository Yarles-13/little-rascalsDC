import React from 'react';
import Image from 'next/image';


const OurStory = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
          <p className="mt-4 text-lg text-gray-600">
            Dedicated to nurturing and inspiring children since 2002.
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800">
              A Passion for Care
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Little Rascals Daycare was founded in 2002 by Rebeca Frausto. Over
              the past 20+ years, Rebeca has built a warm, home-based daycare
              that focuses on helping children grow, learn, and thrive in a
              nurturing environment.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Always striving for excellence, Rebeca continues to pursue
              certifications and adhere to professional and sanitary industry
              practices, ensuring every child's well-being is her top priority.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-lg">

              <Image
                src='/assets/rebeca.jpg'
                alt="Rebeca with children"
                layout="responsive"
                width={600}
                height={400}
                className="object-cover w-full h-96"
              />

            </div>
            {/* Decorative Shape */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
