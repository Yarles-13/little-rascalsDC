// import React from "react";
// import { FaHome, FaShieldAlt, FaChild, FaBus } from "react-icons/fa"; // Importing cute icons

// const services = [
//   {
//     icon: <FaHome className="text-yellow-500 text-5xl" />, // Replace with your desired icon
//     title: "Home-like Environment",
//     description:
//       "We create a cozy, welcoming space with excellent homemade traditional Mexican food. A place that feels like home.",
//   },
//   {
//     icon: <FaShieldAlt className="text-blue-500 text-5xl" />,
//     title: "Safety and Security",
//     description:
//       "We treat your kids as our own, ensuring they are cared for with love and safety.",
//   },
//   {
//     icon: <FaChild className="text-green-500 text-5xl" />,
//     title: "Bilingual Learning",
//     description:
//       "Children are exposed both English and Spanish through creative, fun, and interactive activities",
//   },
//   {
//     icon: <FaBus className="text-red-500 text-5xl" />,
//     title: "School Drop-Off/Pick-Up",
//     description:
//       "We provide safe and reliable drop-off and pick-up to Colombus West / East Elementary Schools",
//   },
// ];

// const ServicesSection = () => {
//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-white sm:bg-red-500">
//       <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
//         What We Offer
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center p-6 rounded-lg  bg-gradient-to-b from-gray-50 to-white transition-transform transform hover:scale-105 hover:shadow-2xl "
//           >

     
//               <div className=" flex items-center justify-center group-hover:animate-bounce w-50 h-50 mb-4">{service.icon}</div>
      
//             {/* Title */}
//             <h1 className="text-lg font-semibold text-gray-800">
//               {service.title}
//             </h1>
//             {/* Description */}
//             <h4 className="text-lg text-gray-600 mt-2">{service.description}</h4>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
import React from "react";
import Link from "next/link";
import { FaHome, FaSmile, FaBook, FaSchool } from "react-icons/fa"; // Replaced icons with daycare-friendly options

const services = [
  {
    icon: <FaHome className="text-[#d19bb1] text-5xl" />, // Updated icon color to pink
    title: "Home-like Environment",
    description:
      "We create a cozy, welcoming space with excellent homemade traditional Mexican food. A place that feels like home.",
  },
  {
    icon: <FaSmile className="text-[#c0e1ee] text-5xl" />, // Updated icon color to light blue
    title: "Safety and Security",
    description:
      "We treat your kids as our own, ensuring they are cared for with love and safety.",
  },
  {
    icon: <FaBook className="text-[#acb174] text-5xl" />, // Updated icon color to muted green
    title: "Bilingual Learning",
    description:
      "Children are exposed to both English and Spanish through creative, fun, and interactive activities.",
  },
  {
    icon: <FaSchool className="text-[#d19bb1] text-5xl" />, // Updated icon color to pink
    title: "School Drop-Off/Pick-Up",
    description:
      "We provide safe and reliable drop-off and pick-up to Columbus West/East Elementary Schools.",
  },
];

const ServicesSection = () => {
  return (
    <section className="pb-16 bg-[#D7EAF3]">
            {/* Bottom Banner */}
            <div className="bg-gray-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Over 20 Years of Service</h2>
        <p className="text-lg text-center mb-6">
          At Little Rascals Daycare, we take pride in our 20+ years of experience
          serving families. We are here to answer any questions you may have about
          the care that we provide.
        </p>
        <Link href="/about">
          <button className="bg-gray-300 text-blue-800 font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 hover:text-white transition">
            Learn More About Us
          </button>
        </Link>
      </div>


      <h2 className="text-center text-3xl font-bold mb-8 text-[#005249] py-10">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 mb-4">
              {service.icon}
            </div>
            {/* Title */}
            <h1 className="text-lg font-semibold text-[#005249]">
              {service.title}
            </h1>
            {/* Description */}
            <h4 className="text-md text-gray-700 mt-2">{service.description}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
