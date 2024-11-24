import React from "react";

interface Testimonial {
  imageSrc: string;
  name: string;
  quote: string;
  highlight?: boolean;
}

const testimonials: Testimonial[] = [
  {
    imageSrc: "https://via.placeholder.com/100", // Replace with actual image URL
    name: "Parent 1",
    quote: "The staff is amazing! My child loves the activities and the home-cooked meals.",
  },
  {
    imageSrc: "https://via.placeholder.com/100", // Replace with actual image URL
    name: "Parent 2",
    quote: "We’ve seen so much growth in our child’s Spanish and English skills. Highly recommend!",
  },
  {
    imageSrc: "https://via.placeholder.com/100", // Replace with actual image URL
    name: "Parent 3",
    quote: "The daycare feels like a second home. The safety and care they provide are unmatched.",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
        What Parents Are Saying
      </h2>
      <div className="hidden lg:flex justify-center gap-8 px-6 md:px-16">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-yellow-400 hover:text-gray-800 ${
              testimonial.highlight
                ? "bg-yellow-400 text-gray-800"
                : "bg-white border border-gray-200"
            } flex flex-col items-center space-y-4`}
          >
            {/* Quote */}
            <p className="text-lg italic font-medium transition-all duration-300 ease-in-out hover:text-xl hover:font-bold">
              {testimonial.quote}
            </p>
            {/* Circular Image */}
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name */}
            <p className="text-sm font-bold transition-all duration-300 ease-in-out">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center gap-8 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-yellow-400 hover:text-gray-800 ${
              testimonial.highlight
                ? "bg-yellow-400 text-gray-800"
                : "bg-white border border-gray-200"
            } flex flex-col items-center space-y-4`}
          >
            {/* Quote */}
            <p className="text-lg italic font-medium  ">
              {testimonial.quote}
            </p>
            {/* Circular Image */}
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Name */}
            <p className="text-sm font-bold transition-all duration-300 ease-in-out">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
