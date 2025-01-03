// import Image from 'next/image';

// const WelcomeSection = () => {
//   return (
//     <section
//       className="relative bg-fixed bg-cover bg-center py-32 px-6 md:px-12 lg:px-24"
//       style={{ backgroundImage: 'url(/assets/room1.jpg)' }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>  {/* Overlay for readability */}
      
//       <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div className="space-y-6 text-white">
//           <h1 className="text-5xl font-extrabold">
//           Quality Care 
//           </h1>
     
//           <p className="text-2xl font-semi-bold leading-relaxed">
//             A fully licensed home daycare center located in Cicero, IL. Our hours of operation are from 6:30 AM to 4:00 PM Monday through Friday.
//           </p>
//           <p className="text-2xl font-semi-bold leading-relaxed">
//             Please feel free to contact us and set up a time when you can come to tour our facility and meet us. We look forward to meeting you!
//           </p>
//           <a href="/contact" className="inline-block mt-6">
//             <button className="bg-[#FC9E4F] hover:bg-[#E87C3A] hover:scale-80 text-black font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
//               CONTACT US
//             </button>
//           </a>
//         </div>

//         <div className="grid grid-cols-2 gap-6">
//           <div className="bg-indigo-600 p-8 rounded-lg shadow-md text-center h-[260px] flex flex-col justify-center">
//             <h1 className="text-lg font-bold text-white">Fully-Licensed</h1>
//           </div>

//           <div className="relative h-[260px]">
//             <Image
//               src="/assets/MHGP1.jpg"
//               alt="Age-Appropriate"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg shadow-md"
//             />
        
//           </div>

//           <div className="relative mt-5 h-[260px] -translate-y-6">
//             <Image
//               src="/assets/MHGP2.jpg"
//               alt="Fun Learning"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg shadow-md"
//             />
  
//           </div>

//           <div className="bg-orange-400 p-8 rounded-lg shadow-md text-center h-[260px] flex flex-col justify-center">
//             <h1 className="text-lg font-bold text-white">Caring Teachers</h1>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WelcomeSection;
import Image from 'next/image';
import { FaHandsHelping, FaUsers, FaChalkboardTeacher, FaCheckCircle } from 'react-icons/fa';

const WelcomeSection = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center py-40 px-6 md:px-16 lg:px-32"
      style={{ backgroundImage: 'url(/assets/room1.jpg)' }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content Section */}
        <div className="space-y-8 text-white">
          <h1 className="text-6xl font-extrabold leading-tight tracking-wide">
            Quality Care You Can Trust
          </h1>

          <p className="text-xl leading-relaxed">
            We are a fully licensed home daycare center located in Cicero, IL. Our center operates from <strong>6:30 AM to 4:00 PM</strong>, Monday through Friday.
          </p>

          <p className="text-xl leading-relaxed">
            Come visit us for a tour and meet our caring staff. We are dedicated to providing a warm and nurturing environment for your little ones.
          </p>

          <a href="/contact" className="inline-block mt-8">
            <button className="bg-[#FC9E4F] hover:bg-[#E87C3A] hover:scale-105 text-black font-semibold py-4 px-10 rounded-lg shadow-2xl transition-all duration-300">
              Schedule a Visit
            </button>
          </a>
        </div>

        {/* Visual Highlights Section */}
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-indigo-700 p-8 rounded-lg shadow-xl text-center h-[280px] flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300">
            <FaCheckCircle size={50} className="text-white mb-4" />
            <h2 className="text-xl font-bold text-white">Fully Licensed</h2>
            <p className="text-sm text-gray-200 mt-3">Certified and trusted care.</p>
          </div>

          <div className="relative h-[280px] transform hover:scale-105 transition-all duration-300">
            <Image
              src="/assets/MHGP1.jpg"
              alt="Happy Kids"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="relative h-[280px] transform hover:scale-105 transition-all duration-300">
            <Image
              src="/assets/MHGP2.jpg"
              alt="Fun Activities"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="bg-orange-500 p-8 rounded-lg shadow-xl text-center h-[280px] flex flex-col items-center justify-center transform hover:scale-105 transition-all duration-300">
            <FaChalkboardTeacher size={50} className="text-white mb-4" />
            <h2 className="text-xl font-bold text-white">Caring Teachers</h2>
            <p className="text-sm text-gray-200 mt-3">Experienced and compassionate.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
