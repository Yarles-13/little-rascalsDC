"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const InfoCard = ({ image, title, description, href, buttonText }) => (
  <div
    className="relative text-center bg-transparent sm:p-8 rounded-3xl transform transition duration-300 flex-grow w-full md:border-none"
  >
    <div className="relative inline-block mb-6">
      <Image
        src={image}
        alt={title}
        width={150} // Default width
        height={150} // Default height
        className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] object-cover rounded-lg"
      />
    </div>
    <h2 className="text-xl sm:text-2xl font-bold text-[#49b9f5]">{title}</h2>
    <p className="mt-4 mb-8 text-lg sm:text-xl text-gray-700 font-semibold max-w-5xl">{description}</p>
    <Link href={href}>
      <button className="relative w-[180px] h-[60px] sm:w-[200px] sm:h-[80px] bg-[#735bdf] hover:bg-[#49bafg] text-center text-white text-lg sm:text-xl font-bold p-4 sm:px-6 rounded-md shadow-button transition duration-300 hover:shadow-button-hover">
        {buttonText}
      </button>
    </Link>
  </div>
);

const Homepage = () => {
  return (
    <div className="bg-[#f8fbf4] py-10">
      <div className="flex flex-col md:flex-row md:space-x-6 justify-center items-end md:items-end px-6 sm:px-10 space-y-8 md:space-y-0">
        <InfoCard
          image="/icons/family.png"
          title="FOR PARENTS"
          description="What to bring when your child starts daycare."
          buttonText="Learn More"
          href="/parents/what-to-bring"
        />
        <InfoCard
          image="/icons/formIcon.png"
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
