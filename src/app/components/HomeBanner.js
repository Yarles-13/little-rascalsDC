const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 h-64 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {/* Moving Shapes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-blue-300 rounded-full opacity-50 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-300 rounded-full opacity-50 animate-spin-slow"></div>
      </div>

      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Banner Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 animate-fade-in">
          Welcome to Little Rascals Daycare
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 animate-fade-in-delay">
          "Where Little Hands Create Big Dreams!"
        </p>
      </div>

      {/* Cute SVG Animations */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png" // Replace with actual star SVG or icon
          alt="Star"
          className="absolute top-16 left-8 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 animate-spin-slow"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/5258/5258049.png" // Replace with actual balloon SVG or icon
          alt="Balloon"
          className="absolute bottom-12 right-12 w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 animate-float"
        />
      </div>
    </section>
  );
};

export default Banner;
