import React from "react";

interface ModalProps {
  photo: { src: string; caption: string } | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          className="absolute top-4 right-4 text-gray-800 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full h-auto rounded-md mb-4"
        />
        <p className="text-center text-gray-700 text-lg font-medium">
          {photo.caption}
        </p>
      </div>
    </div>
  );
};

export default Modal;
