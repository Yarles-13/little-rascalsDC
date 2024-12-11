"use client";
import GalleryCard from "./components/GalleryCard";
import Modal from "./components/Modal";
import { useGalleryModal } from "./components/useGalleryModal";
import { useState, useEffect } from "react";

const GalleryPage = () => {
  const photos = [
    {
      src: "https://via.placeholder.com/600", // Replace with an actual image
      caption: "Living Room - A cozy play area for kids with vibrant decor and toys.",
    },
    {
      src: "https://via.placeholder.com/600", // Replace with an actual image
      caption: "Kitchen - Where homemade traditional Mexican meals are lovingly prepared.",
    },
    {
      src: "https://via.placeholder.com/600", // Replace with an image of the baby sleeping room
      caption: "Baby Sleeping Room - A peaceful space for naps and rest.",
    },
    {
      src: "https://via.placeholder.com/600", // Replace with an image of the kids sleeping room
      caption: "Kids' Sleeping Room - Comfortable beds for a relaxing nap time.",
    },
    {
      src: "https://via.placeholder.com/600", // Replace with an image of the backyard
      caption: "Backyard - A sunny area for outdoor play and activities.",
    },
  ];

  const { selectedPhoto, openModal, closeModal } = useGalleryModal();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component renders only after mounting
  }, []);

  if (!isClient) return null; // Prevent rendering during server-side hydration

  return (
    <section className="relative py-16  bg-gradient-to-br from-orange-100 via-yellow-100 to-teal-100">
      {/* Top Banner */}
      <div className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/images/daycare-pattern.svg")' }}>
      </div>

      <div className="relative z-10">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
          Tour Our Daycare
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Take a virtual tour of our daycare. Discover the cozy spaces and vibrant areas where your child will thrive!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
          {photos.map((photo, index) => (
            <GalleryCard
              key={index}
              photo={photo}
              onClick={() => openModal(photo)}
            />
          ))}
        </div>
      </div>

      {/* Modal Component */}
      <Modal photo={selectedPhoto} onClose={closeModal} />
    </section>
  );
};

export default GalleryPage;
