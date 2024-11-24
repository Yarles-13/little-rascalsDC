'use client'
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
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8 animate__animated animate__fadeInDown">
        Tour Our Daycare
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {photos.map((photo, index) => (
          <GalleryCard
            key={index}
            photo={photo}
            onClick={() => openModal(photo)}
          />
        ))}
      </div>
      <Modal photo={selectedPhoto} onClose={closeModal} />
    </section>
  );
};

export default GalleryPage;