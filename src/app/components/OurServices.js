"use client";
import React from "react";

const services = [
  {
    id: 1,
    image: "/assets/room1.jpg",
    title: "Home-Like Environment",
    description:
      "A cozy space with homemade Mexican food. We strive to create a warm environment that feels just like home.",
    bgColor: "bg-yellow-100",
  },
  {
    id: 2,
    image:
      "/assets/room1.jpg",
    title: "Bilingual Learning",
    description:
      "Children learn English and Spanish through creative activities like reading, singing, and play. Fun and immersive!",
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    image:
    "/assets/room1.jpg",
    title: "Reliable School Pick-Up",
    description:
      "Safe and reliable pick-up/drop-off services ensure your child gets to school and back home with a smile.",
    bgColor: "bg-pink-100",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gray-100">
      {/* Infinite Scrolling Background */}
      <div
        className="absolute inset-0 z-[-1] animate-scroll-bg"
        style={{
          backgroundImage: "url('/assets/bg-SVG.svg')",
          backgroundSize: "250px 250px",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-[2]">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`container mx-auto px-10 flex flex-col lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-20`}
          >
            {/* Image + Background Container */}
            <div className="relative w-full lg:w-1/3 h-[350px]">
              {/* Colored Background Container */}
              <div
                className={`absolute top-6 left-6 w-full h-full rounded-3xl z-0 ${service.bgColor}`}
                style={{
                  clipPath:
                    index % 2 === 0
                      ? "polygon(0% 0%, 100% 5%, 100% 95%, 0% 100%)"
                      : "polygon(0% 5%, 100% 0%, 100% 100%, 0% 95%)",
                }}
              />
              {/* Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="relative z-10 w-[85%] h-[85%] object-cover rounded-3xl shadow-xl mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Section - Glassmorphic Card */}
            <div
              className="relative bg-white/80 p-12 rounded-3xl shadow-2xl max-w-2xl hover:shadow-3xl transition-all duration-300"
              style={{
                backdropFilter: "blur(12px) saturate(120%)",
                WebkitBackdropFilter: "blur(12px) saturate(120%)",
              }}
            >
              <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
                {service.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mt-4">
                {service.description}
              </p>
              <button className="mt-8 bg-black hover:bg-gray-800 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
