'use client';

import React from 'react';

const photoGallery = [
  '/wall-paintings/alphabet-tree.jpg',
  '/wall-paintings/apple-picking.jpg',
  '/wall-paintings/elephant-and-monkey.jpg',
  '/wall-paintings/farm.jpg',
  '/assets/room1.jpg',
  '/assets/living-room.jpg',
];

const PhotoGallery = () => {
  return (
    <section className="w-full  py-16">
     
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mx-auto px-6 md:px-12 lg:px-20">
        {photoGallery.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg h-[200px] md:h-[300px] lg:h-[400px]"
          >
            <img
              src={photo}
              alt={`Gallery photo ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
