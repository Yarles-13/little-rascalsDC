
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

// Updated to include specific animations for each item
const programData = [
  { id: 1, name: 'Toddlers', age: '12 Months to 24 Months', image: '/icons/infant.png', animation: 'hover:animate-crawl' },
  { id: 2, name: 'Early Preschool', age: '2 to 3 Years', image: '/icons/mother-and-child.png', animation: 'hover:animate-jump' },
  { id: 3, name: 'Preschool', age: '3 to 4 Years', image: '/icons/toddler.png', animation: 'hover:animate-cozy' },
  { id: 4, name: 'Pre-K', age: '4 to 5 Years', image: '/icons/children.png', animation: 'hover:animate-wiggle' },
  { id: 5, name: 'Summer Camp', age: 'All Ages', image: '/icons/infant2.png', animation: 'hover:animate-bounce' }
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
    circle: 'w-32 h-32 md:w-40 md:h-40 p-4  bg-yellow-400 flex items-center justify-center overflow-hidden',
    triangle: 'w-32 h-32 md:w-40 md:h-40 p-4  bg-yellow-400 clip-triangle flex items-center justify-center overflow-hidden',
    square: 'w-32 h-32 md:w-40 md:h-40 p-4  flex items-center justify-center overflow-hidden'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6">
      <div className={`${shapeStyles[shape]}`}>
        <img src={image} alt={name} className={`w-30 h-30 md:w-24 md:h-24 object-contain ${animation}`} />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-center">{name}</h3>
      <p className="text-gray-600 text-lg md:text-xl">{age}</p>
    </div>
  );
};

const Collage = () => {
  return (
    <div className="w-full bg-yellow-400 mx-auto p-12 relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {programData.map((program) => (
          <SwiperSlide key={program.id} className="p-8 md:p-14 flex justify-center">
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
          width: 50px;
          height: 50px;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border-radius: 30%;
          padding: 10px;
        }
        .swiper-button-next {
          right: 5px;
          padding: 20px;
        }
        .swiper-button-prev {
          left: 5px;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Collage;
