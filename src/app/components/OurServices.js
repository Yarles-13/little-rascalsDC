import React from "react";
import { FaHome, FaShieldAlt, FaChild, FaBus } from "react-icons/fa"; // Importing cute icons

const services = [
  {
    icon: <FaHome className="text-yellow-500 text-5xl" />, // Replace with your desired icon
    title: "Home-like Environment",
    description:
      "We create a cozy, welcoming space with excellent homemade traditional Mexican food. A place that feels like home.",
  },
  {
    icon: <FaShieldAlt className="text-blue-500 text-5xl" />,
    title: "Safety and Security",
    description:
      "We treat your kids as our own, ensuring they are cared for with love and safety.",
  },
  {
    icon: <FaChild className="text-green-500 text-5xl" />,
    title: "Bilingual Learning",
    description:
      "Children are exposed both English and Spanish through creative, fun, and interactive activities",
  },
  {
    icon: <FaBus className="text-red-500 text-5xl" />,
    title: "School Drop-Off/Pick-Up",
    description:
      "We provide safe and reliable drop-off and pick-up to Colombus West / East Elementary Schools",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white sm:bg-red-500">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg  bg-gradient-to-b from-gray-50 to-white transition-transform transform hover:scale-105 hover:shadow-2xl "
          >

     
              <div className=" flex items-center justify-center group-hover:animate-bounce w-50 h-50 mb-4">{service.icon}</div>
      
            {/* Title */}
            <h1 className="text-lg font-semibold text-gray-800">
              {service.title}
            </h1>
            {/* Description */}
            <h4 className="text-lg text-gray-600 mt-2">{service.description}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
