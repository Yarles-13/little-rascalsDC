import React from "react";
import AgeGroupCard from "./AgeGroupCard";

const AgeGroupRow = () => {
  const cohorts = [
    {
      imageSrc: "https://via.placeholder.com/80", // Replace with actual image URLs
      title: "Infants",
      ageRange: "3 months - 1 year",
    },
    {
      imageSrc: "https://via.placeholder.com/80", // Replace with actual image URLs
      title: "Toddlers",
      ageRange: "1 - 2 years",
    },
    {
      imageSrc: "https://via.placeholder.com/80", // Replace with actual image URLs
      title: "Young Child",
      ageRange: "2 - 3 years",
    },
    {
      imageSrc: "https://via.placeholder.com/80", // Replace with actual image URLs
      title: "Preschool",
      ageRange: "3 - 5 years",
    },
    {
      imageSrc: "https://via.placeholder.com/80", // Replace with actual image URLs
      title: "School Aged",
      ageRange: "5 - 12 years",
    },
    
  ];

  return (
    <div className="flex flex-col items-center bg-orange-700 p-5">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6 text-white">Programs</h2>
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
