import React from "react";


const services = [
  {
    imageSrc: "https://via.placeholder.com/200", // Replace with actual image URL
    title: "Home-like Environment",
    description:
      "We create a cozy, welcoming space with excellent homemade traditional Mexican food. A place that feels like home.",
  },
  {
    imageSrc: "https://via.placeholder.com/200", // Replace with actual image URL
    title: "Safety and Security",
    description:
      "We treat your kids as our own, ensuring they are cared for with love and safety.",
  },
  {
    imageSrc: "https://via.placeholder.com/200", // Replace with an actual image URL
    title: "Bilingual Learning Through Play",
    description:
      "Children are exposed to a Spanish-speaking household, learning both English and Spanish through creative, fun, and interactive activities that foster curiosity and growth.",
  },
  {
    imageSrc: "https://via.placeholder.com/200", // Replace with an actual image URL
    title: "School Drop-Off & Pick-Up",
    description:
      "We provide safe and reliable drop-off and pick-up services to Colombus West / East Elementary, ensuring your child gets to and from school on time.",
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            {/* Circular Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
              <img
                src={service.imageSrc}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
