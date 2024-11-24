import React from "react";

interface AgeGroupCardProperties {
  imageSrc: string;
  title: string;
  ageRange: string;
}
const AgeGroudCard: React.FC<AgeGroupCardProperties> = ({imageSrc, title, ageRange}) => {
  return (
    <div className="flex flex-col items-center bg-amber-50 p-4 rounded-xl shadow-md w-40">
      <div className="relative bg-red-400 rounded-full p-2">
        <img src={imageSrc} alt={title} className='w-20 h-20 rounded-full object-cover' />
      </div>
      <h3 className="text-lg font-semibold text-gray-500 mt-3">{title}</h3>
      <p className="text-sm text-gray-500">{ageRange}</p>
    </div>
  )
}

export default AgeGroudCard