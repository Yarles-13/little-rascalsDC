"use client";

import React from 'react';
import Image from 'next/image';

const photoGallery = [
  '/wall-paintings/alphabet-tree.jpg',
  '/wall-paintings/apple-picking.jpg',
  '/assets/home-outside.jpg',
  '/assets/valentines-crafts-rosy.jpg',
  '/classroom-photos/girl-playing.jpg',
  '/classroom-photos/tadeo-playing.jpg',
];

const PhotoGallery = () => {
  return (
    <section className="w-full py-16">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mx-auto px-6 md:px-12 lg:px-20">
        {photoGallery.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg h-[200px] md:h-[300px] lg:h-[400px]"
          >
            <Image
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
