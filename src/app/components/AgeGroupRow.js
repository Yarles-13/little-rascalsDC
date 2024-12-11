import React from "react";
import AgeGroupCard from "./AgeGroupCard";

const AgeGroupRow = () => {
  const cohorts = [
    {
      imageSrc: "https://media.istockphoto.com/id/2158835167/photo/close-up-little-hand-of-child-baby-holding-hand-of-mother-a-newborn-holds-on-to-moms-dads.webp?a=1&b=1&s=612x612&w=0&k=20&c=DgE4sYlKSZKVpCV53Ui7pbkSLx8m9jv3oTv4cBF5VpU=", // Replace with actual image URLs
      title: "Infants",
      ageRange: "3 months - 1 year",
    },
    {
      imageSrc: "https://plus.unsplash.com/premium_photo-1723248028715-ee6c4b67e16c?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
      title: "Toddlers",
      ageRange: "1 - 2 years",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1591776353202-aed91f04fb81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91bmclMjBjaGlsZCUyMHBsYXlpbmd8ZW58MHx8MHx8fDA%3D", // Replace with actual image URLs
      title: "Young Child",
      ageRange: "2 - 3 years",
    },
    {
      imageSrc: "https://plus.unsplash.com/premium_photo-1681842143575-03bf1be4c11c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJlc2Nob29sfGVufDB8fDB8fHww", // Replace with actual image URLs
      title: "Preschool",
      ageRange: "3 - 5 years",
    },
    {
      imageSrc: "https://media.istockphoto.com/id/1916612837/photo/science-portrait-and-group-of-children-with-happiness-at-convention-expo-or-exhibition-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=osquI6AXGXApYoRlTn1zNarVNRou0E0d1sza-RadVxU=", // Replace with actual image URLs
      title: "School Aged",
      ageRange: "5 - 12 years",
    },
    
  ];

  return (
    <div className="flex flex-col items-center bg-gray-400 p-5">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6 text-white">We meet kids at their level
regardless of their age</h2>

      {/* Cards Container */}
      <div className="flex flex-wrap gap-6 justify-center">
        {cohorts.map((cohort, index) => (
          <AgeGroupCard
            key={index}
            imageSrc={cohort.imageSrc}
            title={cohort.title}
            ageRange={cohort.ageRange}
          />
        ))}
      </div>
    </div>
  );
};

export default AgeGroupRow;
