// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const InfoCard = ({ image, title, description, href, buttonText }) => (
//   <div
//     className="relative text-center bg-transparent p-6 sm:p-8 rounded-3xl transform transition duration-300 hover:shadow-3xl max-w-full sm:max-w-sm py-40 gap-y-10 md:border-none "
//     style={{
//       backgroundImage: "url('/icons/Dotted.png')",
//       backgroundSize: "cover",
//       backgroundRepeat: "repeat",
//     }}
//   >
//     <div className="relative inline-block mb-6 w-[150px] h-[100px] p-20">
//       <Image
//         src={image}
//         alt={title}
//         fill
//         sizes="10vw"
//         style={{ objectFit: "cover" }}
//         className="rounded-lg shadow-lg"
//       />
//     </div>
//     <h2 className="text-2xl sm:text-3xl font-bold text-[#49b9f5]">{title}</h2>
//     <p className="mt-6 mb-10 text-xl sm:text-2xl text-gray-700">{description}</p>
//     <Link href={href}>
     
//       <button className="relative w-[300px] h-[100px] mt-6 bg-[#735bdf] hover:bg-[#DFBE31] text-center text-white text-xl sm:text-2xl font-bold p-5 sm:px-6 sm:py-3 rounded-md ">
//         {buttonText}
//       </button>
//     </Link>
//   </div>
// );

// const Homepage = () => {
//   return (
//     <div className="bg-white py-20">
//       <div className="flex flex-col md:flex-row md:space-x-6 md:justify-center items-center py-20 px-6 sm:px-20 space-y-8 md:space-y-0">
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
//           description="Fill out a form to visit our space"
//           buttonText="Learn More"
//           href="/contact"
//         />
//       </div>
//     </div>
//   );
// };

// export default Homepage;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const InfoCard = ({ image, title, description, href, buttonText }) => (
  <div
    className="relative text-center bg-transparent p-6 sm:p-8 rounded-3xl transform transition duration-300 max-w-full sm:max-w-sm py-40 gap-y-10 md:border-none"
    style={{
      backgroundImage: "url('/icons/Dotted.png')",
      backgroundSize: "cover",
      backgroundRepeat: "repeat",
    }}
  >
    <div className="relative inline-block mb-6 w-[150px] h-[100px] p-20">
      <Image
        src={image}
        alt={title}
        fill
        sizes="10vw"
        style={{ objectFit: "cover" }}
        className="rounded-lg "
      />
    </div>
    <h2 className="text-2xl sm:text-3xl font-bold text-[#49b9f5]">{title}</h2>
    <p className="mt-6 mb-10 text-xl sm:text-2xl text-gray-700">{description}</p>
    <Link href={href}>
      <button className="relative w-[300px] h-[100px] mt-6 bg-[#735bdf] hover:bg-[#49bafg] text-center text-white text-xl sm:text-2xl font-bold p-5 sm:px-6 sm:py-3 rounded-md shadow-button transition duration-300 hover:shadow-button-hover">
        {buttonText}
      </button>
    </Link>
  </div>
);

const Homepage = () => {
  return (
    <div className="bg-white py-20">
      <div className="flex flex-col md:flex-row md:space-x-6 md:justify-center items-center py-20 px-6 sm:px-20 space-y-8 md:space-y-0">
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
          description="Fill out a form to visit our space"
          buttonText="Learn More"
          href="/contact"
        />
      </div>
    </div>
  );
};

export default Homepage;
