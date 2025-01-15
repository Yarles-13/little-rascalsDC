"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const programData = [
  { id: 1, name: 'Toddlers', age: '12 Months to 24 Months', image: '/icons/infant.png', animation: 'animate-wiggle' },
  { id: 2, name: 'Early Preschool', age: '2 to 3 Years', image: '/icons/toddler.png', animation: 'animate-wiggle' },
  { id: 3, name: 'Preschool', age: '3 to 4 Years', image: '/icons/girl-toddler.png', animation: 'animate-wiggle' },
  { id: 4, name: 'Pre-K', age: '4 to 5 Years', image: '/icons/children.png', animation: 'animate-wiggle' },
  { id: 5, name: 'Elementary', age: '12 years and younger', image: '/icons/young-child.png', animation: 'animate-wiggle' },
];

interface ShapeItemProps {
  name: string;
  age: string;
  shape: string;
  image: string;
  animation: string;
}

const ShapeItem: React.FC<ShapeItemProps> = ({ name, age, shape, image, animation }) => {
  const shapeStyles: Record<string, string> = {
    circle: 'w-36 h-36 sm:w-40 sm:h-40 md:w-56 md:h-56 p-6 bg-white flex items-center justify-center overflow-hidden shadow-lg',
    triangle: 'w-36 h-36 sm:w-40 sm:h-40 md:w-56 md:h-56 p-6 bg-yellow-400 clip-triangle flex items-center justify-center overflow-hidden shadow-lg',
    square: 'w-36 h-36 sm:w-40 sm:h-40 md:w-56 md:h-56 p-6 flex items-center justify-center overflow-hidden shadow-lg',
  };

  return (
    <div
      className="flex flex-col items-center justify-center space-y-8 py-8 px-6 sm:py-10 md:py-14"
      style={{
        backgroundImage: "url('/icons/Dotted.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className={`${shapeStyles[shape]} rounded-full ${animation}`}>
        <img src={image} alt={name} className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain" />
      </div>
      <p className="text-4xl font-bold text-center text-[#49b9f5]">{name}</p>
      <p className="text-gray-600 text-2xl text-center">{age}</p>
    </div>
  );
};

const Collage = () => {
  return (
    <div className="w-full bg-white mx-auto py-8 px-0 sm:py-12 md:py-16 relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0} 
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 2, spaceBetween: 20, centeredSlides: true },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {programData.map((program) => (
          <SwiperSlide key={program.id} className="flex justify-center items-center">
            <ShapeItem
              name={program.name}
              age={program.age}
              shape="circle"
              image={program.image}
              animation={program.animation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          top: 50%;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #735bdf, #5c47b2);
          color: white;
          border-radius: 50%;
          padding: 10px;
          transform: translateY(-50%);
        }
        .swiper-button-next {
          right: 10px;
        }
        .swiper-button-prev {
          left: 10px;
        }
        .swiper-pagination-bullet {
          width: 15px;
          height: 15px;
          background: #000;
          opacity: 0.8;
        }
        .swiper-pagination-bullet-active {
          background: #FFD700;
        }
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        .animate-wiggle {
          animation: wiggle 1s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Collage;
