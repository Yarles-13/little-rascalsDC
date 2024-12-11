import React from "react";

interface AgeGroupCardProperties {
  imageSrc: string;
  title: string;
  ageRange: string;
}
const AgeGroudCard: React.FC<AgeGroupCardProperties> = ({imageSrc, title, ageRange}) => {
  return (
    <div className="flex flex-col items-center bg-green-50 p-4 rounded-xl shadow-md w-60">
      <div className="relative bg-gray-200 rounded-full p-2">
        <img src={imageSrc} alt={title} className='w-30 h-30 rounded-full object-cover' />
      </div>
      <h2 className="text-lg font-bold text-gray-500 mt-3">{title}</h2>
      <p className="text-sm text-gray-500">{ageRange}</p>
    </div>
  )
}

export default AgeGroudCard