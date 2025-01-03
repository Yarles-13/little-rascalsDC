// const Banner = () => {
//   return (
//     <section className="relative bg-gradient-to-r from-blue-800 to-indigo-900 h-64 overflow-hidden">
//       {/* Background Animation */}
//       <div className="absolute inset-0">
//         {/* Moving Shapes */}
//         <div className="absolute top-10 left-10 w-16 h-16 bg-blue-300 rounded-full opacity-50 animate-float"></div>
//         <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-300 rounded-full opacity-50 animate-spin-slow"></div>
//       </div>

//       {/* Overlay for Contrast */}
//       <div className="absolute inset-0 bg-white/70"></div>

//       {/* Banner Content */}
//       <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 animate-fade-in">
//           Little Rascals Home Daycare
//         </h1>
//       </div>

//       {/* Cute SVG Animations */}
//       <div className="absolute inset-0 pointer-events-none">
//         <img
//           src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" // Replace with actual star SVG or icon
//           alt="Star"
//           className="absolute top-16 left-8 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 animate-spin-slow"
//         />
//         <img
//           src="https://cdn-icons-png.flaticon.com/128/5258/5258049.png" // Replace with actual balloon SVG or icon
//           alt="Balloon"
//           className="absolute bottom-12 right-12 w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 animate-float"
//         />
//       </div>
//     </section>
//   );
// };

// export default Banner;
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
    <section className="relative h-[150px] overflow-hidden">
      


      {/* Floating Elements */}
      <div className="absolute inset-0">
        {/* Floating Star */}
        <div className="absolute top-20 left-8 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <div className="absolute w-full h-full  bg-transparent rounded-full opacity-60 animate-float"></div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
            alt="Star"
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 animate-spin-slow"
          />
        </div>

        {/* Floating Balloon */}
        <div className="absolute bottom-8 right-12 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-float">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5258/5258049.png"
            alt="Balloon"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Overlay for Readability */}
      <div className="absolute inset-0 mix-blend-overlay"></div>

      {/* Banner Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className={`text-4xl md:text-6xl font-bold text-[#005249] animate-fade-in ${crayonFont.className}`}>
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
