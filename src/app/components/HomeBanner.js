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
const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#acb174] to-[#c0e1ee] h-64 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {/* Star with Circle */}
        <div className="absolute top-16 left-8 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <div className="absolute w-full h-full bg-[#d19bb1] rounded-full opacity-60 animate-float"></div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
            alt="Star"
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 animate-spin-slow"
          />
        </div>

        {/* Floating Balloon */}
        <div className="absolute bottom-12 right-12 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-float">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5258/5258049.png"
            alt="Balloon"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-white/60"></div>

      {/* Banner Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-2xl md:text-4xl font-extrabold text-[#005249] animate-fade-in">
          Welcome to Little Rascals Home Daycare
        </h1>
        <p className="text-sm md:text-lg text-[#005249] mt-2 animate-fade-in">
         Where kids play and learn
        </p>
      </div>
    </section>
  );
};

export default Banner;
