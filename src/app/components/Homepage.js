// "use client";
// import React from "react";
// import Border from "../shared/border/border"
// import { FaGraduationCap, FaBookOpen, FaCalendarAlt } from 'react-icons/fa';

// const InfoCard = ({ icon, title, description, buttonText }) => (
//   <div className="relative text-center bg-transparent p-6 sm:p-8 rounded-3xl transform transition duration-300  hover:shadow-3xl  max-w-full sm:max-w-sm py-20 ">
//     <div className="relative inline-block mb-6">
//       <div className="bg-[#2E8B57] p-6 rounded-full border-8 border-[#06402B] shadow-md relative z-10">
//         {icon}
//       </div>
//       <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-0">
       
//       </div>
//     </div>
//     <h2 className="text-xl sm:text-3xl font-bold text-black">{title}</h2>
//     <p className="mt-6 mb-10 text-base text-2xl sm:text-lg text-gray-700">{description}</p>
//     <button className="mt-6 bg-[#2E8B57]  text-white p-5 sm:px-6 sm:py-3 rounded-full hover:bg-terracotta hover:scale-100">
//       {buttonText}
//     </button>
//   </div>
// );

// const Homepage = () => {
//   return (
//     <div className="bg-yellow-400">
//       <div className="  flex flex-wrap justify-center gap-6 md:justify-evenly px-6 py-10 sm:px-20">
//         <InfoCard
//           icon={<FaGraduationCap size={48} className="text-white" />}
//           title="FOR PARENTS"
//           description="What to bring when your child starts daycare."
//           buttonText="Learn More"
//         />
        
//         <InfoCard
//           icon={<FaBookOpen size={48} className="text-white" />}
//           title="ENROLLMENT"
//           description="Click here for links to enrollment forms and detailed instructions."
//           buttonText="Forms"
//         />
        
//         <InfoCard
//           icon={<FaCalendarAlt size={48} className="text-white" />}
//           title="SCHEDULE A TOUR"
//           description="Visit our daycare and experience the warm, family environment firsthand."
//           buttonText="Learn More"
//         />
//       </div>
//       <Border />
//     </div>
//   );
// };

// export default Homepage;

"use client";
import React from "react";
import Border from "../shared/border/border";
import Image from 'next/image';

const InfoCard = ({ image, title, description, buttonText }) => (
  <div className="relative text-center bg-transparent p-6 sm:p-8 rounded-3xl transform transition duration-300 hover:shadow-3xl max-w-full sm:max-w-sm py-20 gap-y-10
  md:border-none">
    <div className="relative inline-block mb-6 w-[150px] h-[100px] p-20">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <h2 className="text-xl sm:text-3xl font-bold text-black">{title}</h2>
    <p className="mt-6 mb-10 text-base text-2xl sm:text-lg text-gray-700">{description}</p>
    <button className="mt-6 bg-[#2E8B57] text-white p-5 sm:px-6 sm:py-3 rounded-full hover:bg-terracotta hover:scale-100">
      {buttonText}
    </button>
  </div>
);

const Homepage = () => {
  return (
    <div className="bg-yellow-400">
      <div className="flex flex-wrap justify-center gap-6 md:justify-evenly px-6 py-10 sm:px-20">
        <InfoCard
          image="/icons/family.png"
          title="FOR PARENTS"
          description="What to bring when your child starts daycare."
          buttonText="Learn More"
        />
        
        <InfoCard
          image="/icons/formIcon.png"
          title="ENROLLMENT"
          description="Click here for links to enrollment forms and detailed instructions."
          buttonText="Forms"
        />
        
        <InfoCard
          image="/icons/schedule.png"
          title="SCHEDULE A TOUR"
          description="Visit our daycare and experience the warm, family environment firsthand."
          buttonText="Learn More"
        />
      </div>
     
    </div>
  );
};

export default Homepage;
