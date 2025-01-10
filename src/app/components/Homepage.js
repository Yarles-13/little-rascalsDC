// "use client";
// import React from "react";
// import Border from "../shared/border/border";
// import Image from 'next/image';
// import Link from "next/link";


// const InfoCard = ({ image, title, description, href, buttonText }) => (
//   <div className="relative text-center bg-transparent p-6 sm:p-8  rounded-3xl transform transition duration-300 hover:shadow-3xl max-w-full sm:max-w-sm py-20 gap-y-10
//   md:border-none">
//     <div className="relative inline-block mb-6 w-[150px] h-[100px] p-20">
//       <Image
//         src={image}
//         alt={title}
//         layout="fill"
//         objectFit="cover"
//         className="rounded-lg"
//       />
//     </div>
//     <h2 className="text-xl sm:text-3xl font-bold text-black">{title}</h2>
//     <p className="mt-6 mb-10 text-base text-3xl sm:text-lg text-gray-700">{description}</p>

//     <Link href={href}>
//     <button className="w-[300px] h-[100px] mt-6 bg-[#2E8B57] text-center text-white text-3xl font-bold p-5 sm:px-6 sm:py-3 rounded-md hover:bg-terracotta ">
//       {buttonText}
//     </button>
//     </Link>

//   </div>
// );

// const Homepage = () => {
//   return (
//     <div className="bg-white">
//       <div className="flex flex-wrap justify-center py-40 gap-6 md:justify-evenly px-6 py-10 sm:px-20">

 
      
//         <InfoCard
//           image="/icons/family.png"
//           title="FOR PARENTS"
//           description="What to bring when your child starts daycare."
//           buttonText="Learn More"
//           href="/parents/what-to-bring"
//         />
  
        
//         <InfoCard
//           image="/icons/infant2.png"
//           title="ENROLLMENT"
//           description="Click here for links to enrollment forms and detailed instructions."
//           buttonText="Forms"
//           href="/enroll"
//         />
        
//         <InfoCard
//           image="/icons/schedule.png"
//           title="SCHEDULE A TOUR"
//           description="Visit our daycare and experience the warm, family environment firsthand."
//           buttonText="Learn More"
//           href="/contact"
//         />
//       </div>
     
//     </div>
//   );
// };

// export default Homepage;




'use client';
import React from "react";
import Image from 'next/image';
import Link from "next/link";

const InfoCard = ({ image, title, description, href, buttonText }) => (
  <div className="relative text-center bg-transparent p-6 sm:p-8 rounded-3xl transform transition duration-300 hover:shadow-3xl max-w-full sm:max-w-sm py-20 gap-y-10 md:border-none" style={{
    backgroundImage: "url('/icons/Dotted.png')",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
  }}>
    <div className="relative inline-block mb-6 w-[150px] h-[100px] p-20" >
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
    <h2 className="text-2xl sm:text-3xl font-bold text-black">{title}</h2>
    <p className="mt-6 mb-10  text-3xl  text-gray-700">{description}</p>

    <Link href={href}>
      <button className="w-[300px] h-[100px] mt-6 bg-[#2E8B57] text-center text-white text-3xl font-bold p-5 sm:px-6 sm:py-3 rounded-md hover:bg-terracotta">
        {buttonText}
      </button>
    </Link>
  </div>
);

const Homepage = () => {
  return (
    <div
      className="bg-white"
      
    >
      <div className="flex flex-col md:flex-row md:space-x-6 md:justify-evenly py-40 px-6 sm:px-20 space-y-6 md:space-y-0" >
        <InfoCard
          image="/icons/family.png"
          title="FOR PARENTS"
          description="What to bring when your child starts daycare."
          buttonText="Learn More"
          href="/parents/what-to-bring"
        />
        <InfoCard
          image="/icons/infant2.png"
          title="ENROLLMENT"
          description="Click here for links to enrollment forms and detailed instructions."
          buttonText="Forms"
          href="/enroll"
        />
        <InfoCard
          image="/icons/schedule.png"
          title="SCHEDULE A TOUR"
          description="Visit our daycare and experience the warm, family environment firsthand."
          buttonText="Learn More"
          href="/contact"
        />
      </div>
    </div>
  );
};

export default Homepage;
