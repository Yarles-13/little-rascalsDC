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
    <section className="bg-[#d9d3c9]  flex flex-col items-center py-40">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-12 mt-20">Meet Our Team</h1>

      {/* Carousel Section */}
      <div className="relative flex space-x-6 overflow-hidden">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-72 cursor-pointer transform transition-transform "
            onClick={() => handleSelectMember(member)}
          >
            <Image
              src={member.image}
              alt={member.name}
              width={350}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="text-center mt-6">
              <h2 className="text-2xl font-semibold">{member.name}</h2>
              <p className="text-lg text-gray-600">{member.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Member View */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-12 max-w-4xl relative">
            <button
              className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-900"
              onClick={handleClose}
            >
              <FiX />
            </button>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={300}
                height={400}
                className="rounded-lg shadow-lg mb-8 lg:mb-0 lg:mr-12"
              />
              <div>
                <h2 className="text-5xl font-bold mb-4">{selectedMember.name}</h2>
                <p className="text-xl text-gray-700 mb-4">{selectedMember.title}</p>
                <p className="text-lg text-gray-600 mb-8">{selectedMember.description}</p>
                <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
                <ul className="list-disc list-inside text-lg text-gray-700">
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
