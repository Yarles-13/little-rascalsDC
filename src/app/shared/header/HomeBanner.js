import Image from "next/image";
import { Permanent_Marker } from "next/font/google";

// Crayon-like Font
const crayonFont = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Banner = () => {
  return (
    <section className="relative h-[180px] overflow-hidden py-10 flex justify-center sticky sm:block md:hidden lg:hidden ">
      


      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Floating Star */}
        <div className="absolute top-20 left-40 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <div className="absolute w-full h-full  bg-transparent rounded-full opacity-60 animate-float"></div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
            alt="Star"
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 animate-spin-slow"
          />
        </div>

        {/* Floating Balloon */}
        <div className="absolute bottom-8 right-12 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-float ">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5258/5258049.png"
            alt="Balloon"
            className="w-full h-full p-2 "
          />
        </div>
      </div>

      {/* Overlay for Readability */}
      <div className="absolute inset-0 mix-blend-overlay"></div>

      {/* Banner Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 ">
        <h1 className={`text-4xl md:text-6xl text-center font-bold text-[#005249] animate-fade-in px-3 ${crayonFont.className}`}>
          Welcome to Little Rascals Daycare
        </h1>
        <p className={`text-lg md:text-2xl mt-2 text-[#005249] animate-fade-in ${crayonFont.className}`}>
          Where Kids Play and Learn
        </p>
      </div>
    </section>
  );
};

export default Banner;
