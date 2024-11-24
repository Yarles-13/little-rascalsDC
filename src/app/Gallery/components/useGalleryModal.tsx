import { useState } from "react";

export const useGalleryModal = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | { src: string; caption: string }>(
    null
  );

  const openModal = (photo: { src: string; caption: string }) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return {
    selectedPhoto,
    openModal,
    closeModal,
  };
};
