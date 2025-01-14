

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FiX } from 'react-icons/fi';

const teamMembers = [
  {
    name: 'Rebeca Frausto',
    title: 'Lead Caregiver',
    description: 'Rebeca is a certified childcare professional with over 10 years of experience in early childhood education.',
    certifications: ['CPR Certified', 'Child Development Associate (CDA)', 'Bilingual in English/Spanish'],
    image: '/images/rebeca.jpg',
  },
  {
    name: 'Rosy Avila',
    title: 'Assistant Caregiver',
    description: 'Rosy specializes in creative play and educational activities, ensuring kids have fun while learning.',
    certifications: ['CPR Certified', 'Early Childhood Education Certificate'],
    image: '/images/rosy.jpg',
  },
];

const TeamCarousel = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleSelectMember = (member) => {
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
  };

  return (
    <section className="bg-[#f8fbf4] flex flex-col items-center py-16 px-6 sm:px-12 md:px-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-12">Meet Our Team</h1>

      {/* Carousel Section */}
      <div className="relative flex space-x-6 overflow-x-auto scrollbar-hide">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="min-w-[200px] sm:min-w-[240px] md:min-w-[300px] cursor-pointer transform transition-transform"
            onClick={() => handleSelectMember(member)}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="text-center mt-6">
              <h2 className="text-xl sm:text-2xl font-semibold">{member.name}</h2>
              <p className="text-md sm:text-lg text-gray-600">{member.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Member View */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-8 sm:p-12 max-w-3xl w-full relative">
            <button
              className="absolute top-4 right-4 text-2xl sm:text-3xl text-gray-600 hover:text-gray-900"
              onClick={handleClose}
            >
              <FiX />
            </button>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={250}
                height={350}
                className="rounded-lg shadow-lg mb-6 lg:mb-0 lg:mr-8"
              />
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{selectedMember.name}</h2>
                <p className="text-lg sm:text-xl text-gray-700 mb-4">{selectedMember.title}</p>
                <p className="text-md sm:text-lg text-gray-600 mb-6">{selectedMember.description}</p>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Certifications</h3>
                <ul className="list-disc list-inside text-md sm:text-lg text-gray-700">
                  {selectedMember.certifications.map((cert, i) => (
                    <li key={i}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamCarousel;
