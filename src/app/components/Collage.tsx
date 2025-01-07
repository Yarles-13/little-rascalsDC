// 'use client';

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';

// const programData = [
//   { id: 1, name: 'Toddlers', age: '12 Months to 24 Months', shape: 'circle', image: '/images/toddlers.jpg' },
//   { id: 2, name: 'Early Preschool', age: '2 to 3 Years', shape: 'square', image: '/images/early-preschool.jpg' },
//   { id: 3, name: 'Preschool', age: '3 to 4 Years', shape: 'triangle', image: '/images/preschool.jpg' },
//   { id: 4, name: 'Pre-K', age: '4 to 5 Years', shape: 'circle', image: '/images/pre-k.jpg' },
//   { id: 5, name: 'Summer Camp', age: 'All Ages', shape: 'triangle', image: '/images/summer-camp.jpg' }
// ];
// interface ShapeItemProps {
//   name: string;
//   age: string;
//   shape: string;
//   image: string;
// }

// const ShapeItem: React.FC<ShapeItemProps> = ({ name, age, shape, image }) => {
//   const shapeStyles: Record<string, string> = {
//     circle: 'w-36 h-36 rounded-full border-6 border-black flex items-center justify-center overflow-hidden',
//     triangle: 'w-36 h-36 bg-yellow-400 clip-triangle flex items-center justify-center overflow-hidden',
//     square: 'w-36 h-36 bg-red-400 rotate-6 border-4 border-green-400 flex items-center justify-center overflow-hidden'
//   };


//   return (
//     <div className="flex flex-col items-center justify-center space-y-5 py-30 px-10 border border-black">
//       <div className={`${shapeStyles[shape]}`}>
//         <img src={image} alt={name} className="w-full h-full object-cover" />
//       </div>
//       <h3 className="text-xl font-bold">{name}</h3>
//       <p className="text-gray-500">{age}</p>
//     </div>
//   );
// };

// const Collage = () => {
//   return (
//     <div className="w-full max-w-6xl mx-auto py-12">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         pagination={{ clickable: true }}
//         navigation={true}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 4 }
//         }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {programData.map((program) => (
//           <SwiperSlide key={program.id} className=''>
//             <ShapeItem
          
//               name={program.name}
//               age={program.age}
//               shape={program.shape}
//               image={program.image}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Collage;

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const programData = [
  { id: 1, name: 'Toddlers', age: '12 Months to 24 Months', shape: 'circle', image: '/images/toddlers.jpg' },
  { id: 2, name: 'Early Preschool', age: '2 to 3 Years', shape: 'square', image: '/images/early-preschool.jpg' },
  { id: 3, name: 'Preschool', age: '3 to 4 Years', shape: 'triangle', image: '/images/preschool.jpg' },
  { id: 4, name: 'Pre-K', age: '4 to 5 Years', shape: 'circle', image: '/images/pre-k.jpg' },
  { id: 5, name: 'Summer Camp', age: 'All Ages', shape: 'triangle', image: '/images/summer-camp.jpg' }
];

interface ShapeItemProps {
  name: string;
  age: string;
  shape: string;
  image: string;
}

const ShapeItem: React.FC<ShapeItemProps> = ({ name, age, shape, image }) => {
  const shapeStyles: Record<string, string> = {
    circle: 'w-40 h-40 rounded-full border-4 border-blue-400 flex items-center justify-center overflow-hidden',
    triangle: 'w-40 h-40 bg-yellow-400 clip-triangle flex items-center justify-center overflow-hidden',
    square: 'w-40 h-40 bg-red-400 rotate-6 border-4 border-green-400 flex items-center justify-center overflow-hidden'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <div className={`${shapeStyles[shape]}`}>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500">{age}</p>
    </div>
  );
};

const Collage = () => {
  return (
    <div className="w-full   mx-auto p-12 relative">
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
          <SwiperSlide key={program.id} className="p-14">
            <ShapeItem
              name={program.name}
              age={program.age}
              shape={program.shape}
              image={program.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          top: 50%;
          width: 50px;
          height: 50px;
          background: rgba(0, 0, 0, 0.5);
          color: red;
          border-radius: 50%;
          padding: 5px;
        }
        .swiper-button-next {
          right: 5px;
          padding: 10px;
          
        }
        .swiper-button-prev {
          left: 5px;
        }
      `}</style>
    </div>
  );
};

export default Collage;
