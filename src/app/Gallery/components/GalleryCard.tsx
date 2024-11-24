import React from "react";

interface GalleryCardProps {
  photo: { src: string; caption: string };
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ photo, onClick }) => {
  return (
    <div
      className="relative bg-white border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 animate__animated animate__zoomIn"
   
      onClick={onClick}
    >
      {/* Image */}
      <div className="w-full h-60 overflow-hidden rounded-md cursor-pointer">
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Caption */}
      <p className="mt-4 text-center font-medium text-gray-700">{photo.caption}</p>
    </div>
  );
};

export default GalleryCard;
